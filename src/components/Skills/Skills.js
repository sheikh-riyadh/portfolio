import React, { useState } from 'react';
import { useTitle } from '../../hooks/UserTitle';

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle('| skills')
    fetch('./skills.json')
        .then(res => res.json())
        .then(data => {
            setSkills(data)
            setLoading(false)
        })
    if (loading) {
        return <p className='text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] capitalize text-4xl my-5 font-bold'>Loading...</p>
    }
    return (
        <div className='lg:px-24 mx-5 my-24 w-full text-start'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] capitalize text-4xl my-5 font-bold'>Skills</h1>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-5'>
                {
                    skills.map((skill, i) => {
                        return <div key={i} className="text-center">
                            <img src={skill.image} alt="skill" />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Skills;