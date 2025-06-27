"use client";
import { useFormStore } from "@/store/formstore";
import React from "react";

const StepThree = () => {
  const { data, updatePreferences } = useFormStore();

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-3">
        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={data.preferences.darkMode}
            onChange={(e) => updatePreferences({ darkMode: e.target.checked })}
            className="accent-blue-600 w-4 h-4"
          />
          Enable Dark Mode
        </label>

        <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={data.preferences.updates}
            onChange={(e) => updatePreferences({ updates: e.target.checked })}
            className="accent-blue-600 w-4 h-4"
          />
          Receive Product Updates
        </label>
      </div>

      <div>
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          Any additional notes?
        </label>
        <textarea
          rows={4}
          className="w-full p-4 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
          placeholder="Leave a message for the team..."
          value={data.preferences.notes}
          onChange={(e) =>
            updatePreferences({ notes: e.target.value })
          }></textarea>
      </div>
    </div>
  );
};

export default StepThree;
