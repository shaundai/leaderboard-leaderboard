export const randomNumberFromInterval = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export const playerIncrement = randomNumberFromInterval(-20, 8)