import { useState } from 'react';
import BusinessDetails from './businessDetails';
import { Button } from '@mui/material';
import BusinessServices from './businessServices';
import Meeting from './meeting';
import { Link, Outlet } from 'react-router-dom';
import storeBusiness from '../store/business'
import Login from './login';
import { observer } from 'mobx-react-lite';
const Main=observer(() =>{
  // const [flagAdmin,setFlagAdmin]=useState(false);
  const [service, setService] = useState(false);
  const [meet, setMeet] = useState(true);
  if (!storeBusiness.isAdmin) {
    return (
      <>
      {console.log(storeBusiness.isAdmin)}
      <Login></Login>
      
      </>
    )
  }
  else {
    return (
      <>
        {console.log(storeBusiness.isAdmin)}
        <BusinessDetails></BusinessDetails>
        {/* <Button onClick={()=>{setService(true);setMeet(false)}}>services</Button>
          <Button onClick={()=>{setMeet(true);setService(false);}}>meeting</Button>
        {service&&<BusinessServices></BusinessServices>}
        {meet&&<Meeting></Meeting>} */}
        <Link to={'/admin/meeting'}><Button variant="contained" sx={{backgroundColor:"#41e6a6",marginTop:"30px",margin:'2%'}}>meeting</Button></Link>
        <Link to={'/admin/service'}><Button variant="contained" sx={{backgroundColor:"#41e6a6",marginTop:"30px",margin:'2%'}}>services</Button></Link>
        <br/>
        <Outlet />
      </>
    )
  }
})
export default Main;