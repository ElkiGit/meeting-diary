import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { Avatar, Box, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import storeServices from '../store/service';
import storeMeeting from '../store/appointment';
const AddMeeting = observer((props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setDateOk } = props;
    const [secondTime, setSecondTime] = useState(false);
    const data = storeServices.dataServices;
    const [isHover, setIsHover] = useState(false);
    function addMeetToStore(meet) {
        console.log(meet);
        storeMeeting.addAppointment(meet, setDateOk, setSecondTime);
    }
    const [ser, setSer] = useState('');

    const handleChange = (event) => {
        setSer(event.target.value);
    };
    return (
        <>
            <form onSubmit={handleSubmit(addMeetToStore)}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '& .MuiTextField-root': { width: '50ch' },
                    }}
                >

                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">select service</InputLabel>
                            <Select  {...register("serviceType",{required: "The type meet is a required field"})}
                             error={Boolean(errors.serviceType)}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ser}
                                label="serviceType"
                                onChange={handleChange}
                            >
                                {data.map((serv) => (<MenuItem key={serv.id} value={serv.id}>{serv.name}</MenuItem>))}
                            </Select>
                        </FormControl>

                    </div>
                    <div>
                        <TextField
                            id="margin-normal" margin="normal"
                            type="text"
                            label={'name'}
                            {...register("clientName", { required: "The name is a required field" })}
                            error={Boolean(errors.clientName)}
                            helperText={errors.clientName?.message}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="clientPhone">Phone</label> */}
                        <TextField
                            id="margin-normal" margin="normal"
                            type="text"
                            label={'phone'}
                            {...register("clientPhone", { required: "The phone is a required field" })}
                            error={Boolean(errors.clientPhone)}
                            helperText={errors.clientPhone?.message}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="clientEmail">Email</label> */}
                        <TextField
                            id="margin-normal" margin="normal"
                            type="email"
                            label={'email'}
                            {...register("clientEmail", { required: "The email is a required field" })}
                            error={Boolean(errors.clientEmail)}
                            helperText={errors.clientEmail?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            id="margin-normal" margin="normal"
                            type="datetime-local"
                            label={'date'}
                            {...register("dateTime", { required: "The date is a required field" })}
                            error={Boolean(errors.clientEmail)}
                            helperText={errors.clientEmail?.message}
                        />
                    </div>

                    {/* <button >add</button> */}
                </Box>
                {secondTime && <Typography variant="body2" color="error" sx={{ fontSize: '18px', marginLeft: '28%' }}  >
                    The date catched
                </Typography>}
                <Tooltip
                    title={isHover ? 'ADD MEETING' : ''}>
                    <IconButton type='submit'
                        onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
                        sx={{ marginLeft: "43%" }}>

                        <Avatar sx={{ backgroundColor: "#41e6a6" }}>
                            <AddIcon ></AddIcon>
                        </Avatar>
                    </IconButton>
                </Tooltip>


            </form>

        </>

    )
})

export default AddMeeting;