import React from 'react';
import { useTitle } from '../../hooks/UserTitle';

const Blogs = () => {
    useTitle('| blogs')
    return (
        <div>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] capitalize text-4xl my-5 font-bold'>Comming soon...</h1>
        </div>
    );
};

export default Blogs;