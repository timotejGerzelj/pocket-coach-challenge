import React, { Fragment, useState, useEffect } from 'react'

function generateOffer () {
     var offers = {};
     var dd = new Date();
     for (var i=0; i< 10; i++) {
          offers[i] = {"id":i, "date": new Date(dd.setMinutes(dd.getMinutes() + i*10)), "amount": Math.random()*10,
          "bid": 9.5 + Math.random()};
     }
     return offers
}

const App = () => {
     const [offers, updateOffers ] = useState([generateOffer()])
     useEffect(() => {
          const interval = setInterval(() => updateOffers( offers => ([...offers, generateOffer()])) , 5000)
          return () => {
               clearInterval(interval)
          };
     }, [])

     
     return <Fragment>
          <table>  
          <thead>
               <tr>
                    <th>bids</th>
                    <th>dates</th>
                    <th>amounts</th>
               </tr>
          </thead> 
          <tbody>
               {offers.map(offer => Object.keys(offer).map(o => <tr key={offer[o].bid}>
                    <td>{offer[o].bid}</td>
                    <td>{offer[o].date.toString()}</td>
                    <td>{offer[o].amount}</td>
               </tr>))}
          </tbody>
          </table>
     </Fragment>} 

export default App