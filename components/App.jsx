import React from 'react';
import Header from './Header';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import NewTapControl from './NewTapControl';
import Error404 from './Error404';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
  }

  handleAddingNewTapToList(newTap){
    var newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }

  render(){
    return(
      <div>
        <style jsx global>{`
          body {
            font-family: Helvetica;
          }
          .box {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            margin-bottom: 10px;
          }
          .box:hover {
            border-bottom: 2px solid #ccc;
            color: grey;
            outline: 1;
          }
          a {
            color: #888;
            text-decoration: none;
          }

          img {
            width: 100px;
            height: auto;
          }
        `}</style>
        <div style={{margin: '19px auto 0', width: 142}}>
          <a href="https://medium.com/" target="_blank">
            <div className="box">
            </div>
          </a>
        </div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TapList tapList={this.state.masterTapList} />} />
          <Route path='/newtap' render={()=><NewTapControl onNewTapCreation={this.handleAddingNewTapToList} />} />
          <Route path='/admin' render={() =><Admin tapList={this.state.masterTapList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
