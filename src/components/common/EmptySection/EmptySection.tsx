import Image from "next/image";
import React from "react";
import EmptySectionImage from "@/public/emptySection.svg";

const EmptySection = () => {
  return (
    <div>
      <Image src={EmptySectionImage} width={1000} height={1000} alt="Empty" className="w-full h-full object-contain" />
    </div>
  );
};

export default EmptySection;
