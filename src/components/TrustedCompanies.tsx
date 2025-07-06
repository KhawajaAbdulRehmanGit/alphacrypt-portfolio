
import { Building2 } from 'lucide-react';

const companies = [
  { name: "Microsoft", logo: "https://img.logo.dev/microsoft.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Google", logo: "https://img.logo.dev/google.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Amazon", logo: "https://img.logo.dev/amazon.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Apple", logo: "https://img.logo.dev/apple.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Meta", logo: "https://img.logo.dev/meta.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Tesla", logo: "https://img.logo.dev/tesla.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Netflix", logo: "https://img.logo.dev/netflix.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Spotify", logo: "https://img.logo.dev/spotify.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Uber", logo: "https://img.logo.dev/uber.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" },
  { name: "Airbnb", logo: "https://img.logo.dev/airbnb.com?token=pk_X-1ZO13ESyuOLMzIB4cHyQ" }
];

export const TrustedCompanies = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 backdrop-blur-sm mb-4">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Trusted Partners</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h3>
          <p className="text-gray-400">Join thousands of companies already transforming with our AI solutions</p>
        </div>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[200px] h-20 mx-8 group"
                >
                  <div className="p-4 rounded-xl glass border border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:scale-110">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                      onError={(e) => {
                        // Fallback to text if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-white font-semibold">${company.name}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
