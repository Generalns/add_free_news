import NewsCard from "../../components/NewsCard";
import Navbar from "../../components/Navbar";
const Aydinlik = ({ data }) => {
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
								img={"https://img.aydinlik.com.tr/rcman" + news.img}
								url={"/aydinlik/" + news.url}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
export async function getServerSideProps(context) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API}/aydinlik`);
	const json = await res.json();
	return {
		props: { data: json }, // will be passed to the page component as props
	};
}

export default Aydinlik;
