import { FormEvent, useState } from "react";

type ContactFormData = {
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  jobTitle: string;
  industry: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const inquiryOptions = [
  "Request System Design",
  "Schedule a Demo",
  "Request a Quote",
  "General Inquiry",
  "Become a Partner",
  "Media & PR",
];

const industryOptions = [
  "Select industry",
  "Critical Infrastructure",
  "Commercial & Industrial",
  "Utilities",
  "Government",
  "Manufacturing",
  "Data Centers",
  "Other",
];

const initialFormState: ContactFormData = {
  firstName: "",
  lastName: "",
  workEmail: "",
  phoneNumber: "",
  companyName: "",
  jobTitle: "",
  industry: "",
  message: "",
};

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState<string>(inquiryOptions[0]);
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!formData.workEmail.trim()) {
      nextErrors.workEmail = "Work email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
      nextErrors.workEmail = "Please enter a valid email address.";
    }
    if (!formData.companyName.trim()) nextErrors.companyName = "Company name is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);
    setFormData(initialFormState);
    setErrors({});
    setSelectedOption(inquiryOptions[0]);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {inquiryOptions.map((option) => {
          const isActive = selectedOption === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelectedOption(option)}
              className={`text-left rounded-xl border p-4 transition-all duration-200 hover:shadow-md ${
                isActive
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <span className="text-sm font-semibold text-gray-900">{option}</span>
            </button>
          );
        })}
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-4 shadow-sm"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
              First Name *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
              Last Name *
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="workEmail" className="block mb-2 text-sm font-medium text-gray-700">
              Work Email *
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.workEmail && <p className="mt-1 text-xs text-red-600">{errors.workEmail}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-700">
              Company Name *
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
          </div>

          <div>
            <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="industry" className="block mb-2 text-sm font-medium text-gray-700">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {industryOptions.map((industry) => (
              <option
                key={industry}
                value={industry === "Select industry" ? "" : industry}
                disabled={industry === "Select industry"}
              >
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Tell us about your project goals, timeline, or deployment requirements."
          />
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            Inquiry type: <span className="font-semibold text-gray-900">{selectedOption}</span>
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
        >
          Submit Request
        </button>

        {isSubmitted && (
          <p className="text-sm font-medium text-green-700">
            Thanks for reaching out. Our team will contact you shortly.
          </p>
        )}
      </form>
    </>
  );
}
