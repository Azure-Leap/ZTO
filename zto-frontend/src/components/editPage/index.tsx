import React from "react";
import EditProvider from "./onepirate/modules/edit/editContext";
import EditSidebar from "./onepirate/modules/edit/editSidebar";
import SEVEN from "./onepirate/modules/Moves/Navbar/Onepirate";

const EditPage = () => {
  return (
    <EditProvider>
      <EditSidebar />
      <SEVEN />
    </EditProvider>
  );
};

export default EditPage;
