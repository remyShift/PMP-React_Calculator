import CalculatorContainer from './components/CalculatorContainer'

export default function App() {
	return (
		<div className="h-[100dvh] w-[100dvw] flex flex-col items-center justify-center">
			<h1 className="text-white text-4xl font-bold mb-1 md:mb-8 underline">Calculator App 🧮</h1>
			<CalculatorContainer />
		</div>
	)
}