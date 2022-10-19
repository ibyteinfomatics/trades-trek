import React, { useState } from 'react'

const     SelectGame = () => {
  const [beginnerOption, setBeginnerOption] = useState(false);

  return (
          <div className="grid-block-right right-align">
          <div className="beginner-option">
            Current Competition
            <span
              className="btn"
              onClick={() => setBeginnerOption(!beginnerOption)}
            >
              Beginners
            </span>
            {beginnerOption && (
              <div className="option--list">
                <ul>
                  <li>Beginners </li>
                  <li>Beginners 1</li>
                  <li>Beginners 2</li>
                </ul>
              </div>
            )}
          </div>
        </div>
  )
}

export default SelectGame