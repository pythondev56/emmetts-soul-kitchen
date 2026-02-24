import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const VeteranOwned = () => {
  const { t } = useTranslation();

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
          className="text-center bg-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border-2 border-[#ffd700]/30 shadow-2xl"
        >
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#ffd700] rounded-full flex items-center justify-center shadow-inner border-4 border-[#002868]">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#002868]" />
            </div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter drop-shadow-lg leading-tight">
            {t("veteran.title1")}<span className="text-[#ffd700]">{t("veteran.title2")}</span>{t("veteran.title3")}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#ffd700] mx-auto mb-6 sm:mb-8 rounded-full" />
          <p className="text-white/90 mt-4 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-bold italic px-2">
            {t("veteran.quote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VeteranOwned;
