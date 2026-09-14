import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(props) {
    // const [data, setData] = useState(0);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sonusam009')
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             setData(response);
    //         })
    // },[])

    const githubData = useLoaderData();

    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {githubData.followers}</div>
            <img src={githubData.avatar_url} alt="git-picture" width={300} />
        </>
    );
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sonusam009');
    return response.json();
}