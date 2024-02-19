import user from "../use.json"
import './App.css'

function App() {

  return (
    <main className='app'>
      <h1>About me:</h1>
      <div>
        Name:
          {user.name}
      </div>
      <div>
        css:
        {user.skills.css}
      </div>
      <ul>
        {user.hobbies.map((hobby) => {
                return(<li key={hobby}>{ hobby}</li>)    
        }
        )}
      </ul>

      <a href={`mailto:${user.email}`}>Email me</a>
    </main>
  )
}

export default App
