import React, { useState } from 'react';

const Contact = () => {
    // define initial form data and errors using state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
    });

    // handle changes in form input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // perform form validation
        const newErrors = {};

        // check if name field is empty
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        // use a regular expression to validate email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // set errors state based on validation results
        setErrors(newErrors);
    };

  return (
    <div name='contact' className='w-full h-screen bg-[#257B9C] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/e5f415f8-5778-41ac-b1f5-0a9bd8c160a2' className='flex flex-col max-w-[500px] w-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF914D] text-white'>Contact Me</p>
                <p className='text-white py-4'>Send me a message by submitting the form below or reach me via email - derricn2@gmail.com</p>
            </div>
            <input className='p-1 bg-[#dbeef5]' type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange}/>
            {/* display validation error message if name field is empty */}
            <span className='text-red-500'>{errors.name} </span>
            <input className='my-4 p-1 bg-[#dbeef5]' type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
            {/* display validation error message if the email format is invalid */}
            <span className='text-red-500'>{errors.email}</span>

            <textarea className='p-1 bg-[#dbeef5]' name='message' rows={10} placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
            <button className='text-white b-2 hover:bg-[#FF914D] hover-border-[#FF914D] px-4 py-2 my-4 mx-auto flex items-center' type='submit' >Send</button>
        </form>
    </div>
  );
};

export default Contact;