import React from 'react';

function Navigation (props) {
    const {
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
      } = props;

    return (
        <div className="buttons-section">
            <span>
                <button className="btn btn-primary nav-buttons" onClick={() => {
                    setAboutSelected(true);
                    setPortfolioSelected(false);
                    setContactSelected(false);
                    setResumeSelected(false);
                }}>About Me</button>

                <button className="btn btn-primary nav-buttons" onClick={() => {
                        setAboutSelected(false);
                        setPortfolioSelected(true);
                        setContactSelected(false);
                        setResumeSelected(false);
                    }}>Portfolio</button>

                <button className="btn btn-primary nav-buttons" onClick={() => {
                        setAboutSelected(false);
                        setPortfolioSelected(false);
                        setContactSelected(true);
                        setResumeSelected(false);
                    }}>Contact</button>

                <button className="btn btn-primary nav-buttons" onClick={() => {
                        setAboutSelected(false);
                        setPortfolioSelected(false);
                        setContactSelected(false);
                        setResumeSelected(true);
                    }}>Resume</button>
            </span>
        </div>

    );
};

export default Navigation;