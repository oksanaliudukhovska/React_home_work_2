
import image from './assets/image.jpg'
import image2 from './assets/image2.jpg'

import './App.css'
import React from 'react'

function App() {
 const h1_2 = React.createElement(
  'h1',
  {id: 'header2section',
   style: {fontSize: 64, color: 'grey', margin: 0 }},
   'Hello from JS'
 )

 const p_2 = React.createElement(
  'p',
  {id: 'par2section',
    style: {fontSize: 50, color: 'darkgrey', margin: 0}},
   'photo is inspiration Created by JS' 
 )

 const img = React.createElement(
  'img',
  {id: 'image2section',
    style: {height: 500, width: 'auto'},
    src: image2,
    alt: 'photo'
  }
 )

  return (
    <>
      <h1 style={{fontSize: 64, color: 'grey', margin: 0}}>Hello JSX</h1>
      <p style={{fontSize: 50, color: 'darkgrey', margin: 0}}>photo is inspiration Created by JSX</p>
      <img src={image} alt="photo" style={{width: 'auto', height: 500}} />
      {h1_2}
      {p_2}
      {img}
    </>
  )
}

export default App
