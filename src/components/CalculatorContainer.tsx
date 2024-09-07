import Screen from './Screen'
import Keypad from './Keypad'

export default function Calculator() {
	return (
		<div className="bg-black max-w-md min-w-[400px] h-[80dvh] w-[50dvw] rounded-2xl shadow-lg shadow-stone-800">
			<Screen />
			<Keypad />
		</div>
	)
}