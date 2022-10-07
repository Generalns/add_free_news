import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div className="bg-white w-full flex flex-col justify-center items-center h-screen px-8">
			<Navbar />
			<div className="my-12 sm:my-24">
				<p className="text-2xl sm:text-3xl text-justify">
					This is an ad free news platform. What we do here might not be legal
					so it is an underground club. Şşşş &#129323;
				</p>
				<br></br>
				<br></br>
				<p className="text-2xl sm:text-3xl text-justify">
					You can use the menu to choose newspaper.
				</p>
			</div>
		</div>
	);
}
