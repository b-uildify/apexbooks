import { Mail, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">APEX BOOKS</h3>
            <p className="text-background/80 mb-4">
              Professional accounting and bookkeeping services for small businesses and entrepreneurs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:APEXBOOKS1@OUTLOOK.COM" className="hover:text-primary transition-colors">
                  APEXBOOKS1@OUTLOOK.COM
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} APEX BOOKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
