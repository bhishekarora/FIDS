# FIDS Server setup 
Flight information display system  
Simple FIDS server written in Angular/Node/Mysql/Websockets for a small airport/lounge.


## Project setup
### Setup db 
Configure  a mysql/maria instance to listen on standard port with following creds
USER: "root",
PASSWORD: "root",
DB: "testdb",


### BAckend  Server on port env|| 8080
```
cd FIDS Server
npm i 
node server.js
```

### Socket  Server
```
Embedded in Backend server will expose on port 3000
```


### FIDS Client
```
cd FIDS Client
npm i
npm install -g angular-http-server
angular-http-server --path static -p 8081
```

### Ref Images

#### Alerts

![alerts](https://github.com/bhishekarora/FIDS/assets/11346102/269213cf-09d5-4564-83d1-cfbe38e0f505)

#### Admin Panel

Delete screens 
##
Update Screens
##
Search Screens
##
Disable Screens
##
Content update (Arrivals /Departures)
##
Ad advertisements to screens 
##

![adminpanel2](https://github.com/bhishekarora/FIDS/assets/11346102/4148b5b9-9879-4c48-baa2-fbc2b7fd36b0)

#### Screen
Multiple screens can be mapped for arrivals/baggage, currently API is hosted locally in data folder of SERVER,
but any kind of API with JSON or any other exchange can be plugged in.

![dep](https://github.com/bhishekarora/FIDS/assets/11346102/f52c1009-23fc-47ad-8177-f3952c8f12d5)

Handwritten by Abhishek Arora, reach out to me on arora.abhishek@outlook.com for a copy of codebase or support.
