import React, { useState, useEffect } from 'react';
import { getQuestionPapersByUniversity } from '../api/questionPapersApi'; // Import API function
import UniversityFilter from '../components/UniversityFilter'; // Your filter component
import CourseFilter from '../components/CourseFilter'; // Your filter component
import PaperSearch from '../components/PaperSearch'; // Your search component

const QuestionPaperFindingPage = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [questionPapers, setQuestionPapers] = useState([]);
  
  useEffect(() => {
    const fetchQuestionPapers = async () => {
      if (selectedUniversity) {
        try {
          const papers = await getQuestionPapersByUniversity(selectedUniversity);
          setQuestionPapers(papers);
        } catch (error) {
          console.error('Failed to fetch question papers:', error);
        }
      }
    };

    fetchQuestionPapers();
  }, [selectedUniversity]);

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
    setSelectedCourse(''); // Clear course selection when university changes
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    // Fetch question papers based on both university and course
    // Adjust this if needed based on your API
    const fetchFilteredPapers = async () => {
      try {
        const papers = await getQuestionPapersByUniversityAndCourse(selectedUniversity, course);
        setQuestionPapers(papers);
      } catch (error) {
        console.error('Failed to fetch filtered question papers:', error);
      }
    };

    fetchFilteredPapers();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Find Question Papers</h1>
      <UniversityFilter onSelectUniversity={handleUniversitySelect} />
      <CourseFilter onSelectCourse={handleCourseSelect} />
      <PaperSearch />
      {/* Display question papers */}
      <div className="mt-8">
        {questionPapers.length > 0 ? (
          <ul className="list-none space-y-4">
            {questionPapers.map((paper) => (
              <li key={paper.id} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold">{paper.title}</h3>
                <p className="text-gray-600">Year: {paper.year}</p>
                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">View Paper</a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No question papers found.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionPaperFindingPage;
