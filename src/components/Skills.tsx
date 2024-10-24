import React from 'react';

const skills = {
  'AI/ML': ['TensorFlow', 'PyTorch', 'Langchain'],
  'Languages': ['Python', 'JavaScript'],
  'Frameworks': ['FastAPI', 'React'],
  'Tools': ['Docker', 'Git', 'Cloud Platforms']
};

export default function Skills() {
  return (
    <div className="bg-gray-800 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Skills</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}