import React from 'react';
import Header from './Header';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import NewTapForm from './NewTapForm';
import Error404 from './Error404';
import PropTypes from 'prop-types';

function App(props){
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
        <Route exact path='/' component={TapList} />
        <Route path='/newtap' component={NewTapControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.object
};

export default App;
