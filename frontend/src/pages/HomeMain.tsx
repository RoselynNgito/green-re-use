"use client";

import { Badge, Button, Card } from "flowbite-react";
import { HomeCoursel } from "../components/HomeCoursel";
import takataka from "../assets/takataka.jpg";

const HomeMain = () => {
  return (
    <div className="max-w-max">
      <HomeCoursel />
      <div className="grid grid-cols-3 ">
        <Card className="rounded-none bg-orange-400 px-5">
          <h5 className="text-2xl font-bold tracking-tight text-green-600 uppercase dark:text-white">
            CONTROL
          </h5>
          <h5 className="text-xl text-slate-600 italic font-bold tracking-tight  dark:text-white">
            Green Waste Management
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We aim at empowering peole to take an initiative to prevent further
            degradation of the environment by employing sustainable methods
            while disposing of green waste.
          </p>
        </Card>

        <Card className="rounded-none bg-green-100 px-5">
          <h5 className="text-2xl font-bold tracking-tight text-green-600 uppercase dark:text-white">
            COGNITIVE
          </h5>
          <h5 className="text-xl text-slate-600 italic font-bold tracking-tight  dark:text-white">
            Artificial intelligence
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            With our integrated Watson chatbot, we provide a dynamic platform
            aimed at spreading awareness about green waste management.
          </p>
        </Card>

        <Card className="rounded-none bg-green-400 px-5">
          <h5 className="text-2xl font-bold tracking-tight text-green-600 uppercase dark:text-white">
            CONSERVATION
          </h5>
          <h5 className="text-xl text-slate-600 italic font-bold tracking-tight  dark:text-white">
            Educating community
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We focus on disposing of all waste sustainably minimizing
            environmental impact. this is by creating awareness to the
            communinty through the blogs on our website.
          </p>
        </Card>
      </div>

      <div className="bg-white shadow p-7 flex flex-col gap-3 mt-5">
        <div className="w-max">
          <Badge color="success">What we do</Badge>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-green-600 capitalize dark:text-white">
          Welcome to Green Reuse
        </h5>
        <h5 className="text-xl text-slate-600 italic font-bold tracking-tight  dark:text-white">
          We are a Food Waste Management Company, committed to The environment
        </h5>

        <p>
          We address the challenges asscociated with food waste and providing
          sustainable solutions. Our team provides advisory services to help
          users, organisation suh as school and many others to optimize their
          operations and minimizefood waste generation. We offer a platform
          where people with green waste can meet and buy and sell green waste to
          one another,this is achieved by connecting them through the market
          page on our website.
        </p>

        <div className="flex justify-end mt-5">
          <Button>To Market</Button>
        </div>
      </div>

      <div className="bg-green-100 shadow mt-5 p-7 flex flex-col gap-3">
        <h5 className="text-2xl text-center font-bold tracking-tight text-green-600 capitalize dark:text-white">
          circular economy
        </h5>

        <p>
          Green waste and the circular economy are interconnected concepts that
          promote sustainable waste management and resource utilization. Green
          waste, which includes organic materials like food scraps and yard
          trimmings, can be effectively recycled and transformed into valuable
          resources through processes like composting and anaerobic digestion.
          This enables the recovery of nutrients, the generation of renewable
          energy, and the creation of economic opportunities. By incorporating
          green waste into circular economy models, we can minimize waste,
          maximize resource efficiency, and contribute to a more sustainable and
          regenerative approach to waste management and resource utilization.
        </p>

        <div className="flex justify-center items-center my-4">
          <Button.Group>
            <Button color="gray">Control</Button>
            <Button color="gray">Cognitive</Button>
            <Button color="gray">Conservative</Button>
          </Button.Group>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-xl">
          <img src={takataka} alt="" />
        </div>

        <div className="bg-white p-7 flex flex-col gap-4">
          <h5 className="text-2xl  font-bold tracking-tight  capitalize dark:text-white">
            Reducing food waste
          </h5>
          <h5 className="text-xl  font-bold tracking-tight text-gray-600 capitalize dark:text-white">
            Food waste is responsible for 3 billion tonnes of carbon dioxide
            emissions.
          </h5>

          <p className="text-gray-400 font-thin">
            The earth cries out "save me". But this doesnt have to be the case
            everytime for we can fight together againts food waste .see how
            peoplpe out there are fighting food waste by visiting our blog page.
          </p>
          {/* <Button>Learn More</Button> */}
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900 my-5">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-green-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMain;
