import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css'; // Certifique-se de criar este arquivo para os estilos

const ProgressBar = ({ percentual, nome }) => {
  return (
    <div className="progress-bar-wrapper">
        <span className="no-wrap-text">{nome}</span>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentual}%` }}
        >
            <span className="progress-bar-text">{percentual}%</span>
        </div>
      </div>
      
    </div>
  );
};

ProgressBar.propTypes = {
  percentual: PropTypes.number.isRequired,
  nome: PropTypes.string,
};

export default ProgressBar;