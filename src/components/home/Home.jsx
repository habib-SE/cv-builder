
import React from 'react';
import { FaCog, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeTemplates from './HomeTemplates';
import TemplateGallery from '../template/TemplateGallery';

const Home = () => {
  return (
    <div className="bg-gray-50 py-16">
      {/* Main header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Professional Resume & Cover Letter Tools For Any Job
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Create a job-winning resume in minutes with our easy-to-use builder.
        </p>
        <button className="mt-8 bg-yellow-200 font-semibold py-3 px-6 rounded-full shadow-lg text-black ">
        <Link to="/cv-heading"> Try Our Resume Builder</Link> 
        </button>
      </div>

      {/* Features section */}
      <div className="flex md:flex-row flex-col items-center flex-wrap justify-center space-x-8">
        {/* Feature 1 */}
        <div className="text-center max-w-xs">
          <FaCog className="text-blue-600 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Cutting Edge Career Tools</h3>
          <p className="text-gray-600 mt-2">
            Build a matching resume and cover letter with step-by-step guidance and expert tips.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center max-w-xs">
          <FaLightbulb className="text-yellow-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Extensive Experience</h3>
          <p className="text-gray-600 mt-2">
            Use our vast industry expertise to land your dream job faster.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center max-w-xs">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Expert-Crafted Guides and Examples</h3>
          <p className="text-gray-600 mt-2">
            Grow your career with our expert blog cited by universities and top media outlets.
          </p>
        </div>
      </div>
        <div className=' mt-16'>
          <HomeTemplates/>
          <TemplateGallery/>
        </div>
    </div>
  );
};

export default Home;
