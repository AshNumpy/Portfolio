// Project data parsed from GithubSources.csv
export const projectsData = [
    {
        title: "Sales Analysis End to End ML Project",
        description: "End-to-end machine learning initiative aimed at analyzing, visualizing, and predicting sales data using advanced ML techniques.",
        github: "https://github.com/AshNumpy/Sales-End-to-End-ML-Project",
        demo: "https://sales-analysis-machine-learning.streamlit.app/",
        category: "Machine Learning",
        date: "2024-07-31",
        thumbnail: "Sales Analysis End to End ML Project.jpg"
    },
    {
        title: "Categorical Data Analysis | HU Statistics Department Term Project",
        description: "Comprehensive analysis of categorical data using statistical methods and visualization techniques.",
        github: "https://github.com/AshNumpy/Categorical-Data-Analysis/tree/main",
        category: "Statistical Analysis",
        date: "2023-07-26",
        thumbnail: "Categorical Data Analysis.jpg"
    },
    {
        title: "Sleep Quality & Health Analysis",
        description: "Analyze and visualize data related to health, lifestyle, and demographic factors to predict stress levels using machine learning.",
        github: "https://github.com/AshNumpy/Sleep-Health-ML-Project",
        demo: "https://sleep-health-ml-project.streamlit.app/",
        category: "Machine Learning",
        date: "2023-07-15",
        thumbnail: "Sleep Quality & Health Analysis.jpg"
    },
    {
        title: "Big Data Analytics | HU Statistics Department Term Project",
        description: "Advanced big data analytics using modern tools like PySpark, KNIME, and H2O.",
        github: "https://github.com/AshNumpy/Big-Data-Analysis-Term-Paper",
        category: "Big Data",
        date: "2023-06-21",
        thumbnail: "Big Data Analytics.jpg"
    },
    {
        title: "Delhi Daily Weather Time Series Analysis and Forecasting",
        description: "Time series analysis and forecasting of Delhi weather patterns using statistical models and machine learning algorithms.",
        github: "https://github.com/AshNumpy/TS-Daily-Weather-Delhi-Time-Series-Analysis",
        category: "Time Series",
        date: "2023-05-26",
        thumbnail: "Delhi Daily Weather Time Series Analysis and Forecasting.jpg"
    },
    {
        title: "Amazon Reviews Analysis | NLP",
        description: "Natural Language Processing project analyzing Amazon product reviews to extract insights and sentiment patterns.",
        github: "https://github.com/AshNumpy/Amazon-Reviews-NLP-ML",
        category: "NLP",
        date: "2023-04-18",
        thumbnail: "Amazon Reviews Analysis.jpg"
    },
    {
        title: "Image Classification with PyTorch",
        description: "Deep learning project implementing image classification using PyTorch framework and convolutional neural networks.",
        github: "https://github.com/AshNumpy/Image-Classification-with-Pytorch",
        category: "Deep Learning",
        date: "2022-11-03",
        thumbnail: "Image Classification with PyTorch.jpg"
    },
    {
        title: "Classification Iris kinds with Neural Networks",
        description: "Classic machine learning project using neural networks to classify Iris flower species with high accuracy.",
        github: "https://github.com/AshNumpy/Iris-Data-Analysis-with-Keras",
        category: "Machine Learning",
        date: "2022-11-15",
        thumbnail: "Classification Iris kinds with Neural Networks.jpg"
    },
    {
        title: "Discovery of Handwashing Explanatory Bootstrap Analysis",
        description: "Statistical analysis project exploring the historical discovery of handwashing importance using bootstrap methods.",
        github: "https://github.com/AshNumpy/Discovery-of-Handwashing-Explanatory-Bootstrap-Analysis",
        category: "Statistical Analysis",
        date: "2022-11-02",
        thumbnail: "Discovery of Handwashing Explanatory Bootstrap Analysis.jpg"
    },
    {
        title: "Predicting Credit-Card Approvals",
        description: "Machine learning model to predict credit card approval decisions based on applicant information and financial data.",
        github: "https://github.com/AshNumpy/ML-Predicting-Credit-Card-Approvals",
        category: "Machine Learning",
        date: "2022-11-02",
        thumbnail: "Predicting Credit-Card Approvals.jpg"
    },
    {
        title: "Predicting and Analyzing Customer's Churn with Neural Networks",
        description: "Deep learning solution for predicting customer churn and analyzing key factors affecting customer retention.",
        github: "https://github.com/AshNumpy/DL-Churn-Analysis",
        category: "Deep Learning",
        date: "2022-11-01",
        thumbnail: "Predicting and Analyzing Customer’s Churn with Neural Networks.jpg"
    },
    {
        title: "Time-Series Analyzing and Forecasting Future Web Traffic",
        description: "Advanced time series analysis project forecasting future web traffic patterns using statistical and ML methods.",
        github: "https://github.com/AshNumpy/TS-Website-Traffic-Forecasting-SARIMAX-Project",
        category: "Time Series",
        date: "2022-10-29",
        thumbnail: "Time-Series Analyzing and Forecasting Future Web Traffic.jpg"
    },
    {
        title: "Analyzing and Predicting Total Income for Car Company",
        description: "Business analytics project analyzing and predicting revenue for automotive companies using regression models.",
        github: "https://github.com/AshNumpy/Regression-Web-App/tree/main",
        category: "Business Analytics",
        date: "2022-07-08",
        thumbnail: "Analyzing and Predicting Total Income for Car Company.jpg"
    },
    {
        title: "Analyzing the Google Play Store Datas",
        description: "Exploratory data analysis of Google Play Store applications, analyzing trends, ratings, and user preferences.",
        github: "https://github.com/AshNumpy/ML-Google-Play-Project/tree/main",
        category: "Data Analysis",
        date: "2022-07-06",
        thumbnail: "Analyzing the Google Play Store Datas.jpg"
    },
    {
        title: "Instagram Post Recommendation Project",
        description: "Recommendation system for Instagram posts using collaborative filtering and content-based algorithms.",
        github: "https://github.com/AshNumpy/ML-Instagram-Recommendation-Project/tree/main",
        category: "Recommendation Systems",
        date: "2022-07-06",
        thumbnail: "Instagram Post Recommendation Project.jpg"
    },
    {
        title: "Netflix Recommendation System",
        description: "Advanced recommendation engine for Netflix content using hybrid filtering approaches and user behavior analysis.",
        github: "https://github.com/AshNumpy/ML-Netflix-Recommendation-Project",
        category: "Recommendation Systems",
        date: "2022-07-06",
        thumbnail: "Netflix Recommendation System.jpg"
    },
    {
        title: "Analyze & Predict Food Ordering Company's Customers Behaviors",
        description: "Customer behavior analysis and prediction for food delivery platforms using ML and behavioral analytics.",
        github: "https://github.com/AshNumpy/ML-Online-Food-Ordering-Project",
        category: "Business Analytics",
        date: "2022-07-06",
        thumbnail: "Analyze & Predict Food Ordering Company’s Customers Behaviors.jpg"
    },
    {
        title: "Predicting Future Cryptocurrencies",
        description: "Cryptocurrency price prediction using time series analysis, neural networks, and market sentiment analysis.",
        github: "https://github.com/AshNumpy/TS-Cryptocurrency-Prediction-Project/tree/main",
        category: "Time Series",
        date: "2022-06-22",
        thumbnail: "Predicting Future Cryptocurrencies.jpg"
    }
];

// Sort projects by date (descending - newest first)
export const sortedProjectsData = [...projectsData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});
