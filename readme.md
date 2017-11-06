The RESTful service will allow users to create and read data for the time being. Update and Delete functionality will be added once the authorization becomes a requirement. 

Data model will be exposed to the application using REST interface. 

We use MongoDB for as our database and expose JSON response based on different routes that the user tries to access. 

The data is retrieved through authenticated requests which are validated through user credentials and JSON WEB TOKEN. 

The API follows Basic OAuth authentication.

The token expires after a certain period and has to be renewed by the user to make further requests. 