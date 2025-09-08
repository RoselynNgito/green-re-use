import { Card } from "flowbite-react";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Who we are</h1>
          <p className="text-gray-600 mt-4">
          Garbage Dump Communities are, most simply put, the communities
              that rely on the world’s garbage dumps to survive by either
              working or living within them. The families that we work with
              specifically make their living as “recyclers” or “pickers”,
              combing through the garbage by hand and finding items to sell or
              keep. Those who live here have to be incredibly resilient because
              this way of life does not pay well: nearly all garbage dump
              community members live on less than $2 a day, putting them below
              the United Nation’s line for extreme poverty. Living in garbage
              dump communities also has extreme adverse effects on both physical
              and mental health, combined with extremely high barriers to access
              to healthcare, education, proper food and shelter, and employment
              opportunities outside the garbage dump.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <Card className="shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-4">
              To empower customers by providing a seamless shopping experience
              with high-quality products and unparalleled customer service.
            </p>
          </Card>
          <Card className="shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              To become a global leader in the e-commerce industry, connecting
              people with products they love.
            </p>
          </Card>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Scope of project
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
          The scope of the website entails creating awareness and providing comprehensive 
            information on sustainable methods for managing green waste, with a primary focus 
            on Thika Sub-county. Additionally, it offers a secondary coverage of green waste management 
            practices in Nairobi, Kenya, and the global context. The website features a dynamic marketplace 
            where users can conveniently buy and sell various green waste products, facilitating a circular 
            economy and promoting resource utilization. 
          </p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">
                Customer Focus
              </h3>
              <p className="text-gray-600 mt-2">
                We put our customers at the heart of everything we do.
              </p>
            </Card>
            <Card className="shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Innovation</h3>
              <p className="text-gray-600 mt-2">
                We strive to stay ahead by embracing change and innovation.
              </p>
            </Card>
            <Card className="shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Integrity</h3>
              <p className="text-gray-600 mt-2">
                Honesty and transparency are the foundation of our business.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
