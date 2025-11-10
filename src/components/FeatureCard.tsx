import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: "sacred" | "science" | "life";
}

const FeatureCard = ({ icon: Icon, title, description, accentColor }: FeatureCardProps) => {
  const accentClasses = {
    sacred: "text-sacred group-hover:text-sacred-light",
    science: "text-science group-hover:text-science-light",
    life: "text-life group-hover:text-life-light",
  };

  return (
    <Card className="group border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-warm bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6 space-y-4">
        <div className={`inline-flex p-3 rounded-2xl bg-muted/50 ${accentClasses[accentColor]} transition-colors duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
