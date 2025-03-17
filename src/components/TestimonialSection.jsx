import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';


const TestimonialSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonials = [
        {
            rating: 4,
            text: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
            author: "Nicholas O.",
            image: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonna-result.63e3409e.jpeg&w=2048&q=75"
        },
        {
            rating: 4,
            text: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and we're able to do everything online. Thank you so much for everything Recovery Delivered!",
            author: "Christine M.",
            image: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonna-result.63e3409e.jpeg&w=2048&q=75"
        },
        {
            rating: 4,
            text: "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
            author: "Heather B.",
            image: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonna-result.63e3409e.jpeg&w=2048&q=75"
        },
        {
            rating: 5,
            text: "The convenience of virtual appointments has been life-changing. I can maintain my treatment while balancing work and family. The providers are compassionate and truly listen to my concerns.",
            author: "James K.",
            image: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonna-result.63e3409e.jpeg&w=2048&q=75"
        },
        {
            rating: 5,
            text: "I've tried other telehealth services but Recovery Delivered stands out in terms of quality care and support. The team genuinely cares about your recovery journey and provides resources beyond just medication.",
            author: "Sarah L.",
            image: "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonna-result.63e3409e.jpeg&w=2048&q=75"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const getVisibleTestimonials = () => {
        const startIndex = currentSlide;
        const items = [];

        for (let i = 0; i < testimonials.length; i++) {
            const index = (startIndex + i) % testimonials.length;
            items.push(testimonials[index]);
        }

        return items;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <div className="w-full">
            <div className=" mx-auto">
                <div className="flex items-center justify-between mb-10">

                    <div className="">
                        <h3 className="text-button text-2xl font-medium uppercase tracking-wider">OUR CLIENT'S</h3>
                        <h2 className="text-[3.25rem] font-medium  mt-6 text-[#1E293B]">Testimonials</h2>
                    </div>
                    {/* Navigation buttons */}
                    <div className="flex justify-end mt-6 space-x-2">
                        <button
                            onClick={prevSlide}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white hover:bg-teal-600"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
                <div className="relative">
                    {/* Desktop and tablet view - multiple cards */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleTestimonials.slice(0, 3).map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Mobile view - single card */}
                    <div className="sm:hidden">
                        <TestimonialCard testimonial={visibleTestimonials[0]} />
                    </div>


                </div>
            </div>
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full flex flex-col transform transition-transform duration-500 hover:-rotate-6 hover:shadow-md">
            <div className="mb-3 flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={20}
                        fill={i < testimonial.rating ? "#FBBF24" : "none"}
                        color={i < testimonial.rating ? "#FBBF24" : "#FBBF24"}
                        className="mr-1"
                    />
                ))}
            </div>
            <p className="text-gray-600 flex-grow mb-4 text-sm">{testimonial.text}</p>
            <div className="flex items-center mt-auto">
                <img
                    src={testimonial.image}
                    alt={`${testimonial.author} profile`}
                    className="w-10 h-10 group-hover:w-11 group-hover:h-11 rounded-full mr-3 transform transition-transform duration-500"
                />
                <span className="font-medium text-gray-800">{testimonial.author}</span>
            </div>
        </div>
    );
};

export default TestimonialSection;