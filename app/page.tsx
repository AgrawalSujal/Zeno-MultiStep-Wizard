"use client";

import FormNavigation from "@/components/FormNavigation";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import { useFormStore } from "@/store/formstore";

export default function HomePage() {
  const { currentStep, data } = useFormStore();

  // ✅ Final Summary View
  if (currentStep === 4) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-6">
        <h1 className="text-3xl font-bold text-green-600">🎉 You re Done!</h1>
        <p className="text-gray-700 text-sm">
          Here is a summary of your submission:
        </p>
        <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4 text-left text-sm overflow-x-auto">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        <p className="text-xs text-gray-400">You may close the window now.</p>
      </div>
    );
  }

  // 🧠 Main Form Steps
  return (
    <div className="max-w-xl mx-auto py-20 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">
          🧠 Zendo Multi-Step Form
        </h1>
        <p className="text-sm text-gray-500">
          A minimal experience to collect thoughtful input.
        </p>
      </div>

      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}

      <FormNavigation />
    </div>
  );
}
