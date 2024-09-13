// src/api/courseApi.js
export const getCourses = async () => {
    // Simulating API call with static data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Computer Science', description: 'Study of computers and computational systems.' },
          { id: 2, name: 'Electrical Engineering', description: 'Field of engineering focused on electricity.' },
          { id: 3, name: 'Mechanical Engineering', description: 'Engineering discipline that involves the design of mechanical systems.' },
          // Add more courses as needed
        ]);
      }, 500);
    });
  };
  