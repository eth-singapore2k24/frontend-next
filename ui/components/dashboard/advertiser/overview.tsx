import React from "react";
import OverviewCard from "../card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface CardData {
	title: string;
	unit: string;
}

const Overview: React.FC = () => {
	const cardData: CardData[] = [
		{ title: "Your Earnings", unit: "ETH" },
		{ title: "Active Sites", unit: "ETH" },
		{ title: "Revenue", unit: "ETH" },
		{ title: "New Signups", unit: "No." },
		{ title: "Customer Satisfaction", unit: "ETH" },
		{ title: "Pending Tasks", unit: "ETH" },
	];

	const truncateAddress = (address: string) => {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	};

	return (
		<div className="w-[1200px] bg-white p-8 rounded-lg shadow-lg">
			<div className="flex justify-between items-center mb-8">
				<div className="flex items-center">
					<div className="w-12 h-12 bg-primary rounded-2xl mr-4"></div>
					<div>
						<h1 className="text-xl font-display ">Welcome Prakhar,</h1>
						<p className="text-gray-600 text-primary text-base">
							View your cumulative website performance
						</p>
					</div>
				</div>
				<div className="flex items-center">
					<div className="flex flex-col items-end mr-2">
						<span className="text-sm text-gray-600">
							{truncateAddress("0xdjkaf....dksalf")}
						</span>
						<span className="text-xs text-gray-500">Balance : 0.5 ETH</span>
					</div>
					<Button variant="ghost" size="icon" className="h-8 w-8">
						<Copy className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-3 grid-rows-2 gap-8">
				{cardData.map((card, index) => (
					<OverviewCard key={index} title={card.title} unit={card.unit} />
				))}
			</div>
		</div>
	);
};

export default Overview;
