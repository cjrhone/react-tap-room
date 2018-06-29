import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return(
    <div>
      <style global jsx>{`
        div {
          background-color: #FFB81C;
        }
        h3:hover {
          background-color: grey;
        }
      `}</style>
      <h3>{props.name} - {props.brand}</h3>
      <p><em>{props.price}</em></p>
      <hr/>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string
};

export default Tap;
