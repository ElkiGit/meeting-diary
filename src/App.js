import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessDetails from './admin/businessDetails';
import BusinessServices from './admin/businessServices';
import Main from './admin/main';
import Meeting from './admin/meeting';
import HomeUser from './user/homeUser';
import Login from './admin/login';

function App() {
    return (
        <div className='App'>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeUser></HomeUser>}></Route>
                    <Route path='/admin' element={<Main></Main>}>
                        {/* <Route path='login' element={<Login></Login>}></Route> */}
                        <Route path='meeting' element={<Meeting></Meeting>}></Route>
                        <Route path='service' element={<BusinessServices></BusinessServices>}></Route>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;