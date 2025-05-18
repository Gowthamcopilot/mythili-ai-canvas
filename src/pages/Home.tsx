
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-[#fffdf6]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Solving <span className="text-primary italic">modern problems</span> through design
              </h1>
              
              <p className="text-xl text-gray-600 font-medium">
                Aspiring AI Research Engineer | Data Enthusiast | NLP & LLM Explorer
              </p>
              
              <p className="text-gray-600 text-lg max-w-lg">
                I am an AI engineer with expertise in SQL, data analysis, data science, machine learning, deep learning, NLP, and large language models. My passion lies in becoming a cutting-edge AI research engineer.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio">
                  <Button className="bg-primary hover:bg-yellow-dark text-primary-foreground px-6 py-6 rounded-md flex items-center gap-2 transition-colors">
                    Hire Me
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-gray-800 hover:bg-primary hover:text-primary-foreground px-6 py-6 rounded-md transition-colors">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                {/* Yellow circle background */}
                <div className="absolute -z-10 w-72 h-72 bg-yellow-light rounded-full right-[-20px] top-[-20px]"></div>
                
                {/* Profile image placeholder - replace with actual profile image */}
                <div className="w-72 h-72 rounded-full border-4 border-white shadow-xl overflow-hidden">
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
      
      {/* My Recent Work Section */}
      <section className="py-20 bg-[#fffdf6]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My recent work" 
            subtitle="Check out some of my recent work in AI research and development"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="App Design" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">App Design</h3>
              <p className="text-gray-600 mb-4">UI/UX for mobile applications with focus on user experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Medical Website" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Website</h3>
              <p className="text-gray-600 mb-4">Healthcare platforms designed for accessibility and information clarity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Financial Dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Dashboard</h3>
              <p className="text-gray-600 mb-4">Data visualization for financial metrics and analytics.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Working with brands section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Working with the best brand across the globe"
            highlightText="best brand"
            centered
          />
          
          <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
            <div className="grayscale hover:grayscale-0 transition-all">
              <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="h-12" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <img src="https://cdn.worldvectorlogo.com/logos/netflix-4.svg" alt="Netflix" className="h-12" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <img src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" alt="Slack" className="h-12" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <img src="https://cdn.worldvectorlogo.com/logos/google-2015.svg" alt="Google" className="h-12" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-[#fffdf6]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Solving problems by the services" 
            highlightText="services"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-yellow-light flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Science & Analysis</h3>
              <p className="text-gray-600">Transforming raw data into meaningful insights through exploratory analysis, visualization, and statistical modeling.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-yellow-light flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Machine Learning</h3>
              <p className="text-gray-600">Building and deploying machine learning models with particular focus on deep learning for complex tasks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-yellow-light flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NLP & LLMs</h3>
              <p className="text-gray-600">Specializing in Natural Language Processing and Large Language Models for text understanding and generation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Let's have a look at my portfolio"
            highlightText="portfolio"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/300x200?tech=${item}`}
                    alt={`Portfolio item ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold">{item}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button className="mt-12 bg-primary hover:bg-yellow-dark text-primary-foreground px-8 py-6">
            See More
          </Button>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-[#fffdf6]">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What my clients say"
            highlightText="clients say"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${item + 10}.jpg`} 
                      alt={`Client ${item}`}
                      className="w-12 h-12 rounded-full" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Client Name</h4>
                    <p className="text-sm text-gray-500">Position, Company</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Working with GOMG was an excellent experience. Their expertise in AI and data science helped us solve complex problems efficiently."
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Let's talk for something special" 
                highlightText="special"
                className="text-left mb-8"
              />
              <p className="text-gray-600 mb-6">
                I'm always interested in new opportunities and challenges in the field of AI research. Let's connect and discuss how we can work together.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-yellow-dark text-primary-foreground px-8 py-6 rounded-md transition-colors">
                  Contact Now
                </Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-yellow-dark text-primary-foreground py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Connect Section */}
      <section className="py-16 bg-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-12">Let's <span className="font-bold">connect</span> there</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {name: "Facebook", icon: "facebook", color: "bg-blue-600"},
              {name: "Instagram", icon: "instagram", color: "bg-pink-600"},
              {name: "Twitter", icon: "twitter", color: "bg-blue-400"},
              {name: "LinkedIn", icon: "linkedin", color: "bg-blue-800"}
            ].map((social) => (
              <div key={social.name} className="bg-white p-4 rounded-lg shadow flex items-center">
                <div className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center mr-3`}>
                  <i className={`fab fa-${social.icon} text-white`}></i>
                </div>
                <div className="text-left">
                  <p className="font-semibold">{social.name}</p>
                  <p className="text-sm text-gray-500">@username</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
