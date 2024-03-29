import { Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gameService } from "../../services/game.service";
import ToolTipCustome from "../Competition/ToolTip";

function InviteFriendModel({ modelOpened, setModelOpened, id, data }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState("");

  const theme = useMantineTheme();
  //   const LogoutUser = () => {
  //     router.push("/logout");
  //   };

  useEffect(() => {
    if (!modelOpened) {
      setEmail("");
      setEmails([]);
      setError("");
    }
  }, [modelOpened]);

  const handleEmail = (e) => {
    if (e.key === "Enter") {
      if (
        !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        )
      ) {
        setError("Invalid Email");
      } else {
        if (!emails.includes(email)) {
          setEmails((prev) => [...prev, email]);
          setEmail("");
          setError("");
        } else {
          setError("Already Added");
        }
      }
    }
  };
  const handleDelete = (name) => {
    const tmp = emails.filter((item) => item !== name);
    setEmails(tmp);
  };
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

      return false;
    } else {
      setPasswordError("");

      return true;
    }
  };
  const InviteGame = () => {
    gameService
      .inviteFriends(emails)
      .then((res) => {
        if (res.success == false) {
          setError(res.message);
        } else {
          setError();

          setModelOpened(false);
        }
      })
      .catch((err) => console.log(err));
    // setModelOpened(false);
  };
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
        <h2 style={{ textAlign: "center", margin: "20px 10px" }}>
          <span className="itemAlign">
            <b>Do you want to invite our friends?</b>
            <ToolTipCustome text={`Enter email and press enter key to send`} />
          </span>
        </h2>
        {error && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid red",
              color: "red",
            }}
          >
            <p>{error}</p>
          </div>
        )}
        {/* <p style={{ textAlign: "center", margin: "20px 10px" }}>
          Type emails with comma(,) separated
        </p> */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {emails.map((item) => {
            return (
              <div
                style={{
                  color: "white",
                  margin: "5px",
                  background: "#8000ff",
                  padding: "5px 0px",
                  paddingLeft: "10px",
                  borderRadius: "5px",
                }}
              >
                <span>
                  {item}{" "}
                  <span
                    onClick={() => handleDelete(item)}
                    style={{
                      background: "white",
                      color: "#8000ff",
                      padding: "5px 8px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </span>
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <input
            type="email"
            style={{
              position: "absolute",
              width: "400px",
              borderBottom: "2px solid",
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => handleEmail(e)}
            placeholder="Enter Email"
          />
        </div>

        <div style={{ border: "1px solid #c9cdd1", marginTop: "40px" }}>
          <button
            style={{
              width: "50%",
              borderRight: "0.5px solid #c9cdd1",
              padding: "10px",
            }}
            onClick={() => {
              InviteGame();
            }}
            className="done"
            disabled={emails.length == 0}
            // style={{ margin: "20px" }}
          >
            Send
          </button>
          <button
            onClick={() => setModelOpened(false)}
            style={{
              width: "50%",
              borderRight: "0.5px solid #c9cdd1",
              padding: "10px",
            }}
            className="cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default InviteFriendModel;
