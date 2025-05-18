
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  level: number; // 1-5
  description: string;
  className?: string;
}

const SkillCard = ({ title, icon, level, description, className }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-skyblue bg-opacity-10 flex items-center justify-center text-skyblue">
          {icon}
        </div>
        <h3 className="font-medium text-lg text-gray-800">{title}</h3>
      </div>
      
      <div className="mb-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className={cn(
                "w-6 h-1 rounded-full",
                i < level ? "bg-skyblue" : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
