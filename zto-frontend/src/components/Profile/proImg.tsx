import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import axios from "axios";
import { AuthContext } from "@/context/UserContext";

const Avatar = dynamic(() => import("react-avatar-edit"), {
  ssr: false
}) 
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  m: "0 auto",
};

const UploadImg = ({ open, handleClose }: any) => {
  const { user, setUser } = useContext(AuthContext);
  console.log("pooo", user);
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  useEffect(() => {
    console.log("pp", preview);
  }, [preview]);

  const onFileLoad = async (file: any) => {
    const form = new FormData();
    form.append("file", file);
    const res = await axios.post(`http://localhost:9010/upload`, form);
    if (res) {
      console.log("prokkk", res);
      const updateUser = { ...user, profileImg: res?.data?.secure_url};
      const res2 = await axios.put(
        `http://localhost:9010/users/${user._id}`,
        updateUser
      );
      setUser(res2.data.user);
    }
  };

  return (
    <Modal open={open}>
      <Box sx={style} textAlign={"center"}>
        <Box
          sx={{ ml: "20px" }}
          // sx={{maxWidth:"60%", maxHeight:"60%", border:"1px dashed black", my:"20px", mx:"auto"}}
        >
          {/* <AccountCircleOutlinedIcon sx={{fontSize:"7rem", mt:"15%", color:"gray"}}/> */}
          {/* <TextField type='file' /> */}
          <div>
            <Avatar
              width={250}
              height={250}
              onCrop={onCrop}
              onClose={onClose}
              onFileLoad={onFileLoad}
              // src={src}
            />
            {/* {preview && <img src={preview} alt="Preview" />} */}
          </div>
        </Box>

        <Button variant="contained" sx={{ mt: "20px" }} onClick={handleClose}>
          Upload
        </Button>
      </Box>
    </Modal>
  );
};

export default UploadImg;

// ReactDOM.render(<App /> , document.getElementById('root'))
