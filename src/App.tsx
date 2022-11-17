import './App.css'
import React, { StrictMode, useState } from 'react'
import Main from './components/Main'


/** TODO List
 * Requirements : manipulate items / Type checking TS
 * Features Required : add item / edit item / remove item / validate item / fetch items list / data persistance
 * Global state ?
 * Persistance ?
 * Zustand/Recoil/Redux OR useContext()+useReducer()
 * Components : item as input field with checkbox to validate
*/

// NEED TYPING
// const CustomMsg = () => {return};

const App = () => {
  return (
    <StrictMode>
      <div className="App">
        <Main />
      </div>
    </StrictMode>
  )
}

export default App
