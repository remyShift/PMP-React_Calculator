import useCalculatorStore from "../store"

const buttonStyles = {
	default: "rounded-[50%] w-16 h-16 sm:w-20 sm:h-20 flex items-center text-white text-2xl sm:text-3xl transition-colors duration-200",
	number: "bg-stone-900 hover:bg-stone-800 justify-center",
	operation: "bg-orange-500 hover:bg-orange-400 text-3xl sm:text-4xl justify-center",
	function: "bg-stone-500 hover:bg-stone-400 text-3xl sm:text-4xl justify-center",
	zero: "bg-stone-900 hover:bg-stone-800 rounded-full w-[calc(50%-1.7rem)] sm:w-[192px] h-16 sm:h-20 justify-start pl-6"
};

export default function NumberButton({ children }: { children: React.ReactNode }) {
	const { inputDigit, inputDecimal, clear, performOperation, toggleSign, percentage } = useCalculatorStore();

	const getButtonType = (value: React.ReactNode) => {
		if (typeof value === 'number') return value === 0 ? 'zero' : 'number';
		if (['+', '-', 'x', '/', '='].includes(value as string)) return 'operation';
		if (['AC', '+/-', '%'].includes(value as string)) return 'function';
		return 'number';
	};

	const handleClick = () => {
		const actions = {
			'number': () => inputDigit(children as number),
			',': inputDecimal,
			'AC': clear,
			'+/-': toggleSign,
			'%': percentage,
			'operation': () => performOperation(children === 'x' ? '*' : children as string)
		};

		const action = typeof children === 'number' ? actions.number :
			actions[children as keyof typeof actions] || actions.operation;

		action();
	};

	const buttonType = getButtonType(children);
	const className = `${buttonStyles.default} ${buttonStyles[buttonType as keyof typeof buttonStyles]}`;

	return (
		<button onClick={handleClick} className={className}>
			{children}
		</button>
	);
}