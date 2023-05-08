import React from 'react'
import TemplateHome from './onepirate/TemplateHome'
import EditProvider from './onepirate/modules/edit/editContext'
import EditForm from './onepirate/modules/edit/editForm'


const EditPage = () => {

  return (
    <EditProvider>
      <EditForm />
      {/* <TemplateHome/> */}
    </EditProvider>
  )
}

export default EditPage