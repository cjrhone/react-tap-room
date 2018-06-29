# Tap Room #

#### By _**CJ Rhone**_ 6/29/18


## Notes ##

A big component working on the tap-room is knowing the differences between react and angular and how to apply what I need on-screen. With angular, I'm still in the early learning phases, so I may need to return to this doc and update it in the future.

### Installation ###

`REACT` and `Angular` are both equal in installation/setup. They both require hefty amount of installations before use.

React requires `npm install react@15.5.4 react-dom@15.5.4 --save ` to install react and the react dom `npm install webpack@3.4.0 -g` to install webpack globally `npm install react-router-dom@4.0.0 --save` to install the router `$ npm install eslint -g` and `$ npm install eslint-plugin-react -g` to install linter, which is a debugger and requires quite a bit of configuring to work decently. And lastly react hot loader (HMR) which auto-updates our live server `npm install react-hot-loader@3.0.0-beta.7 --save-dev`

### Work Flow ###

Overall `REACT` has a better workflow to me. Even though we're combining Javascript, HTML and CSS into one file, it is streamlined for efficieny and doesn't require Promises, Services, NGModules, and many other configurations in Angular that take a bit of time. The only thing I'm still unsure about is the inclusion of `index.html` as a `template.ejs` and how to get that working -- but other than that the workflow is understandble:

 Create an `APP` which links to other components like a `Header` and `NewTapForm`, display APP onto `index.jsx`, import React, ReactDom, App, AppContainer and HashRouter. Configure or edit each piece as necessary

### Routing ###

`REACT` is the clear winner here thanks to react-router. A simple install: `npm install react-router-dom@4.0.0 --save` importing the HashRouter, Switch, Route and Link `import { HashRouter } from 'react-router-dom';` `import { Switch, Route } from 'react-router-dom';` `import { Link } from 'react-router-dom';` and the rest is smooth sailing. I just need to link to my destination ( similar to an anchor ) and create routers for them.

## Next Step ##

Because I'm unsure how to implement functionality
