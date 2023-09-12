import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#257B9C] flex justify-center items-center p-4'>
        <form action='' className='flex flex-col max-w-[500px] w-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF914D] text-white'>Contact Me</p>
                <p className='text-white py-4'>Send me a message by submitting the form below or reach me via email - derricn2@gmail.com</p>
            </div>
            <input className='p-1 bg-[#dbeef5]' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-1 bg-[#dbeef5]' type='email' placeholder='Email' name='email' />
            <textarea className='p-1 bg-[#dbeef5]' name='message' rows={10} placeholder='Message'></textarea>
            <button className='text-white b-2 hover:bg-[#FF914D] hover-border-[#FF914D] px-4 py-2 my-4 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact