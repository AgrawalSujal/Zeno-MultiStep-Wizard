import { useFormStore } from "@/store/formstore";
import React from "react";

const FormNavigation = () => {
  const { currentStep, setStep } = useFormStore();

  const isLastStep = currentStep === 3;
  const isFirstStep = currentStep === 1;

  return (
    <div
      className={`w-full max-w-md mx-auto flex ${
        isFirstStep ? "justify-end" : "justify-between"
      } pt-8`}>
      {!isFirstStep && (
        <button
          className="px-6 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          onClick={() => setStep(currentStep - 1)}>
          ⬅️ Previous
        </button>
      )}

      <button
        className="px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={() => setStep(currentStep + 1)}>
        {isLastStep ? "✅ Submit" : "Next ➡️"}
      </button>
    </div>
  );
};

export default FormNavigation;
