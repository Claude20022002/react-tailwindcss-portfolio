// Import images
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";
import WebImage1 from "../images/web-project-1.jpg";
import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";
// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from "react-icons/fi";

export const certificatesData = [
    {
        id: 1,
        title: "React Native",
        category: "Mobile",
        date: "Janvier 2026",
        issuer: "Meta",
        img: MobileImage1,
        credentialId: "À COMPLÉTER",
        description:
            "Certification en développement mobile avec React Native, délivrée par Meta via Coursera.",
        header: {
            title: "React Native",
            date: "Janvier 2026",
            issuer: "Meta",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "Meta" },
                { id: 2, title: "Date d'obtention", details: "Janvier 2026" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "SOAFZCPD8P1O",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/SOAFZCPD8P1O",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "React Native, Développement mobile cross-platform, Navigation, Gestion d'état, APIs natives, UI/UX mobile, Expo",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "React Native",
                        "Expo",
                        "JavaScript",
                        "Navigation",
                        "APIs mobiles",
                        "StyleSheet",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification délivrée par Meta valide la capacité à concevoir et développer des applications mobiles performantes pour iOS et Android à partir d'une seule base de code React Native.",
                },
                {
                    id: 2,
                    details:
                        "Le programme couvre la navigation entre écrans, la gestion de l'état local et global, l'intégration d'APIs natives ainsi que les bonnes pratiques de développement mobile cross-platform.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                { id: 5, title: "React Avancé", date: "Avril 2025" },
                { id: 8, title: "Bases de React", date: "Novembre 2024" },
                {
                    id: 6,
                    title: "Fondations de la programmation avec JavaScript, HTML et CSS",
                    date: "Février 2025",
                },
            ],
        },
    },
    {
        id: 2,
        title: "Plate-forme de bases de données Oracle",
        category: "Backend",
        date: "Janvier 2026",
        issuer: "LearnQuest",
        img: WebImage1,
        credentialId: "À COMPLÉTER",
        description:
            "Certification sur la plateforme de bases de données Oracle, couvrant l'administration et la gestion de données.",
        header: {
            title: "Plate-forme de bases de données Oracle",
            date: "Janvier 2026",
            issuer: "LearnQuest",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "LearnQuest" },
                { id: 2, title: "Date d'obtention", details: "Janvier 2026" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "II31E6A2MD6S",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/II31E6A2MD6S",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "Oracle Database, SQL, PL/SQL, Administration de bases de données, Optimisation des requêtes, Gestion des utilisateurs, Sauvegardes",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "Oracle DB",
                        "SQL",
                        "PL/SQL",
                        "Oracle SQL Developer",
                        "Administration BDD",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification proposée par LearnQuest couvre les fondamentaux et les fonctionnalités avancées de la plateforme Oracle Database, l'un des systèmes de gestion de bases de données les plus utilisés en entreprise.",
                },
                {
                    id: 2,
                    details:
                        "Le programme aborde l'architecture Oracle, la rédaction de requêtes SQL et PL/SQL complexes, l'administration système, ainsi que les stratégies de sauvegarde et de récupération des données.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
                {
                    id: 4,
                    name: "Instagram",
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 9,
                    title: "Le langage SQL (Structured Query Language)",
                    date: "Juin 2024",
                },
                {
                    id: 11,
                    title: "Conception de bases de données relationnelles",
                    date: "Avril 2024",
                },
                {
                    id: 4,
                    title: "Développement d'applications backend avec Node.js et Express",
                    date: "Avril 2025",
                },
            ],
        },
    },
    {
        id: 3,
        title: "Fondamentaux du Project Management",
        category: "Management",
        date: "Janvier 2026",
        issuer: "Google",
        img: UIImage1,
        credentialId: "À COMPLÉTER",
        description:
            "Certification aux fondamentaux de la gestion de projet, délivrée par Google via Coursera.",
        header: {
            title: "Fondamentaux du Project Management",
            date: "Janvier 2026",
            issuer: "Google",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "Google" },
                { id: 2, title: "Date d'obtention", details: "Janvier 2026" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "NUNGT5BNGOOR",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/NUNGT5BNGOOR",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "Gestion de projet, Planification, Agile, Scrum, Gestion des risques, Communication d'équipe, Suivi budgétaire",
            technologies: [
                {
                    title: "Compétences enseignées",
                    techs: [
                        "Agile",
                        "Scrum",
                        "Gestion des risques",
                        "Planification de projet",
                        "Google Workspace",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification délivrée par Google couvre les bases indispensables à toute gestion de projet efficace : initiation, planification, exécution, suivi et clôture.",
                },
                {
                    id: 2,
                    details:
                        "Le programme met l'accent sur les méthodologies Agile et Scrum, la gestion des parties prenantes, la maîtrise des risques et la communication au sein des équipes projet.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                { id: 1, title: "React Native", date: "Janvier 2026" },
                {
                    id: 4,
                    title: "Développement d'applications backend avec Node.js et Express",
                    date: "Avril 2025",
                },
                {
                    id: 10,
                    title: "Travailler plus efficacement avec Microsoft Word",
                    date: "Juin 2024",
                },
            ],
        },
    },
    {
        id: 4,
        title: "Développement d'applications backend avec Node.js et Express",
        category: "Backend",
        date: "Avril 2025",
        issuer: "IBM",
        img: WebImage2,
        credentialId: "À COMPLÉTER",
        description:
            "Certification en développement backend avec Node.js et Express.js, délivrée par IBM.",
        header: {
            title: "Développement d'applications backend avec Node.js et Express",
            date: "Avril 2025",
            issuer: "IBM",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "IBM" },
                { id: 2, title: "Date d'obtention", details: "Avril 2025" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "UXILGX90HY98",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/UXILGX90HY98",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "Node.js, Express.js, API REST, Middleware, Authentification, Gestion des erreurs, MongoDB, Déploiement",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "Node.js",
                        "Express.js",
                        "REST APIs",
                        "MongoDB",
                        "JWT",
                        "Middleware",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification d'IBM valide les compétences en développement côté serveur avec Node.js et Express.js, deux technologies incontournables pour la création d'applications web modernes.",
                },
                {
                    id: 2,
                    details:
                        "Le programme enseigne la conception d'APIs REST robustes, la gestion des middlewares, la sécurisation des routes avec authentification JWT, ainsi que l'intégration avec des bases de données NoSQL.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 2,
                    title: "Plate-forme de bases de données Oracle",
                    date: "Janvier 2026",
                },
                {
                    id: 9,
                    title: "Le langage SQL (Structured Query Language)",
                    date: "Juin 2024",
                },
                { id: 5, title: "React Avancé", date: "Avril 2025" },
            ],
        },
    },
    {
        id: 5,
        title: "React Avancé",
        category: "Frontend",
        date: "Avril 2025",
        issuer: "Meta",
        img: MobileImage2,
        credentialId: "À COMPLÉTER",
        description:
            "Certification en React avancé couvrant les hooks, le contexte et les patterns de performance, délivrée par Meta.",
        header: {
            title: "React Avancé",
            date: "Avril 2025",
            issuer: "Meta",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "Meta" },
                { id: 2, title: "Date d'obtention", details: "Avril 2025" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "GGJ2HCDN3DI9",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/GGJ2HCDN3DI9",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "React avancé, Hooks personnalisés, Context API, Performance, Lazy Loading, Suspense, Testing, Accessibilité",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "React",
                        "Hooks avancés",
                        "Context API",
                        "React Testing Library",
                        "Performance Optimization",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification avancée de Meta approfondit la maîtrise de React en abordant des patterns complexes tels que les hooks personnalisés, le Context API et les stratégies d'optimisation des performances.",
                },
                {
                    id: 2,
                    details:
                        "Le programme inclut également les tests unitaires et d'intégration avec React Testing Library, le chargement différé des composants et les meilleures pratiques d'accessibilité dans les applications React.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                { id: 8, title: "Bases de React", date: "Novembre 2024" },
                { id: 1, title: "React Native", date: "Janvier 2026" },
                {
                    id: 6,
                    title: "Fondations de la programmation avec JavaScript, HTML et CSS",
                    date: "Février 2025",
                },
            ],
        },
    },
    {
        id: 6,
        title: "Fondations de la programmation avec JavaScript, HTML et CSS",
        category: "Frontend",
        date: "Février 2025",
        issuer: "Duke University",
        img: WebImage1,
        credentialId: "À COMPLÉTER",
        description:
            "Certification aux fondations du développement web avec JavaScript, HTML et CSS, délivrée par Duke University.",
        header: {
            title: "Fondations de la programmation avec JavaScript, HTML et CSS",
            date: "Février 2025",
            issuer: "Duke University",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "Duke University" },
                { id: 2, title: "Date d'obtention", details: "Février 2025" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "VBS44JTKDXP8",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.orgverify/VBS44JTKDXP8",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "HTML5, CSS3, JavaScript, DOM Manipulation, Programmation orientée objet, Responsive Design, Debugging",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "DOM API",
                        "Responsive Design",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification de Duke University pose les bases solides du développement web en couvrant les trois langages essentiels du front-end : HTML pour la structure, CSS pour la mise en forme, et JavaScript pour l'interactivité.",
                },
                {
                    id: 2,
                    details:
                        "Le programme s'appuie sur une approche pratique, permettant aux apprenants de construire des pages web dynamiques et responsives en appliquant les concepts de programmation fondamentaux.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 13,
                    title: "Introduction au développement web",
                    date: "Novembre 2023",
                },
                { id: 8, title: "Bases de React", date: "Novembre 2024" },
                {
                    id: 12,
                    title: "Introduction à la programmation Python",
                    date: "Janvier 2024",
                },
            ],
        },
    },
    {
        id: 7,
        title: "Introduction à Java",
        category: "Backend",
        date: "Décembre 2024",
        issuer: "LearnQuest",
        img: UIImage2,
        credentialId: "À COMPLÉTER",
        description:
            "Certification d'introduction au langage Java, couvrant la programmation orientée objet et les fondamentaux du langage.",
        header: {
            title: "Introduction à Java",
            date: "Décembre 2024",
            issuer: "LearnQuest",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "LearnQuest" },
                { id: 2, title: "Date d'obtention", details: "Décembre 2024" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "6QNW54YBXOJC",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/6QNW54YBXOJC",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "Java, Programmation orientée objet, Classes et objets, Héritage, Polymorphisme, Collections, Gestion des exceptions",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "Java",
                        "POO",
                        "JDK",
                        "Collections Framework",
                        "IntelliJ IDEA",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification de LearnQuest introduit le langage Java et les principes fondamentaux de la programmation orientée objet, base indispensable pour développer des applications robustes et maintenables.",
                },
                {
                    id: 2,
                    details:
                        "Le programme couvre les notions de classes, d'héritage, de polymorphisme, de gestion des exceptions et l'utilisation des Collections Framework pour la manipulation efficace des données.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 12,
                    title: "Introduction à la programmation Python",
                    date: "Janvier 2024",
                },
                {
                    id: 4,
                    title: "Développement d'applications backend avec Node.js et Express",
                    date: "Avril 2025",
                },
                {
                    id: 9,
                    title: "Le langage SQL (Structured Query Language)",
                    date: "Juin 2024",
                },
            ],
        },
    },
    {
        id: 8,
        title: "Bases de React",
        category: "Frontend",
        date: "Novembre 2024",
        issuer: "Meta",
        img: WebImage2,
        credentialId: "À COMPLÉTER",
        description:
            "Certification aux bases de React.js, couvrant les composants, les props et les états, délivrée par Meta.",
        header: {
            title: "Bases de React",
            date: "Novembre 2024",
            issuer: "Meta",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "Meta" },
                { id: 2, title: "Date d'obtention", details: "Novembre 2024" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "FKORR1KWALTO",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/FKORR1KWALTO",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "React.js, JSX, Composants fonctionnels, Props, State, Hooks de base (useState, useEffect), Rendu conditionnel, Listes",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "React",
                        "JSX",
                        "useState",
                        "useEffect",
                        "npm",
                        "Vite",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification de Meta constitue une introduction complète à React.js, la bibliothèque JavaScript créée par Meta pour construire des interfaces utilisateur modernes et réactives.",
                },
                {
                    id: 2,
                    details:
                        "Le programme aborde les fondamentaux : JSX, composants fonctionnels, gestion du state avec useState, effets de bord avec useEffect, rendu conditionnel et affichage de listes dynamiques.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                { id: 5, title: "React Avancé", date: "Avril 2025" },
                { id: 1, title: "React Native", date: "Janvier 2026" },
                {
                    id: 6,
                    title: "Fondations de la programmation avec JavaScript, HTML et CSS",
                    date: "Février 2025",
                },
            ],
        },
    },
    {
        id: 9,
        title: "Le langage SQL (Structured Query Language)",
        category: "Backend",
        date: "Juin 2024",
        issuer: "University of Colorado Boulder",
        img: UIImage1,
        credentialId: "À COMPLÉTER",
        description:
            "Certification en SQL couvrant les requêtes, les jointures et la manipulation de données relationnelles.",
        header: {
            title: "Le langage SQL (Structured Query Language)",
            date: "Juin 2024",
            issuer: "University of Colorado Boulder",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                {
                    id: 1,
                    title: "Organisme",
                    details: "University of Colorado Boulder",
                },
                { id: 2, title: "Date d'obtention", details: "Juin 2024" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "NPBXUC3ET3QA",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/NPBXUC3ET3QA",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "SQL, SELECT, INSERT, UPDATE, DELETE, Jointures, Sous-requêtes, Agrégations, Indexation, Transactions",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "SQL",
                        "MySQL",
                        "PostgreSQL",
                        "Jointures",
                        "Transactions",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification de l'Université du Colorado Boulder valide la maîtrise du langage SQL, outil fondamental pour interagir avec les bases de données relationnelles dans tout environnement professionnel.",
                },
                {
                    id: 2,
                    details:
                        "Le programme couvre l'écriture de requêtes complexes incluant les jointures multiples, les sous-requêtes imbriquées, les fonctions d'agrégation et la gestion des transactions pour garantir l'intégrité des données.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 11,
                    title: "Conception de bases de données relationnelles",
                    date: "Avril 2024",
                },
                {
                    id: 2,
                    title: "Plate-forme de bases de données Oracle",
                    date: "Janvier 2026",
                },
                {
                    id: 4,
                    title: "Développement d'applications backend avec Node.js et Express",
                    date: "Avril 2025",
                },
            ],
        },
    },
    {
        id: 10,
        title: "Travailler plus efficacement avec Microsoft Word",
        category: "Productivité",
        date: "Juin 2024",
        issuer: "Microsoft",
        img: UIImage2,
        credentialId: "À COMPLÉTER",
        description:
            "Certification Microsoft sur l'utilisation avancée de Word pour gagner en productivité dans un contexte professionnel.",
        header: {
            title: "Travailler plus efficacement avec Microsoft Word",
            date: "Juin 2024",
            issuer: "Microsoft",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                { id: 1, title: "Organisme", details: "Microsoft" },
                { id: 2, title: "Date d'obtention", details: "Juin 2024" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "UVLT352BQP7Z",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/UVLT352BQP7Z",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "Microsoft Word, Mise en forme avancée, Styles, Modèles, Publipostage, Table des matières automatique, Collaboration, Révisions",
            technologies: [
                {
                    title: "Outils enseignés",
                    techs: [
                        "Microsoft Word",
                        "Microsoft 365",
                        "Styles et modèles",
                        "Publipostage",
                        "Collaboration en ligne",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification délivrée par Microsoft apprend à exploiter tout le potentiel de Word pour créer des documents professionnels structurés, bien mis en forme et faciles à maintenir.",
                },
                {
                    id: 2,
                    details:
                        "Le programme couvre les styles et modèles, la génération automatique de tables des matières, le publipostage, les outils de collaboration et de révision, ainsi que les fonctionnalités avancées de mise en page.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 3,
                    title: "Fondamentaux du Project Management",
                    date: "Janvier 2026",
                },
                {
                    id: 11,
                    title: "Conception de bases de données relationnelles",
                    date: "Avril 2024",
                },
                {
                    id: 13,
                    title: "Introduction au développement web",
                    date: "Novembre 2023",
                },
            ],
        },
    },
    {
        id: 11,
        title: "Conception de bases de données relationnelles",
        category: "Backend",
        date: "Avril 2024",
        issuer: "University of Colorado Boulder",
        img: WebImage1,
        credentialId: "À COMPLÉTER",
        description:
            "Certification en conception et modélisation de bases de données relationnelles, délivrée par l'Université du Colorado Boulder.",
        header: {
            title: "Conception de bases de données relationnelles",
            date: "Avril 2024",
            issuer: "University of Colorado Boulder",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                {
                    id: 1,
                    title: "Organisme",
                    details: "University of Colorado Boulder",
                },
                { id: 2, title: "Date d'obtention", details: "Avril 2024" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "Y85DL7T4PRZA",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/Y85DL7T4PRZA",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "Modélisation de données, Diagrammes Entité-Association, Normalisation, Schémas relationnels, Intégrité référentielle, Clés primaires et étrangères",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "SQL",
                        "Modélisation EA",
                        "Normalisation",
                        "MySQL",
                        "Schémas relationnels",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification de l'Université du Colorado Boulder enseigne les principes de conception de bases de données relationnelles efficaces, depuis la modélisation conceptuelle jusqu'à l'implémentation physique.",
                },
                {
                    id: 2,
                    details:
                        "Le programme aborde la création de diagrammes Entité-Association, les règles de normalisation (1NF à 3NF), la gestion de l'intégrité référentielle et la traduction des modèles en schémas SQL opérationnels.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 9,
                    title: "Le langage SQL (Structured Query Language)",
                    date: "Juin 2024",
                },
                {
                    id: 2,
                    title: "Plate-forme de bases de données Oracle",
                    date: "Janvier 2026",
                },
                {
                    id: 4,
                    title: "Développement d'applications backend avec Node.js et Express",
                    date: "Avril 2025",
                },
            ],
        },
    },
    {
        id: 12,
        title: "Introduction à la programmation Python",
        category: "Backend",
        date: "Janvier 2024",
        issuer: "University of Pennsylvania",
        img: MobileImage1,
        credentialId: "À COMPLÉTER",
        description:
            "Certification d'introduction à la programmation Python, délivrée par l'Université de Pennsylvanie.",
        header: {
            title: "Introduction à la programmation Python",
            date: "Janvier 2024",
            issuer: "University of Pennsylvania",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                {
                    id: 1,
                    title: "Organisme",
                    details: "University of Pennsylvania",
                },
                { id: 2, title: "Date d'obtention", details: "Janvier 2024" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "WA2KHDW9XHWB",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/WA2KHDW9XHWB",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "Python, Variables, Boucles, Fonctions, Listes, Dictionnaires, Manipulation de fichiers, Modules, Programmation orientée objet",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "Python 3",
                        "Jupyter Notebook",
                        "Bibliothèques standard",
                        "POO",
                        "pip",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification de l'Université de Pennsylvanie offre une introduction structurée à Python, l'un des langages de programmation les plus polyvalents et populaires pour le développement, l'analyse de données et l'automatisation.",
                },
                {
                    id: 2,
                    details:
                        "Le programme couvre les bases du langage : syntaxe, structures de contrôle, fonctions, manipulation des collections et des fichiers, ainsi qu'une introduction aux principes de la programmation orientée objet en Python.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                { id: 7, title: "Introduction à Java", date: "Décembre 2024" },
                {
                    id: 6,
                    title: "Fondations de la programmation avec JavaScript, HTML et CSS",
                    date: "Février 2025",
                },
                {
                    id: 13,
                    title: "Introduction au développement web",
                    date: "Novembre 2023",
                },
            ],
        },
    },
    {
        id: 13,
        title: "Introduction au développement web",
        category: "Frontend",
        date: "Novembre 2023",
        issuer: "University of California, Davis",
        img: MobileImage2,
        credentialId: "À COMPLÉTER",
        description:
            "Certification d'introduction au développement web, délivrée par l'Université de Californie, Davis.",
        header: {
            title: "Introduction au développement web",
            date: "Novembre 2023",
            issuer: "University of California, Davis",
        },
        info: {
            issuedHeading: "Détails de la certification",
            issuerInfo: [
                {
                    id: 1,
                    title: "Organisme",
                    details: "University of California, Davis",
                },
                { id: 2, title: "Date d'obtention", details: "Novembre 2023" },
                {
                    id: 3,
                    title: "Numéro de certificat",
                    details: "D2SKFE467CGM",
                },
                {
                    id: 4,
                    title: "Voir la certification",
                    details: "https://coursera.org/verify/D2SKFE467CGM",
                },
            ],
            skillsHeading: "Compétences obtenues",
            skillsDetails:
                "HTML, CSS, JavaScript, Notions de serveur web, Hébergement, Accessibilité web, Introduction aux frameworks front-end",
            technologies: [
                {
                    title: "Technologies enseignées",
                    techs: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Git",
                        "Hébergement web",
                    ],
                },
            ],
            certificateDetailsHeading: "À propos de la certification",
            certificateDetails: [
                {
                    id: 1,
                    details:
                        "Cette certification de l'Université de Californie, Davis constitue une porte d'entrée idéale dans le monde du développement web, en présentant les technologies et concepts clés utilisés pour créer des sites web modernes.",
                },
                {
                    id: 2,
                    details:
                        "Le programme offre une vue d'ensemble du fonctionnement du web, de la structure HTML et de la mise en forme CSS, jusqu'aux bases de JavaScript et aux notions d'hébergement et de déploiement d'un site.",
                },
            ],
            socialSharingHeading: "Partager cette certification",
            socialSharing: [
                {
                    id: 1,
                    name: "Twitter",
                    icon: <FiTwitter />,
                    url: "https://twitter.com",
                },
                {
                    id: 2,
                    name: "LinkedIn",
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                },
                {
                    id: 3,
                    name: "Facebook",
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                },
            ],
        },
        relatedCertificates: {
            title: "Certifications liées",
            certificates: [
                {
                    id: 6,
                    title: "Fondations de la programmation avec JavaScript, HTML et CSS",
                    date: "Février 2025",
                },
                {
                    id: 12,
                    title: "Introduction à la programmation Python",
                    date: "Janvier 2024",
                },
                { id: 8, title: "Bases de React", date: "Novembre 2024" },
            ],
        },
    },
];
