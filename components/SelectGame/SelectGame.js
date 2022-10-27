import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions/users';
import { userService } from '../../services';

const  SelectGame = () => {
  const [beginnerOption, setBeginnerOption] = useState(false);
  const [game,setGame]=useState()
  const [gameId,setGameId]=useState()
  const dispatch = useDispatch();

  let { user } = useSelector((state) => state.userWrapper);
  useEffect(() => {
    setGame(user?.mygame)
    if(!localStorage.getItem('GameId') && user?.mygame?.length>0){
      localStorage.setItem('GameId',user?.mygame[0]?.gameId?._id)
      getInfo()
    }
  }, [user,user?.mygame])
  useEffect(()=>{
      setGameId(localStorage.getItem('GameId'))
      getInfo()
  },[gameId])

  const getInfo=()=>{
    userService
      .userInfo()
      .then((res) => {
      if(res.success ){
        dispatch(setUser(res.data));

      }
      // else
      //   if(router.asPath=='/dashboard/competition-summary/'){
      //     dispatch(setUser(res.message));
      //     router.push('/dashboard/subscription')
      //   }

      // // 
      
      }
      )
      .catch((err) => {
        console.log(err);
      });
  }
// console.log(gameId)

  return (
    <div className="grid-block-right right-align">
    {/* <label>Current Competition</label> */}
    <select
    style={{width:'38%',fontSize:'18px'}}
            className="form--control"
            onChange={(e)=>{
              setGameId(e.target.value)
              localStorage.setItem('GameId',e.target.value)
            }}
          >
           {
            game?.map((item)=>{
              return <option value={item?.gameId?._id} selected={item?.gameId?._id==gameId} >{item?.gameId?.competitionName}</option>
            })
           }
          </select>
      
    </div>
  
  )
}

export default SelectGame