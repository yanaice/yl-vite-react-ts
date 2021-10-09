import React from 'react'
import './loginPage.css'
import useUser from '../../hook/useUser'
import PageLayout from '../../components/PageLayout/PageLayout'
/* use `interface` if exporting so that consumers can extend */
type Props = {
  message: string
}

const LoginPage = ({ message }: Props): JSX.Element => {
  const { login } = useUser()

  const handleErrorCode = (errorCode) => {
    alert(`Error: ${errorCode}`)
  }

  const handleLogin = async () => {
    const { data, error } = await login({
      username: 'yana',
      password: '1234',
    })

    if (error) {
      error.code && handleErrorCode(error.code)
      return
    }

    alert(`Welcome ${data?.firstName} ${data?.lastName}!!`)
  }

  return (
    <PageLayout
      header={<div className="nav-bar">MENU =</div>}
      body={
        <div className="p-4 bg-blue-200">
          <div>1st</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LOGIN</div>
          <div>LSSDT</div>
        </div>
      }
      footer={
        <button
          className="btn btn-primary w-full bottom-0"
          onClick={handleLogin}
        >
          Login
        </button>
      }
    />
  )
}

export default LoginPage
