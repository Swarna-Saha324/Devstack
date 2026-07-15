# 🚀 DevStack Hub

**DevStack Hub** is a modern digital marketplace and resource platform built for developers. It allows users to explore curated code snippets, templates, developer resources, and digital assets in one place.

🌐 **Live Site:** https://my-devstack-hub.vercel.app

---

## ✨ Key Features

### 🔐 Authentication
- Email and password registration and login
- Google Social Login
- Secure authentication using Better Auth
- Newly registered users are assigned the `user` role by default

### 👥 Role-Based Access Control

The platform provides different navigation and access permissions based on authentication status and user role.

| Feature | Guest | User | Admin |
|---|:---:|:---:|:---:|
| Home | ✅ | ✅ | ✅ |
| About | ✅ | ✅ | ✅ |
| Contact | ✅ | ✅ | ✅ |
| Explore | ❌ | ✅ | ✅ |
| Add Item | ❌ | ✅ | ✅ |
| Manage Items | ❌ | ❌ | ✅ |

#### Guest
Users who are not logged in can access:
- Home
- About
- Contact
- Login and Registration

#### User
After registration or login, a user can access:
- Home
- About
- Contact
- Explore Marketplace
- Add Item

Every newly registered account receives the `user` role by default.

#### Admin
An admin has full access to:
- All user-accessible pages
- Manage Items
- Administrative functionality

---

## 🛍️ Marketplace Features

- Browse developer resources and digital assets
- Explore code snippets and templates
- Add new items to the marketplace
- Manage marketplace items through admin access
- Responsive and user-friendly interface

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack React Framework |
| TypeScript | Type-safe Development |
| Tailwind CSS | Styling |
| DaisyUI | UI Components |
| Better Auth | Authentication |
| MongoDB | Database |
| Vercel | Deployment |

---

## 📱 Responsive Design

DevStack Hub is designed to provide a smooth user experience across:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd Devstack
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> ⚠️ Never upload your real `.env` file or secret credentials to GitHub.

### 5. Run the Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🔒 Authorization Flow

```text
Guest
  └── Home, About, Contact

Registered / Logged-in User
  └── Home, About, Contact, Explore, Add Item

Admin
  └── Full Access + Manage Items
```

New accounts are automatically assigned:

```text
role: "user"
```

Only users with:

```text
role: "admin"
```

can access admin-specific functionality such as **Manage Items**.

---

## 🚀 Deployment

The application is deployed on Vercel.

**Live Website:**  
https://my-devstack-hub.vercel.app

---

## 👩‍💻 Author

**Swarna Saha**

GitHub: `https://github.com/Swarna-Saha324/Devstack`

---

## 📄 License

This project is developed for educational and learning purposes.

---

⭐ If you like this project, consider giving the repository a star!
