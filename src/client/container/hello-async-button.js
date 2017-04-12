// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'
import Button from '../component/button'

/*
  A container hooks up a Component (Button) with an Action (sayHelloAsync).
  Button has two props: {label: string, handleClick: Function}
  Note that sayHelloAsync(1234) is not a typical Action Creator
  which typically has signature (type: string, payload: any) => Function.
  It just takes the number to transmit, and launches the fetch
  (which in turn returns a Promise)
*/

/*
  mapStateToProps is a Container-connect method that takes the redux Store state,
  and returns the props that we need to pass to the Component to render the current state.
  Both state and props can be passed as arguments into mapDispatchToProps.

*/
const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
})

/*
  mapDispatchToProps takes a dispatch method as an argument, and returns the props that
  are to be passed to the Component that depend on the dispatch Action method. In our case,
  we only have one dispatch method so far (sayHelloAsync(num))
  Both state and props can be passed as arguments into mapDispatchToProps.


*/
const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)) },
})

/*
  In the end, it exports a function called
  connect(mapStateToProps: Function, mapDispatchToProps: Function)(Button)
  This is used by Redux to establish the connection?
*/
export default connect(mapStateToProps, mapDispatchToProps)(Button)
