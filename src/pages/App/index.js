import React, { Fragment } from 'react'

var offers = {};
var dd = new Date();
for (var i=0; i< 10; i++) {
    offers[i] = {"id":i, "date": new Date(dd.setMinutes(dd.getMinutes() + i*10)), "amount": Math.random()*10,
    "bid": 9.5 + Math.random()};
}


const App = () => <Fragment>
          {
               Object.keys(offers).map( offer => {
                    console.log(offers[offer])
                    return( <p>{offers[offer].date.toString()} {offers[offer].amount}  </p> )
               }  )
          }
     </Fragment>

export default App