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

function useOffers() {
    const [offers, updateOffers ] = useState([generateOffer()])
    useEffect(() => {
         const interval = setInterval(() => updateOffers( offers => ([...offers, generateOffer()])) , 5000)
         return () => {
              clearInterval(interval)
         };
    }, [])

    return {
        offers
    }
}
export default useOffers;