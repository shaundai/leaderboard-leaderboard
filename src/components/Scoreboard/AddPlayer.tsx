import { FormEvent, useState } from 'react'
import './AddPlayer.css'

interface AddPlayerProps {
	handleAddPlayer: (newName: string) => void
}

export const AddPlayer = ({ handleAddPlayer }: AddPlayerProps) => {
	const [playerName, setPlayerName] = useState<string>('')

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setPlayerName(e.target.value)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!playerName) {
			return
		} else {
			handleAddPlayer(playerName)
			setPlayerName('')
		}
	}
	return (
		<form className='add-player-form' onSubmit={handleSubmit}>
			{' '}
			<input
				className='add-player-input'
				type='text'
				value={playerName}
				onChange={handleOnChange}
			/>
			<button className='add-player-button' value='Add Player'>
				Add Player
			</button>
		</form>
	)
}
