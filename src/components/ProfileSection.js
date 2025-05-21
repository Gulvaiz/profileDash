import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const ProfileSection = ({ profile }) => {
  return (
    <section id="profile" className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary rounded-xl shadow-lg mb-8">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="relative p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="animate-fadeIn delay-100">
            <div className="profile-image flex items-center justify-center text-white text-5xl font-bold">
             <img src='./pp.jpg' alt='profile pic'   className="rounded-full object-cover shadow-lg pt-6" />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="w-full text-center md:text-left text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fadeIn">{profile.name}</h1>
            <p className="text-lg text-white/80 mb-6 animate-fadeIn delay-100">Full-Stack Developer</p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 animate-fadeIn delay-200">
              <p className="text-white/90 leading-relaxed word-spacing-[1px]">{profile.summary}</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 animate-fadeIn delay-300">
              <a 
               target='_blank'
                href="GulvaizFullMERN.pdf" 
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all px-4 py-2 rounded-lg text-white"
              >
                <FaDownload /> Resume
              </a>
              <a 
                href={`https://${profile.linkedin}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all px-4 py-2 rounded-lg text-white"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a 
                href={`https://${profile.github}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all px-4 py-2 rounded-lg text-white"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fadeIn delay-400">
          <div className="contact-info-item">
            <FaEnvelope className="text-white/80 mr-3" />
            <a href={`mailto:${profile.email}`} className="text-white/90 hover:text-white">{profile.email}</a>
          </div>
          <div className="contact-info-item">
            <FaPhone className="text-white/80 mr-3" />
            <a href={`tel:${profile.phone}`} className="text-white/90 hover:text-white">{profile.phone}</a>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt className="text-white/80 mr-3" />
            <span className="text-white/90">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;