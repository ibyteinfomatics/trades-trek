import { Modal, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import {stockService} from '../../services/stock.service';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions/users'
import { setSelectedStock } from '../../actions/setStock';


function PreviewModal({modelOpened,setModelOpened,data,setShowTrade}) {
  const router = useRouter();
  const [error,setError]=useState('something went wrong');
  const [errorStatus,setErrorStatus]=useState(false);
  const [commission,setCommission]=useState(0)
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.userWrapper);
useEffect(() => {
 if(user){
  const game=user?.mygame?.filter((item)=>item?.gameId._id==localStorage.getItem('GameId'))

  if( !game||game[0]?.gameId?.commission=="Disabled"){
   setCommission(0)
  }else{
   setCommission(Number(game[0]?.gameId?.commission || 0))
  }
 }
}, [user])

  const theme = useMantineTheme();
    const submitOrder=()=>{
      data.commission=commission;
        stockService.orderStock(data).then((res)=>{
          if(res.success){
            dispatch(setUser(res.user));
              // router.push({
              //   pathname:"/dashboard/portfolio",
              // })
              setShowTrade(false)
              dispatch(setSelectedStock(null))
            setModelOpened(false)

          } else if(res.success===false){
            setError(res.message)
            setErrorStatus(true)
          } else{
            setError(res)
            setErrorStatus(true)
          }
           
           }).catch((err)=>{
            
            setError(err)
            setErrorStatus(true)
           }
           )
    }
  return (
    <Modal
 
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modelOpened}
      size='35%'
      onClose={()=>{
        setError()
        setErrorStatus(false)
        setModelOpened(false)
      }}
    >
      
      <div className=''>
        <h1 style={{fontSize: "30px",
    fontWeight: "bold",
    marginBottom:" 10px"}}>Preview Order</h1>
      {errorStatus &&  <div className="" style={{border:'1px solid red',margin:'20px'}}>
              <p style={{textAlign:'center',padding:'10px',color:'red'}}>{error}</p>
          </div>}
        <div className='box-align'>
            <div className='row-block'>
                <p className='font-18 '>Stock: </p>
                <p className='font-18 font--bold'>{data?.Name}</p>
            </div>
            <div className='row-block'>
                <p className='font-18 '>Action: </p>
                <p className='font-18 font--bold'>{data?.action}</p>
            </div>
            {/* <div className='row-block'> */}
                {/* <p className='font-18 font--bold'>{data?.Name}</p> */}
                {/* <p className='font-18 font--bold'>{data?.quantity}</p> */}
            {/* </div> */}
            <div className='row-block'>
                <p className='font-18 '>Order Type:</p>
                <p className='font-18 '>{data?.orderType}</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Quantity:</p>
                <p className='font-18'>{data?.quantity?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Duration:</p>
                <p className='font-18'>{data?.duration}</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Estimated Price:</p>
                <p className='font-18'>₦{Number((data?.quantity)*(data.orderType == 'Market' ? data?.Last : data.rate )).toFixed(2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            {/* <div className='row-block'>
                <p className='font-18'>Stock Rate</p>
                <p className='font-18'>{(data.orderType == 'Market' ? data?.Last : data.rate )}</p>
            </div> */}
           
            <div className='row-block'>
                <p className='font-18'>Commission</p>
                <p className='font-18'>₦{commission?.toFixed(2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Estimate Total</p>
                {data?.orderType == 'Market' &&
                 <p className='font-18'>₦{(((data?.quantity||0)*(data?.Last ||0))+commission)?.toFixed(2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                 }
                {data?.orderType == 'Limit' && <p className='font-18'>₦{(((data?.quantity||0)*(data?.rate ||0)+29.95)+commission)?.toFixed(2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>}
            </div>
            <div className=''>
                <button type='submit' className='btn form--submit'  onClick={submitOrder}>SUBMIT ORDER</button>
                <button type='reset' className='btn reset--btn' onClick={()=>{
                  setError()
        setErrorStatus(false)
        setModelOpened(false)
        }}>CHANGE ORDER</button>
            </div>
            </div>
        </div>
    </Modal>
  );
}

export default PreviewModal;