# **Keeper Web App**

A simple and intuitive web application inspired by Google Keep. The Keeper Web App allows users to create, edit, delete, and save notes effortlessly, making it a perfect personal tool for staying organized and productive.

---

## **Features**
- **Create Notes**: Add and organize notes via an intuitive interface.
- **Edit Notes**: Update existing notes with real-time persistence.
- **Delete Notes**: Remove unnecessary notes easily.
- **Save Notes**: Store notes in a PostgreSQL database with secure APIs.
- **RESTful APIs**: Backend powered by Express.js with well-defined routes for CRUD operations.
- **CORS Enabled**: Allows seamless integration between the backend (`http://localhost:5000`) and frontend (`http://localhost:3000`).

---

## **Getting Started**

### **Prerequisites**
- **Node.js**: To run the server-side code.
- **PostgreSQL**: Ensure PostgreSQL is installed and running.
- **Environment Variables**: Set up a `.env` file with database credentials.

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayu1404/Keeper-Web-App.git
   cd Keeper-Web-App
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file in the root directory with your PostgreSQL credentials:
   ```plaintext
   PORT=5000
   DB_USER=your_database_user
   DB_HOST=your_database_host
   DB_NAME=your_database_name
   DB_PASSWORD=your_database_password
   DB_PORT=your_database_port
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```

---

## **API Endpoints**
### **Base URL**: `http://localhost:5000`

| HTTP Method | Endpoint       | Description                  |
|-------------|----------------|------------------------------|
| **POST**    | `/notes`       | Create a new note            |
| **GET**     | `/notes`       | Retrieve all notes           |
| **PUT**     | `/notes/:id`   | Update a note by ID          |
| **DELETE**  | `/notes/:id`   | Delete a note by ID          |

### **Request/Response Examples**

#### 1. Create a Note
- **POST** `/notes`
- **Request Body**:
  ```json
  {
    "title": "Sample Title",
    "content": "Sample Content"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Sample Title",
    "content": "Sample Content"
  }
  ```

#### 2. Get All Notes
- **GET** `/notes`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Sample Title",
      "content": "Sample Content"
    },
    {
      "id": 2,
      "title": "Another Note",
      "content": "Another Content"
    }
  ]
  ```

#### 3. Update a Note
- **PUT** `/notes/:id`
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "content": "Updated Content"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Updated Title",
    "content": "Updated Content"
  }
  ```

#### 4. Delete a Note
- **DELETE** `/notes/:id`
- **Response**:
  ```plaintext
  Note is deleted
  ```

---

## **Technologies Used**
- **React.js**: A powerful front-end library for a dynamic user experience.
- **Express.js**: Backend framework for handling API routes and middleware.
- **PostgreSQL**: A relational database for secure and efficient data storage.
- **CORS**: Middleware for secure cross-origin requests.
- **dotenv**: For managing environment variables securely.

---

## **Usage**
1. Use the frontend app to create, edit, and manage your notes.
2. Backend APIs handle all requests to store data securely in PostgreSQL.
3. Access the app via `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License, allowing you to modify and distribute the project with proper attribution.

---

## **Acknowledgments**
- This project was inspired by Google Keep.
- Thanks to the open-source libraries (React, Express, PostgreSQL, and others) that made this project possible.
