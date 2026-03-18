import { useState, createContext, useEffect } from "react";
import { certificatesData } from "../data/certificates";

const SingleCertificateContext = createContext();

export const SingleCertificateProvider = ({ children, certificateId = 1 }) => {
    const [singleCertificateData, setSingleCertificateData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Trouve le certificat par ID
        const certificate = certificatesData.find(
            (c) => c.id === parseInt(certificateId),
        );

        if (certificate) {
            // Structure les données pour les composants
            setSingleCertificateData({
                Header: certificate.header,
                Info: {
                    IssuedHeading: certificate.info.issuedHeading,
                    IssuerInfo: certificate.info.issuerInfo,
                    SkillsHeading: certificate.info.skillsHeading,
                    SkillsDetails: certificate.info.skillsDetails,
                    Technologies: certificate.info.technologies,
                    CertificateDetailsHeading:
                        certificate.info.certificateDetailsHeading,
                    CertificateDetails: certificate.info.certificateDetails,
                    SocialSharingHeading: certificate.info.socialSharingHeading,
                    SocialSharing: certificate.info.socialSharing,
                },
                RelatedCertificates: certificate.relatedCertificates,
            });
        }
        setLoading(false);
    }, [certificateId]);

    return (
        <SingleCertificateContext.Provider
            value={{ singleCertificateData, setSingleCertificateData, loading }}
        >
            {children}
        </SingleCertificateContext.Provider>
    );
};

export default SingleCertificateContext;
