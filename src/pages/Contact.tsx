import React from "react";
import vanilla from "./../assets/Vanilla-png-1-min.png";
export const Contact = () => {
  return (
    <div className="h-screen bg-primary flex">
      <div className="flex-1 flex items-center justify-center">
        <img src={vanilla} className="h-[90%]" alt="" />
      </div>
      <div className="flex-1 h-full bg-secondary flex flex-col justify-center prose max-w-none px-16">
        <h1>Formulaire de contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          possimus qui minima harum aliquam officia, non tenetur officiis
          voluptatibus vitae voluptates adipisci exercitationem autem cum
          veritatis nihil eaque quae nisi?
        </p>
      </div>
    </div>
  );
};
