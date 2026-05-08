// AI/ML Lessons for IT Fresher Hub
// Scenario: Priya joins the AI team at TCS Bangalore
import type { LessonContent } from "@/types";

export const AI_ML_LESSONS: LessonContent[] = [
  {
    title: "What is Artificial Intelligence? Beyond the Buzzword",
    content:
      "Priya just got her offer letter from TCS. Her role? Junior AI Engineer. She calls her dad, excited, but when he asks 'What is AI exactly?' she pauses. She has used the word a hundred times but never truly explained it.\n\nArtificial Intelligence is teaching computers to do things that normally require human intelligence — understanding language, recognising faces, making decisions, and learning from experience. It is not magic. It is not the Terminator. It is maths plus data plus clever algorithms, working together to solve problems at scale.\n\nThink of AI as a spectrum. At one end you have simple rule-based systems — like a spam filter that blocks emails containing the word 'free money'. At the other end you have systems like GPT-4 that can write poetry, debug code, and explain quantum physics. Everything in between is also AI. When TCS uses AI to predict which projects will run over budget, or when your UPI app detects a suspicious transaction, that is real-world AI in action — not sci-fi, just clever software.",
    funFact:
      "The term 'Artificial Intelligence' was coined in 1956 by John McCarthy at a summer workshop at Dartmouth College. The original proposal said they would solve the problem of AI in two months. We are still working on it 68 years later.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's team uses software that automatically detects fraudulent bank transactions. Which best describes this AI application?",
      options: [
        "A robot that physically checks ATMs",
        "A pattern-recognition system trained on historical fraud data",
        "A human analyst working faster with better tools",
        "A database that stores transaction records",
      ],
      correctAnswer:
        "A pattern-recognition system trained on historical fraud data",
      explanation:
        "Fraud detection AI learns patterns from millions of past transactions — legitimate vs fraudulent — and applies those patterns to flag suspicious new transactions in real time. That is pattern recognition, a core AI capability.",
    },
  },
  {
    title: "AI vs Machine Learning vs Deep Learning",
    content:
      "On Priya's first day her tech lead Arjun draws three concentric circles on a whiteboard: 'This is the most important diagram you will see here.' The outermost circle is AI. Inside it is Machine Learning. And inside that is Deep Learning.\n\nAI is the broadest idea — any technique that makes a machine seem intelligent. Machine Learning is a subset of AI where machines learn from data without being explicitly programmed for every case. Instead of writing rules like 'if transaction > 10000 AND location is different, flag it', you show the system thousands of fraud examples and let it figure out the rules itself. Deep Learning is a subset of ML that uses multi-layered neural networks — loosely inspired by the human brain — to handle complex data like images, audio, and text.\n\nHere is a real analogy Arjun uses: AI is the goal of building a smart student. Machine Learning is letting the student study textbooks and learn from examples. Deep Learning is the student developing a gut feeling — intuition built from patterns so complex they cannot easily be explained, like recognising a face in a crowd even in poor lighting. All three are real and useful, but they each shine in different situations.",
    funFact:
      "A deep learning model trained on ImageNet in 2012 (AlexNet) cut the image classification error rate nearly in half overnight. That single event is often credited as the moment the modern AI gold rush began.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TCS builds a system to classify customer support tickets automatically. It learns from 50,000 past tickets. No one writes manual rules. Which category does this fall under?",
      options: [
        "Traditional rule-based programming",
        "Machine Learning",
        "Deep Learning",
        "Robotic Process Automation",
      ],
      correctAnswer: "Machine Learning",
      explanation:
        "The system learns patterns from historical data (past tickets and their categories) without explicit rules being programmed. That is the definition of Machine Learning. Deep Learning would be needed if the input were raw images or audio, not structured text tickets.",
    },
  },
  {
    title: "History of AI: From Theory to ChatGPT",
    content:
      "Priya needs to present the AI timeline to interns. She researches and finds the story is not a straight line — it is a rollercoaster with two major crashes called 'AI Winters'.\n\nThe journey starts in 1950 when Alan Turing asked 'Can machines think?' and proposed the Turing Test. In 1956 the term AI was coined. The 1960s-70s saw optimistic programs that could play chess but failed at anything else — leading to the first AI Winter when funding dried up. The 1980s brought Expert Systems (rules coded by humans — impressive but brittle). Another winter hit in the early 1990s.\n\nThe real breakthrough came in the late 2000s: massive datasets (thanks to the internet), cheap GPU computing (thanks to gaming), and better algorithms. In 2012 AlexNet crushed image recognition. In 2017 Google published the 'Attention is All You Need' paper — the birth of Transformers. In 2020 GPT-3 showed the world what language models could do. In 2022 ChatGPT hit 100 million users in 2 months — the fastest growing product in history. Priya's career is starting exactly at the inflection point.",
    funFact:
      "ENIAC, one of the first computers, weighed 30 tonnes and filled an entire room. ChatGPT runs on servers so powerful that the electricity cost for a single conversation is roughly what it costs to charge your phone halfway.",
    xpReward: 50,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "The 2017 Google paper '________ is All You Need' introduced the Transformer architecture that powers modern LLMs like ChatGPT.",
      correctAnswer: "Attention",
      explanation:
        "The paper 'Attention is All You Need' introduced the Transformer model using self-attention mechanisms. It replaced recurrent networks (RNNs/LSTMs) and became the foundation of BERT, GPT, and virtually every modern large language model.",
    },
  },
  {
    title: "AI Applications in Your Everyday Life",
    content:
      "Arjun challenges Priya: 'List 10 AI applications you used before 9am today.' She starts thinking — and is surprised how many she finds.\n\nHer alarm app used ML to predict the best time to wake her based on her sleep cycle data. Instagram used recommendation AI to show her relevant reels. Gmail's spam filter (AI) blocked 4 phishing emails. Google Maps used real-time traffic AI to suggest her route to the TCS office. Face ID used a deep learning model to unlock her phone. The UPI app flagged a suspicious login attempt (fraud detection AI). Autocorrect fixed three typos while she texted Arjun (NLP). And the TCS canteen checkout used a computer vision system to identify her food tray.\n\nIn enterprise settings, AI is everywhere: customer service chatbots that handle 80% of queries before a human gets involved, predictive maintenance that alerts factories before machines break, hiring tools that screen thousands of resumes, and financial models that make split-second trading decisions. The IT fresher who understands AI will be 10x more valuable than one who just knows how to code without it.",
    funFact:
      "Netflix saves approximately $1 billion per year in customer retention through its AI recommendation engine. If it shows you something you love exactly when you are about to cancel your subscription, that is not luck — that is a well-trained ML model.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which of these is NOT an AI application in a typical corporate IT environment?",
      options: [
        "Automatic ticket routing in helpdesk systems",
        "A USB cable connecting a keyboard to a computer",
        "Predictive analytics for project deadline risk",
        "Chatbot handling employee HR queries",
      ],
      correctAnswer: "A USB cable connecting a keyboard to a computer",
      explanation:
        "A USB cable is pure hardware — no intelligence involved. All the others use AI: ticket routing uses NLP classification, predictive analytics uses ML models on project data, and chatbots use NLP and dialogue management.",
    },
  },
  {
    title: "AI Ethics: The Questions That Matter",
    content:
      "In Priya's second week, her team discovers something uncomfortable: their hiring-screening AI is rejecting candidates with names that suggest they are from certain states. Nobody programmed that rule. The AI learned it from historical hiring data — data made by humans who had biases. The team spends three days fixing this.\n\nAI Ethics is not just philosophy — it is practical engineering. Bias in training data becomes bias in the model. If the data reflects past discrimination, the AI will automate and scale that discrimination. That is why diverse, representative datasets and regular bias audits are not optional. Fairness, accountability, and transparency (often called the FAT framework) are now core engineering requirements at companies like TCS, Wipro, and Infosys.\n\nOther key ethical questions: Privacy (should an AI be allowed to profile you based on your phone data?), Explainability (if a bank AI rejects your loan, you legally need to know why — 'the model said no' is not enough), and Accountability (when an autonomous car crashes, who is responsible — the programmer, the company, the AI?). These are not future problems. They are the questions Priya and her team face every single sprint.",
    funFact:
      "The EU AI Act (2024) is the world's first major AI regulation. It bans certain AI applications outright (like social scoring) and requires 'high-risk' AI systems (medical, hiring, credit scoring) to be transparent, auditable, and human-overseen.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's loan-approval AI has 95% accuracy but rejects applicants from rural addresses 3x more often. What is this an example of?",
      options: [
        "Normal statistical variation — nothing to worry about",
        "Algorithmic bias inherited from skewed training data",
        "A hardware failure in the model server",
        "Overfitting on the validation set",
      ],
      correctAnswer: "Algorithmic bias inherited from skewed training data",
      explanation:
        "High accuracy does not mean fairness. If historical approvals were biased against rural applicants, the model learns that pattern. Algorithmic bias can cause real harm at scale. Detecting and correcting it requires fairness metrics beyond overall accuracy.",
    },
  },
  {
    title: "Supervised Learning: Teaching with Examples",
    content:
      "Priya's manager Sneha explains Supervised Learning with a simple metaphor: 'Imagine teaching a child to recognise cats. You show them 1000 photos, each labelled CAT or NOT CAT. After seeing enough examples, the child can identify cats in photos they have never seen before. Supervised Learning is exactly that — but the child is an algorithm and the photos are your training data.'\n\nIn Supervised Learning, every training example has an input (features) and a correct output (label). The algorithm learns to map inputs to outputs. Once trained, you give it new inputs without labels and it predicts the output. Common supervised tasks: email spam detection (label: spam/not spam), house price prediction (label: actual price), medical diagnosis (label: disease/no disease).\n\nThe workflow at TCS for a supervised project goes like this: collect labelled data → split into train/validation/test sets → choose an algorithm → train on training data → tune on validation data → evaluate on test data → deploy. Sounds simple? The devil is in the details — getting enough quality labelled data is often the hardest, most expensive part of the entire project.",
    funFact:
      "Labelling data for supervised learning is a massive industry. Amazon Mechanical Turk employs thousands of humans to label images, transcribe audio, and verify data for AI companies. A single autonomous vehicle dataset can require 1000+ hours of human labelling work.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha gives Priya a dataset of 10,000 customer emails, each tagged as 'complaint', 'inquiry', or 'feedback'. What type of ML task is this?",
      options: [
        "Unsupervised clustering",
        "Supervised multi-class classification",
        "Reinforcement Learning",
        "Generative AI",
      ],
      correctAnswer: "Supervised multi-class classification",
      explanation:
        "The dataset has labelled examples (emails with known categories), making it supervised learning. Since there are three possible output classes (complaint, inquiry, feedback), it is specifically multi-class classification.",
    },
  },
  {
    title: "Unsupervised Learning: Finding Hidden Patterns",
    content:
      "A new client asks Priya's team: 'We have 2 million customer records but no one has ever categorised them. Can you find natural groups we should market to differently?' There are no labels. Nobody knows the answer in advance. This is where Unsupervised Learning comes in.\n\nUnsupervised Learning finds patterns in data without any pre-defined labels. The algorithm explores the data structure itself. The most common technique is clustering — grouping similar data points together. K-Means clustering, for example, automatically divides customers into groups where people in the same group have similar spending behaviour, age range, or product preferences. Nobody told it what the groups should be — it discovered them from the data.\n\nOther unsupervised techniques include dimensionality reduction (squeezing 500 features into 2 so you can visualise them — think PCA), anomaly detection (finding the unusual points — useful for fraud detection or quality control), and association rule learning (finding patterns like 'customers who buy nappies on Friday evenings also buy beer — probably new dads!' — this is how supermarkets design layouts). Unsupervised learning is exploratory — you do not know what you will find, which is what makes it both powerful and unpredictable.",
    funFact:
      "Target (US retail giant) infamously predicted pregnancies before customers announced them, by finding unsupervised patterns in purchase data. A father found out his teenage daughter was pregnant because Target sent pregnancy product coupons to his house.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's algorithm groups 500,000 bank customers into 5 segments based on transaction patterns — no labels were provided. Which technique did she most likely use?",
      options: [
        "Logistic Regression",
        "K-Means Clustering",
        "Decision Tree Classification",
        "Linear Regression",
      ],
      correctAnswer: "K-Means Clustering",
      explanation:
        "K-Means is the classic unsupervised clustering algorithm. With no labels provided, it groups data points by similarity. 'K' is the number of groups (5 in this case). It is ideal for customer segmentation when you do not know the groups in advance.",
    },
  },
  {
    title: "Classification vs Regression: Two Core ML Problems",
    content:
      "Priya's sprint board has two stories: one for predicting whether an employee will leave the company (yes/no) and another for predicting their expected last working date (a specific date). Same domain, same data — but two fundamentally different ML problems.\n\nClassification is about predicting a category — a discrete, named outcome. Will this customer churn? (Yes or No). Is this email spam? (Spam or Not Spam). What digit is in this image? (0 through 9). The output is always one of a fixed set of labels. Regression is about predicting a number — a continuous, measurable value. What will this house sell for? How many days until this machine needs maintenance? What will this stock price be tomorrow? The output is a real number on a scale.\n\nThe practical difference matters a lot when choosing algorithms. Logistic Regression (confusingly named — it IS a classification algorithm) outputs class probabilities. Linear Regression outputs numeric values. Decision Trees can do both. Choosing the wrong type is a common fresher mistake — Priya once spent two days building a regression model for a classification problem before Arjun spotted it during code review. Always define your output type first.",
    funFact:
      "Despite its name, Logistic Regression is used for classification, not regression. The 'regression' comes from the internal mathematics using a logistic (sigmoid) function to squeeze outputs between 0 and 1, which represent class probabilities.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to predict the exact salary (in rupees) a job applicant will demand based on their skills and experience. What type of ML problem is this?",
      options: [
        "Binary Classification",
        "Multi-class Classification",
        "Regression",
        "Clustering",
      ],
      correctAnswer: "Regression",
      explanation:
        "Salary is a continuous numerical value — any number in a range. Predicting a continuous number is regression. If instead she had to predict 'high salary / medium salary / low salary' it would be classification.",
    },
  },
  {
    title: "Training, Validation, and Test Splits",
    content:
      "Priya built her first model and got 99% accuracy. She was thrilled. Then Sneha asked the hard question: 'Did you evaluate it on data the model has never seen before?' Priya had trained and tested on the same data. Her model had essentially memorised the answers. This is called overfitting.\n\nThe standard fix is to split your dataset into three parts. Training set (typically 70-80%): the model learns from this data. Validation set (10-15%): you use this to tune hyperparameters and choose between models — think of it as practice exams. Test set (10-15%): you evaluate here exactly once at the very end — this is the final exam, no peeking allowed during development.\n\nWhy does this matter so much? Because the goal of ML is to generalise — to perform well on new, unseen data in the real world. A model that memorised the training data is useless in production. The validation set helps you catch overfitting early. The test set gives you an honest, unbiased estimate of real-world performance. Mixing these up is one of the most common and damaging mistakes in ML projects. Companies have shipped models that looked great in development and failed catastrophically in production because of this exact issue.",
    funFact:
      "In a famous 2020 study, an AI trained to detect COVID-19 from chest X-rays appeared to have 96% accuracy — but it was actually detecting scanner manufacturer labels and patient position markers, not the disease. The test set had leaked into training.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya is comparing 3 different ML models to pick the best one for deployment. Which data split should she use to make this comparison?",
      options: [
        "Training set",
        "Validation set",
        "Test set",
        "The full dataset",
      ],
      correctAnswer: "Validation set",
      explanation:
        "Model comparison and hyperparameter tuning should be done on the validation set. The test set is reserved for the very final evaluation — using it for model selection would give you an optimistically biased accuracy estimate in production.",
    },
  },
  {
    title: "Model Evaluation: Accuracy, Precision, Recall, F1",
    content:
      "Priya's fraud detection model has 99.5% accuracy. Everyone celebrates — until Arjun points out: 'Only 0.5% of transactions are fraudulent. A model that calls everything legitimate also gets 99.5% accuracy.' Accuracy alone can be deeply misleading.\n\nFor classification problems, four metrics matter: Accuracy (correct predictions / total predictions — great for balanced datasets, misleading for imbalanced ones). Precision (of all transactions flagged as fraud, how many actually were fraud? — minimises false alarms). Recall (of all actual fraudulent transactions, how many did the model catch? — minimises missed fraud). F1 Score (the harmonic mean of precision and recall — balances both concerns).\n\nChoosing the right metric depends on the cost of each error type. In fraud detection, missing real fraud (low recall) is catastrophic. In cancer screening, missing a tumour (low recall) is catastrophic. In email spam filtering, marking legitimate emails as spam (low precision) is annoying but not catastrophic. Priya's team now always sets up a confusion matrix before celebrating any model — a 2x2 grid showing true positives, false positives, true negatives, and false negatives. This single table tells the real story of model performance.",
    funFact:
      "Google's spam filter has precision near 99.9% — almost no legitimate emails land in spam. But its recall for spam is 'only' around 99.0%. That means billions of spam emails still reach inboxes daily, because even 1% of trillions is still enormous.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A cancer-detection AI misses 30% of actual cancer cases (but never falsely alarms). Which metric reveals this problem?",
      options: ["Accuracy", "Precision", "Recall", "F1 Score"],
      correctAnswer: "Recall",
      explanation:
        "Recall = True Positives / (True Positives + False Negatives). Missing 30% of actual cancer cases means 30% false negatives — very low recall. Accuracy and precision would look fine here, hiding the life-threatening flaw. Always check recall for medical/fraud scenarios.",
    },
  },
  {
    title: "Where to Get Data: Datasets and APIs",
    content:
      "Priya is assigned her first solo project: build a sentiment analysis model for customer reviews. First question: where does she get the data? This is the question every ML engineer faces on every project, and the answer shapes everything that follows.\n\nPublic datasets are the best starting point. Kaggle (kaggle.com) has tens of thousands of community datasets — everything from cricket statistics to medical imaging to Amazon product reviews. Hugging Face Datasets has thousands of NLP datasets ready to use. UCI Machine Learning Repository has been providing clean datasets since 1987. Google Dataset Search is a search engine specifically for datasets. For real-world projects, there are also APIs — Twitter/X API for social sentiment, Google Trends for search data, government open data portals (data.gov.in for India), and World Bank APIs for economic data.\n\nWhen no public data exists, you need to collect it yourself. This means web scraping (using Python's BeautifulSoup or Scrapy), database exports from existing company systems, surveys and forms, third-party data vendors, or synthetic data generation (AI generating training data for AI — increasingly common). The golden rule Priya learns: garbage in, garbage out. A brilliant algorithm trained on poor data will consistently outperform a poor algorithm trained on brilliant data.",
    funFact:
      "The ImageNet dataset, which powered the deep learning revolution, took 2.5 years to build. It has 14 million hand-labelled images across 20,000 categories. Building it required crowdsourcing via Amazon Mechanical Turk across 167 countries.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs labelled sentiment data (positive/negative reviews) for her project. Where should she look first?",
      options: [
        "Ask users to manually label data in a Google Form",
        "Search Kaggle for existing customer review datasets",
        "Generate random data using Python",
        "Use a Wikipedia dump",
      ],
      correctAnswer: "Search Kaggle for existing customer review datasets",
      explanation:
        "Kaggle has thousands of pre-labelled sentiment datasets (like the IMDB reviews dataset or Amazon reviews). Starting with existing public data saves weeks of labelling effort. Manual labelling and data generation are appropriate when no suitable public dataset exists.",
    },
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    content:
      "Priya downloads a customer churn dataset with 50 columns and 100,000 rows. She is itching to start building models. Arjun stops her: 'Never cook without tasting the ingredients first. Do your EDA.' Exploratory Data Analysis is the practice of profiling, visualising, and understanding your data before modelling.\n\nEDA asks fundamental questions: How many rows and columns? What data types are present? Are there missing values — how many and in which columns? What is the distribution of numeric features — are they skewed? What are the categorical column cardinalities? Are there outliers that look like data entry errors? Are there duplicate rows? How do features correlate with each other and with the target?\n\nThe tools: pandas (df.describe(), df.info(), df.isnull().sum()), matplotlib and seaborn for visualisations (histograms, box plots, correlation heatmaps, scatter plots). Priya spends two days on EDA and discovers that 40% of rows have missing age values, the 'days since last contact' column has outliers of 999 (a placeholder for 'never contacted'), and the target variable is heavily imbalanced — only 8% of customers churned. These discoveries completely change her approach. EDA is not optional prep work — it is the work.",
    funFact:
      "John Tukey, who coined the term 'Exploratory Data Analysis' in 1977, also invented the box plot and the stem-and-leaf plot. He said: 'An approximate answer to the right question is worth far more than a precise answer to the wrong question.'",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya runs df.isnull().sum() and finds that 'annual_income' has 15,000 missing values out of 100,000. What is the FIRST question she should ask?",
      options: [
        "Should I delete all rows with missing income?",
        "Why is income missing — is it random or systematic (e.g., only part-time workers)?",
        "Should I replace all missing values with the mean?",
        "Should I train the model without this column?",
      ],
      correctAnswer:
        "Why is income missing — is it random or systematic (e.g., only part-time workers)?",
      explanation:
        "Before deciding how to handle missing data, understand WHY it is missing. Missing at Random (MAR) and Missing Not At Random (MNAR) require very different strategies. If part-time workers simply did not have income listed, filling with the mean would introduce systematic error.",
    },
  },
  {
    title: "Handling Missing Values in Your Dataset",
    content:
      "Priya has identified 4 columns with significant missing data. Now she has to decide what to do. Her instinct is to delete rows with missing values. Arjun shakes his head: 'You would lose 30% of your dataset and introduce selection bias. Let me show you the proper options.'\n\nStrategy 1: Deletion — only acceptable if less than 5% of data is missing AND the missingness is completely random. Losing more data biases your model. Strategy 2: Mean/Median/Mode imputation — replace missing values with the column average (mean for symmetric distributions, median for skewed ones, mode for categorical). Simple and effective for small amounts of missing data. Strategy 3: Advanced imputation — use KNN Imputer (fill based on similar rows) or IterativeImputer (uses other features to predict the missing one). These preserve relationships between features. Strategy 4: Create a missing indicator — add a binary column 'was_income_missing' alongside the imputed value, so the model can learn from the fact that data was missing.\n\nPriya's final approach: median imputation for 'annual_income' (it was right-skewed), mode for 'job_category' (categorical), KNN imputer for 'credit_score', and a missing indicator flag for all three. This approach, documented in her Jupyter notebook, impresses the client when she presents it — showing she understood the data, not just blindly applied a tool.",
    funFact:
      "During the 2020 US COVID data collection, many states reported -9999 as the value for 'unknown age' in their datasets. Automated ML pipelines that did not handle missing value codes treated -9999 as a real age, producing spectacularly wrong age-mortality models.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has a 'salary' column that is right-skewed (most people earn 3-8 LPA, but a few earn 80+ LPA). Which imputation method is most appropriate for missing salary values?",
      options: [
        "Mean imputation",
        "Median imputation",
        "Delete all rows with missing salary",
        "Replace with 0",
      ],
      correctAnswer: "Median imputation",
      explanation:
        "For right-skewed data, the mean is pulled upward by high outliers. The median is robust to outliers and better represents the 'typical' salary. Using the mean would over-estimate typical salaries, misleading the model.",
    },
  },
  {
    title: "Feature Engineering: Creating Better Inputs",
    content:
      "Priya's churn prediction model has 80% accuracy with the raw features. Sneha challenges her: 'What if we could get to 87% without adding any new data — just by being smarter about what we give the model?' That is Feature Engineering.\n\nFeature Engineering is the art of transforming and creating input variables to help ML models learn better. Raw data rarely gives the model the most useful signals. Examples from Priya's project: Raw data had 'contract_start_date' and 'current_date' separately. She created 'account_age_days' (the difference). Raw data had 'total_calls' and 'resolved_calls' separately. She created 'resolution_rate' (resolved/total). She bucketed continuous age into groups (18-25, 26-35, etc.) because churn patterns were step-wise, not linear.\n\nDomain knowledge is the secret weapon in feature engineering. A generic data scientist might not know that in telecom, customers who call support 3+ times in their first 30 days are 5x more likely to churn. Priya learns this from the domain experts on the client team, creates a 'early_frustration_flag' feature, and that single engineered feature contributes more predictive power than 10 raw features. Feature engineering is where data science becomes more art than science.",
    funFact:
      "In the famous Netflix Prize competition ($1M for improving their recommendation algorithm by 10%), the winning team's secret weapon was not a fancy new algorithm — it was clever feature engineering: they transformed user rating timestamps into features representing the 'mood of the day' patterns in movie watching behaviour.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has columns 'signup_date' and 'last_purchase_date'. What engineered feature would most directly help predict customer churn?",
      options: [
        "Average of the two dates",
        "Days since last purchase (recency)",
        "Converting both dates to strings",
        "Dropping both columns",
      ],
      correctAnswer: "Days since last purchase (recency)",
      explanation:
        "Recency (days since last purchase) is a powerful churn predictor — customers who have not bought recently are more likely to churn. Raw dates in ML models are meaningless because 2024-01-01 is not 'twice' 2023-01-01. Engineered time-difference features carry real predictive signal.",
    },
  },
  {
    title: "Data Normalization and Standardization",
    content:
      "Priya feeds her features into a KNN model and gets terrible results. Arjun spots the problem immediately: 'Your features are on completely different scales. Age goes from 18 to 65, annual income from 200,000 to 8,000,000. The model thinks a difference of 1 in age and 1 in income are equally important. They are not.'\n\nNormalization (Min-Max Scaling) rescales values to a fixed range, usually 0 to 1. Formula: (x - min) / (max - min). Good for algorithms that need bounded inputs, like neural networks. Standardization (Z-Score Scaling) rescales to have mean=0 and standard deviation=1. Formula: (x - mean) / std. Good for algorithms assuming normally distributed data, like linear regression and SVM.\n\nWhen to use which? Normalization when you need a specific range (neural networks, image pixel values). Standardization when outliers are present (outliers distort min/max in normalization) or when the algorithm assumes normal distribution. Decision Trees and Random Forests do NOT need scaling — they split on individual features and are scale-invariant. Forgetting to scale is a classic fresher mistake. Priya adds a StandardScaler step to her pipeline and her KNN accuracy jumps from 71% to 84% — same data, same algorithm, just properly scaled.",
    funFact:
      "In 1999, NASA lost the Mars Climate Orbiter spacecraft ($327 million) because one team used metric units and another used imperial units for thruster data — essentially a real-world 'scaling' failure. Inconsistent units can crash satellites and ML models alike.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya is training a neural network with features: age (18-65), salary (200K-8M), years experience (0-40). What should she apply first?",
      options: [
        "No preprocessing needed for neural networks",
        "Normalization or standardization to bring features to similar scales",
        "Randomly multiply all values by 100",
        "Convert all features to categorical bins",
      ],
      correctAnswer:
        "Normalization or standardization to bring features to similar scales",
      explanation:
        "Neural networks use gradient descent, which is extremely sensitive to feature scales. A salary feature with values in millions will dominate weight updates, causing the model to effectively ignore age and experience. Scaling all features to the same range fixes this.",
    },
  },
  {
    title: "Linear Regression: Predicting Numbers",
    content:
      "Priya's new task: predict apartment rental prices in Bangalore for a real estate client. The features are square footage, number of bedrooms, distance from metro, and age of building. The output is price in rupees — a continuous number. Linear Regression is the right tool.\n\nLinear Regression finds the best-fit straight line through data points. Mathematically: Price = w1×sqft + w2×bedrooms + w3×metro_distance + w4×building_age + bias. The algorithm 'learns' the weights (w1, w2, etc.) that minimise the average prediction error across all training examples. It is elegant, interpretable, and fast. After training, Priya can directly read the weights: 'Each additional square foot adds ₹85 to rent. Each year of building age reduces rent by ₹200.'\n\nLinear Regression assumes the relationship between inputs and output is actually linear — a doubling of sqft should approximately double the rent. When that assumption holds, it is unbeatable for simplicity and interpretability. When it does not hold (curved relationships, complex interactions), you need polynomial regression or tree-based models. Key metrics for regression: MAE (Mean Absolute Error — average error in rupees), RMSE (Root Mean Squared Error — penalises large errors more), and R-squared (how much variance the model explains — 1.0 is perfect, 0.0 is useless).",
    funFact:
      "Linear Regression was invented by Carl Friedrich Gauss around 1795, long before computers existed. He used it to predict the location of the asteroid Ceres after astronomers lost track of it — and he nailed it using only 41 manual calculations.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's linear regression model predicts Bangalore apartment rent. For a 1000 sqft flat, it predicts ₹45,000/month. The actual rent is ₹50,000. What is the absolute error?",
      options: ["₹5,000", "₹10,000", "₹45,000", "₹50,000"],
      correctAnswer: "₹5,000",
      explanation:
        "Absolute Error = |Predicted - Actual| = |45,000 - 50,000| = ₹5,000. Mean Absolute Error (MAE) is the average of all such absolute errors across the test set. Lower MAE means better predictions.",
    },
  },
  {
    title: "Logistic Regression: Predicting Categories",
    content:
      "New project: predict whether a TCS employee will leave in the next 6 months (yes/no). The output is a category, not a number. Linear Regression would predict values like 0.7 or 1.3 — what does 1.3 even mean for a yes/no prediction? Priya needs Logistic Regression.\n\nDespite the confusing name, Logistic Regression is a classification algorithm. It applies a sigmoid (S-shaped) function to convert any number into a value between 0 and 1 — a probability. Probability > 0.5 → predict class 1 (will leave). Probability ≤ 0.5 → predict class 0 (will stay). The model learns weights that maximise the probability of correct classifications.\n\nLogistic Regression outputs probabilities, which is extremely useful in practice. Rather than a binary 'will leave / will not leave', Priya can show the HR team: 'Employee ID 4521 has a 78% probability of leaving — HIGH RISK. Focus retention efforts here.' This actionable risk scoring is far more useful than a binary output. Logistic Regression is also highly interpretable — a positive weight on 'low_performance_rating' means low performance genuinely increases attrition probability. HR can use this to understand and address root causes, not just predict outcomes.",
    funFact:
      "Logistic Regression is still used in real-world credit scoring by major banks, despite being 150+ years old as a mathematical concept. Its interpretability is legally required in many countries: banks must explain to rejected applicants why they were denied credit.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's Logistic Regression outputs a probability of 0.82 for an employee. The threshold is 0.5. What does the model predict?",
      options: [
        "Employee will stay (probability too low)",
        "Employee will leave (probability above threshold)",
        "Model cannot make a prediction",
        "The employee has an 82% salary increase chance",
      ],
      correctAnswer: "Employee will leave (probability above threshold)",
      explanation:
        "0.82 > 0.5 threshold, so the model predicts class 1 (will leave). The probability itself (82%) is also useful for risk prioritisation — much more actionable than a binary label.",
    },
  },
  {
    title: "Decision Trees: How Machines Make Decisions",
    content:
      "Priya is presenting her churn prediction model to a non-technical client. They ask: 'We like the results, but HOW does it decide a customer will churn?' She realises her logistic regression weights are hard to explain. Arjun suggests Decision Trees for the next project.\n\nA Decision Tree mimics human decision-making by asking a series of yes/no questions. Starting at the root node: 'Is account_age < 6 months?' If yes, go left (high churn risk). If no, go right: 'Is monthly_spend < ₹200?' And so on, branching until you reach a leaf node with the final prediction. The entire logic is a tree of if-then-else rules that anyone can follow.\n\nTrees are built using algorithms like CART (Classification and Regression Trees). At each node, the algorithm finds the feature split that most reduces impurity (measured by Gini Index or Entropy). The intuition: after the split, each branch should be as 'pure' as possible — ideally containing mostly one class. The problem with single trees: they overfit. A tree that perfectly memorises training data will fail on new data. The solution? Build hundreds of trees and average them — that is Random Forest, coming up next. But single decision trees remain valuable when you need to explain predictions to a client, a regulator, or a courtroom.",
    funFact:
      "Decision trees are used in medical diagnosis guidelines — not just AI. The CURB-65 score for pneumonia severity is a decision tree that any doctor can apply without a computer. The difference is that ML decision trees learn their structure from data rather than medical expertise.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "A decision tree that perfectly fits training data but performs poorly on new data is said to be ________ the training data.",
      correctAnswer: "overfitting",
      explanation:
        "Overfitting occurs when a model learns training data too well, including its noise and quirks. The tree becomes so specific to the training examples that it fails to generalise. Solutions include limiting tree depth (max_depth), requiring minimum samples per leaf, or using ensemble methods like Random Forest.",
    },
  },
  {
    title: "Random Forests: Wisdom of the Crowd",
    content:
      "Priya's single decision tree overfits badly — 98% accuracy on training data, 71% on test data. Arjun introduces her to the concept: 'Ask one person for directions and you might get lost. Ask 100 people and follow the majority — you will almost certainly get there.' That is Random Forest.\n\nRandom Forest builds hundreds (or thousands) of decision trees, each trained on a random subset of the training data AND a random subset of features. Each tree votes on the final prediction, and the majority wins. This 'ensemble' approach addresses overfitting in two powerful ways: bagging (training each tree on a different random sample prevents any one tree from memorising specific training examples) and feature randomness (using random feature subsets at each split ensures the trees are diverse and not all making the same mistakes).\n\nPriya re-runs her experiment: Random Forest with 200 trees gives 88% test accuracy — much better than the single tree's 71%, and barely overfit (89% training accuracy). It is also faster to tune than neural networks, handles missing values better than most algorithms, and provides feature importance scores — a ranked list of which input features contributed most to predictions. In Priya's model, 'days_since_last_contact', 'contract_type', and 'monthly_charges' are the top 3 predictors of churn. This insight directly informs the client's retention strategy.",
    funFact:
      "Random Forests won the Netflix Prize preliminary competition and are still used in the Yelp recommendation system, Airbnb pricing algorithms, and most financial fraud detection systems. Their blend of accuracy, robustness, and interpretability makes them a default choice for tabular data in industry.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A Random Forest of 500 trees votes on whether a transaction is fraudulent. 350 trees say YES, 150 say NO. What is the final prediction?",
      options: [
        "Not Fraudulent — 150 trees disagreed",
        "Fraudulent — majority vote (350 > 150)",
        "Uncertain — more trees needed",
        "Fraudulent — only if all 500 agree",
      ],
      correctAnswer: "Fraudulent — majority vote (350 > 150)",
      explanation:
        "Random Forest uses majority voting: 350/500 = 70% of trees predict fraud, so the final prediction is Fraudulent. The prediction probability is approximately 70% (350/500), which also gives a confidence estimate.",
    },
  },
  {
    title: "K-Nearest Neighbors: Learning from Examples",
    content:
      "Sneha gives Priya a puzzle: 'Without any explicit training phase, can we build a model that just says — this new data point looks like these 5 training examples, so it probably has the same label?' That is K-Nearest Neighbors (KNN).\n\nKNN is one of the simplest ML algorithms: to classify a new point, find the K training examples closest to it (using Euclidean or other distance metrics) and take a vote. If K=5 and 4 of the 5 nearest neighbours are labelled 'will churn', the new customer is predicted to churn too. There is no training phase — the algorithm is 'lazy' and does all the work at prediction time by searching through all training examples.\n\nKNN's strengths: incredibly simple to understand and implement, no assumptions about data distribution, naturally handles multi-class problems. Its weaknesses: slow for large datasets (must calculate distance to every training point for each prediction), sensitive to feature scale (MUST normalise first), sensitive to irrelevant features (noisy features can dominate distance calculations), and sensitive to K (too small K → overfitting, too large K → underfitting). In practice, KNN is excellent for recommendation systems ('users most similar to you liked this movie') and as a quick baseline before trying complex models. Priya uses it to generate customer similarity scores, which become a feature in her main churn model.",
    funFact:
      "Spotify's 'Discover Weekly' playlist uses a form of collaborative filtering that is conceptually similar to KNN — finding users most similar to you (nearest neighbours) and recommending songs they loved that you have not heard yet. It serves 40 million users every Monday.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya sets K=1 for a KNN classifier. What is the risk of such a small K?",
      options: [
        "The model will be too slow to run",
        "The model will overfit — single nearest neighbour is sensitive to noisy data",
        "The model will underfit — not enough information to classify",
        "K=1 is always the best choice for accuracy",
      ],
      correctAnswer:
        "The model will overfit — single nearest neighbour is sensitive to noisy data",
      explanation:
        "With K=1, a single noisy or mislabelled training example can dominate predictions for nearby test points. The decision boundary becomes extremely jagged, memorising training quirks rather than generalising. Larger K (odd number) provides smoother, more robust boundaries.",
    },
  },
  {
    title: "What is a Neural Network?",
    content:
      "TCS wins a project to classify product images from an e-commerce client. Priya's team has tried Random Forest on image pixel data and got 62% accuracy. Arjun says: 'For this kind of problem — high-dimensional, spatially structured data — we need neural networks.' Priya is nervous. She has heard they are complicated. Arjun simplifies it.\n\nA Neural Network is inspired by the human brain — loosely. It consists of layers of 'neurons' (nodes). Each neuron receives inputs, multiplies them by learned weights, sums them up, applies an activation function, and passes the result forward. Layers: Input Layer (receives raw data — e.g., pixel values), Hidden Layers (learn abstract representations — first layer might detect edges, next detects shapes, next detects eyes and wheels), Output Layer (final prediction — e.g., class probabilities for 10 product categories).\n\nThe magic is in the learning. Given a wrong prediction, the network calculates how wrong it was (loss function), then adjusts all weights slightly to reduce that error (gradient descent + backpropagation). After seeing millions of examples, the weights encode a rich understanding of visual features. This is why neural networks are so powerful for images, audio, and text — domains where the important features are not hand-crafted but discovered automatically from raw data. On the same image classification task, after switching to a CNN (a specialised neural network), Priya's accuracy jumps from 62% to 94%.",
    funFact:
      "The human brain has roughly 86 billion neurons, each connected to up to 10,000 others. The largest AI neural network (GPT-4) has about 1.8 trillion parameters. That is more 'connections' than in a human brain — yet GPT-4 still cannot tie shoelaces.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A neural network has 3 layers: input, one hidden layer, and output. What is this architecture called?",
      options: [
        "Deep Neural Network",
        "Shallow Neural Network (single hidden layer)",
        "Convolutional Neural Network",
        "Recurrent Neural Network",
      ],
      correctAnswer: "Shallow Neural Network (single hidden layer)",
      explanation:
        "A network with only one hidden layer is called shallow. Deep Neural Networks (DNNs) have two or more hidden layers. The term 'deep learning' refers to networks with many hidden layers — the depth allows learning increasingly abstract representations.",
    },
  },
  {
    title: "Activation Functions: Introducing Non-Linearity",
    content:
      "Priya asks Arjun: 'If a neural network just multiplies inputs by weights and sums them, is it not just doing linear regression with extra steps?' Arjun grins: 'Exactly right — without activation functions, that is all it would be, no matter how many layers you stack.'\n\nActivation functions introduce non-linearity, allowing neural networks to learn complex patterns. Without them, a 10-layer network would be mathematically equivalent to a single linear transformation. Common activation functions: ReLU (Rectified Linear Unit) — f(x) = max(0, x). Currently the most popular for hidden layers. Fast to compute, reduces the vanishing gradient problem, works well in deep networks. Sigmoid — squashes output to (0,1). Used in output layers for binary classification (interpreting output as probability). Suffers from vanishing gradients in deep networks. Tanh — squashes output to (-1,1). Better than sigmoid for hidden layers (zero-centered). Softmax — used in the output layer for multi-class classification, converts raw scores to probabilities that sum to 1.\n\nPriya's image classifier uses ReLU in all hidden layers (speed + depth) and Softmax in the final layer (10 product categories → probabilities for each). The combination is so standard that it has become the default template for classification neural networks. Understanding WHY each activation function is chosen for each layer position separates engineers who know deep learning from those who just copy-paste code.",
    funFact:
      "Before ReLU became standard (around 2010), sigmoid was used in all layers. The 'vanishing gradient' problem this caused made networks deeper than 4-5 layers nearly untrainable. ReLU's simple fix — replace negative values with 0 — unlocked the entire deep learning revolution.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's neural network classifies images into 5 categories. Which activation function should she use in the final output layer?",
      options: [
        "ReLU — fastest and most popular",
        "Sigmoid — outputs a probability",
        "Softmax — outputs probabilities for all 5 classes summing to 1",
        "Tanh — zero-centered output",
      ],
      correctAnswer:
        "Softmax — outputs probabilities for all 5 classes summing to 1",
      explanation:
        "For multi-class classification (5 categories), Softmax converts raw scores into probabilities for each class that sum to 1. This lets you say 'the model is 78% confident this is a laptop, 12% confident it is a tablet, etc.' Sigmoid is for binary outputs only.",
    },
  },
  {
    title: "Backpropagation: How Neural Networks Learn",
    content:
      "Priya watches her model training in real-time: loss=2.3 → 1.8 → 1.2 → 0.7 → 0.3 → 0.15. The numbers are going down. 'What is actually happening?' she asks. Arjun explains backpropagation — the algorithm that makes neural networks learn.\n\nTraining a neural network is an optimisation problem: find the weight values that minimise prediction error. The algorithm: Step 1 (Forward Pass) — feed input through the network, get a prediction. Step 2 (Calculate Loss) — measure how wrong the prediction is using a loss function (e.g., cross-entropy for classification). Step 3 (Backward Pass / Backpropagation) — calculate how much each weight contributed to the error, using the chain rule of calculus. Step 4 (Gradient Descent Update) — adjust each weight slightly in the direction that reduces the loss (subtract learning_rate × gradient from weight). Repeat for thousands of batches and epochs until loss converges.\n\nThe learning rate is the most important hyperparameter. Too large: training oscillates and diverges (never converges). Too small: training is painfully slow and may get stuck in local minima. A common technique is learning rate scheduling — starting high and gradually reducing it, like braking as you approach your destination. Priya uses Adam optimiser (an adaptive learning rate algorithm) — the default choice that automatically adjusts learning rates per weight throughout training.",
    funFact:
      "Backpropagation was invented in the 1970s but largely ignored until 1986 when Rumelhart, Hinton, and Williams showed it could train multi-layer networks. Geoffrey Hinton won the 2024 Nobel Prize in Physics (alongside John Hopfield) for his foundational work on neural networks.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's training loss starts at 2.1 but after 50 epochs it fluctuates wildly between 0.5 and 3.0 without converging. What is the most likely cause?",
      options: [
        "Too few training examples",
        "Learning rate is too high",
        "The model has too many hidden layers",
        "Wrong activation function",
      ],
      correctAnswer: "Learning rate is too high",
      explanation:
        "A learning rate that is too high causes weight updates to overshoot the minimum — the loss bounces around and never converges. The fix is to reduce the learning rate (e.g., by 10x) and retrain. This is one of the most common training issues and the first thing to check.",
    },
  },
  {
    title: "CNNs for Image Recognition",
    content:
      "The e-commerce client wants to automatically tag product images — phones, laptops, headphones, keyboards. 50,000 product photos, 20 categories. A standard neural network treating each pixel independently would have billions of parameters and no concept of spatial structure. Priya needs a CNN.\n\nConvolutional Neural Networks (CNNs) are designed for data with spatial structure — images, video, medical scans. They use convolutional layers — small filter grids (like 3x3 or 5x5) that slide across the image, detecting local patterns. The same filter applied everywhere detects edges (or curves, or textures) regardless of where they appear in the image. This weight sharing massively reduces parameters compared to fully-connected layers.\n\nA typical CNN architecture: Convolutional layers (detect features) → Pooling layers (downsample spatially — MaxPool takes the strongest signal in each region, reducing computation) → More Conv + Pool layers (higher-level features) → Fully-connected layers (combine features for final classification). Pre-trained models are the real power move. VGG16, ResNet50, EfficientNet — models trained on millions of ImageNet images. Priya loads a pre-trained ResNet50 in Keras with two lines of code, replaces the final layer with one suited to her 20 categories, and fine-tunes for 10 epochs. Final accuracy: 96.3%. Training time on a GPU: 2 hours. Without transfer learning it would have taken days and millions of labelled images she does not have.",
    funFact:
      "The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) drove CNN development from 2010-2017. The winning models went from 28% error (2010) to 2.25% error (2017) — better than the average human (5%). The competition was discontinued because AI had surpassed its purpose.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya uses a pre-trained ResNet50 model and adds a new output layer for her 20 product categories. This technique is called:",
      options: [
        "Data Augmentation",
        "Transfer Learning",
        "Ensemble Learning",
        "Hyperparameter Tuning",
      ],
      correctAnswer: "Transfer Learning",
      explanation:
        "Transfer Learning takes a model trained on one large dataset (ImageNet) and adapts it for a different but related task. The pre-trained layers already know how to detect edges, textures, and shapes. You only need to train the final classification layer on your specific categories, requiring far less data and compute.",
    },
  },
  {
    title: "RNNs and LSTMs for Sequential Data",
    content:
      "New project: predict tomorrow's stock closing price based on the past 30 days. Each day's price depends on the previous days — the sequence matters. CNNs would ignore this temporal order. Regular feedforward networks would not remember what happened 20 days ago. Priya needs Recurrent Neural Networks (RNNs).\n\nRNNs have a 'memory' — at each time step, the network processes the current input AND a hidden state from the previous step. This allows information to persist across the sequence, like carrying context while reading a sentence word by word. However, basic RNNs suffer from the 'vanishing gradient' problem — gradients become tiny as they are propagated back through many time steps, making the network forget long-term dependencies.\n\nLSTMs (Long Short-Term Memory networks) solve this with a gated architecture. Three gates control information flow: the Forget Gate (what to discard from memory), the Input Gate (what new information to store), and the Output Gate (what to output based on memory). These gates allow LSTMs to selectively remember or forget across long sequences — learning that this month's revenue is more relevant than a data point from 18 months ago. Priya's LSTM-based stock predictor learns weekly patterns, quarterly patterns, and seasonal trends simultaneously. It outperforms both simple RNN and Random Forest baselines by 12% RMSE on the test set.",
    funFact:
      "LSTMs were invented in 1997 by Sepp Hochreiter and Juergen Schmidhuber. For 20 years they were academic curiosities. Then Google used them for speech recognition in 2015, dramatically improving Google Voice. The iPhone's Siri, Google Translate, and most voice assistants ran on LSTMs before Transformers replaced them.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to classify whether customer support chat messages have a positive or negative sentiment, considering the entire conversation context. Which architecture is most appropriate?",
      options: [
        "Convolutional Neural Network (CNN)",
        "Long Short-Term Memory (LSTM)",
        "Linear Regression",
        "K-Nearest Neighbors",
      ],
      correctAnswer: "Long Short-Term Memory (LSTM)",
      explanation:
        "Chat conversations are sequential — meaning of each message depends on previous messages. LSTMs process sequences while maintaining long-term memory across many steps, making them ideal for conversation sentiment analysis. CNNs lack temporal awareness; regression/KNN ignore sequence order entirely.",
    },
  },
  {
    title: "Python scikit-learn: Your ML Toolkit",
    content:
      "Priya's first week at TCS: 'You will use scikit-learn for 80% of your ML work,' says Arjun. 'Learn it deeply and you can build production models fast.' Scikit-learn (sklearn) is the standard Python library for traditional ML — consistent API, excellent documentation, and battle-tested implementations.\n\nThe scikit-learn API has beautiful consistency: every model follows the same pattern — fit(X_train, y_train) to train, predict(X_test) to predict, score(X_test, y_test) to evaluate. The entire pipeline: load data with pandas → preprocess with StandardScaler or LabelEncoder → train with LinearRegression / RandomForestClassifier / SVC → evaluate with metrics.accuracy_score / classification_report → tune with GridSearchCV.\n\nHere is a real project example in minimal code:\n<pre><code class=\"language-python\">from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import classification_report\nimport pandas as pd\n\ndf = pd.read_csv('churn_data.csv')\nX = df.drop('churn', axis=1)\ny = df['churn']\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nmodel = RandomForestClassifier(n_estimators=200, random_state=42)\nmodel.fit(X_train, y_train)\n\nprint(classification_report(y_test, model.predict(X_test)))</code></pre>\n\nThis is the backbone of Priya's day-to-day work. The power is not in any single line — it is in how quickly she can iterate: swap RandomForestClassifier for GradientBoostingClassifier, change one line, compare results.",
    funFact:
      "Scikit-learn was started as a Google Summer of Code project in 2007 by David Cournapeau. It now has over 2,500 contributors, is downloaded over 20 million times per month, and is used in production at Google, Spotify, Booking.com, and most Fortune 500 companies.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question: "In scikit-learn, what does model.fit(X_train, y_train) do?",
      options: [
        "Evaluates the model on test data",
        "Trains the model by learning patterns from labelled training data",
        "Splits the data into train and test sets",
        "Imports the model from scikit-learn",
      ],
      correctAnswer:
        "Trains the model by learning patterns from labelled training data",
      explanation:
        "fit() is the training step — the model learns the mapping from features (X_train) to labels (y_train). After fitting, you can call predict() on new data. This consistent fit/predict API is one of scikit-learn's greatest design decisions.",
    },
  },
  {
    title: "TensorFlow and Keras: Building Neural Networks",
    content:
      "For the image classification project, scikit-learn is not enough — Priya needs deep learning. Arjun introduces her to TensorFlow with the Keras high-level API. TensorFlow is Google's open-source deep learning framework. Keras is the clean, beginner-friendly interface that runs on top of it.\n\nBuilding a neural network in Keras feels almost like writing English:\n<pre><code class=\"language-python\">import tensorflow as tf\nfrom tensorflow import keras\n\nmodel = keras.Sequential([\n    keras.layers.Dense(128, activation='relu', input_shape=(20,)),\n    keras.layers.Dropout(0.3),\n    keras.layers.Dense(64, activation='relu'),\n    keras.layers.Dropout(0.3),\n    keras.layers.Dense(1, activation='sigmoid')  # Binary classification\n])\n\nmodel.compile(\n    optimizer='adam',\n    loss='binary_crossentropy',\n    metrics=['accuracy']\n)\n\nhistory = model.fit(\n    X_train, y_train,\n    epochs=50,\n    batch_size=32,\n    validation_split=0.2,\n    callbacks=[keras.callbacks.EarlyStopping(patience=5)]\n)\n</code></pre>\n\nKey concepts: Sequential model builds layers one after another. Dense layers are fully-connected. Dropout layers randomly deactivate neurons during training to prevent overfitting. EarlyStopping monitors validation loss and stops training when improvement plateaus — saving Priya from babysitting training runs. After training, model.evaluate(X_test, y_test) gives final metrics and model.save('model.h5') saves everything for deployment.",
    funFact:
      "TensorFlow 1.0 was released in 2017 and was notoriously difficult to use — you had to think in 'computation graphs' before running anything. TensorFlow 2.0 (2019) adopted Keras as the primary interface and 'eager execution', making it as beginner-friendly as PyTorch. Usage doubled within 6 months.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Priya's Keras model, what does the Dropout(0.3) layer do during training?",
      options: [
        "Removes 30% of training data",
        "Randomly deactivates 30% of neurons each batch to prevent overfitting",
        "Reduces the learning rate by 30%",
        "Applies L2 regularization with factor 0.3",
      ],
      correctAnswer:
        "Randomly deactivates 30% of neurons each batch to prevent overfitting",
      explanation:
        "Dropout prevents overfitting by forcing the network to learn redundant representations — no single neuron can be relied upon, so all must contribute. During inference (prediction), all neurons are active but their outputs are scaled. Dropout is disabled automatically when you call model.predict().",
    },
  },
  {
    title: "Jupyter Notebooks: Interactive ML Development",
    content:
      "On her first day, Priya is given a Jupyter Notebook URL instead of a Python script. She is confused. Arjun explains: 'For data science, notebooks are not a crutch — they are the right tool. You are doing exploration and experimentation, not writing a web server.'\n\nJupyter Notebooks are interactive environments where code, output, visualisations, and documentation live in the same document. You write code in cells and run them individually. The output — whether it is a number, a pandas DataFrame, a matplotlib chart, or a training loss curve — appears immediately below the cell. This makes EDA and experimentation dramatically faster: load data once, then experiment with transformations and models cell by cell without re-running the entire pipeline.\n\nEssential workflows Priya uses daily: Cell magics (%timeit to benchmark, %matplotlib inline for inline plots), IPython display for rich outputs (df.head() shows formatted tables), keyboard shortcuts (Shift+Enter to run cell and advance, B to insert cell below, DD to delete cell, M to convert to Markdown). For production code, notebooks get converted to .py scripts. But during development, the iterative notebook workflow — run a cell, see the output, tweak, re-run — cuts exploration time in half. Google Colab (free cloud notebooks with GPU access) and Kaggle Notebooks let you run heavy models without a local GPU. Priya completes her first deep learning experiment entirely on Colab, training a ResNet model without spending a rupee.",
    funFact:
      "The Jupyter name comes from the three core programming languages it originally supported: Julia, Python, and R. Today it supports over 100 languages. NASA uses Jupyter Notebooks to document and reproduce scientific analyses — including data from the James Webb Space Telescope.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya wants to run GPU-accelerated deep learning experiments for free without installing anything locally. What is her best option?",
      options: [
        "Run PyCharm on her laptop",
        "Use Google Colab or Kaggle Notebooks (free cloud Jupyter with GPU)",
        "Install TensorFlow on a company server",
        "Use Microsoft Excel with Python plugins",
      ],
      correctAnswer:
        "Use Google Colab or Kaggle Notebooks (free cloud Jupyter with GPU)",
      explanation:
        "Google Colab and Kaggle Notebooks offer free GPU access (T4 GPUs) in a browser-based Jupyter environment. No installation needed, no cost for basic usage. For freshers and students learning deep learning, these platforms are the standard starting point.",
    },
  },
  {
    title: "Deploying ML Models with Flask",
    content:
      "Priya has trained a fraud detection model with 94% recall. But it lives in a Jupyter Notebook on her laptop. 'How does the bank's transaction system actually use it?' she asks. Arjun: 'You need to wrap it in an API. Let me show you Flask.'\n\nDeploying an ML model means wrapping it in a web service that other applications can call. Flask is a lightweight Python web framework perfect for this. The model is saved as a .pkl (pickle) or .h5 file and loaded when the server starts. A POST endpoint receives transaction data, runs it through the model, and returns a prediction as JSON.\n<pre><code class=\"language-python\">from flask import Flask, request, jsonify\nimport joblib\nimport pandas as pd\n\napp = Flask(__name__)\nmodel = joblib.load('fraud_model.pkl')\n\n@app.route('/predict', methods=['POST'])\ndef predict():\n    data = request.get_json()\n    df = pd.DataFrame([data])\n    prediction = model.predict(df)[0]\n    probability = model.predict_proba(df)[0][1]\n    return jsonify({\n        'is_fraud': bool(prediction),\n        'confidence': round(float(probability), 3)\n    })\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=5000)\n</code></pre>\n\nNow the bank's transaction service calls POST /predict with transaction details and gets back a fraud decision in milliseconds. This is Priya's first production deployment — a moment every ML engineer remembers. In real projects, Flask apps are containerised with Docker and deployed on Kubernetes or AWS ECS, but the Flask API pattern remains the same.",
    funFact:
      "Uber uses a system called Michelangelo to deploy and serve ML models at scale. During peak hours, their model serving infrastructure handles millions of predictions per second — from surge pricing to driver matching. Every single one goes through an API layer similar to what Priya built.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "The bank's transaction system sends a POST request to Priya's Flask API with transaction data and expects a fraud decision back. What is this architectural pattern called?",
      options: [
        "Batch prediction",
        "Real-time inference via REST API",
        "Offline model evaluation",
        "Model training pipeline",
      ],
      correctAnswer: "Real-time inference via REST API",
      explanation:
        "Real-time (online) inference processes one request at a time and returns an immediate response — critical for fraud detection where you need a decision before the transaction completes. The REST API pattern (HTTP POST request → JSON response) is the industry standard for serving ML models.",
    },
  },
  {
    title: "ML Pipelines: From Data to Prediction",
    content:
      "Priya's fraud model goes to production and everything is fine for 3 weeks. Then performance drops. Investigation reveals: the preprocessing steps (scaling, encoding) were done manually in notebooks, but the values used (mean and standard deviation for scaling) came from training data. In production, a slight code change caused different scaling values. The model never knew.\n\nML Pipelines solve this: chain preprocessing and modelling into a single, reproducible object that ensures the exact same transformations are applied in training and in production. With scikit-learn's Pipeline:\n<pre><code class=\"language-python\">from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.impute import SimpleImputer\nimport joblib\n\nnumeric_transformer = Pipeline(steps=[\n    ('imputer', SimpleImputer(strategy='median')),\n    ('scaler', StandardScaler())\n])\n\npreprocessor = ColumnTransformer(transformers=[\n    ('num', numeric_transformer, numeric_features)\n])\n\nfull_pipeline = Pipeline(steps=[\n    ('preprocessor', preprocessor),\n    ('classifier', RandomForestClassifier(n_estimators=200))\n])\n\nfull_pipeline.fit(X_train, y_train)\njoblib.dump(full_pipeline, 'model_pipeline.pkl')\n</code></pre>\n\nNow the pipeline object contains both the fitted scaler (with training mean/std saved) AND the model. Deploy this single object and it handles preprocessing + prediction consistently. The bug that cost Priya a week is impossible with a proper pipeline. This is now mandatory in Priya's team: no model goes to production without being wrapped in a Pipeline.",
    funFact:
      "Training-serving skew — the production bug Priya experienced — is listed by Google ML engineers as one of the top 5 causes of ML model failures in production. The fix is always the same: consolidate preprocessing into the pipeline that gets deployed with the model.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why is it critical that the same StandardScaler used during training is saved and reused during inference (prediction)?",
      options: [
        "It makes the code run faster in production",
        "The scaler must use the training data mean and std — using different values would change the input distribution the model was trained on",
        "It is only a best practice, not technically necessary",
        "The scaler needs to be retrained daily on new data",
      ],
      correctAnswer:
        "The scaler must use the training data mean and std — using different values would change the input distribution the model was trained on",
      explanation:
        "StandardScaler calculates mean and std from the data it is fit on. If you refit the scaler on production data, those statistics change, transforming inputs differently than during training. The model then sees a different data distribution and predictions degrade. Always fit on training data only, then use the same fitted scaler everywhere.",
    },
  },
  {
    title: "Large Language Models (LLMs): How ChatGPT Works",
    content:
      "Priya's manager calls a team meeting: 'Our client wants to integrate GenAI into their product. Everyone needs to understand how ChatGPT actually works.' This is not future technology. This is what Priya and her team will build with.\n\nLarge Language Models (LLMs) like ChatGPT, Gemini, and Claude are built on the Transformer architecture (the 2017 Google paper). During pre-training, the model processes hundreds of billions of text tokens — web pages, books, code, Wikipedia — and learns to predict the next word. This sounds simple, but predicting the next word accurately requires understanding grammar, facts, reasoning, code syntax, and context. The model develops 'knowledge' as a side effect.\n\nAfter pre-training, models undergo RLHF (Reinforcement Learning from Human Feedback) — humans rate responses for helpfulness and safety, and those preferences are baked into the model's behaviour. The result: a model that not only predicts plausible text but generates helpful, safe, accurate responses. Scale matters enormously: GPT-2 (2019, 1.5B parameters) was impressive for research. GPT-3 (2020, 175B parameters) shocked the world. GPT-4 (2023, estimated 1T+ parameters) powers products used by hundreds of millions. But size is not everything — Meta's LLaMA-3 achieves GPT-4 class performance with far fewer parameters through better training data curation.",
    funFact:
      "Training GPT-4 cost approximately $100 million in compute alone. The model was trained on an estimated 13 trillion tokens — roughly 10,000 times all the books ever written in human history. Yet it still does not know what happened after its training cutoff date.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "ChatGPT sometimes confidently states false information as fact. What is this problem called?",
      options: [
        "Model overfitting",
        "Hallucination — LLMs generate plausible but incorrect text",
        "Underfitting on training data",
        "API rate limiting",
      ],
      correctAnswer:
        "Hallucination — LLMs generate plausible but incorrect text",
      explanation:
        "LLM hallucination occurs when the model generates text that sounds confident and plausible but is factually wrong. It happens because LLMs predict statistically likely next tokens — they are not looking up facts in a database. Critical applications (medical, legal, financial) must use retrieval-augmented generation (RAG) or verification layers to mitigate hallucinations.",
    },
  },
  {
    title: "Prompt Engineering: Getting the Best from AI",
    content:
      "Priya tests ChatGPT for her team's first GenAI project — summarising 100-page client reports. Her first prompt: 'Summarise this document.' The output is vague and misses key financial figures. Arjun looks over her shoulder: 'The model is brilliant but you asked a lazy question. Let me show you prompt engineering.'\n\nPrompt Engineering is the art of crafting inputs that elicit the best possible outputs from an LLM. Core techniques: Role Prompting — 'You are a senior financial analyst at a top-tier consulting firm. Summarise the following quarterly report, highlighting revenue trends, risk factors, and 3 actionable recommendations for the CFO.' Providing role context dramatically shifts the quality and format of responses. Chain-of-Thought — 'Think step by step before answering.' This forces the model to reason through problems rather than guess, reducing errors by 30-50% on reasoning tasks. Few-Shot Examples — provide 2-3 input-output examples in the prompt before your actual query. The model learns the exact format and style you want. Structured Output — 'Respond in JSON with keys: summary, risks, recommendations.' Ensures machine-parseable output for downstream processing.\n\nPriya's improved prompt increases summary quality dramatically. The client report now gets summarised with the exact sections they need, in the right format, with no relevant information missed. Prompt engineering is now a standard skill listed in AI engineer job descriptions at TCS, Infosys, and every major IT company.",
    funFact:
      "Anthropic (the company behind Claude) published research showing that simply adding 'Take a deep breath and think step by step' to a prompt increased math problem-solving accuracy by 40%. The right words, at the right place, genuinely change what the model does.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya asks GPT-4 to classify customer emails. She provides 3 examples of (email, label) pairs before her actual query. What prompt technique is she using?",
      options: [
        "Zero-shot prompting",
        "Few-shot prompting",
        "Chain-of-thought prompting",
        "Role prompting",
      ],
      correctAnswer: "Few-shot prompting",
      explanation:
        "Few-shot prompting provides a small number of examples (2-5) in the prompt to teach the model the desired format and pattern. This is extremely effective for structured classification tasks. Zero-shot would provide no examples; chain-of-thought adds 'think step by step'; role prompting sets a persona.",
    },
  },
  {
    title: "Using OpenAI API in Your Projects",
    content:
      "Priya's GenAI project is approved: build an internal tool that automatically summarises meeting notes, extracts action items, and assigns them to team members mentioned in the notes. The LLM brain of this system comes from the OpenAI API.\n\nThe OpenAI API gives programmatic access to GPT-4, GPT-4o, and other models via HTTP requests. Integration is remarkably simple:\n<pre><code class=\"language-python\">from openai import OpenAI\nimport json\n\nclient = OpenAI(api_key='your-api-key')\n\ndef analyse_meeting_notes(notes: str) -> dict:\n    response = client.chat.completions.create(\n        model='gpt-4o',\n        messages=[\n            {\n                'role': 'system',\n                'content': 'You are an expert meeting facilitator. Extract action items with assignees and deadlines from meeting notes. Return valid JSON only.'\n            },\n            {\n                'role': 'user',\n                'content': f'Meeting notes:\\n{notes}'\n            }\n        ],\n        response_format={'type': 'json_object'},\n        temperature=0.2  # Lower = more deterministic\n    )\n    return json.loads(response.choices[0].message.content)\n\nresult = analyse_meeting_notes(\"Priya to deploy model by Friday. Arjun to review PR by EOD tomorrow.\")\nprint(result)\n# Output: {\"action_items\": [{\"task\": \"Deploy model\", \"assignee\": \"Priya\", \"deadline\": \"Friday\"}, ...]}\n</code></pre>\n\nKey parameters: model selects the version (gpt-4o is fast and capable), messages follows the chat format with system + user turns, temperature controls randomness (0.0 = deterministic, 1.0 = creative), response_format forces structured JSON output. Cost management is critical in production: cache repeated queries, use shorter models for simpler tasks, and monitor usage with OpenAI's dashboard.",
    funFact:
      "The OpenAI API serves over 2 million developers. ChatGPT itself is built on the same API. At peak load, the API processes over 10 billion tokens per day — equivalent to reading the entire English Wikipedia over 1,000 times every single day.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya sets temperature=0.9 for her meeting notes summariser but gets inconsistent outputs every run. What should she do?",
      options: [
        "Increase temperature to 2.0",
        "Lower temperature to 0.1-0.2 for more deterministic, consistent outputs",
        "Switch to a different AI provider",
        "Use a longer prompt",
      ],
      correctAnswer:
        "Lower temperature to 0.1-0.2 for more deterministic, consistent outputs",
      explanation:
        "Temperature controls randomness in token selection. High temperature (0.8-1.0) produces creative, varied outputs — great for brainstorming. Low temperature (0.0-0.3) produces focused, consistent outputs — essential for data extraction, classification, and any task where consistency matters more than creativity.",
    },
  },
  {
    title: "AI in Enterprise: Real Business Applications",
    content:
      "After 6 months at TCS, Priya's team has delivered three AI projects. She prepares a presentation for a client's CTO: 'Where does AI actually deliver ROI in a business like yours?' She draws on what she has seen and researched.\n\nCustomer Service: AI chatbots handle 70-80% of tier-1 support queries without human intervention — deflecting routine questions (password resets, order status, billing queries) to automated systems 24/7. Escalation to humans only for complex issues. ROI: 60-70% reduction in support costs. Predictive Maintenance: ML models analyse IoT sensor data from machines and predict failure 2-4 weeks before it happens. Maintenance is scheduled at convenient times instead of emergency repairs. ROI: 25-30% reduction in downtime, 10-15% reduction in maintenance costs. HR Analytics: Models predict employee attrition 3-6 months ahead with 85%+ accuracy. HR intervenes with retention offers for high-risk high-performers only. Cost of losing a senior engineer: 6-9 months salary in recruiting and training. ROI: preventing even 5 attritions per year pays for the entire system.\n\nDocument Processing: NLP extracts key fields from invoices, contracts, and regulatory filings automatically. A bank that manually processed 500 documents/day now processes 50,000. Financial Forecasting: ML models combine historical data with market signals to forecast revenue with 15% less error than traditional methods. These are not hypothetical — these are projects Priya has worked on or seen delivered at TCS clients in her first year.",
    funFact:
      "McKinsey estimates AI could add $2.6 to $4.4 trillion of value annually to the global economy. India's IT sector (TCS, Infosys, Wipro, HCL) collectively earns over $200 billion per year — largely by building these kinds of AI systems for global clients.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A manufacturing company wants to reduce costly emergency machine breakdowns. Which AI application should Priya recommend?",
      options: [
        "Sentiment Analysis on customer reviews",
        "Predictive Maintenance using IoT sensor data and ML",
        "Image recognition for product photos",
        "Natural Language Processing for HR policies",
      ],
      correctAnswer: "Predictive Maintenance using IoT sensor data and ML",
      explanation:
        "Predictive Maintenance uses ML on IoT sensor readings (vibration, temperature, current) to predict machine failure before it occurs. This directly addresses emergency breakdowns by enabling scheduled, proactive maintenance. It is one of the highest-ROI AI applications in manufacturing.",
    },
  },
  {
    title: "AI/ML Capstone: Build a Sentiment Analysis Tool",
    content:
      "Priya's final project before her performance review: build an end-to-end sentiment analysis system for a retail client's customer reviews. This is her moment to put everything together — from raw data to deployed API.\n\nHere is the complete project blueprint that Priya builds and that you will build too:\n<pre><code class=\"language-python\"># Step 1: Data Collection and EDA\nimport pandas as pd, seaborn as sns\ndf = pd.read_csv('amazon_reviews.csv')\nprint(df['sentiment'].value_counts())  # Check class balance\nprint(df.isnull().sum())               # Check missing values\n\n# Step 2: Text Preprocessing\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.model_selection import train_test_split\n\nX = df['review_text'].fillna('')\ny = df['sentiment']  # positive / negative / neutral\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, stratify=y, random_state=42\n)\n\n# Step 3: Feature Extraction + Model Pipeline\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\nmodel = Pipeline([\n    ('tfidf', TfidfVectorizer(ngram_range=(1,2), max_features=10000)),\n    ('clf', LogisticRegression(max_iter=1000, C=1.0))\n])\nmodel.fit(X_train, y_train)\nprint(classification_report(y_test, model.predict(X_test)))\n\n# Step 4: Deploy as Flask API\nimport joblib\njoblib.dump(model, 'sentiment_model.pkl')\n# (Flask API code from Lesson 29 goes here)\n</code></pre>\n\nThe result Priya delivers: 91% F1 score on a balanced test set, Flask API serving predictions in <50ms, a Jupyter notebook documenting every EDA finding and modelling decision, and a 5-slide summary for the client showing how it reduces their manual review monitoring effort by 80%. This project goes on Priya's resume. It is real, end-to-end, and demonstrates every skill an AI fresher needs to get hired.",
    funFact:
      "Sentiment analysis is used to move financial markets. Hedge funds run NLP models on millions of news articles and social media posts in real-time, trading stocks seconds before human traders can even read the headlines. The advantage can be worth billions per year.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Priya's sentiment analysis pipeline, TF-IDF is used before Logistic Regression. What does TF-IDF do?",
      options: [
        "Trains the classification model on raw text",
        "Converts text into numerical feature vectors based on word frequency and importance",
        "Splits the data into train and test sets",
        "Normalises numerical features to the same scale",
      ],
      correctAnswer:
        "Converts text into numerical feature vectors based on word frequency and importance",
      explanation:
        "TF-IDF (Term Frequency-Inverse Document Frequency) converts text into numbers that ML models can process. It weights words by how often they appear in a document (TF) but penalises words that appear in every document (IDF), so words like 'the' score low while distinctive words like 'excellent' or 'broken' score high.",
    },
  },
];
