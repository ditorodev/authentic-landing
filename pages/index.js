export default function IndexPage() {
  return (
    <div className="flex flex-col">
      <img
        className="fixed top-0 bottom-0 left-0 right-0 h-full"
        style={{
          width: "120%",
          zIndex: -10
        }}
        src="/website_bg.png"
      />
      <div className="w-full h-20 font-serif flex flex-row text-white text-3xl p-10">
        <h2>Authentic</h2>
      </div>

      <div className="self-center mt-40">
        <h1 className="text-white font-serif text-center text-5xl px-10">
          The new way to manage luxury assets
        </h1>

        <p
          className="text-center text-white mt-10 text-xl leading-8 mx-auto"
          style={{ width: "calc(100% - 40px)", maxWidth: 600 }}
        >
          Bring your physical products into the digital age with
          blockchain-powered asset management tools.
        </p>
      </div>

      <div className="self-center flex flex-row items-center justify-center mt-14 w-full">
        <form className="w-full mx-auto" style={{ maxWidth: 600 }}>
          <input
            className="py-2 w-2/3 bg-white/30 placeholder-white/50 text-white rounded-full pl-6 pr-12 inline-flex"
            placeholder="michael.scott@email.com"
          />
          <button
            type="submit"
            className="bg-black w-1/3 rounded-full px-4 py-2 text-white -ml-10"
          >
            {" "}
            Get Early Access{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
