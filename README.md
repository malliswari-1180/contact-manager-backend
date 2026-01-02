# Contact Management Web App

A full-stack MERN (MongoDB, Express, React, Node.js) contact management application built as an interview task demonstrating modern web development practices.

## 🚀 Features

- ✅ Add contacts with name, email, phone, and optional message
- ✅ Real-time form validation with error messages
- ✅ Display contacts in a responsive table
- ✅ Delete contacts
- ✅ Success notifications
- ✅ No page reload required (SPA)
- ✅ Responsive design for mobile and desktop
- ✅ Input validation (email format, 10-digit phone number)
- ✅ Disabled submit button when form is invalid

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling (responsive design)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

## 📁 Project Structure

```
contact-manager/
├── backend/
│   ├── models/
│   │   └── Contact.js          # MongoDB schema
│   ├── routes/
│   │   └── contacts.js         # API routes
│   ├── server.js               # Express server
│   ├── .env                    # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.js  # Form component
│   │   │   └── ContactList.js  # List component
│   │   ├── App.js              # Main app component
│   │   ├── App.css             # Styles
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.0 or higher)
- npm or yarn

### 1. Clone or Create Project

```bash
mkdir contact-manager
cd contact-manager
```

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Initialize npm
npm init -y

# Install dependencies
npm install express mongoose cors dotenv
npm install --save-dev nodemon

# Create .env file
echo PORT=5000 > .env
```

### 3. Frontend Setup

```bash
# Navigate to frontend folder
cd ../frontend

# Create React app
npx create-react-app .

# Install axios
npm install axios
```

### 4. Start MongoDB

**Option A - Windows Service:**
```bash
net start MongoDB
```

**Option B - Manual Start:**
```bash
mongod --dbpath="C:\data\db"
```

**Option C - MongoDB Compass:**
- Open MongoDB Compass
- Connect to `mongodb://localhost:27017`

## 🚀 Running the Application

### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```
Server runs on: `http://localhost:5000`

### Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```
App opens at: `http://localhost:3000`

## 📡 API Endpoints

### Base URL: `http://localhost:5000/api/contacts`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Get all contacts |
| POST   | `/`      | Create new contact |
| DELETE | `/:id`   | Delete contact by ID |

### Request/Response Examples

**POST `/api/contacts`**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6g7h8i9j0k1",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello!",
  "createdAt": "2025-01-02T10:30:00.000Z",
  "updatedAt": "2025-01-02T10:30:00.000Z"
}
```

## ✅ Validation Rules

- **Name**: Required, must not be empty
- **Email**: Required, must be valid email format (e.g., user@example.com)
- **Phone**: Required, must be exactly 10 digits
- **Message**: Optional

## 🎨 UI Features

- Clean and modern design
- Responsive layout (mobile-friendly)
- Real-time validation feedback
- Red error messages for invalid inputs
- Red borders on invalid fields
- Disabled submit button until form is valid
- Success notification after adding contact
- Hover effects on table rows
- Delete button for each contact

## 📦 Database Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String (required),
  message: String (optional),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🧪 Testing Checklist

- [x] Form validation works correctly
- [x] Email format validation
- [x] Phone number validation (10 digits)
- [x] Submit button disabled when form invalid
- [x] Contact appears in list after submission
- [x] No page reload needed
- [x] Delete functionality works
- [x] Success message displays
- [x] Responsive design on mobile
- [x] Error messages show in red
- [x] MongoDB stores data correctly

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
net start MongoDB

# Or check service status
Get-Service -Name MongoDB*
```

### Port Already in Use
```bash
# Change port in backend/.env
PORT=5001
```

### CORS Error
- Ensure backend has `cors()` middleware enabled
- Check frontend API URL is correct

## 📝 Environment Variables

### Backend `.env`
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contactManager
```

## 🚀 Deployment

### Backend (Heroku/Render)
1. Push code to GitHub
2. Connect to hosting service
3. Add MongoDB Atlas connection string
4. Deploy

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy `build` folder
3. Update API URL to production backend


## 🎯 Learning Outcomes

- Full-stack MERN application development
- RESTful API design
- MongoDB database integration
- React state management with hooks
- Form validation and error handling
- Responsive UI design
- Client-server communication

---

