import Screen from './Screen'
import Keypad from './Keypad'
import TextAuthor from './TextAuthor'

export default function Calculator() {
	return (
		<div className="bg-black w-[95dvw] md:w-[90dvw] max-w-[400px] h-[77dvh] md:h-[85dvh] max-h-[750px] rounded-2xl shadow-lg shadow-stone-800 mx-auto flex flex-col justify-between">
			<div>
				<Screen />
				<Keypad />
			</div>
			<TextAuthor />
		</div>
	)
}