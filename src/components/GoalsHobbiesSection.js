import { FaBullseye, FaHeart } from 'react-icons/fa';

const GoalsHobbiesSection = ({ goals, hobbies }) => {
  return (
    <section id="goals" className="section-container">
      <h2 className="section-title">Goals & Hobbies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Goals subsection */}
        <div className="animate-fadeIn delay-100">
          <h3 className="section-subtitle flex items-center mb-4">
            <span className="p-2 rounded-lg bg-primary-light/10 text-primary-dark mr-3">
              <FaBullseye />
            </span>
            <span>Professional Goals</span>
          </h3>
          
          <div className="bg-background rounded-xl p-6 border border-border-color">
            <ul className="space-y-3">
              {goals.map((goal, index) => (
                <li 
                  key={index} 
                  className="flex items-start animate-fadeIn"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="h-6 w-6 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-dark mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-light-text">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Hobbies subsection */}
        <div className="animate-fadeIn delay-200">
          <h3 className="section-subtitle flex items-center mb-4">
            <span className="p-2 rounded-lg bg-accent/10 text-accent-dark mr-3">
              <FaHeart />
            </span>
            <span>Hobbies & Interests</span>
          </h3>
          
          <div className="bg-background rounded-xl p-6 border border-border-color">
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-border-color text-blue-600 text-sm hover-lift animate-fadeIn"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsHobbiesSection;