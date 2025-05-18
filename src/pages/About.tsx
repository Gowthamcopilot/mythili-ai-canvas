
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 bg-neural-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="About Me" 
                subtitle="Learn more about my background and passion for AI research"
              />
              
              <p className="text-gray-600 mb-6">
                I am an aspiring AI Research Engineer with a strong foundation in computer science and a passion for exploring the cutting-edge of artificial intelligence. My journey in AI started during my undergraduate studies, where I was fascinated by the potential of machine learning to solve complex problems.
              </p>
              
              <p className="text-gray-600 mb-6">
                Currently pursuing my B.Tech in Computer Science and Engineering, I'm dedicated to continuous learning and hands-on experience in various AI domains including natural language processing, computer vision, and large language models.
              </p>
              
              <p className="text-gray-600 mb-6">
                My goal is to contribute to meaningful research that advances the field of AI, particularly in making AI more accessible, interpretable, and beneficial to society. I'm especially interested in the development of robust and ethical AI systems that can handle real-world challenges.
              </p>
              
              <div className="mt-8">
                <Button className="bg-skyblue hover:bg-skyblue-dark text-white flex items-center gap-2">
                  <FileText size={18} />
                  Download Resume
                </Button>
              </div>
            </div>
            
            <div className="relative">
              {/* Profile Image */}
              <div className="relative z-10 w-full max-w-md mx-auto shadow-xl">
                <div className="gradient-border">
                  <div className="p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Goli Omkar Mythili Gowtham" 
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              {/* Background design elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-skyblue rounded-full opacity-20"></div>
              <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-ai-light rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-skyblue rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Education & Expertise" 
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Educational Background</h3>
              
              <div className="mb-8">
                <p className="text-skyblue font-medium text-lg mb-1">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-800 font-semibold">MIC College of Technology</p>
                <p className="text-gray-600">Kanchikacherla, Andhra Pradesh</p>
                <p className="text-gray-600">Graduating June 2025</p>
                <p className="text-gray-700 mt-2">CGPA: 8.0</p>
              </div>
              
              <div>
                <p className="text-gray-700 font-medium mb-2">Key Coursework:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Machine Learning Fundamentals</li>
                  <li>Deep Learning Architectures</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>Database Systems & SQL</li>
                  <li>Data Structures & Algorithms</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tools & Technologies</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-medium text-gray-800 mb-2">Programming</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>Python</li>
                    <li>SQL</li>
                    <li>PyTorch</li>
                    <li>TensorFlow</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-medium text-gray-800 mb-2">ML & DL</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>Scikit-Learn</li>
                    <li>CNN Architectures</li>
                    <li>Transformer Models</li>
                    <li>Feature Engineering</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-medium text-gray-800 mb-2">NLP & LLM</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>Hugging Face</li>
                    <li>BERT & GPT</li>
                    <li>Text Processing</li>
                    <li>Embeddings</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-medium text-gray-800 mb-2">Data & Analysis</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Data Visualization</li>
                    <li>Statistical Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Career Goals" 
            centered
          />
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              My career aspiration is to become a leading AI Research Engineer, pushing the boundaries of what's possible with artificial intelligence. I aim to:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-skyblue flex items-center justify-center text-white font-medium">1</div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Drive Innovation in AI Research</h4>
                  <p className="text-gray-600">Contribute to cutting-edge research that advances the state-of-the-art in AI, particularly in NLP and multimodal learning.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-skyblue flex items-center justify-center text-white font-medium">2</div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Bridge Theory and Application</h4>
                  <p className="text-gray-600">Develop AI solutions that solve real-world problems while advancing theoretical understanding.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-skyblue flex items-center justify-center text-white font-medium">3</div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Ethical AI Development</h4>
                  <p className="text-gray-600">Ensure AI systems are developed with strong ethical considerations, fairness, and transparency.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/portfolio">
                <Button className="bg-skyblue hover:bg-skyblue-dark text-white">
                  View My Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
