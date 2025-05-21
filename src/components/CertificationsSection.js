import { FaMedal, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const CertificationsSection = ({ certifications }) => {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="cert-card animate-fadeIn hover-lift"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div className="flex items-start">
              <div className="p-3 bg-accent/10 rounded-lg text-accent mr-4">
                <FaMedal size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-dark-text text-lg">{cert.title}</h3>
                {cert.issuer && <p className="text-primary-dark font-medium mt-1">{cert.issuer}</p>}
                <div className="flex items-center mt-2 text-sm text-light-text">
                  <FaCalendarAlt className="mr-1" />
                  <span>{cert.date}</span>
                </div>
                
                <a
                  target="_blank"
                  href={cert.src} 
                  className="mt-3 text-xs inline-flex items-center text-accent hover:text-accent-dark"
                >
                  <FaExternalLinkAlt className="mr-1" /> View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;