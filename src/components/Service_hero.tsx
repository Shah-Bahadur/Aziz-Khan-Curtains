    import { useState, useEffect } from "react";
    import { Button } from "@/components/ui/button";
    import { ArrowRight, Shield, Clock, Award } from "lucide-react";

    interface ServiceHeroProps {
    title: string;
    highlight: string;
    description: string;
    image: string;
    mobileImage?: string;
    }

    const ServiceHero = ({
    title,
    highlight,
    description,
    image,
    mobileImage,
    }: ServiceHeroProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="service-hero" className="relative">
        {/* <div
            className="relative bg-cover bg-center bg-no-repeat sm:py-20"
            style={{
            backgroundImage: `url('${
                isMobile && mobileImage ? mobileImage : image
            }')`,
            }}
        > */}
        <div className="relative sm:py-20">
        <img
            src={isMobile && mobileImage ? mobileImage : image}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
            fetchPriority="high"
        />

        {/* Your content here */}
        </div>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50 z-1" />
            {/* Gradient Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-12 sm:px-4 py-12 sm:py-16 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
            <div className="w-full max-w-2xl mx-auto text-center space-y-8">
                <div className="space-y-6">
                {/* Curtain Opening Animation */}
                <div className="curtain-animate inline-block">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight px-5 pt-28 sm:pt-12 text-white">
                    {title}
                    <span className="block bg-gradient-to-br from-champagne-100 to-champagne-700 bg-clip-text text-transparent">
                        {highlight}
                    </span>
                    </h1>
                </div>
                <p className="text-xl px-5 sm:text-lg lg:text-2xl text-white leading-relaxed animate-fade-in delay-200">
                    {description}
                </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
                <a
                    href="https://wa.me/+971503635428?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                    size="lg"
                    className="bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-6 sm:px-8 py-2 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-xl"
                    >
                    Book <u><b>Free</b></u> Home Visit <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </a>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-300 animate-fade-in delay-500">
                <div className="text-center">
                    <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-champagne-600 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xs sm:text-sm text-white uppercase tracking-wide">24 Hours</div>
                    <div className="font-bold text-white text-sm sm:text-base">Customer Support</div>
                </div>
                <div className="text-center">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-champagne-600 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xs sm:text-sm text-white uppercase tracking-wide">100%</div>
                    <div className="font-bold text-white text-sm sm:text-base">Guarantee</div>
                </div>
                <div className="text-center">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-champagne-600 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xs sm:text-sm text-white uppercase tracking-wide">26+ Years</div>
                    <div className="font-bold text-white text-sm sm:text-base">Experience</div>
                </div>
                </div>
            </div>
            </div>
        {/* </div> */}

        {/* Animations */}
        <style>
            {`
            .curtain-animate {
                overflow: hidden;
                display: inline-block;
            }
            .curtain-animate h1 {
                display: inline-block;
                transform: scaleX(0);
                animation: curtainOpen 1.2s cubic-bezier(0.77,0,0.175,1) forwards;
                transform-origin: center;
            }
            @keyframes curtainOpen {
                0% {
                transform: scaleX(0);
                opacity: 0;
                }
                60% {
                opacity: 1;
                }
                100% {
                transform: scaleX(1);
                opacity: 1;
                }
            }
            .animate-fade-in {
                opacity: 0;
                animation: fadeIn 1s forwards;
            }
            .animate-fade-in.delay-200 { animation-delay: 0.2s; }
            .animate-fade-in.delay-300 { animation-delay: 0.3s; }
            .animate-fade-in.delay-500 { animation-delay: 0.5s; }
            @keyframes fadeIn {
                to { opacity: 1; }
            }
            `}
        </style>    
        </section>
    );
    };

    export default ServiceHero;