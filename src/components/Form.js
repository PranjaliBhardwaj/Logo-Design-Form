import React, { useState } from 'react';

const LogoDesignForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    referenceImage: null,
    description: '',
    brandColors: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState({});
  const [fileStatus, setFileStatus] = useState({
    referenceImage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
    setFileStatus({ ...fileStatus, [name]: files[0]?.name || 'File selected' });
  };

  const validateForm = () => {
    const currentErrors = {};
    if (!formData.companyName.trim()) {
      currentErrors.companyName = 'Company Name is required';
    }
    if (!formData.referenceImage) {
      currentErrors.referenceImage = 'Reference Image is required';
    }
    if (!formData.description.trim()) {
      currentErrors.description = 'Description is required';
    }
    if (!formData.brandColors.trim()) {
      currentErrors.brandColors = 'Brand Colors are required';
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Add form submission logic here
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>


      {/* Company Name Field */}
      <div className="form-group">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className={`form-input ${errors.companyName ? 'error-input' : ''}`}
          value={formData.companyName}
          onChange={handleInputChange}
        />
        {errors.companyName && <span className="error-message">{errors.companyName}</span>}
      </div>

      {/* Reference Image Upload Field */}
      <div className="upload-field">
        <span>{fileStatus.referenceImage || 'Please upload a reference image'}</span>
        <input
          type="file"
          name="referenceImage"
          id="referenceImage"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="referenceImage" className="upload-button">
          Upload
        </label>
        {errors.referenceImage && <span className="error-message">{errors.referenceImage}</span>}
      </div>

      {/* Description Field */}
      <div className="form-group">
        <textarea
          name="description"
          placeholder="Describe your logo concept"
          className={`form-input ${errors.description ? 'error-input' : ''}`}
          value={formData.description}
          onChange={handleInputChange}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>

      {/* Brand Colors Field */}
      <div className="form-group">
        <input
          type="text"
          name="brandColors"
          placeholder="Brand Colors"
          className={`form-input ${errors.brandColors ? 'error-input' : ''}`}
          value={formData.brandColors}
          onChange={handleInputChange}
        />
        {errors.brandColors && <span className="error-message">{errors.brandColors}</span>}
      </div>

      {/* Additional Notes Field (Optional) */}
      <div className="form-group">
        <textarea
          name="additionalNotes"
          placeholder="Additional Notes (Optional)"
          className="form-input"
          value={formData.additionalNotes}
          onChange={handleInputChange}
        />
      </div>

      {/* Submit Button */}
      <div className="button-group">
        <button type="submit" className="form-button">Submit</button>
      </div>
    </form>
  );
};

export default LogoDesignForm;
