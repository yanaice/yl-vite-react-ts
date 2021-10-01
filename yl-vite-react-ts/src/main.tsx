import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'
import { RecoilRoot } from 'recoil'
import axios from './client/axios'
import './index.css'
import App from './App'


const swrConfig = {
  fetcher: (url: string) => axios.get(url).then((res) => res.data),
  shouldRetryOnError: false,
  revalidateOnFocus: false,
  revalidateOnMount: true,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfig}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
)
