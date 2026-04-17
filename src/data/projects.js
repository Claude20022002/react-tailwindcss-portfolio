import {
    FiGithub,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
} from "react-icons/fi";

const socialSharing = [
    {
        id: 1,
        name: "GitHub",
        icon: <FiGithub />,
        url: "https://github.com/Claude20022002",
    },
    {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://www.instagram.com/claudia.lusamote?igsh=bTh2ZzE0Ymppazcz",
    },
    {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://www.facebook.com/share/1LAWsnW3oS/?mibextid=wwXIfr",
    },
    {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/claudia-lusamote-kimfuta-271b512a8",
    },
];

export const projectsData = [
    {
        id: 1,
        title: "Bibliothèque en ligne",
        category: "Application Web",
        img: "/projets/bibliothèque/page1.png",
        publishDate: "Mars 2025",
        tags: "Full-Stack / React / Node.js / MongoDB",
        header: {
            title: "Bibliothèque en ligne",
            publishDate: "Mars 2025",
            tags: "Full-Stack / React / Node.js / MongoDB",
        },
        gallery: [
            {
                id: 1,
                title: "Page d'accueil",
                img: "/projets/bibliothèque/page1.png",
            },
            {
                id: 2,
                title: "Catalogue de livres",
                img: "/projets/bibliothèque/page2.png",
            },
            {
                id: 3,
                title: "Détail d'un livre",
                img: "/projets/bibliothèque/page3.png",
            },
        ],
        info: {
            clientHeading: "À propos du projet",
            companyInfo: [
                { id: 1, title: "Type", details: "Projet personnel" },
                { id: 2, title: "Rôle", details: "Développeuse Full-Stack" },
                {
                    id: 3,
                    title: "Dépôt GitHub",
                    details: "https://github.com/Claude20022002/biblioth-que",
                },
                { id: 4, title: "Statut", details: "Terminé" },
            ],
            objectivesHeading: "Objectif",
            objectivesDetails:
                "Plateforme de gestion de bibliothèque personnelle permettant de rechercher des livres via l'API Google Books, de gérer des collections et de sauvegarder ses favoris.",
            technologies: [
                {
                    title: "Technologies utilisées",
                    techs: [
                        "React JS",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "MUI",
                        "Google Books API",
                    ],
                },
            ],
            projectDetailsHeading: "Défis relevés",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Intégration de l'API Google Books avec gestion de la pagination et mise en cache des résultats pour optimiser les performances.",
                },
                {
                    id: 2,
                    details:
                        "Conception d'un système d'authentification et de gestion des collections personnalisées par utilisateur avec MongoDB.",
                },
            ],
            socialSharingHeading: "Me retrouver sur",
            socialSharing,
        },
        relatedProjects: {
            title: "Autres projets",
            projects: [
                {
                    id: 3,
                    title: "GreenConvert",
                    img: "/projets/greenconvert/page1.png",
                },
                {
                    id: 4,
                    title: "MyAnimeList",
                    img: "/projets/myanime/page1.jpg",
                },
                {
                    id: 5,
                    title: "weatherPlan",
                    img: "/projets/weatherplan/page1.png",
                },
            ],
        },
    },
    {
        id: 2,
        title: "Formulaire Login",
        category: "UI Design",
        img: "/projets/formulaire/page1.jpg",
        publishDate: "Novembre 2023",
        tags: "HTML / CSS / Interface",
        header: {
            title: "Formulaire Login",
            publishDate: "Novembre 2023",
            tags: "HTML / CSS / Interface",
        },
        gallery: [
            {
                id: 1,
                title: "Interface de connexion",
                img: "/projets/formulaire/page1.jpg",
            },
        ],
        info: {
            clientHeading: "À propos du projet",
            companyInfo: [
                { id: 1, title: "Type", details: "Projet personnel" },
                { id: 2, title: "Rôle", details: "Développeuse Frontend" },
                {
                    id: 3,
                    title: "Dépôt GitHub",
                    details:
                        "https://github.com/Claude20022002/formulaire_HTML",
                },
                { id: 4, title: "Statut", details: "Terminé" },
            ],
            objectivesHeading: "Objectif",
            objectivesDetails:
                "Conception d'une interface de connexion moderne et responsive avec validation des champs côté client, animations CSS et design épuré.",
            technologies: [
                {
                    title: "Technologies utilisées",
                    techs: ["HTML5", "CSS3"],
                },
            ],
            projectDetailsHeading: "Défis relevés",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Créer un design attrayant et entièrement responsive sans l'aide de frameworks CSS, en utilisant uniquement du CSS pur.",
                },
                {
                    id: 2,
                    details:
                        "Implémenter des animations et transitions fluides pour améliorer l'expérience utilisateur lors de la saisie des champs.",
                },
            ],
            socialSharingHeading: "Me retrouver sur",
            socialSharing,
        },
        relatedProjects: {
            title: "Autres projets",
            projects: [
                {
                    id: 1,
                    title: "Bibliothèque en ligne",
                    img: "/projets/bibliothèque/page1.png",
                },
                {
                    id: 5,
                    title: "weatherPlan",
                    img: "/projets/weatherplan/page1.png",
                },
                {
                    id: 3,
                    title: "GreenConvert",
                    img: "/projets/greenconvert/page1.png",
                },
            ],
        },
    },
    {
        id: 3,
        title: "GreenConvert",
        category: "Application Web",
        img: "/projets/greenconvert/page1.png",
        publishDate: "Janvier 2025",
        tags: "Full-Stack / React / Node.js / MySQL / API",
        header: {
            title: "GreenConvert",
            publishDate: "Janvier 2025",
            tags: "Full-Stack / React / Node.js / MySQL / API",
        },
        gallery: [
            {
                id: 1,
                title: "Page d'accueil",
                img: "/projets/greenconvert/page1.png",
            },
            {
                id: 2,
                title: "Recherche de plantes",
                img: "/projets/greenconvert/page2.png",
            },
            {
                id: 3,
                title: "Fiche détaillée",
                img: "/projets/greenconvert/page3.png",
            },
        ],
        info: {
            clientHeading: "À propos du projet",
            companyInfo: [
                { id: 1, title: "Type", details: "Projet personnel" },
                { id: 2, title: "Rôle", details: "Développeuse Full-Stack" },
                {
                    id: 3,
                    title: "Dépôt GitHub",
                    details: "https://github.com/Claude20022002/GreenConvert",
                },
                { id: 4, title: "Statut", details: "Terminé" },
            ],
            objectivesHeading: "Objectif",
            objectivesDetails:
                "Application web dédiée aux plantes, intégrant deux APIs botaniques (Perenual et Trefle) pour fournir des informations détaillées sur les espèces végétales, leur entretien et leur identification.",
            technologies: [
                {
                    title: "Technologies utilisées",
                    techs: [
                        "React JS",
                        "Node.js",
                        "MySQL",
                        "Express",
                        "MUI",
                        "CSS",
                        "PhpMyAdmin",
                        "WampServer",
                        "Perenual API",
                        "Trefle API",
                    ],
                },
            ],
            projectDetailsHeading: "Défis relevés",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Orchestration de deux APIs externes avec des structures de données différentes, nécessitant une couche de normalisation robuste côté serveur.",
                },
                {
                    id: 2,
                    details:
                        "Mise en place d'une base de données relationnelle MySQL pour persister les données utilisateurs et les plantes favorites avec des relations complexes.",
                },
            ],
            socialSharingHeading: "Me retrouver sur",
            socialSharing,
        },
        relatedProjects: {
            title: "Autres projets",
            projects: [
                {
                    id: 1,
                    title: "Bibliothèque en ligne",
                    img: "/projets/bibliothèque/page1.png",
                },
                {
                    id: 4,
                    title: "MyAnimeList",
                    img: "/projets/myanime/page1.jpg",
                },
                {
                    id: 5,
                    title: "weatherPlan",
                    img: "/projets/weatherplan/page1.png",
                },
            ],
        },
    },
    {
        id: 4,
        title: "MyAnimeList",
        category: "Application Web",
        img: "/projets/myanime/page1.jpg",
        publishDate: "Février 2025",
        tags: "Full-Stack / React / Node.js / MongoDB / API",
        header: {
            title: "MyAnimeList",
            publishDate: "Février 2025",
            tags: "Full-Stack / React / Node.js / MongoDB / API",
        },
        gallery: [
            {
                id: 1,
                title: "Catalogue d'animes",
                img: "/projets/myanime/page1.jpg",
            },
            {
                id: 2,
                title: "Page d'un anime",
                img: "/projets/myanime/page2.jpg",
            },
            {
                id: 3,
                title: "Ma liste personnelle",
                img: "/projets/myanime/page3.jpg",
            },
        ],
        info: {
            clientHeading: "À propos du projet",
            companyInfo: [
                { id: 1, title: "Type", details: "Projet personnel" },
                { id: 2, title: "Rôle", details: "Développeuse Full-Stack" },
                {
                    id: 3,
                    title: "Dépôt GitHub",
                    details: "https://github.com/Claude20022002/MyAnime",
                },
                { id: 4, title: "Statut", details: "Terminé" },
            ],
            objectivesHeading: "Objectif",
            objectivesDetails:
                "Plateforme de suivi d'animes personnalisée permettant aux utilisateurs de gérer leur liste de visionnage, noter les séries et découvrir de nouveaux contenus grâce à l'API Jikan.",
            technologies: [
                {
                    title: "Technologies utilisées",
                    techs: [
                        "React JS",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "MUI",
                        "CSS",
                        "Axios",
                        "Jikan API",
                    ],
                },
            ],
            projectDetailsHeading: "Défis relevés",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Gestion des appels à l'API Jikan avec rate limiting et mise en cache pour respecter les quotas et garantir une navigation fluide.",
                },
                {
                    id: 2,
                    details:
                        "Conception d'un système de listes personnalisées avec état de progression (en cours, terminé, à regarder) synchronisé en temps réel avec MongoDB.",
                },
            ],
            socialSharingHeading: "Me retrouver sur",
            socialSharing,
        },
        relatedProjects: {
            title: "Autres projets",
            projects: [
                {
                    id: 1,
                    title: "Bibliothèque en ligne",
                    img: "/projets/bibliothèque/page1.png",
                },
                {
                    id: 3,
                    title: "GreenConvert",
                    img: "/projets/greenconvert/page1.png",
                },
                {
                    id: 5,
                    title: "weatherPlan",
                    img: "/projets/weatherplan/page1.png",
                },
            ],
        },
    },
    {
        id: 5,
        title: "weatherPlan",
        category: "Application Web",
        img: "/projets/weatherplan/page1.png",
        publishDate: "Juin 2024",
        tags: "Frontend / JavaScript / API / Animations",
        header: {
            title: "weatherPlan",
            publishDate: "Juin 2024",
            tags: "Frontend / JavaScript / API / Animations",
        },
        gallery: [
            {
                id: 1,
                title: "Dashboard météo",
                img: "/projets/weatherplan/page1.png",
            },
        ],
        info: {
            clientHeading: "À propos du projet",
            companyInfo: [
                { id: 1, title: "Type", details: "Projet personnel" },
                { id: 2, title: "Rôle", details: "Développeuse Frontend" },
                {
                    id: 3,
                    title: "Dépôt GitHub",
                    details: "https://github.com/Claude20022002/weatherPlan",
                },
                { id: 4, title: "Statut", details: "Terminé" },
            ],
            objectivesHeading: "Objectif",
            objectivesDetails:
                "Application météo interactive affichant les conditions actuelles et les prévisions sur plusieurs jours via l'API OpenWeatherMap, avec des animations fluides réalisées avec Framer Motion.",
            technologies: [
                {
                    title: "Technologies utilisées",
                    techs: [
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "OpenWeatherMap API",
                        "Axios",
                        "Framer Motion",
                    ],
                },
            ],
            projectDetailsHeading: "Défis relevés",
            projectDetails: [
                {
                    id: 1,
                    details:
                        "Intégration de l'API OpenWeatherMap avec gestion des erreurs réseau et affichage conditionnel selon les conditions météorologiques.",
                },
                {
                    id: 2,
                    details:
                        "Création d'animations dynamiques avec Framer Motion pour illustrer visuellement les différentes conditions météo (soleil, pluie, neige).",
                },
            ],
            socialSharingHeading: "Me retrouver sur",
            socialSharing,
        },
        relatedProjects: {
            title: "Autres projets",
            projects: [
                {
                    id: 1,
                    title: "Bibliothèque en ligne",
                    img: "/projets/bibliothèque/page1.png",
                },
                {
                    id: 3,
                    title: "GreenConvert",
                    img: "/projets/greenconvert/page1.png",
                },
                {
                    id: 4,
                    title: "MyAnimeList",
                    img: "/projets/myanime/page1.jpg",
                },
            ],
        },
    },
];
