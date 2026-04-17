import { useContext } from "react";
import { Link } from "react-router-dom";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectRelatedProjects = () => {
    const { singleProjectData, loading } = useContext(SingleProjectContext);

    if (loading || !singleProjectData) {
        return (
            <div className="text-center text-ternary-dark dark:text-ternary-light">
                Chargement...
            </div>
        );
    }

    return (
        <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
                {singleProjectData.RelatedProject.title}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
                {singleProjectData.RelatedProject.projects.map((project) => (
                    <Link to={`/projects/${project.id}`} key={project.id}>
                        <img
                            src={project.img}
                            className="rounded-xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
                            alt={project.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectRelatedProjects;
