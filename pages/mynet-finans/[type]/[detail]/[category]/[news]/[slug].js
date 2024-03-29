import Image from "next/image";
import { useEffect } from "react";
import styles from "../../../../../../styles/Newsdetail.module.css";
import Navbar from "../../../../../../components/Navbar";
const NewsDetail = content => {
	console.log(content);
	content = content.content;
	useEffect(() => {
		const content = document.querySelectorAll(".content p");
		console.log(content);
		for (let i = 1; i < content.length; i++) {
			content[i].classList.add(styles.newsP);
		}
	}, []);
	return (
		<div className="bg-white">
			<Navbar />
			<div className="w-full flex justify-center items-center my-12 sm:my-24 bg-white">
				<div className="w-11/12 xl:w-6/12 border px-2 sm:px-8 py-16 flex flex-col justify-center items-center">
					<div className="w-full sm:w-11/12 h-[30vh] sm:h-[50vh] relative">
						<Image
							src={content.img}
							layout="fill"
							objectFit="cover"
							alt="News Image"
							unoptimized
						></Image>
					</div>
					<p className="text-center text-2xl sm:text-3xl my-8 w-11/12 text-black">
						{content.title}
					</p>
					<div
						className="w-10/12 text-justify content text-sm sm:text-lg text-black"
						dangerouslySetInnerHTML={{ __html: content.content }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default NewsDetail;

export async function getStaticPaths() {
	const contents = await fetch(`${process.env.NEXT_PUBLIC_API}/mynet-finans`);
	const json = await contents.json();
	const urls = await json.map(content => {
		return {
			params: {
				type: content.url.split("/")[1],
				detail: content.url.split("/")[2],
				category: content.url.split("/")[3],
				news: content.url.split("/")[4],
				slug: content.url.split("/")[5],
			},
		};
	});
	return {
		paths: urls,
		fallback: "blocking",
	};
}
export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API}/mynet-finans/${params.type}/${params.detail}/${params.category}/${params.news}/${params.slug}/`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const data = await response.json();

	return {
		props: {
			content: data,
		},
		revalidate: 10,
	};
}
