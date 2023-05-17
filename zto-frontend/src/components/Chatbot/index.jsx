import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowsAltH } from "react-icons/fa";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const ChatPot = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessage] = useState([
    { message: "Сайн байна уу?", owner: "bot" },
    { message: "Танд юугаар туслах уу?", owner: "bot" },
  ]);
  const [newMess, setNewMess] = useState();

  const sendMessage = () => {
    if (newMess) {
      setMessage([
        ...messages,
        { message: newMess, owner: "user" },
        { message: "Серверийг засаж байгаа тул түр хүлээнэ үү.", owner: "bot" },
      ]);
      setNewMess(``);
    } else {
      return;
    }
  };

  const sendDefaultMessage = () => {
    setMessage([
      ...messages,
      { message: "Хэрхэн веб сайт худалдаж авах вэ?", owner: "user" },
      {
        message: `Та доорх "Хэрхэн вэбсайттай болох вэ? " хэсэгтэй танилцана уу.`,
        owner: "bot",
      },
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
          width: "20%",
          height: "100wh",
          border: 1,
          borderRadius: "21px",
          margin: "20px",
          marginLeft: "80%",
          position: "fixed",
          bottom: 10,
          right: 10,
          zIndex: "999999",
        }}
      >
        <Box
          sx={{
            width: "100wh",
            backgroundColor: "#000624",
            height: "5vh",
            borderTopLeftRadius: "19px",
            borderTopRightRadius: "19px",
            display: "flex",
            paddingLeft: "5%",
            paddingRight: "5%",
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{
                width: "30%",
                height: 28,
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
          </Box>
          <CloseIcon
            sx={{
              ":hover": { cursor: "pointer" },
              color: "#FFFFFA",
            }}
            onClick={() => setIsOpenChat(!isOpenChat)}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            overflow: "scroll",
            backgroundColor: "#f0f4f7",
          }}
        >
          <Box
            sx={{
              gap: "5px",
            }}
          >
            {messages.map((mess, idx) => {
              return (
                <Box
                  key={idx}
                  sx={{
                    borderRadius: "10px",
                    color: "white",
                    padding: 1,
                    display: "flex",
                    // flexDirection: "column",
                    justifyContent:
                      mess.owner == "bot" ? "flex-start" : "flex-end",
                  }}
                >
                  {mess.owner == "bot" ? (
                    <Box
                      sx={{
                        display: "flex",
                        marginRight: 1,
                        gap: 1,
                      }}
                    >
                      <Avatar
                        sx={{
                          marginTop: 1,
                        }}
                      ></Avatar>
                      <Box
                        sx={{
                          marginRight: 2,
                          backgroundColor: "#FFFFFF",
                          padding: 2,
                          borderRadius: 3,
                          color: "#506c7f",
                          display: "inline-block",
                        }}
                      >
                        <Typography>{mess.message}</Typography>
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        marginLeft: 4,
                        borderRadius: 3,
                        backgroundColor: "#cad3dc",
                        color: "#39586f",
                        padding: 2,
                        display: "inline-block",
                      }}
                    >
                      <Typography>{mess.message}</Typography>
                    </Box>
                  )}
                </Box>
              );
            })}

            <div ref={messagesEndRef}></div>
          </Box>
        </Box>
        <Box
          boxShadow={3}
          sx={{
            borderBottom: 1,
            borderBottomColor: "#FFFFFA",
            backgroundColor: "#000624",
          }}
        >
          <Button
            sx={{
              margin: 1,
              borderRadius: 3,
              backgroundColor: "white",
              color: "black",
              border: 1,
              ":hover": {
                backgroundColor: "#000624",
                color: "#FFFFFA",
                border: 1,
                borderColor: "#fffffa",
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
            padding: 1,
            borderEndStartRadius: "20px",
            borderEndEndRadius: "20px",
            backgroundColor: "#000624",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Танд асуух асуулт байна уу?"
            variant="outlined"
            onChange={newMessage}
            value={newMess}
            sx={{
              width: "80%",
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
          backgroundColor: "#000",
          borderRadius: "50%",
          pt: "10px",
          marginLeft: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ":hover": { cursor: "pointer" },
          position: "fixed",
          bottom: 70,
          right: 60,
          width: 60,
          height: 60,
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
