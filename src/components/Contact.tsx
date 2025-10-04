import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      contactSchema.parse(formData);

      // Save to database
      const { error: dbError } = await supabase
        .from('leads')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          status: 'new'
        });

      if (dbError) {
        throw new Error("Failed to save your request. Please try again.");
      }

      // Also open email client as backup notification
      const subject = encodeURIComponent(`New Consultation Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:APEXBOOKS1@OUTLOOK.COM?subject=${subject}&body=${body}`;

      toast({
        title: "Request submitted successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get Your <span className="text-primary">Free Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to take control of your finances? Let's discuss how we can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:APEXBOOKS1@OUTLOOK.COM" className="text-muted-foreground hover:text-primary transition-colors">
                      APEXBOOKS1@OUTLOOK.COM
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">Available via email consultation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Service Area</p>
                    <p className="text-muted-foreground">Serving businesses nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Free initial consultation</li>
                <li>✓ Customized service packages</li>
                <li>✓ Quick response times</li>
                <li>✓ Transparent pricing</li>
                <li>✓ Expert support team</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full"
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full"
              />
            </div>

            <div>
              <Textarea
                placeholder="Tell us about your business and how we can help... *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
