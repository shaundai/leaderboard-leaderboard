import { FormEvent, useState } from 'react'
import './AddPlayer.css'

interface AddPlayerProps {
	handleAddPlayer: (newName: string, avatar: string) => void
}

export const AddPlayer = ({ handleAddPlayer }: AddPlayerProps) => {
	const [playerName, setPlayerName] = useState<string>('')
	const [isChoosingAvatar, setIsChoosingAvatar] = useState(false)

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setPlayerName(e.target.value)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!playerName) {
			return
		} else {
			setIsChoosingAvatar(true)
		}
	}

	const handleSubmitAvatar = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault()
		handleAddPlayer(playerName, e.target.title)
		setPlayerName('')
		setIsChoosingAvatar(false)
	}

	const ChooseAvatarSelection = () => {
		return (
			<div className='choose-avatar-container'>
				<div
					className='choose-avatar-button-container'
					onClick={handleSubmitAvatar}>
					<img
						className='choose-avatar-button'
						src='/src/assets/raphael.png'
						alt='Michaelangelo'
						title='michaelangelo'></img>
				</div>
				<div
					className='choose-avatar-button-container'
					onClick={handleSubmitAvatar}>
					<img
						className='choose-avatar-button'
						src='/src/assets/raphael.png'
						alt='Raphael'
						title='raphael'
					/>
				</div>
				<div
					className='choose-avatar-button-container'
					onClick={handleSubmitAvatar}>
					<img
						className='choose-avatar-button'
						src='/src/assets/leonardo.png'
						alt='Leonardo'
						title='Leonardo'
					/>
				</div>
				<div
					className='choose-avatar-button-container'
					onClick={handleSubmitAvatar}>
					<img
						className='choose-avatar-button'
						src='/src/assets/donatello.png'
						alt='Donatello'
						title='Donatello'
					/>
				</div>
				{`Choose an avatar for ${playerName}`}
			</div>
		)
	}

	return (
		<form className='add-player-form' onSubmit={handleSubmit}>
			{/* {!isChoosingAvatar ? ( */}
				<input
					className='add-player-input'
					type='text'
					value={playerName}
					onChange={handleOnChange}
				/>
			{/* // ) : (
			// 	<ChooseAvatarSelection />
			// )} */}
			<button className='add-player-button' value='Add Player'>
				Add Player
			</button>
		</form>
	)
}
