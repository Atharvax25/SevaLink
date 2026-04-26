# SevaLink

SevaLink is a full-stack community response platform that helps NGOs and volunteers work together in a faster, smarter, and more organized way.

Instead of handling community issues through scattered calls, messages, and spreadsheets, SevaLink turns every reported problem into a structured task. It then helps the right people discover it, review it, assign it, act on it, and close it with accountability.

This project is built for real-world coordination scenarios such as disaster relief, food support, education help, medical assistance, and local community action.

## One-line Idea

SevaLink connects problems to the right people.

## Why This Project Matters

In many communities, help exists, but coordination is weak.

The real problem is not always a lack of volunteers. Often, the problem is:

- the right volunteer does not see the request in time
- the NGO does not know who is available
- urgent tasks are mixed with less critical ones
- there is no clean way to assign, track, and verify work
- data for planning future help is missing

SevaLink is designed to solve exactly that gap.

It gives organizers a clean operational dashboard, gives volunteers a focused task board, and adds intelligence on top of the workflow through smart matching, live status tracking, map-based context, predictions, notifications, and volunteer recognition.

## What Makes SevaLink Stand Out

SevaLink is not just a CRUD task app. It combines several layers of value in one product:

- structured issue reporting for NGOs
- public and volunteer-facing task discovery
- skill-aware volunteer matching
- map-based location support
- urgency and category detection
- role-based dashboards
- offline-safe task capture
- OTP-based password reset
- leaderboard and badge system
- admin heatmap and need prediction signals
- assignment confirmation and verification flow

The platform is built to feel like a real coordination product, not just a demo screen.

## Quick Judge Walkthrough

If someone wants to understand SevaLink quickly, this is the fastest path:

1. Start the frontend and backend.
2. Run the demo seed script.
3. Log in as an NGO account such as `demo.ngo1@sevalink.local`.
4. Open the admin dashboard and review the heatmap, predictions, leaderboard, and volunteer assignment flow.
5. Log in as a volunteer account such as `demo.volunteer1@sevalink.local`.
6. Accept a task, confirm an assignment, and move through the task lifecycle.

In just a few minutes, the project shows:

- a real social use case
- a polished product experience
- intelligent matching logic
- role-based workflow depth
- analytics and operational visibility

## The Core Problem We Solved

When a community issue is reported, most systems stop at storing the complaint.

SevaLink goes further:

1. It captures the issue in a structured format.
2. It adds urgency, category, location, skills, and optional image context.
3. It helps the system identify suitable volunteers.
4. It allows NGOs to review matches and keep final control.
5. It lets volunteers confirm assignments and request completion review.
6. It rewards verified volunteer work and turns raw activity into useful analytics.

That full journey is what makes the platform meaningful.

## Who Uses SevaLink

### 1. NGOs / Organizers

NGO users can:

- create and manage community tasks
- upload images for context
- mark whether a task should be visible to the wider network
- review volunteer interest
- run smart matching
- assign tasks manually
- view predictions, leaderboard, heatmap, and operational summaries
- verify completed work

### 2. Volunteers

Volunteer users can:

- create a profile with skills, location, and availability
- browse open tasks
- filter tasks by urgency and relevance
- accept open tasks
- confirm NGO assignments
- request completion review after finishing work
- earn points and badges for verified impact

### 3. Public Visitors

Users who are not logged in can still:

- view open public tasks
- understand what kind of help is currently needed

This makes the platform more transparent and community-friendly.

## Main Features

### 1. Modern Landing Experience

The frontend opens with an animated brand-first experience and a polished homepage that explains the platform in a product-led way.

It highlights:

- the mission of SevaLink
- the product value
- core feature pillars
- real-world impact areas
- the idea of trusted, fast, visible coordination

This helps judges and users understand the story before they even log in.

### 2. Role-Based Authentication

SevaLink supports two main roles:

- `Volunteer`
- `NGO`

The authentication system includes:

- registration
- login
- session persistence in local storage
- protected backend routes
- role checks on sensitive actions
- OTP-based password reset

This makes the system feel closer to a deployable product than a basic prototype.

### 3. Smart Registration Flow

Volunteer registration collects:

- name
- email
- password
- skills
- location
- availability level
- optional latitude and longitude

NGO registration collects:

- name
- email
- password
- organization name

This matters because the platform uses volunteer profile data later for matching and analytics.

### 4. Structured Task Reporting

NGO users can create tasks with:

- title
- description
- location
- map coordinates
- map link
- severity
- required skills
- image upload
- image label or hint
- shared visibility toggle

This is much stronger than a plain text complaint form because it gives the system enough signals to coordinate action properly.

### 5. Auto-Derived Task Intelligence

When a task is created, SevaLink automatically derives useful signals from the input.

It can determine:

- likely task category
- urgency score
- emergency escalation reason
- image-related tags

Examples of category-style routing include:

- emergency response
- food assistance
- medical assistance
- education support
- shelter relief
- logistics support

If emergency keywords appear in the task content, the task can be escalated automatically to a `critical` severity level.

This makes the system feel proactive, not passive.

### 6. Smart Volunteer Matching

One of the strongest parts of SevaLink is its matching logic.

Volunteers are ranked for a task using:

- skill match
- current availability
- performance rating
- distance information
- active assignment load

The current match score uses this weighted logic:

- `50%` skill fit
- `30%` availability
- `20%` volunteer performance

Distance is also calculated and shown so admins can make informed decisions.

Important design choice:

SevaLink does not force auto-assignment. It gives NGOs smart ranked suggestions, but the final decision stays with a human organizer. This is important for trust, accountability, and fairness.

### 7. Volunteer Acceptance and Assignment Flow

The workflow is designed around real coordination, not just task status labels.

#### Open task flow

1. NGO creates a task.
2. Volunteers can accept interest in the task.
3. NGO reviews applicants and smart matches.
4. NGO assigns a volunteer.
5. Volunteer confirms the assignment.
6. Task moves into active work.
7. Volunteer requests completion review.
8. NGO verifies and closes the task.

This gives the system a strong chain of responsibility.

### 8. Offline-Safe Task Capture

If an NGO loses internet while creating a task, SevaLink can still queue task data locally and sync it later when the connection returns.

This is especially useful for:

- disaster response
- field reporting
- unstable connectivity environments
- mobile hotspot workflows

Important note:

If a task is queued offline, image files themselves are not preserved for later upload. The task details sync, but the image needs to be attached again when back online.

### 9. Voice Input Support

The task creation flow includes voice capture support for fields like:

- title
- description
- location

This helps when speed matters and typing is too slow.

### 10. Map-Based Context

SevaLink allows NGOs to:

- search for a place
- click directly on a map
- save exact latitude and longitude
- generate a map link for the task

This improves:

- location accuracy
- volunteer awareness
- routing clarity
- admin heatmap quality

### 11. Admin Mission Control Dashboard

The NGO dashboard is a major strength of this project.

It includes:

- task KPIs
- severity breakdown
- category breakdown
- volunteer directory
- leaderboard
- recent notifications
- task match review
- manual assignment tools
- heatmap
- need prediction banners
- pipeline views for task statuses

The dashboard is not just visual polish. It reflects real operational thinking.

### 12. Heatmap and Geographic Visibility

Tasks with coordinates appear in a heatmap-style view so NGOs can quickly understand where pressure is building.

This helps with:

- hotspot detection
- location-aware planning
- resource placement
- response strategy

### 13. Need Prediction Signals

SevaLink includes lightweight predictive analytics.

The current prediction logic compares:

- tasks created in the last 7 days
- tasks created in the previous 7 days

If a category shows repeated recent demand, the dashboard surfaces a likely upcoming need such as:

- food demand likely soon
- medical support likely soon
- emergency response likely soon

This is simple, understandable, and useful for early planning.

### 14. Volunteer Recognition and Gamification

Verified volunteer contributions are rewarded with:

- points
- completed task count
- badges
- leaderboard rank

Badge examples include:

- Top Helper
- Emergency Responder
- Community Anchor

This makes the platform more engaging while still staying mission-focused.

### 15. Notification Logging and Email Readiness

The backend includes an email notification service for:

- volunteer assignment alerts
- nearby volunteer alerts
- password reset OTP delivery

If SMTP is configured, real emails can be sent.

If SMTP is not configured, SevaLink falls back to a JSON transport mode, which still logs notification records in the database. This is useful for demo and hackathon judging because the full workflow can still be shown without requiring a live mail server.

## Full User Journey

### NGO Journey

1. Register or log in as an NGO.
2. Open the task workspace.
3. Report a community issue with location, severity, skills, and optional image.
4. Let SevaLink derive category and urgency signals.
5. View recommended volunteers or incoming volunteer interest.
6. Assign a volunteer.
7. Track the task through confirmation, active work, and completion review.
8. Use the admin dashboard to monitor trends, hotspots, and team performance.

### Volunteer Journey

1. Register as a volunteer and add skills.
2. Browse open tasks.
3. Filter by severity or matching relevance.
4. Accept a task.
5. Receive assignment from NGO.
6. Confirm assignment.
7. Complete the work.
8. Request review.
9. Earn points and badges after NGO verification.

## Project Architecture

SevaLink is split into two major parts:

### Frontend

- React
- React Router
- Framer Motion
- Chart.js
- React Leaflet
- React Toastify

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- Multer for image upload
- Nodemailer for email-ready notifications

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, React Router, Framer Motion |
| Styling | CSS, motion-heavy UI, responsive layouts |
| Maps | Leaflet, React Leaflet, OpenStreetMap |
| Charts | Chart.js, react-chartjs-2 |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| File Uploads | Multer |
| Notifications | Nodemailer |
| Auth | Custom token-based auth with hashed passwords |
| Local persistence | Browser localStorage |

## Folder Structure

```text
SevaLink/
|-- client/                  # React frontend
|   |-- public/
|   |-- src/
|   |   |-- components/      # Reusable UI blocks like leaderboard, predictions, heatmap
|   |   |-- assets/          # Images and branding assets
|   |   |-- utils/           # API/session helpers and speech helper
|   |   |-- App.js
|   |   |-- Home.js
|   |   |-- Tasks.js
|   |   |-- Admin.js
|   |   `-- Auth.js
|-- server/                  # Express backend
|   |-- controllers/         # Request handlers
|   |-- middleware/          # Auth and upload middleware
|   |-- models/              # MongoDB schemas
|   |-- routes/              # API routes
|   |-- scripts/             # Demo seed and cleanup scripts
|   |-- services/            # Matching, analytics, notifications, gamification
|   |-- utils/               # Geo, task signals, auth helpers, env loading
|   `-- server.js
`-- README.md
```

## Backend Data Models

### User

Stores:

- name
- email
- role
- organization name
- skills
- location
- availability
- availability score
- geo coordinates
- rating
- points
- badges
- completed task count
- password reset OTP state

### Task

Stores:

- issue details
- severity
- urgency score
- category
- image details
- visibility state
- required skills
- status pipeline
- matched volunteers
- volunteer applications
- assigned volunteer
- timestamps for assignment, review, and completion

### Notification

Stores:

- notification type
- recipient info
- subject and message
- task and NGO references
- delivery status
- metadata

## API Overview

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `GET /api/auth/me`

### Tasks

- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/volunteer/dashboard`
- `GET /api/tasks/admin/dashboard`
- `GET /api/tasks/match/:taskId`
- `POST /api/tasks/:id/apply`
- `POST /api/tasks/:id/run-matching`
- `PATCH /api/tasks/:id/confirm`
- `PATCH /api/tasks/:id/request-complete`
- `PATCH /api/tasks/:id/complete`
- `PUT /api/tasks/assign/:taskId`

### Analytics

- `GET /api/analytics/predict-needs`
- `GET /api/analytics/leaderboard`
- `GET /api/analytics/notifications`
- `GET /api/analytics/heatmap`

## How to Run the Project Locally

### Prerequisites

Make sure you have:

- Node.js installed
- npm installed
- MongoDB Atlas connection string or local MongoDB instance

### 1. Clone the project

```bash
git clone <your-repository-url>
cd SevaLink
```

### 2. Configure the backend environment

Create a file at `server/.env`

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
CLIENT_ORIGIN=http://localhost:3000
TOKEN_SECRET=your_secure_secret_here

MAIL_FROM=noreply@sevalink.local
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
```

### Environment variable meaning

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Backend port, default is `5000` |
| `CLIENT_ORIGIN` | Allowed frontend origin for CORS |
| `TOKEN_SECRET` | Secret used to sign auth tokens |
| `MAIL_FROM` | Sender address for emails |
| `SMTP_HOST` | SMTP host for real email delivery |
| `SMTP_PORT` | SMTP port |
| `SMTP_SECURE` | `true` for secure SMTP, otherwise `false` |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |

### 3. Optional frontend environment

Create `client/.env` only if you want custom API or asset URLs.

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ASSET_BASE_URL=http://localhost:5000
```

If you do not create this file, the frontend already knows how to use localhost automatically in development.

### 4. Install dependencies

#### Root

```bash
npm install
```

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

### 5. Start the backend

From the `server` folder:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

### 6. Start the frontend

From the `client` folder:

```bash
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

### Windows note

If PowerShell blocks `npm` because of script policy, use:

```powershell
npm.cmd start
```

This is especially useful on Windows systems where `npm.ps1` is disabled.

## Demo Data for Quick Evaluation

SevaLink includes demo seed scripts so judges can see a realistic dashboard quickly.

### Seed demo data

From the `server` folder:

```bash
npm run seed:demo
```

This creates:

- 3 NGO accounts
- 48 volunteer accounts
- 48 realistic demo tasks
- seeded notifications

### Remove demo data

```bash
npm run remove:demo
```

### Demo account pattern

NGO accounts:

- `demo.ngo1@sevalink.local`
- `demo.ngo2@sevalink.local`
- `demo.ngo3@sevalink.local`

Volunteer accounts follow this pattern:

- `demo.volunteer1@sevalink.local`
- `demo.volunteer2@sevalink.local`
- and so on

Default demo password:

```text
demo123456
```

## Smart Logic Inside the Product

### Task signal generation

When a task is created, SevaLink analyzes the input and derives:

- category
- emergency keywords
- image tags
- severity correction
- urgency score

This gives the admin dashboard and matching system better signals to work with.

### Matching logic

Volunteer ranking is based on:

- matching skills
- whether the volunteer is available
- current active assignments
- volunteer rating
- distance visibility

This keeps matching explainable and transparent.

### Prediction logic

The prediction layer is intentionally simple and readable.

It checks whether certain task categories have appeared repeatedly in the last 7 days compared with the previous 7 days, and then surfaces likely upcoming demand.

This is useful because judges can immediately understand how the prediction works.

### Reward logic

When an NGO verifies task completion:

- the volunteer gains points based on task severity
- completed task count increases
- badges may be added

This creates long-term motivation and stronger volunteer identity.

## Design Decisions

Some choices in SevaLink are intentional:

- manual final assignment is kept instead of full automation
- volunteers must confirm assignments
- task completion from volunteers requires admin verification
- public tasks can be visible without exposing private NGO-only tasks
- offline task capture favors reliability over image persistence

These choices make the product safer and more realistic.

## Security and Reliability Notes

SevaLink includes:

- password hashing with `crypto.scrypt`
- signed auth tokens
- protected routes
- role-based authorization
- OTP-based password reset
- upload filtering for image files only
- notification logging for traceability

For a hackathon or judging environment, this shows attention to practical engineering, not just UI polish.

## Why Judges May Appreciate This Project

SevaLink stands out because it shows depth across multiple dimensions:

- a real social problem
- a strong product story
- polished frontend experience
- multi-role workflow
- useful backend intelligence
- thoughtful admin controls
- analytics beyond simple CRUD
- offline and recovery handling
- realistic demo-ready dataset support

It is both emotionally meaningful and technically layered.

## Current Scope and Honest Limitations

To keep the project focused and explainable, a few things are intentionally simple right now:

- prediction logic is rule-based, not ML-trained
- notifications can run in demo mode without real email delivery
- offline queue does not preserve image files
- there is no full production deployment config in this repository
- automated assignment is intentionally disabled in favor of admin review

These are reasonable tradeoffs for a project at this stage, and they also create clear future expansion paths.

## Future Improvements

Possible next steps:

- SMS and WhatsApp notifications
- multilingual support
- volunteer availability calendar
- route optimization for field teams
- NGO-to-NGO collaboration workflows
- richer prediction models
- mobile-first PWA behavior
- verified impact reporting for donors and partners

## Final Summary

SevaLink is a community response coordination platform that turns reported problems into organized action.

It helps NGOs create better tasks, helps volunteers find the right work, helps admins assign with more confidence, and helps the whole network learn from real activity over time.

The heart of the project is simple:

help should not be delayed because coordination is weak.

SevaLink exists to make that coordination clearer, faster, and more human.
