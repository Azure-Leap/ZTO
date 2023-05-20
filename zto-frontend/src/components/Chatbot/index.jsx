import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
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

  const keyDownHandler = (event) => {
    console.log("pressed:", event.key);
    if (event.key == "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      keyDownHandler();
    }
  };
  // document.removeEventListener("keydown", keyDownHandler);

  if (isOpenChat == true) {
    return (
      <Box
        sx={{
          width: "18%",
          height: "100wh",
          borderRadius: "21px",
          margin: "20px",
          marginLeft: "80%",
          position: "fixed",
          bottom: 10,
          backgroundColor:"white",
          right: 10,
          zIndex: "999999",
          boxShadow: 10,
        }}
      >
        <Box
          sx={{
            width: "100wh",
            backgroundColor: "#98d6fb",
            height: "5vh",
            borderTopLeftRadius: "19px",
            borderTopRightRadius: "19px",
            display: "flex",
            paddingLeft: "5%",
            paddingRight: "5%",
            position: "relative",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              ":hover": { cursor: "pointer" },
              color: "#FFFFFA",
            }}
          >
            <FiMinus onClick={() => setIsOpenChat(!isOpenChat)} />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fffffa",
              padding: 1,
              paddingX: 3,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar
                sx={{
                  width: "38%",
                  height: 28,
                }}
              ></Avatar>
              <Typography
                sx={{
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  color: "#101314",
                }}
                variant="span"
              >
                ZtoBot
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "35vh",
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
                        <Typography sx={{fontSize:"14px"}}>{mess.message}</Typography>
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
                      <Typography sx={{fontSize:"14px"}}>{mess.message}</Typography>
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
           
            borderBottomColor: "#FFFFFA",
            backgroundColor: "#98d6fb",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              margin: 1,
              width:"100%",
              borderRadius: 3,
              height:"50px",
              backgroundColor: "white",
              color: "black",
              border: 1,
              fontSize:"12px",
              borderColor: "#3e8dee",
              ":hover": {
                backgroundColor: "#E0FFFF",
                color: "black",
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
            backgroundColor: "#fffffa",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Box
            sx={{
             justifyContent:"space-between",
              display: "flex",
              borderEndStartRadius: "2px",
              borderEndEndRadius: "2px",
              backgroundColor: "#fffffa",
              borderBottom: 1,
              borderBottomColor: "#8da0b2",
            }}
          >
            <Box sx={{padding:1}}>
            <TextField
              id="outlined-basic"
              label="Танд асуух асуулт байна уу?"
              variant="outlined"
              onChange={newMessage}
              value={newMess}
              sx={{
                
                height: "70%",
                padding:"5px",
                height:"50px",
                input: {
                  color: "#101314",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderBottom: "none",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  },
                  "&:hover fieldset": {
                    borderBottomColor: "none",
                  },
                  "&.Mui-focused fieldset": {
                    borderBottomColor: "none",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#8da0b2" , fontSize:"14px"},
              }}
            />
            </Box>
         
            <Box
              sx={{
                height: "100wh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ":hover": {
                  cursor: "pointer",
                  backgroundColor:"#FFF5EE"
                },
              }}
              onClick={sendMessage}
            >
              <Button   
                sx={{
                  display: "flex",
                  color: "#FFFFFA",
                  height:"20px"
               
                }}>
           
                <BsFillSendFill style={{ color: "#101314" }} />
           
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          backgroundColor: "#000",
          borderRadius: "50%",
          marginLeft: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ":hover": { cursor: "pointer" },
          position: "fixed",
          bottom: 70,
          right: 60,
          width: 70,
          height: 70,
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
