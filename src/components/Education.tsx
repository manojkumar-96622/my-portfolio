import React from 'react';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white/50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic journey in Artificial Intelligence and Computer Science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400" />
            
            {/* Education Card */}
            <div className="relative pl-20 pb-12">
              <div className="absolute left-6 top-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
              
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-800/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Bachelor of Technology in Artificial Intelligence
                      </h3>
                      <p className="text-lg text-blue-400 font-semibold">
                        Malla Reddy University, Hyderabad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Current
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Expected Graduation: May 2028
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Hyderabad, India
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Key Focus Areas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Machine Learning & Deep Learning',
                        'Natural Language Processing',
                        'Computer Vision',
                        'Data Science & Analytics',
                        'AI Ethics & Responsible AI',
                        'Software Engineering Principles',
                      ].map((area, index) => (
                        <div
                          key={area}
                          className="flex items-center p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Academic Highlights
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          Comprehensive curriculum covering both theoretical foundations and practical applications of AI
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          Hands-on experience with industry-standard tools and frameworks
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300">
                          Active participation in AI research projects and academic competitions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold mb-2">2024-2028</div>
              <div className="text-blue-100">Study Period</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold mb-2">4 Years</div>
              <div className="text-purple-100">Program Duration</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold mb-2">AI & CS</div>
              <div className="text-green-100">Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;