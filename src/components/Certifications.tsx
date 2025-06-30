import React from 'react';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Frontend Development',
      issuer: 'OneRoadmap',
      date: 'April 2025',
      credentialId: 'CERT-F3C9C249',
      url: 'https://oneroadmap.io/skills/frontend/certificate/CERT-F3C9C249',
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
    },
    {
      title: 'UX Design',
      issuer: 'Coursera',
      date: 'May 2025',
      credentialId: 'XX99M1SS4T55',
      url: 'https://www.coursera.org/account/accomplishments/records/XX99M1SS4T55',
      color: 'from-purple-500 to-pink-500',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
      title: 'Leveraging Generative AI for Project Management',
      issuer: 'LinkedIn Learning',
      date: 'June 2025',
      credentialId: '88f6e75fa7d56285272761929a5642d9af2d0a665b8f17d35323d14f3b2b9641',
      url: 'https://www.linkedin.com/learning/certificates/88f6e75fa7d56285272761929a5642d9af2d0a665b8f17d35323d14f3b2b9641?trk=share_certificate',
      color: 'from-green-500 to-teal-500',
      skills: ['AI Tools', 'Project Management', 'Automation', 'Productivity'],
    },
    {
      title: 'Software Engineering & Solutions Architecture',
      issuer: 'Forage',
      date: 'May–June 2025',
      credentialId: 'AGLQ449fQCkXCsxEp',
      url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_zMG3n57bq3uHaDxGd_1749484971522_completion_certificate.pdf',
      color: 'from-orange-500 to-red-500',
      skills: ['System Design', 'Architecture', 'Problem Solving', 'Technical Leadership'],
    },
    {
      title: 'HackerRank SQL',
      issuer: 'HackerRank',
      date: 'May 2025',
      credentialId: '427510efa6ab',
      url: 'https://www.hackerrank.com/certificates/iframe/427510efa6ab',
      color: 'from-indigo-500 to-purple-500',
      skills: ['SQL Queries', 'Database Design', 'Data Analysis', 'Problem Solving'],
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.credentialId}
              className="group bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 group-hover:scale-110"
                >
                  <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </a>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 font-semibold">{cert.issuer}</p>
                </div>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="font-mono text-xs truncate">
                    {cert.credentialId}
                  </span>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-200/50 dark:border-blue-800/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verify Button */}
              <div className="mt-6 pt-4 border-t border-white/20 dark:border-gray-800/20">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${cert.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105`}
                >
                  Verify Certificate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">{certifications.length}</div>
              <div className="text-blue-100 text-sm">Certifications</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">2025</div>
              <div className="text-green-100 text-sm">Latest Year</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">5</div>
              <div className="text-purple-100 text-sm">Skill Areas</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-orange-100 text-sm">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;