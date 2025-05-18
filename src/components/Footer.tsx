
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

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
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Mail size={18} />
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
