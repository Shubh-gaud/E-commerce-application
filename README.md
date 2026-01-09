<<<<<<< HEAD
# E-commerce Full Stack Project

## Overview
This is a full-stack e-commerce application built with React (frontend) and Spring Boot (backend). It allows users to browse products, add them to a cart, and checkout. Admins can manage products through CRUD operations.

---

## Technologies Used
- **Frontend:** React, Vite, Axios, Bootstrap
- **Backend:** Spring Boot, Maven, H2 Database (or other SQL DB)

---

## Project Structure

```
E-commerce/
├── backend/
│   └── ecom-proj/
│       ├── src/main/java/com/example/ecom_proj/
│       │   ├── controller/
│       │   ├── model/
│       │   ├── repo/
│       │   └── service/
│       ├── src/main/resources/
│       │   ├── application.properties
│       │   └── data1.sql
│       └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── Context/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
```

---

## How to Run

### Backend (Spring Boot)
1. Open terminal and navigate to `backend/ecom-proj`.
2. Run the backend server:
   - Using Maven Wrapper:
     ```
     ./mvnw spring-boot:run
     ```
   - Or, if Maven is installed globally:
     ```
     mvn spring-boot:run
     ```
   - To build and run the JAR:
     ```
     ./mvnw clean package
     java -jar target/*.jar
     ```
3. The backend will start on `http://localhost:8080` by default.

### Frontend (React)
1. Open terminal and navigate to `frontend`.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. The frontend will start on `http://localhost:5173` by default.

---

## Features
- Product listing and details
- Add to cart and checkout
- Admin product management (Add, Update, Delete)
- Responsive UI with Bootstrap

---

## API Endpoints (Sample)
- `GET /products` - List all products
- `POST /products` - Add a new product
- `PUT /products/{id}` - Update product
- `DELETE /products/{id}` - Delete product

---

## Environment Configuration
- Backend configs: `src/main/resources/application.properties`
- Frontend configs: `src/axios.jsx` (API base URL)

---

## Contributing
Feel free to fork, clone, and submit pull requests. For major changes, open an issue first.

---

## License
This project is licensed under the MIT License.

---

## Troubleshooting
- If the backend does not start, ensure Java and Maven are installed and JAVA_HOME is set.
- If the frontend fails to run, check that all dependencies are installed (`npm install`).
- For CORS issues, verify backend allows requests from frontend origin in `application.properties`.
- For database errors, check H2 console at `http://localhost:8080/h2-console` (if enabled).

---

## Contributors
- Your Name (Project Owner)
- Contributor 1
- Contributor 2

---

## FAQ
**Q: How do I change the backend port?**
A: Edit `server.port` in `src/main/resources/application.properties`.

**Q: How do I connect to a different database?**
A: Update datasource settings in `application.properties` and add the required driver dependency in `pom.xml`.

**Q: How do I deploy this project?**
A: Build the backend JAR and deploy to a server. For frontend, run `npm run build` and serve the static files.

---

## Best Practices
- Use environment variables for sensitive configs.
- Keep dependencies updated.
- Write unit and integration tests for backend and frontend.
- Use version control (Git) for all changes.
- Document new features and changes in the README.
=======
# E-commerce-application
>>>>>>> 1c9a60822aaaf1359732f1235c4595e0c6cdc5a0
