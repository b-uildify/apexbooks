import { Shield, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Years of experience helping businesses manage their finances with precision and care."
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team of qualified accountants ensures your books are always accurate and compliant."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "We take time to understand your unique business needs and provide tailored solutions."
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "We don't just track numbers—we provide insights to help your business thrive."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">APEX BOOKS</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're more than just number crunchers. We're your financial partners committed 
            to helping your business succeed through accurate bookkeeping, strategic insights, 
            and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
