import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      
      {/* Placeholder for additional sections */}
      <section className="bg-card py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of Bangladeshi students who have successfully pursued their dreams abroad with EduGlobal.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
