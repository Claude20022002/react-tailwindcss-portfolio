import { useState, createContext, useEffect } from 'react';
import { projectsData } from '../data/projects';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, projectId = 1 }) => {
	const [singleProjectData, setSingleProjectData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Trouve le projet par ID
		const project = projectsData.find(p => p.id === parseInt(projectId));
		
		if (project) {
			// Structure les données pour les composants
			setSingleProjectData({
				ProjectHeader: project.header,
				ProjectImages: project.gallery,
				ProjectInfo: {
					ClientHeading: project.info.clientHeading,
					CompanyInfo: project.info.companyInfo,
					ObjectivesHeading: project.info.objectivesHeading,
					ObjectivesDetails: project.info.objectivesDetails,
					Technologies: project.info.technologies,
					ProjectDetailsHeading: project.info.projectDetailsHeading,
					ProjectDetails: project.info.projectDetails,
					SocialSharingHeading: project.info.socialSharingHeading,
					SocialSharing: project.info.socialSharing,
				},
				RelatedProject: project.relatedProjects,
			});
		}
		setLoading(false);
	}, [projectId]);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, loading }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
