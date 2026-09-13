export type Question = {
  section: string; category: string; prompt: string; options: string[];
  answer: number; explanation: string; experiment: string;
};

// Answers are zero-based. Keep one unambiguously correct option per question.
export const questions: Question[] = [
  {
    "section": "Fitting",
    "category": "Least squares",
    "prompt": "What does ordinary least squares (OLS) minimize?",
    "options": [
      "The sum of squared vertical residuals on training points",
      "The distances from the estimate to the ground truth parameters",
      "The sum of squared residuals on test points",
      "The perpendicular distances to the line"
    ],
    "answer": 0,
    "explanation": "A residual is the observed y minus the predicted y at the same x. OLS chooses intercept β₀ and slope β₁ in ŷ = β₀ + β₁x to minimize the sum of squared errors (SSE) on the training set.",
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
    "section": "Fitting",
    "category": "Centering",
    "prompt": "If both training x and training y are centered by subtracting their sample means, what is the OLS intercept in the centered coordinates?",
    "options": ["The original intercept β₀", "Zero", "The fitted slope β₁", "It cannot be determined even with a full-rank design"],
    "answer": 1,
    "explanation": "With an intercept included and a full-rank design, β̂₀ = ȳ − β̂₁x̄. Both centered sample means are zero, so the centered intercept is zero; the slope is unchanged. Merely choosing a sampling range centered on zero does not exactly center a finite sample.",
    "experiment": "Use the lecture's centering exercise: subtract the actual training means from every x and y. The demo has no exact sample-centering button; setting the generating intercept to zero is not the same operation."
  },
  {
    "section": "Fitting",
    "category": "Identifiability",
    "prompt": "If all training inputs equal the same value c, can OLS uniquely determine both β₀ and β₁?",
    "options": ["Yes, if there are at least two observations", "Yes, if the noise is Gaussian", "No; the observations identify only the combination β₀ + cβ₁", "Yes, because test data supply the missing equation"],
    "answer": 2,
    "explanation": "The columns 1 and x of the design matrix are dependent, so XᵀX is singular. Many slope–intercept pairs give the same fitted value at c. More observations at that same x do not resolve the ambiguity.",
    "experiment": "In the lecture's normal equations, replace every x by c. In the demo, narrow the x range to approach this situation and observe slope instability; the interface may prevent an exactly zero-width range."
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
    "explanation": "Each pair specifies a line y = β₀ + β₁x. The horizontal axis is slope β₁ and the vertical axis is intercept β₀; the lecture writes the parameter vector in the opposite order, (β₀, β₁). The estimate and ground truth correspond to fitted and generating lines.",
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
    "prompt": "Which conditions make OLS a Best Linear Unbiased Estimator (BLUE), treating the training design X as fixed?",
    "options": [
      "Gaussian errors alone, even with a wrong mean model",
      "A correct linear mean, full-rank design, zero-mean errors, equal finite error variance and uncorrelated errors",
      "Any dataset, including arbitrary contamination",
      "Zero noise and identical x values"
    ],
    "answer": 1,
    "explanation": "As in the lecture, y = Xβ + w, with known full-column-rank X, E[w] = 0 and Cov(w) = σ²I. Then E[β̂] = β and Σβ = Cov(β̂) = σ²(XᵀX)⁻¹. Gaussian noise is not required for BLUE. For random X, use the corresponding assumptions conditional on X.",
    "experiment": "Start with zero outliers and a nonzero x range. Contrast this clean model with contaminated data; the demo illustrates assumptions rather than proving them."
  },
  {
    "section": "Parameter space",
    "category": "What “best” means",
    "prompt": "Gauss–Markov says OLS is a Best Linear Unbiased Estimator (BLUE). What does “best” mean here?",
    "options": [
      "Smallest error on every individual dataset",
      "Highest test R² among all possible methods",
      "Minimum variance for every linear combination of parameters among estimators linear in y and unbiased under the model",
      "The estimate always equals the ground truth"
    ],
    "answer": 2,
    "explanation": "For another linear unbiased estimator β̃ = Py, Cov(β̃) − Σβ is positive semidefinite. Thus no such competitor has smaller variance for any chosen linear combination of parameters. This compares sampling covariance at fixed X, not errors on one particular sample.",
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
      "Because greater x spread reduces the variance of the estimated slope β̂₁"
    ],
    "answer": 3,
    "explanation": "In one-feature regression, the lecture's matrix covariance gives Var(β̂₁ | X) = σ² / Σ(xᵢ − x̄)². More x spread increases the denominator and reduces slope variance. This is an implication of Σβ, not a guarantee of improvement on every realized sample.",
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
    "explanation": "For y = β₀ + β₁x, the lecture's matrix formula implies Cov(β̂₁, β̂₀ | X) = −x̄σ² / Σ(xᵢ − x̄)². This trade-off tilts the ellipse. Exact centering of the training x values makes this covariance zero under the model.",
    "experiment": "Compare a range centered near zero with a range entirely on the positive side. Check ellipse tilt and remember the finite-sample x mean need not equal the range midpoint."
  },
  {
    "section": "Parameter space",
    "category": "More data and parameter variance",
    "prompt": "In the clean linear model, what typically happens across training resamples when you collect more points from the same informative x distribution?",
    "options": [
      "Each new point must improve test R²",
      "The estimate is exactly correct after a fixed number of samples",
      "The parameter estimates concentrate near the truth, although individual runs still vary",
      "The observation noise itself disappears"
    ],
    "answer": 2,
    "explanation": "More informative training data typically reduce parameter covariance Σβ, so the fitted slope and intercept vary less across repeated training samples. A particular new sample need not be closer to the truth, and the observation noise itself does not disappear.",
    "experiment": "With zero outliers and the same noise and x range, compare many training resamples at small and large sample sizes."
  },
  {
    "section": "Parameter space",
    "category": "Prediction location",
    "prompt": "Under the clean linear model, where is the fitted prediction ŷ(x₀) least variable across training-noise realizations at fixed training x values?",
    "options": ["At the training x mean x̄", "As far from the training points as possible", "At every x equally", "Always at x₀ = 0, regardless of the training mean"],
    "answer": 0,
    "explanation": "The lecture's prediction-variance formula becomes Var(ŷ(x₀) | X) = σ²[1/n + (x₀ − x̄)² / Σ(xᵢ − x̄)²]. It is smallest at x̄ and grows with distance from it. Predicting a new noisy observation adds another σ² to the error variance; this formula describes uncertainty in the fitted mean.",
    "experiment": "Use zero outliers. Keep a query near the center of the x range and resample training data repeatedly; then repeat with a fixed query farther away. Compare prediction fluctuations, not just one residual. The demo also redraws training x, so this illustrates rather than isolates the fixed-X formula."
  }
];
