import { useState } from "react";
import FormInput from "../reusable/FormInput";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID_FORMSPREE";

const ContactForm = () => {
    const [status, setStatus] = useState("idle");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        const form = e.target;
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });
            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <div className="w-full lg:w-1/2">
            <div className="leading-loose">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                        Formulaire de contact
                    </p>
                    <FormInput
                        inputLabel="Nom complet"
                        labelFor="name"
                        inputType="text"
                        inputId="name"
                        inputName="name"
                        placeholderText="Votre nom"
                        ariaLabelName="Nom complet"
                    />
                    <FormInput
                        inputLabel="Email"
                        labelFor="email"
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        placeholderText="Votre adresse email"
                        ariaLabelName="Email"
                    />
                    <FormInput
                        inputLabel="Sujet"
                        labelFor="subject"
                        inputType="text"
                        inputId="subject"
                        inputName="subject"
                        placeholderText="Sujet"
                        ariaLabelName="Sujet"
                    />

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                            required
                        ></textarea>
                    </div>

                    {status === "success" && (
                        <p className="mt-4 text-green-600 dark:text-green-400 font-general-medium">
                            Message envoyé avec succès !
                        </p>
                    )}
                    {status === "error" && (
                        <p className="mt-4 text-red-500 font-general-medium">
                            Une erreur est survenue. Réessayez ou contactez-moi
                            directement par email.
                        </p>
                    )}

                    <div className="mt-6">
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            aria-label="Envoyer le message"
                            className="font-general-medium px-6 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "sending"
                                ? "Envoi en cours..."
                                : "Envoyer le message"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
