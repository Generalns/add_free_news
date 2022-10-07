import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import NewspaperCard from "../components/NewspapersCard";

export default function Home() {
	return (
		<div className="bg-white w-full flex flex-col justify-center items-center h-screen px-8 overscroll-y-none">
			<Navbar />
			<div className="mt-24 sm:my-12 sm:my-24 grid gap-8 grid-cols-2 sm:grid-cols-4 ">
				<Link href={"/aydinlik"}>
					<a>
						<NewspaperCard title={"Aydınlık"} image={"/images/aydinlik.jpg"} />
					</a>
				</Link>
				<Link href={"/hurriyet"}>
					<a>
						<NewspaperCard title={"Hürriyet"} image={"/images/hurriyet.jpg"} />
					</a>
				</Link>
				<Link href={"/kamubulteni"}>
					<a>
						<NewspaperCard
							title={"Kamu Bülteni"}
							image={"/images/kamubulteni.jpg"}
						/>
					</a>
				</Link>
				<Link href={"karar"}>
					<a>
						<NewspaperCard title={"Karar"} image={"/images/karar.jpg"} />
					</a>
				</Link>
				<Link href={"mynet-finans"}>
					<a>
						<NewspaperCard
							title={"Mynet Finans"}
							image={"/images/mynet-finans.png"}
						/>
					</a>
				</Link>
				<Link href={"ntv-para"}>
					<a>
						<NewspaperCard title={"NTV Para"} image={"/images/ntv-para.png"} />
					</a>
				</Link>
				<Link href={"sozcu"}>
					<a>
						<NewspaperCard title={"Sözcü"} image={"/images/sozcu.png"} />
					</a>
				</Link>
			</div>
		</div>
	);
}
