import { useState, createContext } from "react";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";

const SingleCertificateContext = createContext();

export const SingleProjectProvider = ({ children }) => {
    const [singleProjectData, setSingleProjectData] = useState(
        singleProjectDataJson,
    );

    return (
        <SingleCertificateContext.Provider
            value={{ singleProjectData, setSingleProjectData }}
        >
            {children}
        </SingleCertificateContext.Provider>
    );
};

export default SingleCertificateContext;
