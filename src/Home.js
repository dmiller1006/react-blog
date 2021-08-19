import { useState } from 'react'

const Home = () => {
  // let name = 'Max'
  // array deconstructing to handle two values from useState useState => value, function to rerender
  const [name,setName] = useState('max')
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('sergio')
    setAge(34)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>His name is { name } and he is { age } years old.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;