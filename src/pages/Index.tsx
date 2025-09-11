import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Star, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import heroImage from "../assets/hero-education.jpg";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "10K+", label: "Active Students" },
    { number: "500+", label: "Teachers Assisted" },
    { number: "50+", label: "Subject Covered" },
    { number: "4.9", label: "User Satisfaction" }
  ];

  const features = [
    {
      icon: Users,
      title: "Instant Doubt Solver",  
      description: "Get answers to any academic question instantly with AI-powered explanations"
    },
    {
      icon: Star,
      title: "Quality Content",
      description: "Curated courses designed for effective learning"  
    },
    {
      icon: Play,
      title: "Interactive Learning",
      description: "Engaging multimedia content and practical exercises"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="py-4 px-4 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold">Sahayak</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {/* <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">About</a> */}
          </div>
          
          
        </div>  
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 hero-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Best Learning Platform
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Got a Doubt? Just Ask Sahayak.
                  
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Your AI buddy that explains tough concepts, makes worksheets, 
                  and even plans lessons — just like your smartest study partner.
                  
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bw-accent h-12 px-8 text-lg font-medium"
                  onClick={() => navigate('/login/student')}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="bw-outline h-12 px-8 text-lg font-medium"
                  onClick={() => navigate('/login/teacher')}
                >
                  Become a Teacher
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in [animation-delay:200ms]">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Professional education and online learning illustration"
                  className="w-full h-auto rounded-2xl shadow-[var(--shadow-hover)]"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[var(--shadow-card)] animate-bounce [animation-delay:1s]">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-[var(--shadow-card)] animate-bounce [animation-delay:1.5s]">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Learning Path</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of learners and educators in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Card */}
            <div 
              className="clean-card clean-card-hover p-8 cursor-pointer group animate-slide-up"
              onClick={() => navigate('/login/student')}
            >
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">I'm a Student</h3>
                  <p className="text-muted-foreground">
                    Start your learning journey with expert guidance and AI-powered assistance
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center font-medium group-hover:underline">
                    Start Learning <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Card */}
            <div 
              className="clean-card clean-card-hover p-8 cursor-pointer group animate-slide-up [animation-delay:200ms]"
              onClick={() => navigate('/login/teacher')}
            >
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">I'm a Teacher</h3>
                  <p className="text-muted-foreground">
                    Share your expertise and inspire the next generation of learners
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center font-medium group-hover:underline">
                    Start Teaching <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            
              Helping Students Learn & Teachers Teach Smarter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI tools that simplify studying for learners and save time for educators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="clean-card p-8 text-center animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="w-16 h-16 mx-auto bg-black rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;