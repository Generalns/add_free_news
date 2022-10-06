import NewsCard from "../../components/NewsCard";
import Navbar from "../../components/Navbar";
const Karar = ({ data }) => {
	console.log(data);

	return (
		<>
			<Navbar />
			<div className="flex justify-center items-center mt-24 mb-24">
				<div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 ">
					{data.map(news => {
						return (
							<NewsCard
								title={news.title}
								img={news.img}
								url={"/karar/" + news.url}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
export async function getServerSideProps(context) {
	const res = await fetch("http://localhost:8000/karar");
	const json = await res.json();
	return {
		props: { data: json }, // will be passed to the page component as props
	};
}

export default Karar;
