// import React, { useState } from "react";
// import BackButton from "../BackButton/BackButton";
// import { Link } from "react-router-dom";

// const ResumeHeading = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Handle image selection
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white mt-10 rounded-lg shadow-md">
//       <div className="mb-4">
//         <BackButton />
//       </div>

//       {/* Image Upload */}
//       <div className="mb-6 ">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Resume Heading</h1>
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           Upload Profile Picture
//         </label>
//         <div className="flex">
//           <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-300">
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-gray-400">
//                 No image
//               </div>
//             )}
//           </div>
//         </div>
//         <input
//           type="file"
//           accept="image/*"
//           className="mt-3"
//           onChange={handleImageChange}
//         />
//       </div>

//       {/* Heading */}
//       <div className="mb-6">
       
//         <p className="text-gray-600 mt-2">
//           We suggest including an email and phone number.
//         </p>
//         <p className="text-red-600 mt-1">*</p>
//         <span className="text-sm">indicates a required field</span>
//       </div>

//       {/* Form */}
//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* First Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               First Name
//             </label>
//             <input
//               type="text"
//               placeholder="First Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>

//           {/* Surname */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Last Name
//             </label>
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>

//           {/* Profession */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Profession
//             </label>
//             <input
//               type="text"
//               placeholder="profession"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>

//           {/* City - State */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               City - State
//             </label>
//             <input
//               type="text"
//               placeholder="city"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>

//           {/* Postal Code */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Postal Code
//             </label>
//             <input
//               type="text"
//               placeholder="25000"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>

//           {/* Country */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Country
//             </label>
//             <input
//               type="text"
//               placeholder="country"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. +92-31-45712345"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email *
//             </label>
//             <input
//               type="email"
//               placeholder="Example@gmail.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
//             />
//           </div>
//         </div>
//         <div className="flex justify-between items-center mt-6">
//           <span></span>
//           <div>
//             <button className="rounded-full border bg-yellow-200 md:px-20 px-14 py-2">
//               <Link to="/cv-summary">Next</Link>
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ResumeHeading;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedImage, setFirstName, setLastName, setProfession, setCityState, setPostalCode, setCountry, setPhone, setEmail } from "../../components/redux/action/resumeActions";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";

const ResumeHeading = () => {
  const dispatch = useDispatch();
  const { selectedImage, firstName, lastName, profession, cityState, postalCode, country, phone, email } = useSelector((state) => state.resume);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(setSelectedImage(URL.createObjectURL(file)));
    }
  };

  // Handle input changes
  const handleInputChange = (e, action) => {
    dispatch(action(e.target.value));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-10 rounded-lg shadow-md">
      <div className="mb-4">
        <BackButton />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Resume Heading</h1>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Profile Picture
        </label>
        <div className="flex">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-300">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No image
              </div>
            )}
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          className="mt-3"
          onChange={handleImageChange}
        />
      </div>

      {/* Heading */}
      <div className="mb-6">
        <p className="text-gray-600 mt-2">
          We suggest including an email and phone number.
        </p>
        <p className="text-red-600 mt-1">*</p>
        <span className="text-sm">indicates a required field</span>
      </div>

      {/* Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setFirstName)}
            />
          </div>

          {/* Surname */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setLastName)}
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profession
            </label>
            <input
              type="text"
              value={profession}
              placeholder="profession"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setProfession)}
            />
          </div>

          {/* City - State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City - State
            </label>
            <input
              type="text"
              value={cityState}
              placeholder="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setCityState)}
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              value={postalCode}
              placeholder="25000"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setPostalCode)}
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              value={country}
              placeholder="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setCountry)}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              placeholder="e.g. +92-31-45712345"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setPhone)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={email}
              placeholder="Example@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span></span>
          <div>
            <button className="rounded-full border bg-yellow-200 md:px-20 px-14 py-2">
              <Link to="/cv-summary">Next</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeHeading;
