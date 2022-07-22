import Link from 'next/link';
import React from 'react';
import { DataConvert,TimeConverter } from '../../helpers/DateTimeConverter';

export default function TradeOrderTable({columns,rows}) {
  
  return (
    <div className="trade-order-status">
      <div className="table-row-gap mt-33 mb-26">
        <h4 className="font-18 font-semi-bold">Open Trades</h4>
        <p className="text-gray font-16">
          Open trades is a list of all your pendings transactions
        </p>
      </div>
      <div className="order--table--responsive">
        <table className="order-table">
          <tr>
            {columns.map((item)=>{
              return <th>{item}</th>
            })}
          
          </tr>
          {rows.map((item)=>{
            return <tr>
              <td>
              {DataConvert(item.createdAt)} <span className="order-time">{TimeConverter(item.createdAt)}</span>
            </td>
            
            <td>{item.symbol}</td>
            <td>{item.status===0?"Pending":"Running"}</td>
            <td>
              Option: Buy to Open
              <span className="order-time">at Market Open</span>
            </td>
            <td>{item.quantity}</td>
            <td>{item.rate}</td>
            <td>
              May 19, 2022
              <span className="order-time">03:00:03 AM</span>
            </td>
            <td>
              May 19, 2022
              <span className="order-time">04:35:00 PM</span>
            </td>
            <td>5787799</td>
            <td>
              <button type="button" className="btn-cancel border-purple">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.07185 2.76702C-0.341055 5.17992 -0.341055 9.11109 2.07185 11.524C4.48476 13.9369 8.41593 13.9369 10.8288 11.524C13.2417 9.11109 13.2417 5.17992 10.8288 2.76702C8.41593 0.354108 4.48476 0.354108 2.07185 2.76702ZM2.74547 3.44063C4.79525 1.39084 8.10544 1.39084 10.1552 3.44063C12.205 5.49042 12.205 8.8006 10.1552 10.8504C8.10544 12.9002 4.79525 12.9002 2.74547 10.8504C0.695679 8.8006 0.695679 5.49042 2.74547 3.44063ZM3.75589 5.12467L5.77673 7.14551L3.75589 9.16635L4.4295 9.83997L6.45034 7.81912L8.47119 9.83997L9.1448 9.16635L7.12396 7.14551L9.1448 5.12467L8.47119 4.45105L6.45034 6.47189L4.4295 4.45105L3.75589 5.12467Z"
                    fill="#8000FF"
                  />
                </svg>
                Cancel
              </button>
            </td>
          </tr>
          })}
        </table>
      </div>
     
    </div>
  );
}
