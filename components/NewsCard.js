import Link from "next/link";
const NewsCard = ({ img, title, url }) => {
	return (
		<div className="rounded-2xl bg-slate-200 overflow-hidden w-40 sm:w-80 ">
			<Link href={url}>
				<a>
					{!img.includes("undefined") && !img.includes(".gif") && (
						<img src={img} className="w-full"></img>
					)}
					<div className="p-1 sm:px-4 w-full py-3 sm:py-4 flex justify-center items-center">
						<p className="text-sm sm:text-2xl   w-full text-center">{title}</p>
					</div>
				</a>
			</Link>
		</div>
	);
};
export default NewsCard;
