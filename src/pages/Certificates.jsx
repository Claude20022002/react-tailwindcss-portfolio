import CertificatesGrid from "../components/certificates/CertificatesGrid";
import { CertificatesProvider } from "../context/CertificatesContext";

const Certificates = () => {
    return (
        <CertificatesProvider>
            <div className="container mx-auto">
                <CertificatesGrid />
            </div>
        </CertificatesProvider>
    );
};

export default Certificates;
