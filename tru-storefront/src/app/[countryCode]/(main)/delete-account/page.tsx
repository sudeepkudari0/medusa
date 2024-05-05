"use client"

import React, { useState } from 'react';

const AccountDeletionForm = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Account deletion request submitted:', { fullName, username, email, reason });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Account Deletion Assistance</h2>
      <p className="text-gray-600 text-center mb-6">When it’s time to say goodbye, we’re here to help. If you’re considering deleting your account, just follow these steps:</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-800 font-semibold mb-2">Full Name</label>
          <input type="text" id="fullName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-800 font-semibold mb-2">Username</label>
          <input type="text" id="username" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Registered Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block text-gray-800 font-semibold mb-2">Reason for Deletion (optional)</label>
          <textarea id="reason" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Your Email</button>
      </form>
      <p className="text-gray-600 text-center mt-6">We’ll take care of the rest, ensuring your data is handled respectfully and promptly.</p>
      <p className="text-gray-600 text-center mt-2">Questions? Reach out anytime at <a href="mailto:customersupport@example.com" className="text-blue-500">customersupport@example.com</a>.</p>
      <p className="text-gray-600 text-center mt-6">Thank you for being a part of our community.</p>
    </div>
  );
};

export default AccountDeletionForm;
