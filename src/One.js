import React, { Component } from 'react';

class One extends Component {
  constructor() {
    super();
    this.state = {
      name: 'You guys',
    };
    this.myClick = this.myClick.bind(this);
  }
  myClick = () => {
    alert('This from');
  };
  render() {
    const { name } = this.state;
    const { nameFromProps } = this.props;
    return (
      <div>
        <h1>
          I am from One {name} - {nameFromProps}
          <button onClick={this.myClick.bind(this)}>Click</button>
        </h1>
      </div>
    );
  }
}
//function One(props) {
//return <p> {props.nameFromProps}</p>;
//}

export default One;
