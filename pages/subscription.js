import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function Subscription() {
  useEffect(() => {
    document.body.classList.remove("signUp--page")
    document.body.classList.remove("otp--page")
  }, [])
  return (
    <>
      <div className="center--block">
        <div className="small--block">
          <div className="block--title">
            <h1>Subscription Fees</h1>
          </div>
          <div className="block--content">
            <p>You will get access on all our platforms & features.</p>
          </div>

          <div className="block--info">
            <div className="info--title">
                <span>$10,000</span>
                <span>Annual Fee</span>
            </div>
            <div className="info--text">
                <p>7 days free usage. Payment will commence at end of 7 days. Cancel anytime before then, to halt payment</p>
            </div>
          </div>
          <div className="info--button">
            <Link href="/checkout">
                <a className="btn">Continue Checkout</a>
            </Link>
          </div>
          <div className="info--button">
            <Link href="/dashboard">
                <a className="btn">Skip</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
