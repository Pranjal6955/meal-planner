import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Calendar, ChartBar, Users, Utensils, Zap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Plan Your Meals,
              <span className="block text-primary">Track Your Nutrition</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive meal planning platform that helps you create balanced meals, 
              track your nutritional intake, and achieve your health goals with ease.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/sign-up">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need for healthy meal planning
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features designed to make meal planning simple and effective
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Smart Meal Planning</CardTitle>
                <CardDescription>
                  Create balanced meals with our extensive food database and nutritional information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ChartBar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Nutrition Tracking</CardTitle>
                <CardDescription>
                  Monitor your daily intake of calories, protein, carbs, and other nutrients
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Meal Scheduling</CardTitle>
                <CardDescription>
                  Plan your meals ahead of time with our intuitive calendar interface
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Apple className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Food Database</CardTitle>
                <CardDescription>
                  Access thousands of foods with detailed nutritional information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Admin tools for managing food categories, serving units, and user data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Fast & Responsive</CardTitle>
                <CardDescription>
                  Built with modern technologies for a smooth and fast user experience
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to start your healthy journey?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of users who are already planning their meals better
            </p>
            <div className="mt-10">
              <Link href="/sign-up">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Planning Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Meal Planner. Built with Next.js, Prisma, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
