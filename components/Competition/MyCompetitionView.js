import React, { useEffect, useState } from "react";
import Link from "next/link";
import { gameService } from "../../services/game.service";
import { useSelector } from "react-redux";
import PreviewGameRules from "../Modal/PreviewGameRules";
import { useRouter } from "next/router";
import PreviewEditGame from "../Modal/PreviewEditGame";
import PreviewDeleteGame from "../Modal/PreviewDeleteGame";
import PreviewResetPortfolio from "../Modal/PreviewResetPortfolio";
import ReactPaginate from "react-paginate";
import { set } from "react-hook-form";
import InviteCompetitionModel from "../Modal/InviteCompetitionModel";
import PreviewLeaveCompetition from "../Modal/PreviewLeaveCompetion";

export default function MyCompetationView() {
  const router=useRouter()
    let { user } = useSelector((state) => state.userWrapper);
  const [myGame, setMyGame] = useState();
  const [search,setSearch]=useState('')
  const [modelOpened, setModelOpened] = useState(false);
  const [selectedData, setSelectedDate] = useState([]);
  const [editData,setEditData]=useState([])
  const [modelOpened1, setModelOpened1] = useState(false);
  const [modelOpened2,setModelOpened2]=useState(false)
  const [modelOpened3,setModelOpened3]=useState(false);
  const [modelOpened4,setModelOpened4]=useState(false)
  const [modelOpened5,setModelOpened5]=useState(false)
  const [page,setPage]=useState(1)
  const [allPage,setAllPage]=useState(1)
  
  const [deleteGameId,setDeleteGameId]=useState()
  useEffect(() => {
    getAllGame(search,1);
    setPage(1)
  }, [search]);
  useEffect(() => {
    getAllGame(search,page);
  
  }, [modelOpened1,modelOpened2]);

  const getAllGame = (search,current) => {
    gameService
      .getMYGame(search,current)
      .then((res) => {
        setMyGame(res.games)
        setAllPage(res.pages)
      })
      .catch((err) => console.log(err));
  };
  const handleSelectGame=(id)=>{
    const data = myGame.filter((item) => item._id == id);
    setSelectedDate(data);
    setModelOpened(true);
  }
  const handleGoToHome=(id)=>{
    localStorage.setItem('GameId',id)
    router.push('/dashboard/portfolio')
  }
  const handleEditGame=(id)=>{
    const data = myGame.filter((item) => item._id == id);
    setEditData(data);
    setModelOpened1(true);
  }
  const handleDeleteGame=(id)=>{
    setDeleteGameId(id)
    setModelOpened2(true);

  }
  const handlePortfolioReset=(id)=>{
    setDeleteGameId(id)
    setModelOpened3(true);

  }
  const handlePageClick=({ selected })=>{
    getAllGame(search,selected+1)
    setPage(selected+1)
  
  }
  const handleInvite=(id)=>{
    setDeleteGameId(id)
    const data = myGame.filter((item) => item._id == id);
    setEditData(data);
    setModelOpened4(true)
  }
  const handleLeaveCompetition=(id)=>{
    setDeleteGameId(id)
    setModelOpened5(true);
  }
  return (
    <>
   <div className="myConn">
   <div className="col-40" >
        <div style={{marginLeft:'20px',paddingTop:'20px'}} className="form--item">
          <label>Competition Lookup</label>
          <input
            className="form--control"
            type="text"
            value={search}
            autoComplete='false'
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Look up competition name or creator"
          />
          <span className="search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.12927 0.0878906C10.8191 0.0878906 13.8233 3.09206 13.8233 6.7819C13.8233 8.35662 13.2538 9.79189 12.3357 10.9366L19.7386 18.3395L18.6927 19.3971L11.284 11.9884C10.1392 12.9065 8.70399 13.4759 7.12927 13.4759C3.43942 13.4759 0.435253 10.4717 0.435253 6.7819C0.435253 3.09206 3.43942 0.0878906 7.12927 0.0878906ZM7.12927 1.57545C4.24712 1.57545 1.92281 3.89976 1.92281 6.7819C1.92281 9.66405 4.24712 11.9884 7.12927 11.9884C10.0114 11.9884 12.3357 9.66405 12.3357 6.7819C12.3357 3.89976 10.0114 1.57545 7.12927 1.57545Z"
                fill="#AFAFAF"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      {myGame && (
        <div >
          {myGame.map((item,index) => {
           
            return (
              <div key={index}   className={item._id===localStorage.getItem('GameId')?"connectionBlock CurrentJoined":"connectionBlock"}>
                <div className="titleBox px-32 py-16">
                  <h4 className="font-18 font--bold mb-12">
                    {item.competitionName} {item.creatorId==user?.user?._id &&  <span style={{
                            fontWeight: "bold",
                            color: "#8000ff",
                            marginLeft: "20px"
                    }}>Admin</span>}
                     {item.competitionType == "Private" && (
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              d="M8 0.25C5.24609 0.25 3 2.49609 3 5.25V6.5H2.375C1.34473 6.5 0.5 7.34473 0.5 8.375V14.625C0.5 15.6553 1.34473 16.5 2.375 16.5H13.625C14.6553 16.5 15.5 15.6553 15.5 14.625V8.375C15.5 7.34473 14.6553 6.5 13.625 6.5H13V5.25C13 2.49609 10.7539 0.25 8 0.25ZM8 1.5C10.0801 1.5 11.75 3.16992 11.75 5.25V6.5H4.25V5.25C4.25 3.16992 5.91992 1.5 8 1.5ZM2.375 7.75H13.625C13.9766 7.75 14.25 8.02344 14.25 8.375V14.625C14.25 14.9766 13.9766 15.25 13.625 15.25H2.375C2.02344 15.25 1.75 14.9766 1.75 14.625V8.375C1.75 8.02344 2.02344 7.75 2.375 7.75Z"
                              fill="#8000FF"
                            />
                          </svg>
                        )}
                  </h4>
                 
                 
                </div>
                <div className="gridRow">
                  <div className="grid--2 px-32 pb-32">
                    <div className="colLeftBlock">
                      <p>
                      {item.competitionDescription}
                      </p>
                    </div>
                    <div className="colRightBlock">
                      <div className="flexBox endBlock">
                        <div className="colBlock">
                          <p className="font-17 font--normal">TIMING</p>
                          <h2 className="font-17 font--bold">
                          {item?.dateRange.split(" ")[0]} - {item?.dateRange.split(" ")[1] == "null"
                      ? "No End"
                      : item?.dateRange.split(" ")[1]}
                          </h2>
                        </div>
                        <div className="colBlock">
                          <p className="font-17 font--normal">CURRENT RANK</p>
                          <h2 className="font-17 font--bold flexBox">
                            {item.result.rank || "--"}
                            <span className="font-17 font--normal flexBox">
                              <svg
                                className="ml-12 mr-12"
                                width="13"
                                height="14"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M9 0.445312L8.46094 0.960937L0.960938 8.46094L2.03906 9.53906L8.25 3.32812V18H9.75V3.32812L15.9609 9.53906L17.0391 8.46094L9.53906 0.960937L9 0.445312Z"
                                  fill="#00FFA0"
                                ></path>
                              </svg>
                              of {item.users.length} Players
                            </span>
                          </h2>
                        </div>
                        <div className="colBlock">
                          <p className="font-17 font--normal">
                            YOUR ACCOUNT VALUE
                          </p>
                          <h2 className="font-17 font--bold text--purple">
                          ₦ {item?.result?.accountValue?.toFixed(2)?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid--2 px-32 pb-26">
                    <div className="colLeftBlock">
                      <div className="competation-rules flexBox">
                      {(item.creatorId==user?.user?._id && item?.users.length==1) && <h5 style={{cursor:'pointer'}} className="font-16 text--purple mt-32" onClick={()=>handleEditGame(item?._id)}>
                          Competition Settings
                          <span>
                            <svg
                              width="7"
                              height="12"
                              viewBox="0 0 8 13"
                              fill="none"
                            >
                              <path
                                d="M0.734375 0.0234375L0.015625 0.726562L5.67578 6.5L0.015625 12.2773L0.734375 12.9727L7.07422 6.5L0.734375 0.0234375Z"
                                fill="#8000FF"
                              />
                            </svg>
                          </span>
                        </h5>}
                        {(item.creatorId==user?.user?._id && item?.users.length==1) && <h5 style={{cursor:'pointer'}} className="font-16 text--purple mt-32" onClick={()=>handleDeleteGame(item?._id)}>
                          Delete Competition
                          <span>
                            <svg
                              width="7"
                              height="12"
                              viewBox="0 0 8 13"
                              fill="none"
                            >
                              <path
                                d="M0.734375 0.0234375L0.015625 0.726562L5.67578 6.5L0.015625 12.2773L0.734375 12.9727L7.07422 6.5L0.734375 0.0234375Z"
                                fill="#8000FF"
                              />
                            </svg>
                          </span>
                        </h5>}
                        {item.creatorId!=user?.user?._id && <h5 style={{cursor:'pointer'}} className="font-16 text--purple mt-32" onClick={()=>handleSelectGame(item?._id)}>
                          Competition Rules
                          <span>
                            <svg
                              width="7"
                              height="12"
                              viewBox="0 0 8 13"
                              fill="none"
                            >
                              <path
                                d="M0.734375 0.0234375L0.015625 0.726562L5.67578 6.5L0.015625 12.2773L0.734375 12.9727L7.07422 6.5L0.734375 0.0234375Z"
                                fill="#8000FF"
                              />
                            </svg>
                          </span>
                        </h5>}
                       
                      </div>
                      <div className="competation-rules flexBox">
                      
                     
                        {item.allowPortfolioResetting && <h5 style={{cursor:'pointer'}} className="font-16 text--purple mt-32" onClick={()=>handlePortfolioReset(item?._id)}>
                          Reset Portfolio
                          <span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M6 0C2.69187 0 0 2.69187 0 6C0 9.30813 2.69187 12 6 12C9.30813 12 12 9.30813 12 6H11C11 8.76787 8.76787 11 6 11C3.23213 11 1 8.76787 1 6C1 3.23213 3.23213 1 6 1C7.51111 1 8.85378 1.675 9.76953 2.73047L8.5 4H12V0.5L10.4766 2.02344C9.37687 0.786984 7.78113 0 6 0Z"
                                fill="#8000FF"
                              />
                            </svg>
                          </span>
                        </h5>}
                          {/* {item.creatorId!=user?.user?._id && <h5 style={{cursor:'pointer'}} className="font-16 text--purple mt-32" onClick={()=>handleLeaveCompetition(item?._id)}>
                          Leave Competition
                          <span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M6 0C2.69187 0 0 2.69187 0 6C0 9.30813 2.69187 12 6 12C9.30813 12 12 9.30813 12 6H11C11 8.76787 8.76787 11 6 11C3.23213 11 1 8.76787 1 6C1 3.23213 3.23213 1 6 1C7.51111 1 8.85378 1.675 9.76953 2.73047L8.5 4H12V0.5L10.4766 2.02344C9.37687 0.786984 7.78113 0 6 0Z"
                                fill="#8000FF"
                              />
                            </svg>
                          </span>
                        </h5>} */}
                      </div>
                    </div>
                    <div className="colRightBlock">
                      <div className="btn--right">
                        <div className="borderBtnPurple">
                          <Link href="#">
                            <a href="javascript:void(0)" onClick={()=>handleInvite(item._id)}>
                              INVITE TO COMPETITION
                            </a>
                          </Link>
                        </div>
                        <div className="borderBtnPurple fullBtnPurple">
                          {/* <Link href="/dashboard/portfolio" onClick={()=>alert('nitesh')}> */}
                            <a href="javascript:void(0)" onClick={()=>handleGoToHome(item._id)}>GO TO HOME</a>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
   </div>
   {allPage>1 && <div className="paginationReact">
                  <ReactPaginate
                  forcePage={page-1}
                    breakLabel="..."
                    nextLabel=">"
                 
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={2}
                    pageCount={allPage}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                  />
                </div>}
       <PreviewGameRules
          modelOpened={modelOpened}
          setModelOpened={setModelOpened}
          //   setShowTrade={setShowTrade}
          data={selectedData}
        />
          <PreviewEditGame
          modelOpened={modelOpened1}
          setModelOpened={setModelOpened1}
          //   setShowTrade={setShowTrade}
          data={editData}
        />
        <PreviewDeleteGame modelOpened={modelOpened2}
          setModelOpened={setModelOpened2} id={deleteGameId} />
        <PreviewResetPortfolio  modelOpened={modelOpened3}
          setModelOpened={setModelOpened3} id={deleteGameId}/>
        <InviteCompetitionModel  modelOpened={modelOpened4}
          setModelOpened={setModelOpened4} id={deleteGameId} data={editData}/>
           <PreviewLeaveCompetition  modelOpened={modelOpened5}
          setModelOpened={setModelOpened5} id={deleteGameId}/>
      {/* <div className="innerBlock">
        <div className="p-20">
          <h4 className="font-16">PAST COMPETITIONS</h4>
        </div>
        <div className="myConn px-32 py-16">
          <p className="flexBox gap--4">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path
                d="M8.04297 0C3.63432 0 0.0429688 3.59135 0.0429688 8C0.0429688 12.4087 3.63432 16 8.04297 16C12.4516 16 16.043 12.4087 16.043 8C16.043 3.59135 12.4516 0 8.04297 0ZM8.04297 1.23077C11.7882 1.23077 14.8122 4.25481 14.8122 8C14.8122 11.7452 11.7882 14.7692 8.04297 14.7692C4.29778 14.7692 1.27374 11.7452 1.27374 8C1.27374 4.25481 4.29778 1.23077 8.04297 1.23077ZM7.42758 3.69231V9.84615H8.65835V3.69231H7.42758ZM7.42758 11.0769V12.3077H8.65835V11.0769H7.42758Z"
                fill="#2525BB"
              />
            </svg>
            No Data Available
          </p>
        </div>
      </div> */}
    </>
  );
}
