import React from 'react';

function Navigation (props) {
    const {
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
      } = props;

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => {
                                setAboutSelected(true);
                                setPortfolioSelected(false);
                                setContactSelected(false);
                                setResumeSelected(false);
                            }}>About Me</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => {
                                    setAboutSelected(false);
                                    setPortfolioSelected(true);
                                    setContactSelected(false);
                                    setResumeSelected(false);
                                }}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => {
                                    setAboutSelected(false);
                                    setPortfolioSelected(false);
                                    setContactSelected(true);
                                    setResumeSelected(false);
                                }}>Contact</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => {
                                    setAboutSelected(false);
                                    setPortfolioSelected(false);
                                    setContactSelected(false);
                                    setResumeSelected(true);
                                }}>Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;