const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-schedule", async (req, res) => {
  const { subject, totalDays, dailyHours } = req.body;

  // Simple mock schedule generation
  const schedule = [];
  for (let i = 1; i <= totalDays; i++) {
    schedule.push({
      day: i,
      topic: `${subject} - Topic ${i}`,
      hours: dailyHours,
    });
  }

  // Save to Firestore
  try {
    await db.collection("studyPlans").add({
      subject,
      totalDays,
      dailyHours,
      schedule,
      createdAt: new Date(),
    });

    res.status(200).json({ success: true, schedule });
  } catch (error) {
    console.error("Error saving to Firestore:", error);
    res.status(500).json({ success: false, error: "Failed to save to Firestore" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
