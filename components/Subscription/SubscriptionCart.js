import moment from 'moment-timezone'
import React from 'react'
const SubscriptionCart = ({item,user}) => {
const handlePrint=()=>{
          window.print()
}
  return (
          <div onClick={handlePrint}  className={`block--info subscription ${item?.result?._id==user?.user?.subscriptionId &&item?.status && 'activeSubscription'}`}>
          <div className="info--title">
            <span><span className="currency">₦</span> {item?.result?.packageAmount}</span>
            <span>{item?.result?.packageDuration.toUpperCase()}</span>
          </div>
          <div className="info--text">
            <p>
            {item?.result?.packageDesc}
            </p>
          </div>
          <div className="info--text">
            <p>
           Subscription Purchase Date {moment(item?.createdAt).format('lll')}
            </p>
          </div>
          <div className="info--text">
            <p>
           Subscription Last Update {moment(item?.updatedAt).format('lll')}
            </p>
          </div>
       
        </div>
  )
}

export default SubscriptionCart