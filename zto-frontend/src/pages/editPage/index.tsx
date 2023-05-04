import React from 'react'
import TemplateHome from './onepirate/TemplateHome'
import LayoutEdit from './onepirate/modules/edit/layoutEdit'

const EditPage = () => {
  return (
    <div>
      <LayoutEdit>    
         <TemplateHome/>
      </LayoutEdit>
    </div>
  )
}

export default EditPage