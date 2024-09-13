import React from 'react';
import { Link } from 'react-router-dom';

function PaperItem({ paper }) {
  return (
    <Link to={`/paper/${paper.id}`} className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold">{paper.title}</h3>
      <p className="text-gray-600">{paper.university}</p>
    </Link>
  );
}

export default PaperItem;
