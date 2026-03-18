const selectOptions = ["Frontend", "Backend", "Design"];

const CertificatesFilter = ({ setSelectCategory }) => {
    return (
        <select
            onChange={(e) => {
                setSelectCategory(e.target.value);
            }}
            className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
        >
            <option value="" className="text-sm sm:text-md">
                Toutes les certifications
            </option>

            {selectOptions.map((option) => (
                <option className="text-normal sm:text-md" key={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default CertificatesFilter;
