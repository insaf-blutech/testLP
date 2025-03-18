import { Menu, X, ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative flex items-center h-full ">
            <div className="max-w-7xl z-10 w-full">
                <div className="max-w-2xl">
                    <p className="text-white text-xl mb-6 font-light">No lines. Less hassle. Lower costs.</p>

                    <h1 className="text-white font-grotesk text-5xl md:text-7xl font-bold leading-tight">
                        Easy Online Suboxone Treatment for Opioid Addiction
                    </h1>

                    <div className="pt-8 mt-12">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-md text-base font-medium transition-colors duration-300 flex items-center">
                            Download The App Today
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeroSection