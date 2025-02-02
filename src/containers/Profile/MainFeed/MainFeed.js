// deps
import React, { useState, useEffect } from "react";

// styles
import './MainFeed.css';

// components
import ProfileInformation from "../../../components/Profile/ProfileInformation/ProfileInformation";
import ProfileAnalytics from "../../../components/Profile/ProfileAnalytics/ProfileAnalytics";
import ProfileExperience from "../../../components/Profile/ProfileExperience/ProfileExperience";
import AddExperience from "../../../components/Profile/AddExperience/AddExperience";
import AddEducation from "../../../components/Profile/ProfileEducation/AddEducation/AddEducation";
import ProfileAbout from "../../../components/Profile/ProfileAbout/ProfileAbout";
import ProfileActivity from "../../../components/Profile/ProfileActivity/ProfileActivity";
import ProfileEducation from "../../../components/Profile/ProfileEducation/ProfileEducation";
import Skills from "../../../components/Profile/Skills/Skills";
import AddSkill from "../../../components/Profile/Skills/AddSkill/AddSkill";
import EditProfileAbout from "../../../components/Profile/ProfileAbout/EditProfileAbout/EditProfileAbout";
import EditProfileInfo from "../../../components/Profile/ProfileInformation/EditProfileInfo/EditProfileInfo";

// constants
import { experiences } from "../../../constants/mocks/Profile/profileMainFeed";

// apis
import { createProfileExperience, createProfileEducation, createProfileSkill, fetchProfileInformation, fetchProfileEducation } from "../../../utils/apis/profile";
import UpdateSkill from "../../../components/Profile/Skills/UpdateSkill/UpdateSkill";
import EditEducation from "../../../components/Profile/ProfileEducation/EditEduation/EditEducation";

function MainFeed() {

    const [allExperiences, setAllExperiences] = useState(experiences);
    const [showAddExperience, setShowAddExperience] = useState('none');

    const [allEducations, setAllEducations] = useState([]);
    const [showAddEducation, setShowAddEducation] = useState('none');
    const [showEditEducation, setShowEditEducation] = useState('none');
    const [editEducation, setEditEducation] = useState({});

    const [allSkills, setAllSkills] = useState([]);
    const [showAddSkills, setShowAddSkills] = useState('none');
    const [showUpdateSkills, setShowUpdateSkills] = useState('none');
    const [editSkill, setEditSkill] = useState({});

    const [profileInfo, setProfileInfo] = useState([]);

    const [showEditInfo, setShowEditInfo] = useState('none');
    const [showEditAbout, setShowEditAbout] = useState('none');

    useEffect(() => {
        fetchProfileInformation().then(data => setProfileInfo(data[0]));
        fetchProfileEducation().then(data => setAllEducations(data));
        fetchProfileInformation().then(data => setAllSkills(data[0].skills));
    }, [])

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

    const [newEducation, setNewEducation] = useState({
        location: '',
        field: '',
        dates: '',
    })

    const [newSkill, setNewSkill] = useState({
        skill: '',
        learntFrom: '',
    });

    const addNewEducation = () => {
        const education = {
            userId: '1',
            image: 'https://t3.ftcdn.net/jpg/04/91/76/62/360_F_491766294_h4j7LbW2YgfbNHhq7F8GboIc1XyBSEY5.jpg',
            location: newEducation.location,
            field: newEducation.field,
            dates: newEducation.dates,
        };
        setAllEducations([...allEducations, education]);
        createProfileEducation(education);
    }

    const addNewExperience = () => {
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
        createProfileExperience(newExperience);
    }

    const addNewSkill = () => {
        const skill = {
            skill: newSkill.skill,
            image: 'https://as1.ftcdn.net/v2/jpg/02/43/26/70/1000_F_243267032_PCinzxeQsYZiV1sfmApbRPsT86HeZsSo.jpg',
            learntFrom: newSkill.learntFrom,
        };
        setAllSkills([...allSkills, skill]);
        createProfileSkill(profileInfo._id, skill);
    }

    return (
        <div className="profileMainFeedContainer">
            <EditProfileInfo profileInfo={profileInfo} setProfileInfo={setProfileInfo} showEditInfo={showEditInfo}
                setShowEditInfo={setShowEditInfo} />
            <ProfileInformation profileInfo={profileInfo} setShowEditInfo={setShowEditInfo} />

            <ProfileAnalytics />

            <EditProfileAbout profileInfo={profileInfo} setProfileInfo={setProfileInfo} showEditAbout={showEditAbout}
                setShowEditAbout={setShowEditAbout} id={profileInfo._id} />
            <ProfileAbout profileAbout={profileInfo.about} setShowEditAbout={setShowEditAbout} />

            <ProfileActivity />

            <ProfileExperience experiences={allExperiences} setShowAddExperience={setShowAddExperience} />
            <AddExperience showAddExperience={showAddExperience} setShowAddExperience={setShowAddExperience}
                newExperienceFields={newExperienceFields} setNewExperienceFields={setNewExperienceFields}
                addNewExperience={addNewExperience} />

            <AddEducation showAddEducation={showAddEducation} setShowAddEducation={setShowAddEducation}
                newEducation={newEducation} setNewEducation={setNewEducation} addNewEducation={addNewEducation} />
            <EditEducation setAllEducations={setAllEducations} showEditEducation={showEditEducation}
                setShowEditEducation={setShowEditEducation} editEducation={editEducation} setEditEducation={setEditEducation} />
            <ProfileEducation allEducations={allEducations} setShowAddEducation={setShowAddEducation}
                setShowEditEducation={setShowEditEducation} setEditEducation={setEditEducation} />

            <AddSkill showAddSkills={showAddSkills} setShowAddSkills={setShowAddSkills} newSkill={newSkill}
                setNewSkill={setNewSkill} addNewSkill={addNewSkill} />
            <UpdateSkill setAllSkills={setAllSkills} showUpdateSkills={showUpdateSkills} setShowUpdateSkills={setShowUpdateSkills}
                editSkill={editSkill} setEditSkill={setEditSkill} />
            <Skills allSkills={allSkills} setShowAddSkills={setShowAddSkills} setShowUpdateSkills={setShowUpdateSkills}
                setEditSkill={setEditSkill} />
        </div>
    )
}

export default MainFeed;