import { useState } from 'react'
import styles from './signUp.module.css'

export function SignUp({ setAccountStatus }) {
  const [ dataName, setDataName ] = useState('')
  const [ dataEmail, setDataEmail ] = useState('')
  const [ dataPassword, setDataPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ stateOfPassword, setStateOfPassword ] = useState('password')
  
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
  
  const signUp = () => {
    if (dataPassword !== confirmPassword) {
      alert('Пароли не совпадают')
    } else {
      localStorage.setItem( 'name', dataName )
      localStorage.setItem( 'email', dataEmail )
      localStorage.setItem( 'password', dataPassword )
      setAccountStatus(true)
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

        <div className={styles.signUpContainer}> 
        <img src="https://images.unsplash.com/photo-1628780188245-8c0f3ba27a89?auto=format&fit=crop&q=80&w=3110&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={styles.imgSignUp}/>

        <div className={styles.textBlockSignUp}>
            <h2 className={styles.h2}>Зарегистрируйтесь</h2>

            <form>
            {/* <label htmlFor="dataName">Введите имя</label> <br /> */}
            <input type="text" placeholder='Имя' id="dataName" onChange={handleInputChange}/> <br />
            </form>  
            
            <form>
            {/* <label htmlFor="dataEmail">Введите email</label> <br /> */}
            <input type="email" placeholder='Email' id="dataEmail" onChange={handleInputChange}/> <br />
            </form>

            <form>
            {/* <label htmlFor="dataPassword">Введите пароль</label> <br /> */}
            <input type={stateOfPassword} placeholder='Пароль' id="dataPassword" onChange={handleInputChange}/> <br />
            </form>

            <form>
            {/* <label htmlFor="confirmPassword">Повторите пароль</label> <br /> */}
            <input type={stateOfPassword} placeholder='Подтвердите пароль' id="confirmPassword" onChange={handleInputChange}/> <br />
            <div className="checkboxContainer">
                <input type="checkbox" className={styles.showPassword} id='showPassword' onClick={viewPassword}/>
                <label htmlFor="showPassword">Показать пароль</label>
            </div>
            </form>
            <button onClick={signUp} className={styles.signUp}>Зарегистрироваться</button>
        </div>
        </div>
    </div>
  )
}