import useCalculatorStore from "../store"

export default function Screen() {
	const displayValue = useCalculatorStore((state) => state.displayValue)

	return (
		<div className="bg-zinc-900 h-22 m-8 rounded-lg flex items-center justify-end p-4 text-white text-3xl shadow-inner shadow-slate-950">
			{displayValue}
		</div>
	);
}