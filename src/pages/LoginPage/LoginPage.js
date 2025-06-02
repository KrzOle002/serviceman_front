import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../shared/components/Button/Button'
import InputWithLabel from '../../shared/components/InputWithLabel/InputWithLabel'
import PasswordInputWithLabel from '../../shared/components/PasswordInputWithLabel/PasswordInputWithLabel'
import { authActions, userActions } from '../../store'
import { AppIcon, Container, Form, Logo, SubTitle, Title, Wrapper } from './LoginPage.styles'

axios.defaults.withCredentials = true

const LoginPage = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [working, setWorking] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const sendRequest = async input => {
		setWorking(true)
		try {
			const res = await axios.post(
				'https://108.165.213.119:5000/api/login',
				{
					email: input.email,
					password: input.password,
				},
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			)
			dispatch(userActions.setData(res.data.company))
			return res.data
		} catch (error) {
			toast.error(error.response?.data?.message || 'Logowanie nie powiodło się')
			return null
		} finally {
			setWorking(false)
		}
	}

	const onSubmit = async data => {
		const response = await sendRequest(data)
		if (response) {
			dispatch(authActions.login())
			history.push('/')
		}
	}

	return (
		<Wrapper>
			<Container>
				<Logo>
					<AppIcon>
						<BubbleChartIcon />
					</AppIcon>
					<Title>Pan Serwisant</Title>
					<SubTitle>Logowanie</SubTitle>
				</Logo>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputWithLabel
						title={'Adres email'}
						type={'email'}
						inputRef={register('email', { required: true })}
						required
						className={errors.email ? 'error' : ''}
					/>
					<PasswordInputWithLabel
						title={'Hasło'}
						inputRef={register('password', { required: true })}
						required
						className={errors.password ? 'error' : ''}
					/>
					<Button className={'primary'} type='submit' disabled={working}>
						{working ? <RotatingLines strokeColor='white' animationDuration='0.8' width='18' visible={true} /> : 'Zaloguj się'}
					</Button>
				</Form>
			</Container>
		</Wrapper>
	)
}

export default LoginPage
