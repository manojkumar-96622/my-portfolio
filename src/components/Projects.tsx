import React from 'react';
import { ExternalLink, Github, Zap, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sports Equipment Store',
      description: 'A full-featured e-commerce platform for sports equipment with modern design, responsive layout, and seamless user experience.',
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://sports-equipment-store-xi.vercel.app/',
      githubUrl: 'https://github.com/manojkumar-96622',
      features: ['Responsive Design', 'Product Catalog', 'Shopping Cart', 'Modern UI'],
      icon: ShoppingCart,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'AI Portfolio Website',
      description: 'This very portfolio website showcasing modern web development skills with 3D animations, dark/light themes, and responsive design.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
      liveUrl: '#',
      githubUrl: 'https://github.com/manojkumar-96622',
      features: ['3D Animations', 'Theme Toggle', 'Responsive Design', 'Modern UI'],
      icon: Zap,
      color: 'from-blue-500 to-purple-500',
    },
  ];

  const upcomingProjects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'Smart task management system with AI-driven priority suggestions and automated scheduling.',
      status: 'In Development',
      technologies: ['Next.js', 'Python', 'OpenAI API', 'PostgreSQL'],
    },
    {
      title: 'Generative AI Content Platform',
      description: 'Platform for creating, managing, and optimizing AI-generated content for various use cases.',
      status: 'Planning',
      technologies: ['React', 'Node.js', 'AI/ML', 'Cloud Services'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white/50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, featuring modern web applications and innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 dark:border-gray-800/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 p-2 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full border border-blue-200/50 dark:border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${project.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105`}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 dark:bg-black/10 text-gray-700 dark:text-gray-300 font-medium rounded-lg border border-white/20 dark:border-gray-800/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Upcoming Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-xl p-6 border border-white/20 dark:border-gray-800/20 shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">{projects.length}</div>
              <div className="text-blue-100 text-sm">Completed</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">{upcomingProjects.length}</div>
              <div className="text-green-100 text-sm">In Progress</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">5+</div>
              <div className="text-purple-100 text-sm">Technologies</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-orange-100 text-sm">Responsive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;