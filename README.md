# Class Mate

Class Mate is a full-stack tutor and lesson management application. It provides a React client for students and teachers, backed by a Laravel API that handles authentication, teacher discovery, lesson booking, notes, reviews, and dashboard data.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff)
![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=fff)
![PHP](https://img.shields.io/badge/PHP-8.2%2B-777BB4?logo=php&logoColor=fff)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Production Build](#production-build)
- [Troubleshooting](#troubleshooting)

## Overview

The repository is organized as two independent applications:

- `frontend`: React 19 single-page application built with Vite, React Router, Tailwind CSS, Material UI date pickers, and Three.js-based visual components.
- `backend`: Laravel 12 API using Sanctum token authentication and Eloquent models for users, teachers, students, appointments, notes, reviews, and analytics.

The frontend API client currently targets `http://localhost:8000/api`, so the Laravel development server should run on port `8000`.

## Features

- Student and teacher registration.
- Token-based login with Laravel Sanctum.
- Role detection for authenticated users.
- Teacher catalog and teacher search.
- Teacher dashboard for students, appointments, and notes.
- Student dashboard for upcoming lessons and lesson filters.
- Lesson booking, updating, and cancellation.
- Notes between teachers and students.
- Review creation, listing, and deletion endpoints.
- Responsive React UI with reusable glass-style UI components.

## Tech Stack

### Frontend

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4
- Axios
- Material UI X Date Pickers
- Three.js, React Three Fiber, Drei, Postprocessing
- Lucide React

### Backend

- PHP 8.2+
- Laravel 12
- Laravel Sanctum
- Eloquent ORM
- SQLite-compatible local development database
- PHPUnit
- Laravel Pint

## Project Structure

```text
.
├── backend/
│   ├── app/
│   │   ├── Http/Controllers/Api/
│   │   └── Models/
│   ├── database/
│   │   ├── migrations/
│   │   ├── seeders/
│   │   └── database.sqlite
│   ├── routes/
│   │   └── api.php
│   ├── composer.json
│   └── artisan
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── shared/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Prerequisites

Install the following tools before running the project:

- Node.js 20+ and npm
- PHP 8.2+
- Composer
- SQLite extension enabled for PHP

## Getting Started

Clone the repository and install dependencies for both applications.

```bash
git clone <repository-url>
cd class_mate_frontend
```

### Backend Setup

```bash
cd backend
composer install
```

Create `backend/.env` if it does not exist, then configure the application key and database.

```bash
php artisan key:generate
php artisan migrate
```

Start the Laravel API server:

```bash
php artisan serve
```

The API will be available at:

```text
http://localhost:8000/api
```

### Frontend Setup

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server will print the local frontend URL, typically:

```text
http://localhost:5173
```

## Environment Configuration

The backend uses Laravel environment variables from `backend/.env`. For local SQLite development, use this shape:

```env
APP_NAME="Class Mate"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite

SESSION_DRIVER=file
QUEUE_CONNECTION=sync
CACHE_STORE=file
```

Run `php artisan key:generate` after creating the file. Do not commit real secrets or local credentials.

The frontend API base URL is currently hardcoded in `frontend/src/shared/Api.jsx`:

```js
baseURL: "http://localhost:8000/api"
```

Update this value before deploying to a different backend host.

## Available Scripts

### Frontend

Run these commands from `frontend/`.

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds the frontend for production. |
| `npm run preview` | Serves the production build locally. |

### Backend

Run these commands from `backend/`.

| Command | Description |
| --- | --- |
| `composer install` | Installs PHP dependencies. |
| `php artisan serve` | Starts the Laravel development server. |
| `php artisan migrate` | Runs database migrations. |
| `php artisan test` | Runs the Laravel test suite. |
| `vendor/bin/pint` | Formats PHP code using Laravel Pint. |
| `composer run dev` | Starts Laravel server, queue listener, logs, and Vite together for the Laravel app context. |
| `composer run test` | Clears config and runs backend tests. |

## API Reference

All protected endpoints require a Sanctum bearer token:

```http
Authorization: Bearer <token>
```

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Creates a student or teacher account. |
| `POST` | `/api/auth/login` | Authenticates a user and returns an API token. |
| `GET` | `/api/auth/me` | Returns the authenticated user. |

### People, Roles, and Search

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/getPerson/{person}` | Returns a user profile. |
| `GET` | `/api/getStudent/{person}` | Returns a student profile by user ID. |
| `GET` | `/api/getRole/{person}` | Returns `student` or `teacher`. |
| `DELETE` | `/api/deletePerson/{person}` | Deletes a user. |
| `GET` | `/api/allTeachers` | Lists all teachers with profile data. |
| `GET` | `/api/teacherByPerson/{person}` | Returns a teacher profile by user ID. |
| `GET` | `/api/teacherSearch/{searchTerm}` | Searches teachers by name, surname, or location. |
| `GET` | `/api/allStudentsOfTeacher/{teacher}` | Lists students assigned to a teacher. |
| `GET` | `/api/studentSearchByTeacher/{teacher}/{searchTerm}` | Searches a teacher's students. |

### Appointments

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/appointments` | Lists all appointments. |
| `GET` | `/api/appointment/{appointment}` | Returns one appointment. |
| `POST` | `/api/appointment/book` | Creates an appointment. |
| `PUT` | `/api/appointment/{appointment}/update` | Updates appointment topic, date, or time. |
| `DELETE` | `/api/appointment/{appointment}/delete` | Deletes an appointment. |
| `GET` | `/api/appointment/{teacher}/byTeacher` | Lists appointments for a teacher. |
| `GET` | `/api/appointments/{filter}/{teacher}/byTeacher` | Lists teacher appointments by `day`, `week`, `month`, or `inThreeDays`. |
| `GET` | `/api/appointment/{student}/byStudent` | Lists appointments for a student. |
| `GET` | `/api/appointments/{filter}/{student}/byStudent` | Lists student appointments by `day`, `week`, `month`, or `inThreeDays`. |

### Notes

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/note/create` | Creates a note for a student-teacher pair. |
| `GET` | `/api/note/{student}/{teacher}/getNote` | Lists notes for a student-teacher pair. |
| `DELETE` | `/api/note/{note}/deleteNote` | Deletes a note. |

### Reviews

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/reviews/{teacher}/byTeacher` | Lists reviews for a teacher. |
| `GET` | `/api/reviews/{student}/byStudent` | Lists reviews created by a student. |
| `POST` | `/api/reviews/create` | Creates a review. |
| `DELETE` | `/api/reviews/{review}/delete` | Deletes a review. |

## Testing

Run backend tests from `backend/`:

```bash
php artisan test
```

The frontend currently does not define a test script in `frontend/package.json`. Add one before relying on automated frontend test coverage.

## Production Build

Build the frontend:

```bash
cd frontend
npm run build
```

Prepare the Laravel backend:

```bash
cd backend
composer install --no-dev --optimize-autoloader
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

For production, configure a real database, secure `APP_KEY`, correct `APP_URL`, HTTPS, CORS/session settings, and a deployment-specific frontend API base URL.

## Troubleshooting

- If authenticated frontend requests fail, confirm the token exists in browser local storage and the API server is running on `http://localhost:8000`.
- If database errors occur, ensure `backend/database/database.sqlite` exists and `php artisan migrate` has been run.
- If Vite does not start, reinstall frontend dependencies with `npm install` inside `frontend/`.
- If Laravel cannot access SQLite, enable the SQLite PHP extension and restart the terminal/server.
