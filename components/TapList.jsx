import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <div>
      <hr/>
      {props.tapList.map((thisTap, index) =>
        <Tap name={thisTap.name}
          brand={thisTap.brand}
          price={thisTap.price}
          key={index}/>
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
