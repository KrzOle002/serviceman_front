import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Notes from '../../shared/components/Notes/Notes'
import PageTitle from '../../shared/components/PageTitle/PageTitle'
import SpinnerLoaderHolder from '../../shared/components/SpinnerLoaderHolder/SpinnerLoaderHolder'
import {
	BarContainer,
	BarNotesSection,
	DescriptionContainer,
	NotesContainer,
	StatsBox,
	StatsContainer,
	StatsNumber,
	StatsTitle,
	TopPage,
	Wrapper,
} from './Dashboard.styles'

const Dashboard = () => {
	const [loading, setLoading] = useState(true)
	const [isMobile, setIsMobile] = useState(true)
	const [valOrdersToday, setOrdersToday] = useState(0)
	const [valOrdersActive, setOrdersActive] = useState(0)
	const [valOrdersFinished, setOrdersFinished] = useState(0)
	const [data, setData] = useState()

	const handleResize = () => {
		if (window.innerWidth < 860 || window.innerHeight < 570) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	const getData = () => {
		axios
			.get('http://108.165.213.119:5000/api/orders/count')
			.then(res => {
				setOrdersToday(res.data.ordersToday)
				setOrdersActive(res.data.ordersActive)
				setOrdersFinished(res.data.ordersFinished)
			})
			.catch(() => {
				toast.error('Błąd ładowania statystyk')
				setLoading(false)
			})

		axios
			.get('http://108.165.213.119:5000/api/orders/stats')
			.then(res => {
				setData(res.data)
			})
			.catch(() => {
				toast.error('Błąd ładowania statystyk')
				setLoading(false)
			})

		setLoading(false)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		getData()
	}, [])

	return (
		<Wrapper>
			<PageTitle>Dashboard</PageTitle>
			<TopPage>
				<StatsContainer>
					<StatsBox className='active'>
						{!loading ? (
							<>
								<StatsTitle>Aktywne zlecenia</StatsTitle>
								<StatsNumber>{valOrdersActive}</StatsNumber>
							</>
						) : (
							<SpinnerLoaderHolder />
						)}
					</StatsBox>
					<StatsBox className='finished'>
						{!loading ? (
							<>
								<StatsTitle>Ukończone zlecenia</StatsTitle>
								<StatsNumber>{valOrdersFinished}</StatsNumber>
							</>
						) : (
							<SpinnerLoaderHolder />
						)}
					</StatsBox>
					<StatsBox className='today'>
						{!loading ? (
							<>
								<StatsTitle>Zlecenia dzisiaj</StatsTitle>
								<StatsNumber>{valOrdersToday}</StatsNumber>
							</>
						) : (
							<SpinnerLoaderHolder />
						)}
					</StatsBox>
				</StatsContainer>
				<DescriptionContainer>
					<h1>
						Witaj w aplikacji <p>Serviceman</p>
					</h1>
					<h2>
						Możesz rozpocząć pracę swojego serwisu komputerowego poprzez ustawienie najważniejszych informacji o nim w{' '}
						<NavLink exact to='/account' title='Ustawienia konta'>
							ustawieniach konta
						</NavLink>
						. Jeśli jednak już ustawiłeś informacje możesz rozpocząć przyjmować zlecenia w sekcji{' '}
						<NavLink exact to='/add' title='Dodaj zlecenie'>
							dodaj zlecenie
						</NavLink>
						.
					</h2>
				</DescriptionContainer>
			</TopPage>
			<hr></hr>
			<BarNotesSection>
				<BarContainer>
					<h3>Statystyki za poprzedni tydzień</h3>

					<ResponsiveContainer width='100%' height='100%'>
						<BarChart
							width={500}
							height={300}
							data={data}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey='uv' fill='#82ca9d' name='Ilość zleceń' />
						</BarChart>
					</ResponsiveContainer>
				</BarContainer>
				{isMobile ? (
					<></>
				) : (
					<NotesContainer>
						<Notes />
					</NotesContainer>
				)}
			</BarNotesSection>
		</Wrapper>
	)
}

export default Dashboard
