import { FaCalendarAlt, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceSection = ({ education, projects }) => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience & Education</h2>
      
      {/* Education subsection */}
      <div className="mb-8">
        <h3 className="section-subtitle flex items-center">
          <FaCalendarAlt className="mr-2 text-accent" /> Education
        </h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-accent pl-4 ml-2">
              <h4 className="font-medium text-gray-800">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Projects subsection */}
      <div>
        <h3 className="section-subtitle flex items-center">
          <FaCode className="mr-2 text-accent" /> Projects
        </h3>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary">{project.title}</h4>
              <p className="text-gray-600 my-2">{project.description}</p>
              
              <div className="mt-2">
                <h5 className="text-sm font-medium text-gray-700">Technologies:</h5>
                <p className="text-sm text-gray-600">{project.technologies}</p>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {Object.entries(project.links).map(([key, value], linkIndex) => (
                  <a 
                    key={linkIndex}
                    href="#" 
                    className="text-xs flex items-center bg-accent text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-1" /> {value}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;