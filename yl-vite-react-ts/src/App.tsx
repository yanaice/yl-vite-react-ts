import React, { Suspense, lazy } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import config from "./config/config"
import "./App.css"

// ReactGA.initialize(config.REACT_GA)

const LoginPage = lazy(() => import("./pages/Login/LoginPage"))

// const PrivateRoute: React.FC<{}> = ({ children, ...props }) => {
//   return <Route {...props}>
//     {children}
//   </Route>
// }

function App() {
	return (
		<Suspense fallback={<div></div>}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/login">
						<LoginPage message="hello" />
					</Route>
					{/* <PrivateRoute exact path="/home">
          <LoginPage />
        </PrivateRoute> */}
					<Redirect from="*" to="/login" />
				</Switch>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
