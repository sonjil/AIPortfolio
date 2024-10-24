import React from 'react';
import { Code2, Database, Network } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              As an AI Developer with a passion for creating intelligent systems, I specialize in building sophisticated conversational AI solutions and implementing cutting-edge RAG systems. My approach combines technical expertise with a deep understanding of user needs to create AI solutions that make a real impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <Code2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Chatbot Development</h3>
              <p className="text-gray-400">
                Creating intelligent conversational interfaces that understand context and provide meaningful responses.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <Database className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">RAG Systems</h3>
              <p className="text-gray-400">
                Implementing retrieval-augmented generation for accurate and contextual information processing.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <Network className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Agentic Workflows</h3>
              <p className="text-gray-400">
                Designing autonomous systems that can handle complex tasks through intelligent decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}