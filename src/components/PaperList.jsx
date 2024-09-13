import React from 'react';
import PaperItem from './PaperItem';

function PaperList({ papers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {papers.map((paper) => (
        <PaperItem key={paper.id} paper={paper} />
      ))}
    </div>
  );
}

export default PaperList;
