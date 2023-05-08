import React, { useEffect } from "react";
import Category from "../../components/Categories";
import { useRouter } from "next/router";
import WebTemlate from "./webTemlate";
import TestLoginAnimation from "./TestLoginAnimation";


const WebsiteTemplates = () => {
  const router: any = useRouter();

  console.log("RR", router.query);

  // useEffect();//getCatgory
  // axios.get("categpory/categoryId"); => []
  // data={catgory}
  return (
    <>
      <WebTemlate />
    <TestLoginAnimation/>
    </>
  );
};


export default WebsiteTemplates;
