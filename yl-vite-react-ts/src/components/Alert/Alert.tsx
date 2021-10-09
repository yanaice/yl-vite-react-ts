import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { appState } from '../../atom/appState/appState'

const Alert: React.FC = () => {
  const [{ errorMsg }, setGlobalState] = useRecoilState(appState)

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setGlobalState((s) => ({ ...s, errorMsg: '' }))
      }, 10000)
    }
  }, [errorMsg, setGlobalState])

  const handleClose = () => setGlobalState((s) => ({ ...s, errorMsg: '' }))

  if (!errorMsg) return null
  return (
    <div className="absolute z-50 left-4 bottom-4 right-4 shadow">
      <div className="text-white p-2 border-0 rounded bg-red-500 relative">
        <span className="text-base inline-block mr-5 align-middle">
          <i className="fas fa-bell" />
        </span>
        <span className="text-base inline-block align-middle mr-8">
          {errorMsg}
        </span>
        <button
          onClick={handleClose}
          className="absolute bg-transparent text-base font-semibold leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
        >
          <span>×</span>
        </button>
      </div>
    </div>
  )
}

export default Alert
