import { Heart, Globe, Feather, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import HowItWorks from "@/components/HowItWorks";
import heroImage from "@/assets/hero-lumina.jpg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Ethical AI Healer",
      description: "Large moral-language models trained on interfaith ethics guide reproductive decisions with deep compassion and cultural sensitivity.",
      accentColor: "sacred" as const,
    },
    {
      icon: Globe,
      title: "Data Streams for Life",
      description: "Real-time humanitarian data integration predicts maternal health crises before they escalate, saving lives through intelligence.",
      accentColor: "science" as const,
    },
    {
      icon: Feather,
      title: "Ancestral Knowledge Engine",
      description: "Indigenous reproductive health wisdom verified by modern medicine, honoring traditions while ensuring safety.",
      accentColor: "life" as const,
    },
    {
      icon: Shield,
      title: "Trust Protocol",
      description: "Blockchain-based Faith + Science Seal ensuring transparency, consent, and cultural safety in all reproductive data.",
      accentColor: "science" as const,
    },
    {
      icon: Users,
      title: "Community Interface",
      description: "Interfaith dashboards where faith leaders, health workers, and technologists co-curate compassionate education materials.",
      accentColor: "sacred" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sacred-light/10 via-background to-science-light/10" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Conscious Humanitarian Technology</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-sacred to-science bg-clip-text text-transparent">
                  LUMINA Sanctum
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Faith-Science Interface for Humanitarian Health
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                A decentralized AI-driven reproductive health companion that merges faith-based empathy, 
                scientific precision, and cultural intelligence to transform humanitarian healthcare.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm transition-all duration-300 hover:scale-105">
                  Explore the Platform
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300">
                  Join the Mission
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sacred/20 to-science/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="LUMINA Sanctum - Faith and Science converging for humanitarian health"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging millennia of wisdom with cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Impact Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sacred via-science to-life bg-clip-text text-transparent">
              Impact Vision
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-sacred/10 to-sacred/5 border border-sacred/20">
                <div className="text-3xl font-bold text-sacred">In Camps</div>
                <p className="text-foreground/80">
                  Reduces maternal mortality and reproductive trauma through trust-based AI counseling in humanitarian settings.
                </p>
              </div>
              
              <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-science/10 to-science/5 border border-science/20">
                <div className="text-3xl font-bold text-science">In Communities</div>
                <p className="text-foreground/80">
                  Reframes SRHR as sacred stewardship across faith communities, breaking taboos with respect and compassion.
                </p>
              </div>
              
              <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-life/10 to-life/5 border border-life/20">
                <div className="text-3xl font-bold text-life">In Research</div>
                <p className="text-foreground/80">
                  Becomes a global model for Conscious Humanitarian Technology that honors both data and dignity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sacred/5 via-background to-science/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Join the Interface
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a faith leader, health worker, or technologist—your voice matters in this sacred work.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-sacred hover:bg-sacred/90 text-white shadow-warm">
                Faith Leaders
              </Button>
              <Button size="lg" className="bg-science hover:bg-science/90 text-white shadow-warm">
                Health Workers
              </Button>
              <Button size="lg" className="bg-life hover:bg-life/90 text-white shadow-warm">
                Technologists
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            LUMINA Sanctum — Where faith meets science, and technology serves humanity
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
