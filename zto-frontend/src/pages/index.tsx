import React, { useEffect } from "react";
import Home from ".";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter()
  useEffect(()=>{
    router.push('./home')
  }, [])
  return <></>
};

export default index;
