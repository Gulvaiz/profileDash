import { FaLaptopCode, FaServer, FaTools, FaLanguage, FaCogs } from 'react-icons/fa';

const SkillsSection = ({ skills }) => {
  const SkillPill = ({ skill, index }) => (
    <span 
      className="skill-pill hover-lift animate-fadeIn"
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      {skill}
    </span>
  );

  const SkillCategory = ({ title, skills, icon, delay }) => (
    <div className={`mb-8 animate-fadeIn`} style={{ animationDelay: `${delay}s` }}>
      <h3 className="section-subtitle">
        <span className="p-2 rounded-lg bg-primary-light/10 text-primary-dark mr-3">
          {icon}
        </span>
        <span>{title}</span>
      </h3>
      <div className="flex flex-wrap mt-3 ml-3">
        {skills.map((skill, index) => (
          <SkillPill key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        <div>
          <SkillCategory 
            title="Frontend Technologies" 
            skills={skills.frontend} 
            icon={<FaLaptopCode />} 
            delay={0.1}
          />
          
          <SkillCategory 
            title="Backend Technologies" 
            skills={skills.backend} 
            icon={<FaServer />} 
            delay={0.2}
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            skills={skills.tools} 
            icon={<FaTools />} 
            delay={0.3}
          />
        </div>
        
        <div>
          <SkillCategory 
            title="Programming Languages" 
            skills={skills.languages} 
            icon={<FaLanguage />} 
            delay={0.4}
          />
          
          <SkillCategory 
            title="Other Skills" 
            skills={skills.others} 
            icon={<FaCogs />} 
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;