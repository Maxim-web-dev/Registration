import { useEffect, useState } from 'react'
import './App.css'

// Вошел в аккаунт? 
// - да - показать страницу
// - нет - страница SignIn. Внизу: вы не зарегестрированы? - SignUp
// после нажатия кнопки SignUp 'сохранить', перекидывает на войти
// Вошел в аккаунт? 
// - да - показать страницу

// Уберу кнопки сохранить в этой версии приложения
// Исправь 'Пароли не совпадают', сделай это в виде сообщения??


export default function App() {
  const [ isSignIn, setIsSignIn ] = useState(false)
  const [ content, setContent ] = useState('')
  const [ isSignUp, setIsSignUp ] = useState(false)
 

  const handleChange = () => {
    setIsSignUp(true)
  }

  useEffect( () => {

    if (isSignIn) {
      setContent(<Page/>)
    } else if(!isSignIn){
      setContent(<SignIn setIsSignIn={setIsSignIn} handleChange={handleChange}/>)
    } 
    if (!isSignIn && isSignUp) {
      setContent(<SignUp />)
    }

  }, [isSignIn, isSignUp] )

  return (
    <>
      {content}
    </>
  )
}


function SignIn(props) {

  const [ userEmail, setUserEmail ] = useState('')
  const [ userPassword, setUserPassword ] = useState('')
  
  const handleInputChange = (e) => {
    const {id, value} = e.target;
    if (id === 'userEmail') {
      setUserEmail(value);
    }
    if (id === 'userPassword') {
      setUserPassword(value);
    }
  }


  return(
    <>
      <h2>Войдите в аккаунт</h2>

      {/* Ввод Email */}
      <h3>Введите email</h3>
      <input 
        type="email"
        placeholder='Email'
        id='userEmail'
        onChange={(e) => handleInputChange(e)}
        value={userEmail}
      />
      {/* Ввод password */}
        <h3>Введите пароль</h3>
        <input 
        type="password"
        placeholder='Пароль'
        id='userPassword'
        onChange={(e) => handleInputChange(e)}
        value={userPassword}
        />
      
      <Verification setIsSignIn={props.setIsSignIn}/>

      <button onClick={props.handleChange}>У вас нет аккаунта?</button>
    </>
  )
}

function SignUp() {
  const [dataName, setDataName] = useState('')
  const [dataEmail, setDataEmail] = useState('')
  const [dataPassword, setDataPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [content, setContent] = useState ('')

  const handleInputChange = (e) => {
    const {value, id} = e.target;
    if (id === 'dataName') {
      setDataName(value)
    }
    if (id === 'dataEmail') {
      setDataEmail(value)
    }
    if (id === 'dataPassword') {
      setDataPassword(value)
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value)
    }
  }

    useEffect( () => {
      dataPassword !== confirmPassword ? setContent('Пароли не совпадают') : setContent('✔️')
    }, [dataPassword, confirmPassword] )

    const signUp = () => {
      localStorage.setItem( 'name', dataName )
      localStorage.setItem( 'email', dataEmail )
      localStorage.setItem( 'password', dataPassword )
    }

  return(
    <>
      <label htmlFor="dataName">Введите имя</label> <br />
      <input type="text" placeholder='Александр' id="dataName" onChange={handleInputChange}/> <br />
      
      <label htmlFor="dataEmail">Введите email</label> <br />
      <input type="email" placeholder='Email' id="dataEmail" onChange={handleInputChange}/> <br />

      <label htmlFor="dataPassword">Введите пароль</label> <br />
      <input type="password" placeholder='Пароль' id="dataPassword" onChange={handleInputChange}/> <br />

      <label htmlFor="confirmPassword">Повторите пароль</label> <br />
      <input type="password" placeholder='Подтвердите пароль' id="confirmPassword" onChange={handleInputChange}/> <br />
      {content}
      <button onClick={signUp}>Зарегистрироваться</button>
    </>
  )
}

function EmailButton({}) {
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

      <EmailButton />


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
