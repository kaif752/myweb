import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="max-w-4xl mx-auto mt-20 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
      <p className="mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
      <a href="mailto:kaifshaikh7523@gmail.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        📧 Email Me
      </a>
    </section>
  );
};

export default ContactSection;
