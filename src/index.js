/** @format */

const func = function (str) {
  document.getElementById('app').innerHTML = str;
};
func('我现在在使用Babel!');

// const func = async (str) => {
//   document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');

// import bar from './utils';
// const sum = bar(1, 2);
// console.log(sum);

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Foo from './components/Foo';
// render(<Foo />, document.getElementById('app'));

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// class App extends Component {
//   handleClick = () => import(/* webpackChunkName: "Home" */ './containers/Home');
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>async</button>
//       </div>
//     );
//   }
// }
// render(<App />, document.getElementById('app'));

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// class App extends Component {
//   state = {
//     home: '',
//   };
//   handleClick = () => {
//     import(/* webpackChunkName: "Home" */ './containers/Home').then((module) => {
//       this.setState({
//         home: module.default,
//       });
//     });
//   };
//   render() {
//     const Home = this.state.home;
//     return (
//       <div>
//         <button onClick={this.handleClick}>async</button>
//         {this.state.home && <Home />}
//       </div>
//     );
//   }
// }
// render(<App />, document.getElementById('app'));
