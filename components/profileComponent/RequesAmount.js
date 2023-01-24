import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { userService } from "../../services/user.service";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

export default function RequestAmount() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [userAmount, setUserAmount] = useState(0);
  const { user } = useSelector((state) => state.userWrapper);
  const [transactionList, setTransactionList] = useState([]);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    userService
      .addTransaction({
        accountName: data.accountName,
        accountNumber: data.accountNumber,
        bankName: data.bankName,
        reqAmount: data.amount,
      })
      .then((res) => {
        if (res?.success === true) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          reset({
            accountName: "",
            accountNumber: "",
            bankName: "",
            amount: "",
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

  useEffect(() => {
    setUserAmount(user?.user?.walletAmount - user?.user?.requestAmount);
    getTransactionList();
  }, [user]);

  const getTransactionList = () => {
    userService
      .getTransaction()
      .then((res) => {
        if (res.success) {
          setTransactionList(res.data);
        }
      })
      .catch((err) => console.log("errr", err.message));
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
        <div className="small--block">
          <div className="block--title block--back--link text--center mb--32">
            <h1>Bank Info</h1>
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
              <input
                style={{ width: "100%" }}
                className={`form--control ${
                  errors.accountName ? "is-invalid" : ""
                }`}
                type="text"
                id="accountName"
                placeholder="Enter Account Name"
                {...register("accountName", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />

              <label className="form--label" htmlFor="accountName">
                Account Name
              </label>
              <div className="invalid-feedback">
                {errors.accountName?.type === "required" &&
                  "Account name is required"}
                {errors.accountName?.type === "minLength" &&
                  "Account name should be atleast 3 characters"}
                {errors.accountName?.type === "maxLength" &&
                  "Account name should be less than 30 characters"}
              </div>
            </div>

            <div className="form--item">
              <input
                style={{ width: "100%" }}
                className={`form--control ${
                  errors.accountNumber ? "is-invalid" : ""
                }`}
                type="text"
                id="accountNumber"
                placeholder="Enter Account Number"
                {...register("accountNumber", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,

                  pattern: {
                    value: /^[0-9]+$/,
                  },
                })}
              />

              <label className="form--label" htmlFor="accountNumber">
                Account Number
              </label>
              <div className="invalid-feedback">
                {errors.accountNumber?.type === "required" &&
                  "Account Number is required"}
                {errors.accountNumber?.type === "minLength" &&
                  "Account Number should be atleast 10 characters"}
                {errors.accountNumber?.type === "maxLength" &&
                  "Account Number should be less than 10 characters"}
                {errors.accountNumber?.type === "pattern" &&
                  "Account Number is not valid Please enter number only"}
              </div>
            </div>
            <div className="form--item">
              <input
                style={{ width: "100%" }}
                className={`form--control ${
                  errors.bankName ? "is-invalid" : ""
                }`}
                type="text"
                id="bankName"
                placeholder="Enter Bank Name"
                {...register("bankName", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                })}
              />

              <label className="form--label" htmlFor="bankName">
                Bank Name
              </label>
              <div className="invalid-feedback">
                {errors.bankName?.type === "required" &&
                  "Bank Name is required"}
                {errors.bankName?.type === "minLength" &&
                  "Bank Name should be atleast 3 characters"}
                {errors.bankName?.type === "maxLength" &&
                  "Account Number should be less than 30 characters"}
              </div>
            </div>
            <div className="form--item">
              <input
                style={{ width: "100%" }}
                className={`form--control ${errors.amount ? "is-invalid" : ""}`}
                type="text"
                id="amount"
                placeholder="Enter amount"
                {...register("amount", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+$/,
                  },
                  validate: (value) => {
                    if (userAmount < value) {
                      return "Insufficient balance";
                    }
                  },
                })}
              />

              <label className="form--label" htmlFor="amount">
                Amount
              </label>
              <div className="invalid-feedback">
                {errors.amount?.type === "required" && "Amount is required"}
                {errors.amount?.type === "validate" && errors.amount?.message}
                {errors.amount?.type === "pattern" &&
                  "Account Number is not valid Please enter number only"}
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
