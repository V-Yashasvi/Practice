// import React, { useState, useEffect } from "react";
// import { PawPrint } from "lucide-react";
// import Navbar from "../components/home/Navbar";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [pawIcons, setPawIcons] = useState([]);

//   // Form states
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isLogin
//       ? "http://localhost:2000/login"
//       : "http://localhost:2000/register";

//     const payload = isLogin
//       ? { email: formData.email, password: formData.password }
//       : {
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//           confirmPassword: formData.confirmPassword,
//         };

//     try {
//       const res = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`Success: ${data.message || "Operation successful"}`);
//         if (!isLogin) setIsLogin(true); // Switch to login after signup
//         // You can store tokens or redirect here
//       } else {
//         alert(`Error: ${data.error || "Something went wrong"}`);
//       }
//     } catch (err) {
//       alert("Network error. Please try again.", err);
//     }
//   };

//   useEffect(() => {
//     const generatePawIcons = () => {
//       const icons = [];
//       for (let i = 0; i < 5; i++) {
//         icons.push({
//           id: i,
//           left: `${Math.random() * 100}%`,
//           animationDuration: `${Math.random() * 5 + 5}s`,
//           size: `${Math.random() * 30 + 15}px`,
//         });
//       }
//       setPawIcons(icons);
//     };
//     generatePawIcons();
//     const interval = setInterval(generatePawIcons, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 overflow-hidden">
//       <Navbar />
//       <div className="flex justify-center items-center mt-40 px-4">
//         <div className="relative w-full max-w-screen-lg h-[550px] shadow-lg rounded-lg overflow-hidden border border-[#788595] bg-white">
//           {/* Login Form */}
//           <div
//             className={`absolute top-0 left-0 w-1/2 h-full p-8 flex flex-col justify-center transition-all duration-700 ease-in-out z-10 bg-white ${
//               isLogin
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-full opacity-0 pointer-events-none"
//             }`}
//           >
//             <h1 className="text-2xl font-bold text-gray-700 mb-2">
//               Login to WoofMate
//             </h1>
//             <p className="text-sm text-gray-500 mb-6">
//               Enter your details to access your account
//             </p>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full mb-4 px-3 py-2 border rounded"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full mb-4 px-3 py-2 border rounded"
//               />
//               <button className="w-full bg-[#5F799A] text-white py-2 rounded hover:bg-[#4c5c70] mb-4">
//                 Sign In
//               </button>
//             </form>
//             <p className="text-sm text-center text-gray-500">
//               Don’t have an account?{" "}
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className="text-[#5F799A]"
//               >
//                 Sign Up
//               </button>
//             </p>
//           </div>

//           {/* Signup Form */}
//           <div
//             className={`absolute top-0 left-0 w-1/2 h-full p-8 flex flex-col justify-center transition-all duration-700 ease-in-out z-10 bg-white ${
//               isLogin
//                 ? "translate-x-full opacity-0 pointer-events-none"
//                 : "translate-x-0 opacity-100"
//             }`}
//           >
//             <h1 className="text-2xl font-bold text-gray-700 mb-2">
//               Create an account
//             </h1>
//             <p className="text-sm text-gray-500 mb-6">
//               Join our growing community of dog lovers
//             </p>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full mb-4 px-3 py-2 border rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full mb-4 px-3 py-2 border rounded"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full mb-4 px-3 py-2 border rounded"
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full mb-4 px-3 py-2 border rounded"
//               />
//               <button className="w-full bg-[#5F799A] text-white py-2 rounded hover:bg-[#4c5c70] mb-4">
//                 Sign Up
//               </button>
//             </form>
//             <p className="text-sm text-center text-gray-500">
//               Already have an account?{" "}
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className="text-[#5F799A]"
//               >
//                 Login
//               </button>
//             </p>
//           </div>

//           {/* Overlay */}
//           <div
//             className={`absolute top-0 w-1/2 h-full bg-[#5F799A] text-white transition-all duration-700 ease-in-out z-0 ${
//               isLogin ? "left-1/2" : "left-0"
//             }`}
//           >
//             <div className="h-full flex flex-col justify-center items-center px-4 text-center relative">
//               {pawIcons.map((icon) => (
//                 <div
//                   key={icon.id}
//                   className="absolute animate-float"
//                   style={{
//                     left: icon.left,
//                     bottom: "-50px",
//                     animationDuration: icon.animationDuration,
//                   }}
//                 >
//                   <PawPrint
//                     color="white"
//                     size={parseFloat(icon.size)}
//                     strokeWidth={1.5}
//                   />
//                 </div>
//               ))}
//               <h1 className="text-2xl font-bold mb-2">
//                 {isLogin ? "Join Our Pack" : "Welcome Back"}
//               </h1>
//               <p className="text-sm mb-4">
//                 {isLogin
//                   ? "Create an account to find your perfect furry companion"
//                   : "Login with your personal details to stay connected"}
//               </p>
//               <button
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="px-4 py-2 bg-white text-[#5F799A] border border-[#707f93] rounded hover:bg-[#4c5c70] hover:text-white"
//               >
//                 {isLogin ? "Sign Up" : "Login"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0% { transform: translateY(0); opacity: 1; }
//           100% { transform: translateY(-600px); opacity: 0; }
//         }
//         .animate-float {
//           animation-name: float;
//           animation-timing-function: ease-in-out;
//           animation-iteration-count: infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AuthPage;
