import * as React from 'react';
import Box from '@mui/material/Box';
import { FcReadingEbook, FcTemplate } from "react-icons/fc";
import {FaAmazonPay, FaSellsy} from "react-icons/fa"
import {CgTemplate} from "react-icons/cg"
import { Grid, Typography } from '@mui/material';


const steps = [
  { title: "Загвар сонгох", text: "Та өөрийн хэрэгцээнд тохирсон вэбийн бэлэн загвараа сонгоно.", icon:<FcReadingEbook color='Blue'style={{ height: '80px', width: '80px' }} /> },
  { title: "Худалдан авах", text: "Тухайн загварынхаа мэдээлэлтэй сайтар танилцсаны дараа 'Захиалга' товч дээр дарж захиалгын мэдээллийг бүрэн дүүрэн бөглөнө. Үйлчилгээний нөхцөлтэй сайтар танилцахаа бүү мартаарай.", icon:<FaSellsy color='#2362A5'style={{ height: '80px', width: '80px' }} />  },
  { title: "Төлбөр төлөр", text: "Захиалга баталгаажуулсаны дараа бүртгүүсэн имэйл хаягт тань нэхэмжлэл очих ба нэхэмжлэлийн дагуу төлбөрийг төлнө.", icon:<FaAmazonPay color='#2362A5'style={{ height: '80px', width: '80px' }} />  },
  { title: "Загвар бэлтгэх", text: "Таны вэбийг домайн нэртэй холбож бэлэн болгосоны дараа танд нэвтрэх эрх, заавар бүхий имэйл хүргүүлнэ.", icon:<CgTemplate color='#2362A5'style={{ height: '80px', width: '80px' }} />  },
  { title: "Танд шилжүүлнэ", text: "Та өөрийн вэб сайттай болно", icon:<FcTemplate color='#2362A5'style={{ height: '80px', width: '80px' }} />  },
];



export default function WebSteppers() {
  return (
    <Box sx={{ width: '100%', textAlign:"center" }}>
      <Typography variant='h3'>Хэрхэн вэбсайттай болох вэ?</Typography>
      <Grid container spacing={2} my={10}>
          {steps.map((e) => (
        <Grid item xs={4} my={5}>
          <Box>{e.icon}</Box>
          <Typography variant='h5'>{e.title}</Typography>
          <Typography>{e.text}</Typography>         
        </Grid>
         ))}

      </Grid>

    </Box>
  );
}