import Head from "next/head";

export default function Home({ posts }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Serverland</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold pt-8">
                    Welcome to <a className="text-blue-600">My Blog!</a>
                </h1>

                <p className="mt-3 text-2xl">
                    This application is dedicated to fulfill{" "}
                    <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                        WIUT
                    </code>
                    's requirements
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full p-8">
                    {posts.map((post) => (
                        <a
                            href={"/post/" + post._id}
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">{post.title} &rarr;</h3>
                            <p className="mt-4 text-xl">{post.snippet}</p>
                        </a>
                    ))}
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <div className="flex items-center justify-center">
                    Created by <div className="font-bold m-1">00010023</div>
                </div>
            </footer>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/api/posts");
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}
