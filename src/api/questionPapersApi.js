// Mock data
const mockUniversities = [
    'Sambalpur University',
    'GM University',
    'Rajendra University'
  ];
  
  const mockQuestionPapers = {
    'Sambalpur University': {
      1: [
        { id: 1, title: 'Math Paper 2023', description: 'Algebra and Calculus', year: 2023,url:'https://www.suniv.ac.in/faculty_images/faculty_1694862905.jpg' },
        { id: 2, title: 'Physics Paper 2023', description: 'Mechanics and Thermodynamics', year: 2023 },
        { id: 3, title: 'Physics Paper 2023', description: 'Mechanics and Thermodynamics', year: 2023 },
        { id: 4, title: 'Physics Paper 2024', description: 'Mechanics and Thermodynamics', year: 2024 },
        { id: 5, title: 'Physics Paper 2023', description: 'Mechanics and Thermodynamics', year: 2023 },
        { id: 6, title: 'Physics Paper 2023', description: 'Mechanics and Thermodynamics', year: 2023 }
     
      ],
      2: [
        { id: 3, title: 'Chemistry Paper 2023', description: 'Organic and Inorganic Chemistry', year: 2023 },
        { id: 6, title: 'Physics Paper 2024', description: 'Mechanics and Thermodynamics', year: 2024 }
      ]
    },
    'GM University': {
      1: [
        { id: 4, title: 'Biology Paper 2023', description: 'Cell Biology and Genetics', year: 2023 }
      ]
    },'Rajendra University': {
      1: [
        { id: 4, title: 'CS Paper 2023', description: 'Cell Biology and Genetics', year: 2023 }
      ]
    }
  };
  
  // Static API functions
  
  // Get list of universities
  export const getUniversities = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUniversities);
      }, 500); // Simulate a network delay
    });
  };
  
  // Get question papers for a specific university and page
  export const getQuestionPapers = async (university, page = 1) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const papers = mockQuestionPapers[university] || {};
        resolve(papers[page] || []);
      }, 500); // Simulate a network delay
    });
  };
  
  // Get details of a specific question paper by ID
  export const getQuestionPaperById = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const allPapers = Object.values(mockQuestionPapers).flat().flat();
        const paper = allPapers.find(paper => paper.id === id);
        resolve(paper || null);
      }, 500); // Simulate a network delay
    });
  };
  
  // api/questionPapersApi.js

export const getQuestionPapersByUniversity = async (university, page = 1) => {
  try {
    // Replace with your API endpoint
    const response = await fetch(`/api/questionPapers?university=${encodeURIComponent(university)}&page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // Assuming the data is an array of question papers
  } catch (error) {
    console.error('Failed to fetch question papers:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
};

// api/questionPapersApi.js

export const getQuestionPapersByUniversityAndCourse = async (university, course, page = 1) => {
  try {
    // Replace with your API endpoint
    const response = await fetch(`/api/question-papers?university=${encodeURIComponent(university)}&course=${encodeURIComponent(course)}&page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // Assuming the data is an array of question papers
  } catch (error) {
    console.error('Failed to fetch question papers:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
};

