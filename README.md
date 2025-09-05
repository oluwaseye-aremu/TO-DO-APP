# 📝 To-Do App (DevOps Project)

This is a simple **To-Do List application** built with **Node.js (Express)** for the backend.  
It demonstrates core **DevOps practices**: containerization with Docker, automation using GitHub Actions, and deployment with Docker Hub.


## 🚀 Features
- Add, view, and manage tasks
- Backend: **Node.js + Express**
- Containerized with **Docker**
- Automated CI/CD pipeline using **GitHub Actions**
- Deployable anywhere via **Docker Hub**


## 🏗️ Architecture

```mermaid
flowchart LR
    A[Developer pushes code to GitHub] --> B[GitHub Actions Pipeline]
    B --> C[Build Docker Image]
    B --> D[Run Tests]
    C --> E[Push Image to Docker Hub]
    E --> F[Deploy to Server/Cloud]
    F --> G[User accesses app on http://server-ip:5000]
