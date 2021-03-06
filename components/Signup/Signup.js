import { React, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignupSlider from '../SignupSlider/SignupSlider';
import { useForm } from 'react-hook-form';
import { userService } from '../../services';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions/users';


export default function Signup() {
  const [btnStatus, setBtnStatus] = useState(false);
  const router = useRouter();
  const [validate,setValidate]=useState(false)
  const [error,setError]=useState()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // setBtnStatus(true);
   if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
    userService
    .signup(data)
    .then((res) => {
      if (res?.success === true) {
        setValidate(true)
        localStorage.setItem('email', data.email);
        setError(res.message)
        localStorage.setItem('otp', data.email);
        dispatch(setUser(res.user));
        router.push('/otp');
      } else if (res?.success === false) {
        setValidate(true)
        setError(res.message)
        setBtnStatus(false);
      } else {
        setValidate(true)
        setError(res)
        setBtnStatus(false);
      }
    })
    .catch((error) => {
    setValidate(true)

      setError(error.message)
      setBtnStatus(false);
    });
   }else{
    setValidate(true)
    setError('Please Fill Valid Email')
   }
  };
 
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
              <h1>Get Started is easy!</h1>
            </div>
            <div className="form--content">
              <p>
                7 days free usage. Payment will commence at end of 7 days.
                Cancel anytime before then, to halt payment.
              </p>
            </div>
            {validate &&  <div className="" style={{border:'1px solid red',margin:'20px'}}>
              <p style={{textAlign:'center',padding:'10px',color:'red'}}>{error}</p>
          </div>}
            <form className="site--form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form--item">
                <input
                  className={`form--control ${
                    errors.fullName ? 'is-invalid' : ''
                  }`}
                  type="text"
                  id="fName"
                  placeholder="Full Name"
                  {...register('fullName', {
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                  })}
                />
                <label className="form--label" htmlFor="fName">
                  Full Name
                </label>
                <div className="invalid-feedback">
                  {errors.fullName?.type === 'required' &&
                    'Fullname is required'}
                  {errors.fullName?.type === 'minLength' &&
                    'Fullname should be atleast 3 characters'}
                  {errors.fullName?.type === 'maxLength' &&
                    'Fullname should be less than 20 characters'}
                </div>
              </div>
              <div className="form--item">
                <input
                  className={`form--control ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  {...register('email', { required: true })}
                />
                <label className="form--label" htmlFor="email">
                  Email Address
                </label>
                <div className="invalid-feedback">
                  {errors.email?.type === 'required' && 'Email is required'}
                </div>
              </div>
              <div className="form--item phoneNumber">
                <div className='inputGroup'>
                <span>+234</span>
                <input
                  className={`form--control ${
                    errors.phone ? 'is-invalid' : ''
                  }`}
                  type="tel"
                  id="phnum"
                  placeholder="Phone Number"
                  {...register('phone', {
                    required: true,
                    maxLength: 11,
                    minLength: 11,
                    pattern: /^[0-9]+/,
                  })}
                />
                </div>
                <label className="form--label" htmlFor="phnum">
                  Phone Number
                </label>
                <div className="invalid-feedback">
                  {errors.phone?.type === 'required' &&
                    'Phone number is required'}
                  {errors.phone?.type === 'minLength' &&
                    'Phone number must be atleast 11 digit'}
                  {errors.phone?.type === 'maxLength' &&
                    'Phone number must be atleast 11 digit'}
                  {errors.phone?.type === 'pattern' && 'Only digits allow'}
                </div>
              </div>
              <div className="form--item">
                <input
                  className={`form--control ${
                    errors.username ? 'is-invalid' : ''
                  }`}
                  type="text"
                  id="username"
                  placeholder="username"
                  {...register('username', {
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                  })}
                />
                <label className="form--label" htmlFor="username">
                  username
                </label>
                <div className="invalid-feedback">
                  {errors.username?.type === 'required' &&
                    'Username is required'}
                  {errors.username?.type === 'minLength' &&
                    'Username should be atleast 3 characters'}
                  {errors.username?.type === 'maxLength' &&
                    'Username should be less than 20 characters'}
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
                  {...register('password', {
                    required: true,
                    maxLength: 15,
                    minLength: 8,
                  })}
                />
                <label className="form--label" htmlFor="pwd">
                  Password
                </label>
                <div className="invalid-feedback">
                  {errors.password?.type === 'required' &&
                    'Password is required'}
                  {errors.password?.type === 'minLength' &&
                    'Password should be atleast 8 characters'}
                  {errors.password?.type === 'maxLength' &&
                    'Password should be less than 15 characters'}
                </div>
              </div>
              <div className="form--item">
                <input
                  className={`form--control ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  type="password"
                  id="cnfpwd"
                  placeholder="Confirm Password"
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value) => {
                      if (watch('password') != value) {
                        return 'Confirm password does not match';
                      }
                    },
                  })}
                />
                <label className="form--label" htmlFor="cnfpwd">
                  Confirm Password
                </label>
                <div className="invalid-feedback">
                  {console.log(errors)}
                  {errors.confirmPassword?.type === 'required' &&
                    'Confirm password is required'}
                  {errors.confirmPassword?.type === 'validate' &&
                    errors.confirmPassword?.message}
                </div>
              </div>
              <div className="form--content">
                <p>
                  By registering, you agree to the{' '}
                  <Link href="javascript:void(0)">
                    <a>Terms Of Use</a>
                  </Link>{' '}
                  and{' '}
                  <Link href="javascript:void(0)">
                    <a>Privacy Policy.</a>
                  </Link>
                </p>
              </div>
              <div className="form--actions">
                <button className="btn" type="submit">
                  Sign Up
                </button>
              </div>
              <div className="form--bottom--content">
                <p>
                  Already have an account?{' '}
                  <Link href="/">
                    <a>Login</a>
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
