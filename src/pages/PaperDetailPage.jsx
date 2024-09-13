import React from 'react';
import { useParams } from 'react-router-dom';

function PaperDetailPage() {
  const { id } = useParams();
  
  // Fetch the paper details based on the id
  // For now, let's use a placeholder
  const paper = {
    title: 'Computer Science - 2023',
    university: 'ABC University',
    content: 'This is the content of the question paper...'
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">{paper.title}</h2>
      <p className="text-gray-700 mb-8">{paper.university}</p>
      <div className="bg-white p-4 rounded-lg shadow">
        <p>{paper.content}</p>
      </div>
    </div>
  );
}

export default PaperDetailPage;
