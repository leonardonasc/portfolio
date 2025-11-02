import About from "@/components/about";
import Links from "@/components/links";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row md:gap-x-40 gap-y-20">
        <div className="flex justify-start items-start md:items-end ">
          <About />
        </div>
        <Links />
      </div>

      <div className="hidden md:block">
        {/* <h2 className="absolute right-0 top-1/4 transform rotate-270 text-black opacity-20">&copy; 25</h2> */}
        <div className="border-l-2 border-black absolute right-0 top-1/2 transform -translate-y-1/2 h-[200px] mr-4 opacity-20"></div>
      </div>
      <h2
        className="text-black absolute bottom-5 right-3 text-6xl md:text-9xl opacity-10"
        style={{
          WebkitTextStroke: "2px black",
          color: "transparent",
        }}
      >
        .01
      </h2>
    </div>
  );
}
