import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Avatar, Box, IconButton, InputAdornment, Tooltip, Typography,TextField, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import storeBusiness from '../store/business';
export default function Login() {
    const { register, handleSubmit, reset } = useForm({ defaultValues: { name: "", password: "" } });
    const [flagAdmin, setFlagAdmin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    function checkLogin(admin) {
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

                        <Avatar sx={{ backgroundColor: '#009f92'}}>
                        <SendIcon />
                        </Avatar>
                    </IconButton>
                </Tooltip>
             
               
            </form>
            {flagAdmin &&
                <Alert severity="error" sx={{marginLeft:'10%',marginRight:'10%'}}>The username or password is not correct!</Alert>
            }

        </>
    )
}

