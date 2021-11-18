import React from 'react'
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay'
import Alert from '../Alert/Alert'
import { useRecoilValue } from 'recoil'
import { appState } from '../../atom/appState/appState'

interface IProps {
  header: JSX.Element
  body: JSX.Element
  footer: JSX.Element
}

const PageLayout = ({ header, body, footer }: IProps): JSX.Element => {
  const { loading } = useRecoilValue(appState)
  return (
    <LoadingOverlay active={loading}>
      <Alert />
      <div className="page-container">
        {header}
        <div className="scroll-content">{body}</div>
        <div className="footer">{footer}</div>
      </div>
    </LoadingOverlay>
  )
}

export default PageLayout
