import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import './reset.css'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header logo="./public/fire.png"/>
    <Content/>
    <Footer/>
  </React.StrictMode>
)
