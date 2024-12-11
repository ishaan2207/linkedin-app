import React from "react";
import './ProfileExperience.css';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function ProfileExperience({ setShowAddExperience }) {
    const experiences = [

        {
            id: "1",
            title: "Software Engineer",
            company: "Google",
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            location: "San Francisco, CA",
            startDate: "2021-08",
            endDate: "Present",
            descriptions: [
                "Developed scalable web applications, enhancing system performance by 30%.",
                "Collaborated with cross-functional teams to design new features.",
                "Maintained high code quality through rigorous code reviews and testing."
            ]
        },
        {
            id: "2",
            title: "Product Manager",
            company: "Microsoft",
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            location: "New York, NY",
            startDate: "2020-06",
            endDate: "2023-05",
            descriptions: [
                "Led cross-functional teams to deliver 5 successful product launches.",
                "Implemented agile methodologies to streamline workflows.",
                "Conducted market research to identify customer pain points."
            ]
        },
        {
            id: "3",
            title: "Data Scientist",
            company: "Amazon",
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            location: "Seattle, WA",
            startDate: "2019-01",
            endDate: "2022-12",
            descriptions: [
                "Built predictive models increasing forecast accuracy by 15%.",
                "Analyzed complex datasets to uncover business insights.",
                "Automated data processing pipelines to reduce manual effort by 40%."
            ]
        }
    ]

    return (
        <div className="profileExperienceContainer">
            <div className="profileExperienceHeader">
                <p>Experiences</p>
                <div className="profileHeaderButtons">
                    <AddIcon style={{ height: '30px', width: '30px', marginRight: '20px' }} />
                    <EditIcon />
                </div>
            </div>
            <div className="profileExperience">
                {experiences.map(experience => (
                    <div className="experiencesContainer">
                        <div className="profileExperienceImage">
                            <img src={experience.companyImage} />
                        </div>
                        <div className="profileExperienceDescription">
                            <div className="experienceTitle">{experience.title}</div>
                            <div className="experienceCompany">{experience.company}</div>
                            <div className="experienceStartEndDates">{experience.startDate} to {experience.endDate}</div>
                            <div className="experienceLocation">{experience.location}</div>
                            <ul className="experienceDescription">
                                {experience.descriptions.map(description => (
                                    <li>{description}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileExperience;