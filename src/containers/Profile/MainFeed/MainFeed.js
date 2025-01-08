// deps
import React, { useState } from "react";

// styles
import './MainFeed.css';

// components
import ProfileInformation from "../../../components/Profile/ProfileInformation/ProfileInformation";
import ProfileAnalytics from "../../../components/Profile/ProfileAnalytics/ProfileAnalytics";
import ProfileExperience from "../../../components/Profile/ProfileExperience/ProfileExperience";
import AddExperience from "../../../components/Profile/AddExperience/AddExperience";
import ProfileAbout from "../../../components/Profile/ProfileAbout/ProfileAbout";
import ProfileActivity from "../../../components/Profile/ProfileActivity/ProfileActivity";
import ProfileEducation from "../../../components/Profile/ProfileEducation/ProfileEducation";
import Skills from "../../../components/Profile/Skills/Skills";

// constants
import { experiences } from "../../../constants/mocks/Profile/profileMainFeed";

function MainFeed() {

    const [allExperiences, setAllExperiences] = useState(experiences);
    const [showAddExperience, setShowAddExperience] = useState('none');

    // const [experienceTitle, setExperienceTitle] = useState('');
    // const [experienceCompany, setExperienceCompany] = useState('');
    // const [experienceCompanyImage, setExperienceCompanyImage] = useState('');
    // const [experienceLocation, setExperienceLocation] = useState('');
    // const [experienceStartMonth, setExperienceStartMonth] = useState('');
    // const [experienceStartYear, setExperienceStartYear] = useState('');
    // const [experienceEndMonth, setExperienceEndMonth] = useState('');
    // const [experienceEndYear, setExperienceEndYear] = useState('');
    // const [experienceDescriptions, setExperienceDescriptions] = useState([]);

    const [newExperienceFields, setNewExperienceFields] = useState({
        experienceTitle: '',
        experienceCompany: '',
        experienceCompanyImage: '',
        experienceLocation: '',
        experienceStartMonth: '',
        experienceStartYear: '',
        experienceEndMonth: '',
        experienceEndYear: '',
        experienceDescriptions: []
    })

    // const newExperienceFields = {
    //     experienceTitle: experienceTitle,
    //     setExperienceTitle: setExperienceTitle,
    //     experienceCompany: experienceCompany,
    //     setExperienceCompany: setExperienceCompany,
    //     experienceCompanyImage: experienceCompanyImage,
    //     setExperienceCompanyImage: setExperienceCompanyImage,
    //     experienceLocation: experienceLocation,
    //     setExperienceLocation: setExperienceLocation,

    //     experienceStartMonth: experienceStartMonth,
    //     setExperienceStartMonth: setExperienceStartMonth,

    //     experienceStartYear: experienceStartYear,
    //     setExperienceStartYear: setExperienceStartYear,

    //     experienceEndMonth: experienceEndMonth,
    //     setExperienceEndMonth: setExperienceEndMonth,

    //     experienceEndYear: experienceEndYear,
    //     setExperienceEndYear: setExperienceEndYear,

    //     experienceDescriptions: experienceDescriptions,
    //     setExperienceDescriptions: setExperienceDescriptions
    // }

    function addNewExperience() {
        const newExperience = {
            id: (allExperiences.length) + 1 + '',
            title: newExperienceFields.experienceTitle,
            company: newExperienceFields.experienceCompany,
            companyImage: newExperienceFields.experienceCompanyImage,
            location: newExperienceFields.experienceLocation,
            startDate: newExperienceFields.experienceStartYear + '-' + newExperienceFields.experienceStartMonth,
            endDate: newExperienceFields.experienceEndYear + '-' + newExperienceFields.experienceEndMonth,
            descriptions: newExperienceFields.experienceDescriptions
        }
        setAllExperiences([...allExperiences, newExperience]);
    }

    return (
        <div className="profileMainFeedContainer">
            <ProfileInformation />
            <ProfileAnalytics />
            <ProfileAbout />
            <ProfileActivity />
            <ProfileExperience experiences={allExperiences} setShowAddExperience={setShowAddExperience} />
            <ProfileEducation />
            <AddExperience 
                showAddExperience={showAddExperience} setShowAddExperience={setShowAddExperience}
                newExperienceFields={newExperienceFields} setNewExperienceFields={setNewExperienceFields} 
                addNewExperience={addNewExperience} />
            <Skills />
        </div>
    )
}

export default MainFeed;