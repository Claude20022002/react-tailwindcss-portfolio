import { useContext } from "react";
import SingleCertificateContext from "../../context/SingleCertificateContext";

const CertificateHeader = () => {
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
        <div>
            <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                {singleCertificateData.Header.title}
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-10">
                <div className="flex items-center">
                    <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                        <strong>Date:</strong>{" "}
                        {singleCertificateData.Header.date}
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                        <strong>Organisme:</strong>{" "}
                        {singleCertificateData.Header.issuer}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CertificateHeader;
