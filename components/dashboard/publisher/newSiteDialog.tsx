import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderImage from "@/assets/onboarding/header.svg";
import NewSiteIcon from "@/assets/dashboard/newsite.svg";
import Image from "next/image";
const PublishWebsiteDialog = () => {
	const [open, setOpen] = useState(false);
	const [url, setUrl] = useState("");

	async function getContract() {
		const contractAddress = "0xfE3Db170C7f9cfF604aA265627AAc7896a226E2a";
		const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_airDAOSBTAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_governanceTokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "advertiser",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "enum DecentralizedAdPlatform.AdvertiserTier",
          "name": "newTier",
          "type": "uint8"
        }
      ],
      "name": "AdvertiserTierUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "campaignId",
          "type": "uint256"
        }
      ],
      "name": "CampaignApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "advertiser",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "campaignURI",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "enum DecentralizedAdPlatform.AdvertiserTier",
          "name": "tier",
          "type": "uint8"
        }
      ],
      "name": "CampaignProposed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "campaignId",
          "type": "uint256"
        }
      ],
      "name": "CampaignRejected",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "advertiser",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newReputation",
          "type": "uint256"
        }
      ],
      "name": "ReputationUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "advertiserProfiles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "reputation",
          "type": "uint256"
        },
        {
          "internalType": "enum DecentralizedAdPlatform.AdvertiserTier",
          "name": "tier",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "campaignsProposed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "campaignsApproved",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sbtTokenId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "airDAOSBT",
      "outputs": [
        {
          "internalType": "contract IAirDAOSBT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "campaignIdCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "campaigns",
      "outputs": [
        {
          "internalType": "address",
          "name": "advertiser",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "campaignURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "minReputation",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "budget",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountSpent",
          "type": "uint256"
        },
        {
          "internalType": "enum DecentralizedAdPlatform.CampaignStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "votesFor",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "votesAgainst",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "votingEndTime",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "privateLabel",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "publicLabel",
          "type": "string"
        },
        {
          "internalType": "enum DecentralizedAdPlatform.AdvertiserTier",
          "name": "tier",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_campaignId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "newMetadataURI",
          "type": "string"
        }
      ],
      "name": "executeVotingResult",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "advertiser",
          "type": "address"
        }
      ],
      "name": "getAdvertiserBenefits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "discountPercentage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxCampaigns",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_campaignId",
          "type": "uint256"
        }
      ],
      "name": "getVotingResult",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votesFor",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "votesAgainst",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "governanceToken",
      "outputs": [
        {
          "internalType": "contract IAirDAOGovernanceToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimumQuorum",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_campaignURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_minReputation",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_budget",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_privateLabel",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_publicLabel",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_metadataURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_reputation",
          "type": "uint256"
        }
      ],
      "name": "proposeCampaign",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "advertiser",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "newMetadataURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "newReputation",
          "type": "uint256"
        }
      ],
      "name": "updateAdvertiserProfile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_campaignId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_approve",
          "type": "bool"
        }
      ],
      "name": "voteOnCampaign",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingPeriod",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  if (typeof window.ethereum !== 'undefined') {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  }
}
	async function proposeCampaign(campaignURI = "https://google.comn", minReputation=12, startTime=123, endTime=1234, budget=10, privateLabel="mac", publicLabel="computer", metadataURI="ipfssomething", reputation =120) {
  const contract = await getContract();
  try {
    const tx = await contract?.proposeCampaign(
      campaignURI,
      minReputation,
      startTime,
      endTime,
      budget,
      privateLabel,
      publicLabel,
      metadataURI,
      reputation
    );
    await tx.wait();
    console.log("Campaign proposed successfully");
  } catch (error) {
    console.error("Error proposing campaign:", error);
  }
}
	const handlePublish = async () => {
		console.log("Publishing website:", { url });
		await proposeCampaign()
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="w-full bg-[#EAE9D9] text-[#6F5644] hover:bg-[#D9D8C8] text-seminbold"
				>
					<div className="flex items-center justify-center space-x-2">
						<Image src={NewSiteIcon} className="w-5 h-5" alt="Add Site" />
						<span>Add a new site</span>
					</div>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] p-0">
				<div className="relative">
					<Image
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
					<h2 className="text-2xl font-semibold mb-2">Publish a new website</h2>
					<p className="text-sm text-gray-600 mb-4">
						Help us embed ads on your sites by providing following details
					</p>
					<div className="space-y-4">
						<div>
							<label
								htmlFor="url"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Your site URL
							</label>
							<Input
								id="url"
								placeholder="www.example.com"
								value={url}
								onChange={(e) => setUrl(e.target.value)}
							/>
						</div>
						<Button
							className="w-full bg-[#6F5644] text-white hover:bg-[#5A4536]"
							onClick={handlePublish}
						>
							Publish the website
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PublishWebsiteDialog;
