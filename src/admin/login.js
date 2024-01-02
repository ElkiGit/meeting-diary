import { Avatar, Box, Button, IconButton, InputAdornment, OutlinedInput, Tooltip, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send'
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import storeBusiness from '../store/business';
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
    const { register, handleSubmit, reset } = useForm({ defaultValues: { name: "", password: "" } });
    const [flagAdmin, setFlagAdmin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    function checkLogin(admin) {
        console.log(admin)
        storeBusiness.validationLogin(admin, setFlagAdmin);

    }
    useEffect(() => {
        reset({ name: "", password: "" })
    }, [flagAdmin])
    const[isHover,setIsHover]=useState(false);
    return (
        <>
            <form onSubmit={handleSubmit(checkLogin)}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '& .MuiTextField-root': { width: '30ch' },
                        marginTop: "20%",
                    }}
                >
                    <div>
                        <TextField
                            id="margin-normal" margin="normal"
                            type="text"
                            label={'user name'}
                            {...register("name")} />

                    </div>
                    <div>
                        <TextField
                            label="Password"
                            type={showPassword ?  'text':'password' }
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            {...register("password")} />
                    </div>

                </Box>
                <Tooltip
                    title={isHover ? 'LOG IN' : ''}>
                    <IconButton type="submit"
                         onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
                        sx={{ marginTop: "30px", marginBottom: "30px" }}>

                        <Avatar sx={{ backgroundColor: "#41e6a6" }}>
                        <SendIcon />
                        </Avatar>
                    </IconButton>
                </Tooltip>
             
               
            </form>
            {flagAdmin &&
                <Typography variant="body2" color="error"  >
                    The username or password is not correct!
                </Typography>}

        </>
    )
}

