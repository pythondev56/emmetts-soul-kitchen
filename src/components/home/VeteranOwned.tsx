import { motion } from "framer-motion";
import { Award } from "lucide-react";

const VeteranOwned = () => {
  return (
    <section className="section-padding bg-[#002868] relative overflow-hidden">
      {/* Subtle star pattern or overlay could go here */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#bf0a30]" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#bf0a30]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center bg-white/5 backdrop-blur-sm p-12 rounded-3xl border-2 border-[#ffd700]/30 shadow-2xl"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#ffd700] rounded-full flex items-center justify-center shadow-inner border-4 border-[#002868]">
              <Award className="w-12 h-12 text-[#002868]" />
            </div>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
            Propiedad de <span className="text-[#ffd700]">Veteranos</span> y Operado
          </h2>
          <div className="w-24 h-1 bg-[#ffd700] mx-auto mb-8 rounded-full" />
          <p className="text-white/90 mt-4 max-w-2xl mx-auto text-2xl font-bold italic">
            "Sirviendo orgullosamente a nuestra comunidad con honor, integridad y la mejor comida soul en Tennessee."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VeteranOwned;
