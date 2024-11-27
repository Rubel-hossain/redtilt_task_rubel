import React from "react";

export default function Blog() {
  return (
    <div className="text-white pt-14">
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-[#b3b3b3] text-lg">Read Our Blog</h3>
          <h1 className="text-center text-white text-3xl font-bold mt-2">
            Read Daily news about <br /> startup companies
          </h1>
          <div className="mt-10 bg-[#2b0000] rounded-[16px] border border-[#3d0000] p-6 flex flex-col md:flex-row items-center">
            <img
              src="https://picsum.photos/300/200"
              alt="Blog"
              className="rounded-[8px] w-full md:w-[300px] h-[200px] object-cover"
            />
            <div className="mt-4 md:mt-0 md:ml-6 flex-1">
              <div className="box-top-content md:mb-12 pb-2 md:border-b md:border-[#776F6F]">
                <h2 className="text-white text-xl font-semibold">
                  Not Another Framework
                </h2>
                <p className="text-[#b3b3b3] mt-2">
                  We brought all the Remix goodies over to React Router and made
                  improvements in the process. Now it's time to bring those
                  improved APIs back over to Remix where they started!
                </p>
              </div>
              <div className="box-bottom flex justify-between items-end">
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-[#b3b3b3]">
                    <span className="text-[#ff4d4d] mr-2">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </span>
                    Collaboration Tools
                  </li>
                  <li className="flex items-center text-[#b3b3b3]">
                    <span className="text-[#ff4d4d] mr-2">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </span>
                    Collaboration Tools
                  </li>
                </ul>

                <button className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                  <img src="/assets/up-arrow.png" alt="link" className="w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2 border border-white rounded-[8px] text-white hover:bg-white hover:text-[#2b0000] transition cursor-pointer">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 mb-14 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-4">
              Got a project in mind?
            </h2>
            <h1 className="text-4xl font-bold mb-6">Reserve a Call</h1>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#ff0000] mr-3 mt-1"></i>
                <span>An in depth session to understand your needs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#ff0000] mr-3 mt-1"></i>
                <span>Learn which plan is right for your team</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#ff0000] mr-3 mt-1"></i>
                <span>Get onboarding help</span>
              </li>
            </ul>
            <p className="mb-4">Technical support or some query?</p>
            <a href="#" className="text-[#ffffff] underline">
              Contact support →
            </a>
          </div>
          <div className="lg:w-1/2 bg-[#2b0000] p-8 rounded-[8px] border border-[#2f1f1e]">
            <h2 className="text-xl font-semibold mb-6">
              Tell us about yourself.
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-[#2f1f1e] text-[#ffffff] p-3 rounded-[4px] border border-[#2f1f1e] focus:outline-none focus:ring-2 focus:ring-[#ff0000]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Work Email</label>
                <input
                  type="email"
                  className="w-full bg-[#2f1f1e] text-[#ffffff] p-3 rounded-[4px] border border-[#2f1f1e] focus:outline-none focus:ring-2 focus:ring-[#ff0000]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Company Size</label>
                <select className="w-full bg-[#2f1f1e] text-[#ffffff] p-3 rounded-[4px] border border-[#2f1f1e] focus:outline-none focus:ring-2 focus:ring-[#ff0000]">
                  <option>1-20</option>
                  <option>21-50</option>
                  <option>51-100</option>
                  <option>100+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">How Can We Help?</label>
                <textarea
                  className="w-full bg-[#2f1f1e] text-[#ffffff] p-3 rounded-[4px] border border-[#2f1f1e] focus:outline-none focus:ring-2 focus:ring-[#ff0000]"
                  rows={4}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <p className="text-sm text-[#ffffff]">
                You Can Also Email Us At{" "}
                <span className="font-semibold">Apac@Redtilt.Team</span>
              </p>
              <button
                type="submit"
                className="w-full py-3 bg-[#ff0000] text-[#ffffff] rounded-[4px] font-semibold hover:bg-[#cc0000] transition cursor-pointer"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
