import Button from './Button'

function KeypadRow({ numbers }: { numbers: (number | string)[] }) {
	return (
		<div className="flex justify-between mx-auto w-full">
			{numbers.map((number) => (
				<Button key={number}>{number}</Button>
			))}
		</div>
	);
}

export default function Keypad() {
	return (
		<div className="flex flex-col space-y-2 mt-6 w-full max-w-sm mx-auto">
			<KeypadRow numbers={['AC', '+/-', '%', '/']} />
			<KeypadRow numbers={[7, 8, 9, 'x']} />
			<KeypadRow numbers={[4, 5, 6, '-']} />
			<KeypadRow numbers={[1, 2, 3, '+']} />
			<KeypadRow numbers={[0, ',', '=']} />
		</div>
	);
}