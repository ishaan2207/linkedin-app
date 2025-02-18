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
import EditEducation from "../../../components/Profile/ProfileEducation/EditEduation/EditEducation";
import EditExperience from "../../../components/Profile/ProfileExperience/EditExperience/EditExperience";
import UpdateSkill from "../../../components/Profile/Skills/UpdateSkill/UpdateSkill";

// contexts
import { useUser } from "../../../Context/UserContext";

// apis
import {
    createProfileExperience, createProfileEducation, createProfileSkill, fetchProfileInformation,
    fetchProfileExperience, fetchProfileEducation
} from "../../../utils/apis/profile";

function MainFeed() {

    const [allExperiences, setAllExperiences] = useState([]);
    const [showAddExperience, setShowAddExperience] = useState('none');
    const [showEditExperience, setShowEditExperience] = useState('none');
    const [editExperience, setEditExperience] = useState({});

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

    const { user } = useUser();

    useEffect(() => {
        fetchProfileInformation(user.userId).then(data => setProfileInfo(data));
        fetchProfileExperience().then(data => setAllExperiences(data));
        fetchProfileEducation().then(data => setAllEducations(data));
        fetchProfileInformation(user.userId).then(data => setAllSkills(data.skills));
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

            <AddExperience showAddExperience={showAddExperience} setShowAddExperience={setShowAddExperience}
                newExperienceFields={newExperienceFields} setNewExperienceFields={setNewExperienceFields}
                addNewExperience={addNewExperience} />
            <EditExperience setAllExperiences={setAllExperiences} showEditExperience={showEditExperience}
                setShowEditExperience={setShowEditExperience} editExperience={editExperience}
                setEditExperience={setEditExperience} />
            <ProfileExperience experiences={allExperiences} setShowAddExperience={setShowAddExperience}
                setShowEditExperience={setShowEditExperience} setEditExperience={setEditExperience} />


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