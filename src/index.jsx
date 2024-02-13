import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "intermediate",
    backgroundColor: "blue",
  },
  {
    skill: "Web Design",
    level: "advanced",
    backgroundColor: "green",
  },
  {
    skill: "ReactNative",
    level: "intermediate",
    backgroundColor: "violet",
  },
  {
    skill: "React",
    level: "beginner",
    backgroundColor: "orange",
  },
  {
    skill: "Git And GitHub",
    level: "intermediate",
    backgroundColor: "yellow",
  },
  {
    skill: "NodeJS",
    level: "advanced",
    backgroundColor: "grey",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="images/blog-4.jpg"
      alt="Emmanuel SHYIRAMBERE"
    />
  );
}
function Intro() {
  return (
    <div>
      <h2>Emmanuel SHYIRAMBERE</h2>
      <p>
        Mobile app developer with a knack for creating seamless user
        experiences. Outside the realm of coding, you'll find me lost in the
        pages of a good book, honing my culinary skills, or capturing moments
        through my camera lens.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillAcquired) => (
        <Skill
          skill={skillAcquired.skill}
          backgroundColor={skillAcquired.backgroundColor}
          level={skillAcquired.level}
          key={skillAcquired.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, backgroundColor }) {
  return (
    <div className="skill" style={(backgroundColor = { backgroundColor })}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🔰"}
        {level === "intermediate" && "🚆"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
