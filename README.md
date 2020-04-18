------Project Name-------
SIGNZY
-----Description--------
A simple Rest Api using Express and MongoDb with Node Environment

-------Installation--------
1:-clone this project using below url:
https://github.com/bhaskar4u/signzy.git

2:-Go to root Directory and run, npm install to install the dependencies

3:-Then run,npm start

4:- if you are getting error from mongoDB or mongoError then
start the mongo shell eg:
mongod --port 27017 --dbpath ~/data {this is my localMachine --dbpath}

5:-If you are getting "server started" and "mongoDB connected successfully" then you are ready to consume it.

------OPERATION---------
In this application I have created six different end-point to perform CRUD operation.

The base url is http://localhost:4000

1:-
end-point:'/addDevice'
Method:POST
for: Adding the device,using DeviceName,DeviceType and DeviceStatus
we can not add Device with same name it must be unique

2:-
end-point:'/allDeviceList'
Method:GET
for:Listing the all device

3:-
end-point:'/byDeviceType/:id'
Method:GET
for:Listing the Device List by DeviceName

4:-
end-point:'/deleteDevice'
Method:POST
for:Delete the Device by passing the id in raw body or urlencoded body

5:-
end-point:'/updateDevice'
Method:PUT
for:Update the device
