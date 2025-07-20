import axios from "axios";

const generateSchedule = async (subject, totalDays, dailyHours) => {
  try {
    const response = await axios.post("http://localhost:5000/generate-schedule", {
      subject,
      totalDays,
      dailyHours,
    });

    return response.data.schedule;
  } catch (error) {
    console.error("API call failed: ", error);
    return [];
  }
};

export default generateSchedule;
