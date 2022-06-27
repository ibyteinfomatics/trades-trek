import React, { useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import SignupSlider from "../components/SignupSlider/SignupSlider";
import Footer from "../components/Footer/Footer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

export default function LoginForm() {
  
    useEffect(() => {
      document.body.classList.remove("signUp--page")
      document.body.classList.remove("otp--page")
    }, [])

  // const sliderRef = useState(null)

  // const settings = {
  //   fade: true ,
  //   dots: true,
  //   speed: 500, // ms
  //   autoplay: true,
  //   initialSlide: 0,
  //   lazyLoad: true,
  //   autoplaySpeed: 2000
  // };
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
              <SignupSlider />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
