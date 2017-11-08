import pymongo
from credentials import user_info
client = pymongo.MongoClient("mongodb://"+user_info['username']+":"+user_info['password']+"@18.216.181.46/test_map_db") # defaults to port 27017

db = client.test_map_db

# print the number of documents in a collection
print db.venue.count()

