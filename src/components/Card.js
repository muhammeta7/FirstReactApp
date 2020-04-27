import React from 'react';

class Card extends React.Component {
	render() {
    const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} alt=''/>
        <div className="info">
          <div className="name">Name: {profile.name}</div>
          <div className="name">Username: {profile.login}</div>
          <div className="company">Profession: {profile.company}</div>
          <div className="repos">Repos: {profile.public_repos}</div>
          <div className="location">Location: {profile.location}</div>
        </div>
    	</div>
    );
  }
}

export default Card;