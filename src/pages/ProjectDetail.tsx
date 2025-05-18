
import { useParams } from "react-router-dom";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { projectsData } from "@/data/projectsData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSection {
  title: string;
  content: string;
  image?: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return <div className="min-h-screen pt-24 container mx-auto px-4">Project not found</div>;
  }
  
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {/* Project Header */}
        <div className="mb-8">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-2xl md:text-4xl font-bold">{project.title}</h1>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-sm bg-skyblue text-white"
              >
                {tool}
              </span>
            ))}
          </div>
          
          <p className="text-gray-700 text-lg">{project.description}</p>
        </div>
        
        {/* Project Content Tabs */}
        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="dataset">Dataset</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Overview</h3>
                    <p className="text-gray-600">
                      {project.fullDescription || "This is a detailed explanation of the project, its goals, and the problem it aims to solve. You can edit this content in the project data file."}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Feature 1 description</li>
                      <li>Feature 2 description</li>
                      <li>Feature 3 description</li>
                    </ul>
                  </div>
                  
                  <div>
                    <img 
                      src={project.overviewImage || project.image} 
                      alt="Project Overview" 
                      className="rounded-lg shadow-md"
                    />
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Tech Stack</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.tools.map((tool, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-skyblue rounded-full"></span>
                            <span>{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="methodology">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Methodology & Approach</h3>
                <p className="text-gray-600 mb-6">
                  Detailed explanation of the methodology and approach used in this project. This includes the algorithms, models, and techniques implemented.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Process Flow</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                      <li>Step 1: Data collection and preprocessing</li>
                      <li>Step 2: Feature engineering and selection</li>
                      <li>Step 3: Model architecture design</li>
                      <li>Step 4: Training and validation</li>
                      <li>Step 5: Testing and evaluation</li>
                    </ol>
                  </div>
                  
                  <div>
                    <img 
                      src={project.methodologyImage || "https://images.unsplash.com/photo-1518770660439-4636190af475"} 
                      alt="Methodology diagram" 
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Project methodology flow diagram</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dataset">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Dataset Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-600 mb-4">
                      Information about the dataset used for this project, including its source, size, and characteristics.
                    </p>
                    
                    <h4 className="font-medium text-gray-800 mb-3">Dataset Details</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Source:</strong> {project.datasetSource || "Dataset source information"}</li>
                      <li><strong>Size:</strong> {project.datasetSize || "Dataset size information"}</li>
                      <li><strong>Format:</strong> {project.datasetFormat || "Dataset format information"}</li>
                      <li><strong>License:</strong> {project.datasetLicense || "Dataset license information"}</li>
                    </ul>
                    
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800 mb-3">Preprocessing Steps</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Cleaning and normalization</li>
                        <li>Feature extraction</li>
                        <li>Data augmentation</li>
                        <li>Train/validation/test split</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src={project.datasetImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71"} 
                      alt="Dataset visualization" 
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Dataset visualization</p>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Available on</h4>
                      <a 
                        href={project.huggingfaceLink || "https://huggingface.co/datasets"} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-skyblue hover:text-skyblue-dark flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M47.8 94.26C73.7 94.26 94.6 73.36 94.6 47.46C94.6 21.56 73.8 0.55998 47.8 0.55998C21.8 0.55998 1 21.56 1 47.46C1 73.36 21.9 94.26 47.8 94.26Z" fill="white"/>
                          <path d="M35.3 32.36H28.5V62.36H35.3V32.36Z" fill="currentColor"/>
                          <path d="M37.7 62.36H44.5V28.46H37.7V62.36Z" fill="currentColor"/>
                          <path d="M47.1 32.36V62.36H53.9V47.76L60.1 62.36H68.3L60.1 43.96L68.3 32.36H60.1L53.9 43.96V32.36H47.1Z" fill="currentColor"/>
                        </svg>
                        Hugging Face
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Results & Evaluation</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive results and evaluation metrics for the project, including performance analysis.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Performance Metrics</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Accuracy</p>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-skyblue" 
                            style={{width: project.accuracy ? `${parseInt(project.accuracy)}%` : "96%"}}
                          ></div>
                        </div>
                        <p className="text-right text-sm text-gray-600">{project.accuracy || "96%"}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Precision</p>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-skyblue" 
                            style={{width: project.precision ? `${parseInt(project.precision)}%` : "94%"}}
                          ></div>
                        </div>
                        <p className="text-right text-sm text-gray-600">{project.precision || "94%"}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Recall</p>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-skyblue" 
                            style={{width: project.recall ? `${parseInt(project.recall)}%` : "92%"}}
                          ></div>
                        </div>
                        <p className="text-right text-sm text-gray-600">{project.recall || "92%"}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">F1 Score</p>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-skyblue" 
                            style={{width: project.f1score ? `${parseInt(project.f1score)}%` : "93%"}}
                          ></div>
                        </div>
                        <p className="text-right text-sm text-gray-600">{project.f1score || "93%"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src={project.resultsImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71"} 
                      alt="Results visualization" 
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-500 mt-2 italic">Figure: Results visualization</p>
                    
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-800 mb-3">Key Findings</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Finding 1: Performance exceeded baseline by 25%</li>
                        <li>Finding 2: Model generalizes well to unseen data</li>
                        <li>Finding 3: Efficient inference time suitable for production</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Links Section */}
        <section className="mb-16">
          <SectionHeading title="Resources & Links" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href={project.githubLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">GitHub Repository</p>
                <p className="text-sm text-gray-500">View source code</p>
              </div>
            </a>
            
            <a 
              href={project.paperLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">Research Paper</p>
                <p className="text-sm text-gray-500">Read methodology</p>
              </div>
            </a>
            
            <a 
              href={project.demoLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">Live Demo</p>
                <p className="text-sm text-gray-500">See it in action</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
