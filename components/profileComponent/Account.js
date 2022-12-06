import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

export default function Account() {
  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [error, setError] = useState();
  const { user } = useSelector((state) => state.userWrapper);

  return (
    <>
      <div className="center--block">
        <div className="small--block">
          <div className="block--title block--back--link text--center mb--64">
            <h1>Your Profile</h1>
          </div>
          <div className="mb--32 profileImage"
          >
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
