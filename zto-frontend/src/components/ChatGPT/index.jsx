import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaArrowRight, FaArrowsAltH } from "react-icons/fa";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CloseIcon from "@mui/icons-material/Close";

const ChatPot = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);

  const [messages, setMessage] = useState([
    "Сайн байна уу?",
    "Танд юугаар туслах уу?",
  ]);
  const [newMess, setNewMess] = useState();

  const sendMessage = () => {
    setMessage([
      ...messages,
      newMess,
      "Серверийг засаж байгаа тул түр хүлээнэ үү.",
    ]);
  };

  const sendDefaultMessage = () => {
    setMessage([
      ...messages,
      "Хэрхэн веб сайт худалдаж авах вэ?",
      `Та доорх "Хэрхэн вэбсайттай болох вэ? " хэсэгтэй танилцана уу.`,
    ]);
  };

  const newMessage = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    if (inputValue !== "" || null) {
      setNewMess(inputValue);
    }
  };
  if (isOpenChat == true) {
    return (
      <Box
        sx={{
          width: "15%",
          height: "100%",
          border: 1,
          borderRadius: "19px",
          margin: "20px",
          marginLeft: "80%",
        }}
      >
        <Box
          sx={{
            width: "100wh",
            backgroundColor: "#000",
            height: "3vh",
            borderTopLeftRadius: "19px",
            borderTopRightRadius: "19px",
            display: "flex",
            paddingLeft: "5%",
            position: "relative",
            top: 0,
            left: 0,
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: "10%",
              height: "80%",
            }}
          ></Avatar>
          <Typography
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              color: "#FFF",
            }}
            variant="span"
          >
            ZtoBot
          </Typography>
          <CloseIcon
            sx={{
              ":hover": { cursor: "pointer" },
              marginLeft: "40%",
              color: "#FFF",
            }}
            onClick={() => setIsOpenChat(!isOpenChat)}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30vh",
            gap: "10px",
            borderTop: 1,
            backgroundColor: "#FFF",
            overflow: "scroll",
            borderBottom: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: 2,
            }}
          >
            {messages.map((message, idx) => {
              return (
                <Typography
                key={idx}
                  variant="p"
                  sx={{
                    border: 1,
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#007FFF",
                    padding: 2,
                  }}
                >
                  {message}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Button
          sx={{
            margin: 1,
            border: 1,
            borderRadius: "20px",
            backgroundColor: "white",
            color: "black",
            ":hover": {
              backgroundColor: "#007FFD",
              color: "white",
            },
          }}
          onClick={sendDefaultMessage}
        >
          Хэрхэн веб сайт худалдаж авах вэ?
        </Button>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#FFF",
            padding: 2,
            borderEndStartRadius: "10px",
            borderEndEndRadius: "10px",
            borderTop: 1,
            borderTopColor: "#007FFF",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Have a question?"
            variant="outlined"
            onChange={newMessage}
          />
          <Button
            sx={{ display: "flex", alignItems: "center" }}
            onClick={sendMessage}
          >
            send
            <FaArrowRight />
          </Button>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          marginLeft: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ":hover": { cursor: "pointer" },
        }}
      >
        <ModeCommentOutlinedIcon
          onClick={() => setIsOpenChat(!isOpenChat)}
          sx={{ width: "10%", height: "10vh" }}
        />
      </Box>
    );
  }
};

export default ChatPot;
