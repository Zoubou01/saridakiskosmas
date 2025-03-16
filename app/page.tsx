"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Shield, Users, Briefcase, Phone, Mail, MapPin, Menu, X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function InsuranceWebsite() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <ServicesSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">Kosmas Saridakis Insurance</span>
                </div>

                <nav className="hidden md:flex gap-6">
                    <NavLinks />
                </nav>

                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>

                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            <NavLinks />
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

function NavLinks() {
    return (
        <>
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About Us
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact Us
            </Link>
        </>
    );
}

function HomeSection() {
    return (
        <section id="home" className="py-20 md:py-28">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Protecting What Matters Most</h1>
                        <p className="text-muted-foreground md:text-xl">Comprehensive insurance solutions tailored to your unique needs. We&apos;&apos;re committed to providing peace of mind through reliable coverage and exceptional service.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg">
                                <Link href="#contact">Quote</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="#services">Explore Plans</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                        <Image src="/placeholder.svg?height=500&width=800" alt="Insurance protection concept" fill className="object-cover" priority />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {[
                        {
                            title: "Personalized Coverage",
                            description: "Insurance plans customized to your specific needs and budget.",
                            icon: Shield,
                        },
                        {
                            title: "Fast Claims Process",
                            description: "Quick and hassle-free claims handling when you need it most.",
                            icon: Briefcase,
                        },
                        {
                            title: "Expert Advisors",
                            description: "Dedicated professionals to guide you through every step.",
                            icon: Users,
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg bg-card">
                            <div className="p-3 rounded-full bg-primary/10 mb-4">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section id="about" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Us</h2>
                    <p className="text-muted-foreground md:text-xl max-w-3xl">With over 20 years of experience, we&apos;ve been helping individuals and businesses protect what matters most.</p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                        <Image src="/placeholder.svg?height=400&width=600" alt="Our team of insurance professionals" fill className="object-cover" />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Our Story</h3>
                        <p className="text-muted-foreground">Founded in 2003, Kosmas Saridakis Insurance began with a simple mission: to provide honest, reliable insurance solutions with a personal touch. Today, we serve thousands of clients nationwide while maintaining the same dedication to personalized service.</p>
                        <h3 className="text-2xl font-bold mt-6">Our Values</h3>
                        <ul className="space-y-2">
                            {["Integrity in every interaction", "Client-centered approach", "Innovative solutions", "Community involvement", "Continuous improvement"].map((value, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span>{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServicesSection() {
    const services = [
        {
            title: "Auto Insurance",
            description: "Comprehensive coverage for your vehicles with flexible options to suit your needs.",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            title: "Home Insurance",
            description: "Protect your most valuable asset with our comprehensive home insurance plans.",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            title: "Life Insurance",
            description: "Ensure your loved ones' financial security with our life insurance policies.",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            title: "Business Insurance",
            description: "Tailored insurance solutions to protect your business from various risks.",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            title: "Health Insurance",
            description: "Quality healthcare coverage options for individuals and families.",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            title: "Travel Insurance",
            description: "Peace of mind during your travels with our comprehensive coverage.",
            image: "/placeholder.svg?height=300&width=400",
        },
    ];

    return (
        <section id="services" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Services</h2>
                    <p className="text-muted-foreground md:text-xl max-w-3xl">We offer a wide range of insurance products to meet your personal and business needs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-all">
                            <div className="relative h-48 w-full">
                                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover transition-transform group-hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contact Us</h2>
                    <p className="text-muted-foreground md:text-xl max-w-3xl">Have questions or ready to get started? Reach out to our team for personalized assistance.</p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Get in Touch</h3>
                            <p className="text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Full Name
                                    </label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <Input id="subject" placeholder="How can we help you?" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea id="message" placeholder="Tell us about your insurance needs..." className="min-h-[120px]" />
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Contact Information</h3>
                            <p className="text-muted-foreground">You can also reach us using the following contact details.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    details: "(123) 456-7890",
                                    link: "tel:+11234567890",
                                },
                                {
                                    icon: Mail,
                                    title: "Email",
                                    details: "info@kosmas-saridakis.com",
                                    link: "mailto:info@kosmas-saridakis.com",
                                },
                                {
                                    icon: MapPin,
                                    title: "Office",
                                    details: "123 Insurance Ave, Financial District, New York, NY 10001",
                                    link: "#",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="p-2 rounded-full bg-primary/10">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{item.title}</h4>
                                        <Link href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                                            {item.details}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-lg border overflow-hidden h-[250px] mt-6">
                            {/* This would be a map in a real implementation */}
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                <p className="text-muted-foreground">Map location would appear here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t py-12 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">Kosmas Saridakis</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Providing reliable insurance solutions since 2003. Your security is our priority.</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider">Services</h4>
                        <ul className="space-y-2">
                            {["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance", "Health Insurance"].map((service, index) => (
                                <li key={index}>
                                    <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2">
                            {["About Us", "Our Team", "Careers", "Testimonials", "Blog"].map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer", "Licensing"].map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t">
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kosmas Saridakis Insurance. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                            <Link key={index} href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                                <span className="sr-only">{social}</span>
                                <div className="h-5 w-5 bg-muted-foreground/70 rounded-full" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
