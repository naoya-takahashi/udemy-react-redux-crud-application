import React, { Component } from 'react';

/* 関数(function)コンポーネント */
// function App() {
const App = () =>{
  return (
    <React.Fragment>
      <label htmlFor='bar'>bar</label>
      <input type='text' onClick={() => {console.log('im am clicked')}}></input>
    </React.Fragment>
  );
}

// /* クラス(class)コンポーネント */
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor='bar'>bar</label>
//         <input type='text' onClick={() => {console.log('im am clicked')}}></input>
//       </React.Fragment>
//     )
//   }
// }

export default App;
