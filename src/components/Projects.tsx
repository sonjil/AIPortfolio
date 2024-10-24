import React from 'react';
import { MessageSquare, GitBranch, BarChart } from 'lucide-react';

const projects = [
  {
    title: 'Intelligent Customer Service Bot',
    description: 'Advanced chatbot system with RAG integration for accurate and contextual customer support.',
    features: ['NLP Processing', 'Context Awareness', '24/7 Availability'],
    metrics: ['95% Query Resolution', '3s Response Time', '50% Cost Reduction'],
    icon: MessageSquare
  },
  {
    title: 'Automated Workflow System',
    description: 'Multi-agent framework for complex task automation and intelligent decision-making.',
    features: ['Task Orchestration', 'Real-time Monitoring', 'Adaptive Learning'],
    metrics: ['80% Time Saved', '99.9% Accuracy', '40% Efficiency Gain'],
    icon: GitBranch
  }
];

export default function Projects() {
  return (
    <div id="projects" className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all">
              <project.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Performance Metrics</h4>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="px-3 py-1 bg-green-900/30 text-green-200 rounded-full text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}