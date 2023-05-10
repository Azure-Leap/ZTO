import React, { useEffect } from "react";
import Category from "../../components/Categories";
import { useRouter } from "next/router";
import WebTemlate from "./webTemlate";


const WebsiteTemplates = () => {
  const router: any = useRouter();

  console.log("RR", router.query);

  // useEffect();//getCatgory
  // axios.get("categpory/categoryId"); => []
  // data={catgory}
  return (
    <>
      <WebTemlate />

    </>
  );
};


export default WebsiteTemplates;
