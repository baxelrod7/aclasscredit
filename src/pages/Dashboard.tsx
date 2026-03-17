import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to secure login
    window.location.href = "https://www.secureclientaccess.com/";
  };

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navbar />
      
      <div className="pt-56 pb-16 container mx-auto px-4 min-h-screen">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-secondary-foreground/70">
              Sign in to access your credit dashboard
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-navy-light/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-navy-dark border-accent/20 text-white placeholder:text-muted-foreground focus:border-gold focus:ring-gold/20"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-secondary-foreground">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-navy-dark border-accent/20 text-white placeholder:text-muted-foreground focus:border-gold focus:ring-gold/20"
                    required
                  />
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-secondary-foreground/70 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="rounded border-accent/30 bg-navy-dark accent-gold"
                  />
                  Remember me
                </label>
                <a 
                  href="https://www.secureclientaccess.com/" 
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold py-6 text-lg group"
              >
                Sign In
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-navy-light/50 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-secondary-foreground/70 text-sm">
                Don't have an account?{" "}
                <a 
                  href="https://www.secureclientaccess.com/" 
                  className="text-gold hover:text-gold-light font-medium transition-colors"
                >
                  Get Started
                </a>
              </p>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="h-3 w-3" />
              Secured by 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
