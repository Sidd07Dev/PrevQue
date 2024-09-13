// src/api/universityApi.js
export const getUniversities = async () => {
    // Simulating API call with static data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Sambalpur University', location: 'New York, USA' },
          { id: 2, name: 'XYZ Institute', location: 'London, UK' },
          { id: 3, name: 'LMN College', location: 'Sydney, Australia' },
          // Add more universities as needed
        ]);
      }, 500);
    });
  };
  