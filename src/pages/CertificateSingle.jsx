import { useParams } from "react-router-dom";
import CertificateHeader from "../components/certificates/CertificateHeader";
import CertificateInfo from "../components/certificates/CertificateInfo";
import CertificateRelatedProjects from "../components/certificates/CertificateRelatedProjects";
import { SingleCertificateProvider } from "../context/SingleCertificateContext";
import { motion } from "framer-motion";

const CertificateSingle = () => {
    const { id } = useParams();
    const certificateId = id ? parseInt(id) : 1;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
                delay: 0.15,
            }}
            className="container mx-auto mt-5 sm:mt-10"
        >
            <SingleCertificateProvider certificateId={certificateId}>
                <CertificateHeader />
                <CertificateInfo />
                <CertificateRelatedProjects />
            </SingleCertificateProvider>
        </motion.div>
    );
};

export default CertificateSingle;
