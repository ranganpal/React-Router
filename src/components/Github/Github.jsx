import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData()

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      <h1 className="m-3">
        Github Repositories: {data.public_repos}
      </h1>
      <h1 className="m-3">
        Github Name: {data.name}
      </h1>
      <div className="flex justify-center">
        <img src={data.avatar_url} alt="github" />
      </div>
    </div>
  )
}

export async function githubInfoLoader() {
  console.log("data fetching start");
  const res = await fetch("https://api.github.com/users/ranganpal")
  return res.json();
}