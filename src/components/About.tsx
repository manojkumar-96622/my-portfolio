import React from 'react';
import { User, Brain, Code, Palette } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate B.Tech Artificial Intelligence student with a strong foundation in programming, web development, and UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="relative">
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-800/20 shadow-xl">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Info</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">Portfolio</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech Artificial Intelligence</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Malla Reddy University, Hyderabad</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expected Graduation</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">May 2028</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Languages</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">English (Advanced - C1)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-6">
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-400 mr-3" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Programming</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Skilled in Python, TypeScript, and C++ with a focus on clean, efficient code and modern development practices.
              </p>
            </div>

            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Palette className="w-6 h-6 text-purple-400 mr-3" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Web & UX</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Frontend development and UX design expertise, creating intuitive and beautiful user experiences.
              </p>
            </div>

            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-cyan-400 mr-3" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">AI Knowledge</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Deep understanding of Generative AI, AI for Project Management, and AI for Business applications.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Mission</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              I'm passionate about leveraging artificial intelligence and modern web technologies to create innovative solutions 
              that make a positive impact. My goal is to bridge the gap between cutting-edge AI research and practical, 
              user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;