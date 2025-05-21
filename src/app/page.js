"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProfileSection from '../components/ProfileSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import GoalsHobbiesSection from '../components/GoalsHobbiesSection';
import LoadingSpinner from '../components/LoadingSpinner';
import resumeData from '../data/resumeData';

export default function Home() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Simulate loading for better user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

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
    
    // Observe all sections after loading
    if (!isLoading) {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        observer.observe(section);
      });
      
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [isMounted, isLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="container mx-auto px-4 py-8 flex-grow max-w-6xl">
        <ProfileSection profile={resumeData.profile} />
        <ExperienceSection education={resumeData.education} projects={resumeData.projects} />
        <SkillsSection skills={resumeData.skills} />
        <CertificationsSection certifications={resumeData.certifications} />
        <GoalsHobbiesSection goals={resumeData.goals} hobbies={resumeData.hobbies} />
      </div>
      
      <footer className="bg-primary-dark text-white py-6">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <p className="text-lg font-medium">&copy; {new Date().getFullYear()} {resumeData.profile.name}</p>
          <p className="text-sm mt-2 text-white/70">Built with Next.js and Tailwind CSS</p>
          
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}