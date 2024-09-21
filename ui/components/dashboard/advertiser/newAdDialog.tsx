import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import HeaderImage from "@/assets/onboarding/header.svg";
import NewAdIcon from "@/assets/dashboard/newsite.svg";

const AddNewAdDialog = () => {
	const [open, setOpen] = useState(false);
	const [adName, setAdName] = useState("");
	const [link, setLink] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [budget, setBudget] = useState("");
	const [categories, setCategories] = useState<string[]>([]);
	const [newCategory, setNewCategory] = useState("");

	const handleAddCategory = () => {
		if (newCategory.trim() !== "") {
			setCategories([...categories, newCategory.trim()]);
			setNewCategory("");
		}
	};

	const handleRemoveCategory = (category: string) => {
		setCategories(categories.filter((c) => c !== category));
	};

	const handlePublish = () => {
		console.log("Publishing ad:", {
			adName,
			link,
			imageUrl,
			budget,
			categories,
		});
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="w-full bg-[#EAE9D9] text-[#6F5644] hover:bg-[#D9D8C8] text-semibold"
				>
					<div className="flex items-center justify-center space-x-2">
						<img src={NewAdIcon} className="w-5 h-5" alt="Add Ad" />
						<span>Add a new ad</span>
					</div>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] p-0">
				<div className="relative">
					<img
						src={HeaderImage}
						className="h-[14rem] w-full object-cover object-top"
						alt="header"
					/>
					<Button
						variant="ghost"
						className="absolute top-2 left-2 text-primary bg-white h-6 p-2 rounded-full"
						onClick={() => setOpen(false)}
					>
						← Go back
					</Button>
				</div>
				<div className="p-6">
					<h2 className="text-2xl font-semibold mb-2">Advertise your new ad</h2>
					<p className="text-sm text-gray-600 mb-4">
						Help us embed your ads on others website
					</p>
					<div className="space-y-4">
						{/* Other input fields remain the same */}
						<div>
							<label
								htmlFor="adName"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Your ad name
							</label>
							<Input
								id="adName"
								placeholder="Amazon Ad"
								value={adName}
								onChange={(e) => setAdName(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="link"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Attached link
							</label>
							<Input
								id="link"
								placeholder="www.amazon.in"
								value={link}
								onChange={(e) => setLink(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="imageUrl"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Ad image URL
							</label>
							<Input
								id="imageUrl"
								placeholder="https://example.com/ad-image.jpg"
								value={imageUrl}
								onChange={(e) => setImageUrl(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="budget"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Maximum advertisement budget
							</label>
							<div className="flex items-center">
								<span className="mr-2">ETH</span>
								<Input
									id="budget"
									placeholder="0.0067"
									value={budget}
									onChange={(e) => setBudget(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Enter relevant categories
							</label>
							<div className="flex items-center mb-2">
								<Input
									placeholder="Like: Technology"
									value={newCategory}
									onChange={(e) => setNewCategory(e.target.value)}
									className="mr-2"
								/>
								<Button variant="outline" size="sm" onClick={handleAddCategory}>
									Add this topic
								</Button>
							</div>
							<div className="flex flex-wrap gap-2 mt-2">
								{categories.map((category, index) => (
									<div
										key={index}
										className="flex items-center bg-gray-100 rounded-full px-3 py-1"
									>
										<span className="mr-2">{category}</span>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleRemoveCategory(category)}
											className="p-0 h-auto"
										>
											<X className="h-4 w-4" />
										</Button>
									</div>
								))}
							</div>
						</div>
						<Button
							className="w-full bg-[#6F5644] text-white hover:bg-[#5A4536]"
							onClick={handlePublish}
						>
							Advertise this ad
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default AddNewAdDialog;
