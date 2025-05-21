import { FaMedal, FaCalendarAlt } from 'react-icons/fa';

const CertificationsSection = ({ certifications }) => {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent">
            <div className="flex items-start">
              <div className="text-accent mr-3">
                <FaMedal size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                {cert.issuer && <p className="text-gray-600">{cert.issuer}</p>}
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <FaCalendarAlt className="mr-1" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;