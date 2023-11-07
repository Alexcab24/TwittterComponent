import '../src/App.css'



import Spinner from './components/Spinner'
import TwitterComponentApp from './components/TwitterComponentApp'
import { useFetch } from './hooks/useFetch'


const App = () => {

  const { api, isLoading } = useFetch(' https://randomuser.me/api/?results=3')
  return (
    <>
    {isLoading 
    ?
    <Spinner/>
    :
   <TwitterComponentApp api={api}/>
    }
 
    </>
   
  )
}

export default App
