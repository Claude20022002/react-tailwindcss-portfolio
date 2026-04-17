import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
    useCountUp({ ref: "formationCounter", end: 2, duration: 2 });
    useCountUp({ ref: "projetsCounter", end: 5, duration: 2 });
    useCountUp({ ref: "competencesCounter", end: 20, duration: 2 });
    useCountUp({ ref: "certificatsCounter", end: 13, duration: 2 });

    return (
        <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
            <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
                <CounterItem
                    title="Années de formation"
                    counter={<span id="formationCounter" />}
                    measurement=""
                />

                <CounterItem
                    title="Projets réalisés"
                    counter={<span id="projetsCounter" />}
                    measurement=""
                />

                <CounterItem
                    title="Compétences"
                    counter={<span id="competencesCounter" />}
                    measurement="+"
                />

                <CounterItem
                    title="Certifications"
                    counter={<span id="certificatsCounter" />}
                    measurement=""
                />
            </div>
        </div>
    );
};

export default AboutCounter;
