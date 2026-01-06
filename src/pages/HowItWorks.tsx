import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileText, Users, Plane, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Explore & Discover",
      description: "Browse through 2000+ universities across 150+ countries. Filter by program, country, budget, and requirements to find your perfect match.",
      features: ["Smart search filters", "Compare universities", "View program details", "Check eligibility"],
    },
    {
      number: "02",
      icon: FileText,
      title: "Apply Online",
      description: "Complete your application with our streamlined process. Upload documents, fill forms, and track your application status in real-time.",
      features: ["Easy document upload", "Auto-fill forms", "Real-time tracking", "Multiple applications"],
    },
    {
      number: "03",
      icon: Users,
      title: "Expert Consultation",
      description: "Our experienced consultants guide you through visa applications, scholarship opportunities, and admission requirements.",
      features: ["Visa assistance", "Scholarship guidance", "Interview preparation", "Document verification"],
    },
    {
      number: "04",
      icon: Plane,
      title: "Fly & Study",
      description: "Get pre-departure briefing, accommodation assistance, and connect with fellow students heading to the same destination.",
      features: ["Pre-departure guidance", "Accommodation help", "Airport pickup", "Student community"],
    },
  ];

  const stats = [
    { value: "98%", label: "Visa Success Rate" },
    { value: "50K+", label: "Students Placed" },
    { value: "150+", label: "Countries" },
    { value: "2000+", label: "Partner Universities" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple 4-Step Process</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It <span className="text-gradient">Works</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your journey to studying abroad made simple. From discovery to departure, 
              we guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-primary/20">{step.number}</span>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{step.title}</h2>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 flex items-center justify-center">
                      <step.icon className="w-32 h-32 text-primary/30" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                        <ArrowRight className={`w-8 h-8 text-primary/30 ${index % 2 === 0 ? 'rotate-90' : '-rotate-90'}`} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join 50,000+ Bangladeshi students who have successfully achieved their dreams of studying abroad with EduGlobal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/institutions">
                <Button size="lg" className="shadow-button">
                  Explore Universities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
