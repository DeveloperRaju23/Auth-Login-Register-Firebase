import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/Provider/AuthProviders';


const Login = () => {

    const {createSignIn} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createSignIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className='text-center'>
            <h1 className='text-5xl font-bold'>Please Login!!</h1>
            </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt mr-4 link link-hover">Forgot password?</a>
                    <Link to="/register">
            <a className="link link-primary">Please Register?</a>
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
   
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;