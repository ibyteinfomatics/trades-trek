import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";

function InviteCompetitionModel({ modelOpened, setModelOpened }) {
          const [state, setState] = useState([])
  const router = useRouter();
  const [emails,setEmails]=useState('')

  const theme = useMantineTheme();
//   const LogoutUser = () => {
//     router.push("/logout");
//   };
console.log(state)
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
      <div
      
      >
        <h2 style={{ textAlign: "center", margin: "20px 10px" }}>
          <b>Do you want to invite our friends?</b>
        </h2>
        <p style={{ textAlign: "center", margin: "20px 10px" }}>Type emails with  comma(,) separated</p>
        <div>
          <input value={emails} onChange={(e)=>setEmails(e.target.value)} />
        </div>
       
        <div style={{border: "1px solid #c9cdd1",marginTop:"40px"}}>
          <button style={{width:"50%",borderRight: "0.5px solid #c9cdd1",padding:'10px'}}
            onClick={() => {
              setModelOpened(false);
            
            }}
            className='done'
            // style={{ margin: "20px" }}
          >
            Send
          </button>
          <button
            onClick={() => setModelOpened(false)}
            style={{width:"50%",borderRight: "0.5px solid #c9cdd1",padding:'10px'}}
            className='cancel'

          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default InviteCompetitionModel;
