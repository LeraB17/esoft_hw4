import './App.css'
import CountdownTimer from '#components/CountdownTimer/CountdownTimer'
import UserList from '#components/UserList/UserList'
import WindowSize from '#components/WindowSize/WindowSize'

function App() {
  return (
    <div className='container'>
      <CountdownTimer />
      <UserList className="block2" />
      <WindowSize />
    </div>
  )
}

export default App
