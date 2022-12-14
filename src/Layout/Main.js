import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaEnvelope, FaFacebook, FaGithub, FaGraduationCap, FaHome, FaLinkedinIn, FaListAlt, FaTwitter } from 'react-icons/fa';
import './Main.css'
import photo from './sheikhriyadh.jpg'

const Main = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center justify-center md:justify-items-start bg-[#010101]">
                    {/*  <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-11 w-80 bg-[#0A1413] text-base-content">
                        {/* Sidebar content here */}
                        <div className="avatar">
                            <div className="w-24 rounded-full text-white transition-all  ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photo} alt='Sheikh_Riyadh' />
                            </div>
                        </div>
                        <div className='my-3 text-start text-xl'>
                            <h1 className='text-3xl'>Sheikh Riyadh</h1>
                            <h2 className='text-xl'>MERN stack developer</h2>
                            <div className='flex gap-4 my-3'>
                                <a href="https://www.linkedin.com/in/sheikh-riyadh/" target="_blank" rel='noreferrer'> <FaLinkedinIn className='bg-gradient-to-r from-[#13F26D] to-[#0092A4] rounded-full text-white transition-all p-2 text-4xl'></FaLinkedinIn> </a>
                                <a href="https://github.com/sheikh-riyadh" target="_blank" rel='noreferrer'><FaGithub className='bg-gradient-to-r from-[#13F26D] to-[#0092A4] rounded-full text-white transition-all p-2 text-4xl'></FaGithub></a>
                                <a href="https://www.facebook.com/sheikhriyadhofficial/" target="_blank" rel='noreferrer'><FaFacebook className='bg-gradient-to-r from-[#13F26D] to-[#0092A4] rounded-full text-white transition-all p-2 text-4xl'></FaFacebook></a>
                                <a href="https://twitter.com/sheikh_offical_" target="_blank" rel='noreferrer'><FaTwitter className='bg-gradient-to-r from-[#13F26D] to-[#0092A4] rounded-full text-white transition-all p-2 text-4xl'></FaTwitter></a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='text-start text-xl flex items-center gap-3'>
                                <FaHome></FaHome><Link to='/home'>Home</Link>
                            </div>
                            <div className='text-start text-xl flex items-center gap-3'>
                                <FaGraduationCap></FaGraduationCap><Link to='/skills'>Skills</Link>
                            </div>
                            {/* <div className='text-start text-xl flex items-center gap-3'>
                                <FaUserGraduate></FaUserGraduate> <Link>Education</Link>
                            </div> */}
                            <div className='text-start text-xl flex items-center gap-3'>
                                <FaListAlt></FaListAlt><Link to='/projects'>Projects</Link>
                            </div>
                            <div className='text-start text-xl flex items-center gap-3'>
                                <FaEnvelope></FaEnvelope><Link to='/blogs'>Blogs</Link>
                            </div>
                            <div className='text-start text-xl flex items-center gap-3'>
                                <FaEnvelope></FaEnvelope><Link to='/contact'>Contact</Link>
                            </div>
                            <div className='text-start text-xl flex items-center gap-3'>
                                <a download href='./Sheikh-riyadh-portfolio.pdf' className='btn bg-gradient-to-r from-[#13F26D] to-[#0092A4] border-0
                                text-white' target="_blank" rel="noreferrer">Download Resume</a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='lg:hidden flex py-5 justify-center items-center bg-[#010101]'>
                <div className="btm-nav bg-gradient-to-r from-[#13F26D] to-[#0092A4] text-white z-50">
                    <Link to='/'><FaHome></FaHome></Link>
                    <Link to='/skills'><FaGraduationCap></FaGraduationCap></Link>
                    <Link to='/projects'><FaListAlt></FaListAlt></Link>
                    <Link to='/contact'><FaEnvelope></FaEnvelope></Link>
                    <label htmlFor="my-drawer-2" className=" lg:hidden"><FaBars></FaBars></label>
                </div>
            </div>
        </div>
    );
};

export default Main;