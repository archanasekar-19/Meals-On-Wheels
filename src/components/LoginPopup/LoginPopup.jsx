// import React, { useState,useEffect } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const LoginPopup = ({setShowLogin, setUsername}) => {

//     const [currState,setCurrState] = useState("Log In");
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const username='';

//     const navigate = useNavigate();
    
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const userData = await fetchUserData();
//     //     // console.log(userData);
       
//     //     // const user = userData.users.find(user => {
//     //     //     return user.email === email && user.password === password;
//     //     // });

//     //     if (userData && userData.users) { // Check if userData exists and if it has the users property
//     //         const user = userData.users.find(user => {
//     //             return user.email === email && user.password === password;
//     //         });
//     //     console.log(user);
//     //     if (user) {
//     //         navigate('/');
//     //         localStorage.setItem('loggedInUser', JSON.stringify(user));
//     //         setUsername(user.username);
//     //         setShowLogin(false);
//     //         toast.success('Login Successful')
//     //     } else {
//     //         toast.error('Invalid username or password');
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const userData = await fetchUserData();
//         console.log(userData);
       
//         if (userData && userData.users) { 
//             const user = userData.users.find(user => {
//                 return user.email === email && user.password === password;
//             });
//             console.log(user);
//             if (user) {
//                 navigate('/');
//                 localStorage.setItem('loggedInUser', JSON.stringify(user));
//                 setUsername(user.username);
//                 setShowLogin(false);
//                 toast.success('Login Successful')
//             } else {
//                 toast.error('Invalid username or password');
//             }
//         } else {
//             console.error('User data is invalid or empty');
//         }
//     };

//     useEffect(() => {
//         const storedUser = localStorage.getItem('loggedInUser');
//         if (storedUser) {
//           const user = JSON.parse(storedUser);
//           setUsername(user.username);
//         } else {
//           setUsername(''); 
//         }
//       }, [setUsername]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch('src/data.json');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch user data');
//             }
//             console.log(response);
//             return response.json();
            
//         } catch (error) {
//             console.error('Error fetching user data:', error.message);
//             return [];
//         }
//     };


    
    
//     return (
//     <div className='login-popup'>
//         <div className="login-popup-container">
//             <div className="login-popup-title">
//                 <h2>{currState}</h2> 
//                   <img  style={{ width: "50px", marginLeft: "2px"}}
//                       src={currState === "Log In" ? assets.Login : assets.SignUp}
//                       alt="Login or Sign"
//                   />
//                 <img style={{marginLeft:"100px",alignItems:"end"}} onClick={() => setShowLogin(false)} src={assets.Cross} alt="Close" />
//             </div>

//             <form onSubmit={handleSubmit}>
//                     <div className="login-popup-inputs">
//                         {currState === "Sign Up" ? <input type="text" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} /> : null}
//                         <input type="email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                         <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     <button className="button"type="submit">{currState === "Log In" ? "Log In" : "Create account"}</button>
//                   <div className="login-popup-condition">
//                       <input type="checkbox" name="" id="" />
//                       <p style={{textAlign:"center"}}>By continuing, I agree to the terms of use & privacy policy.</p>
//                   </div>
//                   {currState === "Log In"
//                       ? <p style={{marginTop:"10px",textAlign:"center"}}>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
//                       : <p style={{marginTop:"10px",textAlign:"center"}}>Already have an account? <span onClick={() => setCurrState('Log In')}>Login here</span></p>
//                   }
//                 </form>
        

//               </div>
//     </div>
//   )
// }

// export default LoginPopup;



import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin, setUsername }) => {
    const [currState, setCurrState] = useState("Log In");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userData = {
            users: [
                {
                    "userId": "1",
                    "username": "archana1",
                    "email": "archana1@gmail.com",
                    "password": "archana1",
                    "role": "user",
                    "id": "0804"
                },
                {
                    "userId": "2",
                    "username": "archana2",
                    "email": "archana2@gmail.com",
                    "password": "archana2",
                    "role": "user",
                    "id": "6322"
                },
                {
                    "userId": "3",
                    "username": "admin1",
                    "email": "admin1@gmail.com",
                    "password": "admin",
                    "role": "admin",
                    "id": "3348"
                },
                {
                    "userId": "4",
                    "username": "archanasekar",
                    "email": "archanakmhss@gmail.com",
                    "password": "Archana@19",
                    "role": "user",
                    "id": "6322"
                },
                {
                    "id": "1f28",
                    "username": "test1",
                    "email": "test1@gmail.com",
                    "password": "test1"
                },
                {
                    "id": "40b2",
                    "userId": "c53sax749",
                    "username": "test2@gmail.com",
                    "email": "test2@gmail.com",
                    "password": "test"
                }
            ]
        };
        

        if (userData && userData.users) { 
            const user = userData.users.find(user => {
                return user.email === email && user.password === password;
            });
            console.log(user);
            if (user) {
                navigate('/');
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                setUsername(user.username);
                setShowLogin(false);
                toast.success('Login Successful')
            } else {
                toast.error('Invalid username or password');
            }
        } else {
            console.error('User data is invalid or empty');
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUsername(user.username);
        } else {
          setUsername(''); 
        }
    }, []);

    return (
        <div className='login-popup'>
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2> 
                    <img  style={{ width: "50px", marginLeft: "2px"}}
                        src={currState === "Log In" ? assets.Login : assets.SignUp}
                        alt="Login or Sign"
                    />
                    <img style={{marginLeft:"100px",alignItems:"end"}} onClick={() => setShowLogin(false)} src={assets.Cross} alt="Close" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="login-popup-inputs">
                        {currState === "Sign Up" ? <input type="text" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} /> : null}
                        <input type="email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="button" type="submit">{currState === "Log In" ? "Log In" : "Create account"}</button>
                    <div className="login-popup-condition">
                        <input type="checkbox" name="" id="" />
                        <p style={{textAlign:"center"}}>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    {currState === "Log In"
                        ? <p style={{marginTop:"10px",textAlign:"center"}}>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                        : <p style={{marginTop:"10px",textAlign:"center"}}>Already have an account? <span onClick={() => setCurrState('Log In')}>Login here</span></p>
                    }
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;

