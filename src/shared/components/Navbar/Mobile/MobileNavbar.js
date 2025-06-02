import { useState } from 'react'
import { AccountIconContainer, MenuIconContainer, NavMenu, NavMenuItem, Title, TopNav, Wrapper } from './MobileNavbar.styles'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AddIcon from '@mui/icons-material/Add'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import StickyNote2SharpIcon from '@mui/icons-material/StickyNote2Sharp'

import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { authActions } from '../../../../store'

const MobileNavbar = () => {
	const [isOpen, setOpen] = useState(false)
	const dispatch = useDispatch()

	const closeMenu = () => {
		setOpen(false)
	}

	const sendLogoutReq = async () => {
		const res = await axios.post('http://192.168.206.71:5000/api/logout', null, {
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
			<TopNav>
				<MenuIconContainer onClick={() => setOpen(!isOpen)}>{isOpen ? <MenuOpenIcon /> : <MenuIcon />}</MenuIconContainer>
				<Title>Pan Serwisant</Title>
				<AccountIconContainer exact to='/account' onClick={closeMenu}>
					<AccountCircleIcon />
				</AccountIconContainer>
			</TopNav>
			<NavMenu className={isOpen ? 'active' : ''}>
				<NavMenuItem exact to='/' onClick={closeMenu}>
					<HomeIcon />
					<span className='text'>Dashboard</span>
				</NavMenuItem>
				<NavMenuItem exact to='/add' onClick={closeMenu}>
					<AddIcon />
					<span className='text'>Dodaj zlecenie</span>
				</NavMenuItem>
				<NavMenuItem exact to='/orders' onClick={closeMenu}>
					<FormatListBulletedIcon />
					<span className='text'>Lista zleceń</span>
				</NavMenuItem>
				<NavMenuItem exact to='/notes' onClick={closeMenu}>
					<StickyNote2SharpIcon />
					<span className='text'>Notatki</span>
				</NavMenuItem>
				<NavMenuItem exact to='/logout' className='lastElement' onClick={handleLogout}>
					<LogoutIcon />
					<span className='text'>Wyloguj się</span>
				</NavMenuItem>
			</NavMenu>
		</Wrapper>
	)
}

export default MobileNavbar
