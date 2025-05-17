import Button from "@/components/button/button";
import React from "react";

const SignUpBar = () => {
   return (
      <div className="w-full h-fit bg-[linear-gradient(90deg,#af2896,#509bf5)] px-6 py-3 flex justify-between items-center">
         <div className="flex flex-col text-sm text-white">
            <h5 className="font-bold">Preview of Spotify</h5>
            <p className="text-[13px]">
               Sign up to get unlimited songs and podcasts with occasional ads.
               No credit card needed.
            </p>
         </div>
         
         <Button buttonLabel="Sign up free" size="large" type="primary" />
      </div>
   );
};

export default SignUpBar;
