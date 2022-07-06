import Link from 'next/link'
import React from 'react'

export default function TradeOrderStatus() {
  return (
    <div className='trade-order-status'>
        <div className='table-row-gap mt-33 mb-26'>
            <h4 className='font-18 font-semi-bold'>Open Trades</h4>
            <p className='text-gray font-16'>Open trades is a list of all your pendings transactions</p>
        </div>
        <div className='order--table--responsive'>
        <table className='order-table'>
            <tr>
                <th>Order Date & Time</th>
                <th>Symbol</th>
                <th>Status</th>
                <th>Transaction</th>
                <th>Quantity</th>
                <th>Order Price</th>
                <th>Processed at</th>
                <th>Expire On</th>
                <th>Order #</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>May 19, 2022 <span className='order-time'>04:35:00 PM</span></td>
                <td>
                    AAPL2220E138
                </td>
                <td>
                    Pending
                </td>
                <td>
                    Option: Buy to Open
                    <span className='order-time'>at Market Open</span>
                </td>
                <td>
                    2
                </td>
                <td>
                    n/o
                </td>
                <td>
                    May 19, 2022
                    <span className='order-time'>03:00:03 AM</span>
                </td>
                <td>
                    May 19, 2022
                    <span className='order-time'>04:35:00 PM</span>
                </td>
                <td>
                    5787799
                </td>
                <td>
                    <button type='button' className='btn-cancel border-purple'>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.07185 2.76702C-0.341055 5.17992 -0.341055 9.11109 2.07185 11.524C4.48476 13.9369 8.41593 13.9369 10.8288 11.524C13.2417 9.11109 13.2417 5.17992 10.8288 2.76702C8.41593 0.354108 4.48476 0.354108 2.07185 2.76702ZM2.74547 3.44063C4.79525 1.39084 8.10544 1.39084 10.1552 3.44063C12.205 5.49042 12.205 8.8006 10.1552 10.8504C8.10544 12.9002 4.79525 12.9002 2.74547 10.8504C0.695679 8.8006 0.695679 5.49042 2.74547 3.44063ZM3.75589 5.12467L5.77673 7.14551L3.75589 9.16635L4.4295 9.83997L6.45034 7.81912L8.47119 9.83997L9.1448 9.16635L7.12396 7.14551L9.1448 5.12467L8.47119 4.45105L6.45034 6.47189L4.4295 4.45105L3.75589 5.12467Z" fill="#8000FF"/>
                        </svg>                    
                        Cancel
                    </button>
                </td>
            </tr>
        </table>
        </div>
        <div className='bg-purple-block mt-31 mb-31'>
            <ul>
                <li>
                    All order times are in Eastern Standard Time.
                </li>
                <li>
                    Market-Open orders can only be cancelled when the markets are closed.
                </li>
                <li>
                    Limit/Stop orders can be cancelled when the markets are closed, or after 20 minutes (depending on competition) of their entry if markets are open.
                </li>
                <li>
                    Market orders can’t be cancelled at all.
                </li>
            </ul>
        </div>
        <div className='table-row-gap'>
            <h4 className='font-18 font-bold'>Failed Trades</h4>
            <p className='font-16 font-gray'>
                Note: &lsquo;Volume At Fail&lsquo; is the volume recorded at the time the trade is executed. It will not be the same as the last volume recorded for a day, which is what is displayed in historical pricing details.
            </p>
        </div>
        <div className='order--table--responsive'>
        <table className='order-table mt-26 mb-26'>
        <tr>
            <th>Failed On</th>
            <th>Order Date & Time</th>
            <th>Symbol</th>
            <th>Status</th>
            <th>Transaction</th>
            <th>Quantity</th>
            <th>Order Price</th>
            <th>Price at Fail</th>
            <th>Volume at Fail</th>
            <th>Diversified On</th>
            <th>Order #</th>
        </tr>
        <tr>
            <td>May 19, 2022 <span className='order-time'>04:35:00 PM</span></td>
            <td>
                AAPL2220E138
            </td>
            <td>AApll</td>
            <td>
                Diversification
                <span className='order-time'>Rule</span>
            </td>
            <td>
                Option: Buy to Open
                <span className='order-time'>at Market Open</span>
            </td>
            <td>10</td>
            <td>$156.02</td>
            <td>Market - $0.00</td>
            <td>
                5787799
            </td>
            <td>
                May 19, 2022
                <span className='order-time'>03:00:03 AM</span>
            </td>
            <td>
                5787799
            </td>
        </tr>
    </table>
    </div>
    <div className='table-row-gap show-data mt-26 pb-26'>
        <p className='font-16'>Showing the most recent failed trades from the last 30 days</p>
        <div className='btn--group form--actions'>
            <Link href="/Dashboard/confirm-dialog-box">
            <a className='btn form--submit'>Preview Order</a>
            </Link>
        </div>
    </div>
    </div>
  )
}
