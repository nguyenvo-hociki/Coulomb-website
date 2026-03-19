import Link from "next/link";

interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon: React.ReactNode;
}

export default function CTACard({ title, description, buttonText, href, icon }: CTACardProps) {
  return (
    <Link 
      href={href}
      className="group bg-white rounded-2xl p-8 border border-gray-200 text-center hover:-translate-y-2 hover:shadow-lg hover:border-blue-600 transition duration-300 ease-in-out block"
    >
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
        {description}
      </p>
      
      <span className="inline-block border border-gray-300 px-10 py-5 rounded-md text-gray-800 text-xl font-medium hover:bg-black hover:text-white transition-colors">
        {buttonText}
      </span>
    </Link>
  );
}
