import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Poster() {
  return (
    <div className="relative w-340 h-[500px] bg-black flex items-center justify-center overflow-hidden -mt-7 -ml-17">
      <img src="/landscape.jpg" alt="iPhone 17 Pro" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/iphone-17-pro.jpg')" }}
      />
      <div className="relative z-10 text-center text-white">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-white whitespace-wrap overflow-hidden text-ellipsis">
            Your  matters for us
           </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">All out. Pro.</p>
            <div className="space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Learn more
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Buy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}