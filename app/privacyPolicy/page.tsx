import Link from "next/link"
const Privacy_Policy = () => {

    return (
        <div id="/privacyPolicy" className="bg-[#f2f0f1]">
            <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1 mb-5"></div>
            <div className="">
                <div className="mt-10 flex flex-col md:text-justify text-center w-[84%] max-w-[1400px] mx-auto gap-5">

                    <span className="text-2xl sen-bold md:text-left text-center md:flex md:justify-start items-center md:items-left">
                        Privacy Policy
                    </span>
                    <span className="font-light">
                        At Kandha, we prioritize your privacy. Here&apos;s a brief overview:
                    </span>

                    <span className="font-light">
                        <text className="font-medium">Information Collected: </text>
                        We gather essential data for personalized services, focusing on user
                        preferences and interactions.
                    </span>

                    <span className="font-light">
                        <text className="font-medium">Data Usage: </text>
                        Your information is utilized for optimized technology rollouts, strategic resource
                        planning, and tailored services. This includes learning organization models, managed services,
                        future learning, reskilling/upskilling, talent pipeline building, scenario planning, digital
                        skilling, employee engagement, and change management.
                    </span>

                    <span className="font-light">
                        <text className="font-medium">Information Security: </text>
                        We employ industry-standard measures to safeguard your data from unauthorized access or
                        disclosure.
                    </span>

                    <span className="font-light">
                        <text className="font-medium">Your Choices: </text>
                        You retain the authority to access, amend, or erase your personal
                        information held by us. This ensures transparency and empowers you to maintain control
                        over your data privacy preferences.
                    </span>

                    <span className="font-light pb-10 italic">
                        By using Kandha, you agree to this Privacy Policy. We may update it, so please
                        review periodically. Contact us with any concerns.
                    </span>

                </div>


            </div>

        </div>
    )
}

export default Privacy_Policy