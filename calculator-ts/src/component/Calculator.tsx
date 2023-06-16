import React, {useState} from 'react';

const Calculator: React.FC = () => {
    const [result, setResult] = useState<string>('');

    const handleButtonClick = (value: string) => {
        setResult(result + value)
    };


    const handleClear = () => {
        setResult('');   
    };


    const handleCalculate = () => {
        try{
            const calculatedResult = eval(result)
            setResult(calculatedResult.toString())
            
        }catch (error) {
            setResult('Error');
            console.log("Something gone wrong")
        }
    };


    return (

        <div>
            <input type="text" value={result} readOnly />
            <div>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={() => handleClear()}>C</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <button onClick={handleCalculate}>=</button>

        </div>

    );

};

export  default Calculator;