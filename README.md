# Caio Caminha - Professional Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-purple?style=for-the-badge&logo=framer)

A modern, high-performance **Single Page Application (SPA)** portfolio built to showcase software engineering skills, experience, and projects. Designed with a focus on accessibility, performance (Core Web Vitals), and a polished user experience.

🔗 **Live Demo:** [caiocaminha.vercel.app](https://caiocaminha.vercel.app)

## 🚀 Key Features

- **🎨 Dynamic Theming:** **Dark/Light mode** toggle with persistent state using `next-themes`.
- **🌐 Internationalization (i18n):** Custom lightweight **language switcher (EN/PT)** using React Context, enabling instant translation without page reloads.
- **✨ Animations:** Smooth, native-feeling transitions and micro-interactions powered by **Framer Motion**.
- **📱 Responsive Design:** Fully responsive layout with mobile-first principles, utilizing **Tailwind CSS**.
- **🖼️ Image Optimization:** Automatic image resizing, lazy loading, and blur-up placeholders using `next/image`.
- **🔍 Interactive Project Gallery:** Custom-built image carousel and zoom modal for detailed project inspection.

## 🛠️ Technology Stack

| Category       | Technology                                                |
| :------------- | :-------------------------------------------------------- |
| **Framework**  | [Next.js 14](https://nextjs.org/) (App Router)            |
| **Language**   | [TypeScript](https://www.typescriptlang.org/)             |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com/)                  |
| **Animation**  | [Framer Motion](https://www.framer.com/motion/)           |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons/) |
| **Deployment** | [Vercel](https://vercel.com/)                             |

## 📂 Project Structure

```bash
src/
├── app/                # App Router pages and layouts
│   ├── projects/       # Dynamic project detail routes ([slug])
│   ├── layout.tsx      # Root layout (Theme & Language providers)
│   └── page.tsx        # Main entry point (SPA sections)
├── components/
│   ├── layout/         # Structural components (Navbar, Footer)
│   ├── sections/       # Page sections (Hero, About, Experience, etc.)
│   └── ui/             # Reusable UI primitives (Buttons, Cards, Modals)
├── context/            # React Context (LanguageContext)
├── data/               # Centralized content dictionaries (EN/PT)
└── lib/                # Utility functions (cn class merger)
```

## 🔧 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Caioncaminha/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app.

4.  **Build for production:**
    ```bash
    npm run build
    npm start
    ```

## 🎨 Design Decisions

- **Atomic Design:** Components are strictly separated into generic `ui/` primitives and domain-specific `sections/` to ensure reusability and maintainability.
- **Data-Driven Content:** All text content is centralized in `src/data/dictionaries.ts`. This makes updating text or adding new languages trivial without touching the codebase.
- **Performance First:** Heavy assets are optimized, and layout shift (CLS) is minimized by using aspect-ratio boxes for images.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Developed by **Caio Caminha**
