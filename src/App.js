import React from 'react';
import Header from './app/components/header';
import Sidebar from './app/components/Sidebar';
import Mail from './app/components/Mail';
import EmailList from './app/components/EmailList';
import './App.css';
import SendMail from './app/components/SendMail';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';

function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen);

  return (
    <Router>
      <div className="app">
        <Header/>
        <div class="app__body">

        
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail/>
            </Route>
            <Route path="/" >
              <EmailList/>
            </Route>
          </Switch>
          </div>
          {sendMessageIsOpen && <SendMail/>}
      </div>
    </Router>
  );
}

export default App;
