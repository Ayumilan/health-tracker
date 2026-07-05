// Replace this URL with your deployed Google Apps Script Web App URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyrrhkIiBkPfjw_zx2BaNgMNV2zKFXlbPEpiULWQlWbHsFIr71d9ph8FDZNszkonnMJFQ/exec";

const form = document.getElementById("healthForm");
const message = document.getElementById("message");

// Set today's date by default
document.getElementById("date").value =
  new Date().toISOString().split("T")[0];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    date: document.getElementById("date").value,
    name: document.getElementById("name").value,
    time: document.getElementById("time").value,
    sugar: document.getElementById("sugar").value,
    weight: document.getElementById("weight").value,
    systolicBP: document.getElementById("systolic").value,
    diastolicBP: document.getElementById("diastolic").value,
    notes: document.getElementById("notes").value
  };

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      message.textContent = "Health entry saved successfully.";
      message.className = "success";

      form.reset();

      document.getElementById("date").value =
        new Date().toISOString().split("T")[0];
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    message.textContent = "Error saving entry.";
    message.className = "error";
    console.error(error);
  }
});
