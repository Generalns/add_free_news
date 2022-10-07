import NewsCard from "../../components/NewsCard";
import Navbar from "../../components/Navbar";
const Sozcu = ({ data }) => {
	return (
		<div className="bg-white">
			<Navbar />
			<div className="flex justify-center items-center mt-24 mb-24">
				<div className="grid gap-3 sm:gap-8 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 ">
					{data.map(news => {
						return (
							<NewsCard
								key={news.url}
								title={news.title}
								img={news.img}
								url={"/sozcu/" + news.url}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API}/sozcu`);
	const json = await res.json();
	return {
		props: { data: json }, // will be passed to the page component as props
	};
}
export default Sozcu;
