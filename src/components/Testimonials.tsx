import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Boutique",
      text: "APEX BOOKS transformed our financial management. They're professional, responsive, and always go the extra mile. Our books have never been more organized!",
      rating: 5
    },
    {
      name: "Michael Chen",
      business: "Chen Digital Marketing",
      text: "Switching to APEX BOOKS was the best decision for our growing agency. They handle everything seamlessly, and their insights have helped us make smarter financial decisions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      business: "Rodriguez Consulting",
      text: "I love how accessible and transparent APEX BOOKS is. They explain everything clearly and make tax season stress-free. Highly recommend their services!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from the businesses we've helped succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
