import React from "react";
import IncreaseDecrease from "./IncreaseDecrease";

const HoldingInfo = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <table  >
        <tr>
          <td>TOTAL VALUE</td>
          <td>TODAY'S CHANGE</td>
          <td>TODAY GAIN/LOSS</td>
        </tr>
        <tr>
          <td>
            <h1>$2,3333</h1>
          </td>
          {IncreaseDecrease(-2,2)}
          {IncreaseDecrease(0,2)}
        </tr>
      </table>
    </div>
  );
};

export default HoldingInfo;
