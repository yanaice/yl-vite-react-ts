import React from "react"
import "./loginPage.css"

type Props = {
  message: string
} /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const LoginPage = ({message}: Props): JSX.Element => (
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
      <br />
      <br />
      <br />
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
      {/* </div> */}
    </div>
    {/* anything here is sticky to footer */}
    <div className='footer'>
      <button className='btn btn-primary w-full bottom-0'>Button</button>
    </div>
  </div>
)

export default LoginPage
