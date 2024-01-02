import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Avatar, Dialog, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddMeeting from "./addMeeting";
import BusinessDetails from "../admin/businessDetails";
import ServiceDetails from "./serviceDetails";
const HomeUser = observer(() => {
    const [addMeet, setAddMeet] = useState(false);
    const[isHover,setIsHover]=useState(false)
    return (
        <>
            <BusinessDetails></BusinessDetails>
          <Tooltip 
          title={isHover?'ADD MEETING':''}>
            <IconButton 
            onClick={() => setAddMeet(true)} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
            sx={{marginTop:"30px",marginBottom:"30px"}}>

                    <Avatar sx={{backgroundColor:"#41e6a6"}}>
                        <AddIcon ></AddIcon>
                    </Avatar>
                </IconButton>
            </Tooltip>
            <ServiceDetails></ServiceDetails>
            <Dialog open={addMeet} onClose={() => setAddMeet(false)}>
                <DialogTitle sx={{color:"#009f92",marginLeft:"35%"}}>Add Meeting</DialogTitle>
                <DialogContent>
                    <AddMeeting  setDateOk={ setAddMeet}/>
                    
                </DialogContent>
            </Dialog>
        </>
    )
})
export default HomeUser;