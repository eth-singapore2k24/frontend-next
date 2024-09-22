import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Cardholder } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { signIn,  useSession } from "next-auth/react"

interface CreateAccountProps {
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
}

const CreateAccount = (props: CreateAccountProps) => {

  const handleConnect = async () => {
    console.log("hi");
const handleWorldCoinConnect = async () => {
		console.log("hi");
		try {
			const sessionx = await signIn("worldcoin");
			console.log("session: ", sessionx);
			const { data: session } = useSession();
			console.log("sessionUser: ", session.user);
			if (session) {
				router.push("/onboard");
			}
		} catch (error) {
			console.error("error: ", error);
		}
	}
    try {
      const sessionx = await signIn("worldcoin")
      console.log("session: ", sessionx);
      const { data: session } = useSession()
      console.log("sessionUser: ", session.user);
    } catch (error) {
      console.error("error: ", error);
    }
  }
  return (
    <Card className="rounded-none space-y-5 ">
      <CardHeader>
        <CardTitle className="font-display">Create your account</CardTitle>
        <CardDescription>
          Help us create your account by choosing an available username and
          connecting your wallet
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <Label htmlFor="username">Your username</Label>
				<Input id="username" placeholder="Enter your username here" /> */}
        <Button
          onClick={handleConnect}
          className="w-full mt-0 rounded-xl shadow-button text-center text-lg"
        >
          <Cardholder className="w-6 h-6 mr-2" /> Connect to WorldCoin
        </Button>
      </CardContent>      
    </Card>
  );
};

export default CreateAccount;
