import NewsCard from "../../components/NewsCard";
import Navbar from "../../components/Navbar";
const NtvPara = ({ data }) => {
	console.log(data);

	return (
		<div className="bg-white">
			<Navbar />
			<div className="flex justify-center items-center mt-24 mb-24 bg-white">
				<div className="grid gap-3 sm:gap-8 bg-white xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 ">
					{data.map(news => {
						return (
							<div
								className="flex flex-col justify-center items-center sm:block"
								key={news.url}
							>
								<NewsCard
									title={news.title}
									img={news.img}
									url={"/ntv-para/" + news.url}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export async function getServerSideProps(context) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API}/ntv-para`);
	const json = await res.json();
	console.log(json);
	return {
		props: { data: json }, // will be passed to the page component as props
	};
}

export default NtvPara;
