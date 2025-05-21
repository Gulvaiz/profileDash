"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProfileSection from '../components/ProfileSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import GoalsHobbiesSection from '../components/GoalsHobbiesSection';
import resumeData from '../data/resumeData';

export default function Home() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMounted, setIsMounted] = useState(false);

  // Handle intersection observer to update active section on scroll
  useEffect(() => {
    setIsMounted(true);
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isMounted]);

  if (!isMounted) {
    return null; // Prevent hydration errors
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <ProfileSection profile={resumeData.profile} />
        <ExperienceSection education={resumeData.education} projects={resumeData.projects} />
        <SkillsSection skills={resumeData.skills} />
        <CertificationsSection certifications={resumeData.certifications} />
        <GoalsHobbiesSection goals={resumeData.goals} hobbies={resumeData.hobbies} />
      </div>
      
      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {resumeData.profile.name}. All rights reserved.</p>
          <p className="text-sm mt-1">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}