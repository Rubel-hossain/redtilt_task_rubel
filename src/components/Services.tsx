import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center py-12" id="services">
      {/* Header Section */}
      <h1 className="text-4xl font-bold">What we offer</h1>
      <p className="text-lg mt-4 my-3 px-4 text-center">
        Our Experts Will Help You In Following Fields
      </p>
      <div className="mt-2">
        <div className="inline-block bg-[#330000] px-4 py-2 rounded-lg border border-[#ff0000]">
          <button className="text-sm text-center cursor-pointer">
            Our Experts Will Help You In Following Fields
          </button>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl">
        {/* Development */}
        <div className="bg-[#5b0404] p-2 rounded-lg relative overflow-hidden">
          <div className="absolute text-[100px] font-bold text-[#6c2c2c] top-[-50px] left-[-5px]">
            01
          </div>
          <div className="relative  pl-[10px] pt-[10px]">
            <div className="flex items-center">
              <i className="fas fa-cogs text-3xl text-[#CDB0B0] mr-4"></i>
              <h2 className="text-xl font-semibold">Development</h2>
            </div>
            <div className="inner-box ml-[30px] transform translate-y-[10%] min-h-[275px]">
              <ul className="list-disc ml-8 space-y-2 pt-2 text-[#A37777] text-base font-inter font-semibold break-words">
                <li>UI/UX</li>
                <li>DevOps</li>
                <li>Web design</li>
                <li>Frontend dev</li>
                <li>Backend dev</li>
              </ul>
            </div>
          </div>
        </div>

        {/* MSP */}
        <div className="bg-[#5b0404] p-2 rounded-lg relative overflow-hidden">
          <div className="absolute text-[100px] font-bold text-[#6c2c2c] top-[-50px] left-[-5px]">
            02
          </div>
          <div className="relative  pl-[10px] pt-[10px]">
            <div className="flex items-center">
              <i className="fas fa-globe text-3xl text-[#CDB0B0] mr-4"></i>
              <h2 className="text-xl font-semibold">MSP</h2>
            </div>
            <div className="inner-box ml-[30px] transform translate-y-[10%] min-h-[275px]">
              <ul className="list-disc ml-8 space-y-2 pt-2 text-[#A37777] text-base font-inter font-semibold break-words">
              <li>Infrastructure management</li>
              <li>Managed Monitoring</li>
              <li>Business Continuity</li>
              <li>Managed Cyber</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cloud */}
        <div className="bg-[#5b0404] p-2 rounded-lg relative overflow-hidden">
          <div className="absolute text-[100px] font-bold text-[#6c2c2c] top-[-50px] left-[-5px]">
            03
          </div>
          <div className="relative  pl-[10px] pt-[10px]">
            <div className="flex items-center">
              <i className="fas fa-cloud text-3xl text-[#CDB0B0] mr-4"></i>
              <h2 className="text-xl font-semibold">Cloud</h2>
            </div>
            <div className="inner-box ml-[30px] transform translate-y-[10%] min-h-[275px]">
              <ul className="list-disc ml-8 space-y-2 pt-2 text-[#A37777] text-base font-inter font-semibold break-words">
              <li>AWS</li>
              <li>AZURE</li>
              <li>Multi-Cloud</li>
              <li>SRE Strategy</li>
              <li>Server less</li>
              <li>Hybrid Strategy</li>
              <li>Containerisation</li>
              </ul>
            </div>
          </div>
        </div>


        {/* Cyber */}
        <div className="bg-[#5b0404] p-2 rounded-lg relative overflow-hidden">
          <div className="absolute text-[100px] font-bold text-[#6c2c2c] top-[-50px] left-[-5px]">
            04
          </div>
          <div className="relative  pl-[10px] pt-[10px]">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-3xl text-[#CDB0B0] mr-4"></i>
              <h2 className="text-xl font-semibold">Cyber</h2>
            </div>
            <div className="inner-box ml-[30px] transform translate-y-[10%] min-h-[275px]">
              <ul className="list-disc ml-8 space-y-2 pt-2 text-[#A37777] text-base font-inter font-semibold break-words">
              <li>Cyber Audit</li>
              <li>Cyber governance</li>
              <li>Security as a service</li>
              <li>Penetration Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
