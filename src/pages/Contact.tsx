
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Contact Me" 
            subtitle="Let's connect and discuss how we can work together"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-skyblue bg-opacity-10 flex items-center justify-center text-skyblue">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">your.email@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-skyblue bg-opacity-10 flex items-center justify-center text-skyblue">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+91-XXXXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-skyblue bg-opacity-10 flex items-center justify-center text-skyblue">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <a href="https://linkedin.com/in/yourprofile" className="font-medium text-skyblue hover:underline">
                        linkedin.com/in/yourprofile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-skyblue bg-opacity-10 flex items-center justify-center text-skyblue">
                      <Github size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <a href="https://github.com/yourusername" className="font-medium text-skyblue hover:underline">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Open to Opportunities</h3>
                <p className="text-gray-600">
                  I'm currently looking for opportunities in:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    AI Research Internships
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Collaborative Research Projects
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Entry-level AI Engineer Positions
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-skyblue bg-opacity-5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Build the Future of AI Together</h2>
            <p className="text-gray-600">
              Whether you're looking for an AI enthusiast for your team, have a research idea to discuss, 
              or just want to connect with someone passionate about artificial intelligence, 
              I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
