// // // import React, { useState, useEffect, useCallback, memo } from 'react';
// // // import { Upload, AlertCircle } from 'lucide-react';
// // // import AOS from 'aos';
// // // import 'aos/dist/aos.css';

// // // const InputField = memo(({ label, name, type = "text", required = true, placeholder = "Your answer", value, onChange, error }) => (
// // //   <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// // //     <label className="block text-gray-800 text-sm font-medium mb-4">
// // //       {label} {required && <span className="text-red-500">*</span>}
// // //     </label>
// // //     <input
// // //       type={type}
// // //       name={name}
// // //       value={value}
// // //       onChange={onChange}
// // //       placeholder={placeholder}
// // //       autoComplete="off"
// // //       className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 transition-colors ${
// // //         error ? 'border-red-500' : 'border-gray-300 focus:border-[#6B21A8]'
// // //       }`}
// // //     />
// // //     {error && (
// // //       <div className="flex items-center mt-2 text-red-500 text-sm">
// // //         <AlertCircle size={16} className="mr-1" />
// // //         {error}
// // //       </div>
// // //     )}
// // //   </div>
// // // ));

// // // const FileUploadField = memo(({ label, name, required = true, onChange, selectedFile, error }) => (
// // //   <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// // //     <label className="block text-gray-800 text-sm font-medium mb-2">
// // //       {label} {required && <span className="text-red-500">*</span>}
// // //     </label>
// // //     <p className="text-gray-500 text-sm mb-4">Upload 1 supported file. Max 10 MB.</p>
// // //     <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
// // //       <input
// // //         type="file"
// // //         id={name}
// // //         onChange={onChange}
// // //         className="hidden"
// // //         accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
// // //       />
// // //       <label
// // //         htmlFor={name}
// // //         className="flex items-center justify-center cursor-pointer text-[#6B21A8] hover:bg-purple-50 p-2 rounded transition-colors"
// // //       >
// // //         <Upload size={16} className="mr-2" />
// // //         Add file
// // //       </label>
// // //       {selectedFile && (
// // //         <p className="text-sm text-gray-600 mt-2">Selected: {selectedFile.name}</p>
// // //       )}
// // //     </div>
// // //     {error && (
// // //       <div className="flex items-center mt-2 text-red-500 text-sm">
// // //         <AlertCircle size={16} className="mr-1" />
// // //         {error}
// // //       </div>
// // //     )}
// // //   </div>
// // // ));

// // // export default function RegistrationForm() {
// // //   const [formData, setFormData] = useState({
// // //     teamRepName: '',
// // //     teamRepEmail: '',
// // //     speaker1: '',
// // //     yearOfStudy1: '',
// // //     email: '',
// // //     idCard: null,
// // //     contactNumber: '',
// // //     speaker2: '',
// // //     yearOfStudy2: '',
// // //     researcher: '',
// // //     institutionName: '',
// // //     classTeacherName: '',
// // //     classTeacherContact: '',
// // //     proofOfPayment: null
// // //   });

// // //   const [errors, setErrors] = useState({});

// // //   const handleInputChange = useCallback((e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: value
// // //     }));
// // //     setErrors(prev => {
// // //       if (prev[name]) {
// // //         const newErrors = { ...prev };
// // //         delete newErrors[name];
// // //         return newErrors;
// // //       }
// // //       return prev;
// // //     });
// // //   }, []);

// // //   const handleFileChange = useCallback((e) => {
// // //     const fieldName = e.target.id;
// // //     const file = e.target.files[0];
// // //     if (file && file.size <= 10 * 1024 * 1024) {
// // //       setFormData(prev => ({
// // //         ...prev,
// // //         [fieldName]: file
// // //       }));
// // //       setErrors(prev => {
// // //         if (prev[fieldName]) {
// // //           const newErrors = { ...prev };
// // //           delete newErrors[fieldName];
// // //           return newErrors;
// // //         }
// // //         return prev;
// // //       });
// // //     } else {
// // //       alert('File size should be less than 10MB');
// // //     }
// // //   }, []);

// // //   const validateForm = () => {
// // //     const newErrors = {};
// // //     const requiredFields = [
// // //       'teamRepName', 'teamRepEmail', 'speaker1', 'yearOfStudy1', 'email',
// // //       'contactNumber', 'speaker2', 'yearOfStudy2', 'researcher',
// // //       'institutionName', 'classTeacherName', 'classTeacherContact'
// // //     ];
// // //     requiredFields.forEach(field => {
// // //       if (!formData[field] || !formData[field].trim()) {
// // //         newErrors[field] = 'This is a required question';
// // //       }
// // //     });
// // //     if (!formData.idCard) {
// // //       newErrors.idCard = 'This is a required question';
// // //     }
// // //     if (!formData.proofOfPayment) {
// // //       newErrors.proofOfPayment = 'This is a required question';
// // //     }
// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const toBase64 = (file) =>
// // //     new Promise((resolve, reject) => {
// // //       const reader = new FileReader();
// // //       reader.readAsDataURL(file);
// // //       reader.onload = () => resolve(reader.result);
// // //       reader.onerror = (error) => reject(error);
// // //     });

// // //   const handleSubmit = useCallback(async () => {
// // //   if (!validateForm()) return;

// // //   try {
// // //     const id = crypto.randomUUID();

// // //     const toBase64 = (file) =>
// // //       new Promise((resolve, reject) => {
// // //         const reader = new FileReader();
// // //         reader.readAsDataURL(file);
// // //         reader.onload = () => resolve(reader.result.split(',')[1]); // remove metadata
// // //         reader.onerror = (error) => reject(error);
// // //       });

// // //     const idCardBase64 = formData.idCard ? await toBase64(formData.idCard) : '';
// // //     const proofBase64 = formData.proofOfPayment ? await toBase64(formData.proofOfPayment) : '';

// // //     const payload = {
// // //       id,
// // //       type: "contact",
// // //       teamRepName: formData.teamRepName,
// // //       teamRepEmail: formData.teamRepEmail,
// // //       speaker1: formData.speaker1,
// // //       yearOfStudy1: formData.yearOfStudy1,
// // //       email: formData.email,
// // //       contactNumber: formData.contactNumber,
// // //       speaker2: formData.speaker2,
// // //       yearOfStudy2: formData.yearOfStudy2,
// // //       researcher: formData.researcher,
// // //       institutionName: formData.institutionName,
// // //       classTeacherName: formData.classTeacherName,
// // //       classTeacherContact: formData.classTeacherContact,
// // //       idCard: {
// // //         name: formData.idCard?.name || '',
// // //         type: formData.idCard?.type || '',
// // //         data: idCardBase64
// // //       },
// // //       proofOfPayment: {
// // //         name: formData.proofOfPayment?.name || '',
// // //         type: formData.proofOfPayment?.type || '',
// // //         data: proofBase64
// // //       },
// // // driveFolderId: "1XjxnKk-BPDeZ89NCgU6VVAK-f_o-hEQj"
// // //  // Only the folder ID, not full URL
// // //     };

// // //     const response = await fetch("https://script.google.com/macros/s/AKfycbwdNCKO-xeoOIXyw2okLDo-LPy95fKQjyf-wqhRZ_sHyYbm2g5bGcn7FQ7OHyWGZDLF/exec", {
// // //       method: "POST",
// // //       headers: {
// // //         "content-type": "application/x-www-form-urlencoded"
// // //       },
// // //       body: JSON.stringify(payload)
// // //     });

// // //     const result = await response.json();
// // //     if (result.result === "success") {
// // //       alert("Form submitted successfully!");
// // //       handleClearForm();
// // //     } else {
// // //       console.error("Script error:", result.message);
// // //       alert("Submission failed: " + result.message);
// // //     }

// // //   } catch (error) {
// // //     console.error("Submit error:", error);
// // //     alert("Something went wrong.");
// // //   }
// // // }, [formData]);


// // //   const handleClearForm = useCallback(() => {
// // //     setFormData({
// // //       teamRepName: '',
// // //       teamRepEmail: '',
// // //       speaker1: '',
// // //       yearOfStudy1: '',
// // //       email: '',
// // //       idCard: null,
// // //       contactNumber: '',
// // //       speaker2: '',
// // //       yearOfStudy2: '',
// // //       researcher: '',
// // //       institutionName: '',
// // //       classTeacherName: '',
// // //       classTeacherContact: '',
// // //       proofOfPayment: null
// // //     });
// // //     setErrors({});
// // //   }, []);

// // //   useEffect(() => {
// // //     AOS.init({ duration: 800, once: true });
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen pt-[100px] bg-[#f9f9ff]" data-aos="fade-down">
// // //       <div className="max-w-4xl mx-auto py-8 px-4">
// // //         <div className="bg-white rounded-lg shadow-lg mb-8 p-8">
// // //           <h1 className="text-3xl font-bold text-[#6B21A8] mb-2">Team Registration Form</h1>
// // //           <p className="text-gray-600">Please fill out all required fields to complete your registration.</p>
// // //         </div>

// // //         <div className="space-y-6">
// // //           <InputField label="Team Representative Name" name="teamRepName" value={formData.teamRepName} onChange={handleInputChange} error={errors.teamRepName} />
// // //           <InputField label="Team Representative Email ID (Will have the access to the Juristquest portal)" name="teamRepEmail" type="email" value={formData.teamRepEmail} onChange={handleInputChange} error={errors.teamRepEmail} />
// // //           <InputField label="Speaker 1" name="speaker1" value={formData.speaker1} onChange={handleInputChange} error={errors.speaker1} />
// // //           <InputField label="Year of Study (Batch)" name="yearOfStudy1" value={formData.yearOfStudy1} onChange={handleInputChange} error={errors.yearOfStudy1} />
// // //           <InputField label="E-mail ID" name="email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} />
// // //           <FileUploadField label="ID Card" name="idCard" onChange={handleFileChange} selectedFile={formData.idCard} error={errors.idCard} />
// // //           <InputField label="Contact Number" name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleInputChange} error={errors.contactNumber} />
// // //           <InputField label="Speaker 2" name="speaker2" value={formData.speaker2} onChange={handleInputChange} error={errors.speaker2} />
// // //           <InputField label="Year of Study (Batch)" name="yearOfStudy2" value={formData.yearOfStudy2} onChange={handleInputChange} error={errors.yearOfStudy2} />
// // //           <InputField label="Researcher" name="researcher" value={formData.researcher} onChange={handleInputChange} error={errors.researcher} />
// // //           <InputField label="Institution Name" name="institutionName" value={formData.institutionName} onChange={handleInputChange} error={errors.institutionName} />
// // //           <InputField label="Class Teacher Name" name="classTeacherName" value={formData.classTeacherName} onChange={handleInputChange} error={errors.classTeacherName} />
// // //           <InputField label="Class Teacher Contact number" name="classTeacherContact" type="tel" value={formData.classTeacherContact} onChange={handleInputChange} error={errors.classTeacherContact} />
// // //           <FileUploadField label="Proof of Payment" name="proofOfPayment" onChange={handleFileChange} selectedFile={formData.proofOfPayment} error={errors.proofOfPayment} />

// // //           <div className="flex justify-between pt-6">
// // //             <button type="button" onClick={handleSubmit} className="bg-[#6B21A8] hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
// // //               Submit
// // //             </button>
// // //             <button type="button" onClick={handleClearForm} className="text-[#6B21A8] hover:text-purple-700 font-medium py-3 px-8 transition-colors duration-200">
// // //               Clear form
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect, useCallback, memo } from 'react';
// // import { Upload, AlertCircle } from 'lucide-react';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // const InputField = memo(({ label, name, type = "text", required = true, placeholder = "Your answer", value, onChange, error }) => (
// //   <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// //     <label className="block text-gray-800 text-sm font-medium mb-4">
// //       {label} {required && <span className="text-red-500">*</span>}
// //     </label>
// //     <input
// //       type={type}
// //       name={name}
// //       value={value}
// //       onChange={onChange}
// //       placeholder={placeholder}
// //       autoComplete="off"
// //       className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 transition-colors ${
// //         error ? 'border-red-500' : 'border-gray-300 focus:border-[#6B21A8]'
// //       }`}
// //     />
// //     {error && (
// //       <div className="flex items-center mt-2 text-red-500 text-sm">
// //         <AlertCircle size={16} className="mr-1" />
// //         {error}
// //       </div>
// //     )}
// //   </div>
// // ));

// // const FileUploadField = memo(({ label, name, required = true, onChange, selectedFile, error }) => (
// //   <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// //     <label className="block text-gray-800 text-sm font-medium mb-2">
// //       {label} {required && <span className="text-red-500">*</span>}
// //     </label>
// //     <p className="text-gray-500 text-sm mb-4">Upload 1 supported file. Max 10 MB.</p>
// //     <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
// //       <input
// //         type="file"
// //         id={name}
// //         onChange={onChange}
// //         className="hidden"
// //         accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
// //       />
// //       <label
// //         htmlFor={name}
// //         className="flex items-center justify-center cursor-pointer text-[#6B21A8] hover:bg-purple-50 p-2 rounded transition-colors"
// //       >
// //         <Upload size={16} className="mr-2" />
// //         Add file
// //       </label>
// //       {selectedFile && (
// //         <p className="text-sm text-gray-600 mt-2">Selected: {selectedFile.name}</p>
// //       )}
// //     </div>
// //     {error && (
// //       <div className="flex items-center mt-2 text-red-500 text-sm">
// //         <AlertCircle size={16} className="mr-1" />
// //         {error}
// //       </div>
// //     )}
// //   </div>
// // ));

// // export default function RegistrationForm() {
// //   const [formData, setFormData] = useState({
// //     teamRepName: '',
// //     teamRepEmail: '',
// //     speaker1: '',
// //     courseType1: '',
// //     yearOfStudy1: '',
// //     email: '',
// //     idCard: null,
// //     contactNumber: '',
// //     speaker2: '',
// //     courseType2: '',
// //     yearOfStudy2: '',
// //     researcher: '',
// //     institutionName: '',
// //     classTeacherName: '',
// //     classTeacherContact: '',
// //     proofOfPayment: null
// //   });

// //   const [errors, setErrors] = useState({});
// //   const handleInputChange = useCallback((e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //     setErrors(prev => {
// //       if (prev[name]) {
// //         const newErrors = { ...prev };
// //         delete newErrors[name];
// //         return newErrors;
// //       }
// //       return prev;
// //     });
// //   }, []);

// //   const handleFileChange = useCallback((e) => {
// //     const fieldName = e.target.id;
// //     const file = e.target.files[0];
// //     if (file && file.size <= 10 * 1024 * 1024) {
// //       setFormData(prev => ({
// //         ...prev,
// //         [fieldName]: file
// //       }));
// //       setErrors(prev => {
// //         if (prev[fieldName]) {
// //           const newErrors = { ...prev };
// //           delete newErrors[fieldName];
// //           return newErrors;
// //         }
// //         return prev;
// //       });
// //     } else {
// //       alert('File size should be less than 10MB');
// //     }
// //   }, []);

// //   const validateForm = () => {
// //     const newErrors = {};
// //     const requiredFields = [
// //       'teamRepName', 'teamRepEmail', 'speaker1', 'courseType1', 'yearOfStudy1',
// //       'email', 'contactNumber', 'speaker2', 'courseType2', 'yearOfStudy2',
// //       'researcher', 'institutionName', 'classTeacherName', 'classTeacherContact'
// //     ];
// //     requiredFields.forEach(field => {
// //       if (!formData[field] || !formData[field].trim()) {
// //         newErrors[field] = 'This is a required question';
// //       }
// //     });
// //     if (!formData.idCard) {
// //       newErrors.idCard = 'This is a required question';
// //     }
// //     if (!formData.proofOfPayment) {
// //       newErrors.proofOfPayment = 'This is a required question';
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = useCallback(async () => {
// //     if (!validateForm()) return;

// //     try {
// //       const id = crypto.randomUUID();
// //       const toBase64 = (file) =>
// //         new Promise((resolve, reject) => {
// //           const reader = new FileReader();
// //           reader.readAsDataURL(file);
// //           reader.onload = () => resolve(reader.result.split(',')[1]);
// //           reader.onerror = (error) => reject(error);
// //         });

// //       const idCardBase64 = formData.idCard ? await toBase64(formData.idCard) : '';
// //       const proofBase64 = formData.proofOfPayment ? await toBase64(formData.proofOfPayment) : '';

// //       const payload = {
// //         id,
// //         type: "contact",
// //         ...formData,
// //         idCard: {
// //           name: formData.idCard?.name || '',
// //           type: formData.idCard?.type || '',
// //           data: idCardBase64
// //         },
// //         proofOfPayment: {
// //           name: formData.proofOfPayment?.name || '',
// //           type: formData.proofOfPayment?.type || '',
// //           data: proofBase64
// //         },
// //         driveFolderId: "1XjxnKk-BPDeZ89NCgU6VVAK-f_o-hEQj"
// //       };

// //       const response = await fetch("https://script.google.com/macros/s/AKfycbwdNCKO-xeoOIXyw2okLDo-LPy95fKQjyf-wqhRZ_sHyYbm2g5bGcn7FQ7OHyWGZDLF/exec", {
// //         method: "POST",
// //         headers: {
// //           "content-type": "application/x-www-form-urlencoded"
// //         },
// //         body: JSON.stringify(payload)
// //       });

// //       const result = await response.json();
// //       if (result.result === "success") {
// //         alert("Form submitted successfully!");
// //         handleClearForm();
// //       } else {
// //         console.error("Script error:", result.message);
// //         alert("Submission failed: " + result.message);
// //       }

// //     } catch (error) {
// //       console.error("Submit error:", error);
// //       alert("Something went wrong.");
// //     }
// //   }, [formData]);

// //   const handleClearForm = useCallback(() => {
// //     setFormData({
// //       teamRepName: '',
// //       teamRepEmail: '',
// //       speaker1: '',
// //       courseType1: '',
// //       yearOfStudy1: '',
// //       email: '',
// //       idCard: null,
// //       contactNumber: '',
// //       speaker2: '',
// //       courseType2: '',
// //       yearOfStudy2: '',
// //       researcher: '',
// //       institutionName: '',
// //       classTeacherName: '',
// //       classTeacherContact: '',
// //       proofOfPayment: null
// //     });
// //     setErrors({});
// //   }, []);

// //   useEffect(() => {
// //     AOS.init({ duration: 800, once: true });
// //   }, []);
// //   return (
// //     <div className="min-h-screen pt-[100px] bg-[#f9f9ff]" data-aos="fade-down">
// //       <div className="max-w-4xl mx-auto py-8 px-4">
// //         <div className="bg-white rounded-lg shadow-lg mb-8 p-8">
// //           <h1 className="text-3xl font-bold text-[#6B21A8] mb-2">Team Registration Form</h1>
// //           <p className="text-gray-600">Please fill out all required fields to complete your registration.</p>
// //         </div>

// //         <div className="space-y-6">
// //           <InputField label="Team Representative Name" name="teamRepName" value={formData.teamRepName} onChange={handleInputChange} error={errors.teamRepName} />
// //           <InputField label="Team Representative Email ID (Will have the access to the Juristquest portal)" name="teamRepEmail" type="email" value={formData.teamRepEmail} onChange={handleInputChange} error={errors.teamRepEmail} />
// //           <InputField label="Speaker 1" name="speaker1" value={formData.speaker1} onChange={handleInputChange} error={errors.speaker1} />

// //           {/* Course Type (Speaker 1) */}
// //           <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// //             <label className="block text-gray-800 text-sm font-medium mb-4">Course Type (Speaker 1) <span className="text-red-500">*</span></label>
// //             <select
// //               name="courseType1"
// //               value={formData.courseType1}
// //               onChange={handleInputChange}
// //               className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
// //             >
// //               <option value="">Select course</option>
// //               <option value="3 yr LLB">3 yr LLB</option>
// //               <option value="5 yr LLB">5 yr LLB</option>
// //             </select>
// //           </div>

// //           {/* Year of Study (Speaker 1) */}
// //           {formData.courseType1 && (
// //             <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// //               <label className="block text-gray-800 text-sm font-medium mb-4">Year of Study (Speaker 1) <span className="text-red-500">*</span></label>
// //               <select
// //                 name="yearOfStudy1"
// //                 value={formData.yearOfStudy1}
// //                 onChange={handleInputChange}
// //                 className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
// //               >
// //                 <option value="">Select year</option>
// //                 {(formData.courseType1 === "3 yr LLB" ? [1, 2, 3] : [1, 2, 3, 4, 5]).map((year) => (
// //                   <option key={year} value={`${year}st Year`}>{`${year}st Year`}</option>
// //                 ))}
// //               </select>
// //             </div>
// //           )}

// //           <InputField label="E-mail ID" name="email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} />
// //           <FileUploadField label="ID Card" name="idCard" onChange={handleFileChange} selectedFile={formData.idCard} error={errors.idCard} />
// //           <InputField label="Contact Number" name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleInputChange} error={errors.contactNumber} />
// //           <InputField label="Speaker 2" name="speaker2" value={formData.speaker2} onChange={handleInputChange} error={errors.speaker2} />

// //           {/* Course Type (Speaker 2) */}
// //           <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// //             <label className="block text-gray-800 text-sm font-medium mb-4">Course Type (Speaker 2) <span className="text-red-500">*</span></label>
// //             <select
// //               name="courseType2"
// //               value={formData.courseType2}
// //               onChange={handleInputChange}
// //               className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
// //             >
// //               <option value="">Select course</option>
// //               <option value="3 yr LLB">3 yr LLB</option>
// //               <option value="5 yr LLB">5 yr LLB</option>
// //             </select>
// //           </div>

// //           {/* Year of Study (Speaker 2) */}
// //           {formData.courseType2 && (
// //             <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
// //               <label className="block text-gray-800 text-sm font-medium mb-4">Year of Study (Speaker 2) <span className="text-red-500">*</span></label>
// //               <select
// //                 name="yearOfStudy2"
// //                 value={formData.yearOfStudy2}
// //                 onChange={handleInputChange}
// //                 className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
// //               >
// //                 <option value="">Select year</option>
// //                 {(formData.courseType2 === "3 yr LLB" ? [1, 2, 3] : [1, 2, 3, 4, 5]).map((year) => (
// //                   <option key={year} value={`${year}st Year`}>{`${year}st Year`}</option>
// //                 ))}
// //               </select>
// //             </div>
// //           )}

// //           <InputField label="Researcher" name="researcher" value={formData.researcher} onChange={handleInputChange} error={errors.researcher} />
// //           <InputField label="Institution / college name" name="institutionName" value={formData.institutionName} onChange={handleInputChange} error={errors.institutionName} />
// //           <InputField label="Class Teacher Name" name="classTeacherName" value={formData.classTeacherName} onChange={handleInputChange} error={errors.classTeacherName} />
// //           <InputField label="Class Teacher Contact number" name="classTeacherContact" type="tel" value={formData.classTeacherContact} onChange={handleInputChange} error={errors.classTeacherContact} />
// //           <FileUploadField label="Proof of Payment" name="proofOfPayment" onChange={handleFileChange} selectedFile={formData.proofOfPayment} error={errors.proofOfPayment} />

// //           <div className="flex justify-between pt-6">
// //             <button type="button" onClick={handleSubmit} className="bg-[#6B21A8] hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
// //               Submit
// //             </button>
// //             <button type="button" onClick={handleClearForm} className="text-[#6B21A8] hover:text-purple-700 font-medium py-3 px-8 transition-colors duration-200">
// //               Clear form
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect, useCallback, memo } from 'react';
// import { Upload, AlertCircle } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const InputField = memo(({ label, name, type = "text", required = true, placeholder = "Your answer", value, onChange, error }) => (
//   <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//     <label className="block text-gray-800 text-sm font-medium mb-4">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       autoComplete="off"
//       className={`w-full px-0 py-2 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 transition-colors ${
//         error ? 'border-red-500' : 'border-gray-300 focus:border-[#6B21A8]'
//       }`}
//     />
//     {error && (
//       <div className="flex items-center mt-2 text-red-500 text-sm">
//         <AlertCircle size={16} className="mr-1" />
//         {error}
//       </div>
//     )}
//   </div>
// ));

// const FileUploadField = memo(({ label, name, required = true, onChange, selectedFile, error }) => (
//   <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//     <label className="block text-gray-800 text-sm font-medium mb-2">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <p className="text-gray-500 text-sm mb-4">Upload 1 supported file. Max 10 MB.</p>
//     <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
//       <input
//         type="file"
//         id={name}
//         onChange={onChange}
//         className="hidden"
//         accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
//       />
//       <label
//         htmlFor={name}
//         className="flex items-center justify-center cursor-pointer text-[#6B21A8] hover:bg-purple-50 p-2 rounded transition-colors"
//       >
//         <Upload size={16} className="mr-2" />
//         Add file
//       </label>
//       {selectedFile && (
//         <p className="text-sm text-gray-600 mt-2">Selected: {selectedFile.name}</p>
//       )}
//     </div>
//     {error && (
//       <div className="flex items-center mt-2 text-red-500 text-sm">
//         <AlertCircle size={16} className="mr-1" />
//         {error}
//       </div>
//     )}
//   </div>
// ));

// export default function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     teamRepName: '',
//     teamRepEmail: '',
//     speaker1: '',
//     courseType1: '',
//     yearOfStudy1: '',
//     email: '',
//     idCard: null,
//     contactNumber: '',
//     speaker2: '',
//     courseType2: '',
//     yearOfStudy2: '',
//     researcher: '',
//     institutionName: '',
//     classTeacherName: '',
//     classTeacherContact: '',
//     proofOfPayment: null
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     setErrors(prev => {
//       if (prev[name]) {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       }
//       return prev;
//     });
//   }, []);

//   const handleFileChange = useCallback((e) => {
//     const fieldName = e.target.id;
//     const file = e.target.files[0];
//     if (file && file.size <= 10 * 1024 * 1024) {
//       setFormData(prev => ({
//         ...prev,
//         [fieldName]: file
//       }));
//       setErrors(prev => {
//         if (prev[fieldName]) {
//           const newErrors = { ...prev };
//           delete newErrors[fieldName];
//           return newErrors;
//         }
//         return prev;
//       });
//     } else {
//       alert('File size should be less than 10MB');
//     }
//   }, []);

//   const validateForm = () => {
//     const newErrors = {};
//     const requiredFields = [
//       'teamRepName', 'teamRepEmail', 'speaker1', 'courseType1', 'yearOfStudy1',
//       'email', 'contactNumber', 'speaker2', 'courseType2', 'yearOfStudy2',
//       'researcher', 'institutionName', 'classTeacherName', 'classTeacherContact'
//     ];
//     requiredFields.forEach(field => {
//       if (!formData[field] || !formData[field].trim()) {
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

//   const handleSubmit = useCallback(async () => {
//     if (!validateForm()) return;

//     try {
//       const id = crypto.randomUUID();
//       const toBase64 = (file) =>
//         new Promise((resolve, reject) => {
//           const reader = new FileReader();
//           reader.readAsDataURL(file);
//           reader.onload = () => resolve(reader.result.split(',')[1]);
//           reader.onerror = (error) => reject(error);
//         });

//       const idCardBase64 = formData.idCard ? await toBase64(formData.idCard) : '';
//       const proofBase64 = formData.proofOfPayment ? await toBase64(formData.proofOfPayment) : '';

//       const payload = {
//         id,
//         type: "contact",
//         ...formData,
//         idCard: {
//           name: formData.idCard?.name || '',
//           type: formData.idCard?.type || '',
//           data: idCardBase64
//         },
//         proofOfPayment: {
//           name: formData.proofOfPayment?.name || '',
//           type: formData.proofOfPayment?.type || '',
//           data: proofBase64
//         },
//         driveFolderId: "1XjxnKk-BPDeZ89NCgU6VVAK-f_o-hEQj"
//       };

//       const response = await fetch("https://script.google.com/macros/s/AKfycbwdNCKO-xeoOIXyw2okLDo-LPy95fKQjyf-wqhRZ_sHyYbm2g5bGcn7FQ7OHyWGZDLF/exec", {
//         method: "POST",
//         headers: {
//           "content-type": "application/x-www-form-urlencoded"
//         },
//         body: JSON.stringify(payload)
//       });

//       const result = await response.json();
//       if (result.result === "success") {
//         alert("Form submitted successfully!");
//         handleClearForm();
//       } else {
//         console.error("Script error:", result.message);
//         alert("Submission failed: " + result.message);
//       }

//     } catch (error) {
//       console.error("Submit error:", error);
//       alert("Something went wrong.");
//     }
//   }, [formData]);

//   const handleClearForm = useCallback(() => {
//     setFormData({
//       teamRepName: '',
//       teamRepEmail: '',
//       speaker1: '',
//       courseType1: '',
//       yearOfStudy1: '',
//       email: '',
//       idCard: null,
//       contactNumber: '',
//       speaker2: '',
//       courseType2: '',
//       yearOfStudy2: '',
//       researcher: '',
//       institutionName: '',
//       classTeacherName: '',
//       classTeacherContact: '',
//       proofOfPayment: null
//     });
//     setErrors({});
//   }, []);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <div className="min-h-screen pt-[100px] bg-[#f9f9ff]" data-aos="fade-down">
//       <div className="max-w-4xl mx-auto py-8 px-4">
//         <div className="bg-white rounded-lg shadow-lg mb-8 p-8">
//           <h1 className="text-3xl font-bold text-[#6B21A8] mb-2">Team Registration Form</h1>
//           <p className="text-gray-600">Please fill out all required fields to complete your registration.</p>
//         </div>

//         <div className="space-y-6">
//           <InputField label="Team Representative Name" name="teamRepName" value={formData.teamRepName} onChange={handleInputChange} error={errors.teamRepName} />
//           <InputField label="Team Representative Email ID (Will have the access to the Juristquest portal)" name="teamRepEmail" type="email" value={formData.teamRepEmail} onChange={handleInputChange} error={errors.teamRepEmail} />
//           <InputField label="Speaker 1" name="speaker1" value={formData.speaker1} onChange={handleInputChange} error={errors.speaker1} />

//           {/* Course Type and Year for Speaker 1 */}
//           <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//             <label className="block text-gray-800 text-sm font-medium mb-4">Course Type (Speaker 1) <span className="text-red-500">*</span></label>
//             <select
//               name="courseType1"
//               value={formData.courseType1}
//               onChange={handleInputChange}
//               className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
//             >
//               <option value="">Select course</option>
//               <option value="3 yr LLB">3 yr LLB</option>
//               <option value="5 yr LLB">5 yr LLB</option>
//             </select>
//           </div>

//           {formData.courseType1 && (
//             <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//               <label className="block text-gray-800 text-sm font-medium mb-4">Year of Study (Speaker 1) <span className="text-red-500">*</span></label>
//               <select
//                 name="yearOfStudy1"
//                 value={formData.yearOfStudy1}
//                 onChange={handleInputChange}
//                 className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
//               >
//                 <option value="">Select year</option>
//                 {(formData.courseType1 === "3 yr LLB" ? [1, 2, 3] : [1, 2, 3, 4, 5]).map((year) => (
//                   <option key={year} value={`${year}st Year`}>{`${year}st Year`}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           <InputField label="E-mail ID" name="email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} />
//           <FileUploadField label="ID Card" name="idCard" onChange={handleFileChange} selectedFile={formData.idCard} error={errors.idCard} />
//           <InputField label="Contact Number" name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleInputChange} error={errors.contactNumber} />

//           <InputField label="Speaker 2" name="speaker2" value={formData.speaker2} onChange={handleInputChange} error={errors.speaker2} />

//           {/* Course Type and Year for Speaker 2 */}
//           <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//             <label className="block text-gray-800 text-sm font-medium mb-4">Course Type (Speaker 2) <span className="text-red-500">*</span></label>
//             <select
//               name="courseType2"
//               value={formData.courseType2}
//               onChange={handleInputChange}
//               className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
//             >
//               <option value="">Select course</option>
//               <option value="3 yr LLB">3 yr LLB</option>
//               <option value="5 yr LLB">5 yr LLB</option>
//             </select>
//           </div>

//           {formData.courseType2 && (
//             <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
//               <label className="block text-gray-800 text-sm font-medium mb-4">Year of Study (Speaker 2) <span className="text-red-500">*</span></label>
//               <select
//                 name="yearOfStudy2"
//                 value={formData.yearOfStudy2}
//                 onChange={handleInputChange}
//                 className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all"
//               >
//                 <option value="">Select year</option>
//                 {(formData.courseType2 === "3 yr LLB" ? [1, 2, 3] : [1, 2, 3, 4, 5]).map((year) => (
//                   <option key={year} value={`${year}st Year`}>{`${year}st Year`}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           <InputField label="Researcher" name="researcher" value={formData.researcher} onChange={handleInputChange} error={errors.researcher} />
//           <InputField label="Institution Name" name="institutionName" value={formData.institutionName} onChange={handleInputChange} error={errors.institutionName} />
//           <InputField label="Class Teacher Name" name="classTeacherName" value={formData.classTeacherName} onChange={handleInputChange} error={errors.classTeacherName} />
//           <InputField label="Class Teacher Contact number" name="classTeacherContact" type="tel" value={formData.classTeacherContact} onChange={handleInputChange} error={errors.classTeacherContact} />
//           <FileUploadField label="Proof of Payment" name="proofOfPayment" onChange={handleFileChange} selectedFile={formData.proofOfPayment} error={errors.proofOfPayment} />

//           <div className="flex justify-between pt-6">
//             <button type="button" onClick={handleSubmit} className="bg-[#6B21A8] hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
//               Submit
//             </button>
//             <button type="button" onClick={handleClearForm} className="text-[#6B21A8] hover:text-purple-700 font-medium py-3 px-8 transition-colors duration-200">
//               Clear form
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  courseType1: '',
  yearOfStudy1: '',
  email: '',
  idCard: null,
  contactNumber: '',
  speaker2: '',
  courseType2: '',
  yearOfStudy2: '',
  researcher: '',
  institutionName: '',
  classTeacherName: '',
  classTeacherContact: '',
  proofOfPayment: null,
  disclaimer: false  // Add this line
});
  const [errors, setErrors] = useState({});

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    if (file && file.size <= 10 * 1024 * 1024) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
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
    'teamRepName', 'teamRepEmail', 'speaker1', 'courseType1', 'yearOfStudy1',
    'email', 'contactNumber', 'speaker2', 'courseType2', 'yearOfStudy2',
    'researcher', 'institutionName', 'classTeacherName', 'classTeacherContact'
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
  
  // Add disclaimer validation
  if (!formData.disclaimer) {
    newErrors.disclaimer = 'You must agree to the terms and conditions to proceed';
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
  const handleSubmit = useCallback(async () => {
    if (!validateForm()) return;

    try {
      const id = crypto.randomUUID();
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = (error) => reject(error);
        });

      const idCardBase64 = formData.idCard ? await toBase64(formData.idCard) : '';
      const proofBase64 = formData.proofOfPayment ? await toBase64(formData.proofOfPayment) : '';

      const payload = {
        id,
        type: "contact",
        ...formData,
        idCard: {
          name: formData.idCard?.name || '',
          type: formData.idCard?.type || '',
          data: idCardBase64
        },
        proofOfPayment: {
          name: formData.proofOfPayment?.name || '',
          type: formData.proofOfPayment?.type || '',
          data: proofBase64
        },
        driveFolderId: "1XjxnKk-BPDeZ89NCgU6VVAK-f_o-hEQj"
      };

      console.log('Payload being sent:', payload); // Debug log

      const response = await fetch("https://script.google.com/macros/s/AKfycbyIhH8S1DOkS-o467Hok7zhIKOvtH09pAq7NIHAj2MWDw6K2G7fseOuZ3m0dFhwxyeB/exec", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.result === "success") {
        alert("Form submitted successfully!");
        handleClearForm();
      } else {
        console.error("Script error:", result.message);
        alert("Submission failed: " + result.message);
      }

    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong.");
    }
  }, [formData]);

 const handleClearForm = useCallback(() => {
  setFormData({
    teamRepName: '',
    teamRepEmail: '',
    speaker1: '',
    courseType1: '',
    yearOfStudy1: '',
    email: '',
    idCard: null,
    contactNumber: '',
    speaker2: '',
    courseType2: '',
    yearOfStudy2: '',
    researcher: '',
    institutionName: '',
    classTeacherName: '',
    classTeacherContact: '',
    proofOfPayment: null,
    disclaimer: false  // Add this line
  });
  setErrors({});
}, []);
  const getYearOptions = (courseType) => {
    const years = courseType === "3 yr LLB" ? [1, 2, 3] : [1, 2, 3, 4, 5];
    return years.map((year) => {
      let suffix = 'st';
      if (year === 2) suffix = 'nd';
      else if (year === 3) suffix = 'rd';
      else if (year > 3) suffix = 'th';
      
      return {
        value: `${year}${suffix} Year`,
        label: `${year}${suffix} Year`
      };
    });
  };
 useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="min-h-screen pt-[100px] bg-[#f9f9ff]" data-aos="fade-down">
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

          {/* Course Type for Speaker 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <label className="block text-gray-800 text-sm font-medium mb-4">
              Course Type (Speaker 1) <span className="text-red-500">*</span>
            </label>
            <select
              name="courseType1"
              value={formData.courseType1}
              onChange={handleInputChange}
              className={`w-full bg-white border text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all ${
                errors.courseType1 ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select course</option>
              <option value="3 yr LLB">3 yr LL.B</option>
              <option value="5 yr LLB">5 yr LL.B</option>
            </select>
            {errors.courseType1 && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle size={16} className="mr-1" />
                {errors.courseType1}
              </div>
            )}
          </div>

          {/* Year of Study for Speaker 1 */}
          {formData.courseType1 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <label className="block text-gray-800 text-sm font-medium mb-4">
                Year of Study (Speaker 1) <span className="text-red-500">*</span>
              </label>
              <select
                name="yearOfStudy1"
                value={formData.yearOfStudy1}
                onChange={handleInputChange}
                className={`w-full bg-white border text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all ${
                  errors.yearOfStudy1 ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select year</option>
                {getYearOptions(formData.courseType1).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.yearOfStudy1 && (
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.yearOfStudy1}
                </div>
              )}
            </div>
          )}

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

          {/* Course Type for Speaker 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <label className="block text-gray-800 text-sm font-medium mb-4">
              Course Type (Speaker 2) <span className="text-red-500">*</span>
            </label>
            <select
              name="courseType2"
              value={formData.courseType2}
              onChange={handleInputChange}
              className={`w-full bg-white border text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all ${
                errors.courseType2 ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select course</option>
              <option value="3 yr LLB">3 yr LL.B</option>
              <option value="5 yr LLB">5 yr LL.B</option>
            </select>
            {errors.courseType2 && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle size={16} className="mr-1" />
                {errors.courseType2}
              </div>
            )}
          </div>

          {/* Year of Study for Speaker 2 */}
          {formData.courseType2 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <label className="block text-gray-800 text-sm font-medium mb-4">
                Year of Study (Speaker 2) <span className="text-red-500">*</span>
              </label>
              <select
                name="yearOfStudy2"
                value={formData.yearOfStudy2}
                onChange={handleInputChange}
                className={`w-full bg-white border text-gray-700 py-2 px-4 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B21A8] focus:border-[#6B21A8] transition-all ${
                  errors.yearOfStudy2 ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select year</option>
                {getYearOptions(formData.courseType2).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.yearOfStudy2 && (
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.yearOfStudy2}
                </div>
              )}
            </div>
          )}

          <InputField 
            label="Researcher" 
            name="researcher" 
            value={formData.researcher} 
            onChange={handleInputChange} 
            error={errors.researcher} 
          />
          
          <InputField 
            label="Institution / College Name  " 
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
  <div className="pt-4">
  <label className="flex items-start space-x-3 cursor-pointer">
    <input
      type="checkbox"
      name="disclaimer"
      checked={formData.disclaimer || false}
      onChange={(e) => setFormData(prev => ({ ...prev, disclaimer: e.target.checked }))}
      className="mt-1 h-4 w-4 text-[#6B21A8] border-gray-300 rounded focus:ring-[#6B21A8] focus:ring-2"
      required
    />
    <div className="text-sm text-gray-600 leading-relaxed max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="font-medium text-[#6B21A8] mb-3">Disclaimer for JuristQuest - Moot Court Competition Registration: <span className="text-red-500">*</span></div>
      <div className="space-y-3">
        <p>By registering for the JuristQuest - Moot Court Competition, you acknowledge and agree to the following terms and conditions:</p>
        
        <div>
          <span className="font-medium">Personal Data Collection:</span> The information you provide will be used solely for the purpose of processing your registration and ensuring smooth participation in the Moot Court Competition. Your personal details will not be shared with third parties without your consent, except where required by law.
        </div>
        
        <div>
          <span className="font-medium">Accuracy of Information:</span> You confirm that all details provided during the registration process are accurate and complete to the best of your knowledge. Any false or misleading information may lead to disqualification from the competition.
        </div>
        
        <div>
          <span className="font-medium">Background Verification:</span> The organizing committee reserves the right to conduct background verification with the respective class teacher or institution to confirm the authenticity of the participant(s). Any instance of forgery or misrepresentation will result in immediate disqualification of the entire team from the competition.
        </div>
        
        <div>
          <span className="font-medium">Consent for Communication:</span> By registering, you give your consent to receive communication related to the competition, including but not limited to event schedules, updates, and announcements. You may opt-out of non-essential communications at any time by notifying the organizers.
        </div>
        
        <div>
          <span className="font-medium">Event Recording and Photography:</span> By participating in the event, you grant the organizers the right to record and photograph the event. These images and recordings may be used for promotional, educational, or other purposes related to the competition. If you do not wish to be photographed or recorded, please inform the organizers in advance.
        </div>
        
        <div>
          <span className="font-medium">Liability Waiver:</span> The event organizers are not liable for any personal injuries, damages, or losses incurred during your participation in the competition. By registering, you agree to assume full responsibility for your actions and safety.
        </div>
        
        <div>
          <span className="font-medium">Intellectual Property:</span> All materials submitted as part of the competition are your intellectual property, but the organizers reserve the right to use, publish, or distribute any content related to the competition for promotional purposes.
        </div>
        
        <div>
          <span className="font-medium">Compliance with Rules:</span> By registering, you agree to comply with all competition rules and guidelines set forth by the event organizers. Failure to do so may result in disqualification from the competition.
        </div>
        
        <div>
          <span className="font-medium">Modification of Terms:</span> The event organizers reserve the right to modify or update these terms and conditions at any time. Any changes will be communicated to registered participants in a timely manner.
        </div>
        
        <p className="font-medium text-gray-800 pt-2">By submitting this registration form, you agree to all the terms outlined above.</p>
      </div>
    </div>
  </label>
  {errors.disclaimer && (
    <p className="mt-2 text-sm text-red-600">{errors.disclaimer}</p>
  )}
</div>
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