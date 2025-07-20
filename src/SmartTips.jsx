import React, { useEffect, useState } from 'react';

const tips = [
  "📌 Break your study sessions into 25-minute focused blocks using the Pomodoro Technique.",
  "📚 Study the toughest subject first when your mind is fresh.",
  "📝 Revise your notes every night before bed to reinforce memory.",
  "📊 Set daily goals and tick them off — small wins build momentum.",
  "📵 Keep your phone in another room during focused study time.",
  "⏰ Take short breaks after every hour to avoid burnout.",
  "💡 Use flashcards or quizzes to test yourself instead of just reading.",
  "🗂️ Organize your study space — clutter-free space = clutter-free mind.",
  "🔁 Revise past tasks weekly to avoid forgetting old topics.",
  "🤔 Teach someone else — it’s the best way to understand a concept deeply."
];

const SmartTips = () => {
  const [randomTip, setRandomTip] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">🎓 Smart Study Tip of the Day</h1>
        <p className="text-lg text-gray-800 leading-relaxed">{randomTip}</p>
        <button
          className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={() => {
            const newIndex = Math.floor(Math.random() * tips.length);
            setRandomTip(tips[newIndex]);
          }}
        >
          🔁 Show Another Tip
        </button>
      </div>
    </div>
  );
};

export default SmartTips;
