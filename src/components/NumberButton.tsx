export default function NumberButton({ children }: { children: React.ReactNode }) {
	if (children === 'AC' || children === '+/-' || children === '%') {
		return (
			<button className="bg-stone-500 rounded-[50%] w-20 h-20 flex items-center justify-center text-white text-4xl hover:bg-stone-400 transition-colors duration-200">
				{children}
			</button>
		)
	}
	if (typeof children === 'string' && children !== ',') {
		return (
			<button className="bg-orange-500 rounded-[50%] w-20 h-20 flex items-center justify-center text-white text-4xl hover:bg-orange-400 transition-colors duration-200">
				{children}
			</button>
		)
	} else if (children === 0) {
		return (
			<button className="bg-stone-900 rounded-full w-[175px] h-20 flex items-center justify-start pl-7 text-white text-3xl hover:bg-stone-800 transition-colors duration-200">
				{children}
			</button>
		)
	}
	return (
		<button className="bg-stone-900 rounded-[50%] w-20 h-20 flex items-center justify-center text-white text-3xl hover:bg-stone-800 transition-colors duration-200">
			{children}
		</button>
	);
}