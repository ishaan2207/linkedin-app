// deps
import React, { useState } from "react";

// styles
import './AddExperience.css';

// components
import CloseIcon from '@mui/icons-material/Close';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

// constants
import { ADD_EXPERIENCE } from "../../../constants/texts/Profile/addExperience";

function AddExperience({ showAddExperience, setShowAddExperience, newExperienceFields, setNewExperienceFields, addNewExperience }) {
    const [experienceDescriptionLength, setExperienceDescriptionLength] = useState(0);

    function handleHideExperience(hide) {
        console.log(setShowAddExperience(hide));
    }

    function handleSubmit() {
        addNewExperience();
        setShowAddExperience('none');
    }

    return (
        <div className="addExperienceContainer" style={{ display: showAddExperience }}>
            <div className="addExperienceHeader">
                <p>{ADD_EXPERIENCE.ADD_EXPERIENCE}</p>
                <div className="addExperienceCloseButton" onClick={() => handleHideExperience('none')}>
                    <CloseIcon />
                </div>
            </div>
            <div className="separator"></div>
            <div className="addExperienceForm">
                <div className="indicatesRequired">{ADD_EXPERIENCE.REQUIRED}</div>
                <div className="addExperienceTitle addExperienceTextForm">
                    <p>{ADD_EXPERIENCE.TITLE}</p>
                    <input type="text" placeholder="Ex: Retail Sales Manager"
                        value={newExperienceFields.experienceTitle}
                        onChange={(event) => setNewExperienceFields({ ...newExperienceFields, experienceTitle: event.target.value })} />
                </div>

                <div className="addExperienceEmploymentType addExperienceTextForm">
                    <p>{ADD_EXPERIENCE.EMP_TYPE}</p>
                    <input type="text" placeholder="Ex: Full Time" />
                </div>

                <div className="addExperienceCompany addExperienceTextForm">
                    <p>{ADD_EXPERIENCE.COMPANY}</p>
                    <input type="text" placeholder="Ex: Microsoft"
                        value={newExperienceFields.experienceCompany}
                        onChange={(event) => setNewExperienceFields({ ...newExperienceFields, experienceCompany: event.target.value })} />
                </div>

                <div className="currentlyWorkingHereCheckbox">
                    <input type="checkbox" checked={true} />
                    <p>{ADD_EXPERIENCE.COMPANY}</p>
                </div>

                <div className="startDateInput addExperienceDates">
                    <p>{ADD_EXPERIENCE.START_DATE}</p>
                    <div className="datesInputContainer">
                        <input type="text" placeholder="Month"
                            value={newExperienceFields.experienceStartMonth}
                            onChange={(event) => setNewExperienceFields({ ...newExperienceFields, experienceStartMonth: event.target.value })} />
                        <input type="text" placeholder="Year"
                            value={newExperienceFields.experienceStartYear}
                            onChange={(event) => setNewExperienceFields({ ...newExperienceFields, experienceStartYear: event.target.value })} />
                    </div>
                </div>

                <div className="endDateInput addExperienceDates">
                    <p>{ADD_EXPERIENCE.END_DATE}</p>
                    <div className="datesInputContainer">
                        <input type="text" placeholder="Month"
                            value={newExperienceFields.experienceEndMonth}
                            onChange={(event) => setNewExperienceFields({ ...newExperienceFields, experienceEndMonth: event.target.value })} />
                        <input type="text" placeholder="Year"
                            value={newExperienceFields.experienceEndYear}
                            onChange={(event) => setNewExperienceFields({ ...newExperienceFields, experienceEndYear: event.target.value })} />
                    </div>
                </div>

                <div className="addExperienceLocation addExperienceTextForm">
                    <p>{ADD_EXPERIENCE.LOCATION}</p>
                    <input type="text" placeholder="Ex: London, United Kingdom"
                        value={newExperienceFields.experienceLocation}
                        onChange={(event) => setNewExperienceFields({ ...newExperienceFields, experienceLocation: event.target.value })} />
                </div>

                <div className="addExperienceLocationType addExperienceTextForm">
                    <p>{ADD_EXPERIENCE.LOCATION_TYPE}</p>
                    <input type="text" placeholder="Ex: On-site" />
                </div>

                <div className="addExperienceDescription">
                    <p>{ADD_EXPERIENCE.DESCRIPTION}</p>
                    <div className="descriptionTextAreaContainer">
                        <textarea
                            type="text"
                            placeholder="List your major duties and successes, highlighting specific projects"
                            value={newExperienceFields.experienceDescriptions}
                            onChange={(event) => {
                                setNewExperienceFields({ ...newExperienceFields, experienceDescriptions: [event.target.value] });
                                setExperienceDescriptionLength(event.target.value.length)
                            }}
                        />
                        <div className="separator"></div>
                        <div className="descriptionAiAdContainer">
                            <SquareRoundedIcon />
                            <p><span>{ADD_EXPERIENCE.AI_SUGGESTIONS_BOLD}</span>{ADD_EXPERIENCE.AI_SUGGESTIONS}</p>
                        </div>
                    </div>
                    <div className="experienceDescriptionLengthContainer">
                        <p>{ADD_EXPERIENCE.AI_ASSISTANCE}</p>
                        <p className="experienceDescriptionLength">{`${experienceDescriptionLength}/2,000`}</p>
                    </div>
                </div>

                <div className="addProfileHeadline addExperienceTextForm">
                    <p>{ADD_EXPERIENCE.PROFILE_HEADLINE}</p>
                    <input type="text" value='Recent graduate from the University of British Columbia' />
                    <p className="profileHeaderInfo">{ADD_EXPERIENCE.HEADLINE_LOCATION}</p>
                </div>

                <div className="addExperienceJobFound addExperienceTextForm">
                    <p>{ADD_EXPERIENCE.FOUND_JOB}</p>
                    <input type="text" placeholder="Ex: Company website" />
                    <p className="experienceJobFoundInfo">{ADD_EXPERIENCE.SEARCH_EXPERIENCE}</p>
                </div>

                <div className="addExperienceButtonGroups">
                    <div className="addExperienceSkillsHeader">{ADD_EXPERIENCE.SKILLS}</div>
                    <p>{ADD_EXPERIENCE.SKILLS_USED}</p>
                    <button className="addSkillsButton addExperienceButtons"><AddRoundedIcon style={{ margin: '0 4px 0 -2px', height: '22px', width: '22px' }} /><span>Add skill</span></button>
                </div>

                <div className="addExperienceButtonGroups">
                    <div className="addExperienceMediaHeader">{ADD_EXPERIENCE.MEDIA}</div>
                    <p>{ADD_EXPERIENCE.ADD_MEDIA}<span>{ADD_EXPERIENCE.ADD_MEDIA_BOLD}</span></p>
                    <button className="addMediaButton addExperienceButtons"><AddRoundedIcon style={{ margin: '0 4px 0 -2px', height: '22px', width: '22px' }} /><span>Add media</span></button>
                </div>
            </div>
            <div className="separator addExperienceBottomSeparator"></div>

            <div className="experienceSaveButtonContainer">
                <button onClick={handleSubmit}><span>Save</span></button>
            </div>
        </div>
    )
}

export default AddExperience;