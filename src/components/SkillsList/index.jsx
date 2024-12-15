import React, { useState, useEffect } from "react";
import UseFetch from "../../UseFetch";
import SkillBar from "react-skillbars";
import "./skills.css";
import { Container } from "react-bootstrap";
const Skills = () => {
  const { data, error, isLoading } = UseFetch("skills");

  const levelMapping = {
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100,
  };

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (data) {
      const transformedSkills = data.map((skill) => ({
        type: skill.name,
        level: levelMapping[skill.level] || 0,
      }));
      setSkills(transformedSkills);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const colors = {
    bar: "#ab3b61",
    title: {
      text: "#fff",
      background: "#ab3b61",
    },
  };

  return (
    <Container fluid className='skills-section'>
      <div>
        {skills.length > 0 && (
          <div>
            {skills.map((skill, index) => (
              <div key={index}>
                <SkillBar
                  skills={[{ type: skill.type, level: skill.level }]}
                  colors={colors}
                  className='skills-style'
                  animationDuration={1000}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Skills;
