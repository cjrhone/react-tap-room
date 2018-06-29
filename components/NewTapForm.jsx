import React from 'react';

function NewTapForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name' />
        <input
          type='text'
          id='brand'
          placeholder='Brand' />
        <textarea
          id='price'
          placeholder='Price' />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default NewTapForm;
