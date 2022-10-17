import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { stockService } from "../../services/stock.service";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions/users";
import { setSelectedStock } from "../../actions/setStock";
import { gameService } from "../../services/game.service";

function PreviewGameModel({ modelOpened, setModelOpened, data, setShowTrade }) {
  const router = useRouter();
  const [error, setError] = useState("something went wrong");
  const [errorStatus, setErrorStatus] = useState(false);
  const dispatch = useDispatch();
  const [password, setPasswod] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCorrect,setPasswordCorrect]=useState(false)
  let { user } = useSelector((state) => state.userWrapper);

  const theme = useMantineTheme();
  const handlePasswod = (e) => {
    setPasswod(e.target.value);
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[@$#!%*?_&])([a-zA-Z0-9@$#!%*?_&]{8,})$/.test(
        e.target.value
      )
    ) {
      setPasswordError(
        "Password must be alphanumeric with at least one special character and must be 8 characters"
      );
      setPasswordCorrect(false)
      return false;
    } else {
      setPasswordError("");
      setPasswordCorrect(true)
      return true;
    }
  };
  const handleJoin = () => {
    if (data[0].competitionType == "Private" ) {
      if(passwordCorrect){
        gameService.joinGame({gameId:data[0]._id,password:password}).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
        // console.log(data)
    
        setError();
        setErrorStatus(false);
        setModelOpened(false);

      }
    }else{
     gameService.joinGame({gameId:data[0]._id}).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
    // console.log(data)

    setError();
    setErrorStatus(false);
    setModelOpened(false);
    }

  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modelOpened}
      size="80%"
      overflow="inside"
      onClose={() => {
        setError();
        setErrorStatus(false);
        setModelOpened(false);
      }}
    >
      {data.length > 0 && (
        <div className="" style={{ padding: "10px 20px" }}>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: " 10px",
            }}
          >
            {data[0]?.competitionName}
          </h1>
          <span style={{ fontSize: "18px" }}>by: {data[0]?.username}</span>

          {data[0]?.competitionType == "Private" &&
            !data[0]?.users.includes(user?._id) && (
              <div className="form--item">
                <label className="form--label" htmlFor="email">
                  PRIVATE GAME
                </label>
                <input
                  className="form--control"
                  value={password}
                  onChange={handlePasswod}
                  style={{
                    width: "50%",
                    padding: "5px 10px",
                    border: " 3px solid #e0e0e0",
                  }}
                />
                {passwordError && (
                  <div
                    className=""
                    style={{ border: "1px solid red", margin: "20px" }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        color: "red",
                      }}
                    >
                      {passwordError}
                    </p>
                  </div>
                )}
              </div>
            )}

          {errorStatus && (
            <div
              className=""
              style={{ border: "1px solid red", margin: "20px" }}
            >
              <p style={{ textAlign: "center", padding: "10px", color: "red" }}>
                {error}
              </p>
            </div>
          )}
          <div className="box-align" style={{ marginTop: "10px" }}>
            <div className="row-block">
              <p className="font-18 ">
                <span className="font--bold">Timing</span>
                <p>{`${data[0]?.dateRange.split(" ")[0]} - ${
                  data[0]?.dateRange.split(" ")[1] == "null"
                    ? "No End"
                    : data[0]?.dateRange.split(" ")[1]
                } `}</p>{" "}
              </p>
              <p className="font-18 ">
                <span className="font--bold">NUMBER OF PLAYERS</span>
                <p>{data[0]?.users?.length}</p>
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">
                <span className="font--bold"> STARTING CASH</span>
                <p>{data[0]?.startingCash.toFixed(2)}</p>
              </p>
            </div>
            {!data[0]?.users.includes(user?._id) && (
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  gap: "10px",
                }}
              >
                <button
                  type="reset"
                  className="btn reset--btn"
                  onClick={() => {
                    setError();
                    setErrorStatus(false);
                    setModelOpened(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="reset"
                  className="btn reset--btn"
                  onClick={handleJoin}
                >
                  Confirm Join
                </button>
              </div>
            )}

            <h1
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px 0px",
              }}
            >
              GAME RULES
            </h1>
            <h1
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                margin: "10px 0px",
              }}
            >
              GAME NAME & BASIC TRADING RULES
            </h1>
            {/* <hr style={{margin:'0px 10px',width:'10px'}} /> */}
            <div className="row-block">
              <p className="font-18 ">Margin Trading </p>
              <p className="font-18 ">
                {data[0]?.allowTradingWithMargin ? "Yes" : "No"}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Short Selling </p>
              <p className="font-18 ">
                {data[0]?.allowShortSelling ? "Yes" : "No"}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Option Trading </p>
              <p className="font-18 ">
                {data[0]?.allowTradingOptions ? "Yes" : "No"}
              </p>
            </div>
            <h1
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                margin: "10px 0px",
              }}
            >
              BASIC GAME RULES
            </h1>
            <div className="row-block">
              <p className="font-18 ">Late Entry</p>
              <p className="font-18 ">
                {data[0]?.allowLateEntry ? "Yes" : "No"}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Portfolio Viewing</p>
              <p className="font-18 ">
                {data[0]?.allowPortfolioViewing ? "Yes" : "No"}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Portfolio Resetting</p>
              <p className="font-18 ">
                {data[0]?.allowPortfolioResetting ? "Yes" : "No"}
              </p>
            </div>

            <h1
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                margin: "10px 0px",
              }}
            >
              ADVANCED GAME RULES
            </h1>
            {/* <div className='row-block'>
                <p className='font-18'>Stock Rate</p>
                <p className='font-18'>{(data.orderType == 'Market' ? data?.Last : data.rate )}</p>
            </div> */}

            <div className="row-block">
              <p className="font-18 ">Market Delay</p>
              <p className="font-18 ">{`${data[0]?.marketDelay} minutes`}</p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Daily Volume</p>
              <p className="font-18 ">
                {`${data[0]?.dailyVolume ? data[0]?.dailyVolume : "Disabled"}`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Quick Sell</p>
              <p className="font-18 ">
                {`${data[0]?.quickSell ? data[0]?.quickSell : "Disabled"}`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Minimum Price</p>
              <p className="font-18 ">
                {`${
                  data[0]?.minimumPrice ? data[0]?.minimumPrice : "Disabled"
                }`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Minimum Price Short</p>
              <p className="font-18 ">
                {`${
                  data[0]?.minimumPriceShort
                    ? data[0]?.minimumPriceShort
                    : "Disabled"
                }`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Minimum Stock For Margin</p>
              <p className="font-18 ">
                {`${
                  data[0]?.minimumStockForMargin
                    ? data[0]?.minimumStockForMargin
                    : "Disabled"
                }`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Commission</p>
              <p className="font-18 ">
                {`${data[0]?.commission ? data[0]?.commission : "Disabled"}`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Commission - Option</p>
              <p className="font-18 ">
                {`${
                  data[0]?.commissionOption
                    ? data[0]?.commissionOption
                    : "Disabled"
                }`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Commission - Per Contract</p>
              <p className="font-18 ">
                {`${
                  data[0]?.commissionPerContract
                    ? data[0]?.commissionPerContract
                    : "Disabled"
                }`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Diversification</p>
              <p className="font-18 ">
                {`${
                  data[0]?.diversification
                    ? data[0]?.diversification
                    : "Disabled"
                }`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Margin Interest</p>
              <p className="font-18 ">
                {`${
                  data[0]?.marginInterest ? data[0]?.marginInterest : "Disabled"
                }`}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Cash Interest</p>
              <p className="font-18 ">
                {`${
                  data[0]?.cashInterest ? data[0]?.cashInterest : "Disabled"
                }`}
              </p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default PreviewGameModel;
