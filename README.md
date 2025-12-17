# InnovateX 🏆

A modern, full-stack contest management platform that lets users discover and join paid contests, creators host and manage their own competitions, and admins ensure everything runs smoothly.

**Live Demo:** [Demo](https://innovate-x6.vercel.app/)  
**Frontend Repository:** [InnovateX](https://github.com/naims6/Innovate-X.git)  
**Backend Repository:** [InnovateX-Server](https://github.com/naims6/Innovate-X-Server.git)

## About the Project

ContestHub is a complete, production-ready web application designed to demonstrate real-world full-stack development practices. It supports:

- **Users** — Browse contests, pay to participate, track payments, view winnings, and see their performance on a global leaderboard.
- **Contest Creators** — Create new contests, set entry fees and prizes, manage submissions, and declare winners.
- **Admins** — Moderate contests (approve/reject), manage user roles, and maintain platform integrity.

The project emphasizes security, scalability, clean architecture, and a polished user experience—making it an excellent portfolio piece for job applications.

## Key Features

### 1. Authentication & Authorization

- Email/password login + Google OAuth (via Firebase)
- JWT-based persistent sessions

### 2. Role-Based Access Control

- Three distinct roles: User, Contest Creator, and Admin
- Dedicated dashboards with role-specific features and UI

### 3. Secure Payment Integration

- Stripe for paid contest registrations
- Payment status tracking and confirmation

### 4. Contest Management

- Creators can add, edit, or delete contests (before admin approval)
- Deadline enforcement and real-time participant count updates
- Winner declaration

### 5. Leaderboard & Rankings

- Global leaderboard sorted by total wins
- Automatically updated when winners are declared

### 6. Personalized Dashboards

- **User Dashboard**: Participated contests, winning history, payment status, win percentage chart, profile update
- **Creator Dashboard**: Manage own contests, view submissions, declare winners
- **Admin Dashboard**: Approve/reject contests, manage users and roles

### 7. UI/UX Enhancements

- Fully responsive design (mobile, tablet, desktop)
- Dark/Light theme toggle (saved in localStorage)
- Smooth animations with Framer Motion
- Notifications via React Hot Toast
- Custom 404 page

### 8. Additional Features

- Pagination
- Popular contests section (sorted by participation)
- Winner advertisement section on homepage

## Tech Stack

### Frontend

- React.js
- React Router
- TanStack Query
- React Hook Form (with validation)
- Tailwind CSS
- Framer Motion (animations)
- Axios
- React Hot Toast / SweetAlert2

### Backend

- Node.js + Express.js
- MongoDB (MongoDB Atlas)
- JWT for authentication
- Stripe for payment processing
- Firebase Admin SDK (Google auth verification)

### Tools & Deployment

- Git & GitHub
- Vercel
- MongoDB Atlas

### Setup Steps

1. Clone both repositories:
   ```bash
   git clone https://github.com/naims6/Innovate-X.git
   git clone https://github.com/naims6/Innovate-X-Server.git
   ```
2. Install dependencies in each folder:

```bash
# Frontend
cd innovateX
npm install

# Backend
cd innovateX-server
npm install
```

3. Create .env files in both client and server directories.

```bash
VITE_APIKEY= give your own
VITE_AUTHDOMAIN= give your own
VITE_PROJECTID= give your own
VITE_STORAGEBUCKET= give your own
VITE_MESSAGINGSENDERID= give your own
VITE_APPID= give your own

#Img bg api
VITE_IMAGEBB_API= give your own

#api url
VITE_API_URL= give your own
```

4. Start the applications:

```bash
# Frontend
npm run dev

# Backend
nodemon index.js
```

### Author

**Naim Sorker** <br>
Aspiring Full-Stack Web Developer passionate about building scalable, secure, and intuitive applications.

LinkedIn: linkedin.com/in/naims6
Email: naim.sorker06@gmail.com
