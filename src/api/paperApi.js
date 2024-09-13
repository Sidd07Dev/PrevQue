// src/api/paperApi.js
export const getPapersByName = async (name) => {
    // Simulating API call with static data
    return new Promise((resolve) => {
      setTimeout(() => {
        // Filter papers based on the search term
        const papers = [
          { id: 1, title: 'Introduction to Computer Science', year: '2023', url: 'https://example.com/paper1' },
          { id: 2, title: 'Advanced Electrical Engineering', year: '2022', url: 'https://example.com/paper2' },
          { id: 3, title: 'Fundamentals of Mechanical Engineering', year: '2021', url: 'https://example.com/paper3' },
          // Add more papers as needed
        ];
        const filteredPapers = papers.filter(paper =>
          paper.title.toLowerCase().includes(name.toLowerCase())
        );
        resolve(filteredPapers);
      }, 500);
    });
  };
  