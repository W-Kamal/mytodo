import './App.css'
import React, { useState } from 'react'

import { item } from '../Types'


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

const App: React.FC = () => {
  const [itemsList, setItemsList] = useState([])

  return (
    <div className="App">
      {(itemsList) &&
        itemsList.map((item) => (
          console.log(`test : `)
          // NEED TYPING
          //<TodoItem></TodoItem>
        ))}
    </div>
  )
}

export default App
