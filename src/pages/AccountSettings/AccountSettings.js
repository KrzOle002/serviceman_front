import { useState } from 'react'
import Button from '../../shared/components/Button/Button'
import InputWithLabel from '../../shared/components/InputWithLabel/InputWithLabel'
import PageTitle from '../../shared/components/PageTitle/PageTitle'
import { userActions } from '../../store'
import { Container, ControlButtons, Settings, Wrapper } from './AccountSettings.styles'

import axios from 'axios'
import { useForm } from 'react-hook-form'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

axios.defaults.withCredentials = true

const AccountSettings = () => {
	const company = useSelector(state => state.user)
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm()
	const [working, setWorking] = useState(false)

	const saveAccountChanges = async data => {
		setWorking(true)
		await axios
			.post('http://108.165.213.119:5000/api/company', data)
			.then(() => {
				axios.get('http://108.165.213.119:5000/api/company').then(res => {
					dispatch(userActions.setData(res.data.company))
				})
				toast.success('Zapisano')
			})
			.catch(() => {
				toast.error('Błąd zapisu. Spróbuj ponownie')
			})
		setWorking(false)
	}

	return (
		<Wrapper>
			<PageTitle>Ustawienia konta</PageTitle>
			<Container as={'form'} onSubmit={handleSubmit(saveAccountChanges)}>
				<Settings>
					<InputWithLabel
						title={'Adres email'}
						disabled
						inputRef={{
							...register('email', { value: company.email }, { required: true }),
						}}
					/>
					<InputWithLabel title={'Nazwa firmy'} inputRef={{ ...register('name', { value: company.name }) }} />
					<InputWithLabel title={'Adres firmy'} inputRef={{ ...register('address', { value: company.address }) }} />
					<InputWithLabel title={'Miasto'} inputRef={{ ...register('city', { value: company.city }) }} />
					<InputWithLabel title={'Kod pocztowy'} inputRef={{ ...register('zipCode', { value: company.zipCode }) }} />
					<InputWithLabel title={'Telefon'} inputRef={{ ...register('phone', { value: company.phone }) }} />
					<InputWithLabel title={'Domyślny serwisant'} inputRef={{ ...register('worker', { value: company.worker }) }} />
				</Settings>
				<ControlButtons>
					<Button className='primary' type='submit'>
						{working ? <RotatingLines strokeColor='white' animationDuration='0.8' width='18' visible={true} /> : 'Zapisz zmiany'}
					</Button>
				</ControlButtons>
			</Container>
		</Wrapper>
	)
}

export default AccountSettings
