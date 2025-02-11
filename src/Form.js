import React, { useState } from 'react';
import "./styles.css";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <div className="w-4 h-4 border-2 border-green-500 rounded-full mr-2"></div>
        <h1 className="text-2xl font-bold">Form</h1>
      </div>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="semicircle-input w-1/2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="semicircle-input w-1/2"
          />
        </div>
        <input
          type="text"
          name="number"
          placeholder="Your number"
          value={formData.number}
          onChange={handleChange}
          className="semicircle-input"
        />
        <textarea
          name="comment"
          placeholder="Write a comment"
          value={formData.comment}
          onChange={handleChange}
          className="semicircle-input h-32"
        ></textarea>
      </form>
    </div>
  );
}

export default Form;
