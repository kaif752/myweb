import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaBootstrap,
  FaGitAlt, FaDocker, FaVuejs, FaAngular, FaTools, FaCode, FaFigma, FaGithub, FaCloudsmith, FaJava
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiPostgresql, SiNextdotjs, SiSpringboot
} from "react-icons/si";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { percent } from "framer-motion";

const skills = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 />, level: "Expert", percent: 95, desc: "Semantic markup and best practices." },
    { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced", percent: 90, desc: "Flexbox, Grid, and animations." },
    { name: "JavaScript", icon: <FaJs />, level: "Advanced", percent: 90, desc: "ES6+, DOM, and AJAX." },
    { name: "React.js", icon: <FaReact />, level: "Expert", percent: 92, desc: "Hooks, Context API, Routing." },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced", percent: 85, desc: "Utility-first design." },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced", percent: 80, desc: "SSR, SSG, Routing." },
    { name: "Bootstrap", icon: <FaBootstrap />, level: "Advanced", percent: 85, desc: "Grid system, components." },
    { name: "Vue.js", icon: <FaVuejs />, level: "Intermediate", percent: 75, desc: "Reactivity, components." },
    { name: "Angular.js", icon: <FaAngular />, level: "Intermediate", percent: 70, desc: "Modules, DI, routing." },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: "Expert", percent: 88, desc: "APIs, file system, streams." },
    { name: "Express.js", icon: <SiExpress />, level: "Advanced", percent: 85, desc: "Middleware, routing." },
    { name: "MongoDB", icon: <SiMongodb />, level: "Advanced", percent: 80, desc: "NoSQL, aggregation." },
    { name: "MySQL", icon: <SiMysql />, level: "Intermediate", percent: 75, desc: "Joins, indexing." },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Intermediate", percent: 70, desc: "Functions, triggers." },
    { name: "PHP", icon: <FaPhp />, level: "Intermediate", percent: 65, desc: "Backend scripting." },
    { name: "Java", icon: <FaJava />, level: "Intermediate", percent: 65, desc: "JAVA." },
    {name: "Springboot", icon: <SiSpringboot />, level: "Intermediate", percent: 65, desc: "JAVA." },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, level: "Advanced", percent: 90, desc: "Version control." },
    { name: "Docker", icon: <FaDocker />, level: "Intermediate", percent: 75, desc: "Containers, volumes." },
    { name: "General Tools", icon: <FaTools />, level: "Advanced", percent: 80, desc: "VSCode, NPM, Figma." },
    { name: "VS Code", icon: <FaCode/>, level: "Advanced", percent: 90, desc: "VSCode"},
    { name: "Figma", icon: <FaFigma/>, level: "Advanced", percent: 90, desc: "Figma"},
    { name: "GitHub", icon: <FaGithub/>, level: "Advanced", percent: 90, desc: "GitHub"},
    { name: "PostMan", icon: <FaCloudsmith/>, level: "Advanced", percent: 90, desc: "PostMan"},
  ],
};

const levels = ["All", "Expert", "Advanced", "Intermediate"];

const SkillChart = ({ percent }) => (
  <div style={{ width: 80, height: 80 }}>
    <CircularProgressbar
      value={percent}
      text={`${percent}%`}
      styles={buildStyles({
        pathColor: "#8b5cf6",
        textColor: "#8b5cf6",
        trailColor: "#ddd",
        strokeLinecap: "round",
        textSize: "24px",
      })}
    />
  </div>
);

const SkillGrid = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
    {data.map((skill, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        title={skill.desc}
      >
        <div className="text-5xl mb-2 text-purple-500">{skill.icon}</div>
        <div className="text-lg font-semibold mb-1">{skill.name}</div>
        <SkillChart percent={skill.percent} />
      </div>
    ))}
  </div>
);

const SkillSection = ({ id, title, skills, setActive }) => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActive(id);
      gsap.fromTo(sectionRef.current, { opacity: 0, y: 20 }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      });
    }
  }, [inView, id, setActive]);

  const filteredSkills = selectedLevel === "All"
    ? skills
    : skills.filter(skill => skill.level === selectedLevel);

  return (
    <section ref={ref} id={id} className="mb-20" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-6 border-b pb-2">{title}</h2>

      {/* Level Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {levels.map(level => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-4 py-1 rounded-full text-sm font-semibold border ${
              selectedLevel === level
                ? "bg-purple-600 text-white"
                : "border-purple-600 text-purple-600"
            } hover:bg-purple-600 hover:text-white transition`}
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

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Sidebar */}
      <nav className="sticky top-20 self-start m-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-40 hidden md:block">
        <ul className="space-y-4 text-lg font-semibold">
          {["frontend", "backend", "tools"].map(section => (
            <li
              key={section}
              className={`cursor-pointer hover:text-purple-600 ${
                activeSection === section ? "text-purple-600" : ""
              }`}
              onClick={() =>
                document.getElementById(section).scrollIntoView({ behavior: "smooth" })
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main */}
      <main className="flex-1 max-w-5xl mx-auto py-20 px-6 space-y-20 snap-y snap-mandatory overflow-y-auto">
        <SkillSection
          id="frontend"
          title="🎨 Frontend Skills"
          skills={skills.frontend}
          setActive={setActiveSection}
        />
        <SkillSection
          id="backend"
          title="🛠️ Backend Skills"
          skills={skills.backend}
          setActive={setActiveSection}
        />
        <SkillSection
          id="tools"
          title="🧰 Tools"
          skills={skills.tools}
          setActive={setActiveSection}
        />
      </main>
    </div>
  );
};

export default Skills;
