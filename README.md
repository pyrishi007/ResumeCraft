# ResumeCraft 🚀

**ResumeCraft** is a modern full‑stack SaaS-style resume builder that allows users to create, customize, preview, export, and share professional resumes in real time. It demonstrates production-level architecture using a headless CMS, cloud PostgreSQL database, authentication provider, and scalable frontend UI.

---

# 🌐 Live Demo

> Add your deployment link here

```
https://resumecraft.app
```

---

# 📸 Screenshots

Add screenshots here:

* Dashboard view
* Resume editor
* Template preview
* PDF export
* Shared resume page

Example:

```
/assets/dashboard.png
/assets/editor.png
/assets/template-preview.png
```

---

# ✨ Key Features

## Authentication & Security

* Secure authentication using Clerk
* Protected application routes
* Session-aware UI rendering
* User-specific resume ownership

## Resume Management

* Create resumes dynamically
* Edit existing resumes
* Delete resumes
* Dashboard-based resume collection

## Dynamic Resume Editor

* Real-time form-driven editing
* Instant live preview updates
* Structured resume schema handling
* Multi-section editing support

## Template System

* Multiple professional templates
* Dynamic template switching
* Layout-aware rendering engine

## Export & Sharing

* Export resumes as PDF
* Share resumes via public links
* Cloud-stored resume access

## SaaS-style UI/UX

* Responsive layout (mobile + desktop)
* Clean Tailwind component architecture
* Dashboard navigation system

---

# 🧠 Architecture Overview

ResumeCraft follows a scalable API-driven architecture:

```
Frontend (React + Tailwind)
        ↓
Axios API Layer
        ↓
Strapi Headless CMS
        ↓
Neon PostgreSQL Database
```

Authentication Layer:

```
Clerk Authentication
        ↓
Protected Routes
        ↓
Authorized API Access
```

This architecture mirrors production-grade SaaS applications.

---

# 🛠 Tech Stack

## Frontend

* React
* TailwindCSS
* Axios
* Dynamic component rendering

## Backend / CMS

* Strapi Headless CMS
* REST API architecture

## Database

* Neon Serverless PostgreSQL

## Authentication

* Clerk

## Deployment

* Vercel / Netlify (frontend)
* Strapi hosted backend

---

# ⚙️ Core Engineering Concepts Demonstrated

This project showcases:

* API-driven frontend architecture
* Headless CMS integration
* Cloud database modeling
* Authentication & authorization workflows
* Protected routing
* Dynamic form state synchronization
* Live preview rendering pipelines
* Template abstraction system
* PDF generation workflow
* Resume sharing infrastructure

---

# 📂 Project Structure

```
ResumeCraft
│
├── public/                 
│
├── service/              
│   └── GlobalAPI.js       
│
├── src/
│   │
│   ├── assets/              
│   │
│   ├── auth/
│   │   └── sign-in/
│   │       └── SignIn.jsx   
│   │
│   ├── Components/
│   │
│   │   ├── Dashboard/      
│   │
│   │   ├── resume/         
│   │   │
│   │   ├── [resumeId]/edit/ 
│   │   │   └── EditResume.jsx
│   │   │
│   │   ├── ResumeComponents/
│   │   │
│   │   ├── Forms/          
│   │   │   ├── HeaderForm.jsx
│   │   │   ├── SummaryForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── SkillsForm.jsx
│   │   │   ├── StudyForm.jsx
│   │   │   └── CertificateForm.jsx
│   │   │
│   │   ├── Preview/        
│   │   │   ├── HeaderPreview.jsx
│   │   │   ├── SummaryPreview.jsx
│   │   │   ├── ExperiencePreview.jsx
│   │   │   ├── SkillPreview.jsx
│   │   │   ├── StudyPreview.jsx
│   │   │   └── CertificatePreview.jsx
│   │
│   │   ├── ResumePreview.jsx
│   │   ├── ResumeCards.jsx
│   │   └── ResumeItems.jsx
│   │
│   ├── Header/            
│   │   └── Header.jsx
│   │
│   ├── Home/              
│   │   ├── HeroSection.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── CTASection.jsx
│   │   └── Home.jsx
│   │
│   ├── ui/               
│   │   ├── button.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   └── separator.jsx
│   │
│   ├── context/           
│   │   ├── ResumeContextProvider.jsx
│   │   └── resumeContext.js
│   │
│   ├── hooks/              
│   │
│   ├── lib/
│   │   └── utils.js        
│   │
│   ├── store/features/    
│   │
│   ├── utils/constants/   
│   │   └── mockData.js
│   │
│   ├── ProtectedRoutes.jsx 
│   ├── PublicRoutes.jsx     
│   │
│   ├── main.jsx             
│   └── index.css        
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

# 🔐 Authentication Flow

```
User Login
   ↓
Clerk Session Created
   ↓
Protected Route Access Enabled
   ↓
Authorized Resume Operations
```

---

# 📄 Resume Data Flow

```
User Input
   ↓
React Form State
   ↓
Axios Request
   ↓
Strapi API
   ↓
Neon PostgreSQL
   ↓
Live Preview Update
```

---

# 🚀 Getting Started (Local Setup)

## 1. Clone Repository

```
git clone https://github.com/yourusername/resumecraft.git
cd resumecraft
```

## 2. Install Dependencies

```
npm install
```

## 3. Configure Environment Variables

Create `.env` file:

```
VITE_CLERK_PUBLISHABLE_KEY=
STRAPI_API_URL=
DATABASE_URL=
```

## 4. Run Development Server

```
npm run dev
```

---

# 📦 Future Improvements

Planned enhancements:

* Autosave resume drafts
* Resume version history
* Drag-and-drop section ordering
* Theme customization support
* AI-assisted resume suggestions
* Role-based admin dashboard

---

# 🎯 Learning Outcomes

Through ResumeCraft, the following concepts were explored:

* Designing SaaS-style frontend architecture
* Integrating third-party authentication systems
* Structuring headless CMS-driven applications
* Managing relational cloud databases
* Building scalable resume template engines
* Implementing export pipelines (PDF generation)

---

# 🤝 Contributing

Contributions are welcome!

Steps:

```
Fork repository
Create feature branch
Commit changes
Open pull request
```

---

# 📜 License

MIT License

---

# 👨‍💻 Author

**Rishi**

Full‑stack developer focused on building scalable SaaS-style web applications.
