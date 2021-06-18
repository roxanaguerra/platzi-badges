import React from 'react';
import confLogo from '../images/badge-header.svg';
import avatarImg from '../images/user.svg';

import '../styles/Badges.css';

class Badge extends React.Component {
    render() {
        // const firstName = 'Roxana';
        // const lastName = 'Guerra Apaza';
        const { firstName, lastName, jobTitle, twitterAccount } = this.props

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name ">
                    <img className="Badge__avatar" src={avatarImg} alt="Avatar" />
                    <h1>
                        {firstName} <br /> {lastName}
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{jobTitle}</h3>
                    <div>@{twitterAccount}</div>
                </div>
                <div className="Badge__footer">
                    #platziConf
                </div>
            </div>
        );
    }
};

export default Badge;
