# React Data Visualisation For Jaga-Me

check the live version [here](http://jaga.surge.sh/)

### Tech stack

- **React** -  frontend/view library
- **Redux** -  state management library
- **Axios** - For HTTP client
- **Recharts** - Charting Library

### Setup and Run

- `$ git clone https://github.com/rohitdaryanani/jaga.git && cd github ` will download the app and cd to the folder once done.

- `npm install` - to install dependencies.
- `npm start` - Runs the app in development mode.
- `npm run build` - Builds the app for production to the build folder.


### Questions

- packages/libraries used.
  - [axios](https://github.com/mzabriskie/axios) - to handle ajax request
  - [bootstrap](https://v4-alpha.getbootstrap.com/) - for quick css styles and ui
  - [react](https://facebook.github.io/react/) - awesome view library
  - [redux](http://redux.js.org/) - state management library (Moslty because I'm already familiar with it. But is interested in MobX seems fun)
  - [react-redux](https://github.com/reactjs/react-redux) - to use react with redux
  - [redux-saga](https://github.com/redux-saga/redux-saga) - middleware to handle promises
  - [recharts](http://recharts.org/#/en-US/) - react charting library
  - [recharts](http://recharts.org/#/en-US/) - react charting library
  - [react-calendar-heatmap](https://github.com/patientslikeme/react-calendar-heatmap) - heatmap library
  - [create-react-app](https://github.com/facebookincubator/create-react-app) - react project generator by facebook this handles the initial file struture and zero configuration
  - [surge](https://surge.sh/) - for deploying frontend apps

- file structure 

  - Top Level
  ```
  ├── README.md
  ├── build
  ├── node_modules
  ├── package.json
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  └── src
      ├── actions
      ├── components
      ├── containers
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── reducers
      ├── sagas
      └── registerServiceWorker.js
  ```
  - build - is the transpiled and minified source for the project and is used for deployment
  - src - is where are code is and is divided into 4 folders
    - containers - parent element of the component and where interaction with the state and actions occurs. I'm using feature folder style each feature has its own folder with the js and CSS file
    - components - are dumb and mostly used for rendering data
    - actions - where the interaction of our ui with the state
    - reducers - our source of truth/state
    - sagas - handles our API calls

 - prepare the app for production
  - create-react-app comes with a built in script to build, this handles our transpiling and minifying our code into a single js and CSS file. All we have to do is upload the build folder.
  For this project, I'm using surge for deployment.
