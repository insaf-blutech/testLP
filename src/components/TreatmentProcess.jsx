

import React from 'react';
import BgGif from '../assets/images/treatmentSectionGif.gif';
import { ArrowUpRight } from "lucide-react";

const TreatmentCard = ({ step, title, description, highlighted = false }) => {
  return (
    <div className={`       
      p-6 bg-white rounded-lg shadow-sm        
      border border-teal-500       
      h-full flex flex-col     
    `}>
      <h3 className="text-sm text-gray-600 mb-2">Step {step} - {title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

const TreatmentProcess = () => {
  // Card data array
  const treatmentSteps = [
    {
      step: "1",
      title: "Download The App",
      description: "Click the link to download our app to get started.",
      gridClass: ""
    },
    {
      step: "2",
      title: "Complete Onboarding Process & Documents",
      description: "Provide medical history and sign treatment forms.",
      gridClass: "lg:col-start-3"
    },
    {
      step: "3",
      title: "Schedule Your First Visit",
      description: "Our onboarding team will send you a link to book your first meeting. Many times, this is the same day.",
      gridClass: ""
    },
    {
      step: "4",
      title: "Meet With Licensed Provider",
      description: "At the time of your appointment, open the app on your phone to have your visit.",
      gridClass: "lg:col-start-3"
    },
    {
      step: "5",
      title: "Pick Up Medication",
      description: "Your script will be sent to your pharmacy of choice for pick-up the same day.",
      gridClass: "md:col-span-2 lg:col-start-2 lg:col-end-3 mt-10 w-full"
    }
  ];

  return (
    <div className="">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-6">
          <h4 className="text-teal-500 uppercase text-sm font-medium">GET SAME-DAY ONLINE</h4>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Suboxone Treatment In 10 Minutes
            </h1>
            <button className="bg-teal-500 text-white py-2 px-4 rounded flex items-center whitespace-nowrap mb-6 md:mb-0">
              Download The App Today
              <ArrowUpRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Treatment Steps Grid with Centered GIF */}
        <div className="relative">
          {/* Center Image - changed from a div to an actual image with the GIF */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">

            <img
              src={BgGif}
              alt="Treatment Process Background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 relative z-10">
            {/* Map over treatment steps array */}
            {treatmentSteps.map((step, index) => (
              <div key={index} className={step.gridClass}>
                <TreatmentCard
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  highlighted={index === 0} // Only the first step is highlighted
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentProcess;