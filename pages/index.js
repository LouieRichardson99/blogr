import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeHeroSection from "../components/HomeHeroSection";

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-gradient-to-r rounded-bl-veryLarge from-grdVLightRed to-grdLightRed relative">
          <Navbar />
          <HomeHeroSection />
        </div>
      </div>
      <main>
        <section className="mt-28">
          <p className="text-center text-veryDarkBlue text-3xl mb-16 font-semibold">
            Designed for the future
          </p>
          <div className="flex max-w-6xl mx-auto">
            <div className="text-gray-600 max-w-lg ml-10">
              <h2 className="text-veryDarkBlue mb-4 text-xl font-semibold">
                Introducing an extensible editor
              </h2>
              <p className="mb-10">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
              <h2 className="text-veryDarkBlue mb-4 text-xl font-semibold">
                Robust content management
              </h2>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
            <div>
              <img
                className="transform scale-125 translate-x-36 -translate-y-16"
                src="./images/illustration-editor-desktop.svg"
              />
            </div>
          </div>
        </section>
        <section className="mt-36">
          <div className="justify-center flex bg-gradient-to-r from-veryDarkGrayBlue to-veryDarkDesatBlue rounded-bl-veryLarge rounded-tr-veryLarge ">
            <div className="relative">
              <img
                className="-mt-16 -mb-28 z-10 relative"
                src="./images/illustration-phones.svg"
              />
            </div>
            <div className="text-white max-w-md ml-16 my-auto mr-16 z-20 relative">
              <h2 className="text-3xl font-semibold">
                State of the Art Infrastructure
              </h2>
              <p className="mt-6">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-36 mb-24">
          <div className="flex justify-center relative">
            <div className="-mr-16">
              <img
                className="transform scale-110 xl:scale-90 -translate-x-20"
                src="./images/illustration-laptop-desktop.svg"
              />
            </div>
            <div className="text-gray-600 max-w-md my-auto mr-10">
              <h3 className="text-veryDarkBlue mb-4 text-xl font-semibold">
                Free, open, simple
              </h3>
              <p className="mb-16">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
              <h3 className="text-veryDarkBlue mb-4 text-xl font-semibold">
                Powerful tooling
              </h3>
              <p>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
