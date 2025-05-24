# React + .NET Starter Template

This is a blueprint starter template for building applications with React frontend and .NET backend.

## Project Structure

- `/frontend` - React application built with Vite and TypeScript
- `/backend` - .NET Web API application

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [.NET SDK](https://dotnet.microsoft.com/download) (8.0+)

### Setup and Run

#### Backend (.NET API)

```bash
cd backend/MyApp.Api
dotnet restore
dotnet build
dotnet run
```

The API will start at `https://localhost:5001` and `http://localhost:5000`.

#### Frontend (React)

```bash
cd frontend/my-app-frontend
npm install
npm run dev
```

The React application will start at `http://localhost:3000`.

## Development Workflow

- Backend API is configured to run on port 5000
- Frontend development server is configured to proxy API requests to the backend
- Edit code in each respective directory to build your application

## Features

- Modern React setup with TypeScript
- Fast development with Vite
- .NET Web API backend
- Pre-configured proxy settings
- Clean project structure

## Customization

- Update package names in `package.json` and project files
- Modify proxy settings in `vite.config.ts` if needed
- Adjust API endpoints to match your requirements

## License

MIT