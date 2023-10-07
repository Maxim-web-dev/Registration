import { useEffect, useState } from 'react'
import './App.css'

// Вошел в аккаунт? 
// - да - показать страницу
// - нет - страница SignIn. Внизу: вы не зарегестрированы? - SignUp
// после нажатия кнопки SignUp 'сохранить', перекидывает на войти
// Вошел в аккаунт? 
// - да - показать страницу


export default function App() {
  const [ isSignIn, setIsSignIn ] = useState(false)
  const [ content, setContent ] = useState('')
  const [ isSignUp, setIsSignUp ] = useState(false)
 
  
  useEffect( () => {

    if (isSignIn) {
      setContent(<Page/>)
    } else if(!isSignIn){
      setContent(<SignIn setIsSignIn={setIsSignIn} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>)
    } 
    if (!isSignIn && isSignUp) {
      setContent(<SignUp />)
    }

  }, [isSignIn] )

  return (
    <>
      {content}
    </>
  )
}


function SignIn({setIsSignIn, setIsSignUp, isSignUp}) {
  const ee = () => {
    setIsSignUp(true)
    console.log(isSignUp)
  }
  return(
    <>
    <h2>Войдите в аккаунт</h2>
    <br /><br />
    <Input /> <br /><br /><br /><br /><br /><br /><br /><br />
    <Verification setIsSignIn={setIsSignIn}/>

    <button onClick={ ee }>У вас нет аккаунта?</button>
    </>
  )
}

function SignUp() {
  
  return(
    <>
    <Input />
    </>
  )
}

function EmailButton({}) {
  const [ userEmail, setUserEmail ] = useState()
  const [ emailButton, setEmailButton ] = useState('Сохранить почту')

  const inputEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const saveEmail = () => {
    setEmailButton('Сохранено')
  }

  return(
    <>
      <button onClick={saveEmail} >{emailButton}</button>
    </>
  )
}

function PasswordButton({}){
  const [ userPassword, setUserPassword ] = useState()
  const [ passwordButton, setPasswordButton ] = useState('Сохранить пароль')

  const inputPassword = (e) => {
    setUserPassword(e.target.value)
  }

  const savePassword = () => {
    setPasswordButton('Сохранено')
  }
  return(
    <>
      <button onClick={savePassword} >{passwordButton}</button>
    </>
  )
}


// Поля ввода, используются в SignIn и SignUp. При регистрации и входе в аккаунт
function Input({ inputEmail, inputPassword }) {
  
  return(
    <>
      <h3>Введите email</h3>
      <input 
       type="email"
       placeholder='Email'
       id='email'
       onChange={(e) => handleInputChange(e)}
       value={email}
       />
      <EmailButton />

      <h3>Введите пароль</h3>
      <input 
       type="password"
       placeholder='Password' 
       onChange={(e) => handleInputChange(e)}
       value={password}
       />
      <PasswordButton />

    </>
  )
}


// Верификация, либо же проверка, совпадают ли данные, введеные пользователем при SignIn с data (Данные при регистрации)
function Verification({userEmail, userPassword, setIsSignIn}) {

  const dataEmail = localStorage.getItem('email')
  const dataPassword = localStorage.getItem('password')
  const verification = () => {
    if ( dataEmail !== userEmail) {
      alert('Wrong email!')
    } else if ( dataPassword !== userPassword ) {
      alert('Wrong password!')
    } else{
      setIsSignIn(true)
    }
  }

  return(
    <>
    <button onClick={verification}>Войти в аккаунт</button>
    </>
  )
}



// Страница, генерируется если пользователь вошел в аккаунт
// isSignIn = true: 
function Page() {
  
  return(
    <>
      <h1>Apple site</h1>
    </>
  )
}