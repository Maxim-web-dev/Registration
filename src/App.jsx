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
      setContent(<SignIn setIsSignIn={setIsSignIn} handleChange={handleChange} />)
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
  
  let a = localStorage.getItem('email')
  let b = localStorage.getItem('password')

  const verification = () => {
    if ( a !== userEmail) {
      alert('Wrong email!')
    } else if ( b !== userPassword ) {
      alert('Wrong password!')
    } else{
      props.setIsSignIn(true)
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
        value={props.userEmail}
      />
      {/* Ввод password */}
        <h3>Введите пароль</h3>
        <input 
        type="password"
        placeholder='Пароль'
        id='userPassword'
        onChange={(e) => handleInputChange(e)}
        value={props.userPassword}
        />
      
      <button onClick={verification}>Войти в аккаунт</button>
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


// Страница, генерируется если пользователь вошел в аккаунт
// isSignIn = true: 
function Page() {
  
  return(
    <>
      <h1>Здравствуйте, {localStorage.getItem('name')}</h1>
    </>
  )
}
