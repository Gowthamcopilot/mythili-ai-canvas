
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  image: string;
  className?: string;
  id: number;
}

const ProjectCard = ({ title, description, tools, image, className, id }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 rounded-full text-xs bg-skyblue bg-opacity-80 text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
        <Link 
          to={`/project/${id}`} 
          className="mt-4 text-skyblue hover:text-skyblue-dark font-medium text-sm flex items-center gap-1"
        >
          Learn more
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
