import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import SpinnerLoaderHolder from '../../SpinnerLoaderHolder/SpinnerLoaderHolder'
import NoteItem from '../NoteItem/NoteItem'
import { AddButton, Content, SearchBar, TopLayer, Wrapper } from './NoteList.styles'

const NoteList = () => {
	const [notes, setNotes] = useState()
	const [loading, setLoading] = useState(true)
	const { register, handleSubmit, reset } = useForm()

	const onSubmit = data => {
		axios
			.post('https://108.165.213.119:5000/api/note', data)
			.then(res => {
				toast.success('Notatka utworzona')
				getNotes()
			})
			.catch(() => {
				toast.error('Niepowodzenie tworzenia notatki. Spróbuj ponownie')
			})
		reset()
	}

	const getNotes = () => {
		axios
			.get('https://108.165.213.119:5000/api/notes')
			.then(res => {
				setNotes(res.data)
				setLoading(false)
			})
			.catch(() => {
				toast.error('Błąd ładowania notatek')
				setLoading(false)
			})
	}

	const deleteNote = async noteId => {
		await axios
			.delete(`https://108.165.213.119:5000/api/note/${noteId}`)
			.then(res => {
				let newNotes = notes.filter(item => item._id !== noteId)
				setNotes(newNotes)
				toast.success('Notatka usunięta')
			})
			.catch(err => {
				toast.error('Niepowodzenie usunięcia notatki. Spróbuj ponownie')
			})
	}

	useEffect(() => {
		getNotes()
	}, [])

	if (!loading) {
		return (
			<Wrapper as='form' onSubmit={handleSubmit(onSubmit)}>
				<TopLayer>
					<SearchBar maxLength={90} label='Description' id='description' name='description' type='text' {...register('note', { required: true })} />
					<AddButton>DODAJ</AddButton>
				</TopLayer>
				<Content>
					{notes.length > 0 ? (
						notes.map((item, key) => <NoteItem note={item.note} key={key} deleteNote={deleteNote} noteId={item._id}></NoteItem>)
					) : (
						<h4>Brak notatek</h4>
					)}
				</Content>
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

export default NoteList
