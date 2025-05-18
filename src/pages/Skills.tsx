
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";

const Skills = () => {
  const technicalSkills = [
    {
      title: "Python Programming",
      level: 5,
      description: "Expert-level Python for ML/DL model development, data processing, and general application development.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "SQL & Databases",
      level: 4,
      description: "Proficient in SQL query optimization, database design, and working with relational databases.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 15V18C20 19.1046 16.4183 20 12 20C7.58172 20 4 19.1046 4 18V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 11V14C20 15.1046 16.4183 16 12 16C7.58172 16 4 15.1046 4 14V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 7V10C20 11.1046 16.4183 12 12 12C7.58172 12 4 11.1046 4 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <ellipse cx="12" cy="7" rx="8" ry="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Data Analysis",
      level: 4,
      description: "Strong skills in exploratory data analysis, statistical methods, and data visualization with libraries like Pandas and Matplotlib.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Machine Learning",
      level: 4,
      description: "Experienced in implementing and fine-tuning various ML algorithms including supervised and unsupervised learning approaches.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 8L9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 8L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Deep Learning",
      level: 4,
      description: "Skilled in designing and training neural networks using PyTorch and TensorFlow for various applications.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "NLP",
      level: 5,
      description: "Specialized in natural language processing techniques for text understanding, generation, and analysis.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Large Language Models",
      level: 4,
      description: "Experience working with transformer-based models like BERT, GPT for various applications.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 11.5L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L21 11.5L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Computer Vision",
      level: 3,
      description: "Competent in implementing CNN-based models for image classification, segmentation, and object detection.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 16.4183 5.58172 20 10 20C14.4183 20 18 16.4183 18 12V4L2 4V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 19H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const researchInterests = [
    "Large Language Models",
    "Multimodal AI Systems",
    "AI Explainability",
    "Transfer Learning",
    "Neural Architecture Search",
    "Low-resource NLP"
  ];
  
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 bg-neural-bg">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Skills & Expertise" 
            subtitle="My technical capabilities and knowledge areas in AI and data science"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                level={skill.level}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Technical Proficiencies" 
              />
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Languages & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Hugging Face"].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI & ML Techniques</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Neural Networks", "Transformers", "CNN", "RNN", "LSTM", "Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Transfer Learning"].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Jupyter", "Git", "Docker", "AWS", "Google Cloud", "VS Code", "PostgreSQL", "MongoDB", "Linux"].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading 
                title="Research Interests" 
              />
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6">
                  As an aspiring AI Research Engineer, I'm particularly interested in these emerging areas of AI research:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {researchInterests.map((interest, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="mt-1 w-4 h-4 rounded-full bg-skyblue flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-800">{interest}</h4>
                        <p className="text-gray-600 text-sm">
                          {index === 0 && "Developing and fine-tuning LLMs for specialized domains"}
                          {index === 1 && "Integrating vision, text, and audio in unified AI systems"}
                          {index === 2 && "Making AI decision processes more transparent and interpretable"}
                          {index === 3 && "Applying knowledge from one domain to improve performance in another"}
                          {index === 4 && "Automated discovery of optimal neural network architectures"}
                          {index === 5 && "Developing NLP techniques for languages with limited data"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 bg-skyblue bg-opacity-5 p-8 rounded-lg border border-skyblue border-opacity-20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Continuous Learning</h3>
                <p className="text-gray-600 mb-4">
                  I'm committed to ongoing education and staying current with the latest advancements in AI. Recently completed or currently pursuing:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced Natural Language Processing specialization
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Deep Learning for Computer Vision courses
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Kaggle competitions for practical ML experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
