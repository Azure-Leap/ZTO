import React from 'react'
import { Paper } from '@mui/material'
import {IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

const Search = () => {
  return (
    <>
    <Paper sx={{ p: '2px 4px', display: 'flex', flexDirection:"row", alignItems: 'center', width: "100%" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search zto template"
        inputProps={{ 'aria-label': 'search zto template' }}
      />
      <IconButton  color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
    </>
  )
}
export default Search