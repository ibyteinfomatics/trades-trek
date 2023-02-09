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
            <input id='SelectPic' type='file' style={{display:"none"}} onChange={(e)=>handleImageUpload(e)}  accept="image/png, image/jpeg"  />
            <div className="mb--32 profileImage">
              {/* <div className="light--purple--circle1">{user?.user?.firstName[0]}</div> */}
            
              <img
                style={{ height: "120px", borderRadius: "50%" }}
                src={url ?url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAgAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADEQAAICAQIFAQYFBQEAAAAAAAABAgMRBDEFEiFBUWETMkKBkaEiUnGx0RQVU2PwBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6iAAAAAAAACNqNfptO3GdmZL4Y9WR/wC8afPuW/RfyBYgj6fW6fUPFdn4n8MujJAAAAAAAAAAAAAAAK/i+rlRWqqniye78I5cS4lKE3TpnhrpKfr6FRKUpPMpOT7tsDGAAAJ2j4nbRiNmbK/XdfMgZMgepovr1FfPVLK/Y6Hl9PfZp7PaVyx5T2f6no9NfHU0xsh33Xh+AOoAAAAAAABpfP2dFli3jFtG5pfD2lM4fmi19gPLwjKycYRzKUnherPQUf8An6YxX9RZOc+6i8JFZwOPNxSnPw5ePkz1YFZLgWie3tF+kv5NtPwXR0vMou2X+x5X0LEAaqqtQ9mq4KH5eVY+hTcQ4HGebNFiMv8AG9n+nguwB4eyudU3XZFxmt0yz4DKXNdD4MJ/MtuN0Rt4fbLlTnBcyljquvX7FXwCP4bpeqX/AH1AtgAAAAAAAAABX6fT+w47CUfcsUpL0eHlF6RdRBRrosjHMoWRfT16P9yUAAAAAAcdZJR0eok9lVJ/ZlVwep1aNOSw5y5vkW2rqd2lsqjvNYONsYwnywWIrZAagAAAAAAAAACTQ8ww+zOhFqs5M9M5JQAAAAAAIljzOT9SRdJxhlb7EUAAAAAAAAAAABKplzQXp0IptCbhLK6+UBLBiMlJZT6GQABxvsaXLXv3fgDW+WZYXY5AAAAAAAAAAAABlLLSW7NKXZK+VdlfJKO6ZI0kebUQ9OrLGVcJPLis4xnuBXqLjt0N1KRJlTjbqaODW6A4NyfoaezJSrb7HSNC3kBVRU5WyjCDaim5S7IyXChFRcUkkyoknGTi910AwAAAAAAG0ISnJRistgapNvCWX4R3hpLJe9iKJlFMaV5l3Z1A400xp93q+7O3N5AAypJ7Greeg5UZAxF9nubNpbmDGEAcvBwt08LHl5UvKJAAr56Sxe61L7EdpptNYa7Fwc7aYWrEl17PwBVg3trdU3F/XyaAf//Z"}
              />
              <label htmlFor='SelectPic'>
              <img  className="editProfile" src="/images/camera.png" />
              </label>
            
            </div>
            <form className="site--form">
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
