import { useState, createContext } from "react";
import { certificatesData } from "../data/certificates";

// Create certificates context
export const CertificatesContext = createContext();

// Create the certificates context provider
export const CertificatesProvider = (props) => {
    const [certificates, setCertificates] = useState(certificatesData);
    const [searchCertificate, setSearchCertificate] = useState("");
    const [selectCategory, setSelectCategory] = useState("");

    // Search certificates by title
    const searchCertificatesByTitle = certificates.filter((item) => {
        const result = item.title
            .toLowerCase()
            .includes(searchCertificate.toLowerCase())
            ? item
            : searchCertificate === ""
              ? item
              : "";
        return result;
    });

    // Select certificates by category
    const selectCertificatesByCategory = certificates.filter((item) => {
        let category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectCategory);
    });

    return (
        <CertificatesContext.Provider
            value={{
                certificates,
                setCertificates,
                searchCertificate,
                setSearchCertificate,
                searchCertificatesByTitle,
                selectCategory,
                setSelectCategory,
                selectCertificatesByCategory,
            }}
        >
            {props.children}
        </CertificatesContext.Provider>
    );
};
