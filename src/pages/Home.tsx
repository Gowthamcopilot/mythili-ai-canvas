
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 neural-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                GOLI OMKAR<br />MYTHILI GOWTHAM
              </h1>
              
              <p className="text-xl text-skyblue font-medium">
                Aspiring AI Research Engineer | Data Enthusiast | NLP & LLM Explorer
              </p>
              
              <p className="text-gray-600 text-lg max-w-lg">
                I am an AI engineer with expertise in SQL, data analysis, data science, machine learning, deep learning, NLP, and large language models. My passion lies in becoming a cutting-edge AI research engineer.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio">
                  <Button className="bg-skyblue hover:bg-skyblue-dark text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
                    View Portfolio
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-skyblue text-skyblue hover:bg-skyblue hover:text-white px-6 py-2 rounded-md transition-colors">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                {/* Animated circles background */}
                <div className="absolute -z-10 w-72 h-72 bg-skyblue rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -z-10 w-72 h-72 bg-ai-light rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-slow" style={{ animationDelay: "-1.5s" }}></div>
                
                {/* Profile image placeholder - replace with actual profile image */}
                <div className="w-72 h-72 rounded-full border-4 border-white shadow-xl overflow-hidden animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Goli Omkar Mythili Gowtham" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Expertise" 
            subtitle="Passionate about all aspects of AI from data preparation to model development"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-skyblue bg-opacity-10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Science & Analysis</h3>
              <p className="text-gray-600">Transforming raw data into meaningful insights through exploratory analysis, visualization, and statistical modeling.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-skyblue bg-opacity-10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Machine Learning</h3>
              <p className="text-gray-600">Building and deploying machine learning models with particular focus on deep learning for complex tasks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-skyblue bg-opacity-10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NLP & LLMs</h3>
              <p className="text-gray-600">Specializing in Natural Language Processing and Large Language Models for text understanding and generation.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/skills">
              <Button variant="link" className="text-skyblue hover:text-skyblue-dark flex items-center gap-1 mx-auto">
                View all my skills
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Check out some of my recent work in AI research and development"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Lumber Disease Prediction" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Lumber Disease Prediction</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-skyblue bg-opacity-80 text-white">CNN</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-skyblue bg-opacity-80 text-white">DenseNet</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-skyblue bg-opacity-80 text-white">ResNet</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Achieved 99% accuracy in classifying lumber disease using advanced deep learning techniques.</p>
                <Link to="/portfolio">
                  <Button variant="link" className="text-skyblue hover:text-skyblue-dark px-0 flex items-center gap-1">
                    View Project
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Wikipedia Dump Preprocessing for LLM" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Wikipedia Dump Preprocessing</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-skyblue bg-opacity-80 text-white">NLP</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-skyblue bg-opacity-80 text-white">LLM</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-skyblue bg-opacity-80 text-white">Python</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Created a pretraining dataset from raw Wikipedia XML. Extracted and cleaned plain text, entities, categories for downstream LLM tasks.</p>
                <Link to="/portfolio">
                  <Button variant="link" className="text-skyblue hover:text-skyblue-dark px-0 flex items-center gap-1">
                    View Project
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-skyblue bg-opacity-5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to collaborate?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and challenges in the field of AI research. Let's connect and discuss how we can work together.
          </p>
          <Link to="/contact">
            <Button className="bg-skyblue hover:bg-skyblue-dark text-white px-8 py-2 rounded-md transition-colors">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
