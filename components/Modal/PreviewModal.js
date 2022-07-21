import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import {stockService} from '../../services/stock.service';
import { useRouter } from 'next/router';


function PreviewModal({modelOpened,setModelOpened,data}) {
  const router = useRouter();

  const theme = useMantineTheme();
    const submitOrder=()=>{
        stockService.orderStock(data).then((res)=>{
            console.log(res)
            router.push({
                pathname:"/dashboard/portfolio",
              })
            setModelOpened(false)


           }).catch((err)=>{
            console.log(err)
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
      onClose={()=>setModelOpened(false)}
    >
      <div className=''>
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
                <button type='reset' className='btn reset--btn' onClick={()=>setModelOpened(false)}>CHANGE ORDER</button>
            </div>
            </div>
        </div>
    </Modal>
  );
}

export default PreviewModal;