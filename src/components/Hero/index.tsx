import Image from "next/image";
import DynamicText from "./dynamicText";

export default function Hero(): React.JSX.Element {
  return (
    <div className="text-champagne-pink flex items-center m-20">
      {" "}
      <div className="container w-full flex flex-row items-center p-10 justify-center">
        <div id="intro" className="text-2xl sm:text-3xl md:text-4xl p-5">
          <h1 className="">Hello, I'm</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-papaya-whip">
            Andrew Marek
          </h1>
          <DynamicText /> 
        </div>

        <div>
          <Image
            alt="me_downscaled"
            height={640}
            src="/me_cleaned_up.png"
            width={640}
          />
        </div>
      </div>
    </div>
  );
}
