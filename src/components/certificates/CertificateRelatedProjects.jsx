import { useContext } from "react";
import { Link } from "react-router-dom";
import SingleCertificateContext from "../../context/SingleCertificateContext";

const CertificateRelatedProjects = () => {
    const { singleCertificateData, loading } = useContext(
        SingleCertificateContext,
    );

    if (loading || !singleCertificateData) {
        return (
            <div className="text-center text-ternary-dark dark:text-ternary-light">
                Chargement...
            </div>
        );
    }

    return (
        <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
                {singleCertificateData.RelatedCertificates.title}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {singleCertificateData.RelatedCertificates.certificates.map(
                    (cert) => {
                        return (
                            <Link to={`/certificates/${cert.id}`} key={cert.id}>
                                <div className="p-4 rounded-xl bg-secondary-light dark:bg-ternary-dark hover:shadow-lg cursor-pointer transition-shadow">
                                    <p className="font-general-medium text-ternary-dark dark:text-ternary-light mb-2">
                                        {cert.title}
                                    </p>
                                    <p className="font-general-regular text-primary-dark dark:text-primary-light text-sm">
                                        {cert.date}
                                    </p>
                                </div>
                            </Link>
                        );
                    },
                )}
            </div>
        </div>
    );
};

export default CertificateRelatedProjects;
