import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/footer";
import Register from "./Components/Auth/Register";
import JobAvl from "./Components/Job/JobAvl";
import Intern from "./Components/Internships/Intern";
import Profile from "./profile/Profile";
import InternDetail from "../src/Components/Internships/InternDetail"
import JobDetail from "./Components/Job/JobDetail";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from "./Feature/Userslice"
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import AdminLogin from './Admin/AdminLogin';
import Adminpanel from './Admin/Adminpanel';
import ViewAllApplication from "./Admin/ViewAllApplication"
import Postinternships from './Admin/Postinternships';
import DeatilApplication from './Applications/DeatilApplication';
import UserApplication from './profile/UserApplication';
import UserapplicationDetail from "./Applications/DeatilApplicationUser"



function App() {

  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
  
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
          phoneNumber:authUser.phoneNumber
        }))
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Internship" element={<Intern />} />
        <Route path="/Jobs" element={<JobAvl />} />
        <Route path='/detailjob' element={<JobDetail/>}/>
        <Route path='/detailInternship' element={<InternDetail/>}/>
        <Route path='/profile' element={<Profile/>}/>
<Route path='/detailApplication' element={<DeatilApplication/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/adminepanel' element={<Adminpanel/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/userapplication' element={<UserApplication/>}/>
        <Route path='/postInternship' element={<Postinternships/>}/>
<Route path='/applications' element={<ViewAllApplication/>}/>
<Route path='/UserapplicationDetail' element={< UserapplicationDetail/>}/>
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
