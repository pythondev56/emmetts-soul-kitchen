import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const LocationInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-highlight/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-white p-8 rounded-2xl shadow-lg border-2 border-primary/10"
        >
          <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
            </div>
            <p className="text-2xl font-bold text-gray-900 leading-tight">
              682 Nashville Pike<br />
              Gallatin, Tennessee<br />
              <span className="text-primary mt-2 inline-block">{t("location.formerPanda")}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.7890123456789!2d-86.43!3d36.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864b8f8f8f8f8f9%3A0x0!2s682%20Nashville%20Pike%2C%20Gallatin%2C%20TN!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emmett's Soul Kitchen Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationInfo;
