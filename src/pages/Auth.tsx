import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/admin");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>APEX BOOKS Admin</CardTitle>
          <CardDescription>Sign in to manage leads and consultations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="flex justify-center">
              <SignIn 
                routing="path"
                path="/auth"
                signUpUrl="/auth"
                afterSignInUrl="/admin"
                fallbackRedirectUrl="/admin"
              />
            </TabsContent>
            <TabsContent value="signup" className="flex justify-center">
              <SignUp 
                routing="path"
                path="/auth"
                signInUrl="/auth"
                afterSignUpUrl="/admin"
                fallbackRedirectUrl="/admin"
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
