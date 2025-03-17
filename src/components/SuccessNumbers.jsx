import React from 'react';

const SuccessNumbers = () => {
    return (
        <div className="flex flex-col md:flex-row bg-blend-lighten justify-between font-grotesk py-14">
            <div className="w-full md:max-w-[30%] mb-8 md:mb-0">
                <h1 className="text-4xl text-[#1E293B] font-grotesk mb-4">Breaking Barriers to Recovery</h1>

                <p className="text-[#475569]">
                    Our mission is to make Medication Assisted Treatment accessible to people in both major cities and rural communities.
                    We're deeply committed to removing obstacles to recovery, ensuring our clients get the support they need.
                </p>
            </div>
            <div className="w-full md:flex-1 md:max-w-[50%] flex flex-col">
                <p className="text-[#475569] md:mb-3">
                    We're not just offering a service; we're creating a lifeline. Our platform is designed to eliminate the challenges that often stand in the way of recovery—whether it’s stigma, inconvenience, or lack of access to quality care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-button">500+</h2>
                        <p className="text-gray-700">Patients Treated</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-button">300+</h2>
                        <p className="text-gray-700">Centers Nationwide</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-button">4.9/5</h2>
                        <p className="text-gray-700">Patients Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessNumbers;

