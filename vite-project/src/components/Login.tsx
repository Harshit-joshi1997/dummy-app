"use client"; // Skip for Vite, include if using Next.js

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShake(true);
    setTimeout(() => {
      setShake(false);
      setIsSubmitting(false);
      console.log("Login submitted:", { email, password });
    }, 1500);
  };

  return (
    <div className="min-h-screen w-342 flex items-center  justify-center overflow-hidden p-4 -mt-8 -ml-20">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/forest.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay for better readability */}
      <div className="absolute inset-0 bg-green/600" />

      {/* 🔹 Login Card */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md relative z-10"
        >
          <Card className="shadow-lg backdrop-blur-md bg-blue/800 dark:bg-blue-900/80">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-color-white-800 font-bold">Welcome Back</CardTitle>
              <CardDescription className="text-center text-sm text-color-white-800">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                <motion.div
                  animate={shake ? { x: [0, -10, 10, -10, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                   <Link to="/dashboard">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting || !email || !password}
                    >
                      {isSubmitting ? (
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : null}
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </form>
              <div className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline hover:text-primary">
                  Sign up
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}






