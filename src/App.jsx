import './App.css'
import CountdownTimer from '#components/CountdownTimer/CountdownTimer'
import UserList from '#components/UserList/UserList'

function App() {
  return (
    <div className='container'>
      <CountdownTimer />
      <UserList />
    </div>
  )
}

export default App
