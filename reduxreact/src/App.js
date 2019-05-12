import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import mainRoute from './routes/home/mainRoute';

const div = styled.div`
display: flex;
justifyContent: center;
`
;

class App extends Component {
  render(){
    return (
      <div>
        <p className="number">{this.props.count}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: state };
  
};

  const mapDispatchToProps = dispatch => {
    return {
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'})
  
  };

};

  export default connect(mapStateToProps, mapDispatchToProps)(App);
