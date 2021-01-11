import './App.css';

function App() {
  const profiles = [
    { name: "take", age: 30 },
    { name: "masa" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  );
}

function User(props) {
  return (
    <div>
      NAME: {props.name}<br />
      AGE: {props.age}
      <hr />
    </div>
  )
}

User.defaultProps = {
  age: "NoAge"
}

export default App;
