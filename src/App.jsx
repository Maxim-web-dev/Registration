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
  const [ accountStatus, setAccountStatus ] = useState(true)

  const handleChange = () => {
    // setIsSignUp(true)
    setAccountStatus(false)
  }

  useEffect( () => {

    if (isSignIn) {
      setContent(<Page/>)
    } else if(!isSignIn){
      setContent(<SignIn setIsSignIn={setIsSignIn} handleChange={handleChange} />)
      // setContent(<SignUp setIsSignIn={setIsSignIn} handleChange={handleChange} />)
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


function SignIn(props) {

  const [ userEmail, setUserEmail ] = useState('')
  const [ userPassword, setUserPassword ] = useState('')
  const [ stateOfPassword, setStateOfPassword ] = useState('password')

  
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
  const viewPassword = () => {
    if (stateOfPassword === 'password') {
      setStateOfPassword('text')
    } else if (stateOfPassword === 'text') {
      setStateOfPassword('password')
    }
  }
  return(
    <div className='signInСontainer'>

      <div className="textBlockSignIn">
        <h2>Войдите в аккаунт</h2>

        <div className="Inputes">

          <form>
            <h4>Введите email</h4>
            <input className='emailinput'type="email"placeholder='Email'id='userEmail'onChange={(e) => handleInputChange(e)}value={props.userEmail}/>          
          </form>

          <form>
            <h4>Введите пароль</h4>
              <input className='passwordInput' type={stateOfPassword}placeholder='Пароль'id='userPassword'onChange={(e) => handleInputChange(e)}value={props.userPassword}/>
            <div className="checkboxContainer">
              <input type="checkbox" className='showPassword' id='showPassword' onClick={viewPassword}/>
              <label htmlFor="showPassword">Показать пароль</label>
            </div>
          </form>

        </div>

        <button onClick={verification} className='signIn'>Войти в аккаунт</button>
        <a href='#SignUp'onClick={props.handleChange} className="notAccount">У вас нет аккаунта?</a>
      </div>

        <img src="https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" className='imgSignIn'/>
    </div>
  )
}

function SignUp(props) {
  const [ dataName, setDataName ] = useState('')
  const [ dataEmail, setDataEmail ] = useState('')
  const [ dataPassword, setDataPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ content, setContent ] = useState ('')
  const [ stateOfPassword, setStateOfPassword ] = useState('password')
  const [ passwordComplexity, setPasswordComplexity ] = useState('')

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

  // useEffect( () => {
  // }, [dataPassword, confirmPassword] )
  
  const signUp = () => {
    if (dataPassword !== confirmPassword) {
      alert('Пароли не совпадают')
    } else {
      localStorage.setItem( 'name', dataName )
      localStorage.setItem( 'email', dataEmail )
      localStorage.setItem( 'password', dataPassword )
      props.setAccountStatus(true)
    }

    // localStorage.setItem( 'name', dataName )
    // localStorage.setItem( 'email', dataEmail )
    // localStorage.setItem( 'password', dataPassword )
    // props.setAccountStatus(true)
    // dataPassword !== confirmPassword ? setContent('Пароли не совпадают') : setContent('✔️')
    // dataPassword !== confirmPassword ? alert('Пароли не совпадают') : ''
  }
  const viewPassword = () => {
    if (stateOfPassword === 'password') {
      setStateOfPassword('text')
    } else if (stateOfPassword === 'text') {
      setStateOfPassword('password')
    }
    }
  const onChangePassword = (e) => {
    const {value, id} = e.target
    if (id === 'dataPassword') {
      setDataPassword(value)

      if (dataPassword.length < 4) {
        setPasswordComplexity(
          <>
          <hr className='easyPassword'/>
          <hr className='defaultPassword'/> 
          <hr className='defaultPassword'/> 
          </>)
      }
      if (dataPassword.length > 4 ) {
        setPasswordComplexity(
          <>
          <hr className='mediumPassword'/>
          <hr className='mediumPassword'/>
          <hr className='defaultPassword'/> 
          </>)
      }
      if (dataPassword.length > 8 ) {
        setPasswordComplexity(
          <>
          <hr className='strongPassword'/> 
          <hr className='strongPassword'/> 
          <hr className='strongPassword'/> 
          </>)
      }

    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value)
    }
  }

  return(
    <div className="signUpContainer"> 
      <img src="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" className='imgSignUp'/>

      <div className="textBlockSignUp">
        <h2>Зарегистрируйтесь</h2>

        <form>
          <label htmlFor="dataName">Введите имя</label> <br />
          <input type="text" placeholder='Имя' id="dataName" onChange={handleInputChange}/> <br />
        </form>  
        
        <form>
          <label htmlFor="dataEmail">Введите email</label> <br />
          <input type="email" placeholder='Email' id="dataEmail" onChange={handleInputChange}/> <br />
        </form>

        <form>
          <label htmlFor="dataPassword">Введите пароль</label> <br />
          <input type={stateOfPassword} placeholder='Пароль' id="dataPassword" onChange={onChangePassword}/> <br />

          <div className="allAboutPassword">
            <p>Сложность пароля</p>
            <div className='passwordComplexityContainer'>
              {passwordComplexity}
            </div>
          </div>
        </form>

        <form>
          <label htmlFor="confirmPassword">Повторите пароль</label> <br />
          <input type={stateOfPassword} placeholder='Подтвердите пароль' id="confirmPassword" onChange={onChangePassword}/> <br />
          <div className="checkboxContainer">
            <input type="checkbox" className='showPassword' id='showPassword' onClick={viewPassword}/>
            <label htmlFor="showPassword">Показать пароль</label>
          </div>
        </form>



          

          {/* {content} */}
          <button onClick={signUp} className='signUp'>Зарегистрироваться</button>
      </div>
    </div>
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
