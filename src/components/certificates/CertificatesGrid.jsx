import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import CertificateSingle from "./CertificateSingle";
import { CertificatesContext } from "../../context/CertificatesContext";
import CertificatesFilter from "./CertificatesFilter";

const CertificatesGrid = () => {
    const {
        certificates,
        searchCertificate,
        setSearchCertificate,
        searchCertificatesByTitle,
        selectCategory,
        setSelectCategory,
        selectCertificatesByCategory,
    } = useContext(CertificatesContext);

    return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Mes certifications
                </p>
            </div>

            <div className="mt-10 sm:mt-16">
                <h3
                    className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
                >
                    Chercher les certifications par titre ou catégorie
                </h3>
                <div
                    className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
                >
                    <div className="flex justify-between gap-2">
                        <span
                            className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
                        >
                            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
                        </span>
                        <input
                            onChange={(e) => {
                                setSearchCertificate(e.target.value);
                            }}
                            className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
                            id="name"
                            name="name"
                            type="search"
                            required=""
                            placeholder="Recherche certifications"
                            aria-label="Name"
                        />
                    </div>

                    <CertificatesFilter setSelectCategory={setSelectCategory} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                {selectCategory
                    ? selectCertificatesByCategory.map((certificate) => (
                          <CertificateSingle
                              id={certificate.id}
                              title={certificate.title}
                              category={certificate.category}
                              image={certificate.img}
                              key={certificate.id}
                          />
                      ))
                    : searchCertificate
                      ? searchCertificatesByTitle.map((certificate) => (
                            <CertificateSingle
                                id={certificate.id}
                                title={certificate.title}
                                category={certificate.category}
                                image={certificate.img}
                                key={certificate.id}
                            />
                        ))
                      : certificates.map((certificate) => (
                            <CertificateSingle
                                id={certificate.id}
                                title={certificate.title}
                                category={certificate.category}
                                image={certificate.img}
                                key={certificate.id}
                            />
                        ))}
            </div>
        </section>
    );
};

export default CertificatesGrid;
