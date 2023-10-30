import { useState } from 'react'
import styles from './signIn.module.css'


export function SignIn({ handleChange, setIsSignIn }) {

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
      setIsSignIn(true) 
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
    <div className={styles.body}>
        <div className={styles.signInСontainer}>
        <div className={styles.textBlockSignIn}>
            <h2 className={styles.h2}>Войдите в аккаунт</h2>

                <input type="email" placeholder='Email' id='userEmail' onChange={(e) => handleInputChange(e)} value={userEmail}/>
                <div>
                    <input type={stateOfPassword} placeholder='Пароль' id='userPassword' onChange={(e) => handleInputChange(e)} value={userPassword}/>

                    <div>
                        <input type="checkbox" className={styles.showPassword} id='showPassword' onClick={viewPassword}/>
                        <label htmlFor="showPassword">Показать пароль</label>
                    </div>
                </div>

            <button onClick={verification} className={styles.signIn}>Войти в аккаунт</button> 
            <a href='#'onClick={handleChange} className={styles.notAccount}>У вас нет аккаунта?</a> 
        </div>

            <img src="https://images.unsplash.com/photo-1628418064700-f65f874f0fb8?auto=format&fit=crop&q=80&w=3110&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={styles.imgSignIn}/>
        </div>
    </div>
  )
}
