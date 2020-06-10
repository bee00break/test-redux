import React from 'react';
import PropTypes from 'prop-types'

// function App() {
//   return <div><h1>Hello, World!</h1></div>;
// }


// class App extends React.Component {
//   render(){
//     return(
//       <div><h1>Hello, World!</h1></div>
//     )
//   }
// }

const App = () =>{
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 20},
    {name: "Hanako"}
  ]
  return(
    <div>
      {
        profiles.map((profile, index) =>{
          return <User name={profile.name} age={profile.age} key={`profile_${index}`}/>
        })
      }
    </div>
  )
}

const User = (props) =>{
  return <div>Hi, I am {props.name}! and {props.age} years old.</div>
}

//デフォルト
User.defaultProps = {
  age: 1
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,//値を設定してないとworningが出る　デフォルトが設定されていればworningはでない
}

export default App;
