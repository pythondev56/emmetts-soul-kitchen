import { motion } from "framer-motion";
import { Flame, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const weeklySpecials = [
  {
    day: "Monday",
    name: "Meatloaf Monday",
    description: "Homestyle meatloaf with mashed potatoes, green beans, and cornbread",
    badge: "Special",
  },
  {
    day: "Tuesday",
    name: "Taco Tuesday Soul Style",
    description: "Soul food tacos with fried catfish, slaw, and spicy remoulade",
    badge: "Fan Favorite",
  },
  {
    day: "Wednesday",
    name: "Wing Wednesday",
    description: "1 lb of crispy wings with your choice of sauce and two sides",
    badge: "Best Seller",
  },
  {
    day: "Thursday",
    name: "Throwback Thursday",
    description: "Grandma's smothered chicken with rice, cabbage, and sweet tea",
    badge: "Classic",
  },
  {
    day: "Friday",
    name: "Fish Fry Friday",
    description: "Golden fried catfish with hush puppies, fries, and coleslaw",
    badge: "🔥 Hot Deal",
  },
];

const WeeklySpecials = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section className="section-padding bg-highlight text-highlight-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-primary" />
            <p className="text-primary font-bold uppercase tracking-widest text-lg">Daily Specials</p>
            <Flame className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 drop-shadow-sm">
            Weekly Specials
          </h2>
          <p className="text-gray-800 mt-4 max-w-xl mx-auto text-lg font-medium opacity-90">
            Check out our rotating daily soul food favorites! Fresh specials every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {weeklySpecials.map((special, index) => {
            const isToday = special.day === today;
            return (
              <motion.div
                key={special.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 transition-all shadow-lg hover:shadow-2xl ${isToday
                    ? "bg-white text-gray-900 ring-8 ring-primary/20 scale-105 z-10"
                    : "bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white"
                  }`}
              >
                {isToday && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-black flex items-center gap-2 shadow-xl border-2 border-white">
                    <Clock className="w-4 h-4" />
                    TODAY'S SPECIAL
                  </div>
                )}

                <div className="text-center pt-4">
                  <span className={`inline-block px-4 py-1 rounded-full text-xs font-black mb-4 uppercase tracking-tighter shadow-sm ${isToday ? "bg-primary text-white" : "bg-highlight text-highlight-foreground"
                    }`}>
                    {special.badge}
                  </span>

                  <p className={`text-xl font-black mb-2 uppercase tracking-tight ${isToday ? "text-primary" : "text-gray-900"}`}>
                    {special.day}
                  </p>

                  <h3 className="font-heading font-black text-2xl mb-4 leading-tight">
                    {special.name}
                  </h3>

                  <p className={`text-base font-medium leading-relaxed ${isToday ? "text-gray-700 font-semibold" : "text-gray-600"}`}>
                    {special.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeeklySpecials;
