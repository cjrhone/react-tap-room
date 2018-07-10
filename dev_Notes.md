# Tap Room #

#### By _**CJ Rhone**_ 6/29/18


## Notes ##

A big component working on the tap-room is knowing the differences between react and angular and how to apply what I need on-screen. With angular, I'm still in the early learning phases, so I may need to return to this doc and update it in the future.

### Installation ###

`REACT` and `Angular` are both equal in installation/setup. They both require hefty amounts of installations before use.

React requires `npm install react@15.5.4 react-dom@15.5.4 --save ` to install react and the react dom `npm install webpack@3.4.0 -g` to install webpack globally `npm install react-router-dom@4.0.0 --save` to install the router `$ npm install eslint -g` and `$ npm install eslint-plugin-react -g` to install linter, which is a debugger and requires quite a bit of configuring to work well. And lastly react hot loader (HMR) which auto-updates our live server `npm install react-hot-loader@3.0.0-beta.7 --save-dev`

Additional:
`$ npm install prop-types@15.5.10 --save`
for including prop-types.
`$ npm install webpack-dev-server@2.5.0 -g
$ npm install webpack-dev-server@2.5.0 --save-dev`
A different version of webpack, depending on necessity

`npm install html-webpack-plugin@2.29.0 --save-dev`
dependency needed for HMR

### Work Flow ###

Overall `REACT` has a better workflow to me. Even though we're combining Javascript, HTML and CSS into one file, it is streamlined for efficieny and doesn't require Promises, Services, NGModules, and many other configurations in Angular that take a bit of time. The only thing I'm still unsure about is the inclusion of `index.html` as a `template.ejs` and how to get that working -- but other than that the workflow is understandble:

 Create an `APP` which links to other components like a `Header` and `NewTapForm`, display APP onto `index.jsx`, import React, ReactDom, App, AppContainer and HashRouter. Configure or edit each piece as necessary

### Routing ###

`REACT` is the clear winner here thanks to react-router. A simple install: `npm install react-router-dom@4.0.0 --save` importing the HashRouter, Switch, Route and Link `import { HashRouter } from 'react-router-dom';` `import { Switch, Route } from 'react-router-dom';` `import { Link } from 'react-router-dom';` and the rest is smooth sailing. I just need to link to my destination ( similar to an anchor ) and create routers for them.

## Next Step ##

### 6/29/18
Because I'm unsure how to implement functionality, my first objective will be to display my main `App` and `Header`. Stretch goal will be to include a clickable link that routes to `NewTapForm` with input boxes.

### 7/10/18
Development this week will consist mostly of lifting states, as in, passing information from one component to another. Because of the "data down, action up" method React and Angular follow, we have to create methods within the app that passes information to the parent. In this case, the parent of TapList, NewTapControl and NewTapForm will be rendered through the `App` component. ( as seen in our diagram)

Firstly, In our `NewTapControl` component we're creating `handleTroubleshootingConfirmation` to set our `formVisibleOnPage: true` once the ConfirmationQuestions have been confirmed. Our `NewTapForm` is instantiated upon confirmation as `{currentlyVisibleContent}`

Second, In our `NewTapForm` component we will be creating user inputted refs, and on form submit we're running the function `handleNewTapFormSubmission` which pushes our information through a function `props.onNewTapCreation`  -- those values are imported through `NewTapControl` to  `App`

Finally our  `App` component is where we're putting everything together. In our `<Route exact path='/'` we are rendering our current `masterTapList`, which is also being rendered on our Admin component `<Route path='/admin'`. Here we are also creating a route for `<Route path='/newtap'`. Remember `props.onNewTapCreation` which pushes our information? When that is called -- we run the method `handleAddingNewTapToList` which slices the original masterTapList, pushes user inputted newTap information, and sets the state of masterTapList as the newest, most updated list. ( i.e: `this.setState({masterTapList: newMasterTapList});`)
