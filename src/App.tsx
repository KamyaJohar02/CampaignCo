
import { 
  Crown,
  Users, 
  PenTool, 
  Star, 
  MessageSquare, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

function App() {
  const whatsappLink = "https://wa.me/917048972989";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50 flex items-center space-x-2"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden md:inline">Chat on WhatsApp</span>
      </a>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Crown className="w-8 h-8 text-yellow-500 animate-bounce-slight" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              The Campaign Co
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
            {/* <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a> */}
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <header className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-float">
            {/* <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&auto=format&fit=crop&q=80" 
              alt="Marketing Illustration" 
              className="w-64 h-64 mx-auto rounded-full shadow-xl"
            /> */}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We craft compelling narratives and drive engagement across all digital platforms
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center animate-scale"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-all"
            >
              Learn More
            </a>
          </div>
          <div className="mt-16">
            <ChevronDown className="w-6 h-6 mx-auto text-indigo-600 animate-bounce" />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-indigo-500 via-white to-purple-500">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Crown className="w-8 h-8 text-indigo-600" />,
                title: "PR & Marketing",
                description: "Strategic public relations and marketing campaigns that elevate your brand."
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-800" />,
                title: "Influencer Marketing",
                description: "Connect with relevant influencers to amplify your message."
              },
              {
                icon: <PenTool className="w-8 h-8 text-indigo-600" />,
                title: "Graphics Design",
                description: "Eye-catching visuals that capture your brand's essence."
              },
              {
                icon: <Star className="w-8 h-8 text-indigo-600" />,
                title: "Google Reviews",
                description: "Build and manage your online reputation effectively."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-indigo-600" />,
                title: "Zomato Reviews",
                description: "Optimize your restaurant's presence on Zomato."
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: "Social Media",
                description: "Engaging social media management and strategy."
              }
            ].map((service, index) => (
              <a 
                key={index}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 animate-bounce-slight">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Clients" },
              { number: "1000+", label: "Campaigns" },
              { number: "50K+", label: "Reach" },
              { number: "95%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="p-6 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-800 mb-8">
              Transform your digital presence today. Let's create something amazing together.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center mx-auto w-fit animate-scale"
            >
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold">The Campaign Co</span>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2024 The Campaign Co. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;