import { useEffect, useState } from 'react'
import { SignIn } from './components/signIn/signIn'
import { SignUp } from './components/signUp/signUp'
import Page from './pages/page'

export default function App() {
    const [ isSignIn, setIsSignIn ] = useState(false)
    const [ content, setContent ] = useState('')
    const [ accountStatus, setAccountStatus ] = useState(true)
  
    const handleChange = () => {
      setAccountStatus(false)
    }
  
    useEffect( () => {
  
      if (isSignIn) {
        setContent(<Page/>)
      } else if(!isSignIn){
        setContent(<SignIn setIsSignIn={setIsSignIn} handleChange={handleChange} />)
      } 
      if (!isSignIn && !accountStatus) {
        setContent(<SignUp setAccountStatus={setAccountStatus}/>)
      }
  
    }, [isSignIn, accountStatus] )
  
    return (
      <>
        {content}
      </>
    )
}