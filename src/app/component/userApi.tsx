
import CardData from "./cardData";
// import CardData from "./cardData";
import { IExercise } from "./user";

const userPromise = async (): Promise<IExercise[]> => {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog",{
      cache: "force-cache"});
    return res.json();
  } catch {
    throw new Error("Failed to fetch fitlog data");
  }
};

const UserApi = async () => {
  const allData = await userPromise();
  console.log("Server Log Data:", allData); //

  return (
    <>
      <div className="w-4/5 mx-auto mt-16">
        <h1 className="font-bold text-[30px] leading-[36px] tracking-[-0.75px] uppercase">
          THE LIBRARY
        </h1>
        <p className="text-[14px]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4/5 mx-auto px-4 pt-10">
        {allData.map((data) => (
          <CardData key={data.id} data={data} />
          // <WorkOutPage key={data.id} data={data}></WorkOutPage>
        ))}
      </div>
    </>
  );
};

export default UserApi;
