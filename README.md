# 🧠 Flow Diagram API (NestJS + MongoDB)

This is a backend API built using **NestJS** and **MongoDB** to manage flow diagrams consisting of `nodes` and `edges`. Designed for integration with a visual frontend (e.g., React + @xyflow/react).
updates
---

## 📦 Tech Stack

- 🚀 NestJS (TypeScript)
- 🧩 Mongoose (MongoDB ODM)
- 🗃️ MongoDB (local or cloud)
- 🔐 RESTful API

---

## 📥 Installation

### 🔧 Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (running locally or via Atlas)

### 🛠 Setup

```bash
git clone 
cd flow-diagram-backend
npm install


✅ REST API Endpoints
📄 Create Project

curl -X POST http://localhost:3002/projects \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "abc123",
    "nodes": [],
    "edges": []
  }'


✏️ Update Project
curl -X PUT http://localhost:3002/projects/abc123 \
  -H "Content-Type: application/json" \
  -d '{
    "nodes": [/* node objects */],
    "edges": [/* edge objects */]
  }'


❌ Delete Project
curl -X DELETE http://localhost:3002/projects/abc123


📥 Get All Projects
curl http://localhost:3002/projects

Get One Project
curl http://localhost:3002/projects/abc123

