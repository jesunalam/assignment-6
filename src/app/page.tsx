import  { Suspense } from "react";
import HeroBanner from "./component/hero";
import UserApi from "./component/userApi";


const HomePage = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
       <Suspense fallback={<div className="text-center py-10 text-white font-bold">Loading Workouts...</div>}>
        <UserApi />
      </Suspense>
      
    </div>
  );
};

export default HomePage;
