const footerLinks = {
  Product: ["Features", "Pricing", "Security", "API"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "Status"],
  Legal: ["Privacy", "Terms", "Cookies", "Compliance"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card text-foreground pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="font-bold text-sm text-primary-foreground">
                  Fi
                </span>
              </div>
              <span className="font-bold text-lg">
                FinanceAI
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered financial intelligence for the modern investor.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-semibold text-sm mb-4">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-border mt-12 py-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 FinanceAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;