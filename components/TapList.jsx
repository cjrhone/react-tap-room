import React from 'react';
import Tap from './Tap';

var masterTicketList = [
  {
    name: 'Royal Crowne',
    brand: 'Scotch',
    price: '9.99'
  },
  {
    name: 'Grey Goose',
    brand: 'Vodka',
    price: '13.89'
  },
  {
    name: 'Honey Whisky',
    brand: 'Jack Daniels',
    price: '18.99'
  }
];


function TapList(){
  return(
    <div>
      <hr/>
      {masterTicketList.map((tap, index) =>
        <Tap name={tap.name}
          brand={tap.brand}
          price={tap.price}
          key={index} />
      )}
    </div>
  );
}

export default TapList;
