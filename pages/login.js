import React, { useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"

export default function LoginForm() {
  useEffect(() => {
    document.body.classList.remove("signUp--page")
    document.body.classList.remove("otp--page")
  }, [])
  return (
    <>
      <div className="site--form--container">
        <div className="form--grid--wrapper">
          <div className="left--form--layout">
            <div className="form--site--logo">
              <Image
                src="/images/site--logo.svg"
                alt=""
                layout="responsive"
                width={146}
                height={41}
              />
            </div>
            <div className="form--title">
              <h1>Hi, Welcome Back!</h1>
            </div>
            <div className="form--content">
              <p>
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della
                tipografia e della stampa.
              </p>
            </div>
            <form className="site--form">
              <div className="form--item">
                <input
                  className="form--control"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
                <label className="form--label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form--item">
                <input
                  className="form--control"
                  type="password"
                  id="pwd"
                  placeholder="Password"
                />
                <label className="form--label" htmlFor="pwd">
                  Password
                </label>
              </div>
              <div className="forgot--pwd">
                <Link href="javascript:void(0)">
                  <a>Forgot Password?</a>
                </Link>
              </div>
              <div className="form--actions">
                <button className="btn" type="submit">
                  Log In
                </button>
              </div>
              <div className="form--bottom--content">
                <p>
                  Don’t have an account?{" "}
                  <Link href="/sign-up">
                    <a>Sign Up</a>
                  </Link>
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
  );
}
