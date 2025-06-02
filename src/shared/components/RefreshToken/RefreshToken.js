import { useEffect } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'

axios.defaults.withCredentials = true

let firstRender = true

const RefreshToken = () => {
	const refreshToken = async () => {
		const res = await axios
			.get('http://localhost:5000/api/refresh', {
				withCredentials: true,
			})
			.catch(() => toast.error('Błąd z odświeżeniem tokenu'))
		const data = await res.data
		return data
	}

	useEffect(() => {
		if (firstRender) {
			refreshToken()
			firstRender = false
		}
		let interval = setInterval(() => {
			refreshToken()
		}, 1000 * 25)
		return () => clearInterval(interval)
	}, [])

	return <span></span>
}

export default RefreshToken
