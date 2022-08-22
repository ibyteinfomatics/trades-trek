import { React, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import { userService } from '../../services';
import FormSpinner from '../Spinners/FormSpinner';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
export default function Otp() {
  const router = useRouter();
  const toastId = useRef(null);
  const [otp, setOpt] = useState('');
  const [error, setError] = useState(null);
  const [emailAddress, setEmailAddress] = useState();
  const [btnStatus, setBtnStatus] = useState(false);
  const [isLoaderActive, setLoaderStatus] = useState(false);

  useEffect(() => {
    let email = localStorage.getItem('email');
    if (email) {
      setEmailAddress(email);
    }
  }, []);

  const verifyOtp = async (e) => {
    e.preventDefault();
    setBtnStatus(true);
    setLoaderStatus(true);
    if (otp=== '' || otp.length !==4) {
      setBtnStatus(false);
      setLoaderStatus(false);
      setError('Otp is required');
    } else {
      setError('');
      let email = localStorage.getItem('email');
      const response = await userService.verifyLoginOtp(email,Number(otp));
      if (response.success === true) {
        setBtnStatus(false);
        setLoaderStatus(false);
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.push('/subscription');
      } else if (response.success === false) {
        setBtnStatus(false);
        setLoaderStatus(false);
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error(response.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error(response.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setBtnStatus(false);
        setLoaderStatus(false);
      }
    }
  };

 
  const resendOtp = async () => {
    setOpt('');
    let email = localStorage.getItem('email');
    try {
      const res = await userService
        .resendOtp(email);
      if (res?.success === true) {
        toast.success(res.message);
        setResendOtpClassActive(false);
        setMinutes(1);
        setSeconds(59);
      } else if (res?.success === false) {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error(res.message);
        }
        setResendOtpClassActive(false);
      }
    } catch (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(error);
      }
    }
  };



  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="center--block">
        <div className="small--block text--center">
          <div className="block--title block--back--link">
            <h1>Check your email</h1>
          </div>
          <div className="block--content">
            <p>
              We sent an email to <span>{emailAddress}</span>
            </p>
          </div>

          <form className="otp--form" onSubmit={(e) => verifyOtp(e)} id="create-course-form">

              <div className="form--item otp--input">
                <OtpInput className='otp-group'
                  value={otp}
                  onChange={(opt) => setOpt(opt)}
                  numInputs={4}
                  separator={""}
                />
              </div>
            <div className="info--button">
              <button
                type="submit"
                className="btn btnBgBlue"
                disabled={btnStatus}
              >
                {isLoaderActive ? <FormSpinner /> : 'Verify OTP'}
              </button>
            </div>
          </form>
          <div className="invalid-feedback">{error !== null && error}</div>
          <div className="form--bottom--content">
            <p>
              Don’t get code?{' '}
              <a href="#" onClick={() => resendOtp()}>
                Resend
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
