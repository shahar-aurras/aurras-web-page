import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Package } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Aurras
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
            Empowering businesses with innovative automation solutions and comprehensive product management services
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Automation Solutions */}
          <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Automation Solutions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Streamline your operations with our cutting-edge automation technologies. 
                  We help businesses reduce manual workload, increase efficiency, and scale 
                  seamlessly with intelligent automation workflows.
                </p>
              </div>
            </div>
          </Card>

          {/* PMAAS */}
          <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                <Package className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  PMAAS
                </h2>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">
                  Product Management as a Service
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Access expert product management resources on demand. Our PMAAS offering 
                  provides strategic guidance, roadmap development, and execution support to 
                  help your products succeed in the market.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Ready to transform your business?
          </h3>
          <p className="text-muted-foreground">
            Discover how Aurras can help you achieve operational excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
