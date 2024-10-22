import Buku from "../assets/logoBuku.png";

const About = () => {
  return (
    <section className="grid w-full h-full items-center px-6 py-2 md:px-32 lg:py-12 lg:px-44">
      <h2 className="font-Lora text-3xl mt-8 mb-10">
        About Diagnosis <span className="text-dark-rose">DBD</span>
      </h2>
      <p className="font-Inter mb-10 lg:w-1/2 md:text-lg">
        Symptomate is a self-service symptom checker made by doctors for anyone
        looking to understand their symptoms, explore potential causes, receive
        guidance on next steps, or prepare for a medical appointment.
      </p>
      <p className="font-Inter">
        Learn more{" "}
        <a href="/" className="text-dark-blue underline">
          about us
        </a>
      </p>

      <ul className="grid gap-6 mt-10 lg:flex">
        <li className="relative bg-blue-100 p-10 rounded-xl flex items-start">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <span className="text-4xl text-gray-800 block font-Lora">
                120,000+
              </span>
              <span className="text-lg text-gray-500 font-Inter">
                hours of doctors' work
              </span>
            </div>
            <div className="relative flex justify-end items-end">
              <img src={Buku} alt="" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </li>
        <li className="relative bg-blue-100 p-10 rounded-xl flex items-start">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <span className="text-4xl text-gray-800 block font-Lora">
                20M+
              </span>
              <span className="text-lg text-gray-500 font-Inter">
                interviews performed
              </span>
            </div>
            <div className="relative flex justify-end items-end">
              <img src={Buku} alt="" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </li>
        <li className="relative bg-blue-100 p-10 rounded-xl flex items-start">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <span className="text-4xl text-gray-800 block font-Lora">
                200,000+
              </span>
              <span className="text-lg text-gray-500 font-Inter">
                interviews every month
              </span>
            </div>
            <div className="relative flex justify-end items-end">
              <img src={Buku} alt="" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default About;
