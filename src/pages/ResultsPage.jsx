import React, { useState, useEffect } from 'react';
import { getUniversities, getQuestionPapers } from '../api/questionPapersApi';
import UniversityFilter from '../components/UniversityFilter';
import Pagination from '../components/Pagination';
import BrowseByCourse from '../components/BrowseByCourse';
import BrowseByPaperName from '../components/BrowseByPaperName';
import BrowseCategories from '../components/BrowseCategories';

const ResultsPage = () => {
  const [universities, setUniversities] = useState([]);
  const [questionPapers, setQuestionPapers] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPaperUrl, setSelectedPaperUrl] = useState(''); // State for the iframe URL

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const data = await getUniversities();
        setUniversities(data);
      } catch (error) {
        console.error('Failed to fetch universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  useEffect(() => {
    if (selectedUniversity) {
      const fetchQuestionPapers = async () => {
        try {
          const data = await getQuestionPapers(selectedUniversity, currentPage);
          setQuestionPapers(data);
        } catch (error) {
          console.error('Failed to fetch question papers:', error);
        }
      };

      fetchQuestionPapers();
    }
  }, [selectedUniversity, currentPage]);

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
    setCurrentPage(1); // Reset to the first page when a new university is selected
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewClick = (url) => {
    setSelectedPaperUrl(url); // Set the URL for the iframe
  };

  return (
    <>
    <BrowseByPaperName/>
    <div className="flex flex-col items-center justify-center h-screen bg-navy">
      <h2 className="text-2xl font-semibold text-yellow-500 mb-4">University:</h2>

      {/* University Filter */}
      <UniversityFilter
        universities={universities}
        selectedUniversity={selectedUniversity}
        onSelectUniversity={handleUniversitySelect}
      />

      {/* Question Papers List */}
      {selectedUniversity && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Question Papers for {selectedUniversity}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 list-none">
            {questionPapers.length > 0 ? (
              questionPapers.map((paper) => (
                <li key={paper.id} className="mb-2">
                  <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-3">
                      <h2 className="text-lg font-semibold text-navy">{paper.title}</h2>
                      <p className="text-gray-600 mt-2 text-sm">{paper.description}</p>
                    </div>
                    <div className="px-4 py-3 flex justify-between items-center">
                      <span className="text-gray-600 text-xs">Year: {paper.year}</span>
                      <button
                        onClick={() => handleViewClick(paper.url)} // Pass the URL to the handler
                        className="bg-yellow-500 text-navy text-xs px-3 py-1 rounded hover:bg-yellow-400 transition"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center text-gray-300 mt-8 bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
                  <svg
                    className="w-12 h-12 mb-4 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3 3v-6M5.5 4.5a9 9 0 1113 13A9 9 0 015.5 4.5z"></path>
                  </svg>
                  <span className="text-xl font-semibold mb-2">No Question Papers Found</span>
                  <p className="text-sm">It looks like there are no question papers available for this university at the moment.</p>
                </div>
              </div>
            )}
          </ul>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      {/* Iframe for viewing the document */}
      {selectedPaperUrl && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white w-3/4 h-3/4 rounded-lg overflow-hidden">
            <iframe
              src={selectedPaperUrl}
              title="Question Paper"
              className="w-full h-full"
              frameBorder="0"
            />
            <button
              onClick={() => setSelectedPaperUrl('')} // Clear the URL to close the iframe
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>



</>
  );
};

export default ResultsPage;
