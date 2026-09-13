# Regression Quiz

A standalone, browser-only formative quiz in the style of KNN Quiz. Sixteen questions cover ordinary least squares, query residuals, noise, influential observations, training/test evaluation, R², parameter space, Gauss–Markov, covariance ellipses and consistency. No regularization questions.

Each answer immediately reveals feedback and a suggested experiment in [Regression Interactive](https://alexbernardino.github.io/regression-interactive/). Answers lock after selection; students can review or restart. Scores stay in memory and reset on reload; nothing is submitted or stored on a server.

## Local testing

Use Node.js 22.13 or newer:

```sh
npm ci
npm run dev
```

Open http://localhost:3000 (or the alternative port printed in the terminal).

```sh
npm test
npm run build:pages
```

## GitHub Pages

Create a public repository named regression-quiz on alexbernardino's GitHub account. Push this folder to its main branch. In Settings → Pages, select GitHub Actions as the build source. The included workflow builds and deploys on pushes to main; you can also start it manually in Actions.

Expected address after successful deployment: https://alexbernardino.github.io/regression-quiz/

The workflow supplies the repository base path. Local Pages builds default to /regression-quiz. No cloud server or API keys are needed.

## Editing questions

Edit app/questions.ts. Each question has four options and a zero-based answer index (0–3), an explanation, an experiment, and a section. Update the question-count assertion in tests/questions.test.mjs if you change the total.

The content uses the requested regression topics, not a verified copy of the course slides. Review terminology against your lectures before assigning. The Gauss–Markov questions distinguish its finite-sample BLUE guarantee from consistency and from exact confidence-region coverage. Theory checked against Purdue STAT512 Chapter 3: https://www.stat.purdue.edu/~fmliang/STAT512/lect3.pdf
