import React, { useState } from "react";
import EmergencyNotice from "./EmergencyNotice";
import FormSection from "./FormSection";
import RescueProcess from "./RescueProcess";

const ReportAnimal = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dogCondition: "",
    conditionType: "",
    email: "",
    dogLocation: "",
    address: "",
    description: "",
  });

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, files: selectedFiles });
    alert("Report submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Report an Animal in Need
        </h1>
        <p className="text-gray-600">
          Help us rescue dogs in dangerous or neglectful situations. Your report
          can save a life.
        </p>
      </div>

      <EmergencyNotice />
      <FormSection
        formData={formData}
        handleInputChange={handleInputChange}
        selectedFiles={selectedFiles}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
      <RescueProcess />
    </div>
  );
};

export default ReportAnimal;
