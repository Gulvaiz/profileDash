import { FaLaptopCode, FaServer, FaTools, FaLanguage, FaCogs } from 'react-icons/fa';

const SkillsSection = ({ skills }) => {
  const SkillPill = ({ skill }) => (
    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 inline-block">
      {skill}
    </span>
  );

  const SkillCategory = ({ title, skills, icon }) => (
    <div className="mb-6">
      <h3 className="section-subtitle flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      <div className="flex flex-wrap mt-2">
        {skills.map((skill, index) => (
          <SkillPill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <SkillCategory 
        title="Frontend Technologies" 
        skills={skills.frontend} 
        icon={<FaLaptopCode className="text-accent" />} 
      />
      
      <SkillCategory 
        title="Backend Technologies" 
        skills={skills.backend} 
        icon={<FaServer className="text-accent" />} 
      />
      
      <SkillCategory 
        title="Tools & Platforms" 
        skills={skills.tools} 
        icon={<FaTools className="text-accent" />} 
      />
      
      <SkillCategory 
        title="Programming Languages" 
        skills={skills.languages} 
        icon={<FaLanguage className="text-accent" />} 
      />
      
      <SkillCategory 
        title="Other Skills" 
        skills={skills.others} 
        icon={<FaCogs className="text-accent" />} 
      />
    </section>
  );
};

export default SkillsSection;