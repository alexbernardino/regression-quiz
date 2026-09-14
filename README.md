# Regression Quiz

A standalone, browser-only formative quiz in the style of KNN Quiz. Nineteen questions cover ordinary least squares, query residuals, noise, centering, identifiability, influential observations, training/test evaluation, R², parameter space, Gauss–Markov, covariance ellipses and parameter/prediction variance. No regularization questions.

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

## Student QR code

Scan or download [the quiz QR code](public/regression-quiz-qr.png) to open https://alexbernardino.github.io/regression-quiz/.

![Regression Quiz QR code](public/regression-quiz-qr.png)

## Editing the question bank

Edit app/questions.ts. Each question has four options and a zero-based answer index (0–3), an explanation, an experiment, and a section. Update the question-count assertion in tests/questions.test.mjs if you change the total.

The content has been checked against the supplied 2_Linear_Regression.tex lecture. This remains a demo-focused companion, not a comprehensive assessment of multiple-output, polynomial, RBF or kernel regression. Centering and exact rank deficiency are lecture-based thought experiments; the quiz does not claim the demo has controls for them. It uses β₀ for intercept, β₁ for slope and Σβ for parameter covariance. The formal consistency question was replaced with an intuitive parameter-variance question. Gauss–Markov's covariance guarantee is distinguished from exact Gaussian confidence-region coverage. Additional theory reference: https://www.stat.purdue.edu/~fmliang/STAT512/lect3.pdf
