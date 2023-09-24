# Django-React TODO App

This is a simple TODO application built with Django for the backend and React for the frontend.

## Features

- Add new TODO items
- Mark TODO items as completed
- Delete TODO items

## Prerequisites

- Python 3.x
- Node.js and npm

## Getting Started

  ```bash
  git clone https://github.com/peyman-hamidzade/todo_django_react.git
  ```
  ```
  cd todo_django_react
  ```
### Backend (Django)


  ```bash
  cd backend
  ```
  ```
  pip install -r requirements.txt
  ```
  ```
  cd todo
  ```
  ```
  python manage.py migrate
  ```
  ```
  python manage.py runserver
  ```
The application should now be running. Open your browser and go to http://localhost:8000/api/ to view it.

### Frontend (React)

```bash
cd frontend/todo
```
```
npm install
```
```
npm start
```
The application should now be running. Open your browser and go to http://localhost:3000 to view it.
