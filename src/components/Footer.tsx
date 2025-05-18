
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#f7fcff] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">GOMG</h3>
            <p className="text-gray-600 mb-4">
              Aspiring AI Research Engineer focused on creating innovative solutions with
              machine learning, deep learning, and natural language processing.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Connect</h3>
            <div className="grid grid-cols-3 gap-3">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://huggingface.co/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Hugging Face"
              >
                <svg className="w-5 h-5" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.8 94.26C73.7 94.26 94.6 73.36 94.6 47.46C94.6 21.56 73.8 0.55998 47.8 0.55998C21.8 0.55998 1 21.56 1 47.46C1 73.36 21.9 94.26 47.8 94.26Z" fill="white"/>
                  <path d="M35.3 32.36H28.5V62.36H35.3V32.36Z" fill="currentColor"/>
                  <path d="M37.7 62.36H44.5V28.46H37.7V62.36Z" fill="currentColor"/>
                  <path d="M47.1 32.36V62.36H53.9V47.76L60.1 62.36H68.3L60.1 43.96L68.3 32.36H60.1L53.9 43.96V32.36H47.1Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="https://medium.com/@yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Medium"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} GOLI OMKAR MYTHILI GOWTHAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
