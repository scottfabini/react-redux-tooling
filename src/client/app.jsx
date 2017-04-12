// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsync from './container/message-async'
import { APP_NAME } from '../shared/config'

/*
  The top-level app.jsx invokes Containers,
  Containers connect a Component with an Action upon the Store via a Reducer.
  That's redux in a nutshell. 
*/
const App = () =>
  <div>
    <h1>Greetings React!</h1>
    <h1> {APP_NAME} </h1>
    <Message />
    <MessageAsync />
    <HelloButton />
    <HelloAsyncButton />
  </div>

export default App
