import { FaBullseye, FaHeart } from 'react-icons/fa';

const GoalsHobbiesSection = ({ goals, hobbies }) => {
  return (
    <section id="goals" className="section-container">
      <h2 className="section-title">Goals & Hobbies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Goals subsection */}
        <div>
          <h3 className="section-subtitle flex items-center mb-4">
            <FaBullseye className="text-accent mr-2" /> Professional Goals
          </h3>
          
          <ul className="space-y-2">
            {goals.map((goal, index) => (
              <li key={index} className="flex">
                <span className="text-accent mr-2">•</span>
                <span className="text-gray-700">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Hobbies subsection */}
        <div>
          <h3 className="section-subtitle flex items-center mb-4">
            <FaHeart className="text-accent mr-2" /> Hobbies & Interests
          </h3>
          
          <div className="flex flex-wrap">
            {hobbies.map((hobby, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm mr-2 mb-2 flex items-center"
              >
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsHobbiesSection;