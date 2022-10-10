import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { userService } from "../services";

export default function Subscription() {
  const [emailAddress, setEmailAddress] = useState();
  const router=useRouter()
  useEffect(() => {
    document.body.classList.remove("signUp--page");
    document.body.classList.remove("otp--page");
  }, []);
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      setEmailAddress(email);
    }
  }, []);
  const handleFreemium = () => {
    userService
      .subscriptionUpdate(emailAddress, "Freemium")
      .then((res) => {
       router.push('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
              <p>
                7 days free usage. Payment will commence at end of 7 days.
                Cancel anytime before then, to halt payment
              </p>
            </div>
          </div>
          <div className="info--button">
            <Link href="/checkout">
              <a className="btn">Premimum</a>
            </Link>
          </div>
          <div className="info--button">
            <Link href="#">
              <a className="btn" onClick={handleFreemium}>
                Freemium
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
