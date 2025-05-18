
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlightText?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  className,
  highlightText
}: SectionHeadingProps) => {
  if (highlightText && title.includes(highlightText)) {
    const parts = title.split(highlightText);
    
    return (
      <div 
        className={cn(
          "mb-12",
          centered && "text-center",
          className
        )}
      >
        <h2 
          className={cn(
            "text-3xl font-bold text-gray-800 section-heading",
            centered && "mx-auto"
          )}
        >
          {parts[0]}
          <span className="text-primary italic">{highlightText}</span>
          {parts[1]}
        </h2>
        
        {subtitle && (
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        )}
      </div>
    );
  }
  
  return (
    <div 
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 
        className={cn(
          "text-3xl font-bold text-gray-800 section-heading",
          centered && "mx-auto"
        )}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
