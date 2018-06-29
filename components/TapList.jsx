import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image no displaying. WTF!'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'we have no idea dude'
  }
];


function TapList(){
  return(
    <div>
      <hr/>
      {masterTicketList.map((tap, index) =>
        <Ticket name={tap.name}
          brand={tap.brand}
          price={tap.price}
          key={index} />
      )}
    </div>
  );
}

export default TapList;
