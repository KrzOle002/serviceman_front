import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import InputWithLabel from '../../shared/components/InputWithLabel/InputWithLabel'
import PageTitle from '../../shared/components/PageTitle/PageTitle'
import SelectWithLabel from '../../shared/components/SelectWithLabel/SelectWithLabel'
import SpinnerLoaderHolder from '../../shared/components/SpinnerLoaderHolder/SpinnerLoaderHolder'
import { SearchPanel, StyledButton, Wrapper } from './OrdersPage.styles'
import OrderDetails from './components/OrderDetails/OrderDetails'
import OrderList from './components/OrderList/OrderList'
const initialFilterValue = {
	search: '',
	filter: 'orderNumber',
	sorting: 'asc',
}

const OrdersPage = () => {
	const [isOpenDetails, setOpenDetails] = useState(false)
	const [activeOrder, setActiveOrder] = useState(0)
	const [orders, setOrders] = useState({})
	const [loading, setLoading] = useState(true)
	const [ordering, setOrdering] = useState()
	const [filters, setFilters] = useState(initialFilterValue)
	const { register, handleSubmit, reset } = useForm()

	const getOrders = () => {
		axios
			.get('https://108.165.213.119:5000/api/orders')
			.then(res => {
				setOrders(res.data)
				setOrdering(res.data)
				setLoading(false)
			})
			.catch(() => {
				toast.error('Błąd ładowania zleceń')
				setLoading(false)
			})
	}

	const getChangedOrders = () => {
		axios
			.get('https://108.165.213.119:5000/api/orders')
			.then(res => {
				setOrdering(res.data)
				checkFilters(res.data)
				setLoading(false)
			})
			.catch(() => {
				toast.error('Błąd ładowania zleceń')
				setLoading(false)
			})
	}

	useEffect(() => {
		getOrders()
	}, [])

	const handleChangeOpen = orderId => {
		setActiveOrder(orderId)
		getChangedOrders()
		setOpenDetails(!isOpenDetails)
	}

	const checkFilters = data => {
		const keys = ['orderNumber', 'name', 'surname', 'hardwareBrand', 'hardwareModel']
		const newOrders = data
			.filter(order => keys.some(key => order[key].toLowerCase().includes(filters.search.toLowerCase())))
			.sort((prev, next) =>
				filters.sorting === 'asc'
					? prev[filters.filter].localeCompare(next[filters.filter])
					: next[filters.filter].localeCompare(prev[filters.filter])
			)
		setOrders(newOrders)
	}

	const onSubmit = async data => {
		setFilters(data)
		const keys = ['orderNumber', 'name', 'surname', 'hardwareBrand', 'hardwareModel']
		const newOrders = ordering
			.filter(order => keys.some(key => order[key].toLowerCase().includes(data.search.toLowerCase())))
			.sort((prev, next) =>
				data.sorting === 'asc' ? prev[data.filter].localeCompare(next[data.filter]) : next[data.filter].localeCompare(prev[data.filter])
			)
		setOrders(newOrders)
	}
	if (!loading) {
		return (
			<Wrapper>
				<PageTitle>Lista zleceń</PageTitle>
				<SearchPanel onChange={handleSubmit(onSubmit)} onReset={handleSubmit(onSubmit)}>
					<InputWithLabel type='text' inputRef={{ ...register('search') }} />
					<SelectWithLabel title={'Filtr'} inputRef={{ ...register('filter') }}>
						<option value='orderNumber'>Numer Zlecenia</option>
						<option value='name'>Imie</option>
						<option value='surname'>Nazwisko</option>
						<option value='hardwareBrand'>Marka</option>
						<option value='hardwareModel'>Model</option>
					</SelectWithLabel>
					<SelectWithLabel title={'Sortuj'} inputRef={{ ...register('sorting') }}>
						<option value='asc'>Rosnaco</option>
						<option value='dsc'>Malejaco</option>
					</SelectWithLabel>

					<StyledButton
						type='reset'
						onClick={() => {
							reset(() => initialFilterValue)
						}}>
						Wyczyść
					</StyledButton>
				</SearchPanel>
				<OrderList handleChangeOpen={handleChangeOpen} orders={orders} />
				{isOpenDetails ? <OrderDetails handleChangeOpen={handleChangeOpen} activeOrder={activeOrder} setOrders={setOrders} orders={orders} /> : null}
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

export default OrdersPage
