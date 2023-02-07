import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import moment from "moment-timezone";
import ToolTipCustome from "../Competition/ToolTip";
import { userService } from "../../services";
import { setUser } from "../../actions/users";
import { toast, ToastContainer } from 'react-toastify';

export default function Account() {
  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [error, setError] = useState();
  const { user } = useSelector((state) => state.userWrapper);
  const [status, setStaus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setStaus(user?.user?.allowNotification);
  }, [user]);

  useEffect(() => {
    userService
    .userInfo()
    .then((res) => {
    if(res.success ){
      dispatch(setUser(res.data));

    }
    
    
    }
    )
    .catch((err) => {
      console.log(err);
    });
  }, [])
  
  const handleStatus = (value) => {
    setStaus(value);
    userService
      .allowNotificationStatus(value)
      .then((res) =>{
        if(res.success){
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      })
      .catch((err) =>{
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      });
  };
  return (
    <>
       <ToastContainer
        position="top-center"
        autoClose={3000}
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
          
          <div className="block--title block--back--link text--center mb--64">
            <h1>Your Profile</h1>

            {/* <div className="profileToggle">
              <input
                value={status}
                checked={status}
                type="checkbox"
                className="switch_1"
                onChange={(e) => handleStatus(e.target.checked)}
              />
              <ToolTipCustome text={`Email and Notification Allowed.`} />
            </div> */}
            {/* </div> */}
          </div>
          <div className="flexBox justifyBetween referralNo">
            <h4 className="">Your Total Wallet Amount</h4>
            <h4 className="">
              ₦{" "}
              {user?.user?.walletAmount
                ?.toFixed(2)
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
            </h4>
          </div>
          <div className="flexBox justifyBetween referralNo">
            <h4 className="">Your Total Request Amount</h4>
            <h4 className="">
              ₦{" "}
              {user?.user?.requestAmount
                ?.toFixed(2)
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
            </h4>
          </div>
          <div className="flexBox justifyBetween referralNo">
            <h4 className="">Your Total Withdraw Amount</h4>
            <h4 className="">
              ₦{" "}
              {user?.user?.withdrawAmount
                ?.toFixed(2)
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0.0}
            </h4>
          </div>
          <div className="mb--32 profileImage">
            {/* <div className="light--purple--circle1">{user?.user?.firstName[0]}</div> */}
            <img
              style={{ height: "120px", borderRadius: "50%" }}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAgAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADEQAAICAQIFAQYFBQEAAAAAAAABAgMRBDEFEiFBUWETMkKBkaEiUnGx0RQVU2PwBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6iAAAAAAAACNqNfptO3GdmZL4Y9WR/wC8afPuW/RfyBYgj6fW6fUPFdn4n8MujJAAAAAAAAAAAAAAAK/i+rlRWqqniye78I5cS4lKE3TpnhrpKfr6FRKUpPMpOT7tsDGAAAJ2j4nbRiNmbK/XdfMgZMgepovr1FfPVLK/Y6Hl9PfZp7PaVyx5T2f6no9NfHU0xsh33Xh+AOoAAAAAAABpfP2dFli3jFtG5pfD2lM4fmi19gPLwjKycYRzKUnherPQUf8An6YxX9RZOc+6i8JFZwOPNxSnPw5ePkz1YFZLgWie3tF+kv5NtPwXR0vMou2X+x5X0LEAaqqtQ9mq4KH5eVY+hTcQ4HGebNFiMv8AG9n+nguwB4eyudU3XZFxmt0yz4DKXNdD4MJ/MtuN0Rt4fbLlTnBcyljquvX7FXwCP4bpeqX/AH1AtgAAAAAAAAABX6fT+w47CUfcsUpL0eHlF6RdRBRrosjHMoWRfT16P9yUAAAAAAcdZJR0eok9lVJ/ZlVwep1aNOSw5y5vkW2rqd2lsqjvNYONsYwnywWIrZAagAAAAAAAAACTQ8ww+zOhFqs5M9M5JQAAAAAAIljzOT9SRdJxhlb7EUAAAAAAAAAAABKplzQXp0IptCbhLK6+UBLBiMlJZT6GQABxvsaXLXv3fgDW+WZYXY5AAAAAAAAAAAABlLLSW7NKXZK+VdlfJKO6ZI0kebUQ9OrLGVcJPLis4xnuBXqLjt0N1KRJlTjbqaODW6A4NyfoaezJSrb7HSNC3kBVRU5WyjCDaim5S7IyXChFRcUkkyoknGTi910AwAAAAAAG0ISnJRistgapNvCWX4R3hpLJe9iKJlFMaV5l3Z1A400xp93q+7O3N5AAypJ7Greeg5UZAxF9nubNpbmDGEAcvBwt08LHl5UvKJAAr56Sxe61L7EdpptNYa7Fwc7aYWrEl17PwBVg3trdU3F/XyaAf//Z"
            />
          </div>

          <form className="site--form">
            <div className="form--item">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="form--control"
                readOnly={true}
                value={user && user?.user?.username}
              />
              <label htmlFor="username" className="form--label">
                Username
              </label>
            </div>
            <div className="form--item">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form--control"
                readOnly={true}
                value={user && user?.user?.email}
                // onChange={(e)=>setEmail(e.target.value)}
              />
              <label htmlFor="email" className="form--label">
                Email
              </label>
            </div>
            <div className="form--item ">
              <PhoneInput
                className="form--control"
                placeholder="Enter phone number"
                value={user?.user?.phone}
                country={"ng"}
                enableSearch={true}
                disabled={true}
                // defaultCountry="NG"
              />
            </div>
            <div className="flexBox justifyBetween referralNo">
              <h4 className="">Join Date</h4>
              <h4 className="">
                {moment(user?.user?.createdAt).format("lll")}
              </h4>
            </div>
            <div className="flexBox justifyBetween referralNo">
              <h4 className="">Subscription Expired Date</h4>
              <h4 className="">
                {moment(user?.user?.expiredDate).format("lll")}
              </h4>
            </div>
            {/* <div className="flexBox justifyBetween referralNo">
              <h4 className="">Joined Device</h4>
              <h4 className="">{user?.user?.device || "Browser"}</h4>
            </div> */}
          </form>
          {/* <div
            style={{
             display:'flex',
             justifyContent:'end'

            }}
          >
            <button
              style={{
                padding: "10px 20px",
                background: "red",
                borderRadius: "11px",
                color: "white",
              }}
            >
              Delete Account
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
