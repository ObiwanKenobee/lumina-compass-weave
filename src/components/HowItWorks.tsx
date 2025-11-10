import { useState } from "react";
import { Heart, Database, Brain, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProcessStep {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: "sacred" | "science" | "life";
}

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps: ProcessStep[] = [
    {
      id: 1,
      icon: Heart,
      title: "Faith-Based Context",
      description: "User shares their cultural and faith background, creating a foundation of trust and understanding rooted in their beliefs.",
      color: "sacred",
    },
    {
      id: 2,
      icon: Database,
      title: "Data Integration",
      description: "System integrates real-time humanitarian data, local health infrastructure info, and ancestral knowledge databases.",
      color: "science",
    },
    {
      id: 3,
      icon: Brain,
      title: "Ethical AI Processing",
      description: "Moral-language models process the query through interfaith ethical frameworks, ensuring culturally sensitive guidance.",
      color: "life",
    },
    {
      id: 4,
      icon: Shield,
      title: "Trust Verification",
      description: "Blockchain protocol verifies data integrity, ensures consent, and maintains the Faith + Science Seal of transparency.",
      color: "science",
    },
    {
      id: 5,
      icon: Sparkles,
      title: "Compassionate Response",
      description: "Personalized guidance blending sacred wisdom with medical science, delivered with empathy and cultural respect.",
      color: "sacred",
    },
  ];

  const getColorClasses = (color: "sacred" | "science" | "life", isActive: boolean) => {
    const baseClasses = {
      sacred: isActive ? "border-sacred bg-sacred/5" : "border-border/50",
      science: isActive ? "border-science bg-science/5" : "border-border/50",
      life: isActive ? "border-life bg-life/5" : "border-border/50",
    };
    return baseClasses[color];
  };

  const getIconColorClasses = (color: "sacred" | "science" | "life") => {
    return {
      sacred: "text-sacred bg-sacred/10",
      science: "text-science bg-science/10",
      life: "text-life bg-life/10",
    }[color];
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-sacred/5 via-transparent to-science/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The journey from question to compassionate guidance
          </p>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-primary/20 z-0" />
              )}
              
              <div
                className="relative z-10"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <Card 
                  className={`transition-all duration-500 cursor-pointer ${
                    getColorClasses(step.color, activeStep === step.id)
                  } ${
                    activeStep === step.id ? "shadow-warm scale-105" : "hover:shadow-soft"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Step number and icon */}
                      <div className="flex flex-col items-center gap-3 flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getIconColorClasses(step.color)} transition-all duration-300 ${
                          activeStep === step.id ? "scale-110" : ""
                        }`}>
                          <step.icon className="w-8 h-8" />
                        </div>
                        <div className="text-sm font-bold text-muted-foreground">
                          Step {step.id}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                          {step.title}
                          {activeStep === step.id && (
                            <ArrowRight className="w-5 h-5 text-primary animate-fade-in" />
                          )}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {activeStep === step.id && (
                      <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="font-medium">Active in your journey</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge Visualization */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative p-8 rounded-3xl bg-gradient-to-r from-sacred/10 via-background to-science/10 border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Faith Side */}
              <div className="text-center space-y-3 animate-fade-in">
                <div className="inline-flex w-20 h-20 rounded-full bg-sacred/20 items-center justify-center mb-2">
                  <Heart className="w-10 h-10 text-sacred" />
                </div>
                <h4 className="text-xl font-bold text-sacred">Faith & Culture</h4>
                <p className="text-sm text-muted-foreground">
                  Sacred wisdom, ancestral knowledge, community values
                </p>
              </div>

              {/* Bridge */}
              <div className="text-center space-y-3 animate-scale-in" style={{ animationDelay: "200ms" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-sacred via-primary to-science rounded-full blur-xl opacity-30 animate-pulse" />
                  <div className="relative inline-flex w-20 h-20 rounded-full bg-gradient-to-r from-sacred to-science items-center justify-center">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-sacred to-science bg-clip-text text-transparent">
                  AI Bridge
                </h4>
                <p className="text-sm text-muted-foreground">
                  Ethical AI processing with interfaith sensitivity
                </p>
              </div>

              {/* Science Side */}
              <div className="text-center space-y-3 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="inline-flex w-20 h-20 rounded-full bg-science/20 items-center justify-center mb-2">
                  <Database className="w-10 h-10 text-science" />
                </div>
                <h4 className="text-xl font-bold text-science">Science & Data</h4>
                <p className="text-sm text-muted-foreground">
                  Medical precision, real-time data, verified research
                </p>
              </div>
            </div>

            {/* Connecting arrows */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-sacred/30" />
              <ArrowRight className="w-8 h-8 text-science/30 rotate-180" />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
              Experience the Bridge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
