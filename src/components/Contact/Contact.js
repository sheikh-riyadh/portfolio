import React, { useRef, useState } from 'react';
import contact from './contact.jpg'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useTitle } from '../../hooks/UserTitle';

const Contact = () => {
    useTitle('| contact')
    const [loading, setLoading] = useState(false)
   
    const form = useRef();


    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm("service_0simhgi", "template_ledrdxr", form.current, "DWSCI3qaYK6a9UuIi")
          .then((res) => {
            if(res.status){
                e.target.name.value = ''
                e.target.email.value = ''
                e.target.message.value = ''
                toast.success("Send message successfully")
                setLoading(false)
            }
              
          }, () => {
              toast.error("Something went wrong ): ")
              setLoading(false)
          });
      };
    return (
        <div className='lg:px-24 mx-5 text-start'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-br from-[#13F26D] to-[#0092A4] text-4xl my-5 font-bold uppercase'>Contact</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-[#0A1413] rounded-lg'>
                <div className="">
                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <div className="form-control mt-3 text-black">
                            <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3 text-black">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <textarea className="textarea textarea-bordered text-black" name='message' placeholder="Message" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-[#13F26D] to-[#0092A4] border-0
                                text-white">{loading ? "Loading..." : "Send message"}</button>
                        </div>
                    </form>
                </div>
                <div className='hidden md:block'>
                    <img className='h-full rounded-r-lg' src={contact} alt="contact" />
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Contact;