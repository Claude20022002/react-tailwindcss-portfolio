import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const AppBanner = () => {
    const [activeTheme] = useThemeSwitcher();
    const avatarSrc = "/images/avatar.png";

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
        >
            <div className="w-full md:w-1/2 text-left">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="font-general-semibold text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
                >
                    Bonjour, Je suis Claude
                </motion.h1>
                <motion.h5
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="font-general-medium mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                    Développeuse Junior & Passionnée par la Tech
                </motion.h5>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="font-general-medium mt-4 text-base md:text-lg lg:text-xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                    Je transforme des idées en applications fiables et
                    élégantes. De React sur le frontend à Node.js sur le
                    backend, et le développement mobile avec React Native, je
                    construis des projets robustes conçus pour durer et évoluer.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center sm:block"
                >
                    <a
                        download="LUSAMOTE-KIMFUTA-Claudia.pdf"
                        href="/others/Curriculum-Vitae.pdf"
                        className="font-general-medium flex justify-center items-center w-64 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="Télécharger le CV"
                    >
                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-6 sm:h-6 duration-100" />
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            Télécharger le CV
                        </span>
                    </a>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 flex justify-center items-center"
            >
                <img src={avatarSrc} alt="Illustration développeuse" width={"380px"} />
            </motion.div>
        </motion.section>
    );
};

export default AppBanner;
