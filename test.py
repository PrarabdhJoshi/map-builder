from app import app
import unittest
from base64 import b64encode
import json

class FlaskTestCase(unittest.TestCase):
    #ensure that flask is setup correctly
    def test_application_status(self):
        tester = app.test_client(self)
        response = tester.get('/', content_type="html/text")
        self.assertEqual(response.status_code,200)

    def test_home_page_loads(self):
        tester = app.test_client(self)
        response=tester.get('/',content_type="html/text")
        self.assertTrue('This is the welcome page!!' in response.data)
    
    #testing the user login
    def test_login_basic_auth(self):
        tester = app.test_client(self)
        res = tester.get("/login", headers={"Authorization": "Basic {user}".format(user=b64encode("test_user:pasword"))})
        self.assertEqual(res.status_code,200)

    def test_login_basic_auth_fail(self):
        tester = app.test_client(self)
        res = tester.get("/login", headers={"Authorization": "Basic {user}".format(user=b64encode("test_user:paswrd"))})
        self.assertEqual(res.status_code,401)
        
    def test_generated_token(self):
        tester = app.test_client(self)
        res = tester.get("/login", headers={"Authorization": "Basic {user}".format(user=b64encode("pete:pasword"))})
        data = json.loads(res.data)
        print(app.config['SECRET_KEY'])
        #self.assertEqual(data["your_token"],"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBldGUiLCJleHAiOjE1MTAwMDE2Nzl9.6H6r3mPV12_rYQNAfrheUfmlkYgdN2qCy-QNwLwXEGk")
if __name__ == '__main__':
    unittest.main()