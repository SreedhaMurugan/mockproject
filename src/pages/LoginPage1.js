
import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button, TextField} from '@mui/material';
import Spinner from 'react-bootstrap/Spinner';
import { Card } from '@mui/material';

import getUser from '../actions/getUserfile'
import LoginPage2 from './LoginPage2';
import { Link, useNavigate} from 'react-router-dom';
import "../Style/login.css"

const LoginPage1 = ({getoneuser,user}) => {
   const [email,setemail]=useState("")
   const navigate = useNavigate();
  
 useEffect(() => {
  
 console.log(user,"effectuser")
    if(user?.status==200){navigate("/details")}
    
 
 }, [user]);
  
   
   
    
  return (
<div className="container pt-5">
            <div className="row">
                <div className="col-sm-9 col-md-8 col-lg-6 mx-auto">
                    <div className="shadow rounded-5 my-5">
                        <div className="card-body p-4 p-sm-6">
                            <h3 className="card-title text-center mb-5">Log In</h3>
                            <div className="mb-3">
                            

                                <input type="text" id="txtName" className="form-control" placeholder="Email-address" name="email" onChange={(e)=>(setemail(e.target.value))} /><br />
                            </div>
                            <div className="mb-3">
                                <input type="password" id="txtPass" className="form-control" placeholder="Password"   /><br />
                            </div>
                            <div className="d-grid">
                            
    

                                <button className="btn btn-primary" id="btnSave" onClick={() => getoneuser(email)}>LOGIN
                                </button><br />
                                {/* <Routes> */}
                                    {/* <Route path="./components/Records" element={<Records />} /> */}
                                {/* </Routes> */}
                            </div>
                            <div>
                                <Link className="nav-link active">
                                    Don't have an account? Register here
                                </Link>
                                {/* <Routes>
                                    <Route path="/sign-in" element={<Registration />} />
                                </Routes> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        




   
     
     
 
  );
  
}

const mapStateToProps = (state)=>({
  user : state.loginreduser.user});


const mapDispatchToProps = (dispatch) =>{
    return{
      
        getoneuser: (email)=>dispatch(getUser(email))
    };
};

LoginPage1.prototype = {
   
    getoneuser:PropTypes.func.isRequired,
    detail: PropTypes.objectOf(PropTypes.object),
    user: PropTypes.objectOf(PropTypes.object),
}

export default connect (mapStateToProps,mapDispatchToProps)(LoginPage1)
