import { Mail, MapPin, Phone } from "lucide-react";

const nextSteps = [
  {
    title: "We review your submission",
    description: "Our solutions team reviews your requirements and project scope.",
  },
  {
    title: "Initial call within 1 business day",
    description: "A specialist connects with you to align on timeline and priorities.",
  },
  {
    title: "Custom system design",
    description: "We prepare a tailored sodium-ion system recommendation.",
  },
];

const directContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sales@coulombtechnology.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "208-768-8888",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Headquarters: USA",
  },
];

const metrics = [
  {
    value: "0",
    label: "Thermal Incidents",
  },
  {
    value: "14%",
    label: "Lower 15-yr TCO",
  },
  {
    value: "20yr",
    label: "Battery Life",
  },
];

export default function ContactSidebar() {
  return (
    <aside className="space-y-6">
      <div className="rounded-2xl bg-neutral-900 p-6">
        <p className="text-green-500 text-sm font-semibold tracking-wide uppercase">What Happens Next</p>

        <div className="mt-5 space-y-5">
          {nextSteps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-green-500 text-green-500 flex items-center justify-center shrink-0 text-sm font-semibold">
                {index + 1}
              </div>

              <div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <p className="text-green-600 uppercase text-sm font-semibold tracking-wide">Direct Contact</p>

        <div className="mt-3 divide-y divide-gray-200">
          {directContacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <div key={contact.label} className="flex items-center gap-3 py-3">
                <Icon className="w-5 h-5 text-blue-500 shrink-0" aria-hidden="true" />
                <p className="text-gray-700">{contact.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl bg-linear-to-br from-green-900 to-green-800 p-6 text-white text-center">
        <div className="grid grid-cols-3 text-center gap-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-bold text-green-300">{metric.value}</p>
              <p className="text-sm text-gray-200">{metric.label}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-200 text-center mt-4">
          Sodium-ion: the safer, longer-lasting alternative to lithium-ion.
        </p>
      </div>
    </aside>
  );
}
