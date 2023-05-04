import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowsAltH } from "react-icons/fa";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AddReactionIcon from '@mui/icons-material/AddReaction';

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
          borderRadius: "21px",
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
            backgroundColor: "#FFFFFA",
            height: "3vh",
            borderTopLeftRadius: "19px",
            borderTopRightRadius: "19px",
            display: "flex",
            paddingLeft: "5%",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: "9%",
              height: "80%",
            }}
          ></Avatar>
          <Typography
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              color: "#101314",
            }}
            variant="span"
          >
            ZtoBot
          </Typography>
          <CloseIcon
            sx={{
              ":hover": { cursor: "pointer" },
              marginLeft: "40%",
              color: "#101314",
            }}
            onClick={() => setIsOpenChat(!isOpenChat)}
          />
        </Box>
        <Box
          sx={{
            border: 1,
            width: "100%",
            height: "30vh",
            gap: "10px",
            backgroundColor: "#101314",
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
              backgroundColor: "#101314",
            }}
          >
            {messages.map((message, idx) => {
              return (
                <Typography
                  key={idx}
                  variant="p"
                  sx={{
                    border: 1,
                    borderColor: "#36454F",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#36454F",
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
        <Box
          sx={{
            borderTop: 1,
            borderBottom: 1,
            borderBottomColor: "#FFFFFA",
            borderTopColor: "#FFFFFA",
            backgroundColor: "#101314",
          }}
        >
          <Button
            sx={{
              margin: 1,
              borderRadius: "20px",
              backgroundColor: "white",
              color: "black",
              ":hover": {
                backgroundColor: "#36454F",
                color: "#FFFFFA",
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
            borderTopColor: "#101314",
            backgroundColor: "#36454F",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Have a question?"
            variant="outlined"
            onChange={newMessage}
            value={newMess}
            sx={{
              input: {
                color: "#FFFFFA",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#101314",
                },
                "&:hover fieldset": {
                  borderColor: "#FFFFFA",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFA",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
          <Button onClick={sendMessage}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#FFFFFA",
              }}
            >
              send
              <FaArrowRight />
            </Box>
          </Button>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          backgroundColor:"#000",
          borderRadius:"50%",
         pt:"10px",
          marginLeft: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ":hover": { cursor: "pointer" },
          position: "fixed",
          bottom: 70,
          right: 60,
          width:60,
          height:60,
          zIndex: 9999999999,
        }}
      >
        <AddReactionIcon
          onClick={() => setIsOpenChat(!isOpenChat)}
          sx={{ width: "5vh", height: "5vh", color: "orange" }}
        />
      </Box>
    );
  }
};

export default ChatPot;
