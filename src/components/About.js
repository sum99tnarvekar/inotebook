export default function About(){
    return (
        <div className="bg-white">
            <header className="bg-gray-50 text-gray-700 text-center py-12">
                <h1 className="text-4xl font-bold">About Us</h1>
            </header>

            <section className="text-center py-12 px-4">
                <h2 className="text-2xl font-bold">Mission And Values</h2>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    Better notes will help you remember concepts, develop meaningful learning skills, and gain a better understanding of a topic. Effective notes will even lead to less stress when test time comes around!
                </p>
                <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
                    <div className="transition transform hover:scale-110">
                        <h3 className="text-xl font-bold">85+</h3>
                        <p className="text-gray-700">Specialists</p>
                    </div>
                    <div className="transition transform hover:scale-110">
                        <h3 className="text-xl font-bold">25+</h3>
                        <p className="text-gray-700">Years of Experience</p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 text-gray-700 py-12 px-4">
                <h2 className="text-2xl font-bold text-center">Our Vision</h2>
                <p className="mt-4 text-center max-w-2xl mx-auto">
                    The Cornell note taking method helps organize class notes into easily digestible summaries.
                </p>
            </section>

            <section className="text-center py-12 px-4">
                <h2 className="text-2xl font-bold">Our I-NOTEBOOK Specialties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Neatly</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Organized</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Summarized</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Easy to review</h3>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12 px-4">
                <h2 className="text-2xl font-bold text-center">State-Of-The-Art Note</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
                    <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold">Advanced Notes</h3>
                        <p className="text-gray-700 mt-2">We utilize the latest technology for accurate notes.</p>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold">Subtopic</h3>
                        <p className="text-gray-700 mt-2">Write any important notes underneath each subtopic.</p>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold">Robotic Branching</h3>
                        <p className="text-gray-700 mt-2">Branching off the main topic, write a heading for each of the subtopics.</p>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold">Outlining Method</h3>
                        <p className="text-gray-700 mt-2">This method is most useful when learning about topics that include a lot of detail.</p>
                    </div>
                </div>
            </section>

            <section className="text-center py-12 px-4">
                <h2 className="text-2xl font-bold">Committed To Your Happiness</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Book Appointment</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Informed Staff</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Total Health</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                        <h3 className="text-xl font-bold">Get Consultation</h3>
                    </div>
                </div>
            </section>

            <section className="bg-gray-500 text-white text-center py-12 px-4">
                <h2 className="text-2xl font-bold">User Notes Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                    <div className="p-4 shadow-lg rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique mi."</p>
                        <h3 className="mt-4 font-bold">- User A</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                        <p>"Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla ac justo euismod
                            posuere."</p>
                        <h3 className="mt-4 font-bold">- User B</h3>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                        <p>"Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa ullamcorper urna."</p>
                        <h3 className="mt-4 font-bold">- User C</h3>
                    </div>
                </div>
            </section>

            <section className="text-center py-12 px-4 w-full">
                <h2 className="text-2xl font-bold">Get Answer To Your Most Asked Questions</h2>
                <div className="mt-8">
                    <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
                        <h3 className="text-xl font-bold">How do I make an note online?</h3>
                        <p className="mt-2 text-gray-700">You can book an note online through our website or
                            mobile app.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
                        <h3 className="text-xl font-bold">What types of note tests do you offer?</h3>
                        <p className="mt-2 text-gray-700">We offer a wide range of note tests including blood tests,
                            imaging, and more.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
                        <h3 className="text-xl font-bold">Why are effective notes taking skills important?</h3>
                        <p className="mt-2 text-gray-700">Effective notes will even lead to less stress when test time comes around!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}