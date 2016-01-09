import React from 'react';

export default class ProjectCard extends React.Component {
  render () {
    return (
      <div className="project-card">
        <div className="project-card-header">
          <img src="https://placehold.it/350/333333" />
        </div>
        <div className="project-card-body">
          <h3>Some Amazing Project!</h3>
          <p>
            Lorem ipsum dolor sit amet, per wisi graece nostro ad. At eos illum
            definitionem, sit iriure scaevola in. Laudem voluptaria no usu, no
            nibh constituto vituperatoribus usu. Eum id facilisis efficiendi
            scriptorem, eum mutat illum iudicabit ea, civibus omittam sapientem
          </p>
        </div>
      </div>
    );
  }
}
