import React, { useEffect, useState } from 'react'
import { FiUnderline } from 'react-icons/fi';
import './style.css'
// X -> false
// O -> true
function Squares({ value, onClick, square }) {
    return <button onClick={onClick} className={value ? "square active":"square"}>{value}</button>
}

const TicTacToe = () => {

    const [turn, setTurn] = useState(false);
    const [square, setSquare] = useState(Array(9).fill(''));
    const [status, setStatus] = useState('');
    function handleEvent(){
    setSquare(Array(9).fill(''))
}
    function handleClick(getValue) {
        let cpySquare = [...square];

        if (cpySquare[getValue]) return;
        cpySquare[getValue] = turn ? 'O' : 'X';
        setTurn(!turn);
        setSquare(cpySquare);

    }

    function getWinner() {

        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (square[x] && square[x] == square[y] && square[y] == square[z]) {

                return square[x];
            }
        }
        return null;

    }

    useEffect(() => {
        if (!getWinner(square) && square.every((items) => items != "")) {
            setStatus("The Match is Draw !!");
        }
        else if (getWinner()) {
            setStatus(`The Winner is ${getWinner(square)}`)
        }
        else {
            setStatus(`The Next Player is ${turn ? 'O' : 'X'}`);
        }
    }, [square, turn])

    return (
        <div className="ttt-container">
                <div className="row">
                    <Squares value={square[0]} onClick={() => handleClick(0)} square={square}/>
                    <Squares value={square[1]} onClick={() => handleClick(1)} square={square}/>
                    <Squares value={square[2]} onClick={() => handleClick(2)} square={square}/>
                </div>
                <div className="row">
                    <Squares value={square[3]} onClick={() => handleClick(3)} square={square}/>
                    <Squares value={square[4]} onClick={() => handleClick(4)} square={square}/>
                    <Squares value={square[5]} onClick={() => handleClick(5)} square={square}/>
                </div>
                <div className="row">
                    <Squares value={square[6]} onClick={() => handleClick(6)} square={square}/>
                    <Squares value={square[7]} onClick={() => handleClick(7)} square={square}/>
                    <Squares value={square[8]} onClick={() => handleClick(8)} square={square}/>
                </div>
                <h1>{status}</h1>
                <button  onClick={handleEvent}>Restart</button>
            </div>

    )
}

export default TicTacToe
