// This file will organice the data to display in the profile and the templates
//Being realistic this should be done by mongo or by the user.



export const OrganizeCandidateData = (code, information) => {

    if (information && information.length) {
        if (code === 'Skills') {
            information = [...information].sort(function(a, b) {
                return  b.rate - a.rate;
              });
        } else  {
            information = [...information].sort(function(a, b) {
                return  b.startYear - a.startYear;
              });
        }
    }

    return information;

}


export const OrganizeTemplateData = (info) => {
    
    const formatedInfo = {
        ...info.getProfile,
        education: OrganizeCandidateData('education',info.getProfile.education),
        experience: OrganizeCandidateData('experience',info.getProfile.experience),
        skills: OrganizeCandidateData('Skills',info.getProfile.skills),
        volunteer: OrganizeCandidateData('volunteer',info.getProfile.volunteer),
    }

    return {getProfile:formatedInfo};
}