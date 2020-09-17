import React from 'react';
import propTypes from 'prop-types';

const App = () =>{
  const profiles = [
    {name: 'taro', age: 10},
    {name: 'chie', age: 16},
    {name: 'Noname', age: 40},
]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  );
}

const User = (props) => {
return <div>Hi I am {props.name} and {props.age} years old!</div>
}

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
