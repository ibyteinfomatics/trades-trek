import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

export default function LoginForm() {
  useEffect(() => {
    document.body.classList.add("signUp--page");
    document.body.classList.remove("otp--page");
  }, [])
  return (
    <>
      <div className="site--form--container">
        <div className="form--grid--wrapper">
          <div className="left--form--layout">
            <div className="form--site--logo">
              <Image src="/images/site--logo.svg" alt="" layout="responsive" width={146} height={41} />
            </div>
            <div className="form--title">
              <h1>Get Started is easy!</h1>
            </div>
            <div className="form--content">
              <p>7 days free usage. Payment will commence at end of 7 days. Cancel anytime before then, to halt payment.</p>
            </div>
            <form className="site--form">
              <div className="form--item">
                <input className="form--control" type="text" id="fName" placeholder="Full Name" />
                <label className="form--label" htmlFor="fName">Full Name</label>
              </div>
              <div className="form--item">
                <input className="form--control" type="email" id="email" placeholder="Email Address" />
                <label className="form--label" htmlFor="email">Email Address</label>
              </div>
              <div className="form--item">
                <input className="form--control" type="number" id="phnum" placeholder="Phone Number" />
                <label className="form--label" htmlFor="phnum">Phone Number</label>
              </div>
              <div className="form--item">
                <input className="form--control" type="text" id="username" placeholder="Username" />
                <label className="form--label" htmlFor="username">Username</label>
              </div>
              <div className="form--item">
                <input className="form--control" type="password" id="pwd" placeholder="Password" />
                <label className="form--label" htmlFor="pwd">Password</label>
              </div>
              <div className="form--item">
                <input className="form--control" type="password" id="cnfpwd" placeholder="Confirm Password" />
                <label className="form--label" htmlFor="cnfpwd">Confirm Password</label>
              </div>
              <div className="form--content">
                <p>By registering, you agree to the <Link href="javascript:void(0)"><a>Terms Of Use</a></Link> and <Link href="javascript:void(0)"><a>Privacy Policy.</a></Link></p>
              </div>
              <div className="form--actions">
                <button className="btn" type="submit">Sign Up</button>
              </div>
              <div className="form--bottom--content">
                <p>Already have an account? <Link href="/login"><a>Login</a></Link>
                </p>
              </div>
            </form>
          </div>
          <div className="right--form--layout">
            <div className="right--layout--content text--center">
              <div className="login--icons">
                <div className="purple--bg-circle--transparent">
                  <Image src="/images/purple-circle-transparent.svg" layout="responsive" width={122} height={122} alt="" />
                  <div className="purple--bg-circle">
                    <Image src="/images/purple-circle.svg" layout="responsive" width={78} height={78} alt="" />
                  </div>
                </div>
                
                <div className="portfolio--icon icons">
                  <Image
                    src="/images/portfolio-icon.svg"
                    layout="responsive"
                    width={41}
                    height={38}
                    alt=""
                  />
                </div>
              </div>
              <div className="form--title">
                <h1>Portfolio</h1>
              </div>
              <div className="right--content">
                <p>On teada-tuntud fakt, et lehe kujunduse vaatamisel juhib selle loetav sisu lugeja tähelepanu kõrvale.</p>
              </div>
              <div className="bottom--actions">
                <div className="icon--dots">
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="next--btn">
                  <span>Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
