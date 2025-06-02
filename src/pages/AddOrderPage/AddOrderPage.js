import { useState } from 'react'
import Button from '../../shared/components/Button/Button'
import InputWithLabel from '../../shared/components/InputWithLabel/InputWithLabel'
import PageTitle from '../../shared/components/PageTitle/PageTitle'
import SelectWithLabel from '../../shared/components/SelectWithLabel/SelectWithLabel'
import TextAreaWithLabel from '../../shared/components/TextAreaWithLabel/TextAreaWithLabel'
import { ButtonContainer, Container, FormGroupContainer, FormGroupTitle, Wrapper } from './AddOrderPage.styles'

import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { saveAs } from 'file-saver'
import { RotatingLines } from 'react-loader-spinner'
import { toast } from 'react-toastify'

import { userActions } from '../../store'

const AddOrderPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const [working, setWorking] = useState(false)

	const company = useSelector(state => state.user)
	const dispatch = useDispatch()

	const todayDate = new Date()
	const nextDate = new Date()
	nextDate.setDate(nextDate.getDate() + 7)

	const printPdf = orderId => {
		axios
			.post(`http://192.168.206.71:5000/api/generatepdf/${orderId}`, {})
			.then(() =>
				axios.get(`http://192.168.206.71:5000/api/sendpdf/${orderId}`, {
					responseType: 'blob',
				})
			)
			.then(res => {
				const pdfBlob = new Blob([res.data], { type: 'application/pdf' })

				saveAs(pdfBlob, 'newPdf.pdf')
			})
	}

	const onSubmit = async data => {
		setWorking(true)
		let orderId
		await axios
			.post('http://192.168.206.71:5000/api/order', data)
			.then(res => {
				toast.success('Dodano zlecenie')
				orderId = res.data.newOrder._id
				printPdf(orderId)
			})
			.catch(() => {
				toast.error('Niepowodzenie dodania zlecenia. Spróbuj ponownie')
			})

		dispatch(userActions.setOrderNumber())
		setWorking(false)
		reset()
	}

	return (
		<Wrapper>
			<PageTitle>Dodaj zlecenie</PageTitle>
			<Container onSubmit={handleSubmit(onSubmit)}>
				<FormGroupContainer>
					<FormGroupTitle>Zleceniodawca</FormGroupTitle>
					<InputWithLabel
						title={'Imię'}
						type={'text'}
						inputRef={{ ...register('name', { required: true }) }}
						required
						className={errors.name && 'error'}
					/>
					<InputWithLabel
						title={'Nazwisko'}
						type={'text'}
						inputRef={{ ...register('surname', { required: true }) }}
						required
						className={errors.surname && 'error'}
					/>
					<InputWithLabel
						title={'Numer telefonu'}
						type={'phone'}
						inputRef={{ ...register('phone', { required: true }) }}
						required
						className={errors.phone && 'error'}
					/>
					<InputWithLabel title={'Adres email'} type={'email'} inputRef={{ ...register('email') }} />
				</FormGroupContainer>
				<FormGroupContainer>
					<FormGroupTitle>Sprzęt</FormGroupTitle>
					<InputWithLabel
						title={'Marka'}
						type={'text'}
						inputRef={{ ...register('hardwareBrand', { required: true }) }}
						required
						className={errors.hardwareBrand && 'error'}
					/>
					<InputWithLabel
						title={'Model'}
						type={'text'}
						inputRef={{ ...register('hardwareModel', { required: true }) }}
						required
						className={errors.hardwareModel && 'error'}
					/>
					<TextAreaWithLabel title={'Uwagi'} type={'text'} rows={4} inputRef={{ ...register('hardwareOther') }} />
				</FormGroupContainer>
				<FormGroupContainer>
					<FormGroupTitle>Protokół</FormGroupTitle>
					<InputWithLabel
						title={'Numer przyjęcia'}
						type={'text'}
						inputRef={{
							...register('orderNumber', {
								required: true,
								value: company.nextOrderNumber + '/' + company.nextOrderYear,
							}),
						}}
						disabled
						required
						className={errors.orderNumber && 'error'}
					/>
					<InputWithLabel
						title={'Data przyjęcia'}
						type={'date'}
						inputRef={{
							...register('orderDate', {
								required: true,
								value: todayDate.toISOString().substr(0, 10),
							}),
						}}
						required
						className={errors.orderDate && 'error'}
					/>
					<InputWithLabel
						title={'Data naprawy'}
						type={'date'}
						inputRef={{
							...register('repairDate', {
								required: true,
								value: nextDate.toISOString().substr(0, 10),
							}),
						}}
						required
						className={errors.repairDate && 'error'}
					/>
					<InputWithLabel
						title={'Osoba przyjmująca'}
						type={'text'}
						inputRef={{
							...register('worker', { required: true, value: company.worker }),
						}}
						required
						className={errors.worker && 'error'}
					/>
				</FormGroupContainer>
				<FormGroupContainer>
					<FormGroupTitle>Naprawa</FormGroupTitle>
					<SelectWithLabel
						title={'Typ'}
						inputRef={{ ...register('repairType', { required: true }) }}
						required
						className={errors.repairType && 'error'}>
						<option value='Niegwarancyjna'>Niegwarancyjna</option>
						<option value='Gwarancyjna'>Gwarancyjna</option>
					</SelectWithLabel>
					<TextAreaWithLabel
						title={'Opis naprawy'}
						rows={4}
						inputRef={{ ...register('repairDescription', { required: true }) }}
						required
						className={errors.repairDescription && 'error'}
					/>
					<InputWithLabel title={'Wstępny koszt'} type={'text'} inputRef={{ ...register('preCost') }} />
				</FormGroupContainer>
				<ButtonContainer>
					<Button className='secondary' type='reset'>
						Wyczyść
					</Button>
					<Button className='primary' type='submit'>
						{working ? <RotatingLines strokeColor='white' animationDuration='0.8' width='18' visible={true} /> : 'Zatwierdź'}
					</Button>
				</ButtonContainer>
			</Container>
			<br></br>
		</Wrapper>
	)
}

export default AddOrderPage
