import '../src/App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const App = () => {

 

  return (
    <section className='App'>
      < TwitterFollowCard
        userName='Alaah24'
        name='Alex Cabral'
      
     
      />

      < TwitterFollowCard
        userName='Ale.jsx'
        name='Eduardo Cabral'
    
    
      />

      < TwitterFollowCard
        userName='ElonMusk'
        name='Elon Musk'
   
      />
    </section>
  )
}

export default App
