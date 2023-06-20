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

![alerts](https://github.com/bhishekarora/FIDS/assets/11346102/627019fe-b943-466f-abb8-18b9dcc0f86f)

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
![adminpanel2](https://github.com/bhishekarora/FIDS/assets/11346102/3a2e9d6f-4d56-4f70-8dca-e1dee0e2d846)

#### Screen

![dep](https://github.com/bhishekarora/FIDS/assets/11346102/1adefdf7-6ea3-4e86-9c00-a28d015612a4)

Handwritten by Abhishek Arora, reach out to me on arora.abhishek@outlook.com for a copy of codebase or support.
