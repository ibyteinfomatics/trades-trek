import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gameService } from "../../services/game.service";
import Footer from "../Footer/Footer";
import InviteFriendModel from "../Modal/InviteFriendModel";

const InviteFriend = () => {
  const { user } = useSelector((state) => state.userWrapper);
  const [show, setShow] = useState(false);
  const [modelOpened, setModelOpened] = useState(false);
  const [refferalInfoData, setRefferalInfoData] = useState({});
  useEffect(() => {
    refferalInfo();
  }, [modelOpened]);

  const refferalInfo = () => {
    gameService
      .refferalInfo()
      .then((res) => {
        if (res.success == true) {
          setRefferalInfoData(res.data);
        } else {
          setRefferalInfoData({});
        }
      })
      .catch((err) => setRefferalInfoData({}));
  };

  return (
    <>
      <div className="center--block Referral">
        <div className="small--block">
          <div className="flexBox amtTitle block--title block--back--link mb--32">
            <h1 className="font-20 textLeft">Referral</h1>
            <h4 className="">₦ {user?.user?.walletAmount}</h4>
          </div>
          <div className="flexBox justifyBetween referralNo">
            <h4 className="">Total No of referral</h4>
            <h4 className="">{refferalInfoData?.totalRefferal}</h4>
          </div>
          <div className="flexBox justifyBetween referralNo">
            <h4 className="">Total No of Joined referral</h4>
            <h4 className="">{refferalInfoData?.joinedRefferal}</h4>
          </div>
          <div className="flexBox justifyBetween referralNo">
            <h4 className="">Total No of Qualified referral</h4>
            <h4 className="">{refferalInfoData?.redeemRefferal}</h4>
          </div>
          <div className="referEarn">
            <div className="icon">
              <img src="/images/reficon.svg" alt="Refer Icon" />
            </div>
            <div className="block--title block--back--link text--center mb--12">
              <h1 className="font-20">Refer and Earn</h1>
            </div>
            <p>
              Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente
              una sequenza casuale di caratteri.
            </p>
            <div className="site--form">
              <div className="form--item referalCode">
                <label for="" className="form--label">
                  Referal Code
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="**********"
                  className="form--control"
                  readOnly={true}
                  value={user?.user?.yourRefferal}
                />
                {/* <button
                  onClick={() => setShow(!show)}
                  type="button"
                  className="btn btn--orange"
                > */}
                {show ? (
                  <img onClick={() => setShow(false)} src="/images/view.png" className="passwordView" />
                ) : (
                  <img onClick={() => setShow(true)} src="/images/invisible.png" className="passwordView" />
                )}
                {/* {show?"HIDE":"SHOW"} */}
                {/* </button> */}
              </div>
              <div className="form--actions">
                <button
                  onClick={() => setModelOpened(true)}
                  className="btn"
                  type=""
                >
                  SHARE NOW
                </button>
              </div>
              <Link href="#">
                <a className="terms text--center mt--19">
                  Terms & Conditions Applied
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <InviteFriendModel
        modelOpened={modelOpened}
        setModelOpened={setModelOpened}
        data={user?.user?.yourRefferal}
      />
      <Footer />
    </>
  );
};

export default InviteFriend;
