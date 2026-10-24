# Etanshu Sangwan — Personal Developer Portfolio

A responsive static portfolio website built with HTML, CSS and vanilla JavaScript. It uses a dark dashboard shell with light project cards.

## Files

- `index.html` — page structure and content sections
- `style.css` — responsive design, animations and theme styles
- `script.js` — project rendering, navigation, theme toggle and email-copy interaction
- `projects.js` — the easiest place to edit profile details, skills and project cards
- `assets/profile.jpg` — add your own portrait here (not included yet)

## Preview locally

1. Keep all files in the same folder.
2. Create an `assets` folder inside it.
3. Add your own portrait as `assets/profile.jpg` (optional).
4. Open `index.html` in a browser. For the most reliable preview, use VS Code with Live Server, or run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

No Python packages or build tools are required.

## Customize projects

Open `projects.js` and edit the `window.portfolioProjects` array. For each project:
- `title`: displayed title
- `category`: short category label
- `status`: `Live` or `In progress`
- `description`: honest summary of what works
- `technologies`: array of tags
- `liveUrl`: actual deployed app URL, or `""` until ready
- `githubUrl`: actual repository URL, or `""` until ready
- `preview`: `emi` or `expense` (controls the decorative preview colors)

Keep URLs blank until you have a real destination. Don't put passwords, API keys, private financial data, or other secrets in this public file.

Update `portfolioConfig.linkedin` with your exact LinkedIn profile URL when you have it. The LinkedIn shortcut stays hidden while the URL is blank.

## Add your real photo

Put your own photo at `assets/profile.jpg`. Use a photo you are comfortable making public. The site will keep showing the initials placeholder if the image is missing.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new **public** repository named `etanshusangwan.github.io` (or use another repo name if you prefer a project-site URL).
2. Upload `index.html`, `style.css`, `script.js`, `projects.js`, `README.md`, and the `assets` folder if you added a photo. The files must be at the repository root, not nested inside an extra project folder.
3. Open the repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the Pages deployment to finish. For the repository named `etanshusangwan.github.io`, the expected address is `https://etanshusangwan.github.io/`. Check the Pages settings for the actual published URL.
7. After changing files, commit the updates and allow Pages to redeploy.

## Privacy and security

This is a public static website. Anyone can view its published content and inspect the client-side files. Visitors cannot edit the GitHub repository just by visiting the website, but anyone with write access to the repository can change the source. Protect your GitHub account with two-factor authentication and never commit secrets. Do not put private financial records or passwords on this site.

There is no admin login in this first version. You edit the public source files in your GitHub repository. A future in-site admin editor would need a secure backend and authentication; a password hidden in HTML or JavaScript would not be secure.
https://etanshusangwan.github.io/
