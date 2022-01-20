import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';


function App() {
  const [btnmode, setbtnmode] = useState('dark')
  const [textareaStyle, settextareaStyle] = useState({ color: 'black', backgroundColor: 'white' })
  const [styles, setstyles] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [myAlerts, setmyAlerts] = useState(null)

  const showAlerts = (type, messege) => {
    setmyAlerts({
      type: type,
      messege: messege
    })
  }

  const btnClick = () => {
    if (btnmode == 'dark') {
      setbtnmode('light')
      setstyles({
        color: 'white',
        backgroundColor: 'black'
      })
      settextareaStyle({ color: 'white', backgroundColor: '#bb8989' })
      showAlerts('success', 'Switch to dark mode')
      setTimeout(() => {
        setmyAlerts(null)
      }, 5000);
    }
    else {
      setbtnmode('dark')
      setstyles({
        color: 'black',
        backgroundColor: 'white'

      })
      settextareaStyle({ color: 'black', backgroundColor: 'white' })
      showAlerts('success', 'Switch to light mode')
      setTimeout(() => {
        setmyAlerts(null)
      }, 5000);
    }
  }
  return (

    <Router>
      <Navbar btnClick={btnClick} btnmode={btnmode} />

      <Switch>
        <Route path="/home">
          <Alerts myAlerts={myAlerts} />
          <Textarea styles={styles} textareaStyle={textareaStyle} />
        </Route>

        <Router path="/about">
          <About />
        </Router>

      </Switch>





    </Router>


  );
}

export default App;
