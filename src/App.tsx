import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Terminal, Shield, Database, Code, Brain, Award, ChevronDown } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
            Hello, my name is Karan Desai.
            <br />Nice to meet you.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Cybersecurity Student | Passionate About Ethical Hacking | Securing Tomorrow's Digital Frontiers
          </p>
          <ChevronDown className="w-8 h-8 mx-auto mt-8 animate-bounce text-emerald-400" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            I'm a tech enthusiast pursuing a BTech in Computer Science & Engineering with a specialization in Cybersecurity at Symbiosis Institute of Technology. I also hold a Diploma in AIML from LJ University. I'm passionate about bridging the gap between technology and society by sharing knowledge, mentoring others, and contributing to open-source communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors">
              <Shield className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-semibold">Security</h3>
            </div>
            <div className="p-4 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors">
              <Code className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-semibold">Development</h3>
            </div>
            <div className="p-4 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors">
              <Brain className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-semibold">AI/ML</h3>
            </div>
            <div className="p-4 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors">
              <Database className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-semibold">Data</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-emerald-500 pl-4 hover:border-emerald-400 transition-colors">
              <h3 className="text-xl font-bold mb-2">PITCH – Co-founder & CTO</h3>
              <p className="text-gray-400 mb-4">Led the technical development of a social media platform connecting startup founders with potential investors. Architected scalable solutions and managed the tech team.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4 hover:border-emerald-400 transition-colors">
              <h3 className="text-xl font-bold mb-2">Cybersecurity Co-lead</h3>
              <p className="text-gray-400 mb-4">Spearheaded threat analysis initiatives and implemented robust security measures while collaborating with cross-functional teams.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4 hover:border-emerald-400 transition-colors">
              <h3 className="text-xl font-bold mb-2">ETL Developer (Intern)</h3>
              <p className="text-gray-400 mb-4">Developed and maintained data pipelines, automated workflows, and optimized data processing systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Ethical Hacking', level: 90 },
              { name: 'JavaScript/React', level: 85 },
              { name: 'Python', level: 80 },
              { name: 'Data Engineering', level: 75 },
              { name: 'Network Security', level: 85 },
              { name: 'AI/ML', level: 70 }
            ].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-emerald-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Symbiosis Institute of Technology</h3>
                <p className="text-gray-400">BTech in Computer Science & Engineering, Cybersecurity specialization</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">LJ University</h3>
                <p className="text-gray-400">Diploma in AML</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Google Cybersecurity Specialization</h3>
                <p className="text-gray-400">Professional Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/karandesai2005" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://github.com/karandesai2005" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:karanishudesai2@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <form className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="w-full mb-4 p-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-emerald-500"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full mb-4 p-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-emerald-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Karan Desai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;