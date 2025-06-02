import { Logo, NavSection, SettingsSection, Wrapper } from './DesktopNavbar.styles'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AddIcon from '@mui/icons-material/Add'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { authActions } from '../../../../store'

const DesktopNavbar = () => {
	const dispatch = useDispatch()
	const superUser = useSelector(state => state.user.superUser)
	const sendLogoutReq = async () => {
		const res = await axios.post('https://108.165.213.119:5000/api/logout', null, {
			withCredentials: true,
		})
		if (res.status === 200) {
			toast.success('Wylogowano')
			return res
		}
		toast.error('Wylogowanie nie powiodło się. Spróbuj ponownie')
		return new Error('Unable to Logout. Please try again')
	}

	const handleLogout = e => {
		e.preventDefault()
		sendLogoutReq().then(() => dispatch(authActions.logout()))
	}

	return (
		<Wrapper>
			<Logo>
				<BubbleChartIcon />
			</Logo>
			<NavSection>
				<NavLink exact to='/' title='Dashboard'>
					<HomeIcon />
				</NavLink>
				<NavLink exact to='/add' title='Dodaj zlecenie'>
					<AddIcon />
				</NavLink>
				<NavLink exact to='/orders' title='Lista zleceń'>
					<FormatListBulletedIcon />
				</NavLink>
			</NavSection>
			<SettingsSection>
				{superUser ? (
					<NavLink exact to='/panel' title='Panel administracyjny'>
						<AdminPanelSettingsIcon />
					</NavLink>
				) : (
					<></>
				)}
				<NavLink exact to='/account' title='Ustawienia konta'>
					<AccountCircleIcon />
				</NavLink>
				<NavLink exact to='/logout' title='Wyloguj się' onClick={handleLogout}>
					<LogoutIcon />
				</NavLink>
			</SettingsSection>
		</Wrapper>
	)
}

export default DesktopNavbar
