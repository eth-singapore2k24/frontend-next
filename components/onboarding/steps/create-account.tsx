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
import { useEffect } from "react";
import { useState } from "react";
interface CreateAccountProps {
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
}

const CreateAccount = (props: CreateAccountProps) => {
const router = useRouter();
const { data: session,status } = useSession()
const [loading, setLoading] = useState(false);
useEffect(() => {
  if (status === "authenticated"&&session) {
    props.setCurrentStepIndex(props.currentStepIndex + 1);

  }}, [status, session, props]);
	const handleConnect = async () => {
    setLoading(true);
    try {
      await signIn("worldcoin", {
        redirect: false,
      });}catch(e){
        console.log(e);
      }finally{
        setLoading(false);
      }
    };
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
