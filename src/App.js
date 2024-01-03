import { BrowserRouter, Route, Routes,Outlet, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './App.css';
import BusinessServices from './admin/businessServices';
import Main from './admin/main';
import Meeting from './admin/meeting';
import HomeUser from './user/homeUser';


function App() {
    return (
        <div >

            <BrowserRouter>
                <Routes>
                <Route path="" element={<LeyOut></LeyOut>}>
                    <Route path='/' element={<HomeUser></HomeUser>}></Route>
                    <Route path='/admin' element={<Main></Main>}>
                        <Route path='meeting' element={<Meeting></Meeting>}></Route>
                        <Route path='service' element={<BusinessServices></BusinessServices>}></Route>
                        
                    </Route>
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
export function LeyOut(){
    return(<>
     <header style={{height:'10%',backgroundColor:'rgb(0 159 146 / 68%)',marginTop:'2%'}}>
     <Link to={'/'}><Button  sx={{color:'#009f92',backgroundColor:'#bdbdbd',marginTop:"30px",margin:'2%',}}>user</Button></Link>
    <Link to={'/admin'}><Button sx={{color:'#009f92',backgroundColor:'#bdbdbd',marginTop:"30px",margin:'2%'}}>admin</Button></Link>
     </header>
     <div  className='App'><Outlet></Outlet></div>
    
    </>)
   
}