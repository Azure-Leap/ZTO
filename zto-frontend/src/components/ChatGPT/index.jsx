import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowsAltH } from "react-icons/fa";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CloseIcon from "@mui/icons-material/Close";

const ChatPot = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessage] = useState([
    "Сайн байна уу?",
    "Танд юугаар туслах уу?",
  ]);
  const [newMess, setNewMess] = useState();

  const sendMessage = () => {
    if (newMess) {
      setMessage([
        ...messages,
        newMess,
        "Серверийг засаж байгаа тул түр хүлээнэ үү.",
      ]);
      setNewMess("");
    } else {
      return;
    }
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  if (isOpenChat == true) {
    return (
      <Box
        sx={{
          width: "15%",
          height: "100wh",
          border: 1,
          borderRadius: "19px",
          margin: "20px",
          marginLeft: "80%",
          position: "fixed",

          bottom: 70,
          right: 60,
          zIndex: "999999",
        }}
      >
        <Box
          sx={{
            width: "100wh",
            backgroundColor: "#000",
            height: "3vh",
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            display: "flex",
            paddingLeft: "5%",
            position: "relative",
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

            <div ref={messagesEndRef}></div>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "#000" }}>
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
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: 2,
            borderEndStartRadius: "20px",
            borderEndEndRadius: "20px",
            borderTop: 1,
            borderTopColor: "#000",
            backgroundColor: "white",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Have a question?"
            variant="outlined"
            onChange={newMessage}
            value={newMess}
            sx={{ color: "#fff" }}
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
          position: "fixed",
          bottom: 70,
          right: 60,
          zIndex: 9999999999,
        }}
      >
        <ModeCommentOutlinedIcon
          onClick={() => setIsOpenChat(!isOpenChat)}
          sx={{ width: "5vh", height: "5vh", color: "#7f7f7f " }}
        />
      </Box>
    );
  }
};

export default ChatPot;
