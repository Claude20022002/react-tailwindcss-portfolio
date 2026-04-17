function AppFooterCopyright() {
    return (
        <div className="font-general-regular flex justify-center items-center text-center">
            <div className="text-lg text-ternary-dark dark:text-ternary-light">
                &copy; {new Date().getFullYear()}
                <a
                    href="https://github.com/Claude20022002/react-tailwindcss-portfolio"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
                >
                    React & Tailwind CSS Portfolio
                </a>
                .
                <a
                    href="https://www.linkedin.com/in/claudia-lusamote-kimfuta-271b512a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank" rel="noopener noreferrer"
                    className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
                >
                    Fait par Claude20022002
                </a>
            </div>
        </div>
    );
}

export default AppFooterCopyright;
