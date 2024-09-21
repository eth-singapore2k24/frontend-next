import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import NewAdDialog from "./newAdDialog";
interface Ad {
	id: string;
	url: string;
	name: string;
}

const YourAds: React.FC = () => {
	const [ads, setAds] = useState<Ad[]>([
		{ id: "1", url: "www.example.com", name: "amazon ad" },
		{ id: "2", url: "www.example2.com", name: "mega" },
		{ id: "3", url: "www.example3.com", name: "sale ad" },
		{ id: "4", url: "www.example4.com", name: "jumbo ad" },
		{ id: "5", url: "www.example5.com", name: "flipkart ad" },
	]);

	const [selectedAd, setSelectedAd] = useState<Ad | null>(null);

	const handleAdClick = (ad: Ad) => {
		setSelectedAd(ad);
	};

	const handleDeleteAd = (adId: string) => {
		setAds(ads.filter((ad) => ad.id !== adId));
		if (selectedAd && selectedAd.id === adId) {
			setSelectedAd(null);
		}
	};

	return (
		<div className="flex h-full bg-white rounded-lg shadow-lg overflow-hidden">
			<div className="w-64 bg-[#FAF9F4] p-4 border-r border-[#ECEBD4]">
				<h2 className="text-xl font-semibold mb-4">Your Ads</h2>
				<div className="space-y-2 mb-4">
					{ads.map((ad) => (
						<div
							key={ad.id}
							className={`p-2 rounded-lg cursor-pointer ${
								selectedAd?.id === ad.id ? "bg-[#D9D8C8]" : "hover:bg-[#EAE9D9]"
							}`}
							onClick={() => handleAdClick(ad)}
						>
							<span className="truncate">{ad.name}</span>
						</div>
					))}
				</div>
				<NewAdDialog />{" "}
			</div>

			<div className="flex-1 p-6">
				{selectedAd ? (
					<div>
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center">
								<div className="w-12 h-12 bg-[#6F5644] rounded-2xl mr-4"></div>
								<div>
									<h2 className="text-xl font-semibold">{selectedAd.name}</h2>
									<p className="text-sm text-gray-600">
										Attached Link - {selectedAd.url}
									</p>
								</div>
							</div>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => handleDeleteAd(selectedAd.id)}
								className="text-red-500 hover:bg-red-100"
							>
								<Trash2 className="h-5 w-5 mr-2" />
								Delete Ad
							</Button>
						</div>
					</div>
				) : (
					<div className="flex items-center justify-center h-full text-gray-500">
						Select a ad to view details
					</div>
				)}
			</div>
		</div>
	);
};

export default YourAds;
