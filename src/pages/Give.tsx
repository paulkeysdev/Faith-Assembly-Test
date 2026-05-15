import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Heart, CreditCard, Smartphone, Building2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Give = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Give</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Partner with us in ministry through your generous giving</p>
          </motion.div>
        </div>
      </section>

      {/* Paybill Section - Prominent */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="font-heading text-4xl font-bold mb-4">Paybill Number</CardTitle>
                <CardDescription className="text-lg">Use our Paybill number for easy and secure giving</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-accent/10 rounded-2xl p-8 mb-6">
                  <div className="text-6xl font-bold text-accent mb-2">247247</div>
                  <p className="text-muted-foreground">Account: Faith Assembly Church</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-3">How to Give:</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Go to M-Pesa menu</li>
                      <li>2. Select "Lipa na M-Pesa"</li>
                      <li>3. Select "Paybill"</li>
                      <li>4. Enter Business Number: <strong>247247</strong></li>
                      <li>5. Enter Account Number: Your name or reference</li>
                      <li>6. Enter amount and complete payment</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Giving Categories:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Tithe: Use "Tithe" as account number</li>
                      <li>• Offering: Use "Offering" as account number</li>
                      <li>• Missions: Use "Missions" as account number</li>
                      <li>• Building Fund: Use "Building" as account number</li>
                      <li>• Other: Use specific purpose as account number</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Other Giving Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Other Ways to Give</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose the giving method that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Online Giving */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Online Giving</CardTitle>
                  <CardDescription>Secure online donations</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">Give securely from anywhere in the world using your credit/debit card</p>
                  <Button className="w-full" disabled>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">Stripe integration in development</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bank Transfer */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Bank Transfer</CardTitle>
                  <CardDescription>Direct bank deposits</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-left space-y-2 mb-6">
                    <div><strong>Bank:</strong> KCB Bank</div>
                    <div><strong>Account Name:</strong> Faith Assembly Church</div>
                    <div><strong>Account Number:</strong> 1234567890</div>
                    <div><strong>Branch:</strong> Westlands</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Building2 className="w-4 h-4 mr-2" />
                    Copy Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact for Giving */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Questions about giving?</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">+254 700 000 000</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">giving@faithassembly.org</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scripture and CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-center">
            <blockquote className="bg-card rounded-2xl shadow-xl p-8 mb-8">
              <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
              <p className="text-xl italic text-muted-foreground mb-4">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              </p>
              <cite className="text-accent font-semibold">— 2 Corinthians 9:7</cite>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Smartphone className="w-5 h-5 mr-2" />
                Give via Paybill
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Mail className="w-5 h-5 mr-2" />
                Contact Giving Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Give;
