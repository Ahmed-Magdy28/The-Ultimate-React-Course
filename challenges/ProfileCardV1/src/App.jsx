import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { skills } from '../public/skills';

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
      <>
         <img className="avatar" src="jonas.jpeg" alt="Jonas" />
      </>
   );
}
function Intro() {
   return (
      <>
         <h1>Jonas Schmedtmann</h1>
         <p>
            Full-stack web developer and teacher at Udemy. When not coding or
            preparing a course, I like to play board games, to cook (and eat),
            or to just enjoy the Portuguese sun at the beach.
         </p>
      </>
   );
}
function SkillList() {
   return (
      <>
         <div className="skill-list">
            {skills.map((skillObj) => (
               <Skill key={skillObj.skill} skill={skillObj} />
            ))}
         </div>
      </>
   );
}

function Skill({ skill: skillObj }) {
   return (
      <>
         <div className="skill" style={{ backgroundColor: skillObj.color }}>
            <p>
               {skillObj.skill}
               {skillObj.level === 'advanced'
                  ? '💪'
                  : skillObj.level === 'intermediate'
                    ? '👍'
                    : '👶'}
            </p>
         </div>
      </>
   );
}

export default App;
