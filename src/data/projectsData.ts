
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  tools: string[];
  image: string;
  category: string;
  
  // Optional detailed project information
  githubLink?: string;
  paperLink?: string;
  demoLink?: string;
  huggingfaceLink?: string;
  
  // Dataset information
  datasetSource?: string;
  datasetSize?: string;
  datasetFormat?: string;
  datasetLicense?: string;
  
  // Performance metrics
  accuracy?: string;
  precision?: string;
  recall?: string;
  f1score?: string;
  
  // Additional images
  overviewImage?: string;
  methodologyImage?: string;
  datasetImage?: string;
  resultsImage?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Lumber Disease Prediction",
    description: "Achieved 99% accuracy in classifying lumber disease using advanced deep learning techniques with CNN, DenseNet, and ResNet architectures. This project involved dataset creation, model training, and deployment.",
    fullDescription: "This project focused on the early detection of lumber diseases using computer vision techniques. By leveraging convolutional neural networks, we developed a system that can identify various lumber diseases with high accuracy, helping forestry professionals take timely action to prevent spread.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tools: ["CNN", "DenseNet", "ResNet", "Computer Vision"],
    category: "Computer Vision",
    accuracy: "99%",
    githubLink: "https://github.com/yourusername/lumber-disease-prediction",
    datasetSource: "Custom collected dataset from forestry departments",
    datasetSize: "10,000 labeled images",
    methodologyImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Wikipedia Dump Preprocessing for LLM",
    description: "Created a pretraining dataset from raw Wikipedia XML. Extracted and cleaned plain text, entities, categories for use in downstream LLM tasks. Implemented efficient parsing and cleaning pipelines.",
    fullDescription: "This project involved creating a comprehensive preprocessing pipeline for Wikipedia dumps to create high-quality training data for language models. The pipeline handles the extraction of plain text, entities, and categories from the raw XML dumps, while maintaining document structure and relationships.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tools: ["NLP", "LLM", "Python", "Data Processing"],
    category: "Natural Language Processing",
    huggingfaceLink: "https://huggingface.co/datasets/wikipedia",
    datasetSource: "Wikipedia XML dumps",
    datasetSize: "100GB of text data",
    datasetFormat: "Processed JSON files"
  },
  {
    id: 3,
    title: "SQL Query Optimization Tool",
    description: "Developed a tool to analyze and optimize SQL queries for performance. The tool suggests improvements based on execution plans and database statistics.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tools: ["SQL", "Python", "Database Optimization"],
    category: "Data Engineering",
    githubLink: "https://github.com/yourusername/sql-query-optimizer"
  },
  {
    id: 4,
    title: "Time Series Forecasting System",
    description: "Built a time series forecasting system for predicting stock prices using LSTM networks and traditional statistical methods.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tools: ["LSTM", "Time Series", "Python", "Data Visualization"],
    category: "Machine Learning",
    accuracy: "92%",
    precision: "90%"
  }
];
