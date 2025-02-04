import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="lg:text-center">
          <h2 className="font-heading mb-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
            Why Choose HSC Words?
          </h2>
          <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Master Vocabulary for HSC Exams Effortlessly!
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            HSC Words provides a structured way to learn vocabulary from NCTB books, helping Bangladeshi students
            prepare for exams with ease. Get letterwise words along with their synonyms and antonyms.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Feature 1 */}
            <div className="relative">
              <dt>
                
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Letterwise Learning
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Learn new words alphabetically, making it easier to memorize and recall them during exams.
              </dd>
            </div>

            {/* Feature 2 */}
            <div className="relative">
              <dt>
                
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Synonyms & Antonyms
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Understand words deeply by learning their synonyms and antonyms, directly from NCTB books.
              </dd>
            </div>

            {/* Feature 3 */}
            <div className="relative">
              <dt>
                
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Designed for HSC Students
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our content is specifically curated for Bangladeshi HSC students following the NCTB syllabus.
              </dd>
            </div>

            {/* Feature 4 */}
            <div className="relative">
              <dt>
                
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                  Time-Saving Approach
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Learn efficiently with a structured and organized vocabulary system, helping you prepare faster.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
