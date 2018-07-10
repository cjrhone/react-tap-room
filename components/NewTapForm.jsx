import React from 'react';
import PropTypes from 'prop-types';

function NewTapForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    props.onNewTapCreation({name: _name.value, brand: _brand.value, price: _price.value});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <textarea
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;
