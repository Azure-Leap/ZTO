import React from 'react'
import { Grid, Box, Typography, Button, MenuItem, CardMedia, Container } from '@mui/material'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import MinFooter from '@/components/MinFooter';
import Layout from '@/components/layout';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const PricePage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Layout>
    <Container>
       <Grid sx={{textAlign:"center"}}>
      <Box>
        <Typography variant='h4' sx={{marginTop:"80px", marginBottom:"40px"}}>
        Your Plan:  <b>Personal (Free trial)</b> 
        </Typography>
      <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
        <Typography variant='h5' sx={{border:"solid 4px", padding:"20px", margin:"0% 20% 0% 20%", borderRadius:"20px"}} >
          Active until: <b>24 May, 2023</b>
        </Typography>
        <Typography variant='h6' sx={{margin:"0% 20% 0% 20%"}}>
      Plan limits:    <b>1 website, 500 pages, 1GB storage, All templates, All Layouts, No ads, Custom Domain, Premium Support</b>
        </Typography>
        <Typography variant='h6'sx={{margin:"2%"}}>
        Select the right Plan for you and purchase it in one click:
        </Typography> 
      </Box>
      </Box>
      
      <Paper sx={{ width: '100%', overflow: 'hidden'  }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
   
        <Box sx={{display:"flex", flexDirection:"column", gap:"50px", textAlign:"center"}}>
        <Typography  sx={{margin:"2%"}}>
    * Please note that monthly plans are renewed automatically during one year. You can cancel the
renewal anytime you want.
        </Typography> 
        <Typography>
        PRICING
        </Typography> 
        <Typography variant='h4'>
        We have a plan for you
        </Typography> 
      <Box>
        <Button sx={{backgroundColor:"black", color:"white", borderRadius:"10px 0px 0px 10px" ,  width:"200px"}}>
          fdsf
        </Button>
        <Button sx={{backgroundColor:"white", color:"black", borderRadius:"0px 10px 10px 0px",  width:"200px"}}>
        dfsdafdsa
        </Button>
        </Box>

        <Box sx={{display:"flex", gap:"40px", margin:"3%"}}>
      <Card sx={{ width:"400px", height:"500px", padding:"40px", border:"2px solid", borderRadius:"20px", }}>
      <Box>
                <Box sx={{padding:"0", textAlign:"center", display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center"}}>
                       <Box sx={{borderRadius:"50%", padding:"20px", backgroundColor:"#eeeeee", width:"110px", height:"110px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <img src="https://microweber.com/userfiles/modules/panel/img/mw-plans-png-1.png" alt="logo"/>
                       </Box>
                    <p>Personal</p>
                    <Typography  sx={{marginBottom:"40px"}}>
                        1 website, 500 pages, 1GB storage
                    </Typography> 
                    <p >
                        All blocks collection, custom domain, and more. All the features.
                    </p>
                    <p >
                        $10/month
                    </p>
                    <p>
                        with annual payment (+label-free)
                    </p>
                </Box>
            </Box>
            <Button sx={{backgroundColor:"black", color:"white", margin:"5% 5% 5% 5%", borderRadius:"20px", width:"200px"}}>Go Home!</Button>
      </Card>
       <Card sx={{width:"400px", height:"500px", padding:"40px", border:"2px solid", borderRadius:"20px"}}>
      <Box>
                <Box sx={{padding:"0", textAlign:"center", display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center"}}>
                       <Box sx={{borderRadius:"50%", padding:"20px", backgroundColor:"#eeeeee", width:"110px", height:"110px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <img src="https://microweber.com/userfiles/modules/panel/img/mw-plans-png-2.png" alt="logo"/>
                       </Box>
                    <p>Personal</p>
                    <Typography  sx={{marginBottom:"40px"}}>
                        1 website, 500 pages, 1GB storage
                    </Typography> 
                    <p >
                        All blocks collection, custom domain, and more. All the features.
                    </p>
                    <p >
                        $10/month
                    </p>
                    <p>
                        with annual payment (+label-free)
                    </p>
                </Box>
            </Box>
            <Button sx={{backgroundColor:"black", color:"white", margin:"5% 5% 5% 5%", borderRadius:"20px", width:"200px"}}>Go Home!</Button>
      </Card> 
      <Card sx={{width:"400px", height:"500px", padding:"40px", border:"2px solid", borderRadius:"20px"}}>
      <Box>
                <Box sx={{padding:"0", textAlign:"center", display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center"}}>
                       <Box sx={{borderRadius:"50%", padding:"20px", backgroundColor:"#eeeeee", width:"110px", height:"110px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <img src="https://microweber.com/userfiles/modules/panel/img/mw-plans-png-3.png" alt="logo"/>
                       </Box>
                    <p>Personal</p>
                    <Typography  sx={{marginBottom:"40px"}}>
                        1 website, 500 pages, 1GB storage
                    </Typography> 
                    <p >
                        All blocks collection, custom domain, and more. All the features.
                    </p>
                    <p >
                        $10/month
                    </p>
                    <p>
                        with annual payment (+label-free)
                    </p>
                </Box>
            </Box>
            <Button sx={{backgroundColor:"black", color:"white", margin:"5% 5% 5% 5%", borderRadius:"20px", width:"200px"}}>Go Home!</Button> 
      </Card>
           
        </Box>
        </Box>
<Typography variant='h5'>We've got every detail covered to make your website both
functional and beautiful</Typography>
<Button sx={{backgroundColor:"black", color:"white", margin:"5% 5% 5% 5%", borderRadius:"20px", width:"200px"}}>Go Home!</Button>
    </Grid>
    </Container>
</Layout>
   
  )
}

export default PricePage