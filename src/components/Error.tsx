import useSWR from "swr";

const fetcher = (url:any) => fetch(url).then((res) => res.json());
export default function NoMatch() {
    const { data, error } = useSWR(
        "https://api.github.com/repos/vercel/swr",
        fetcher
      );
      if (error) return (
        <><h1>❌ An error has occurred.</h1></>);
      if (!data) return (
        <><h1>Loading... 🐝 </h1></>);
    return (
        <>
         <h1>404 page not found</h1>
         <h1>{data.name}</h1>
         <p>{data.description}</p>
         <strong>👁 {data.subscribers_count}</strong>{" "}
         <strong>✨ {data.stargazers_count}</strong>{" "}
         <strong>🍴 {data.forks_count}</strong>
      </>
    )}
