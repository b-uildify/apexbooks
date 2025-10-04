import { BookOpen, FileText, DollarSign, Receipt, RefreshCw, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Bookkeeping",
      description: "Accurate daily transaction recording, account reconciliation, and organized financial records for your peace of mind."
    },
    {
      icon: FileText,
      title: "Financial Reporting",
      description: "Comprehensive financial statements, P&L reports, and balance sheets to give you clear insights into your business health."
    },
    {
      icon: DollarSign,
      title: "Payroll Management",
      description: "Seamless payroll processing, tax calculations, and compliance management to keep your team paid on time."
    },
    {
      icon: Receipt,
      title: "Tax Preparation Assistance",
      description: "Expert support for tax preparation and filing to ensure compliance and maximize your deductions."
    },
    {
      icon: RefreshCw,
      title: "Reconciliation Services",
      description: "Bank and credit card reconciliation to ensure your records match reality and catch discrepancies early."
    },
    {
      icon: Settings,
      title: "Software Setup & Support",
      description: "Professional setup and ongoing support for QuickBooks and Xero to optimize your accounting workflow."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive accounting and bookkeeping solutions designed to meet 
            the unique needs of your growing business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
