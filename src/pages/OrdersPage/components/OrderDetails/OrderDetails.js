import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RotatingLines } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import SpinnerLoaderHolder from '../../../../shared/components/SpinnerLoaderHolder/SpinnerLoaderHolder'
import Button from './../../../../shared/components/Button/Button'
import InputWithLabel from './../../../../shared/components/InputWithLabel/InputWithLabel'
import SelectWithLabel from './../../../../shared/components/SelectWithLabel/SelectWithLabel'
import TextAreaWithLabel from './../../../../shared/components/TextAreaWithLabel/TextAreaWithLabel'
import { ButtonContainer, Container, FormGroupContainer, OrderHeader, OrderInfo, TitleText, Wrapper } from './OrderDetails.styles'

const OrderDetails = ({ handleChangeOpen, activeOrder, setOrders, orders }) => {
	const { register, handleSubmit } = useForm()
	const [order, setOrder] = useState({})
	const [loading, setLoading] = useState(true)
	const [closing, setClosing] = useState(false)
	const [saving, setSaving] = useState(false)
	const [deleting, setDeleting] = useState(false)
	const [other, setOther] = useState(false)
	const removeOrder = async e => {
		e.preventDefault()
		await axios
			.delete(`http://108.165.213.119:5000/api/order/${activeOrder}`)
			.then(res => {
				let newOrders = orders.filter(item => item._id !== activeOrder)
				setOrders(newOrders)
				handleChangeOpen()
				setDeleting(true)
				toast.success('Usunięto zlecenie')
			})
			.catch(err => {
				toast.error('Niepowodzenie usunięcia zlecenia. Spróbuj ponownie')
				setDeleting(true)
			})
	}

	const updateOrder = async data => {
		await axios
			.post(`http://108.165.213.119:5000/api/order/${activeOrder}`, data)
			.then(res => {
				setSaving(true)
				handleChangeOpen()
				toast.success('Zaktualizowano zlecenie')
			})
			.catch(err => {
				setSaving(true)
				toast.error('Błąd aktualizacji zlecenia. Spróbuj ponownie')
			})
	}

	const finishOrder = async e => {
		e.preventDefault()
		await axios
			.post(`http://108.165.213.119:5000/api/order/finish/${activeOrder}`)
			.then(res => {
				setClosing(true)
				handleChangeOpen()
				toast.success('Zakończono zlecenie')
			})
			.catch(err => {
				setClosing(true)
				toast.error('Błąd zakończenia zlecenia. Spróbuj ponownie')
			})
	}

	const resumeOrder = async e => {
		e.preventDefault()
		await axios
			.post(`http://108.165.213.119:5000/api/order/resume/${activeOrder}`)
			.then(res => {
				setClosing(true)
				handleChangeOpen()
				toast.success('Wznowiono zlecenie')
			})
			.catch(err => {
				setClosing(true)
				toast.error('Błąd zakończenia zlecenia. Spróbuj ponownie')
			})
	}

	const printPdf = async e => {
		e.preventDefault()
		setOther(true)
		let orderId = order._id
		axios
			.post(`http://108.165.213.119:5000/api/generatepdf/${orderId}`, {})
			.then(() =>
				axios.get(`http://108.165.213.119:5000/api/sendpdf/${orderId}`, {
					responseType: 'blob',
				})
			)
			.then(res => {
				const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
				saveAs(pdfBlob, `${orderId}.pdf`)
			})
		setOther(false)
	}

	const smsSend = e => {
		e.preventDefault()
		setOther(true)
		setOther(false)
	}

	useEffect(() => {
		const getOrder = async () => {
			await axios
				.get(`http://108.165.213.119:5000/api/order/${activeOrder}`)
				.then(res => {
					setOrder(res.data)
					setLoading(false)
				})
				.catch(() => {
					toast.error('Błąd ładowania zlecenia')
					setLoading(false)
				})
		}
		getOrder()
	}, [activeOrder])

	if (!loading) {
		return (
			<Wrapper>
				<Container as='form' onSubmit={handleSubmit(updateOrder)}>
					<OrderHeader className={order.status}>
						<TitleText>SERWIS {order.orderNumber}</TitleText> <HighlightOffIcon onClick={handleChangeOpen} />
					</OrderHeader>
					<OrderInfo>
						<FormGroupContainer>
							<InputWithLabel title={'Imię'} inputRef={{ ...register('name', { value: order.name }) }} required />
							<InputWithLabel title={'Nazwisko'} inputRef={{ ...register('surname', { value: order.surname }) }} required />
							<InputWithLabel title={'Numer telefonu'} inputRef={{ ...register('phone', { value: order.phone }) }} required />
							<InputWithLabel title={'Adres email'} inputRef={{ ...register('email', { value: order.email }) }} />
						</FormGroupContainer>
						<FormGroupContainer>
							<InputWithLabel
								title={'Marka'}
								inputRef={{
									...register('hardwareBrand', { value: order.hardwareBrand }),
								}}
								required
							/>
							<InputWithLabel
								title={'Model'}
								inputRef={{
									...register('hardwareModel', { value: order.hardwareModel }),
								}}
								required
							/>
							<TextAreaWithLabel
								title={'Uwagi'}
								inputRef={{
									...register('hardwareOther', { value: order.hardwareOther }),
								}}
								rows={4}
							/>
						</FormGroupContainer>
						<FormGroupContainer>
							<InputWithLabel
								title={'Data przyjęcia'}
								inputRef={{
									...register('orderDate', { value: order.orderDate }),
								}}
								required
							/>
							<InputWithLabel
								title={'Data naprawy'}
								inputRef={{
									...register('repairDate', { value: order.repairDate }),
								}}
								required
							/>
							<InputWithLabel
								title={'Przyjmujący'}
								inputRef={{
									...register('worker', { value: order.worker }),
								}}
								required
							/>
						</FormGroupContainer>
						<FormGroupContainer>
							<SelectWithLabel title={'Typ'} required>
								<option value='Niegwarancyjna'>Niegwarancyjna</option>
								<option value='Gwarancyjna'>Gwarancyjna</option>
							</SelectWithLabel>
							<TextAreaWithLabel
								title={'Opis naprawy'}
								inputRef={{
									...register('repairDescription', {
										value: order.repairDescription,
									}),
								}}
								rows={4}
								required
							/>
							<InputWithLabel
								title={'Wstępny koszt'}
								inputRef={{
									...register('preCost', {
										value: order.preCost,
									}),
								}}
							/>
						</FormGroupContainer>
						<FormGroupContainer>
							<InputWithLabel
								title={'Całkowity koszt'}
								inputRef={{
									...register('finalCost', {
										value: order.finalCost,
									}),
								}}
							/>
							<TextAreaWithLabel
								title={'Wykonane prace'}
								rows={4}
								inputRef={{
									...register('finalRepair', {
										value: order.finalRepair,
									}),
								}}
							/>
						</FormGroupContainer>
						<ButtonContainer>
							<Button className='primary' onClick={order.status === 'active' ? e => printPdf(e) : e => smsSend(e)}>
								{other ? (
									<RotatingLines strokeColor='white' animationDuration='0.8' width='18' visible={true} />
								) : order.status === 'active' ? (
									'PDF'
								) : (
									'SMS'
								)}
							</Button>
							<Button className='primary' onClick={order.status === 'active' ? e => finishOrder(e) : e => resumeOrder(e)}>
								{closing ? (
									<RotatingLines strokeColor='white' animationDuration='0.8' width='18' visible={true} />
								) : order.status === 'active' ? (
									'Zakończ'
								) : (
									'Wznów'
								)}
							</Button>
							<Button className='secondary' type='submit'>
								{saving ? <RotatingLines strokeColor='white' animationDuration='0.8' width='18' visible={true} /> : 'Zapisz'}
							</Button>
							<Button className='error' onClick={removeOrder}>
								{deleting ? <RotatingLines strokeColor='white' animationDuration='0.8' width='18' visible={true} /> : 'Usuń'}
							</Button>
						</ButtonContainer>
					</OrderInfo>
				</Container>
			</Wrapper>
		)
	} else {
		return (
			<Wrapper>
				<SpinnerLoaderHolder />
			</Wrapper>
		)
	}
}

export default OrderDetails
