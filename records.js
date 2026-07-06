const SCRIPT_URL =
  "YOUR_APPS_SCRIPT_WEB_APP_URL";

async function loadRecords() {
  try {
    const response = await fetch(SCRIPT_URL);
    const data = await response.json();

    const tbody = document.querySelector("#recordsTable tbody");

    data.reverse().forEach(record => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${record.date}</td>
        <td>${record.name}</td>
        <td>${record.time}</td>
        <td>${record.sugar}</td>
        <td>${record.weight}</td>
        <td>${record.systolicBP}/${record.diastolicBP}</td>
        <td>${record.notes}</td>
      `;

      tbody.appendChild(row);
    });

  } catch (error) {
    console.error(error);
  }
}

loadRecords();
