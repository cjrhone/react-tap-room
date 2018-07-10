import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <TapList tapList={props.tapList} />
    </div>
  )
}

Admin.propTypes = {
  tapList: PropTypes.array
};

export default Admin;
