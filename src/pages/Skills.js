import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
   FaDocker, FaTools, FaCode, FaFigma, 
  FaGithub, FaCloudsmith, FaJava, FaServer, FaPalette, FaMobile
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiPostgresql, 
  SiNextdotjs, SiSpringboot, SiTypescript, SiGraphql, SiRedux
} from "react-icons/si";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const skills = {
  frontend: [
    { name: "React", icon: <FaReact />, level: "Expert", percent: 92, desc: "Hooks, Context API, Performance optimization" },
    { name: "HTML", icon: <FaHtml5 />, level: "Expert", percent: 95, desc: "Semantic markup and accessibility best practices" },
    { name: "CSS", icon: <FaCss3Alt />, level: "Expert", percent: 90, desc: "Animations, Flexbox, Grid, and responsive design" },
    { name: "JavaScript", icon: <FaJs />, level: "Expert", percent: 92, desc: "ES6+, Async programming, Design patterns" },
    { name: "TypeScript", icon: <SiTypescript />, level: "Advanced", percent: 85, desc: "Static typing and interfaces" },
    { name: "Redux", icon: <SiRedux />, level: "Advanced", percent: 85, desc: "State management and middleware" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced", percent: 88, desc: "SSR, SSG, API routes, Image optimization" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Expert", percent: 90, desc: "Utility-first CSS framework" },
    { name: "Responsive Design", icon: <FaMobile />, level: "Expert", percent: 92, desc: "Mobile-first approach and cross-browser" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: "Expert", percent: 90, desc: "Event loop, Streams, Clustering" },
    { name: "Express.js", icon: <SiExpress />, level: "Expert", percent: 88, desc: "REST APIs, Middleware, Error handling" },
    { name: "GraphQL", icon: <SiGraphql />, level: "Advanced", percent: 80, desc: "Schemas, Resolvers, Apollo Client" },
    { name: "MongoDB", icon: <SiMongodb />, level: "Advanced", percent: 85, desc: "Schema design, Aggregation, Indexing" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced", percent: 82, desc: "Complex queries, Transactions" },
    { name: "MySQL", icon: <SiMysql />, level: "Advanced", percent: 80, desc: "Database design, Optimization" },
    { name: "Java", icon: <FaJava />, level: "Intermediate", percent: 75, desc: "OOP principles, Collections" },
    { name: "Spring Boot", icon: <SiSpringboot />, level: "Intermediate", percent: 70, desc: "Dependency injection, MVC" },
    { name: "API Design", icon: <FaServer />, level: "Expert", percent: 90, desc: "RESTful principles, Documentation" },
  ],
  tools: [
    { name: "Git & GitHub", icon: <FaGithub />, level: "Expert", percent: 95, desc: "Version control, CI/CD workflows" },
    { name: "Docker", icon: <FaDocker />, level: "Advanced", percent: 80, desc: "Containerization, Docker Compose" },
    { name: "VS Code", icon: <FaCode />, level: "Expert", percent: 95, desc: "Extensions, Debugging, Productivity" },
    { name: "Figma", icon: <FaFigma />, level: "Advanced", percent: 85, desc: "UI/UX design, Prototyping" },
    { name: "Postman", icon: <FaCloudsmith />, level: "Advanced", percent: 88, desc: "API testing, Documentation" },
    { name: "Testing", icon: <FaTools />, level: "Advanced", percent: 85, desc: "Jest, React Testing Library" },
    { name: "Webpack", icon: <FaTools />, level: "Intermediate", percent: 75, desc: "Bundling, Code splitting" },
    { name: "Agile Methodologies", icon: <FaTools />, level: "Advanced", percent: 85, desc: "Scrum, Kanban, JIRA" },
    { name: "UI/UX Principles", icon: <FaPalette />, level: "Advanced", percent: 82, desc: "Design systems, Accessibility" },
  ],
};

const levels = ["All", "Expert", "Advanced", "Intermediate"];

const SkillChart = ({ percent }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to({}, {
            duration: 1.5,
            ease: "power2.out",
            onUpdate: function() {
              const progress = this.progress();
              setAnimatedPercent(Math.round(percent * progress));
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={chartRef} style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={animatedPercent}
        styles={buildStyles({
          pathColor: "#8b5cf6",
          trailColor: "rgba(203, 213, 225, 0.2)",
          strokeLinecap: "round",
          pathTransitionDuration: 1.5,
          path: {
            strokeWidth: 10,
          },
          trail: {
            strokeWidth: 10,
          },
        })}
      />
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="text-5xl mb-4 text-purple-500 group-hover:text-purple-600 transition-colors duration-300">
        {skill.icon}
      </div>
      <div className="text-xl font-bold mb-2 text-center">{skill.name}</div>
      <div className="text-sm text-purple-500 dark:text-purple-400 mb-4">{skill.level}</div>
      <SkillChart percent={skill.percent} />
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.desc}
      </div>
    </div>
  );
};

const SkillGrid = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((skill, idx) => (
      <SkillCard key={idx} skill={skill} />
    ))}
  </div>
);

const SkillSection = ({ id, title, skills, setActive }) => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const sectionRef = useRef(null);
  const { ref:  inView } = useInView({ threshold: 0.3 });


  useEffect(() => {
    if (inView) {
      setActive(id);
    }
  }, [inView, id, setActive]);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  const filteredSkills = selectedLevel === "All"
    ? skills
    : skills.filter(skill => skill.level === selectedLevel);

  return (
    <section ref={sectionRef} id={id} className="mb-16 py-8">
  <div className="flex items-center mb-8">
    <div className="w-12 h-1 bg-purple-500 mr-4"></div>
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      {title}
    </h2>
  </div>

  <div className="flex flex-wrap gap-3 mb-8">
    {levels.map(level => (
      <button
        key={level}
        onClick={() => setSelectedLevel(level)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          selectedLevel === level
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
            : "bg-white dark:bg-gray-800 text-purple-600 border border-purple-200 dark:border-gray-700 hover:shadow-md"
        }`}
      >
        {level}
      </button>
    ))}
  </div>

  <SkillGrid data={filteredSkills} />
</section>
  );
};

const Skills = () => {
  const [activeSection, setActiveSection] = useState("frontend");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainRef = useRef(null);

  const handleSectionClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["frontend", "backend", "tools"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-purple-600 transition-all ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
          <div className={`w-6 h-0.5 bg-purple-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
          <div className={`w-6 h-0.5 bg-purple-600 transition-all ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="absolute top-20 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-64">
            <h3 className="text-lg font-bold mb-4 text-purple-600">Skills Menu</h3>
            <ul className="space-y-3">
              {["frontend", "backend", "tools"].map(section => (
                <li key={section}>
                  <button
                    onClick={() => handleSectionClick(section)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === section
                        ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            My Technical Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical expertise across frontend, backend development, and tools.
          </p>
        </header>

        <div className="flex flex-col md:flex-row">
          <nav className="hidden md:block sticky top-28 self-start mr-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md w-56 h-fit">
            <h3 className="text-lg font-bold mb-6 text-purple-600">Skills Menu</h3>
            <ul className="space-y-3">
              {["frontend", "backend", "tools"].map(section => (
                <li key={section}>
                  <button
                    onClick={() => handleSectionClick(section)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === section
                        ? "bg-purple-600 text-white shadow-md"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">
                        {section === "frontend" && <FaPalette />}
                        {section === "backend" && <FaServer />}
                        {section === "tools" && <FaTools />}
                      </span>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <main ref={mainRef} className="flex-1">
            <SkillSection
              id="frontend"
              title="Frontend Development"
              skills={skills.frontend}
              setActive={setActiveSection}
            />
            <SkillSection
              id="backend"
              title="Backend Development"
              skills={skills.backend}
              setActive={setActiveSection}
            />
            <SkillSection
              id="tools"
              title="Development Tools"
              skills={skills.tools}
              setActive={setActiveSection}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Skills;