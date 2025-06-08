// import React, { useState,useEffect } from 'react';
// import { Upload, AlertCircle } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// export default function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     teamRepName: '',
//     teamRepEmail: '',
//     speaker1: '',
//     yearOfStudy1: '',
//     email: '',
//     idCard: null,
//     contactNumber: '',
//     speaker2: '',
//     yearOfStudy2: '',
//     researcher: '',
//     institutionName: '',
//     classTeacherName: '',
//     classTeacherContact: '',
//     proofOfPayment: null
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleFileChange = (e, fieldName) => {
//     const file = e.target.files[0];
//     if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
//       setFormData(prev => ({
//         ...prev,
//         [fieldName]: file
//       }));
      
//       // Clear error when file is selected
//       if (errors[fieldName]) {
//         setErrors(prev => ({
//           ...prev,
//           [fieldName]: ''
//         }));
//       }
//     } else {
//       alert('File size should be less than 10MB');
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const requiredFields = [
//       'teamRepName', 'teamRepEmail', 'speaker1', 'yearOfStudy1', 'email',
//       'contactNumber', 'speaker2', 'yearOfStudy2', 'researcher',
//       'institutionName', 'classTeacherName', 'classTeacherContact'
//     ];

//     requiredFields.forEach(field => {
//       if (!formData[field].trim()) {
//         newErrors[field] = 'This is a required question';
//       }
//     });

//     if (!formData.idCard) {
//       newErrors.idCard = 'This is a required question';
//     }

//     if (!formData.proofOfPayment) {
//       newErrors.proofOfPayment = 'This is a required question';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

// const handleSubmit = () => {
//   if (validateForm()) {
//     const payload = {
//       teamRepName: formData.teamRepName,
//       teamRepEmail: formData.teamRepEmail,
//       speaker1: formData.speaker1,
//       yearOfStudy1: formData.yearOfStudy1,
//       email: formData.email,
//       contactNumber: formData.contactNumber,
//       speaker2: formData.speaker2,
//       yearOfStudy2: formData.yearOfStudy2,
//       researcher: formData.researcher,
//       institutionName: formData.institutionName,
//       classTeacherName: formData.classTeacherName,
//       classTeacherContact: formData.classTeacherContact
//     };

//     fetch("https://script.google.com/macros/s/AKfycbyyqDhtJK7wOFVpGYXrd9irv5wVCj0WhjWwMgEkYOLlT78pxeXNcfKY_A1-ay2mJPsi/exec", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(payload)
//     })
//       .then(() => {
//         alert("Form submitted successfully!");
//         handleClearForm();
//       })
//       .catch((err) => {
//         console.error("Submission failed:", err);
//         alert("Something went wrong.");
//       });
//   }
// };


//   const handleClearForm = () => {
//     setFormData({
//       teamRepName: '',
//       teamRepEmail: '',
//       speaker1: '',
//       yearOfStudy1: '',
//       email: '',
//       idCard: null,
//       contactNumber: '',
//       speaker2: '',
//       yearOfStudy2: '',
//       researcher: '',
//       institutionName: '',
//       classTeacherName: '',
//       classTeacherContact: '',
//       proofOfPayment: null
//     });
//     setErrors({});
//   };

//   const InputField = ({ label, name, type = "text", required = true, placeholder = "Your answer" }) => (
//     <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//       <label className="block text-gray-800 text-sm font-medium mb-4">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={formData[name]}
//         onChange={handleInputChange}
//         placeholder={placeholder}
//         className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 ${
//           errors[name] ? 'border-red-500' : 'border-gray-300 focus:border-[#6B21A8]'
//         }`}
//       />
//       {errors[name] && (
//         <div className="flex items-center mt-2 text-red-500 text-sm">
//           <AlertCircle size={16} className="mr-1" />
//           {errors[name]}
//         </div>
//       )}
//     </div>
//   );

//   const FileUploadField = ({ label, name, required = true }) => (
//     <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//       <label className="block text-gray-800 text-sm font-medium mb-2">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <p className="text-gray-500 text-sm mb-4">Upload 1 supported file. Max 10 MB.</p>
//       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
//         <input
//           type="file"
//           id={name}
//           onChange={(e) => handleFileChange(e, name)}
//           className="hidden"
//           accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
//         />
//         <label
//           htmlFor={name}
//           className="flex items-center justify-center cursor-pointer text-[#6B21A8] hover:bg-purple-50 p-2 rounded"
//         >
//           <Upload size={16} className="mr-2" />
//           Add file
//         </label>
//         {formData[name] && (
//           <p className="text-sm text-gray-600 mt-2">Selected: {formData[name].name}</p>
//         )}
//       </div>
//       {errors[name] && (
//         <div className="flex items-center mt-2 text-red-500 text-sm">
//           <AlertCircle size={16} className="mr-1" />
//           {errors[name]}
//         </div>
//       )}
//     </div>
//   );
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);
//   return (
//     <div className="min-h-screen pt-[100px] bg-[#f9f9ff] "data-aos="fade-down" >
//       <div className="max-w-4xl mx-auto py-8 px-4">
//         <div className="bg-white rounded-lg shadow-lg mb-8 p-8">
//           <h1 className="text-3xl font-bold text-[#6B21A8] mb-2">Team Registration Form</h1>
//           <p className="text-gray-600">Please fill out all required fields to complete your registration.</p>
//         </div>

//         <div className="space-y-6">
//           <InputField
//             label="Team Representative Name"
//             name="teamRepName"
//           />

//           <InputField
//             label="Team Representative Email ID (Will have the access to the Juristquest portal)"
//             name="teamRepEmail"
//             type="email"
//           />

//           <InputField
//             label="Speaker 1"
//             name="speaker1"
//           />

//           <InputField
//             label="Year of Study (Batch)"
//             name="yearOfStudy1"
//           />

//           <InputField
//             label="E-mail ID"
//             name="email"
//             type="email"
//           />

//           <FileUploadField
//             label="ID Card"
//             name="idCard"
//           />

//           <InputField
//             label="Contact Number"
//             name="contactNumber"
//             type="tel"
//           />

//           <InputField
//             label="Speaker 2"
//             name="speaker2"
//           />

//           <InputField
//             label="Year of Study (Batch)"
//             name="yearOfStudy2"
//           />

//           <InputField
//             label="Researcher"
//             name="researcher"
//           />

//           <InputField
//             label="Institution Name"
//             name="institutionName"
//           />

//           <InputField
//             label="Class Teacher Name"
//             name="classTeacherName"
//           />

//           <InputField
//             label="Class Teacher Contact number"
//             name="classTeacherContact"
//             type="tel"
//           />

//           <FileUploadField
//             label="Proof of Payment"
//             name="proofOfPayment"
//           />

//           <div className="flex justify-between pt-6">
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="bg-[#6B21A8] hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={handleClearForm}
//               className="text-[#6B21A8] hover:text-purple-700 font-medium py-3 px-8 transition-colors duration-200"
//             >
//               Clear form
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect,useCallback, memo } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Move components outside to prevent recreation on every render
const InputField = memo(({ label, name, type = "text", required = true, placeholder = "Your answer", value, onChange, error }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
    <label className="block text-gray-800 text-sm font-medium mb-4">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 transition-colors ${
        error ? 'border-red-500' : 'border-gray-300 focus:border-[#6B21A8]'
      }`}
    />
    {error && (
      <div className="flex items-center mt-2 text-red-500 text-sm">
        <AlertCircle size={16} className="mr-1" />
        {error}
      </div>
    )}
  </div>
));

const FileUploadField = memo(({ label, name, required = true, onChange, selectedFile, error }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
    <label className="block text-gray-800 text-sm font-medium mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <p className="text-gray-500 text-sm mb-4">Upload 1 supported file. Max 10 MB.</p>
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
      <input
        type="file"
        id={name}
        onChange={onChange}
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
      />
      <label
        htmlFor={name}
        className="flex items-center justify-center cursor-pointer text-[#6B21A8] hover:bg-purple-50 p-2 rounded transition-colors"
      >
        <Upload size={16} className="mr-2" />
        Add file
      </label>
      {selectedFile && (
        <p className="text-sm text-gray-600 mt-2">Selected: {selectedFile.name}</p>
      )}
    </div>
    {error && (
      <div className="flex items-center mt-2 text-red-500 text-sm">
        <AlertCircle size={16} className="mr-1" />
        {error}
      </div>
    )}
  </div>
));

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    teamRepName: '',
    teamRepEmail: '',
    speaker1: '',
    yearOfStudy1: '',
    email: '',
    idCard: null,
    contactNumber: '',
    speaker2: '',
    yearOfStudy2: '',
    researcher: '',
    institutionName: '',
    classTeacherName: '',
    classTeacherContact: '',
    proofOfPayment: null
  });

  const [errors, setErrors] = useState({});

  // Single stable onChange handler
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error if it exists
    setErrors(prev => {
      if (prev[name]) {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      }
      return prev;
    });
  }, []);

  const handleFileChange = useCallback((e) => {
    const fieldName = e.target.id;
    const file = e.target.files[0];
    
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
      
      // Clear error when file is selected
      setErrors(prev => {
        if (prev[fieldName]) {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        }
        return prev;
      });
    } else {
      alert('File size should be less than 10MB');
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'teamRepName', 'teamRepEmail', 'speaker1', 'yearOfStudy1', 'email',
      'contactNumber', 'speaker2', 'yearOfStudy2', 'researcher',
      'institutionName', 'classTeacherName', 'classTeacherContact'
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || !formData[field].trim()) {
        newErrors[field] = 'This is a required question';
      }
    });

    if (!formData.idCard) {
      newErrors.idCard = 'This is a required question';
    }

    if (!formData.proofOfPayment) {
      newErrors.proofOfPayment = 'This is a required question';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const handleSubmit = useCallback(async () => {
  if (!validateForm()) return;

  try {
    const form = new FormData();

    form.append("teamRepName", formData.teamRepName);
    form.append("teamRepEmail", formData.teamRepEmail);
    form.append("speaker1", formData.speaker1);
    form.append("yearOfStudy1", formData.yearOfStudy1);
    form.append("email", formData.email);
    form.append("contactNumber", formData.contactNumber);
    form.append("speaker2", formData.speaker2);
    form.append("yearOfStudy2", formData.yearOfStudy2);
    form.append("researcher", formData.researcher);
    form.append("institutionName", formData.institutionName);
    form.append("classTeacherName", formData.classTeacherName);
    form.append("classTeacherContact", formData.classTeacherContact);

    // Convert ID Card to base64
    if (formData.idCard) {
      const base64 = await toBase64(formData.idCard);
      form.append("idCardBlob", base64.split(",")[1]); // remove "data:...;base64,"
      form.append("idCardMimeType", formData.idCard.type);
      form.append("idCardName", formData.idCard.name);
    }

    // Convert Proof of Payment to base64
    if (formData.proofOfPayment) {
      const base64 = await toBase64(formData.proofOfPayment);
      form.append("proofOfPaymentBlob", base64.split(",")[1]);
      form.append("proofMimeType", formData.proofOfPayment.type);
      form.append("proofName", formData.proofOfPayment.name);
    }

    const response = await fetch("https://script.google.com/macros/s/AKfycbxyW2pwF2qF7dV9gWAQxvbuNjWQeTa1ltgqgY4igiAGFfJjxepRGJlH9umbPEfge7tr/exec", {
      method: "POST",
      body: form,
    });

    const result = await response.text();

    if (result.includes("success")) {
      alert("Form submitted successfully!");
      handleClearForm();
    } else {
      console.error("Unexpected result:", result);
      alert("Something went wrong. Please check the script response.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Something went wrong.");
  }
}, [formData]);
  const handleClearForm = useCallback(() => {
    setFormData({
      teamRepName: '',
      teamRepEmail: '',
      speaker1: '',
      yearOfStudy1: '',
      email: '',
      idCard: null,
      contactNumber: '',
      speaker2: '',
      yearOfStudy2: '',
      researcher: '',
      institutionName: '',
      classTeacherName: '',
      classTeacherContact: '',
      proofOfPayment: null
    });
    setErrors({});
  }, []);
useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="min-h-screen pt-[100px] bg-[#f9f9ff]" data-aos="fade-down" >
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg mb-8 p-8">
          <h1 className="text-3xl font-bold text-[#6B21A8] mb-2">Team Registration Form</h1>
          <p className="text-gray-600">Please fill out all required fields to complete your registration.</p>
        </div>

        <div className="space-y-6">
          <InputField
            label="Team Representative Name"
            name="teamRepName"
            value={formData.teamRepName}
            onChange={handleInputChange}
            error={errors.teamRepName}
          />

          <InputField
            label="Team Representative Email ID (Will have the access to the Juristquest portal)"
            name="teamRepEmail"
            type="email"
            value={formData.teamRepEmail}
            onChange={handleInputChange}
            error={errors.teamRepEmail}
          />

          <InputField
            label="Speaker 1"
            name="speaker1"
            value={formData.speaker1}
            onChange={handleInputChange}
            error={errors.speaker1}
          />

          <InputField
            label="Year of Study (Batch)"
            name="yearOfStudy1"
            value={formData.yearOfStudy1}
            onChange={handleInputChange}
            error={errors.yearOfStudy1}
          />

          <InputField
            label="E-mail ID"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />

          <FileUploadField
            label="ID Card"
            name="idCard"
            onChange={handleFileChange}
            selectedFile={formData.idCard}
            error={errors.idCard}
          />

          <InputField
            label="Contact Number"
            name="contactNumber"
            type="tel"
            value={formData.contactNumber}
            onChange={handleInputChange}
            error={errors.contactNumber}
          />

          <InputField
            label="Speaker 2"
            name="speaker2"
            value={formData.speaker2}
            onChange={handleInputChange}
            error={errors.speaker2}
          />

          <InputField
            label="Year of Study (Batch)"
            name="yearOfStudy2"
            value={formData.yearOfStudy2}
            onChange={handleInputChange}
            error={errors.yearOfStudy2}
          />

          <InputField
            label="Researcher"
            name="researcher"
            value={formData.researcher}
            onChange={handleInputChange}
            error={errors.researcher}
          />

          <InputField
            label="Institution Name"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleInputChange}
            error={errors.institutionName}
          />

          <InputField
            label="Class Teacher Name"
            name="classTeacherName"
            value={formData.classTeacherName}
            onChange={handleInputChange}
            error={errors.classTeacherName}
          />

          <InputField
            label="Class Teacher Contact number"
            name="classTeacherContact"
            type="tel"
            value={formData.classTeacherContact}
            onChange={handleInputChange}
            error={errors.classTeacherContact}
          />

          <FileUploadField
            label="Proof of Payment"
            name="proofOfPayment"
            onChange={handleFileChange}
            selectedFile={formData.proofOfPayment}
            error={errors.proofOfPayment}
          />

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#6B21A8] hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              className="text-[#6B21A8] hover:text-purple-700 font-medium py-3 px-8 transition-colors duration-200"
            >
              Clear form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}