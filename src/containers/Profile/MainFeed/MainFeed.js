import React, { useState } from "react";
import './MainFeed.css';

import ProfileInformation from "../../../components/Profile/ProfileInformation/ProfileInformation";
import ProfileAnalytics from "../../../components/Profile/ProfileAnalytics/ProfileAnalytics";
import ProfileExperience from "../../../components/Profile/ProfileExperience/ProfileExperience";
import AddExperience from "../../../components/Profile/AddExperience/AddExperience";

function MainFeed() {
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

    const [allExperiences, setAllExperiences] = useState(experiences);
    const [showAddExperience, setShowAddExperience] = useState('none');

    const [experienceTitle, setExperienceTitle] = useState('');
    const [experienceCompany, setExperienceCompany] = useState('');
    const [experienceCompanyImage, setExperienceCompanyImage] = useState('');
    const [experienceLocation, setExperienceLocation] = useState('');
    const [experienceStartMonth, setExperienceStartMonth] = useState('');
    const [experienceStartYear, setExperienceStartYear] = useState('');
    const [experienceEndMonth, setExperienceEndMonth] = useState('');
    const [experienceEndYear, setExperienceEndYear] = useState('');
    const [experienceDescriptions, setExperienceDescriptions] = useState([]);

    const newExperienceFields = {
        experienceTitle: experienceTitle,
        setExperienceTitle: setExperienceTitle,
        experienceCompany: experienceCompany,
        setExperienceCompany: setExperienceCompany,
        experienceCompanyImage: experienceCompanyImage,
        setExperienceCompanyImage: setExperienceCompanyImage,
        experienceLocation: experienceLocation,
        setExperienceLocation: setExperienceLocation,

        experienceStartMonth: experienceStartMonth,
        setExperienceStartMonth: setExperienceStartMonth,

        experienceStartYear: experienceStartYear,
        setExperienceStartYear: setExperienceStartYear,

        experienceEndMonth: experienceEndMonth,
        setExperienceEndMonth: setExperienceEndMonth,

        experienceEndYear: experienceEndYear,
        setExperienceEndYear: setExperienceEndYear,

        experienceDescriptions: experienceDescriptions,
        setExperienceDescriptions: setExperienceDescriptions
    }

    function addNewExperience() {
        const newExperience = {
            id: (allExperiences.length) + 1 + '',
            title: experienceTitle,
            company: experienceCompany,
            companyImage: experienceCompanyImage,
            location: experienceLocation,
            startDate: experienceStartYear + '-' + experienceStartMonth,
            endDate: experienceEndYear + '-' + experienceEndMonth,
            descriptions: experienceDescriptions
        }
        setAllExperiences([...allExperiences, newExperience]);
    }

    return (
        <div className="profileMainFeedContainer">
            <ProfileInformation />
            <ProfileAnalytics />
            <ProfileExperience experiences={allExperiences} setShowAddExperience={setShowAddExperience} />
            <AddExperience showAddExperience={showAddExperience} setShowAddExperience={setShowAddExperience}
                newExperienceFields={newExperienceFields} addNewExperience={addNewExperience} />
        </div>
    )
}

export default MainFeed;