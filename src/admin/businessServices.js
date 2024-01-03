import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useForm } from 'react-hook-form';
import {Box, Avatar, Dialog, DialogContent, DialogTitle, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ServiceDetails from "../user/serviceDetails";
import storeServices from '../store/service';
const BusinessServices=observer(()=>{
    const[flagAddService,setFlagAddService]=useState(false);
    const[isHover,setIsHover]=useState(false);
    return(
        <>
         <Tooltip 
          title={isHover?'ADD SERVICE':''}>
            <IconButton 
            onClick={()=>setFlagAddService(true)} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
            sx={{marginTop:"30px",marginBottom:"30px"}}>

                    <Avatar sx={{backgroundColor:'#009f92'}}>
                        <AddIcon ></AddIcon>
                    </Avatar>
                </IconButton>
            </Tooltip>
       
    <ServiceDetails></ServiceDetails>
   
    {flagAddService&&<AddService closeForm={setFlagAddService}></AddService>}
    <Dialog open={flagAddService} onClose={() => setFlagAddService(false)}>
                <DialogTitle sx={{color:"#009f92",marginLeft:"35%"}}>AddService</DialogTitle>
                <DialogContent>
                    <AddService  closeForm={setFlagAddService}/>
                    
                </DialogContent>
            </Dialog>
    </>
    )
})  
export default BusinessServices;

export function AddService({closeForm}){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[isHover,setIsHover]=useState(false);
    function addService(service){
        closeForm(false);
        storeServices.addService(service);

    }
    return(
        <>
         <form onSubmit={handleSubmit(addService)}>
                
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '& .MuiTextField-root': { width: '50ch' },
                    }}
                >
                    <div>
                       
                        <TextField
                            id="margin-normal" margin="normal"
                            type="text"
                            label={'name'}
                            {...register("name",{required:"the name is required field"})}
                            error={Boolean(errors.clientName)}
                            helperText={errors.clientName?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            id="margin-normal" margin="normal"
                            type="text"
                            label={'description'}
                            {...register("description",{required:"the description is required field"})}
                            error={Boolean(errors.clientPhone)}
                            helperText={errors.clientPhone?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            id="margin-normal" margin="normal"
                            type="number"
                            label={'price'}
                            {...register("price",{required:"the price is required field"})}
                            error={Boolean(errors.clientEmail)}
                            helperText={errors.clientEmail?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            id="margin-normal" margin="normal"
                            type="number"
                            label={'duration'}
                            {...register("duration",{required:"the duration is required field"})}
                            error={Boolean(errors.clientEmail)}
                            helperText={errors.clientEmail?.message}
                        />
                    </div>

                   
                </Box>

            <Tooltip 
          title={isHover?'ADD MEETING':''}>
            <IconButton type='submit'
             onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
            sx={{marginLeft:"43%"}}>

                    <Avatar sx={{backgroundColor:'#009f92'}}>
                        <AddIcon ></AddIcon>
                    </Avatar>
                </IconButton>
            </Tooltip>
          
        
            </form>
        </>

    )
}