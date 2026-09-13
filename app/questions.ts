export type Question = {
  section: string; category: string; prompt: string; options: string[];
  answer: number; explanation: string; experiment: string;
};

// Answers are zero-based. Keep one unambiguously correct option per question.
export const questions: Question[] = [
  {
    "section": "Fitting",
    "category": "Least squares",
    "prompt": "What does ordinary least squares minimize? ",
    "options": [
      "The sum of squared vertical residuals on training points",
      "The distances from the estimate to the ground truth parameters",
      "The sum of squared residuals on test points",
      "The perpendicular distances to the line"
    ],
    "answer": 0,
    "explanation": "A residual is the observed y minus the predicted y at the same x. Ordinary least squares chooses slope and intercept to minimize the sum of their squares on the training set.",
    "experiment": "Add a training point far above the line and watch the fit move toward it."
  },
  {
    "section": "Fitting",
    "category": "Query residual",
    "prompt": "For a query with observed y = 8, the fitted line predicts ŷ = 5. What is its signed residual y − ŷ?",
    "options": [
      "−3",
      "13",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "The signed residual is 8 − 5 = 3. The query lies three vertical units above the prediction. Adding a query alone does not refit the model.",
    "experiment": "Place a query above the fitted line. Compare the vertical gap with its reported error."
  },
  {
    "section": "Fitting",
    "category": "Noise",
    "prompt": "With the same number and spread of training points, what usually happens when the noise variance increases?",
    "options": [
      "The observations move closer to the ground truth line",
      "The true slope must change",
      "The fitted line becomes exact",
      "The observations scatter more and parameter estimates vary more across samples"
    ],
    "answer": 3,
    "explanation": "Larger noise variance increases vertical scatter. Under the linear model it also increases the covariance of the fitted slope and intercept; the ground truth itself is unchanged.",
    "experiment": "Use zero outliers. Compare low and high noise while repeatedly resampling training data."
  },
  {
    "section": "Fitting",
    "category": "Influential points",
    "prompt": "Why can one manually added training point far from the existing x values noticeably move the fitted line?",
    "options": [
      "Manual points are always ignored",
      "A distant x value has high leverage; a large residual there can strongly influence the fit",
      "Least squares only uses the last point added",
      "Test points determine the slope"
    ],
    "answer": 1,
    "explanation": "A point far from the training x mean has high leverage. If it is also inconsistent with the current line, its squared residual can pull the least-squares solution substantially.",
    "experiment": "Add a training point far to the right and away from the line, then delete it and compare."
  },
  {
    "section": "Performance",
    "category": "Independent test data",
    "prompt": "What stays fixed when you resample only the test data?",
    "options": [
      "The fitted line and the estimated parameter covariance",
      "The test R² in every run",
      "Every observed point",
      "The test residuals"
    ],
    "answer": 0,
    "explanation": "The model and its covariance estimate use training data. New test observations can change measured test performance without changing the trained predictor.",
    "experiment": "Press Test resample several times. Watch test R² while checking that the line and parameter estimate stay fixed."
  },
  {
    "section": "Performance",
    "category": "Interpreting R²",
    "prompt": "A test set has nonzero variation in y. What does a negative test R² mean?",
    "options": [
      "The slope must be negative",
      "The code must be wrong",
      "The model has zero residuals",
      "Its squared error exceeds that of predicting the test-set mean for every test point"
    ],
    "answer": 3,
    "explanation": "R² = 1 − SSE/SST, where SST measures squared deviations from that evaluation set's mean. Negative R² means SSE > SST. It can occur on held-out data; it is not the sign of the slope.",
    "experiment": "Try a small training set with substantial noise. Resample test data and inspect how widely test R² can vary."
  },
  {
    "section": "Performance",
    "category": "Generalization",
    "prompt": "Why is a high training R² alone insufficient evidence of good prediction on new observations?",
    "options": [
      "Test data are used to choose the fitted line",
      "The training score evaluates the same points used for fitting; independent test data assess unseen observations",
      "R² cannot be computed on training data",
      "A high training R² guarantees the ground truth parameters were recovered"
    ],
    "answer": 1,
    "explanation": "A model can fit its training observations well and still predict poorly on new data. Small or unrepresentative samples make this particularly visible.",
    "experiment": "Use few training points, then resample only the test set and compare training and test R²."
  },
  {
    "section": "Performance",
    "category": "Two sources of variation",
    "prompt": "Test R² changes after a test-only resample. Is this evidence that the fitted predictor changed?",
    "options": [
      "Yes, every score change means a new model",
      "Yes, the true slope changed",
      "No; a finite test sample introduces evaluation variability even for a fixed predictor",
      "No; test performance must therefore be meaningless"
    ],
    "answer": 2,
    "explanation": "Evaluation variability comes from which test observations are drawn. Predictor variance concerns how the fitted model changes when the training sample changes. These are different sources of variation.",
    "experiment": "Compare Test resample with Train resample. Only the latter can change the fitted line."
  },
  {
    "section": "Parameter space",
    "category": "Reading the plot",
    "prompt": "What does one estimated point in the slope–intercept plot represent?",
    "options": [
      "One fitted line in the data plot",
      "One training observation",
      "A test-set R² value",
      "One noise sample"
    ],
    "answer": 0,
    "explanation": "Each slope–intercept pair specifies a line y = slope × x + intercept. The estimate and ground truth correspond to fitted and generating lines, respectively.",
    "experiment": "Resample training data and follow the estimate in parameter space and its corresponding fitted line. Use Fit axes if needed."
  },
  {
    "section": "Parameter space",
    "category": "Unbiasedness",
    "prompt": "Under the Gauss–Markov assumptions, an OLS estimate misses the ground truth point in one run. Does that contradict unbiasedness?",
    "options": [
      "Yes; unbiased means exact on every sample",
      "Yes; the true parameters must lie at the estimate",
      "No; unbiasedness only means a high training R²",
      "No; unbiasedness means the expected estimate over repeated samples equals the true parameters"
    ],
    "answer": 3,
    "explanation": "Random errors move the estimate from run to run. Unbiasedness is an average property of the sampling distribution, not a guarantee for one fitted line.",
    "experiment": "With zero outliers, repeat Train resample. Observe estimates on different sides of the truth; a few runs illustrate, but do not prove, unbiasedness."
  },
  {
    "section": "Parameter space",
    "category": "Gauss–Markov assumptions",
    "prompt": "Which conditions support the classical OLS BLUE guarantee, conditional on the training x values?",
    "options": [
      "Gaussian errors alone, even with a wrong mean model",
      "A correct linear mean, full-rank design, zero-mean errors, equal finite error variance and uncorrelated errors",
      "Any dataset, including arbitrary contamination",
      "Zero noise and identical x values"
    ],
    "answer": 1,
    "explanation": "The theorem requires a correctly specified linear mean, identifiable parameters and errors with zero conditional mean and covariance σ²I. Gaussianity is not required for BLUE. Equal x values make slope and intercept unidentifiable.",
    "experiment": "Start with zero outliers and a nonzero x range. Contrast this clean model with contaminated data; the demo illustrates assumptions rather than proving them."
  },
  {
    "section": "Parameter space",
    "category": "What “best” means",
    "prompt": "Gauss–Markov says OLS is BLUE. What does “best” mean here?",
    "options": [
      "Smallest error on every individual dataset",
      "Highest test R² among all possible methods",
      "Minimum variance for every linear combination of parameters among estimators linear in y and unbiased under the model",
      "The estimate always equals the ground truth"
    ],
    "answer": 2,
    "explanation": "The comparison is within linear unbiased estimators, for a fixed full-rank design. No such competitor has smaller variance for any chosen parameter combination. This is not a guarantee of the closest estimate on a particular sample.",
    "experiment": "Repeat training resamples in the clean model. Even with the theorem's guarantee, some fitted estimates will be far from the truth."
  },
  {
    "section": "Parameter space",
    "category": "Covariance ellipses",
    "prompt": "What does an elongated covariance ellipse indicate?",
    "options": [
      "The estimated parameters have more uncertainty along its long direction than along its short direction",
      "All observed data points lie inside it",
      "The ground truth must be inside it on every run",
      "The fitted slope is certainly biased"
    ],
    "answer": 0,
    "explanation": "Ellipse directions describe joint parameter uncertainty. An elongated shape indicates combinations of slope and intercept that are less precisely determined. Estimated ellipses are not guaranteed to contain the truth, and nominal coverage requires additional distributional assumptions or approximations.",
    "experiment": "Compare a narrow x range with a wider one using zero outliers. Inspect ellipse shape and the movement of estimates across training resamples."
  },
  {
    "section": "Parameter space",
    "category": "Spread of x",
    "prompt": "With the same training count and noise variance, why does a wider spread of x typically improve slope precision?",
    "options": [
      "Because it forces the slope to zero",
      "Because test data enter the fit",
      "Because increasing x eliminates all noise",
      "Because Var(slope estimate | X) = σ² / Σ(xᵢ − x̄)²"
    ],
    "answer": 3,
    "explanation": "More spread increases the denominator and decreases slope variance. This describes uncertainty across samples under the model, not guaranteed improvement of every realized estimate.",
    "experiment": "Keep the sample count and noise fixed, use zero outliers, and compare x ranges [−1, 1] and [−5, 5]. Watch slope uncertainty."
  },
  {
    "section": "Parameter space",
    "category": "Ellipse tilt",
    "prompt": "For positive training mean x̄, how are slope and intercept estimation errors related in the clean model?",
    "options": [
      "They must be identical",
      "They have negative covariance: an increased slope can be offset by a decreased intercept",
      "Their covariance is always zero",
      "Their covariance is always positive"
    ],
    "answer": 1,
    "explanation": "For y = ax + b, Cov(â, b̂ | X) = −x̄σ² / Σ(xᵢ − x̄)². This trade-off tilts the ellipse. Centering the training x values at zero makes the covariance zero under the model.",
    "experiment": "Compare a range centered near zero with a range entirely on the positive side. Check ellipse tilt and remember the finite-sample x mean need not equal the range midpoint."
  },
  {
    "section": "Parameter space",
    "category": "More data and consistency",
    "prompt": "With a correctly specified model and a stable, nondegenerate x distribution, what should happen as the training size grows?",
    "options": [
      "Each new point must improve test R²",
      "The estimate is exactly correct after a fixed number of samples",
      "The parameter estimates concentrate near the truth, although individual runs still vary",
      "The observation noise itself disappears"
    ],
    "answer": 2,
    "explanation": "With independent zero-mean finite-variance errors and an informative design as the sample grows, OLS is consistent and its parameter variance decreases. Gauss–Markov's finite-sample BLUE statement alone is not a consistency theorem. Observation noise remains.",
    "experiment": "With zero outliers and the same noise and x range, compare many training resamples at small and large sample sizes."
  }
];

