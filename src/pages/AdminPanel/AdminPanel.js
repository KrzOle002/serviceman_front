import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import InputWithLabel from '../../shared/components/InputWithLabel/InputWithLabel'
import AddForm from './AddForm/AddForm'
import { CompaniesData, CompanyAdd, CompanyOptions, StyledButton, Wrapper } from './AdminPanel.styles'
import CompanyList from './CompanyList/CompanyList'
const AdminPanel = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const [user, setUser] = useState('Nie wybrano')
	const [isSelected, setSelected] = useState(false)

	const resetPassword = data => {
		const company = {
			email: user,
			password: data.newPassword,
		}
		axios
			.post('http://108.165.213.119:5000/api/passwd', company)
			.then(res => {
				toast.success('Hasło zmienione')
				setSelected(false)
				setUser('Nie wybrano')
			})
			.catch(() => {
				toast.error('Niepowodzenie zmiany hasła. Spróbuj ponownie')
			})
		reset()
	}

	const selectUser = id => {
		setUser(id)
		setSelected(true)
	}
	return (
		<Wrapper>
			<CompanyAdd>
				<AddForm />
			</CompanyAdd>
			<CompaniesData>
				<CompanyList selectUser={selectUser} />
			</CompaniesData>
			<CompanyOptions onSubmit={handleSubmit(resetPassword)}>
				{user}
				<InputWithLabel
					title={'Nowe hasło'}
					type={'text'}
					inputRef={{
						...register('newPassword', { required: true }),
					}}
					required
					className={errors.newPassword && 'error'}
				/>
				<StyledButton disabled={isSelected ? false : true} type='submit'>
					Zmień hasło
				</StyledButton>
			</CompanyOptions>
		</Wrapper>
	)
}

export default AdminPanel
