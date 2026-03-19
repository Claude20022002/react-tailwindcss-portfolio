import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";
import CertificatesGrid from "../components/certificates/CertificatesGrid";
import { CertificatesProvider } from "../context/CertificatesContext";
import {
    FiBriefcase,
    FiCalendar,
    FiMapPin,
    FiChevronRight,
} from "react-icons/fi";

const Home = () => {
    return (
        <div className="container mx-auto">
            <AppBanner></AppBanner>

            <ProjectsProvider>
                <ProjectsGrid></ProjectsGrid>
            </ProjectsProvider>

            <div className="mt-8 sm:mt-10 flex justify-center">
                <Link
                    to="/projects"
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                    aria-label="Plus de Projets"
                >
                    <Button title="Plus de Projets" />
                </Link>
            </div>

            <div className="w-full text-left mt-16 sm:mt-20">
                <p className="font-general-regular text-center text-primary-dark dark:text-primary-light text-2xl sm:text-3xl font-bold mb-12">
                    Expériences professionnelles
                </p>

                <div className="space-y-6">
                    {/* Experience 1 */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-light to-gray-50 dark:from-ternary-dark dark:to-gray-900 border border-gray-200 dark:border-secondary-dark hover:shadow-2xl transition-all duration-300 p-6 sm:p-8">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>

                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 group-hover:scale-110 transition-transform">
                                    <FiBriefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                    <p className="font-general-medium text-lg sm:text-xl text-ternary-dark dark:text-ternary-light">
                                        Assistant Logistique & Support
                                        Informatique
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 ml-16 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiCalendar className="w-4 h-4" />
                                <span>Septembre 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiMapPin className="w-4 h-4" />
                                <span className="font-medium">AMBITION 28</span>
                            </div>
                        </div>

                        <ul className="ml-16 space-y-2">
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Participation à l'organisation logistique
                                    d'un événement avec des acteurs
                                    institutionnels.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Mise en place de solutions d'automatisation
                                    avec une équipe IT.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Support technique et coordination
                                    opérationnelle sur site.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Experience 2 */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-light to-gray-50 dark:from-ternary-dark dark:to-gray-900 border border-gray-200 dark:border-secondary-dark hover:shadow-2xl transition-all duration-300 p-6 sm:p-8">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500"></div>

                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform">
                                    <FiBriefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-general-medium text-lg sm:text-xl text-ternary-dark dark:text-ternary-light">
                                        Stagiaire en Robotique – Vision IA
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 ml-16 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiCalendar className="w-4 h-4" />
                                <span>Juillet 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiMapPin className="w-4 h-4" />
                                <span className="font-medium">
                                    HESTIM FabLab
                                </span>
                            </div>
                        </div>

                        <ul className="ml-16 space-y-2">
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Mise en service de robots collaboratifs
                                    (MyCobot280 pi, UltraArm P340).
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Conception de scénarios robotiques avec
                                    vision par ordinateur.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Gestion de données liées aux
                                    expérimentations.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Experience 3 */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-light to-gray-50 dark:from-ternary-dark dark:to-gray-900 border border-gray-200 dark:border-secondary-dark hover:shadow-2xl transition-all duration-300 p-6 sm:p-8">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 group-hover:scale-110 transition-transform">
                                    <FiBriefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <p className="font-general-medium text-lg sm:text-xl text-ternary-dark dark:text-ternary-light">
                                        Téléprospectrice
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 ml-16 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiCalendar className="w-4 h-4" />
                                <span>Juin – Juillet 2024</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiMapPin className="w-4 h-4" />
                                <span className="font-medium">
                                    MD CALLCENTER
                                </span>
                            </div>
                        </div>

                        <ul className="ml-16 space-y-2">
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Réalisation de campagnes d'appels pour la
                                    promotion de services auprès de
                                    propriétaires.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Mise à jour et suivi d'une base de données
                                    clients.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Experience 4 */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-light to-gray-50 dark:from-ternary-dark dark:to-gray-900 border border-gray-200 dark:border-secondary-dark hover:shadow-2xl transition-all duration-300 p-6 sm:p-8">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500"></div>

                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 group-hover:scale-110 transition-transform">
                                    <FiBriefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="font-general-medium text-lg sm:text-xl text-ternary-dark dark:text-ternary-light">
                                        Membre actif – HIC Code Masters
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 ml-16 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiCalendar className="w-4 h-4" />
                                <span>2023 – 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiMapPin className="w-4 h-4" />
                                <span className="font-medium">
                                    HESTIM Clubs
                                </span>
                            </div>
                        </div>

                        <ul className="ml-16 space-y-2">
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Participation à des projets collaboratifs
                                    pour approfondir les compétences en
                                    programmation.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Découverte et expérimentation de nouveaux
                                    langages et outils.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Experience 5 */}
                    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-light to-gray-50 dark:from-ternary-dark dark:to-gray-900 border border-gray-200 dark:border-secondary-dark hover:shadow-2xl transition-all duration-300 p-6 sm:p-8">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>

                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 group-hover:scale-110 transition-transform">
                                    <FiBriefcase className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <p className="font-general-medium text-lg sm:text-xl text-ternary-dark dark:text-ternary-light">
                                        Aide technicien
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 ml-16 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiCalendar className="w-4 h-4" />
                                <span>Février – Août 2023</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiMapPin className="w-4 h-4" />
                                <span className="font-medium">STI Company</span>
                            </div>
                        </div>

                        <ul className="ml-16 space-y-2">
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Soutien aux techniciens pour l'entretien
                                    d'équipements industriels (réacteurs,
                                    ballons, capacités).
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-ternary-dark dark:text-ternary-light">
                                <FiChevronRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>
                                    Réalisation de tâches techniques spécifiques
                                    (ex. sablage) en équipe.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*
            <CertificatesProvider>
                <CertificatesGrid></CertificatesGrid>
            </CertificatesProvider>

            <div className="mt-8 sm:mt-10 flex justify-center">
                <Link
                    to="/certificates"
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                    aria-label="Voir plus"
                >
                    <Button title="Voir plus" />
                </Link>
            </div>
			*/}
        </div>
    );
};

export default Home;
