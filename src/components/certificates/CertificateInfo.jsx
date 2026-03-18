import { useContext } from "react";
import SingleCertificateContext from "../../context/SingleCertificateContext";

const CertificateInfo = () => {
    const { singleCertificateData, loading } = useContext(
        SingleCertificateContext,
    );

    if (loading || !singleCertificateData) {
        return (
            <div className="mt-14 text-center text-ternary-dark dark:text-ternary-light">
                Chargement...
            </div>
        );
    }

    return (
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
            <div className="w-full sm:w-1/3 text-left">
                {/* Single certificate issuer details */}
                <div className="mb-7">
                    <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                        {singleCertificateData.Info.IssuedHeading}
                    </p>
                    <ul className="leading-loose">
                        {singleCertificateData.Info.IssuerInfo.map((info) => {
                            return (
                                <li
                                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                                    key={info.id}
                                >
                                    <span>{info.title}: </span>
                                    <a
                                        href={
                                            info.title ===
                                            "Voir la certification"
                                                ? info.details
                                                : "#"
                                        }
                                        className={
                                            info.title ===
                                            "Voir la certification"
                                                ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                                                : ""
                                        }
                                        aria-label="Certificate Details"
                                    >
                                        {info.details}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Certificate skills */}
                <div className="mb-7">
                    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                        {singleCertificateData.Info.SkillsHeading}
                    </p>
                    <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                        {singleCertificateData.Info.SkillsDetails}
                    </p>
                </div>

                {/* Certificate technologies */}
                <div className="mb-7">
                    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                        {singleCertificateData.Info.Technologies[0].title}
                    </p>
                    <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                        {singleCertificateData.Info.Technologies[0].techs.join(
                            ", ",
                        )}
                    </p>
                </div>

                {/* Social sharing */}
                <div>
                    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                        {singleCertificateData.Info.SocialSharingHeading}
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                        {singleCertificateData.Info.SocialSharing.map(
                            (social) => {
                                return (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="__blank"
                                        aria-label="Share Certificate"
                                        className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                                    >
                                        <span className="text-lg lg:text-2xl">
                                            {social.icon}
                                        </span>
                                    </a>
                                );
                            },
                        )}
                    </div>
                </div>
            </div>

            {/* Certificate details section */}
            <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                    {singleCertificateData.Info.CertificateDetailsHeading}
                </p>
                {singleCertificateData.Info.CertificateDetails.map(
                    (details) => {
                        return (
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-ternary-dark dark:text-ternary-light"
                            >
                                {details.details}
                            </p>
                        );
                    },
                )}
            </div>
        </div>
    );
};

export default CertificateInfo;
