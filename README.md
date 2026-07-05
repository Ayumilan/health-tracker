# Family Health Tracker

A simple family health tracking application built with:

- HTML
- CSS
- Vanilla JavaScript
- Google Sheets
- Google Apps Script
- GitHub Pages

---

## 1. Create the Google Sheet

Create a new Google Sheet.

Rename the first sheet to:

HealthLog

Add the following headers in Row 1:

| Date | Name | Time (Morning/Noon/Evening) | Sugar (mg/dL) | Weight (kg) | Systolic BP | Diastolic BP | Notes | Timestamp |
|--------|--------|--------|--------|--------|--------|--------|--------|--------|

Save the spreadsheet.

---

## 2. Create the Apps Script

In the Google Sheet:

Extensions → Apps Script

Delete any existing code and paste the contents of `Code.gs`.

Save the project.

---

## 3. Deploy Apps Script as a Web App

1. Click **Deploy**
2. Click **New Deployment**
3. Select **Web App**
4. Description:

   Family Health Tracker API

5. Execute As:

   Me

6. Who Has Access:

   Anyone

7. Click **Deploy**
8. Authorize permissions
9. Copy the generated Web App URL

Example:

https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXX/exec

---

## 4. Update the Apps Script URL

Open:

script.js

Replace:

```javascript
const SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```

with your deployed Web App URL.

Example:

```javascript
const SCRIPT_URL =
  "https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXX/exec";
```

Save the file.

---

## 5. Project Structure

```text
family-health-tracker/
│
├── index.html
├── style.css
├── script.js
├── README.md
```

---

## 6. Deploy to GitHub Pages

### Create Repository

Create a GitHub repository:

family-health-tracker

Upload:

- index.html
- style.css
- script.js
- README.md

Commit and push.

---

### Enable GitHub Pages

1. Open repository
2. Go to Settings
3. Select Pages
4. Source:

   Deploy from branch

5. Branch:

   main

6. Folder:

   / (root)

7. Save

GitHub will generate a URL similar to:

https://yourusername.github.io/family-health-tracker/

---

## 7. Usage

1. Open the website
2. Select a family member
3. Enter health data
4. Click Save Entry
5. Data is stored in Google Sheets
6. Success message is displayed
7. Form is cleared automatically

---

## Features

- Mobile-friendly design
- Stores records in Google Sheets
- No database required
- Simple Apps Script backend
- Free hosting with GitHub Pages
- Uses Fetch API for communication
