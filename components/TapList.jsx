import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props){
  console.log(props.tapList);
  return (
    <div>
      <hr/>
      {props.tapList.map((thisTap) =>
        <Tap name={thisTap.name}
          brand={thisTap.brand}
          price={thisTap.price}
          key={thisTap.id}/>
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
