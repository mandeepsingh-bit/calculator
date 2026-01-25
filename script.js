let current = '0';
        let previous = '';
        let operator = null;

        function updateDisplay() {
            document.getElementById('current').textContent = current;
            document.getElementById('previous').textContent = previous;
        }

        function appendNumber(num) {
            if (num === '.' && current.includes('.')) return;
            if (current === '0' && num !== '.') {
                current = num;
            } else {
                current += num;
            }
            updateDisplay();
        }

        function appendOperator(op) {
            if (operator !== null) calculate();
            previous = current + ' ' + op;
            operator = op;
            current = '0';
            updateDisplay();
        }

        function calculate() {
            if (operator === null || previous === '') return;
            
            const prev = parseFloat(previous);
            const curr = parseFloat(current);
            let result;

            switch(operator) {
                case '+':
                    result = prev + curr;
                    break;
                case '-':
                    result = prev - curr;
                    break;
                case '*':
                    result = prev * curr;
                    break;
                case '/':
                    result = prev / curr;
                    break;
                default:
                    return;
            }

            current = result.toString();
            operator = null;
            previous = '';
            updateDisplay();
        }

        function clearDisplay() {
            current = '0';
            previous = '';
            operator = null;
            updateDisplay();
        }

        function deleteDigit() {
            if (current.length === 1) {
                current = '0';
            } else {
                current = current.slice(0, -1);
            }
            updateDisplay();
        }
