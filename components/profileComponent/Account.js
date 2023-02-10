import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import moment from "moment-timezone";
import ToolTipCustome from "../Competition/ToolTip";
import { userService } from "../../services";
import { setUser } from "../../actions/users";
import { toast, ToastContainer } from "react-toastify";

export default function Account() {
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError,setLastNameError]=useState('')
  const [phone, setPhone] = useState("");
  const [phoneError,setPhoneError]=useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [image,setImage]=useState()
  const [url,setUrl]=useState('')

  const { user } = useSelector((state) => state.userWrapper);
  const [status, setStaus] = useState(false);
  const dispatch = useDispatch();
  const [imageLoader,setImageLoader]=useState(true)

  useEffect(() => {
    setStaus(user?.user?.allowNotification);
    setUrl(user?.user?.baseUrl+user?.user?.filePath)
    setImageLoader(false)
  }, [user]);

  useEffect(() => {
    userService
      .userInfo()
      .then((res) => {
        if (res.success) {
          dispatch(setUser(res.data));
          setFirstName(res?.data?.user?.firstName);
          setLastName(res?.data?.user?.lastName);
          setPhone(res?.data?.user?.phone);
          setUrl(res?.data?.user?.baseUrl+res?.data?.user?.filePath)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleStatus = (value) => {
    setStaus(value);
    userService
      .allowNotificationStatus(value)
      .then((res) => {
        if (res.success) {
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  const submit =async () => {
   
    if (!firstName) {
      return setFirstNameError("First Name is Required");
    } else if (firstName.length < 3) {
      return setFirstNameError("First Name should be atleast 3 characters");
    } else if (firstName.length > 20) {
      return setFirstNameError("First Name should be less than 20 characters");
    } else {
      setFirstNameError("");
    }
    if (!lastName) {
      return setLastNameError("Last Name is Required");
    } else if (lastName.length < 3) {
      return setLastNameError("Last Name should be atleast 3 characters");
    } else if (lastName.length > 20) {
      return setLastNameError("Last Name should be less than 20 characters");
    } else {
      setLastNameError("");
    }

    if(!phone){
     return setPhoneError('Phone Number is Required')

    }else if(phone.length < 8){
      return setPhoneError("Phone Number should be atleast 8 characters");
    }else if(phone.length>15){
      return setPhoneError("Last Name should be less than 16 characters");
    }else{
      setPhoneError('')
    }


      userService.updateAccount({phone,firstName,lastName}).then((res)=>{
        if(res.success){
          toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        
        }else{
          toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }).catch((err)=>{
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
  
  };
  const handleImageUpload=(e)=>{
    if(e.target.files[0]){
      setImage(e.target.files[0])
      setUrl(URL.createObjectURL(e.target.files[0]))
      userService.updateProfile(e.target.files[0]).then((res)=>{
        console.log(res)
      if(res.success){
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }else{
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      }).catch((err)=>{
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
    
    }
  
  }
  const clearPhoto=()=>{
    
  }

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
      <div className="card-no-gap p--20 pageHeight">
        <div className="block--title block--back--link text--left mb--64">
          <h1>Your Profile</h1>
        </div>
        {/* <form className="site--form"> */}
        <div className="profileDetail">
          <div className="profileLeftDetail">
            <button className="btn" onClick={clearPhoto}>Clear</button>
            <input id='SelectPic' type='file' style={{display:"none"}} onChange={(e)=>handleImageUpload(e)}  accept="image/png, image/jpeg"  />
            <div className="mb--32 profileImage">
              {/* <div className="light--purple--circle1">{user?.user?.firstName[0]}</div> */}
            
              <img
                style={{ height: "120px", borderRadius: "50%" }}
                src={url ?url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAgAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADEQAAICAQIFAQYFBQEAAAAAAAABAgMRBDEFEiFBUWETMkKBkaEiUnGx0RQVU2PwBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6iAAAAAAAACNqNfptO3GdmZL4Y9WR/wC8afPuW/RfyBYgj6fW6fUPFdn4n8MujJAAAAAAAAAAAAAAAK/i+rlRWqqniye78I5cS4lKE3TpnhrpKfr6FRKUpPMpOT7tsDGAAAJ2j4nbRiNmbK/XdfMgZMgepovr1FfPVLK/Y6Hl9PfZp7PaVyx5T2f6no9NfHU0xsh33Xh+AOoAAAAAAABpfP2dFli3jFtG5pfD2lM4fmi19gPLwjKycYRzKUnherPQUf8An6YxX9RZOc+6i8JFZwOPNxSnPw5ePkz1YFZLgWie3tF+kv5NtPwXR0vMou2X+x5X0LEAaqqtQ9mq4KH5eVY+hTcQ4HGebNFiMv8AG9n+nguwB4eyudU3XZFxmt0yz4DKXNdD4MJ/MtuN0Rt4fbLlTnBcyljquvX7FXwCP4bpeqX/AH1AtgAAAAAAAAABX6fT+w47CUfcsUpL0eHlF6RdRBRrosjHMoWRfT16P9yUAAAAAAcdZJR0eok9lVJ/ZlVwep1aNOSw5y5vkW2rqd2lsqjvNYONsYwnywWIrZAagAAAAAAAAACTQ8ww+zOhFqs5M9M5JQAAAAAAIljzOT9SRdJxhlb7EUAAAAAAAAAAABKplzQXp0IptCbhLK6+UBLBiMlJZT6GQABxvsaXLXv3fgDW+WZYXY5AAAAAAAAAAAABlLLSW7NKXZK+VdlfJKO6ZI0kebUQ9OrLGVcJPLis4xnuBXqLjt0N1KRJlTjbqaODW6A4NyfoaezJSrb7HSNC3kBVRU5WyjCDaim5S7IyXChFRcUkkyoknGTi910AwAAAAAAG0ISnJRistgapNvCWX4R3hpLJe9iKJlFMaV5l3Z1A400xp93q+7O3N5AAypJ7Greeg5UZAxF9nubNpbmDGEAcvBwt08LHl5UvKJAAr56Sxe61L7EdpptNYa7Fwc7aYWrEl17PwBVg3trdU3F/XyaAf//Z"}
              />
              <label htmlFor='SelectPic'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_435_11941)">
                  <path d="M12.5942 2.58105C11.514 2.58105 10.5099 3.14889 9.95396 4.07549L9.00416 5.6589H4.31646C2.34645 5.6589 0.734863 7.27049 0.734863 9.2405V23.0078C0.734863 24.9773 2.34645 26.5882 4.31646 26.5882H27.9329C29.9024 26.5882 31.5133 24.9766 31.5133 23.0066V9.2405C31.5133 7.27049 29.9017 5.6589 27.9317 5.6589H23.244L22.2918 4.07188C21.7372 3.14809 20.7365 2.58105 19.6588 2.58105H12.5942ZM16.1241 8.12117C20.5365 8.12117 24.1265 11.7112 24.1265 16.1236C24.1265 20.536 20.5365 24.1259 16.1241 24.1259C11.7117 24.1259 8.12169 20.536 8.12169 16.1236C8.12169 11.7112 11.7117 8.12117 16.1241 8.12117ZM16.1241 9.35231C12.3907 9.35231 9.35282 12.3901 9.35282 16.1236C9.35282 19.857 12.3907 22.8948 16.1241 22.8948C19.8575 22.8948 22.8953 19.857 22.8953 16.1236C22.8953 12.3901 19.8575 9.35231 16.1241 9.35231ZM16.1241 10.8912C19.0092 10.8912 21.3564 13.2384 21.3564 16.1236C21.3564 19.0087 19.0092 21.3559 16.1241 21.3559C13.2389 21.3559 10.8917 19.0087 10.8917 16.1236C10.8917 13.2384 13.2389 10.8912 16.1241 10.8912ZM16.1241 12.1224C15.0629 12.1224 14.0452 12.5439 13.2948 13.2943C12.5444 14.0447 12.1229 15.0624 12.1229 16.1236C12.1229 17.1847 12.5444 18.2025 13.2948 18.9528C14.0452 19.7032 15.0629 20.1248 16.1241 20.1248C17.1853 20.1248 18.203 19.7032 18.9533 18.9528C19.7037 18.2025 20.1253 17.1847 20.1253 16.1236C20.1253 15.0624 19.7037 14.0447 18.9533 13.2943C18.203 12.5439 17.1853 12.1224 16.1241 12.1224Z" fill="#8000FF"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_435_11941">
                  <rect width="30.7784" height="30.7784" fill="white" transform="translate(0.734863 0.734375)"/>
                  </clipPath>
                  </defs>
                </svg>
              </label>
            
            </div>
            <form className="site--form">
              <div className="input--group">
                <div className="form--item">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="form--control"
                    // readOnly={true}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label htmlFor="firstName" className="form--label">
                    First Name
                  </label>
                  <div className="invalid-feedback">
                    {firstNameError && firstNameError}
                  </div>
                </div>
                <div className="form--item">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="form--control"
                    // readOnly={true}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label htmlFor="lastName" className="form--label">
                    Last Name
                  </label>
                  <div className="invalid-feedback">
                    {lastNameError && lastNameError}
                  </div>
                </div>
              </div>
              <div className="input--group">
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
                  />
                  <label htmlFor="email" className="form--label">
                    Email
                  </label>
                </div>
              </div>

              <div className="form--item ">
                <PhoneInput
                  className="form--control"
                  placeholder="Enter phone number"
                  value={phone}
                  country={"ng"}
                  enableSearch={true}
                  // disabled={true}
                  defaultCountry="NG"
                  onChange={(phone) => setPhone(phone)}
                />
                <div className="invalid-feedback">
                  {phoneError && phoneError}
                </div>
              </div>
              <div className="form--actions">
                <button
                  disabled={isLoading}
                  className="btn"
                  type="button"
                  onClick={submit}
                >
                  {isLoading ? <Loader color="#8000ff" /> : "Update"}
                </button>
              </div>
            </form>
          </div>
          <div className="profileRightDetail">
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
              <h4 className="">Your Total Requested Amount</h4>
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
          </div>
        </div>
        {/* </form> */}
      </div>
      <Footer />
    </>
  );
}
