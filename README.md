# FIDS Server setup 
Flight information display system Free 


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
```
Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`.


Handwritten by Abhishek Arora, pls provide credit while using this 
