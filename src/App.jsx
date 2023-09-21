import './App.css'
import Team from './Team'
import Count from './count'
import Posts from './posts'
import User from './user'

function App() {

  function handleClick() {
    alert('click handler working')
  }
  const handleClick2 = () => {
    alert('clicked button 2')
  }
  const last = (number) => {
    alert(number + 5)
  }

  return (
    <>
      <User></User>
      <Posts></Posts>
      <Team></Team>
      <Count></Count>

      <button onClick={handleClick}>click</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => {
        alert('clicked theird btn')
      }}>click3</button>
      {/* vejailla */}
      <button onClick={() => last(5)}>last btn</button>
    </>
  )
}


export default App
