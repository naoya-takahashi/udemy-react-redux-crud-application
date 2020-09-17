import React from 'react';

function App() {
  // const greeting = 'Hi Tom!';
  // const dom = <h1 className='foo'>{greeting}</h1>
  // return dom;
  return (
    <React.Fragment>
      <label htmlFor='bar'>bar</label>
      <input type='text' onClick={() => {console.log('im am clicked')}}></input>
    </React.Fragment>
  );
}

export default App;
