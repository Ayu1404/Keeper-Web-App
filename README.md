# **Keeper Web App**

A simple and intuitive web application inspired by Google Keep. The Keeper Web App allows users to create, edit, delete, and save notes effortlessly. It features a responsive design, seamless back-end integration, and a dynamic React.js front-end, making it a perfect personal tool for staying organized and productive.

---

## **Features**
- **Create Notes**: Add and save notes with titles and content through an easy-to-use form.
- **Edit Notes**: Update existing notes directly, with seamless persistence to the backend.
- **Delete Notes**: Remove unnecessary notes effortlessly.
- **Real-Time Syncing**: Automatically fetch and display notes from the back-end API.
- **Error Handling**: Provides clear messages for failed actions (e.g., failed fetch, add, edit, or delete).
- **Dynamic Form Behavior**: The note input form expands interactively for a better user experience.
- **Responsive Design**: Built with Material-UI and React.js for an engaging interface.

---

## **Getting Started**

### **Prerequisites**
- **Node.js**: To run the back-end server.
- **PostgreSQL**: Ensure PostgreSQL is installed and running.

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayu1404/Keeper-Web-App.git
   cd Keeper-Web-App
   ```
2. Install dependencies:
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

4. Start the backend server:
   ```bash
   npm start
   ```

5. Start the React front end:
   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```

---

## **Frontend Highlights**
### Components:
1. **App.jsx**:
   - Fetches all notes from the back end when the app loads.
   - Handles the addition, deletion, and editing of notes with real-time updates.
   - Displays error messages if API requests fail.

2. **CreateArea.jsx**:
   - Provides a dynamic form to create new notes.
   - Expands interactively when the user clicks on the input field.
   - Submits the new note to the backend and updates the UI.

3. **Note.jsx**:
   - Renders individual notes.
   - Provides options to edit or delete notes with direct API interactions.
   - Displays error messages if editing or deleting fails.

4. **Header.jsx**:
   - Displays the app header with the title "Keeper."

5. **Footer.jsx**:
   - Displays the footer with the current year.

---

## **Technologies Used**
- **React.js**: For building the front-end UI.
- **Material-UI**: For interactive icons (e.g., Add, Delete, Edit) and responsive design.
- **Express.js**: Back-end framework for handling API routes.
- **PostgreSQL**: Relational database for securely storing notes.
- **CORS**: Middleware for cross-origin requests between the front end and back end.
- **dotenv**: For managing environment variables securely.

---

## **API Endpoints**
### **Base URL**: `http://localhost:5000`

| HTTP Method | Endpoint       | Description                  |
|-------------|----------------|------------------------------|
| **POST**    | `/notes`       | Create a new note            |
| **GET**     | `/notes`       | Retrieve all notes           |
| **PUT**     | `/notes/:id`   | Update a note by ID          |
| **DELETE**  | `/notes/:id`   | Delete a note by ID          |

---

## **Usage**
1. Use the app to add, edit, and delete notes through the intuitive interface.
2. View live updates as notes are fetched from the back-end API.
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
- This project is inspired by Google Keep.
- Thanks to React.js, Material-UI, and open-source contributions for empowering this app.
