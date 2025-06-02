import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import SpinnerLoaderHolder from '../../../shared/components/SpinnerLoaderHolder/SpinnerLoaderHolder'
import { Wrapper } from '../CompanyList/CompanyList.styles'
import CompanyItem from './CompanyItem/CompanyItem'
const CompanyList = ({ selectUser }) => {
	const [companies, setCompanies] = useState()
	const [loading, setLoading] = useState(true)
	const getCompanies = () => {
		axios
			.get('https://108.165.213.119:5000/api/companyAll')
			.then(res => {
				setCompanies(res.data)
				setLoading(false)
			})
			.catch(() => {
				toast.error('Błąd ładowania firm')
				setLoading(false)
			})
	}

	useEffect(() => {
		getCompanies()
	}, [])
	if (!loading) {
		return (
			<Wrapper>
				{companies.length > 0 ? (
					companies.map((item, key) => (
						<CompanyItem key={key} companyEmail={item.email} companyName={item.name} companyId={item._id} selectUser={selectUser}></CompanyItem>
					))
				) : (
					<h4>Brak firm</h4>
				)}
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

export default CompanyList
