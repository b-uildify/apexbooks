import { CheckCircle } from "lucide-react";

const Software = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Software <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in the industry's leading accounting platforms to give you 
            the best tools for financial management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-bold text-primary">QuickBooks</div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">QuickBooks Certified</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Complete setup and customization for your business needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Automated workflows to save you time and reduce errors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Training and ongoing support for your team</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Seamless integration with your existing tools</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-bold text-primary">Xero</div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">Xero Specialists</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Cloud-based accounting accessible anywhere, anytime</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Real-time financial reporting and dashboards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Bank reconciliation made simple and efficient</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Expert guidance on leveraging Xero's full potential</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Whether you're using QuickBooks, Xero, or looking to switch, we'll help you 
            choose the right platform and get the most out of your investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Software;
