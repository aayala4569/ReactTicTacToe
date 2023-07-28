import React from 'react'
import Square from './square'

const Board = () => {
  return (
    <div>
       <div className="board-row">
        <Square />
        
      </div>
      <div className="board-row">
        <Square />
        
      </div>
      <div className="board-row">
        <Square />
        
      </div>
    </div>
  )
}

export default Board
