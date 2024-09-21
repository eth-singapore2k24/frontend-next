import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cardholder } from "@phosphor-icons/react";
import { Service } from "@/lib/types";
import { useState } from "react";
import AdvertiserIllustration from "@/assets/onboarding/advertiser.svg";
import PublisherIllustration from "@/assets/onboarding/publisher.svg";
import Image from "next/image";

const ChooseService = () => {
	const [selectedService, setSelectedService] = useState<Service | null>(null);
	return (
		<Card className="rounded-none space-y-5 w-full">
			<CardHeader>
				<CardTitle className="font-display">Choose Your Service</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-row gap-6">
				<ServiceCard
					title="Become an Advertiser"
					description="Advertise ads on other’s website, see how your ads performs with our analytical tools"
					illustration={AdvertiserIllustration}
					onClick={() => setSelectedService("advertiser")}
					isSelected={selectedService === "advertiser"}
				/>
				<ServiceCard
					title="Become a Publisher"
					description="Monetize your site by embedding ads easily, comfortably withdraw money"
					illustration={PublisherIllustration}
					onClick={() => setSelectedService("publisher")}
					isSelected={selectedService === "publisher"}
				/>
			</CardContent>
			<Button className="w-full mt-6 rounded-xl shadow-button text-center text-lg">
				<Cardholder className="w-6 h-6 mr-2" /> Confirm
			</Button>
		</Card>
	);
};

interface ServiceCardProps {
	title: string;
	description: string;
	illustration: string;
	onClick?: () => void;
	isSelected?: boolean;
}

const ServiceCard = (props: ServiceCardProps) => {
	return (
		<div
			className={`
        rounded-xl flex-1 p-4 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:cursor-pointer
        ${props.isSelected && "border-primary -translate-y-1.5 shadow-lg"}
      `}
			onClick={props.onClick}
		>
			<Image
				src={props.illustration}
				className="object-cover w-full"
				alt="advertiser"
			/>
			<div className="mt-2">
				<h2 className="text-xl my-1 font-display">{props.title}</h2>
				<p className="text-muted-foreground w-[28ch] leading-5">
					{props.description}
				</p>
			</div>
		</div>
	);
};

export default ChooseService;
