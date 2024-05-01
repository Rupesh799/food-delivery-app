import Image from "next/image";
import Slider from "@/app/components/Slider";
import Featured from "@/app/components/Featured";
import Offers from "@/app/components/Offers";

export default function Home() {
  return (
   <div>
     <Slider/>
     <Featured/>
     <Offers/>

   </div>
  );
}
