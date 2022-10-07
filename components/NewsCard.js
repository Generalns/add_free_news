import Link from "next/link";
import Image from "next/image";
const NewsCard = ({ img, title, url }) => {
	return (
		<div className="rounded sm:rounded-lg bg-slate-200 overflow-hidden  w-11/12  sm:h-full sm:w-80 ">
			<Link href={url}>
				<a className="sm:block flex">
					{!img.includes("undefined") && !img.includes(".gif") && (
						<div className="w-full h-32 sm:h-48 relative">
							<Image
								src={img}
								layout="fill"
								objectFit="cover"
								loading="lazy"
								alt="news-img"
							></Image>
						</div>
					)}
					<div className="p-1 sm:px-4 w-full py-3 sm:py-4 flex justify-center items-center">
						<p className="text-sm sm:text-2xl   w-full text-black text-center">
							{title}
						</p>
					</div>
				</a>
			</Link>
		</div>
	);
};
export default NewsCard;
