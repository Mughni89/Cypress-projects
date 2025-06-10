Dealls Jobs - QA Software Engineer / SDET Challenge
## 🔹 Challenge 1 - Test Strategy
See the test strategy and test scenario outline in (https://github.com/Mughni89/Cypress-projects/blob/main/Technical%20test.docx)

## 🔹 Challenge 2 - UI Automation (Cypress)
- Tech stack: Cypress + TypeScript

# 🧠 mentee-request-session

Sistem automasi testing untuk proses request sesi mentoring oleh mentee menggunakan **Cypress** dan **TypeScript**. Proyek ini fokus untuk memastikan flow mentoring berjalan lancar melalui skenario e2e yang dapat dijalankan otomatis via CI (GitHub Actions).

## 🎯 Scope 
> Mentee select / search mentor.
> Mentee request session including topic selection and propose schedule.
> Mentee haven't an account yet, then mentee need complete profile and create password.
> And because email should be unique, then first thing when run is create dummy unique email.

## 🛠️ Tech Stack

| Teknologi      | Fungsi                              |
|----------------|-------------------------------------|
| TypeScript     | Bahasa pemrograman utama            |
| Cypress        | Framework e2e testing               |
| GitHub Actions | CI/CD pipeline untuk automation     |
| Node.js        | Runtime environment                 |

## 🚀 Cara Menjalankan

### 1. Clone repository

git clone https://github.com/Mughni89/cypress-projects.git

### 2. Install dependencies

npm install

### 3. Jalankan test (headless)

npx cypress run --env grepTags="@mentoring"

#### 4. Jalankan test (GUI)

npx cypress open

