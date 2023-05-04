

import React from 'react'
import TemplateHome from './onepirate/TemplateHome'
import Tiptap from './TestEditor';
import dynamic from "next/dynamic";
import WebTemlate from '../website-templates/webTemlate';
import { Box } from '@mui/material';




const EditPage = () => {
  const Tiptap = dynamic(() => import("./TestEditor"), { ssr: false });
  return (
    <div>
        <TemplateHome/>
      <Tiptap/>
      <WebTemlate/>
    
    </div>
  )
}

export default EditPage