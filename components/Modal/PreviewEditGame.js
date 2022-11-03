import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { stockService } from "../../services/stock.service";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions/users";
import { setSelectedStock } from "../../actions/setStock";
import { gameService } from "../../services/game.service";

function PreviewEditGame({ modelOpened, setModelOpened, data, setShowTrade }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const dispatch = useDispatch();
  const [password, setPasswod] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [allowLateEntry, setAllowLateEntry] = useState();
  const [allowPortfolioViewing, setAllowPortfolioViewing] = useState();
  const [allowPortfolioResetting, setAllowPortfolioResetting] = useState();

  const [marketDelay, setMarketDelay] = useState("15");
  const [dailyVolume, setDailyVolume] = useState();
  const [quickSell, setQuickSell] = useState();
  const [minimumPrice, setMinimumPrice] = useState();
  const [minimumPriceShort, setMinimumPriceShort] = useState();
  const [minimumStockForMargin, setMinimumStockForMargin] = useState();
  const [marginInterest, setMarginInterest] = useState();
  const [cashInterest, setCashInterest] = useState();
  let { user } = useSelector((state) => state.userWrapper);
  const theme = useMantineTheme();
  useEffect(() => {
    setCashInterest(data[0]?.cashInterest);
    setMarginInterest(data[0]?.marginInterest);
    setMinimumStockForMargin(data[0]?.minimumStockForMargin);
    setMinimumPriceShort(data[0]?.minimumPriceShort);
    setMinimumPrice(data[0]?.minimumPrice);
    setQuickSell(data[0]?.quickSell);
    setDailyVolume(data[0]?.dailyVolume);
    setMarketDelay(data[0]?.marketDelay);
    setStartDate(data[0]?.dateRange.split(" ")[0]);
    setEndDate(data[0]?.dateRange.split(" ")[1]);
    setAllowLateEntry(data[0]?.allowLateEntry);
    setAllowPortfolioViewing(data[0]?.allowPortfolioViewing);
    setAllowPortfolioResetting(data[0]?.allowPortfolioResetting);
  }, [data]);

  const handleUpdate = () => {
 
        gameService
          .updateGame({quickSell,marketDelay,dailyVolume,minimumPrice,minimumPriceShort,minimumStockForMargin,startDate,endDate,allowLateEntry,allowPortfolioViewing,allowPortfolioResetting,cashInterest,marginInterest },data[0]?._id)
          .then((res) => {
            if (res.success == false) {
              setErrorStatus(true);
              setError(res.message);
            } else {
              setError();
              setErrorStatus(false);
              setModelOpened(false);
            }
          })
          .catch((err) => console.log(err));
      
   
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
        setError("");
        setPasswod("");
        setErrorStatus(false);
        setModelOpened(false);
        setShowPassword(false);
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

            <h1
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px 0px",
              }}
            >
              GAME SETTINGS
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
            <div>
              <span>Start Date</span>
              <input
                disabled
                value={startDate}
                type="date"
                className="inputGameSetting"
                placeholder="start date"
              />
            </div>
            <div>
              <span>End Date</span>
              <input
                value={endDate}
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                className="inputGameSetting"
                placeholder="start date"
              />
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
                <div className="box_1">
                  <input
                    value={allowLateEntry}
                    checked={allowLateEntry}
                    onChange={(e) => setAllowLateEntry(e.target.checked)}
                    type="checkbox"
                    className="switch_1"
                  />
                </div>
                {/* {data[0]?.allowLateEntry ? "Yes" : "No"} */}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Portfolio Viewing</p>
              <p className="font-18 ">
                <div className="box_1">
                  <input
                    checked={allowPortfolioViewing}
                    value={allowPortfolioViewing}
                    onChange={(e) => setAllowPortfolioViewing(e.target.checked)}
                    type="checkbox"
                    className="switch_1"
                  />
                </div>
                {/* {data[0]?.allowLateEntry ? "Yes" : "No"} */}
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Portfolio Resetting</p>
              <p className="font-18 ">
                <div className="box_1">
                  <input
                    checked={allowPortfolioResetting}
                    value={allowPortfolioResetting}
                    onChange={(e) =>
                      setAllowPortfolioResetting(e.target.checked)
                    }
                    type="checkbox"
                    className="switch_1"
                  />
                </div>
                {/* {data[0]?.allowLateEntry ? "Yes" : "No"} */}
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
              <p className="font-18 ">
              <select
              onChange={(e)=>setMarketDelay(e.target.value)}
          //     className="form--control"
              // className="form--control"
              >
                {Array.from({ length: 20 }, (_, i) => {
                  return (
                    <option
                      selected={i + 1 ==marketDelay}
                      value={i + 1}
                    >
                      {i + 1} minutes
                    </option>
                  );
                })}
              </select>
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Daily Volume</p>
              <p className="font-18 ">
              <select
                onChange={(e)=>setDailyVolume(e.target.value)}
                    // className="form--control"
                  >
                    <option value="Disabled">Disabled</option>
                    {Array.from({ length: 20 }, (_, i) => {
                      return (
                        <option selected={(i + 1)*5 ==dailyVolume} value={(i + 1) * 5}>{(i + 1) * 5} %</option>
                      );
                    })}
                  </select>
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Quick Sell</p>
              <p className="font-18 ">
              <select onChange={(e)=>setQuickSell(e.target.value)}>
                    <option value="Disabled">Disabled</option>

                    {Array.from({ length: 32 }, (_, i) => {
                      return (
                        <option selected={(i + 1)*5 ==quickSell} value={(i + 1) * 15}>
                          {(i + 1) * 15} minutes
                        </option>
                      );
                    })}
                  </select>
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Minimum Price</p>
              <p className="font-18 ">
              <select
               onChange={(e)=>setMinimumPrice(e.target.value)}
                    className="form--control"
                  >
                    <option value="Disabled">Disabled</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      return (
                        <option selected={(i + 1) ==minimumPrice} value={i + 1}>$ {(i + 1).toFixed(2)}</option>
                      );
                    })}
                  </select>
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Minimum Price Short</p>
              <p className="font-18 ">
              <select
                   
                    className="form--control"
                    onChange={(e)=>setMinimumPriceShort(e.target.value)}
                  >
                    <option value="Disabled">Disabled</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      return (
                        <option selected={(i + 1) ==minimumPriceShort} value={i + 1}>$ {(i + 1).toFixed(2)}</option>
                      );
                    })}
                  </select>
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Minimum Stock For Margin</p>
              <p className="font-18 ">
              <select
                   onChange={(e)=>setMinimumStockForMargin(e.target.value)}
                    className="form--control"
                  >
                    <option value="Disabled">Disabled</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      return (
                        <option  selected={(i + 1) ==minimumStockForMargin} value={i + 1}>$ {(i + 1).toFixed(2)}</option>
                      );
                    })}
                  </select>
              </p>
            </div>
           
            <div className="row-block">
              <p className="font-18 ">Margin Interest</p>
              <p className="font-18 ">
              <select
                onChange={(e)=>setMarginInterest(e.target.value)}
                    className="form--control"
                  >
                    <option value="Disabled">Disabled</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      return (
                        <option selected={(i + 1) * 10==marginInterest} value={(i + 1) * 10}>{(i + 1) * 10} %</option>
                      );
                    })}
                  </select>
              </p>
            </div>
            <div className="row-block">
              <p className="font-18 ">Cash Interest</p>
              <p className="font-18 ">
              <select
                   onChange={(e)=>setCashInterest(e.target.value)}
                    className="form--control"
                  >
                    <option value="Disabled">Disabled</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      return (
                        <option selected={(i + 1) * 10==cashInterest} value={(i + 1) * 10}>{(i + 1) * 10} %</option>
                      );
                    })}
                  </select>
              </p>
            </div>
            <button onClick={handleUpdate} className="btn">Update Game Rule</button>

          </div>
        </div>
      )}
    </Modal>
  );
}

export default PreviewEditGame;
