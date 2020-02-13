import React, { Fragment } from 'react'

var offers = {};
var dd = new Date();
for (var i=0; i< 10; i++) {
    offers[i] = {"id":i, "date": new Date(dd.setMinutes(dd.getMinutes() + i*10)), "amount": Math.random()*10,
    "bid": 9.5 + Math.random()};
}


const App = () => <Fragment>
          <table>  
          <thead>
               <tr>
                    <th>bids</th>
                    <th>dates</th>
                    <th>amounts</th>
               </tr>
          </thead> 
          <tbody>
          {
               Object.keys(offers).map( offer => {
                    return( <tr key={offers[offer].bid} >
                              <td>{offers[offer].bid}</td>
                              <td>{offers[offer].date.toString()}</td>
                              <td>{offers[offer].amount}</td>
                         </tr>)
               }  )
          }
          </tbody>
          </table>
     </Fragment>

export default App