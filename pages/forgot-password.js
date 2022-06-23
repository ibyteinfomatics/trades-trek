import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function ForgotPassword() {
  useEffect(() => {
    document.body.classList.remove("signUp--page")
    document.body.classList.remove("otp--page")
  }, [])
  return (
    <>
      <div className="center--block">
        <div className="small--block">
          <div className="block--title block--back--link text--center">
            <Link href="/subscription">
                <a className="back--link"></a> 
            </Link>
            <h1>Forgot Password</h1>
          </div>
          <div className="info--text mt--12">
            <p>Enter your email associated with account. <br />
            We’ll send you password reset link.</p>
          </div>
          <form className="site--form">
            <div className="form--item">
              <input type="email" id="email" placeholder="Email" className="form--control" />
              <label htmlFor="email" className="form--label">Email</label>
            </div>
          </form>
          <div className="info--button mt--12">
            <Link href="javascript:void(0)">
                <a className="btn">Submit</a>
            </Link>
          </div>
          <div className="form--bottom--content">
            <p>Already have an account? <Link href="/login"><a>Log In</a></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
