import React from "react"
import "./loginPage.css"
import useUser from "../../hook/useUser"
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay"
import {appState} from "../../atom/appState/appState"
import {useRecoilValue} from "recoil"
import Alert from "../../components/Alert/Alert"

/* use `interface` if exporting so that consumers can extend */
type Props = {
  message: string
}

const LoginPage = ({message}: Props): JSX.Element => {
  const {loading} = useRecoilValue(appState)
  const {login} = useUser()

  const handleErrorCode = (errorCode) => {
    alert(`Error: ${errorCode}`)
  }

  const handleLogin = async () => {
    const {data, error, errorCode} = await login({
      username: "yana",
      password: "1234",
    })

    if (error) {
      errorCode && handleErrorCode(errorCode)
      return
    }

    alert(`Welcome ${data?.firstName} ${data?.lastName}!!`)
  }

  return (
    <LoadingOverlay active={loading}>
      <Alert />
      <div className='page-container'>
        <div className='nav-bar'>MENU =</div>
        <div className='scroll-content p-2'>
          <h1 className='text-center'>{message}</h1>
          <div className='grid grid-cols-1fr-auto p-10 bg-blue-400'>
            <h1 className='bg-yellow-200'>H1</h1>
            <h2 className='bg-green-200'>H2</h2>
          </div>
          <div className='text-base'>
            adsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfads
            fasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdf
          </div>
          <pre className='text-sm whitespace-pre-wrap'>
            {`adsfasdfadsfasdfadsfas 
    dfadsfasdfadsfasdf
adsfasdfadsfasdfads
  1.
    2. 
      3. asdf
        ------
          fas
            df
        adsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdf
      `}
          </pre>
        </div>
        <div className='footer'>
          <button
            className='btn btn-primary w-full bottom-0'
            onClick={handleLogin}
          >
            Button
          </button>
        </div>
      </div>
    </LoadingOverlay>
  )
}

export default LoginPage
