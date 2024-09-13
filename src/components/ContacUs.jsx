import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-light-gray py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div>
          <h2 className="text-4xl font-bold text-navy mb-6">Get in Touch</h2>
          <p className="text-gray-800 mb-8">
            We'd love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H4m12 0v-2a2 2 0 10-4 0v2a2 2 0 014 0v2a2 2 0 01-2 2h-1"></path>
              </svg>
              <span className="text-navy">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-15.1m4.5 2.4a8.39 8.39 0 011.4 2.7M12 21v-7m-3 3l3-3 3 3m6-2V7.7a4.7 4.7 0 00-4.7-4.7h-7.6A4.7 4.7 0 004 7.7v8.6A4.7 4.7 0 008.7 21H16"></path>
              </svg>
              <span className="text-navy">contact@company.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-yellow mr-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 16v2m9-10h2M3 12H1m16.95 4.95l1.414-1.414M4.636 19.364l1.414-1.414M19.364 4.636l1.414-1.414M4.636 4.636L3.222 6.05M21 12A9 9 0 1112 3a9 9 0 019 9z"></path>
              </svg>
              <span className="text-navy">1234 Street Name, City, State, 56789</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-navy mb-6">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                placeholder="Your Message" 
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow h-32"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-navy focus:outline-none focus:ring-2 focus:ring-yellow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
