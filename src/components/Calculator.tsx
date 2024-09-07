import Screen from './Screen'
import Keypad from './Keypad'

export default function Calculator() {
	return (
		<div className="bg-black max-w-md min-w-[400px] h-[58dvh] w-[45dvw] rounded-lg">
			<Screen />
			<Keypad />
		</div>
	)
}