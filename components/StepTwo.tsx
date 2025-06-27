"use client";
import { useFormStore } from "@/store/formstore";
import React from "react";

const StepTwo = () => {
  const { data, updateData } = useFormStore();

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <label className="text-sm font-semibold text-gray-700 block">
        What’s your current learning goal?
      </label>
      <textarea
        rows={5}
        className="w-full p-4 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
        placeholder="e.g. Learn Zustand deeply, improve state management..."
        value={data.goal}
        onChange={(e) => updateData({ goal: e.target.value })}></textarea>
    </div>
  );
};

export default StepTwo;
