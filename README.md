# 23481A42A3
# Campus Notification Management System
## Project Overview
This project is a campus notification management system developed as part of the AFFORDMED evaluation process.
The system helps students view and manage campus notifications such as:
- Placement updates
- Examination results
- College events
Notifications are prioritized and displayed based on importance and recency.
The project also includes a reusable logging middleware that sends logs to the evaluation logging server.
# Project Structure
23481A42A3
│
├── logging_middleware
├── notification_app_be
├── notification_app_fe
├── notification_system_design.md
└── README.md
# Features
## Frontend
- Fetch notifications from API
- Display top priority notifications
- Notification filtering
- Pagination support
- Viewed/unviewed notification handling
## Backend
- Backend structure prepared using Node.js and Express.js
## Logging Middleware
- Reusable logging function
- Sends logs to evaluation logging server
- Supports different log levels and packages
# Technologies Used
- React.js
- Node.js
- Express.js
- Axios
- Material UI
- GitHub
---
## Clone Repository
git clone https://github.com/geethasri22/23481A42A3.git
---
## Frontend Setup
cd notification_app_fe
npm install
npm start
---
## Backend Setup
cd notification_app_be
npm install
node server.js
--
## Logging Middleware Setup
cd logging_middleware
npm install
node test.js
---
# Logging Middleware
The middleware provides a reusable logging function:
Log(stack, level, package, message)
Example:
Log(
  "frontend",
  "error",
  "component",
  "API fetch failed"
)
Geethasri
Roll No: 23481A42A3
