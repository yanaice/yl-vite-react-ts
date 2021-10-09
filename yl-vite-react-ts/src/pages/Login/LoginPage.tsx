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
      header={<div className="nav-bar">Welcome to ...</div>}
      body={
        <div className="h-full flex justify-center items-center bg-gray-100">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
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
