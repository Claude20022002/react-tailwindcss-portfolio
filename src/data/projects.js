// Import images
import WebImage1 from "../images/web-project-1.jpg";
import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";

// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from "react-icons/fi";

export const projectsData = [
    {
        id: 1,
        title: "Hestim Planner",
        category: "Web application",
        img: WebImage2,
        publishDate: "Mai 10, 2026",
        tags: "UI / Frontend / Backend / Base de donnée",
        header: {
            title: "Hestim Planner",
            publishDate: "Mai 10, 2026",
            tags: "UI / Frontend / Backend / Base de donnée",
        },
        gallery: [
            { id: 1, title: "Hestim Planner UI", img: WebImage2 },
            { id: 2, title: "Hestim Planner Dashboard", img: WebImage1 },
            { id: 3, title: "Hestim Planner Mobile", img: MobileImage2 },
        ],
        info: {
            clientHeading: "About Client",
            companyInfo: [
                { id: 1, title: "Name", details: "Hestim Corp" },
                {
                    id: 2,
                    title: "Services",
                    details: "UI Design & Frontend Development",
                },
                { id: 3, title: "Website", details: "https://hestim.com" },
                { id: 4, title: "Phone", details: "+33 1 23 45 67 89" },
            ],
            objectivesHeading: "Objective",
            objectivesDetails:
                "Créer une application web de planification efficace avec une interface intuitive pour gérer les tâches et projets au quotidien.",
            technologies: [
                {
                    title: "Tools & Technologies",
                    techs: [
                        "React",
                        "JavaScript",
                        "TailwindCSS",
                        "Node.js",
                        "MongoDB",
                        "AdobeXD",
                    ],
                },
            ],
            projectDetailsHeading: "Challenge",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Le défi principal était de créer une interface utilisateur fluide et intuitive pour gérer plusieurs projets en parallèle.",
                },
                {
                    id: 2,
                    details:
                        "Optimiser les performances de l'application pour gérer des milliers de tâches sans ralentissement.",
                },
            ],
            socialSharingHeading: "Share This",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "Instagram",
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
                {
                    id: 4,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 5,
                    name: "Youtube",
                    icon: <FiYoutube />,
                    url: "https://youtube.com",
                },
            ],
        },
        relatedProjects: {
            title: "Related Projects",
            projects: [
                { id: 2, title: "Phoenix Digital Agency", img: MobileImage2 },
                { id: 4, title: "Cloud Storage Platform", img: UIImage2 },
                { id: 6, title: "Apple Design System", img: WebImage1 },
            ],
        },
    },
    {
        id: 2,
        title: "Phoenix Digital Agency",
        category: "Application mobile",
        img: MobileImage2,
        publishDate: "Avril 15, 2026",
        tags: "UI / Mobile / Design",
        header: {
            title: "Phoenix Digital Agency",
            publishDate: "Avril 15, 2026",
            tags: "UI / Mobile / Design",
        },
        gallery: [
            { id: 1, title: "Phoenix Mobile App", img: MobileImage2 },
            { id: 2, title: "Phoenix Dashboard", img: WebImage2 },
            { id: 3, title: "Phoenix UI Components", img: UIImage1 },
        ],
        info: {
            clientHeading: "About Client",
            companyInfo: [
                { id: 1, title: "Name", details: "Phoenix Digital" },
                {
                    id: 2,
                    title: "Services",
                    details: "Mobile App Development & Digital Solutions",
                },
                {
                    id: 3,
                    title: "Website",
                    details: "https://phoenixdigital.com",
                },
                { id: 4, title: "Phone", details: "+33 2 34 56 78 90" },
            ],
            objectivesHeading: "Objective",
            objectivesDetails:
                "Développer une application mobile complète pour gérer les services d'une agence digitale avec un système de réservation intégré.",
            technologies: [
                {
                    title: "Tools & Technologies",
                    techs: [
                        "React Native",
                        "Firebase",
                        "Redux",
                        "UI Kit",
                        "Figma",
                    ],
                },
            ],
            projectDetailsHeading: "Challenge",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Adapter le design pour fonctionner parfaitement sur iOS et Android avec une expérience utilisateur cohérente.",
                },
                {
                    id: 2,
                    details:
                        "Implémenter un système de notifications en temps réel pour les réservations et mises à jour.",
                },
            ],
            socialSharingHeading: "Share This",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "Instagram",
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
                {
                    id: 4,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 5,
                    name: "Youtube",
                    icon: <FiYoutube />,
                    url: "https://youtube.com",
                },
            ],
        },
        relatedProjects: {
            title: "Related Projects",
            projects: [
                { id: 1, title: "Hestim Planner", img: WebImage2 },
                { id: 3, title: "Project Management UI", img: UIImage1 },
                { id: 5, title: "React Social App", img: MobileImage1 },
            ],
        },
    },
    {
        id: 3,
        title: "Project Management UI",
        category: "UI/UX Design",
        img: UIImage1,
        publishDate: "Mars 20, 2026",
        tags: "UI Design / UX Research",
        header: {
            title: "Project Management UI",
            publishDate: "Mars 20, 2026",
            tags: "UI Design / UX Research",
        },
        gallery: [
            { id: 1, title: "Project Management UI Design", img: UIImage1 },
            { id: 2, title: "Dashboard Components", img: WebImage1 },
            { id: 3, title: "Mobile UI Mockups", img: MobileImage1 },
        ],
        info: {
            clientHeading: "About Client",
            companyInfo: [
                { id: 1, title: "Name", details: "Design Studio Co." },
                {
                    id: 2,
                    title: "Services",
                    details: "UI/UX Design & Design Systems",
                },
                {
                    id: 3,
                    title: "Website",
                    details: "https://designstudio.com",
                },
                { id: 4, title: "Phone", details: "+33 3 45 67 89 01" },
            ],
            objectivesHeading: "Objective",
            objectivesDetails:
                "Concevoir une interface de gestion de projets moderne et conviviale avec une excellente expérience utilisateur.",
            technologies: [
                {
                    title: "Tools & Technologies",
                    techs: [
                        "Figma",
                        "Adobe XD",
                        "Prototype.js",
                        "Design Systems",
                        "CSS3",
                    ],
                },
            ],
            projectDetailsHeading: "Challenge",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Créer un design système cohérent qui peut être implémenté sur plusieurs plateformes.",
                },
                {
                    id: 2,
                    details:
                        "Simplifier les workflows complexes des gestionnaires de projet dans une interface intuitive.",
                },
            ],
            socialSharingHeading: "Share This",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "Instagram",
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
                {
                    id: 4,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 5,
                    name: "Youtube",
                    icon: <FiYoutube />,
                    url: "https://youtube.com",
                },
            ],
        },
        relatedProjects: {
            title: "Related Projects",
            projects: [
                { id: 4, title: "Cloud Storage Platform", img: UIImage2 },
                { id: 1, title: "Hestim Planner", img: WebImage2 },
                { id: 2, title: "Phoenix Digital Agency", img: MobileImage2 },
            ],
        },
    },
    {
        id: 4,
        title: "Cloud Storage Platform",
        category: "UI/UX Design",
        img: UIImage2,
        publishDate: "Février 25, 2026",
        tags: "UI / UX / Cloud Services",
        header: {
            title: "Cloud Storage Platform",
            publishDate: "Février 25, 2026",
            tags: "UI / UX / Cloud Services",
        },
        gallery: [
            { id: 1, title: "Cloud Storage UI", img: UIImage2 },
            { id: 2, title: "File Management System", img: WebImage2 },
            { id: 3, title: "Mobile Cloud App", img: MobileImage1 },
        ],
        info: {
            clientHeading: "About Client",
            companyInfo: [
                { id: 1, title: "Name", details: "CloudTech Inc." },
                {
                    id: 2,
                    title: "Services",
                    details: "Cloud Infrastructure & UI Design",
                },
                { id: 3, title: "Website", details: "https://cloudtech.com" },
                { id: 4, title: "Phone", details: "+33 4 56 78 90 12" },
            ],
            objectivesHeading: "Objective",
            objectivesDetails:
                "Développer une plateforme de stockage en cloud sécurisée avec une interface utilisateur intuitive et performante.",
            technologies: [
                {
                    title: "Tools & Technologies",
                    techs: [
                        "React",
                        "AWS S3",
                        "Node.js",
                        "PostgreSQL",
                        "Stripe",
                        "Figma",
                    ],
                },
            ],
            projectDetailsHeading: "Challenge",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Implémenter un système de sécurité robuste tout en gardant l'interface simple et accessible.",
                },
                {
                    id: 2,
                    details:
                        "Gérer efficacement les transferts de fichiers volumineux avec une barre de progression en temps réel.",
                },
            ],
            socialSharingHeading: "Share This",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "Instagram",
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
                {
                    id: 4,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 5,
                    name: "Youtube",
                    icon: <FiYoutube />,
                    url: "https://youtube.com",
                },
            ],
        },
        relatedProjects: {
            title: "Related Projects",
            projects: [
                { id: 3, title: "Project Management UI", img: UIImage1 },
                { id: 5, title: "React Social App", img: MobileImage1 },
                { id: 6, title: "Apple Design System", img: WebImage1 },
            ],
        },
    },
    {
        id: 5,
        title: "React Social App",
        category: "Application mobile",
        img: MobileImage1,
        publishDate: "Janvier 30, 2026",
        tags: "React / Mobile / Social Network",
        header: {
            title: "React Social App",
            publishDate: "Janvier 30, 2026",
            tags: "React / Mobile / Social Network",
        },
        gallery: [
            { id: 1, title: "Social App UI", img: MobileImage1 },
            { id: 2, title: "Feed Section", img: WebImage1 },
            { id: 3, title: "User Profile", img: UIImage2 },
        ],
        info: {
            clientHeading: "About Client",
            companyInfo: [
                { id: 1, title: "Name", details: "SocialHub Networks" },
                {
                    id: 2,
                    title: "Services",
                    details: "Social Media Platform Development",
                },
                { id: 3, title: "Website", details: "https://socialhub.com" },
                { id: 4, title: "Phone", details: "+33 5 67 89 01 23" },
            ],
            objectivesHeading: "Objective",
            objectivesDetails:
                "Créer une application sociale moderne qui permet aux utilisateurs de se connecter, partager et collaborer en temps réel.",
            technologies: [
                {
                    title: "Tools & Technologies",
                    techs: [
                        "React",
                        "React Native",
                        "Firebase",
                        "Redux",
                        "Socket.io",
                        "Figma",
                    ],
                },
            ],
            projectDetailsHeading: "Challenge",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Implémenter un système de notifications en très forte charge avec des milliers d'utilisateurs simultanés.",
                },
                {
                    id: 2,
                    details:
                        "Créer des mécanismes de recommandation intelligents pour améliorer l'engagement.",
                },
            ],
            socialSharingHeading: "Share This",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "Instagram",
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
                {
                    id: 4,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 5,
                    name: "Youtube",
                    icon: <FiYoutube />,
                    url: "https://youtube.com",
                },
            ],
        },
        relatedProjects: {
            title: "Related Projects",
            projects: [
                { id: 2, title: "Phoenix Digital Agency", img: MobileImage2 },
                { id: 4, title: "Cloud Storage Platform", img: UIImage2 },
                { id: 1, title: "Hestim Planner", img: WebImage2 },
            ],
        },
    },
    {
        id: 6,
        title: "Apple Design System",
        category: "Web application",
        img: WebImage1,
        publishDate: "Décembre 12, 2025",
        tags: "Design System / Web / Frontend",
        header: {
            title: "Apple Design System",
            publishDate: "Décembre 12, 2025",
            tags: "Design System / Web / Frontend",
        },
        gallery: [
            { id: 1, title: "Apple Design System", img: WebImage1 },
            { id: 2, title: "Component Library", img: WebImage2 },
            { id: 3, title: "Design Guidelines", img: UIImage1 },
        ],
        info: {
            clientHeading: "About Client",
            companyInfo: [
                { id: 1, title: "Name", details: "Apple Design Co." },
                {
                    id: 2,
                    title: "Services",
                    details: "Design Systems & Branding",
                },
                {
                    id: 3,
                    title: "Website",
                    details: "https://apple-design.com",
                },
                { id: 4, title: "Phone", details: "+33 6 78 90 12 34" },
            ],
            objectivesHeading: "Objective",
            objectivesDetails:
                "Créer un système de design complet inspiré de la philosophie Apple pour assurer la cohérence visuelle sur tous les produits.",
            technologies: [
                {
                    title: "Tools & Technologies",
                    techs: [
                        "Figma",
                        "Storybook",
                        "React Components",
                        "CSS-in-JS",
                        "Design Tokens",
                    ],
                },
            ],
            projectDetailsHeading: "Challenge",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Maintenir la cohérence visuelle tout en permettant la flexibilité pour différentes applications.",
                },
                {
                    id: 2,
                    details:
                        "Documenter le système de design de manière à ce qu'il soit facile à maintenir et à étendre.",
                },
            ],
            socialSharingHeading: "Share This",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "Instagram",
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
                {
                    id: 4,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 5,
                    name: "Youtube",
                    icon: <FiYoutube />,
                    url: "https://youtube.com",
                },
            ],
        },
        relatedProjects: {
            title: "Related Projects",
            projects: [
                { id: 1, title: "Hestim Planner", img: WebImage2 },
                { id: 3, title: "Project Management UI", img: UIImage1 },
                { id: 4, title: "Cloud Storage Platform", img: UIImage2 },
            ],
        },
    },
];
