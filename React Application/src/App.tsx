import React from 'react';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

function App() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDocs = () => {
    window.open('https://github.com/vitejs/vite/tree/main/docs', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">DevStudio</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Build Something <span className="text-blue-400">Amazing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Create stunning web applications with our modern React + TypeScript starter template.
            Get started in seconds with all the tools you need.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToFeatures}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Start Building
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={openDocs}
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              View Documentation
            </button>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-6 py-20 scroll-mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'TypeScript Ready',
              description: 'Built-in TypeScript support for type-safe development'
            },
            {
              title: 'Modern Stack',
              description: 'Vite, React 18, and Tailwind CSS for rapid development'
            },
            {
              title: 'Production Ready',
              description: 'Optimized build process for maximum performance'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© 2024 DevStudio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;