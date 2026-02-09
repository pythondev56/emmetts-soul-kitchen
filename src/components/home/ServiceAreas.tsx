import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Gallatin, TN",
  "Springfield, TN",
  "Hendersonville, TN",
  "Westmoreland, TN",
  "Whitehouse, TN",
  "Bowling Green, KY",
  "Portland, TN",
  "Franklin, KY",
];

const ServiceAreas = () => {
  return (
    <section className="section-padding gingham-pattern relative">
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-white/90 p-8 rounded-2xl shadow-xl border-2 border-primary/20 max-w-2xl mx-auto"
        >
          <p className="text-primary font-black uppercase tracking-tighter text-xl mb-4">Horario de Atención</p>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-primary mb-6 drop-shadow-sm">
            11am – 7pm
          </h2>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              Viernes a Lunes
            </p>
            <p className="text-lg font-semibold text-primary/80 italic">
              (Horario de la primera semana)
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block bg-primary text-white px-6 py-2 rounded-full mb-8 shadow-lg">
            <p className="text-xl font-bold uppercase tracking-wide">
              Sirviendo a condados y ciudades circundantes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div
                key={area}
                className="bg-white hover:bg-highlight transition-colors rounded-xl p-4 text-base font-bold text-gray-900 shadow-md border border-gray-100 flex items-center justify-center text-center"
              >
                {area}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
