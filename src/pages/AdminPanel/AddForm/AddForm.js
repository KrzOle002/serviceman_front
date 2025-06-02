import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import InputWithLabel from '../../../shared/components/InputWithLabel/InputWithLabel'
import SelectWithLabel from '../../../shared/components/SelectWithLabel/SelectWithLabel'
import { FormContainer, StyledButton } from './AddForm.styles'
const AddForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const addCompany = async data => {
		await axios
			.post('http://localhost:5000/api/signup', data)
			.then(res => {
				toast.success('Dodano')
			})
			.catch(() => {
				toast.error('Niepowodzenie dodania zlecenia. Spróbuj ponownie')
			})

		reset()
	}
	return (
		<FormContainer onSubmit={handleSubmit(addCompany)}>
			<InputWithLabel
				type='text'
				title={'Mail'}
				required
				inputRef={{ ...register('email', { required: true }) }}
				className={errors.email && 'error'}
			/>
			<InputWithLabel
				type='text'
				title={'Hasło'}
				required
				inputRef={{ ...register('password', { required: true }) }}
				className={errors.password && 'error'}
			/>
			<SelectWithLabel title={'Typ konta'} inputRef={{ ...register('superUser', { required: true }) }}>
				<option value='false'>User</option>
				<option value='true'>Admin</option>
			</SelectWithLabel>

			<StyledButton type='submit'>Dodaj</StyledButton>
		</FormContainer>
	)
}

export default AddForm
