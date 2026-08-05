# NIAI AI / Machine Learning / Deep Learning Course

Simple static teaching website built from the official NIAI (NETSOL Institute of AI) curriculum.

## Features

- Detailed theory written for 12th-grade / beginner level
- Step-by-step numerical examples with small datasets
- Formulas + worked solutions
- Interactive **Slide Mode** (▶ Slides button or ← → keys)
- Self-checking MCQ quizzes
- Pure HTML/CSS/JS — deploys on GitHub Pages with zero build step

## Live structure

```
├── index.html          # Course roadmap
├── assets/
│   ├── css/style.css
│   └── js/main.js
└── module1/
    └── index.html      # Foundation (Math + Probability + Programming)
```

## How to run locally

```bash
# any static server, for example:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Settings → Pages → Source: Deploy from branch `main` / root
3. Site will be live at `https://<username>.github.io/<repo-name>/`

## Progress

| Module | Status |
|--------|--------|
| 1 Foundation | ✅ Live |
| 2 AI/ML & Cloud | Coming |
| 3 Data Pipeline | Coming |
| … | … |
