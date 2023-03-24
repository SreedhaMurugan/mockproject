import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Table, TableBody, TableContainer, TableRow,TableHead,TableCell, Card,Button, Toolbar, AppBar } from '@mui/material';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import deletePost from "../actions/deletepost"
import { bindActionCreators } from "redux";
import { Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import addpost from '../actions/addpost';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import editaction from '../actions/update';
import getUserDetail from '../actions/pureactions';
import "../Style/page2style.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
 
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function LoginPage2({addpost,postdetails,funcdelete,editaction,detail}) {

 const [editid,seteditid]=useState("")
 const [edituserid,setedituserid]=useState("")
 const [editedbody,seteditedbody]=useState()
 const [editedtitle,seteditedtitle]=useState()
  const [open,setopen]=useState(false)
  const openModel = ()=>{setopen(true)}
  const closeModel = ()=>{setopen(false)}


  const [posteid,setposteid]=useState("")
  const [postetitle,setpostetitle]=useState("")
  const [postebody,setpostebody]=useState("")
  const [openaddpost,setopenpost]=useState(false)
  const openModalPost = ()=>{setopenpost(true)}
  const closeModalPost = ()=>{setopenpost(false)}

  useEffect(()=>{
    postdetails()
    
  },[])
 
function handleupdate(){
 var edata={editid,edituserid,editedbody,editedtitle};
 editaction(edata);
 setopen(false)
}
function handleaddpost(){
  //console.log("dfghjkl")
  var postedata={posteid,postetitle,postebody};
  addpost(postedata);
  setopenpost(false)
 }





    
  return (
    <div >
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ABOUT
          </Typography>
          <Button color="inherit" onClick = {() => setopenpost(true)}>ADD POST</Button>
        </Toolbar>
      </AppBar>
    </Box>
    < br/><br />
    
    <TableContainer className='TableoooContainer' component={Paper}>
    <Table sx={{maxWidth: 950} } aria-label="simple table">
    <TableHead sx={{ backgroundColor: "black"}} >
          <TableRow >
            <StyledTableCell sx={{fontSize: "17px",fontWeight:"bold"}} >USERID</StyledTableCell>
            <StyledTableCell sx={{fontSize: "17px",fontWeight:"bold"}} align="center">ID</StyledTableCell>
            <StyledTableCell sx={{fontSize: "17px",fontWeight:"bold"}} align="center">TITLE</StyledTableCell>
            <StyledTableCell sx={{fontSize: "17px",fontWeight:"bold"}} align="center">BODY</StyledTableCell>
            <StyledTableCell sx={{fontSize: "17px",fontWeight:"bold"}} align="center">VIEW</StyledTableCell>
            <StyledTableCell sx={{fontSize: "17px",fontWeight:"bold"}} align="center"> UPDATE </StyledTableCell>
            <StyledTableCell sx={{fontSize: "17px",fontWeight:"bold"}} align="center">DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
       {detail?.data.map((item,index)=>(
        <StyledTableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <StyledTableCell component="th" scope="row"sx={{color:"white",fontWeight:"bold",backgroundColor:"#424242"}}>
                {item.userId}
              </StyledTableCell>
             

              <StyledTableCell sx={{color:"white",fontWeight:"bold",backgroundColor:"#424242"}} align="left">{item.id}</StyledTableCell>
              <StyledTableCell  sx={{color:"white",fontWeight:"bold",backgroundColor:"#424242"}}align="left">{item.title}</StyledTableCell>
              <StyledTableCell sx={{color:"white",fontWeight:"bold",backgroundColor:"#424242"}} align="left">{item.body}</StyledTableCell>
              <StyledTableCell  sx={{color:"white",fontWeight:"bold",backgroundColor:"#424242"}}align="left"><Link to="view" state={{vtitle:item.title,tbody:item.body}}><VisibilityIcon className='visIcon'/></Link></StyledTableCell>
              <StyledTableCell  sx={{color:"white",fontWeight:"bold",backgroundColor:"#424242"}}align="left"><EditIcon className='ediIcon' onClick={()=>openModel(seteditedtitle(item.title),seteditedbody(item.body),seteditid(item.id),setedituserid(item.userId))}/></StyledTableCell>
              <StyledTableCell  sx={{color:"white",fontWeight:"bold",backgroundColor:"#424242"}}align="left"><DeleteIcon className='delIcon'  onClick={()=>(funcdelete({detailid:item.id}))}/></StyledTableCell>
        </StyledTableRow>

      
        ))}


        </TableBody>
   
      </Table>
    </TableContainer>
  
    
      <Modal
      open={open}
      onClose={closeModel}
      className='modelcontainer'
      >
      <div>
      <Card className='cardEdit'>
      <div className='cardhead'>UPDATE POST</div>
      <div className='fd'>
      <label>TITLE OF THE POST</label>
        <textarea
        className='textinp'
        defaultValue={editedtitle}
        onChange={(e)=>{seteditedtitle(e.target.value)}}
        ></textarea>
      </div>
        
        <div  className='fd'>
        <label>BODY OF THE POST</label>
        <textarea
        className='textinp'
        defaultValue={editedbody}
        onChange={(e)=>{seteditedbody(e.target.value)}}
        ></textarea>
        </div>
        <Button className='alin' sx={{width:"500px"}} variant="contained" size="large" onClick={handleupdate}>
          UPDATE
        </Button>
        
      </Card>
      </div>
   
      </Modal>
      <Modal
      open={openaddpost}
      onClose={closeModalPost}
      className='modelcontainer'
      >
        <Card className='card'>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='text'>
    
        <TextField
          required
          id="outlined-required"
          label="TITLE"
          
          onChange={(e)=>{setpostetitle(e.target.value)}}
        />
        <TextField
          required
          id="outlined-required"
          label="BODY"
          
          onChange={(e)=>{setpostebody(e.target.value)}}
        />
        <Button className='al' sx={{width:"100px"}} variant="contained" size="large"  onClick={handleaddpost}>
          POST
        </Button>
      
      </div>
     
    </Box>
    </Card>
            </Modal>
     
  
    </div>
  )
}
const mapStateToProps = (state)=>({detail : state.detailsreducer.details});



function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    funcdelete: deletePost,
    postdetails:getUserDetail,
    editaction,addpost
  }, dispatch)
}
LoginPage2.prototype = {
  postdetails:PropTypes.func.isRequired,
  addpost:PropTypes.func.isRequired,
  funcdelete:PropTypes.func.isRequired,
  detail: PropTypes.objectOf(PropTypes.object),

}

export default connect (mapStateToProps,mapDispatchToProps)(LoginPage2);