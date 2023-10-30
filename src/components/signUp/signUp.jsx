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
    const goBack = () => {
        setAccountStatus(true)
    }
  return(
    <div className={styles.body}>

        <div className={styles.signUpContainer}> 
        <img src="https://images.unsplash.com/photo-1628780188245-8c0f3ba27a89?auto=format&fit=crop&q=80&w=3110&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={styles.imgSignUp}/>

        <div className={styles.textBlockSignUp}>
            {/* <div className={styles.head}> */}
                <button onClick={goBack} className={styles.goBack}><svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.99347 10.007L9.88463 0.704919C10.0433 0.538391 10.0376 0.274525 9.87162 0.115307C9.70642 -0.0439117 9.44273 -0.0369925 9.28241 0.128324L0.115347 9.71868C-0.0384489 9.87993 -0.0384489 10.134 0.115347 10.2953L9.28241 19.8857C9.3646 19.9712 9.47367 20.0144 9.58352 20.0144C9.68688 20.0144 9.79107 19.9761 9.87162 19.8987C10.0376 19.7395 10.0433 19.4756 9.88463 19.3091L0.99347 10.007Z" fill="black"/></svg></button>
                
                <h2 className={styles.h2}>Зарегистрируйтесь</h2>
                {/* <button className={styles.goBack} style={{visibility:'hidden'}}><svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.99347 10.007L9.88463 0.704919C10.0433 0.538391 10.0376 0.274525 9.87162 0.115307C9.70642 -0.0439117 9.44273 -0.0369925 9.28241 0.128324L0.115347 9.71868C-0.0384489 9.87993 -0.0384489 10.134 0.115347 10.2953L9.28241 19.8857C9.3646 19.9712 9.47367 20.0144 9.58352 20.0144C9.68688 20.0144 9.79107 19.9761 9.87162 19.8987C10.0376 19.7395 10.0433 19.4756 9.88463 19.3091L0.99347 10.007Z" fill="black"/></svg></button> */}
            {/* </div> */}

            <input type="text" placeholder='Имя' id="dataName" onChange={handleInputChange}/> 
            
            <input type="email" placeholder='Email' id="dataEmail" onChange={handleInputChange}/> 

            <input type={stateOfPassword} placeholder='Пароль' id="dataPassword" onChange={handleInputChange}/>

            <form>
            <input type={stateOfPassword} placeholder='Подтвердите пароль' id="confirmPassword" onChange={handleInputChange}/> 
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