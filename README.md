# Anymate

This documentation can be used to maintain the web app. Anymate is a web tool that allows users to animate a 3D humanoid model with animations available. To then be downloaded and loaded into a 3D software. As well as the option to share it on the community hub so others can download your creation.

## Technology

React.js 17.0.2
React three fiber 7.0.27
Node.js 14.15.1
Firebase 9.8.1

## Getting started

To use this project locally, follow the steps below.
• Create a local folder where you initialize the github repo
• Then install all the necessary packages by typing “Npm install” in the terminal
• Next, to run the app, type “npm start” in the terminal, after which the web app will launch on a localhost server.
• If it doesn't open, browse to [http://localhost:3000] to view it in the browser.


### `Customize animations`
To change the animations, do the following.
• In public/anims you add the animation files (in type .glb or .gltf)
• In src/components/animations.json you will find the collection of local animations. Here you can enter the necessary data:
- “name” : {the name of the animation}
- “url”: {the link to the animation in the public/anims folder}

### `cloud storage`
To link your own cloud storage to the app, follow these steps:
• In src/firebase.js you copy your own cloud storage code that you have generated on Firebase
• Then in src/components/upload.js you change the storage name on line 24 to your storage

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
•	Creating a scene – three.js docs (threejs.org)
•	React Three Fiber Documentation (pmnd.rs)
•	React – A JavaScript library for building user interfaces (reactjs.org)
•	https://firebase.google.com/products/storage 

## Author
Omar.aghallaj@student.ehb.be
