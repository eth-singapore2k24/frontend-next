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
import { signIn, signOut, useSession } from "next-auth/react"

interface CreateAccountProps {
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
}

const CreateAccount = (props: CreateAccountProps) => {
  const router = useRouter();
  const handleConnect = async () => {
    console.log("hi");

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
          <Cardholder className="w-6 h-6 mr-2" /> Connect Dynamic Wallet
        </Button>
      </CardContent>
      <Separator />
      <div className="mt-3 text-center">
        <Label htmlFor="voting">Here to vote? </Label>
        <Label
          className="underline cursor-pointer"
          onClick={() => router.push("/vote")}
        >
          Create a profile
        </Label>
      </div>
    </Card>
  );
};

export default CreateAccount;
