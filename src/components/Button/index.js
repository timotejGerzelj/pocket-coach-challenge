import React, { Fragment, useState, useEffect } from 'react'

const Button = () => {
    const [ loading, updateLoading ] = useState(false)
    useEffect ( () => {
        const wait =  setTimeout( ()  => updateLoading(false), 2000)
        return () => clearTimeout(wait)
    },[loading])
    return (
    <button disabled={loading} onClick={()  => updateLoading(true)} >{loading ? 'loading': 'update'}</button>
    )
}

export default Button