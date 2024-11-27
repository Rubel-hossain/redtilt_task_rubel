import React from "react";

// Define the type of props
interface PartnersProps {
  partners: string[]; // Array of image URLs
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  return (
    <section id="partners" className="flex flex-wrap justify-center items-center space-x-4 space-y-4 py-10">
      {partners.map((partner, index) => (
        <div key={index} className="px-8"> 
           <img src={partner} alt={`Partner ${index + 1}`} className="h-12 md:h-16" />
        </div>
      ))}
    </section>
  );
};

export default Partners;

