import React from 'react';
import './Modal.css'
const Modal = ({ modalData }) => {
    const details = modalData?.details?.split(",")

    return (
        <div>
            <div className=" hidden md:block lg:block area z-0" >
                <ul className="hidden md:block lg:block circles z-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal z-50 flex justify-center items-center">
                <div className="modal-box relative lg:mx-auto lg:mr-24 xl:mx-auto bg-[#0A1413]">
                    <label htmlFor="project-modal" className="btn btn-sm btn-circle absolute right-2 top-2 z-30">✕</label>
                    <h3 className="text-lg font-bold">{modalData?.title}</h3>
                    <img className='w-full' src={modalData?.photo_frame} alt="project" />
                    <div>
                        <a target="_blank" rel="noreferrer" className='mx-3 font-extrabold text-lg text-white text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] ' href={modalData?.live}>Live site</a>
                        <a target="_blank" rel="noreferrer" className='mx-3 font-extrabold text-lg text-white text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] ' href={modalData?.client}>Client code</a>
                        <a target="_blank" rel="noreferrer" className='mx-3 font-extrabold text-lg text-white text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] ' href={modalData?.server}>Server code</a>
                    </div>
                    <div>
                        <h2 className='text-4xl my-5 font-bold'>Technologies</h2>
                        <p className='font-bold text-lg'>Front-end: {modalData?.front_end}</p>
                        <p className='font-bold text-lg'>Back-end: {modalData?.back_end}</p>
                        <h1 className='text-4xl my-5 font-bold'>Featurs</h1>
                        {
                            details?.map((detail, i) => {
                                return <ul key={i}>
                                    <li className='font-bold text-lg'>{detail}</li>
                                </ul>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;