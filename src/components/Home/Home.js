import React from 'react';
import { useTitle } from '../../hooks/UserTitle';

const Home = () => {
    useTitle('| home')
    return (
        <div className='lg:px-24 mx-5 text-start'>
            <div>
                <h1 className='uppercase text-2xl text-start'>hey hi</h1>
                <h2 className='text-4xl my-5 font-bold uppercase'>I'm <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] capitalize'>Sheikh Riyadh</span></h2>
                <p className='text-lg'>Studying Diploma in Engineering from govt graphic arts institute in Computer Department. and working as a MERN stack developer. I have a strong passion for the creativity and discipline that goes into MERN stack development. Keeping in mind scalability and clean code that is maintainable and readable. In my free time, I enjoy being outdoors, listening to music, traveling, and experiencing new and exciting adventures also love to learn new technology.</p>
            </div>
        </div>
    );
};

export default Home;