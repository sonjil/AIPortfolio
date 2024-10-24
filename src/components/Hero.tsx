import React from 'react';
import { Bot, Brain, Workflow } from 'lucide-react';
import { useNavigation } from './Navigation';

export default function Hero() {
  const { scrollToSection } = useNavigation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <img
              src="https://images.unsplash.com/photo-1525373698358-041e3a460346"
              alt="Sonjil Jain"
              className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-xl"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-2 rounded-full">
              <span className="text-sm font-semibold">AI Developer</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">Sonjil Jain</h1>
          <p className="text-xl text-blue-200 mb-8">
            AI Developer specializing in Intelligent Conversational Systems
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Bot className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-sm">Chatbots</span>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-sm">RAG Systems</span>
            </div>
            <div className="flex flex-col items-center">
              <Workflow className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-sm">Agentic Workflows</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-blue-400 hover:bg-blue-800/30 text-white px-8 py-3 rounded-lg transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
}