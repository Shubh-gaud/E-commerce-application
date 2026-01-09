# E-commerce Full Stack Project

## Overview
This is a full-stack e-commerce application built with **React** (frontend) and **Spring Boot** (backend).  
It allows users to browse products, add them to a cart, and checkout.  
Admins can manage products using full **CRUD operations**.

---

## Technologies Used

### Frontend
- React
- Vite
- Axios
- Bootstrap

### Backend
- Spring Boot
- Maven
- H2 Database (or any SQL database)

---

## Project Structure

E-commerce/
├── backend/
│ └── ecom-proj/
│ ├── src/main/java/com/example/ecom_proj/
│ │ ├── controller/
│ │ ├── model/
│ │ ├── repo/
│ │ └── service/
│ ├── src/main/resources/
│ │ ├── application.properties
│ │ └── data1.sql
│ └── pom.xml
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ └── Context/
│ ├── public/
│ ├── package.json
│ └── vite.config.js


---

## How to Run the Project

### Backend (Spring Boot)

1. Open terminal and navigate to:
   ```bash
   cd backend/ecom-proj
2. Run the backend server:

Using Maven Wrapper

./mvnw spring-boot:run
Using Maven (if installed globally)

mvn spring-boot:run


Build and run JAR

./mvnw clean package
java -jar target/*.jar


Backend will start at:

http://localhost:8080

Frontend (React)

Open terminal and navigate to:

cd frontend


Install dependencies:

npm install


Start development server:

npm run dev


Frontend will start at:

http://localhost:5173

Features

Product listing and product details

Add to cart and checkout

Admin product management (Add, Update, Delete)

Responsive UI using Bootstrap

API Endpoints (Sample)
Method	Endpoint	Description
GET	/products	List all products
POST	/products	Add a new product
PUT	/products/{id}	Update a product
DELETE	/products/{id}	Delete a product
