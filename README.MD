Sure, here's the properly formatted version of the file:

---

# Django and Next.js Project Setup

This repository contains a full-stack application with Django as the backend and Next.js as the frontend. The project is containerized using Docker and orchestrated with Docker Compose. Follow the instructions below to set up and run the project locally.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Project Structure

- `chart_backend/` - Contains the Django backend.
- `chart_frontend/` - Contains the Next.js frontend.

## Getting Started

### 1. Set Up Django Backend

#### 1.1. Navigate to Django Backend Directory

```bash
cd chart_backend
```

#### 1.2. Create and Activate a Virtual Environment

```bash
python -m venv venv
source venv/bin/activate
```

#### 1.3. Install Dependencies

```bash
pip install -r requirements.txt
```

#### 1.4. Apply Migrations

```bash
python manage.py migrate
```

#### 1.5. Run the Django Development Server

```bash
python manage.py runserver
```

### 2. Set Up Next.js Frontend

#### 2.1. Navigate to Next.js Frontend Directory

```bash
cd chart_frontend
```

#### 2.2. Install Dependencies

```bash
npm install
```

#### 2.3. Make .env.local file in root

`NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000`

#### 2.4. Run the Application

```bash
npm run dev
```

### 3. Docker Setup

#### 3.1. Build and Start Containers

```bash
docker-compose up --build
```

#### 3.2. Access the Application

- Django Backend: [http://localhost:8000](http://localhost:8000)
- Next.js Frontend: [http://localhost:3000](http://localhost:3000)

#### 3.3. Stopping the Containers

```bash
docker-compose down
```
