import Square from "../Square/Square";
import "./Board.css";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // 이미 값이 있거나 이긴 경우
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // 순서 정하기
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "👩🏻‍🚀";
    } else {
      nextSquares[i] = "👽";
    }
    onPlay(nextSquares);
  }

  // 승자 결정하기 (조건)
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner is " + winner;
  } else {
    status = "Next player is " + (xIsNext ? "👩🏻‍🚀" : "👽");
  }

  return (
    <>
      <div className="board-wrapper">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="status">{status}</div>
    </>
  );
}

// 승자 결정하기 (함수)
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (!squares.includes(null)) {
    return "nobody";
  }
  return null;
}
