import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  await wait(1000);
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  throw new Error("Yo bootyhole stank!");
  return <div>{JSON.stringify(data)}</div>;
};

export default page;
