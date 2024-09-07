import CalculatorContainer from './components/CalculatorContainer'

export default function App() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center">
			<h1 className="text-white text-4xl font-bold mb-4 underline-offset-0">Calculator App 🧮</h1>
			<CalculatorContainer />
		</div>
	)
}