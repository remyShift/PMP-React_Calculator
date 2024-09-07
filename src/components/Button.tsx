import useCalculatorStore from "../store"

export default function NumberButton({ children }: { children: React.ReactNode }) {
	const { inputDigit, inputDecimal, clear, performOperation, toggleSign, percentage } = useCalculatorStore();

	const handleClick = () => {
		if (typeof children === 'number') {
			inputDigit(children);
		} else if (children === ',') {
			inputDecimal();
		} else if (children === 'AC') {
			clear();
		} else if (children === '+/-') {
			toggleSign();
		} else if (children === '%') {
			percentage();
		} else if (typeof children === 'string' && ['+', '-', 'x', '/', '='].includes(children)) {
			performOperation(children === 'x' ? '*' : children);
		}
	};

	if (children === 'AC' || children === '+/-' || children === '%') {
		return (
			<button onClick={handleClick} className="bg-stone-500 rounded-[50%] w-24 h-24 flex items-center justify-center text-white text-4xl hover:bg-stone-400 transition-colors duration-200">
				{children}
			</button>
		)
	}
	if (typeof children === 'string' && children !== ',') {
		return (
			<button onClick={handleClick} className="bg-orange-500 rounded-[50%] w-24 h-24 flex items-center justify-center text-white text-4xl hover:bg-orange-400 transition-colors duration-200">
				{children}
			</button>
		)
	} else if (children === 0) {
		return (
			<button onClick={handleClick} className="bg-stone-900 rounded-full w-[200px] h-24 flex items-center justify-start pl-7 text-white text-3xl hover:bg-stone-800 transition-colors duration-200">
				{children}
			</button>
		)
	}
	return (
		<button onClick={handleClick} className="bg-stone-900 rounded-[50%] w-24 h-24 flex items-center justify-center text-white text-3xl hover:bg-stone-800 transition-colors duration-200">
			{children}
		</button>
	);

}