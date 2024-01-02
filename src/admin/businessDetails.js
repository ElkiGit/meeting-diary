import { useState } from "react";
import { useForm } from 'react-hook-form';
import { observer } from "mobx-react-lite";
import { Avatar, Box, Button, Card, CardMedia, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Tooltip, Typography } from "@mui/material";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import storeBusiness from '../store/business';
const BusinessDetails = observer(() => {
    const data = storeBusiness.business;
    const [flagUpdate, setFlagUpdate] = useState(false);
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <List
                        sx={{
                            // width: '60%',
                            marginLeft: '3%',
                            bgcolor: '#f8f8f87d',
                        }}
                    >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkOutlineOutlinedIcon sx={{ color: '#41e6a6' }} />
                                </Avatar>
                            </ListItemAvatar>

                            <ListItemText
                                primary={<Typography color="#009f92"  >name business</Typography>}
                                secondary={<Typography color="black">{data?.name}</Typography>}
                            />
                        </ListItem>

                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon sx={{ color: '#41e6a6' }} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography color="#009f92">name owner business</Typography>}
                                secondary={<Typography color="black">{data?.owner}</Typography>}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BusinessOutlinedIcon sx={{ color: '#41e6a6' }} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography color="#009f92">address</Typography>}
                                secondary={<Typography color="black">{data?.address}</Typography>}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PhonelinkRingOutlinedIcon sx={{ color: '#41e6a6' }} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography color="#009f92">phone</Typography>}
                                secondary={<Typography color="black">{data?.phone}</Typography>}
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>
                <Card    sx={{marginTop:"30%"}}>
      <CardMedia
        component="img"
        alt="logo"
        height="120"
        image={data?.logo}
    
      />
    </Card>
    {storeBusiness.isAdmin && <Button sx={{ color:"#41e6a6", marginLeft: "5%",marginTop:"10%" }} onClick={() => setFlagUpdate(true)}>update</Button>}
                </Grid>
               
            </Grid>

            <Dialog open={flagUpdate} onClose={() => setFlagUpdate(false)}>
                <DialogTitle sx={{ color: "#41e6a6", marginLeft: "35%" }}>Update details</DialogTitle>
                <DialogContent>
                    <UpdateBusinessDetails flagUpdate={setFlagUpdate}></UpdateBusinessDetails>

                </DialogContent>
            </Dialog>

        </>
    )
})
export default BusinessDetails;

const UpdateBusinessDetails = observer(({ flagUpdate }) => {
    const data = storeBusiness.business;
    const[isHover,setIsHover]=useState(false);
    const { register, handleSubmit } = useForm(
        { defaultValues: { name: data.name, owner: data.owner, address: data.address, phone: data.phone, description: data.description, logo: data.logo } });

    function changeDetailsBusiness(business) {
        storeBusiness.addBusiness(business);
        flagUpdate(false);
    }
    return (
        <form onSubmit={handleSubmit(changeDetailsBusiness)}>
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
                        label={'name of business'}
                        {...register("name")} />

                </div>
                <div>
                    <TextField 
                    id="margin-normal" margin="normal"
                    type="text"
                    label={'name of owner'}
                        {...register("owner")} />
                </div>
                <div>
                    <TextField 
                    id="margin-normal" margin="normal"
                    type="text"
                    label={'address'}
                        {...register("address")} />
                </div>
                <div>
                    <TextField 
                    id="margin-normal" margin="normal"
                    type="text"
                    label={'phone'}
                        {...register("phone")} />
                </div>
                <div>
                    <TextField 
                    id="margin-normal" margin="normal"
                    type="text"
                    label={'logo'}
                        {...register("logo")} />
                </div>
                <div>
                    <TextField 
                    id="margin-normal" margin="normal"
                    type="text"
                    label={"description" }
                    multiline
                    rows={4}
                    
                        {...register("description")} />
                </div>
                
                
            </Box>
            <Tooltip 
          title={isHover?'UPDATE BUSINESS':''}>
            <IconButton type='submit'
             onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
             sx={{marginLeft:"43%"}}>
                    <Avatar sx={{backgroundColor:"#41e6a6"}}>
                        <ChangeCircleIcon></ChangeCircleIcon>
                    </Avatar>
                </IconButton>
            </Tooltip>
        </form>
    )
})

