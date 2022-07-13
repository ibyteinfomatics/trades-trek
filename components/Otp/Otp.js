import { React, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { userService } from '../../services';
import FormSpinner from '../Spinners/FormSpinner';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
export default function Otp() {
  const router = useRouter();
  const toastId = useRef(null);
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const [input4, setInput4] = useState(null);
  const [error, setError] = useState(null);
  const [emailAddress, setEmailAddress] = useState();
  const [btnStatus, setBtnStatus] = useState(false);
  const [isLoaderActive, setLoaderStatus] = useState(false);
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let email = localStorage.getItem('email');

    if (email) {
      setEmailAddress(email);
    }

    if (input1 && input2 && input3 && input4) {
      setError('');
    } else {
      setError('Otp is required');
    }
  }, []);

  const verifyOtp = async (e) => {
    e.preventDefault();
    setBtnStatus(true);
    setLoaderStatus(true);

    if (
      input1 === null ||
      input1 === '' ||
      input2 === null ||
      input2 === '' ||
      input3 === null ||
      input3 === '' ||
      input4 === null ||
      input4 === ''
    ) {
      setBtnStatus(false);
      setLoaderStatus(false);
      setError('Otp is required');
    } else {
      const otp = parseInt(`${input1}${input2}${input3}${input4}`);
      let email = localStorage.getItem('email');
      const response = await userService.verifyLoginOtp(email, otp);
      if (response.success === true) {
        setBtnStatus(false);
        setLoaderStatus(false);
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.push('/dashboard');
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

  const onKeyPressFn = (e) => {
    if (e.which === 13) {
      verifyOtp(e);
    }
  };

  const onKeyDownFn = (event) => {
    if (event.which === 8) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      if (index > 0) {
        setTimeout(() => {
          form.elements[index - 1].focus();
        }, 10);
      }
    }
  };

  const handleChange = (event, input, focusInput) => {
    switch (input) {
      case 'input1':
        setInput1(event.target.value);
        break;
      case 'input2':
        setInput2(event.target.value);
        break;
      case 'input3':
        setInput3(event.target.value);
        break;
      case 'input4':
        setInput4(event.target.value);
        break;
    }

    if (focusInput !== null && event.target.value) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
    }
  };

  const resendOtp = () => {
    let email = localStorage.getItem('email');
    return userService
      .resendOtp(email)
      .then((res) => {
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
      })
      .catch((error) => {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error(error);
        }
      });
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

          <form className="otp--form" onSubmit={(e) => verifyOtp(e)}>
            <div className="form--group grid--4">
              <div className="form--item">
                <input
                  type="text"
                  className="form--control"
                  maxLength={1}
                  onChange={(e) => handleChange(e, 'input1', 'input2')}
                  onKeyPress={(event) => onKeyPressFn(event)}
                  onKeyDown={(event) => onKeyDownFn(event)}
                  autoFocus
                />
              </div>
              <div className="form--item">
                <input
                  type="text"
                  className="form--control"
                  placeholder=""
                  maxLength={1}
                  tabbable="true"
                  onChange={(e) => handleChange(e, 'input2', 'input3')}
                  onKeyPress={(event) => onKeyPressFn(event)}
                  onKeyDown={(event) => onKeyDownFn(event)}
                ></input>
              </div>
              <div className="form--item">
                <input
                  type="text"
                  className="form--control"
                  placeholder=""
                  maxLength={1}
                  tabbable="true"
                  onChange={(e) => handleChange(e, 'input3', 'input4')}
                  onKeyPress={(event) => onKeyPressFn(event)}
                  onKeyDown={(event) => onKeyDownFn(event)}
                ></input>
              </div>
              <div className="form--item">
                <input
                  type="text"
                  className="form--control"
                  placeholder=""
                  maxLength={1}
                  tabbable="true"
                  onChange={(e) => handleChange(e, 'input4', null)}
                  onKeyPress={(event) => onKeyPressFn(event)}
                  onKeyDown={(event) => onKeyDownFn(event)}
                ></input>
              </div>
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
          <div className="invalid-feedback">{error}</div>
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
