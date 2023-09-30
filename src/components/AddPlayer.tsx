import { FormEvent, useState } from 'react'

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
		handleAddPlayer(playerName)
	}

	return (
		<div className='add-player-form'>
			<form onSubmit={handleSubmit}>
				<input type='text' value={playerName} onChange={handleOnChange} />
				<input type='submit' value='Add Player' />
			</form>
		</div>
	)
}
