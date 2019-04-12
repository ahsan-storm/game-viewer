# Game Viewer
Game viewer is a game directory to find the `closest upcoming` or `closest results` game (if no upcoming games are available) 
## Prerequisite
    Node (v10.15.3 or greater)
    NPM (v6.4.1 or greater. Comes with node by default)
    Docker (Installation of docker is optional as it will be mentioned later)
    
## Running the project
First of all clone the project by the command:
```
git clone https://github.com/ahsan-storm/game-viewer.git
```

The api endpoints required in this project are CORS enabled. To bypass and use it this application there are two solutions:

### First Solution (Docker)

Install Docker locally on your machine by following this URL
```
https://docs.docker.com/install/
```

After installing run `docker-v`to verify the intalltion is succesful. Now run this command to start a proxy server locally

```
docker run -d --name cors-anywhere -p 30080:80 yasinuslu/cors-anywhere
```

This will run a local proxy server. To verify run `docker ps` in your terminal and a container should be running with name `cors-anywhere`. This is the default method used in this project, as it is safer to run our own server instead of relying on some third party server.

### Second Solution (Third Party Public Server)

If you don't want to install docker, and follow the first solution then you can use this public server to bypass cors. Follow these steps: 
```
Open the cloned project
Open the file src/constants/AppConstants.js
Change the constant PROXY_HOST to https://cors-anywhere.herokuapp.com/
```

### Install Dependencies
Open the cloned project and run `npm install` to download the required dependencies

### Run Project
Run `npm start`. This will run the project on `http://localhost:3000` by default

### Lint Code
Run `npx eslint src` to lint everything inside `src` directory

### Run Tests
Run `npm test` to run a test which ensures the project renders without crashing