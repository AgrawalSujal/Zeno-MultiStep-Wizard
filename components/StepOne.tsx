"use client";
import { useFormStore } from "@/store/formstore";
import React from "react";

const StepOne = () => {
  const { data, updateData } = useFormStore();

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold text-gray-700">Name</label>
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={data.name}
          placeholder="Enter your name"
          onChange={(e) => updateData({ name: e.target.value })}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={data.email}
          placeholder="Enter your email"
          onChange={(e) => updateData({ email: e.target.value })}
        />
      </div>
    </div>
  );
};

export default StepOne;
