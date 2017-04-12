import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { helloEndpointRoute } from '../../shared/routes'

/*
  Actions
*/
export const SAY_HELLO = 'SAY_HELLO'
export const SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST'
export const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS'
export const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_FAILURE'

/*
  An Action Creator is a function that takes two parameters:
  type: string, payload: any) => action: Function
  The returned function has type and payload attributes.
*/
export const sayHello = createAction(SAY_HELLO)
export const sayHelloAsyncRequest = createAction(SAY_HELLO_ASYNC_REQUEST)
export const sayHelloAsyncSuccess = createAction(SAY_HELLO_ASYNC_SUCCESS)
export const sayHelloAsyncFailure = createAction(SAY_HELLO_ASYNC_FAILURE)

/*
  Instead of returning an Action, return a function that launches
  the fetch call. fetch returns a Promise, which we use to dispatch
  different actions depending the current state of our asynchronous call.
*/
export const sayHelloAsync = (num: number) => (dispatch: Function) => {
  dispatch(sayHelloAsyncRequest())
  return fetch(helloEndpointRoute(num), { method: 'GET' })
    // check for errors
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    // display the message (if one exists)
    .then((data) => {
      if (!data.serverMessage) throw Error('No message received')
      dispatch(sayHelloAsyncSuccess(data.serverMessage))
    })
    //
    .catch(() => {
      dispatch(sayHelloAsyncFailure())
    })
}
