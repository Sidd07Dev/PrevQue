import React from 'react';

const TeamMember = ({ members }) => {
  return (
    <div className="bg-navy py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Our Team</h2>
      <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {members.map((member, index) => (
          <div key={index} className="bg-light-gray rounded-lg shadow-lg p-6 text-center bg-yellow-200">
            <img 
              src={member.photo} 
              alt={member.name} 
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-yellow"
            />
            <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
            <p className="text-gray-800">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
