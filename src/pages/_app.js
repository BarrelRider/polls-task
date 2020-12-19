import React from 'react';


import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/main.css'

const MyApp = ({Component, pageProps}) => {
   return <Component {...pageProps} /> 
}

export default MyApp