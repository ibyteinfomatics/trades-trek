import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { userService } from "../../services/user.service";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Security() {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showOldPassword,setShowOldPassword]=useState(false)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const SubmitForgot = () => {
    if (oldPassword && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        userService
          .changePassword({
            oldPassword,
            newPassword,
            confirmNewPassword: confirmPassword,
          })
          .then((res) => {
            if (res?.success === true) {
              router.push({
                pathname: "/",
              });
            } else {
              setError(true);
              setErrorMessage(res.message);
            }
          })
          .catch((error) => {
            setError(true);

            setErrorMessage(error.message);
          });
      } else {
        setError(true);
        setErrorMessage("Confirm Password Not Matched");
      }
    } else {
      setError(true);
      setErrorMessage("All Field Required");
    }
  };
  const onSubmit = (data) => {
    userService
          .changePassword({
            oldPassword:data.oldPassword,
            newPassword:data.password,
            confirmNewPassword: data.confirmPassword,
          })
          .then((res) => {
            if (res?.success === true) {
              router.push({
                pathname: "/",
              });
            } else {
              setError(true);
              setErrorMessage(res.message);
            }
          })
          .catch((error) => {
            setError(true);

            setErrorMessage(error.message);
          });
    
  };

  return (
    <>
      <div className="center--block">
        <div className="small--block">
          <div className="block--title block--back--link text--center">
            <h1>Change Password</h1>
          </div>

          {error && (
            <div
              className=""
              style={{ border: "1px solid red", margin: "20px" }}
            >
              <p style={{ textAlign: "center", padding: "10px", color: "red" }}>
                {errorMessage}
              </p>
            </div>
          )}
          <form className="site--form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form--item">
             <div style={{display:'flex'}}>
             <input
             style={{width:'100%'}}
                className={`form--control ${
                  errors.oldPassword ? "is-invalid" : ""
                }`}
                type={showOldPassword?"text":"password"}
                id="oldPassword"
                placeholder="Old Password"
                {...register("oldPassword", {
                  required: true,
                  minLength: 8,
                  maxLength: 15,
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[@$#!%*?_&])([a-zA-Z0-9@$#_!%*?&]{8,15})$/,
                  },
                })}
              />
                {showOldPassword?<img src='/images/view.png' className='passwordView' onClick={()=>setShowOldPassword(!showOldPassword)}/>:<img onClick={()=>setShowOldPassword(!showOldPassword)} src='/images/invisible.png' className='passwordView'/>}

               
             </div>
              <label className="form--label" htmlFor="oldPassword">
                Old Password
              </label>
              <div className="invalid-feedback">
                {errors.oldPassword?.type === "required" &&
                  "Old Password is required"}
                {errors.oldPassword?.type === "minLength" &&
                  "Old Password should be atleast 8 characters"}
                {errors.oldPassword?.type === "maxLength" &&
                  "Old Password should be less than 15 characters"}
                {errors.oldPassword?.type === "pattern" &&
                  "Old Password must be alphanumeric with at least one special character"}
              </div>
            </div>

            <div className="form--item">
             <div style={{display:'flex'}}>
             <input style={{width:'100%'}}
                className={`form--control ${
                  errors.password ? "is-invalid" : ""
                }`}
                type={showPassword ? "text" : "password"}
                id="pwd"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  maxLength: 15,
                  minLength: 8,

                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[@$#!%*?_&])([a-zA-Z0-9@$#!%*?_&]{8,})$/,
                  },
                })}
              />
                {showPassword?<img src='/images/view.png' className='passwordView' onClick={()=>setShowPassword(!showPassword)}/>:<img onClick={()=>setShowPassword(!showPassword)} src='/images/invisible.png' className='passwordView'/>}

             </div>

              
              <label className="form--label" htmlFor="pwd">
                New Password
              </label>
              <div className="invalid-feedback">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  "Password should be atleast 8 characters"}
                {errors.password?.type === "maxLength" &&
                  "Password should be less than 15 characters"}
                {errors.password?.type === "pattern" &&
                  "Password must be alphanumeric with at least one special character"}
              </div>
            </div>
            <div className="form--item">
             <div style={{display:'flex'}}>
             <input style={{width:"100%"}}
                className={`form--control ${
                  errors.cpassword ? "is-invalid" : ""
                }`}
                type={showCPassword ? "text" : "password"}
                id="cnfpwd"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Confirm password does not match";
                    }
                  },
                })}
              />
                {showCPassword?<img src='/images/view.png' className='passwordView' onClick={()=>setShowCPassword(!showCPassword)}/>:<img onClick={()=>setShowCPassword(!showCPassword)} src='/images/invisible.png' className='passwordView'/>}

             </div>
              
              <label className="form--label" htmlFor="cnfpwd">
                Confirm Password
              </label>
              <div className="invalid-feedback">
                {errors.confirmPassword?.type === "required" &&
                  "Confirm password is required"}
                {errors.confirmPassword?.type === "validate" &&
                  errors.confirmPassword?.message}
              </div>
            </div>

            <div className="form--actions">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
