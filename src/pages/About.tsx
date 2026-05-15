import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Heart, Eye, Target, Users } from "lucide-react";
import pastorSimonImg from "@/Imgs/Leaders/Pastor Simon Muriuki.jpeg";
import paulImg from "@/Imgs/Leaders/Paul Wainaina.jpeg";
import markImg from "@/Imgs/Leaders/Mark Thuita.jpg";
import joshuaImg from "@/Imgs/Leaders/Joshua Kamau.jpg";
import churchImage from "@/Imgs/Church/Church.jpg";

const values = [
  {
    icon: Heart,
    title: "Love",
    description: "We love God and love people unconditionally, just as Christ loved us.",
  },
  {
    icon: Eye,
    title: "Faith",
    description: "We trust in God's promises and walk boldly in His purpose for our lives.",
  },
  {
    icon: Target,
    title: "Service",
    description: "We use our gifts to serve others and make a positive impact in our community.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build authentic relationships and support one another in our faith journey.",
  },
];

const leaders = [
  {
    name: "Pastor Simon Muriuki",
    title: "Lead Pastor",
    bio: "Pastor Simon has led our church for over 15 years with a passion for teaching God's Word and building authentic community.",
    image: pastorSimonImg,
  },
  {
    name: "Paul Wainaina",
    title: "Worship Pastor",
    bio: "Paul leads our worship ministry with a heart for creating moments where people can encounter God's presence.",
    image: paulImg,
  },
  {
    name: "Mark Thuita",
    title: "Youth Pastor",
    bio: "Mark is passionate about equipping the next generation to live out their faith boldly.",
    image: markImg,
  },
  {
    name: "Joshua Kamau",
    title: "Children's Director",
    bio: "Joshua creates engaging environments where children can learn about Jesus in age-appropriate ways.",
    image: joshuaImg,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Discover our story, mission, and the heart behind Grace Community Church
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="font-heading text-4xl font-bold text-foreground mt-2 mb-6">
                A Church Built on Faith and Community
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Faith Assembly Church was founded in 2010 with a simple vision: to be a place 
                  where people from all walks of life could experience God's love and grow in their faith.
                </p>
                <p>
                  What started as a small group meeting in a living room has grown into a vibrant 
                  community of believers committed to making a difference in our city and beyond.
                </p>
                <p>
                  Today, we continue to hold fast to our founding values while embracing new ways 
                  to reach people with the message of hope found in Jesus Christ.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={churchImage}
                alt="Church building"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-foreground mb-12">
                Our Mission & Vision
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-xl shadow-lg">
                  <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To lead people into a growing relationship with Jesus Christ by 
                    loving God, loving others, and serving our community.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-xl shadow-lg">
                  <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-4">
                    Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be a church that transforms lives and communities through the 
                    power of the Gospel, one person at a time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do as a church family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {leader.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">{leader.title}</p>
                  <p className="text-muted-foreground text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
