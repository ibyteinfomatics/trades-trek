import React from 'react'

const InviteFriend = () => {
  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "100px",
    }}
  >
   
    <div style={{ marginTop: "30px" }}>
      <div>
        <label>
          <b>Username</b>
        </label>
        <br />
        <input type="text" />
      </div>
      <div>
        <label>
          <b>Email</b>
        </label>
        <br />
        <input type="email"  />
      </div>
    </div>
  </div>
  )
}

export default InviteFriend