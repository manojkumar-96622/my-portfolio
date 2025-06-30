import React from 'react';
import { Code, Palette, Brain, Database, Globe, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90, color: 'from-green-400 to-blue-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-400 to-indigo-500' },
        { name: 'C++', level: 80, color: 'from-purple-400 to-pink-500' },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'Frontend Development', level: 88, color: 'from-orange-400 to-red-500' },
        { name: 'React/Next.js', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-500' },
      ],
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'UX Design', level: 85, color: 'from-pink-400 to-purple-500' },
        { name: 'UI/UX Principles', level: 80, color: 'from-indigo-400 to-purple-500' },
        { name: 'Prototyping', level: 75, color: 'from-violet-400 to-pink-500' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Generative AI', level: 82, color: 'from-emerald-400 to-teal-500' },
        { name: 'AI for Project Management', level: 78, color: 'from-lime-400 to-green-500' },
        { name: 'AI for Business', level: 75, color: 'from-yellow-400 to-orange-500' },
      ],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'SQL', level: 85, color: 'from-blue-400 to-cyan-500' },
        { name: 'Git/GitHub', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Software Engineering', level: 80, color: 'from-red-400 to-pink-500' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Zap,
      skills: [
        { name: 'Problem Solving', level: 90, color: 'from-amber-400 to-orange-500' },
        { name: 'Project Management', level: 85, color: 'from-green-400 to-emerald-500' },
        { name: 'Communication', level: 88, color: 'from-blue-400 to-purple-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 100) + (skillIndex * 200)}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Technical Proficiencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React', 'TypeScript', 'Python', 'C++', 'Node.js', 'Tailwind CSS',
              'Git', 'SQL', 'Figma', 'VS Code', 'Linux', 'Vercel'
            ].map((tech, index) => (
              <div
                key={tech}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-lg p-3 text-center border border-white/20 dark:border-gray-800/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;