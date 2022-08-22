import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedStock } from '../../actions/setStock';
import { DataConvert,TimeConverter } from '../../helpers/DateTimeConverter';
import { orderService } from '../../services/order.service';
import CancelProduct from '../Modal/CancelProduct';


export default function FailedOrderTable({rows,tableStatus}) {
  
  const columns = [
    "ORDER DATE & TIME",
    "SYMBOL",
    "STATUS",
    "TRANSACTION",
    "QUANTITY",
    "ORDER PRICE",
    "Processed at",
   
  ];
  
  
  return (
    <div className="trade-order-status">
      
      <div className="order--table--responsive">
        <table className="order-table">
          <tr>
            {columns.map((item)=>{
              return <th>{item}</th>
            })}
          
          </tr>
          {rows?.map((item)=>{
            return <tr>
              <td>
              {DataConvert(item.createdAt)} <span className="order-time">{TimeConverter(item.createdAt)}</span>
            </td>
            
            <td>{item.symbol}</td>
            <td>{item.status===0?"Pending":"Running"}</td>
            <td>
              {item.action}
              {item.orderType=="Limit"? <span className="order-time">at Limit</span>: <span className="order-time">at Market Open</span>}
             
            </td>
            <td>{item.quantity}</td>
            <td>₦{item.rate} </td>
            <td>
              {DataConvert(item.createdAt)} <span className="order-time">{TimeConverter(item.createdAt)}</span>
            </td>
            
          </tr>
          })}
        </table>
      </div>
     
    </div>
  );
}
