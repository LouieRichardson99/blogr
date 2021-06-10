export default function HomeHeroSection() {
  return (
    <section className="h-96 text-white text-center mt-12 relative z-10">
      <p className="text-5xl">A modern publishing platform</p>
      <p className="mt-4">Grow your audience and build your online brand</p>
      <div className="flex mt-10 justify-center">
        <button
          href="/"
          className="py-2 px-4 bg-white rounded-full text-lightRed mr-4 hover:bg-opacity-30 hover:text-white font-semibold"
        >
          Start for Free
        </button>
        <button
          href="/"
          className="py-2 px-4 border-white border-solid border-2 rounded-full hover:bg-white hover:text-lightRed font-semibold"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
