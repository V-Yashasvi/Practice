// // DogBreedQuiz.js
// import React, { useState } from "react";
// import dogBreeds from "../data/dog.data";
// import quizQuestions from "../data/questions.data";
// import QuizQuestion from "./QuizQuestion";
// // import { ScratchToReveal } from "@/registry/magicui/scratch-to-reveal";

// const DogBreedQuiz = () => {
//   const [answers, setAnswers] = useState({});
//   const [result, setResult] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [isCalculating, setIsCalculating] = useState(false);

//   const handleAnswerSelect = (key, value, isMultiSelect) => {
//     setAnswers((prev) => {
//       if (isMultiSelect) {
//         const currentValues = prev[key] || [];
//         const newValues = currentValues.includes(value)
//           ? currentValues.filter((v) => v !== value)
//           : [...currentValues, value];
//         return { ...prev, [key]: newValues };
//       } else {  
//         return { ...prev, [key]: value };
//       }
//     });
//     if (!isMultiSelect && currentQuestionIndex < quizQuestions.length - 1) {
//       setTimeout(() => {
//         setCurrentQuestionIndex((prev) => prev + 1);
//       }, 300);
//     }
//   };

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < quizQuestions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     }
//   };

//   const goToPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//     }
//   };

//   const calculateMatch = () => {
//     setIsCalculating(true);

//     const breedScores = dogBreeds.map((breed) => {
//       let score = 0;
//       for (const key in breed.criteria) {
//         const userAnswer = answers[key];
//         const breedCriteria = breed.criteria[key];
//         if (Array.isArray(breedCriteria)) {
//           if (Array.isArray(userAnswer)) {
//             const matches = userAnswer.filter((answer) =>
//               breedCriteria.includes(answer)
//             );
//             score += matches.length;
//           } else if (userAnswer && breedCriteria.includes(userAnswer)) {
//             score += 1;
//           }
//         } else if (userAnswer === breedCriteria) {
//           score += 1;
//         }
//       }
//       return { ...breed, score };
//     });
//     const bestMatch = breedScores.sort((a, b) => b.score - a.score)[0];
//     setResult(bestMatch);
//     setIsCalculating(false);
//   };
//   const currentQuestion = quizQuestions[currentQuestionIndex];
//   const progressPercentage =
//     ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
//   const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
//   const isCurrentQuestionAnswered = currentQuestion.allowMultiple
//     ? answers[currentQuestion.key]?.length > 0
//     : answers[currentQuestion.key] !== undefined;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden p-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Find Your Perfect Dog Breed
//         </h2>

//         <div className="mb-6">
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div
//               className="bg-blue-600 h-2.5 rounded-full"
//               style={{ width: `${progressPercentage}%` }}
//             ></div>
//           </div>
//           <p className="text-sm text-gray-600 mt-2">
//             Question {currentQuestionIndex + 1} of {quizQuestions.length}
//           </p>
//         </div>

//         <QuizQuestion
//           key={currentQuestion.key}
//           questionData={currentQuestion}
//           answer={answers[currentQuestion.key]}
//           onSelect={handleAnswerSelect}
//         />

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={goToPreviousQuestion}
//             disabled={currentQuestionIndex === 0}
//             className={`px-6 py-2 rounded-lg ${
//               currentQuestionIndex === 0
//                 ? "bg-gray-300 cursor-not-allowed"
//                 : "bg-gray-600 hover:bg-gray-700 text-white"
//             }`}
//           >
//             Previous
//           </button>

//           {!isLastQuestion ? (
//             <button
//               onClick={goToNextQuestion}
//               disabled={!isCurrentQuestionAnswered}
//               className={`px-6 py-2 rounded-lg ${
//                 !isCurrentQuestionAnswered
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700 text-white"
//               }`}
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={calculateMatch}
//               disabled={!isCurrentQuestionAnswered || isCalculating}
//               className={`px-6 py-2 rounded-lg ${
//                 !isCurrentQuestionAnswered || isCalculating
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-green-600 hover:bg-green-700 text-white"
//               }`}
//             >
//               {isCalculating ? "Finding Your Match..." : "See Results"}
//             </button>
//           )}
//         </div>

//         {/* {result && (
//           <div className="mt-8">
//             <ScratchToReveal
//               width="100%"
//               height={250}
//               minScratchPercentage={70}
//               className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
//               gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
//             >
//               <div className="p-6 text-center">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//                   🐶 Your Perfect Match:
//                   <span className="text-green-600"> {result.name}</span>
//                 </h3>
//                 <p className="text-gray-700 mt-2">{result.description}</p>
//               </div>
//             </ScratchToReveal>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default DogBreedQuiz;
