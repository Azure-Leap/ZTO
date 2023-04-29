import React, { useEffect } from "react";
import Category from "../../components/Categories";
import { useRouter } from "next/router";

const WebsiteTemplates = () => {
  const router: any = useRouter();

  console.log("RR", router.query);

  // useEffect();//getCatgory
  // axios.get("categpory/categoryId"); => []
  // data={catgory}
  return (
    <>
      <Category />
    </>
  );
};
export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:9010/categories/${query.id}`);
  const data = await res.json();

  return {
    props: { category: data.data },
  };
}

export default WebsiteTemplates;
