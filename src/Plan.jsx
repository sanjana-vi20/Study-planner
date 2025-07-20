import React, { useState } from "react";
import axios from "axios";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const PlanPage = () => {
  const [subjects, setSubjects] = useState("");
  const [hoursAvailable, setHoursAvailable] = useState("");
  const [examDate, setExamDate] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [schedule, setSchedule] = useState([]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!subjects.trim()) {
      newErrors.subjects = "Please enter at least one subject.";
    }

    if (!hoursAvailable || isNaN(hoursAvailable) || parseFloat(hoursAvailable) <= 0) {
      newErrors.hoursAvailable = "Please enter valid available hours.";
    }

    if (!examDate) {
      newErrors.examDate = "Please select the exam date.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/generate-schedule", {
        subjects,
        hoursAvailable: parseFloat(hoursAvailable),
        examDate,
        difficulty,
      });

      const newSchedule = response.data.schedule;
      setSchedule(newSchedule);

      for (const task of newSchedule) {
        await addDoc(collection(db, "plans"), {
          title: task.subject,
          description: `Study ${task.subject} for ${task.hours} hours`,
          deadline: examDate,
          status: "pending",
          createdAt: Timestamp.now(),
        });
      }

      console.log("Schedule saved to Firestore");
    } catch (err) {
      console.error("API call failed:", err);
    }
  };

  const inputClass = (field) =>
    `w-full border px-3 py-2 rounded-md mb-1 ${
      errors[field] ? "border-orange-500" : "border-gray-300"
    }`;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Study Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-2">AI Study Scheduler</h2>
          <p className="mb-4 text-gray-600">Generate your personalized study plan.</p>

          <label className="block font-semibold mb-1">Subjects</label>
          <input
            type="text"
            placeholder="e.g., Math, History, Physics"
            className={inputClass("subjects")}
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
          />
          {errors.subjects && <p className="text-orange-600 text-sm mb-2">{errors.subjects}</p>}

          <label className="block font-semibold mb-1">Available Hours per Day</label>
          <input
            type="number"
            placeholder="e.g., 3"
            className={inputClass("hoursAvailable")}
            value={hoursAvailable}
            onChange={(e) => setHoursAvailable(e.target.value)}
          />
          {errors.hoursAvailable && <p className="text-orange-600 text-sm mb-2">{errors.hoursAvailable}</p>}

          <label className="block font-semibold mb-1">Exam Date</label>
          <input
            type="date"
            className={inputClass("examDate")}
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
          />
          {errors.examDate && <p className="text-orange-600 text-sm mb-2">{errors.examDate}</p>}

          <label className="block font-semibold mb-1">Difficulty</label>
          <select
            className="w-full border px-3 py-2 rounded-md mb-4"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <button
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            onClick={handleGenerate}
          >
            Generate Schedule
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md overflow-y-auto max-h-96">
          <h3 className="text-lg font-bold mb-4">Your Study Plan</h3>
          {schedule.length === 0 ? (
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">📆</div>
              <p>No schedule generated yet</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {schedule.map((item, index) => (
                <li
                  key={index}
                  className="p-3 border rounded-md flex justify-between bg-gray-50"
                >
                  <span>Day {item.day}: {item.subject}</span>
                  <span className="pl-2">{item.hours} hrs</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
