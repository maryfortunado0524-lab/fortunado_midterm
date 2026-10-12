# Black & White Personal Portfolio

A responsive ReactJS portfolio styled with Tailwind CSS v4 and custom CSS.

## Included
- Home / welcome and introduction
- About me and personal background
- Skills and technologies
- Projects: Calculator and To-Do List, with live project links and filters
- Resume / CV: education, project experience, technical skills
- Contact form with required-field validation and mailto handoff
- Responsive mobile navigation
- Email copy interaction
- Smooth scrolling and hover transitions

## 1. Run locally
Install Node.js (LTS) first: https://nodejs.org/

Open this folder in VS Code. In the VS Code terminal run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

## 2. Personalize before submitting
In `src/App.jsx`, replace:
- `Jerry Cabiles` if you want a different display name
- `your.email@example.com` with your real email (there are multiple occurrences)
- Education and personal background text with your accurate details
- GitHub and LinkedIn profile URLs in the footer with your own URLs
- Project links if your deployed URLs change

## 3. Build check
```bash
npm run build
```
Vite creates the production website in `dist/`.

## 4. Push to GitHub
Create an empty repository on GitHub, then run these commands from the project folder (replace the URL):

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If Git asks you to sign in, follow the browser authentication prompt.

## 5. Deploy to Vercel
1. Sign in at https://vercel.com/
2. Click **Add New → Project**.
3. Import your GitHub repository.
4. Vercel should detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.
8. Open the deployed URL and test navigation, project links, mobile layout, and the contact form.

### Notes
- The contact form uses `mailto:`; it opens the visitor's configured email app. It does not save submissions to a database. For a backend-powered form, connect a form service or build an API.
- Update placeholder contact details before publishing.
