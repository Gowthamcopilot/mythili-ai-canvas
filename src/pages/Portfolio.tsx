
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Lumber Disease Prediction",
      description: "Achieved 99% accuracy in classifying lumber disease using advanced deep learning techniques with CNN, DenseNet, and ResNet architectures. This project involved dataset creation, model training, and deployment.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tools: ["CNN", "DenseNet", "ResNet", "Computer Vision"],
      category: "Computer Vision"
    },
    {
      id: 2,
      title: "Wikipedia Dump Preprocessing for LLM",
      description: "Created a pretraining dataset from raw Wikipedia XML. Extracted and cleaned plain text, entities, categories for use in downstream LLM tasks. Implemented efficient parsing and cleaning pipelines.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tools: ["NLP", "LLM", "Python", "Data Processing"],
      category: "Natural Language Processing"
    },
    {
      id: 3,
      title: "SQL Query Optimization Tool",
      description: "Developed a tool to analyze and optimize SQL queries for performance. The tool suggests improvements based on execution plans and database statistics.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tools: ["SQL", "Python", "Database Optimization"],
      category: "Data Engineering"
    },
    {
      id: 4,
      title: "Time Series Forecasting System",
      description: "Built a time series forecasting system for predicting stock prices using LSTM networks and traditional statistical methods.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tools: ["LSTM", "Time Series", "Python", "Data Visualization"],
      category: "Machine Learning"
    }
  ];

  const categories = Array.from(new Set(projects.map(p => p.category)));
  
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Portfolio" 
            subtitle="Explore my projects in AI, machine learning, and data science"
            centered
          />
          
          {/* Categories filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 rounded-full bg-skyblue text-white">
              All Projects
            </button>
            
            {categories.map((category) => (
              <button 
                key={category} 
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tools={project.tools}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Project Approach" 
              centered
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">My Development Process</h3>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex gap-3">
                      <span className="font-medium text-skyblue">1.</span>
                      <span>Problem Definition & Research</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-skyblue">2.</span>
                      <span>Data Collection & Exploration</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-skyblue">3.</span>
                      <span>Model Design & Architecture Selection</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-skyblue">4.</span>
                      <span>Implementation & Experimentation</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-skyblue">5.</span>
                      <span>Evaluation & Refinement</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-skyblue">6.</span>
                      <span>Documentation & Knowledge Sharing</span>
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools & Technologies</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      Python
                    </li>
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      PyTorch
                    </li>
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      TensorFlow
                    </li>
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      Scikit-learn
                    </li>
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      SQL
                    </li>
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      Pandas
                    </li>
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      Hugging Face
                    </li>
                    <li className="bg-gray-50 p-2 rounded flex items-center">
                      <span className="w-2 h-2 bg-skyblue rounded-full mr-2"></span>
                      Docker
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
