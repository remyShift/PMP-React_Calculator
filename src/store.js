import create from 'zustand';

const useCalculatorStore = create((set) => ({
  displayValue: '0',
  previousValue: null,
  operation: null,
  waitingForOperand: false,

  inputDigit: (digit) => set((state) => ({
    displayValue: state.waitingForOperand
      ? String(digit)
      : state.displayValue === '0'
      ? String(digit)
      : state.displayValue + digit,
    waitingForOperand: false
  })),

  inputDecimal: () => set((state) => {
    if (state.waitingForOperand) {
      return {
        displayValue: '0.',
        waitingForOperand: false
      };
    } else if (state.displayValue.indexOf('.') === -1) {
      return {
        displayValue: state.displayValue + '.',
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
        displayValue: String(inputValue),
        operation: nextOperation,
        waitingForOperand: true
      };
    }

    if (operation) {
      const currentValue = previousValue || 0;
      const newValue = performCalculation(currentValue, inputValue, operation);

      return {
        previousValue: newValue,
        displayValue: String(newValue),
        operation: nextOperation,
        waitingForOperand: true
      };
    }

    return {};
  })
}));

function performCalculation(previousValue, currentValue, operation) {
  switch (operation) {
    case '+': return previousValue + currentValue;
    case '-': return previousValue - currentValue;
    case '*': return previousValue * currentValue;
    case '/': return previousValue / currentValue;
    default: return currentValue;
  }
}

export default useCalculatorStore;