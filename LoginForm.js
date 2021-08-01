
import React, {useState} from 'react';
function LoginForm(props) {
const [state,setState]= useState({
    email:"",
    password:""
});
const handleFormSubmit=((e)=>{
    e.preventDefault();
    
    const email = localStorage.getItem('user');
    const pass = localStorage.getItem('pass');
    if(state.email===email && pass===state.password){
        console.log("test");
        props.islogged(true);
    }
})
const handleChange =((e)=>{
    const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
})
  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange }
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange }
                    />
                </div>
              
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm;