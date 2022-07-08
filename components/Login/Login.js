import { React, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignupSlider from '../SignupSlider/SignupSlider';
import { useForm } from 'react-hook-form';
import { userService } from '../../services';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

export default function Login() {
  const [btnStatus, setBtnStatus] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBtnStatus(true);
    userService
      .login(data)
      .then((res) => {
        if (res?.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          router.push('/dashboard');
        } else if (res?.success === false && res?.profileStatus === 0) {
          toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setBtnStatus(false);
          localStorage.setItem('email', data.email);
          router.push('/otp');
        } else if (res?.success === false) {
          toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setBtnStatus(false);
        } else {
          toast.error(res, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setBtnStatus(false);
        }
      })
      .catch((error) => {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setBtnStatus(false);
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
            <form className="site--form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form--item">
                <input
                  className={`form--control ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register('email', { required: true, maxLength: 20 })}
                />
                <label className="form--label" htmlFor="email">
                  Email
                </label>
                <div className="invalid-feedback">
                  {errors.email?.type === 'required' && 'Email is required'}
                </div>
              </div>
              <div className="form--item">
                <input
                  className={`form--control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                  type="password"
                  id="pwd"
                  placeholder="Password"
                  {...register('password', { required: true, maxLength: 20 })}
                />
                <label className="form--label" htmlFor="pwd">
                  Password
                </label>
                <div className="invalid-feedback">
                  {errors.password?.type === 'required' &&
                    'Password is required'}
                </div>
              </div>
              <div className="forgot--pwd">
                <Link href="javascript:void(0)">
                  <a>Forgot Password?</a>
                </Link>
              </div>
              <div className="form--actions">
                <button
                  type="submit"
                  className="btn btnBgBlue"
                  disabled={btnStatus}
                >
                  Login
                </button>
              </div>
              <div className="form--bottom--content">
                <p>
                  Don’t have an account?{' '}
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
    </>
  );
}
