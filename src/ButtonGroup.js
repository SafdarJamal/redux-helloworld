import React from 'react';

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button data-tech={tech} key={`btn-${i}`} className="hello-btn">
        {tech}
      </button>
    ))}
  </div>
);

export default ButtonGroup;
