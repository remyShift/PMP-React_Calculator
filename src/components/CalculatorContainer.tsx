import Screen from './Screen'
import Keypad from './Keypad'

export default function Calculator() {
	return (
		<div className="bg-black w-[90dvw] max-w-md min-w-[280px] h-[95dvh] max-h-[700px] rounded-2xl shadow-lg shadow-stone-800 mx-auto my-4">
			<Screen />
			<Keypad />
		</div>
	)
}