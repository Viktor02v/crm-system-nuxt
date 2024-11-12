export const generateColumnStyle = (index: number, total = 1) => {
	// Ensure total is greater than 1 to avoid division by zero
	const adjustedTotal = total > 1 ? total - 1 : 1
	const intensity = 100 - (index / adjustedTotal) * 50
	// Hue, saturation, lightness, alpha (opacity)
	return { backgroundColor: `hsla(280, 52%, ${intensity}%, 30%)` }
}