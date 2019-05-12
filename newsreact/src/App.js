import React, { Component } from 'react';
import { connect } from 'react-redux'
import Newsletter from './components/newsletter';

class App extends Component {
  render() {
  return (
  <div>
  <p>{this.props.count}</p>
  <button onClick={this.props.increment}>+</button>
  <Newsletter/>
  </div>
  );
  }
  }
  const mapStateToProps = state => {
  return { count: state.count };
  };

  const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({type: 'INCREMENT'}) };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);
