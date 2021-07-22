import React from 'react'
import ReactDOM from 'react-dom'
//Adding BrowserRouter
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

//Wrapping BrowserRouter
ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'))
