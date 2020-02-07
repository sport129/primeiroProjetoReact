import React from 'react';
import Proptype from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.Proptype = {
  tech: Proptype.string.isRequired,
  onDelete: Proptype.func.isRequired,
};

export default TechItem;
