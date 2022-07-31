// import React, { useEffect } from "react";
// import { Card, Form, Button } from 'react-bootstrap';
// import { getUserAction } from '../actions/creators';
// import { useDispatch, useSelector, connect } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import PropTypes from "prop-types";
// const UpdateUser = ({ auth: { user } }) => {

//     const dispatch = useDispatch();


    
//     const { id } = useParams();
//     // const { user } = useSelector((state) => state.user);
//     const  users  = useSelector(state => state.users?.results);
//     useEffect(() => {
//         dispatch(getUserAction(id));
//     }, [users]);


   

//     return (
//         <div className="container" id="update" >

//             <Card className={"border border-dark bg-dark text-white"} >
//                 <Card.Header id="header" ><h3 className="profile">PROFILE DETAILS</h3></Card.Header>
//                 <Form>
//                     <Card.Body id="body" >
//                         <div className="container">
//                             <div className="profile-item">
//                                 <h3><label id="label">Name :</label> {user.name}</h3>
//                             </div>
//                             <div className="profile-item">
//                                 <h3> <label id="label">Email :</label> {user.email}</h3>
//                             </div>
//                             <div className="profile-item">
//                                 <h3> <label id="label">Role :</label> {user.role}</h3>
//                             </div>
                            
//                             <Button id="btn" href='/dashboard' className="w-30 p-3 float-right" variant="primary" >
//                                 Home
//                             </Button>
//                             {/* <Button id="btn" href={'/update/' + id} className="w-30 p-3 float-right" variant="primary" >
//                                 Update
//                             </Button> */}
//                         </div>



//                     </Card.Body>
//                 </Form>
//             </Card>

//         </div >
//     );

// }
// UpdateUser.propTypes = {
// 	auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	auth: state.auth,
// });


// export default connect(mapStateToProps)(UpdateUser);

// import React, { useEffect, useState } from "react";
// import { getUserAction, updateUserAction } from '../actions/creators';
// import { useDispatch, useSelector, connect } from 'react-redux';
// import { useParams,  useHistory, Link } from 'react-router-dom';
// import PropTypes from "prop-types";
// const UpdateUser = ({ auth: { user } }) => {
//     const dispatch = useDispatch();
//     const { id } = useParams();
//     const history = useHistory();
//     const [state, setState] = useState({
//         name: '',
//         email: '',
//         role: '' ,
        
        
//     }
//     );
//     const  result  = useSelector((state) => state.users?.results);
//     console.log(result)
//     useEffect(() => {
//         dispatch(getUserAction(id, history));
//     }, []);

//     useEffect(() => {
//         if (result) {
//             setState({ ...result });
//         }
//     }, [result]);

//     const { name, email, role } = state;

//     const handleTextChange = e => {
//         const { name, value } = e.target;
//         setState({ ...state, [name]: value });
//         console.log(state);
//     }

//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateUserAction(state, id, history));
//     }
//   return (
//     <div className="container rounded bg-white mt-5">
//     <div className="row">
//     <form  onSubmit={handleOnSubmit}>
//       <div className="col-md-4 border-right">
//         <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//           <img
//             className="rounded-circle mt-5"
//             src="https://i.imgur.com/0eg0aG0.jpg"
//             width={90}
//           />
//           <span className="font-weight-bold">{user.name}</span>
//           <span className="text-black-50">{user.email}</span>
//           <span>{user.role}</span>
//         </div>
//       </div>
//       <div className="col-md-8">
//         <div className="p-3 py-5">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="d-flex flex-row align-items-center back">
//               <i className="fa fa-long-arrow-left mr-1 mb-1" />
//               <Link to="/dashboard"><h6>Profile Back to home</h6></Link>
//             </div>
//              {/* <h2 className="text-left">Edit Profile</h2>  */}
//           </div>
         
//           <div className="row mt-2">
            
//             <div className="col-md-6">
//             <input
//                 name="name"
//                 className="form-control"
//                 placeholder="Name"
//                 value={name || ""}
//                 onChange={handleTextChange}
//               />
//             </div>
//           </div>
//           <div className="row mt-3">
//             <div className="col-md-6">
//             <input
//                 name="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email || ""}
//                 onChange={handleTextChange}
//               />
//             </div>
//           </div>
//           <div className="row mt-3">
//             <div className="col-md-6">
//               <input
//                 name="role"
//                 className="form-control"
//                 placeholder="Role"
//                 value={role || ""}
//                 onChange={handleTextChange}
//               />
//             </div>
//           </div>
         
//           <div className="mt-5 text-left">
//             <button className="btn btn-primary profile-button" type="button"  onChange={handleTextChange}>
//               Save Profile
//             </button>
//           </div>
         
//         </div>
//       </div>
//       </form>
//     </div>
//   </div>
//   )
// }
// UpdateUser.propTypes = {
// 	auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	auth: state.auth,
// });

// export default connect(mapStateToProps)(UpdateUser);

import React, { useEffect, useState } from "react";
import { getUserAction, updateUserAction } from '../actions/creators';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,  useHistory, Link } from 'react-router-dom';
import axios from 'axios';
// import {
//   makeStyles,
//   TextField,
//   Button,
//   CircularProgress,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "50ch",
//     },
//     buttonProgress: {
//       color: "#fff",
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       marginTop: -12,
//       marginLeft: -12,
//     },
//   },
// }));

const UpdateUser = () => {
    const dispatch = useDispatch();
    // const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();
    const [state, setState] = useState({
        name: '',
        email: '',
        role: '' ,
        imgCollection: ''
        
        
    }
    );
    // const loading = useSelector((state) => state.users?.loading);
    // console.log(loading)
    const  result  = useSelector((state) => state.users?.results);
    console.log(result)
    useEffect(() => {
        dispatch(getUserAction(id, history));
    }, []);

    useEffect(() => {
        if (result) {
            setState({ ...result });
        }
    }, [result]);

    const { name, email, role } = state;

    const handleTextChange = e => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(state);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserAction(state, id, history));

        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        axios.post("http://localhost:5000/api/upload-images", formData, {
        }).then(res => {
            console.log(res.data)
        })
    }

    return (

      <>
      <form  onSubmit={handleOnSubmit}>
      <div className="container rounded bg-white mt-5">
  <div className="row">
    <div className="col-md-4 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <input
          type="file"
          name="imgCollection"
          className="rounded-circle mt-5"
          width={90}
          onChange={handleTextChange} 
          multiple
        />
        <span className="font-weight-bold">John Doe</span>
        <span className="text-black-50">john_doe12@bbb.com</span>
        <span>United States</span>
      </div>
    </div>
    <div className="col-md-8">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex flex-row align-items-center back">
            <i className="fa fa-long-arrow-left mr-1 mb-1" />
            <Link to = "/dashboard"><h6>Back to home</h6></Link>
          </div>
        
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <input
             className="form-control"
               name="name"
               label="Name"
               value={name || ""}
               onChange={handleTextChange}
            />
          </div>
          {/* <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              defaultValue="Doe"
              placeholder="Doe"
            />
          </div> */}
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <input
             className="form-control"
             name="email"
             label="Email"
             value={email || ""}
             onChange={handleTextChange}
            />
          </div>
          {/* <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              defaultValue={+19685969668}
              placeholder="Phone number"
            />
          </div> */}
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <input
            className="form-control"
              name="role"
              label="Role"
              value={role || ""}
              onChange={handleTextChange}
            />
          </div>
          {/* <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              defaultValue="USA"
              placeholder="Country"
            />
          </div> */}
        </div>
        {/* <div className="row mt-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Bank Name"
              defaultValue="Bank of America"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              
              placeholder="Account Number"
            />
          </div>
        </div> */}
        <div className="mt-5 text-left col-md-11">
          <button className="btn btn-primary profile-button" type="submit" onChange={handleTextChange}>
            Save Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
     
    </>
      
    );
}


export default UpdateUser;