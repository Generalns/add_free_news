import Image from "next/image";

const NewspaperCard = ({ title, image }) => {
	console.log(image);
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="border">
				<Image src={`${image}`} width={"150"} height={"150"}></Image>
			</div>
			<p className="text-black">{title}</p>
		</div>
	);
};
export default NewspaperCard;
