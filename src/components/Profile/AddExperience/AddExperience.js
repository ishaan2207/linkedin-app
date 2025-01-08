// deps
import React, { useState } from "react";

// styles
import './AddExperience.css';

// components
import CloseIcon from '@mui/icons-material/Close';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function AddExperience({ showAddExperience, setShowAddExperience, newExperienceFields, setNewExperienceFields, addNewExperience }) {
    const [experienceDescriptionLength, setExperienceDescriptionLength] = useState(0);

    function handleHideExperience(hide) {
        console.log(setShowAddExperience(hide));
    }

    return (
        <div className="addExperienceContainer" style={{ display: showAddExperience }}>
            <div className="addExperienceHeader">
                <p>Add experience</p>
                <div className="addExperienceCloseButton" onClick={() => handleHideExperience('none')}>
                    <CloseIcon />
                </div>
            </div>
            <div className="separator"></div>
            <div className="addExperienceForm">
                <div className="indicatesRequired">* Indicates required</div>
                <div className="addExperienceTitle addExperienceTextForm">
                    <p>Title*</p>
                    <input type="text" placeholder="Ex: Retail Sales Manager"
                        value={newExperienceFields.experienceTitle}
                        onChange={(event) => setNewExperienceFields({...newExperienceFields, experienceTitle: event.target.value})} />
                </div>

                <div className="addExperienceEmploymentType addExperienceTextForm">
                    <p>Employment type</p>
                    <input type="text" placeholder="Ex: Full Time" />
                </div>

                <div className="addExperienceCompany addExperienceTextForm">
                    <p>Company or organization*</p>
                    <input type="text" placeholder="Ex: Microsoft"
                        value={newExperienceFields.experienceCompany}
                        onChange={(event) => newExperienceFields.setExperienceCompany(event.target.value)} />
                </div>

                <div className="currentlyWorkingHereCheckbox">
                    <input type="checkbox" checked={true} />
                    <p>I am currently working in this role</p>
                </div>

                <div className="startDateInput addExperienceDates">
                    <p>Start date*</p>
                    <div className="datesInputContainer">
                        <input type="text" placeholder="Month"
                            value={newExperienceFields.experienceStartMonth}
                            onChange={(event) => newExperienceFields.setExperienceStartMonth(event.target.value)} />
                        <input type="text" placeholder="Year"
                            value={newExperienceFields.experienceStartYear}
                            onChange={(event) => newExperienceFields.setExperienceStartYear(event.target.value)} />
                    </div>
                </div>

                <div className="endDateInput addExperienceDates">
                    <p>End date*</p>
                    <div className="datesInputContainer">
                        <input type="text" placeholder="Month"
                            value={newExperienceFields.experienceEndMonth}
                            onChange={(event) => newExperienceFields.setExperienceEndMonth(event.target.value)} />
                        <input type="text" placeholder="Year"
                            value={newExperienceFields.experienceEndYear}
                            onChange={(event) => newExperienceFields.setExperienceEndYear(event.target.value)} />
                    </div>
                </div>

                <div className="addExperienceLocation addExperienceTextForm">
                    <p>Location</p>
                    <input type="text" placeholder="Ex: London, United Kingdom"
                        value={newExperienceFields.experienceLocation}
                        onChange={(event) => newExperienceFields.setExperienceLocation(event.target.value)} />
                </div>

                <div className="addExperienceLocationType addExperienceTextForm">
                    <p>Location type</p>
                    <input type="text" placeholder="Ex: On-site" />
                </div>

                <div className="addExperienceDescription">
                    <p>Description</p>
                    <div className="descriptionTextAreaContainer">
                        <textarea
                            type="text"
                            placeholder="List your major duties and successes, highlighting specific projects"
                            value={newExperienceFields.experienceDescriptions}
                            onChange={(event) => {
                                newExperienceFields.setExperienceDescriptions([event.target.value]);
                                setExperienceDescriptionLength(event.target.value.length)
                            }}
                        />
                        <div className="separator"></div>
                        <div className="descriptionAiAdContainer">
                            <SquareRoundedIcon />
                            <p><span>Get AI suggestions</span> with Premium</p>
                        </div>
                    </div>
                    <div className="experienceDescriptionLengthContainer">
                        <p>Unlock AI assistance with 20 words</p>
                        <p className="experienceDescriptionLength">{`${experienceDescriptionLength}/2,000`}</p>
                    </div>
                </div>

                <div className="addProfileHeadline addExperienceTextForm">
                    <p>Profile headline</p>
                    <input type="text" value='Recent graduate from the University of British Columbia' />
                    <p className="profileHeaderInfo">Appears below your name at the top of the profile</p>
                </div>

                <div className="addExperienceJobFound addExperienceTextForm">
                    <p>Where did you find this job?</p>
                    <input type="text" placeholder="Ex: Company website" />
                    <p className="experienceJobFoundInfo">This information will be used to improve LinkedIn's job search experience.</p>
                </div>

                <div className="addExperienceButtonGroups">
                    <div className="addExperienceSkillsHeader">Skills</div>
                    <p>We recommend adding your top 5 used in this role. They'll also appear in your Skills section.</p>
                    <button className="addSkillsButton addExperienceButtons"><AddRoundedIcon style={{ margin: '0 4px 0 -2px', height: '22px', width: '22px' }} /><span>Add skill</span></button>
                </div>

                <div className="addExperienceButtonGroups">
                    <div className="addExperienceMediaHeader">Media</div>
                    <p>Add media like images, documents, sites or presentations. Learn more about <span>media file types supported</span></p>
                    <button className="addMediaButton addExperienceButtons"><AddRoundedIcon style={{ margin: '0 4px 0 -2px', height: '22px', width: '22px' }} /><span>Add media</span></button>
                </div>
            </div>
            <div className="separator addExperienceBottomSeparator"></div>

            <div className="experienceSaveButtonContainer">
                <button onClick={addNewExperience}><span>Save</span></button>
            </div>
        </div>
    )
}

export default AddExperience;