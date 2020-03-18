import React from 'react';
import { store } from '../store';
import { setTechnology } from '../actions';

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        key={`btn-${i}`}
        className="hello-btn"
        data-tech={tech}
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

const dispatchBtnAction = e => {
  const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(tech));
};

export default ButtonGroup;
