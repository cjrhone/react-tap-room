import React from 'react';

function NewTapForm() {
  let _name = null;
  let _brand = null;
  let _price = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
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

export default NewTapForm;
