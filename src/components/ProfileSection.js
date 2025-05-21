import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ProfileSection = ({ profile }) => {
  return (
    <section id="profile" className="section-container">
      <h2 className="section-title">Profile</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="h-48 w-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold overflow-hidden">
            {/* You can replace this with an actual image */}
            <span>{profile.name.charAt(0)}</span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-primary mb-2">{profile.name}</h1>
          <p className="text-lg text-gray-600 mb-4">Full-Stack Developer</p>
          <p className="section-text mb-4">{profile.summary}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="flex items-center">
              <FaEnvelope className="text-accent mr-2" />
              <a href={`mailto:${profile.email}`} className="text-gray-600 hover:text-accent">{profile.email}</a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-accent mr-2" />
              <a href={`tel:${profile.phone}`} className="text-gray-600 hover:text-accent">{profile.phone}</a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-accent mr-2" />
              <span className="text-gray-600">{profile.location}</span>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-accent mr-2" />
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent">{profile.linkedin}</a>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-accent mr-2" />
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent">{profile.github}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;