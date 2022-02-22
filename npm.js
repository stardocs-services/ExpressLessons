//npm -global command, comes installed with node
// npm --v or npm --version

//local dependency - use it only in this project
// npm i <packageName>

//global dependency - use it globally
// npm install -g <packageName>
// sudo npm install -g <packageName>

//npm package.json file
//npm init -y

//npm install <packageName> -D
//dev dependency - only appears in development


//lodash test

const lodash = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);

//if on a new pc, just run npm install and the dependencies will be installed again