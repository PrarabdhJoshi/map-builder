from flask import Flask, jsonify
from flask import url_for, abort, make_response, request
from flask_pymongo import PyMongo
import json
import datetime
import jwt
from functools import wraps
import pymongo
from credentials import SECRET_KEY,user_info
from flask_cors import CORS
import re
from bson.objectid import ObjectId
from flask import request
from bson.son import SON
#from bson import ObjectID
#use the database map_venues
#use collection map_db
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# app.config['MONGO_DBNAME'] = 'map_db'
# #app.config['MONGO_URI'] = 'mongodb://localhost:27017/map_db'


client = pymongo.MongoClient("mongodb://"+user_info['username']+":"+user_info['password']+"@18.216.181.46/test_map_db") # defaults to port 27017

db = client.test_map_db

# print the number of documents in a collection
#print db.collection.count()


app.config['SECRET_KEY'] = SECRET_KEY

def check_token(f):
    @wraps(f)
    def decorated_check(*args,**kwargs):
        token = request.args.get('your_token')
        if not token:
            return jsonify({"Error: ":"This page requires an Access Token"})
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({"Eror":"The Token you entered is invalid"}),403
        return f(*args,**kwargs)
    return decorated_check


@app.route("/")
def welcome():
    return "This is the welcome page!!"

@app.route("/api/addvenue", methods=["POST"])
def put_data():
    #collection = mongo.db.venue
    collection = db.venue
    data = request.form.to_dict()
    #process this data hierarchially 
    data1={}
    accounts={}
    onboarding={}
    venue_meta={}
    company={}
    loc={}
    sales={}
    for key,value in data.iteritems():
        if(key=="agent" or key=="company_email" or key=="company_phone" or key=="wiki_link" or key=="calendar_link"):
            company[key]=value
        elif(key=="venue_phone" or key=="logo" or key=="photo" or key=="venue_street" or key=="venue_city" or key=="venue_state" or key=="venue_zip" or key=="venue_website"):
            venue_meta[key]=value
        elif(key=="proposal_template_link" or key=="web_access" or key=="evp_builder"):
            onboarding[key]=value
        elif(key=="stripe_account" or key=="stripe_activated"):
            accounts[key]=value
        elif(key=="lt" or key=="lng"):
            loc[key]=float(value)
        elif(key=="market_type" or key=="types"):
            sales[key]=value
        else:
            data1[key]=value

    data1["company"]=company
    data1["venue_meta"]=venue_meta
    data1["accounts"]=accounts
    data1["onboarding"]=onboarding  
    data1["sales"]=sales
    data1["loc"]=loc
    collection.insert(data1)
    return jsonify({'result':"Venue Added Succesfully","data":str(data)})

#Create the route for ADDING TEST Venues

@app.route("/api/get_venue/<string:short_name>", methods=["GET"])
#@check_token
def get_venue_by_name(short_name):
    search = re.compile(r"(.*)"+short_name+"(.*)")
    venue =  db.venue.find({"short_name":search})
    
    arr=[]
    for v in venue:
        v["_id"] = str(v["_id"])
        arr.append(v)
    if(venue):
        return jsonify(arr)#["venue_name"]
    else:
        return "Venue Not Found"

@app.route("/api/get_nearby", methods=["GET"])
#@check_token
def get_nearby():
    #search = re.compile(r"(.*)"+short_name+"(.*)")
    
    lat = float(request.args.get('lat'))
    lon = float(request.args.get('lon'))
    venue =  db.venue.find({"loc":SON([("$near", [lon, lat]),("$maxDistance",0.5)])})
    
    arr=[]
    for v in venue:
        if(v["loc"]["lt"]==lat and v["loc"]["lng"]==lon):
            continue
        v["_id"] = str(v["_id"])
        arr.append(v)
    if(venue):
        return jsonify(arr)#["venue_name"]
    else:
        return "Venue Not Found"


@app.route("/api/get_location/<string:location_name>", methods=["GET"])
#@check_token
def get_venue_by_location(location_name):
    search = re.compile(r"(.*)"+location_name+"(.*)",re.IGNORECASE)
    venue =  db.venue.find({"venue_meta.venue_city":search})
    arr=[]
    for v in venue:
        v["_id"] = str(v["_id"])
        arr.append(v)
    if(venue):
        return jsonify(arr)#["venue_name"]
    else:
        return "Venue Not Found"

@app.route("/api/venue_id/<string:id>", methods=["GET"])
#@check_token
def get_venue_by_id(id):
    
    venue =  db.venue.find({"_id":ObjectId(id)})
    arr=[]
    for v in venue:
        v["_id"] = str(v["_id"])
        arr.append(v)
    if(venue):
        return jsonify(arr)#["venue_name"]
    else:
        return "Venue Not Found"

@app.route("/api/get_venue/getall", methods=["GET"])
#@check_token
def get_all_venues():
    all_data=[]
    venues = db.venue.find()
    for v in venues:
        v["_id"] = str(v["_id"])
        all_data.append(v)
    return jsonify(all_data)


@app.route("/login")
def login():
    auth = request.authorization
    if auth and auth.password == 'pasword':
        token = jwt.encode({'username':auth.username, "exp":datetime.datetime.utcnow() + datetime.timedelta(minutes=35)},app.config['SECRET_KEY'])
        return jsonify({"your_token": token.decode('UTF-8')})
    return make_response('Either the Password or the Username Does not Exist', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})


if __name__ == "__main__":
    app.run(debug=True)