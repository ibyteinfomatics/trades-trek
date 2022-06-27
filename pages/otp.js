import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function OtpProcess() {
  useEffect(() => {
    document.body.classList.add("otp--page");
    document.body.classList.remove("signUp--page");
  })
  return (
    <>
      <div className="center--block">
        <div className="small--block text--center">
          <div className="block--title block--back--link">
            <Link href="/subscription">
                <a className="back--link"></a> 
            </Link>
            <h1>Check your email</h1>
          </div>
          <div className="block--content">
            <p>We sent an email to <span>johnadam@gmail.com</span></p>
          </div>

          <form className="otp--form">
            <div className="form--group grid--4">
              <div className="form--item">
                <input type="number" className="form--control" />
              </div>
              <div className="form--item">
                <input type="number" className="form--control" />
              </div>
              <div className="form--item">
                <input type="number" className="form--control" />
              </div>
              <div className="form--item">
                <input type="number" className="form--control" />
              </div>
            </div>
          </form>
          <div className="info--button">
            <Link href="javascript:void(0)">
                <a className="btn">Request Code</a>
            </Link>
          </div>
          <div className="form--bottom--content">
            <p>Don’t get code? <Link href="javascript:void(0)"><a>Resend</a></Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
