# Developers Dashboard  

**Developers Dashboard** is a dynamic web application designed to streamline project management and task tracking for development teams. It consists of two key modules:  

1. **Project**: The **frontend** part implemented using **Next.js**.  
2. **Demo**: The **backend** part implemented using **Spring Boot**.  

Together, these modules provide an interactive interface for monitoring and managing projects, tasks, and deadlines.  

---

## Features  

### **Home Page Dashboard**  
- Displays an overview of **current running projects** for quick access.  
- Shows the **last opened projects** to help users resume work seamlessly.  
- Highlights **projects nearing their due dates**, ensuring deadlines are never missed.  

### **Project Details Page**  
- Comprehensive project details, including:  
  - Title, description, and status.  
  - Key dates (start date, due date, and milestones).  
- **Task List Management**:  
  - View all tasks related to the project.  
  - Update task progress, mark tasks as complete, edit, or delete tasks.  

---

## Tech Stack  

### **Frontend (Project)**  
- **Framework**: Next.js (React-based)  
- **Language**: JavaScript 
- **Styling**:  CSS Modules  

### **Backend (Demo)**  
- **Framework**: Spring Boot  
- **Language**: Java  
- **Database**: MySQL 

---

## Getting Started  

### Prerequisites  
- **Node.js** for the frontend.  
- **Java JDK** and **Maven/Gradle** for the backend.  
- **Database**: MySQL/PostgreSQL setup.  

### Setup Instructions  

#### **Frontend (Project)**  
1. Navigate to the `project-copy` directory.  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Start the development server:  
   ```bash
   npm run dev
   ```  
4. Access the application at `http://localhost:3000`.  

#### **Backend (Demo)**  
1. Navigate to the `demo` directory.  
2. Build the backend:  
   ```bash
   ./mvnw clean install
   ```  
3. Run the backend server:  
   ```bash
   ./mvnw spring-boot:run
   ```
4. Create a database named 'prokarto' in mysql
5. Update `Developers-Dashboard\demo\src\main\resources\application.properties`
     -spring.datasource.username: give your mysql username
     -**spring.datasource.password:** give your password
  
4. The backend will be available at `http://localhost:8080`.  

#### **Integration**  
- Update the API base URL in the frontend code to point to the backend:  
  ```js
  const API_BASE_URL = "http://localhost:8080/api";
  ```  

---
