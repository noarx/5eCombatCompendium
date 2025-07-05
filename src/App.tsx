import ResourceTracker from './components/ResourceTracker'
import CharacterHeader from './components/CharacterHeader'
import './App.css'

export default function App() {
  return (
    <>
      <div className='wrapper'>
        <div className='dice-tray'>
          
        </div>
        <div className='character-tracker'>
          <CharacterHeader />
        </div>
      </div>
    </>
  )
}