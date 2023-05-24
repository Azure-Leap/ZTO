import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Typography from "../../components/editPage/onepirate/modules/components/Typography";
import { Pagination } from "@mui/material";
import CategoriesHead from "./CategoriesHead";
import WebsiteTemlatesCard from "./WebsiteTemlatesCard";
import axios from "axios";
import Layout from "@/components/layout";

const WebTemlate = () => {
  const [templates, setTemplates] = useState([]);
  const [templatesFilter, setTemplatesFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTemp = async () => {
    try {
      const res = await axios.get("http://localhost:9010/websites");
      console.log("tem", res.data);
      setTemplates(res.data);
      setTemplatesFilter(res.data);
      setIsLoading(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getTemp();
  }, []);
  return (
    <Layout>
      <Grid sx={{ textAlign: "center", margin: "0% 11% 0% 11%" }}>
        <Typography variant="h3" sx={{ padding: "100px 0px 20px 0px" }}>
          WEBSITE TEMPLATES
        </Typography>
        <Typography sx={{ margin: "40px 300px 40px 300px" }}>
          Choose the Microweber template, which fits for your website. Each
          template is a perfect example of how your website will look like. You
          can expand and modify the template or even start from scratch.
        </Typography>
        <Grid
          container
          spacing={0}
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "30px",
            gap: "50px",
          }}
        >
          <CategoriesHead
            templates={templates}
            setTemplatesFilter={setTemplatesFilter}
            templatesFilter={templatesFilter}
          />
          <WebsiteTemlatesCard
            templates={templates}
            isLoading={isLoading}
            setTemplatesFilter={setTemplatesFilter}
            templatesFilter={templatesFilter}
          />
        </Grid>
        <Pagination
          sx={{ marginLeft: "35%", marginTop: "2%" }}
          count={100}
          color="primary"
        />
      </Grid>
    </Layout>
  );
};

export default WebTemlate;
