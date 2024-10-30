// import React, { ReactNode } from "react";
// import { CardTitle, CardDescription } from "./Card";

// interface ImageCardProps {
//   children?: ReactNode;
//   className?: string;
//   cardTitle?: string;
//   cardDesc?: string;
//   cardImg?: string;
// }

// const ImageCard = ({ cardTitle, cardDesc, cardImg }: ImageCardProps) => {
//   const backgroundImage = cardImg
//     ? `url('${cardImg}')`
//     : "url('https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";

//   return (
//     <div
//       className={`w-[466px] h-[659px] relative overflow-hidden block z-10 bg-cover bg-no-repeat bg-center`}
//       style={{
//         backgroundImage,
//       }}
//     >
//       {/* <div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[#000] from-10% before:to-[#070707] to-[80%] before:opacity-75 before:z-[-5]"></div> */}
//       <div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t imageGradient before:z-[-5]"></div>
//       <section className="test p-[32px] w-full h-full flex flex-col justify-end font-karla">
//         <CardTitle className="text-[24px] font-bold text-white mt-4 mb-6">
//           {cardTitle}
//         </CardTitle>
//         <CardDescription className="text-[20px] leading-[30px]">
//           {cardDesc}
//         </CardDescription>
//       </section>
//     </div>
//   );
// };

// export default ImageCard;

// import React, { ReactNode } from "react";
// import { CardTitle, CardDescription } from "./Card";

// interface ImageCardProps {
//   children?: ReactNode;
//   className?: string;
//   cardTitle?: string;
//   cardDesc?: string;
//   cardImg?: string;
// }

// const ImageCard = ({
//   cardTitle,
//   cardDesc,
//   cardImg,
//   children,
// }: ImageCardProps) => {
//   const backgroundImage = cardImg
//     ? `url('${cardImg}')`
//     : "url('https://images.unsplash.com/photo-1588534331122-77ac46322dd2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

//   return (
//     <div className="border border-transparent hover:bg-gradient-to-r from-[#B3CEFB] to-[#4285F4] w-[466px] mobile:w-full h-[659px] rounded-radius-xl">
//       <div
//         className={`relative w-full h-full rounded-radius-xl overflow-hidden block z-10 bg-cover bg-no-repeat bg-center border-2 border-transparent transition-all duration-300 ease-in-out`}
//         style={{
//           backgroundImage,
//         }}
//       >
//         <div
//           className="absolute inset-0 z-[-5] transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-black/50 to-black"></div>
//         <section className="p-[32px] w-full h-full flex flex-col justify-end font-karla hover:bg-gradient-to-b hover:from-black/60 hover:via-black/70 hover:to-[#070707]">
//           <CardTitle className="text-[24px] font-bold text-white mt-4 mb-6">
//             {cardTitle}
//           </CardTitle>
//           <CardDescription className="text-[20px] leading-[25px] text-white">
//             {cardDesc}
//           </CardDescription>
//           <div>{children}</div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ImageCard;

import React, { type ReactNode } from "react";
import { CardTitle, CardDescription } from "./Card";

interface ImageCardProps {
  children?: ReactNode;
  className?: string; // Allows passing custom classes
  cardTitle?: string;
  cardDesc?: string;
  cardImg?: string;
}

const ImageCard = ({
  cardTitle,
  cardDesc,
  cardImg,
  children,
  className = "", // Default to empty string
}: ImageCardProps) => {
  //   const backgroundImage = cardImg
  //     ? `url('${cardImg}')`
  //     : "url('https://images.unsplash.com/photo-1588534331122-77ac46322dd2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

  const backgroundImage = `url('${cardImg}')`;
  return (
    <div
      className={`hover:bg-gradient-to-r from-[#B3CEFB] to-[#4285F4] rounded-radius-xl transition-all duration-300 ease-in-out ${className}`}
    >
      <div
        className={`relative w-full h-full rounded-radius-xl overflow-hidden block z-10 bg-cover bg-no-repeat bg-center border-2 border-transparent transition-all duration-300 ease-in-out`}
        style={{
          backgroundImage,
        }}
      >
        <div className="absolute inset-0 z-[-5] transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <section className="p-[32px] w-full h-full flex flex-col justify-end font-karla hover:bg-gradient-to-b hover:from-black/60 hover:via-black/70 hover:to-[#070707]">
          <CardTitle className="text-[24px] font-bold text-white mt-4 mb-6">
            {cardTitle}
          </CardTitle>
          <CardDescription className="text-[20px] leading-[25px] text-white">
            {cardDesc}
          </CardDescription>
          <div>{children}</div>
        </section>
      </div>
    </div>
  );
};

export default ImageCard;
