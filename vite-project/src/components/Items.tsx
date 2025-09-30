"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const products = [
  {
    name: "SonyX 17",
    tagline: "All out Pro.",
    price: "₹134900.00",
    image: "/public/p4.jpg", // put your image in public/images folder
  },
  {
    name: "Pisco 17",
    tagline: "The thinnest",
    price: " ₹119900.00",
    image: "/public/p2.jpg",
  },
  {
    name: "True 171",
    tagline: "Magichromatic.",
    price: " ₹82900.00",
    image: "/public/p3.jpg",
  },
  {
    name: "TMega",
    tagline: "Perfection",
    price: " ₹46900.00",
    image: "/public/p1.jpg",
  },
  {
    name: "SonyX2",
    tagline: "Pros choice.",
    price: "₹154900.00",
    image: "/public/p6.jpg", // put your image in public/images folder
  },
  {
    name: "Pisco 2",
    tagline: "Powerpacked",
    price: " ₹129900.00",
    image: "/public/p7.jpg",
  },
  {
    name: "True 2",
    tagline: "Stunning.",
    price: " ₹92900.00",
    image: "/public/p8.jpg",
  },
  {
    name: "TMega 2",
    tagline: "Ultimate",
    price: " ₹56900.00",
    image: "/public/p9.jpg",
  }

];

export default function Items() {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl font-semibold mb-8">
        The latest.{" "}
        <span className="text-pink-600">Discover what’s fresh and festive.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <CardContent className="flex flex-col items-center">
              <div className="w-40 h-40 mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" w-[2000px] max-h-full object-contain"
                />
              </div>
              <CardHeader className="text-center p-0 -ml-20">
                <CardTitle className="text-lg font-bold">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {product.tagline}
                </CardDescription>
                <p className="mt-2 font-medium">{product.price}</p>
              </CardHeader>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
