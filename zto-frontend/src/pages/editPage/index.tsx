import React from 'react'
import EditProvider from './onepirate/modules/edit/editContext'
import EditSidebar from './onepirate/modules/edit/editSidebar'


const EditPage = () => {

  return (
    <EditProvider>
      <EditSidebar/>
 
    </EditProvider>
  )
}

export default EditPage