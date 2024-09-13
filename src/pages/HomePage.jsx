import React from 'react';
import SearchBar from '../components/SearchBar';
import TeamMember from '../components/TeamMember';
import { Loader } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeaturedUniversities from '../components/FeaturedUniversities';
import HowItWorks from '../components/HowItWorks';
import BrowseCategories from '../components/BrowseCategories';
import RecentPapers from '../components/RecentPapers';
import SocialProof from '../components/SocialProof';

const teamMembers = [
  {
    name: 'Sidhanta Pradhan',
    role: 'Frontend Developer',
    photo: 'https://res.cloudinary.com/codebysidd/image/upload/v1725199203/PrevQue/i3qgkyu6vig8qqy82dcy.jpg', // Replace with your image URL
  },
  {
    name: 'Sidhanta Pradhan',
    role: 'Backend Developer',
    photo: 'https://res.cloudinary.com/codebysidd/image/upload/v1725199203/PrevQue/i3qgkyu6vig8qqy82dcy.jpg', // Replace with your image URL
  },
  // Add more members as needed
];
function HomePage() {
  return (
   <>
  <HeroSection/>
    {/* <div className="flex flex-col items-center justify-center h-screen bg-navy">
      <h1 className="text-4xl font-bold mb-8 text-white">Find Past Question Papers</h1>
      <SearchBar />
     
    </div>
    <TeamMember members={teamMembers} /> */}
    <FeaturedUniversities/>
    <HowItWorks/>
    <BrowseCategories/>
    <RecentPapers/>
    <SocialProof/>
    </>
   
   
  );
}

export default HomePage;
