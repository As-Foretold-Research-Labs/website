import Link from "next/link";

const products = [
  {
    title: "Augur",
    category: "Governance Automation",
    description: "AI-powered compliance automation that maps security findings to SOC 2 and ISO 27001 controls automatically.",
    tags: ["C# / .NET 10", "Blazor", "EF Core", "OpenAPI 3.1.1"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "DokSim",
    category: "Clinical Training Simulation",
    description: "Advanced patient communication simulator with intelligent LLM evaluation and safe branching for medical training.",
    tags: ["Python 3.11", "LangGraph", "Chroma", "FastAPI"],
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 14L11 17L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "2", label: "Active Products" },
  { value: "SOC 2", label: "Compliance Framework" },
  { value: "OpenAI", label: "LLM Integration" },
  { value: "100%", label: "Uptime SLA" },
];

const researchAreas = [
  {
    title: "Digital Twin",
    description: "High-fidelity virtual representations of physical systems for predictive behavior modeling and workflow optimization.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21V9" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 21V9" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7V3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Robotics Simulation",
    description: "Robust virtual environments for training autonomous agents in complex, dynamic operational spaces.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 6H9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 14C3 10.5 5.5 7.5 9 8.5C10.5 8.8 12 9.5 13.5 9.5C15 9.5 16.5 8.8 18 8.5C21.5 7.5 24 10.5 24 14V20C24 21.1 23.1 22 22 22H2C0.9 22 0 21.1 0 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 14V20" stroke="currentColor" strokeWidth="2"/>
        <path d="M19 14V20" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Open Source Intelligence",
    description: "Strategic analysis of open-source data to reveal emerging patterns, market trends, and actionable intelligence.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <circle cx="21" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 3V9L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive analysis of threat vectors and defensive strategies in the evolving digital security landscape.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22S2 14 2 8C2 5.3 3.7 3 6.3 3C8.9 3 11.5 4.2 12 6.5C12.5 4.2 15.1 3 17.7 3C20.3 3 22 5.3 22 8C22 14 12 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    description: "Cutting-edge exploration of machine learning, neural networks, and emerging AI architectures.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="2" transform="rotate(120 12 12)"/>
      </svg>
    ),
    isFeatured: true,
  },
];

export default function Home() {
  return (
    <div className="gradient-bg min-h-screen">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] bg-accent/10 rounded-full blur-[110px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent">
              As Foretold Labs
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#products" className="text-sm font-medium text-muted hover:text-primary transition-colors">Products</Link>
            <Link href="#research" className="text-sm font-medium text-muted hover:text-primary transition-colors">Research</Link>
            <Link href="/about" className="text-sm font-medium text-muted hover:text-primary transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#research" className="hidden md:block text-sm font-medium text-muted hover:text-primary transition-colors">Explore Research</Link>
            <Link href="/products/augur" className="btn btn-primary text-sm">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-primary tracking-wider uppercase">Innovating at the Edge</span>
          </div>

          <h1 className="mb-6">
            We build{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              intelligent systems
            </span>{" "}
            at the intersection of simulation, automation, and human-computer interaction.
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-lg text-muted leading-relaxed">
            Pioneering next-generation technologies that bridge artificial intelligence with practical enterprise solutions. 
            From compliance automation to clinical simulation, we're shaping the future of intelligent systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/products/augur" className="btn btn-primary">
              View Our Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link href="#research" className="btn btn-secondary">
              Explore Research
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="card p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Tools for Modern Challenges</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Cutting-edge solutions built with industry-leading technologies and designed for real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="card-gradient gradient-border group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all duration-500" />
                
                <div className="relative p-8">
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 inline-flex">
                    {product.icon}
                  </div>

                  <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-primary/70 text-sm uppercase tracking-wider mb-4">{product.category}</p>
                  
                  <p className="text-muted leading-relaxed mb-6 max-w-xl">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={product.href} className="absolute inset-0" aria-label={`Learn more about ${product.title}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="md:w-1/3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase mb-4">
                Innovation Lab
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Areas of Exploration</h2>
              <p className="text-muted leading-relaxed max-w-xl">
                Our research team pushes the boundaries of what's possible in artificial intelligence and simulation technologies.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="card p-6 text-center">
                    <span className="text-3xl font-bold text-primary mb-1">40+</span>
                    <p className="text-sm text-muted">Research Papers</p>
                  </div>
                  <div className="card p-6 text-center">
                    <span className="text-3xl font-bold text-secondary mb-1">25+</span>
                    <p className="text-sm text-muted">Patents Filed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
              <article key={idx} className="card hover:bg-gradient-to-br from-bg-card to-bg-secondary transition-all duration-300 group">
                <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary inline-flex w-fit group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${area.isFeatured ? 'text-primary' : ''} group-hover:text-primary transition-colors`}>
                  {area.title}
                </h3>
                
                <p className="text-muted leading-relaxed text-sm">
                  {area.description}
                </p>

                {area.isFeatured && (
                  <span className="mt-4 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold tracking-wide uppercase text-white">
                    Featured Research
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient relative overflow-hidden p-12 md:p-16 text-center">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 opacity-50" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
                Let's Collaborate
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
                We're always exploring new partnerships and technical challenges. Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-primary gradient-border">
                  Get in Touch
                </Link>
                <Link href="#products" className="btn btn-secondary">
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">As Foretold Labs</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
            <Link href="#products" className="hover:text-primary transition-colors">Products</Link>
            <Link href="#research" className="hover:text-primary transition-colors">Research</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <span className="text-muted">&copy; 2024 As Foretold Labs</span>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
