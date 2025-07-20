import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Progress = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // Ask for notification permission
  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  // Show browser notification
  const notifyUser = (title, body) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body });
    }
  };

  const fetchPlans = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'plans'));
      const today = new Date().toISOString().split('T')[0];

      const plansList = querySnapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        const isOverdue = data.status !== 'completed' && data.deadline < today;
        const isToday = data.status !== 'completed' && data.deadline === today;

        // Notifications & Alerts
        if (isOverdue) {
          notifyUser(`⚠️ Overdue: ${data.title}`, `Deadline was on ${data.deadline}`);
          alert(`⚠️ ALERT: "${data.title}" is OVERDUE!\nDeadline was: ${data.deadline}`);
        } else if (isToday) {
          notifyUser(`⏰ Due Today: ${data.title}`, `Complete it before midnight!`);
          alert(`⏰ REMINDER: "${data.title}" is DUE TODAY!\nComplete it before midnight.`);
        }

        return {
          id: docSnap.id,
          ...data,
          overdue: isOverdue,
        };
      });

      setTasks(plansList.filter((task) => task.status === 'pending'));
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const markAsCompleted = async (taskId) => {
    try {
      const taskRef = doc(db, 'plans', taskId);
      await updateDoc(taskRef, {
        status: 'completed',
      });
      fetchPlans(); // Refresh
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-indigo-700">
        📌 Task Progress & Smart Reminders
      </h1>

      {tasks.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <span className="text-5xl">📋</span>
          <p className="text-gray-500 mt-4 text-lg">No tasks added yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">📚 Subject</th>
                <th className="border px-4 py-2 text-left">📅 Deadline</th>
                <th className="border px-4 py-2 text-left">📍 Status</th>
                <th className="border px-4 py-2 text-left">🔔 Reminder</th>
                <th className="border px-4 py-2 text-left">✅ Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-t">
                  <td className="px-4 py-2">{task.title}</td>
                  <td className="px-4 py-2">{task.deadline}</td>
                  <td className="px-4 py-2">
                    {task.status === 'completed' ? '✅ Completed' : '❌ Pending'}
                  </td>
                  <td className="px-4 py-2">
                    {task.overdue ? (
                      <span className="text-red-600 font-semibold">⚠️ Overdue!</span>
                    ) : (
                      <span className="text-green-600">On Track</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => markAsCompleted(task.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Mark as Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Smart Tips Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/SmartTips')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          📘 Get Smart Study Tips
        </button>
      </div>
    </div>
  );
};

export default Progress;
