import MainContainer from '../shared/components/MainContainer/MainContainer'
import Navbar from '../shared/components/Navbar/Navbar'
import { Wrapper } from './App.styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import StartContainer from '../shared/components/StartContainer/StartContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

	axios.defaults.withCredentials = true
	return (
		<Wrapper>
			<Router>
				{isLoggedIn ? (
					<>
						<Navbar />
						<MainContainer />
					</>
				) : (
					<StartContainer />
				)}
			</Router>
			<ToastContainer
				position='top-center'
				autoClose={750}
				limit={1}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={true}
				theme='light'
			/>
		</Wrapper>
	)
}

export default App
