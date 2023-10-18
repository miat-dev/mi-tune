import './css/HomePage.css'
import React from "react";
import AimForm from './AimForm/AimForm';
function HomePage() {
    return (
        <div>
            <AimForm />
            <div className='center'>
                <img src={require('./form.jpg')} />
            </div>
        </div>

    );
}
export default HomePage;
