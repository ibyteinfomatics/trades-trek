import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer'

const InviteFriend = () => {
  const { user } = useSelector((state) => state.userWrapper);
  const [show,setShow]=useState(false)
  return (
    <>
      <div className="center--block Referral">
        <div className="small--block">
          <div className="block--title block--back--link mb--32">
            <h1 className='font-20 textLeft'>Referral</h1>
          </div>
          <div className='flexBox justifyBetween referralNo'>
            <h4 className=''>Total No of referral</h4>
            <h4 className=''>12</h4>
          </div>
          <div className='flexBox justifyBetween referralNo'>
            <h4 className=''>Total No of Qualified referral</h4>
            <h4 className=''>12</h4>
          </div>
          <div className='referEarn'>
            <div className='icon'>
              <img src="/images/reficon.svg" alt="Refer Icon" />
            </div>
            <div className='block--title block--back--link text--center mb--12'>
              <h1 className='font-20'>Refer and Earn</h1>
            </div>
            <p>
              Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri.
            </p>
            <form className='site--form'>
              <div className="form--item">
                <label for="" className="form--label">Referal Code</label>
                <input type={show?"text":"password"} placeholder="**********" className="form--control" readOnly={true} value={user?.user?.yourRefferal} />
                <button onClick={()=>setShow(!show)} type='button' className='btn btn--orange'>COPY CODE</button>
              </div>
              <div className="form--actions">
                <button  className="btn" type="submit">
                  SHARE NOW
                </button>
              </div>
              <Link href="#">
                <a className='terms text--center mt--19'>Terms & Conditions Applied</a>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default InviteFriend