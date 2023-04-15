import React, { useContext } from 'react';
import  { AuthContext } from '../Firebase/Provider/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>My Name is {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;