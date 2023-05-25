import React from 'react'
import EditForm from './editForm'

const LayoutEdit = ({children}:any) => {
  return (
    <div>
        <EditForm/>{children}
    </div>
  )
}

export default LayoutEdit