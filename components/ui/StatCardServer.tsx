import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: number;
    suffix?: string;
    icon: LucideIcon;
    gradient: string;
    delay?: number;
}

export function StatCardServer({ title, value, suffix = "", icon: Icon, gradient }: StatCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group">
            <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>

            <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {value.toLocaleString()}{suffix}
                </div>
                <h3 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">{title}</h3>
            </div>
        </div>
    );
}

interface TestimonialCardProps {
    name: string;
    role: string;
    location: string;
    content: string;
    avatar: string;
    rating: number;
    index: number;
}

export function TestimonialCardServer({
    name,
    role,
    location,
    content,
    avatar,
    rating,
}: TestimonialCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="space-y-4 sm:space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    "{content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                        {avatar}
                    </div>
                    <div>
                        <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{role}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}