import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import {stockService} from '../../services/stock.service';
import { useRouter } from 'next/router';


function PreviewModal({modelOpened,setModelOpened,data}) {
  const router = useRouter();
  const [error,setError]=useState('something went wrong');
  const [errorStatus,setErrorStatus]=useState(false)

  const theme = useMantineTheme();
    const submitOrder=()=>{
        stockService.orderStock(data).then((res)=>{
          if(res.success){
              router.push({
                pathname:"/dashboard/portfolio",
              })
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
      {errorStatus &&  <div className="" style={{border:'1px solid red',margin:'20px'}}>
              <p style={{textAlign:'center',padding:'10px',color:'red'}}>{error}</p>
          </div>}
        <div className='box-align'>
            <div className='row-block'>
                <p className='font-18'>Stock: {data?.action}</p>
                <p className='font-18'>Quality</p>
            </div>
            <div className='row-block'>
                <p className='font-18 font--bold'>{data?.Name}</p>
                {/* <p className='font-18 font--bold'>{data?.quantity}</p> */}
            </div>
            <div className='row-block'>
                <p className='font-18'>Duration</p>
                <p className='font-18'>{data?.duration}</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Estimate Price</p>
                <p className='font-18'>{((data?.quantity||0)*(data?.Last ||0)).toFixed(3)}</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Quantity</p>
                <p className='font-18'>{data?.quantity}</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Commission</p>
                <p className='font-18'>$29.95</p>
            </div>
            <div className='row-block'>
                <p className='font-18'>Estimate Total</p>
                <p className='font-18'>{((data?.quantity||0)*(data?.Last ||0)+29.95).toFixed(3)}</p>
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