import React from 'react'
import ContactUsImg from '../assets/images/contactus_backgroundimg.jpg';

const Contact = () => {
  return (
    <div id="contactus" className="relative bg-cover bg-center" style={{ backgroundImage: `url(${ContactUsImg})` }}>
    <div className="absolute"></div>
    
    <div className="max-w-[1170px] mx-auto py-20 p-3 md:flex md: place-content-end relative">
<div className="contact-field md:w-[50%] p-[1rem] relative z-10 inset-0 bg-black opacity-75">
  <form>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className={`my-4 w-full border-b border-gray-300 pl-4 h-12 bg-transparent block text-white`}
      autocomplete="off"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className={`my-4 w-full border-b border-gray-300 pl-4 h-12 bg-transparent block text-white`}
      autocomplete="off"
      required
    />

<input
  type="number"
  name="number"
  placeholder="Your Number"
  className={`my-4 w-full border-b border-gray-300 pl-4 h-12 bg-transparent block text-white`}
  autoComplete="off"
  required
/>

    <button
      type="submit"
      className="bg-[white] text-[#890809] px-10 py-1 rounded-lg"
    >
      Send
    </button>
  </form>
</div>

    </div>
  </div>
  )
}

export default Contact