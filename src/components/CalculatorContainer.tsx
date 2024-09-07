import Screen from './Screen'
import Keypad from './Keypad'

export default function Calculator() {
	return (
		<div className="bg-black max-w-md min-w-[400px] h-[65dvh] w-[45dvw] rounded-2xl shadow-lg shadow-stone-800">
			<Screen />
			<Keypad />
		</div>
	)
}