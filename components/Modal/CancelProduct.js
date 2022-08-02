import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {orderService} from '../../services/order.service'
import { useDispatch } from "react-redux";
import { setOpenStock } from "../../actions/openOrder";

function CancelProduct({ modelOpened, setModelOpened,id }) {

  const router = useRouter();
  const theme = useMantineTheme();
  const dispatch=useDispatch()
 const cancelOrder=(id)=>{
   orderService.cancelOrder(id).then((res)=>{
    orderService.getOpenOrder().then((res)=>{
      if(res.success){
        dispatch(setOpenStock(res.orders.docs))
        

      }else{
        dispatch(setOpenStock([]))
      }
      
    }).catch((err)=>console.log(err))
    
    // console.log(res)
    setModelOpened(false);
   }).catch((err)=>{
    console.log(err)
   })
 }
 

  return (
    <Modal
      withCloseButton={false}
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modelOpened}
      size="35%"
      centered={true}
      onClose={() => {
        setModelOpened(false);
      }}
    >
      <div>
        <h2>
          <b>Do you want to Cancel Product</b>
        </h2>
        <br />
        <div>
          <button
            onClick={() => {
             
              cancelOrder(id)
            }}
            style={{ margin: "20px" }}
          >
            Yes
          </button>
          <button
            onClick={() => setModelOpened(false)}
            style={{ margin: "20px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CancelProduct;
