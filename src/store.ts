import create from 'zustand';

interface CalculatorState {
	displayValue: string;
	previousValue: number | null;
	operation: string | null;
	waitingForOperand: boolean;
	inputDigit: (digit: number) => void;
	inputDecimal: () => void;
	clear: () => void;
	performOperation: (nextOperation: string) => void;
	toggleSign: () => void;
	percentage: () => void;
}

const MAX_DIGITS = 12;

const formatNumber = (num: number): string => {
	if (!isFinite(num)) {
		return num > 0 ? 'Overflow' : '-Overflow';
	}

	const stringNum = num.toString();

	if (stringNum.length > MAX_DIGITS) {
		return num.toExponential(MAX_DIGITS - 5).replace(/e\+/, 'e');
	}

	const parts = stringNum.split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	return parts.join(',');
};

const useCalculatorStore = create<CalculatorState>((set) => ({
	displayValue: '0',
	previousValue: null,
	operation: null,
	waitingForOperand: false,

	inputDigit: (digit) => set((state) => {
		if (state.waitingForOperand) {
			return {
				displayValue: formatNumber(digit),
				waitingForOperand: false
			};
		}
		const currentValue = parseFloat(state.displayValue.replace(/\s/g, '').replace(',', '.'));
		const newValue = currentValue === 0 ? digit : currentValue * 10 + digit;
		return {
			displayValue: formatNumber(newValue),
		};
	}),

	inputDecimal: () => set((state) => {
		if (state.waitingForOperand) {
			return {
				displayValue: '0,',
				waitingForOperand: false
			};
		} else if (state.displayValue.indexOf(',') === -1) {
			return {
				displayValue: state.displayValue + ',',
				waitingForOperand: false
			};
		}
		return {};
	}),

	clear: () => set({
		displayValue: '0',
		previousValue: null,
		operation: null,
		waitingForOperand: false
	}),

	performOperation: (nextOperation) => set((state) => {
		const { displayValue, previousValue, operation } = state;
		const inputValue = parseFloat(displayValue);

		if (previousValue == null) {
			return {
				previousValue: inputValue,
				displayValue: formatNumber(inputValue),
				operation: nextOperation,
				waitingForOperand: true
			};
		}

		if (operation) {
			const currentValue = previousValue || 0;
			const newValue = performCalculation(currentValue, inputValue, operation);

			return {
				previousValue: newValue,
				displayValue: formatNumber(newValue),
				operation: nextOperation,
				waitingForOperand: true
			};
		}

		return {};
	}),

	toggleSign: () => set((state) => ({
		displayValue: formatNumber(parseFloat(state.displayValue) * -1)
	})),

	percentage: () => set((state) => ({
		displayValue: formatNumber(parseFloat(state.displayValue) / 100)
	}))
}));

function performCalculation(previousValue: number, currentValue: number, operation: string): number {
	switch (operation) {
		case '+': return previousValue + currentValue;
		case '-': return previousValue - currentValue;
		case '*': return previousValue * currentValue;
		case '/': return previousValue / currentValue;
		default: return currentValue;
	}
}

export default useCalculatorStore;