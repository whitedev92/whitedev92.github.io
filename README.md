# whitedev92 — Developer Portfolio

Modern, high-performance portfolio featuring **Money at Risk**, **HisabSet**, **On-It**, and **Poji**. Built specifically for fast, zero-dependency hosting on GitHub Pages.

## 🚀 Live URL
Once deployed, your portfolio will be live at:
**`https://whitedev92.github.io`** (or `https://whitedev92.github.io/portfolio/`)

---

## 🛠️ Step-by-Step Deployment Instructions

### Method 1: Host at `whitedev92.github.io` (Recommended as your main site)

1. Open [github.com/new](https://github.com/new) and create a new public repository named:
   **`whitedev92.github.io`**
   *(Make sure to leave "Add a README file" unchecked)*

2. Open your PowerShell or terminal and run the following commands:
   ```powershell
   cd C:\Users\lenovo\.gemini\antigravity-ide\scratch\portfolio
   git init
   git branch -M main
   git add .
   git commit -m "Launch whitedev92 portfolio"
   git remote add origin https://github.com/whitedev92/whitedev92.github.io.git
   git push -u origin main
   ```

3. That's it! GitHub Pages automatically activates for repos named `username.github.io`. Your site will be live at:
   👉 **`https://whitedev92.github.io`**

---

### Method 2: Host as a project repository (e.g., `portfolio`)

If you want your site at `https://whitedev92.github.io/portfolio`:

1. Create a public repository named **`portfolio`** at [github.com/new](https://github.com/new).
2. Run:
   ```powershell
   cd C:\Users\lenovo\.gemini\antigravity-ide\scratch\portfolio
   git init
   git branch -M main
   git add .
   git commit -m "Launch whitedev92 portfolio"
   git remote add origin https://github.com/whitedev92/portfolio.git
   git push -u origin main
   ```
3. In your repo on GitHub: Go to **Settings** > **Pages** (in the left sidebar).
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your site will be live at:
   👉 **`https://whitedev92.github.io/portfolio/`**

---

## 📂 Project Structure
- [`index.html`](file:///C:/Users/lenovo/.gemini/antigravity-ide/scratch/portfolio/index.html) — Main semantic markup & layout
- [`index.css`](file:///C:/Users/lenovo/.gemini/antigravity-ide/scratch/portfolio/index.css) — Custom dark mode styling, glow effects, responsive grid
- [`projects-data.js`](file:///C:/Users/lenovo/.gemini/antigravity-ide/scratch/portfolio/projects-data.js) — Your project configurations, repository links, tags, and bio
- [`script.js`](file:///C:/Users/lenovo/.gemini/antigravity-ide/scratch/portfolio/script.js) — Dynamic rendering engine for project cards and skills
