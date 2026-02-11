import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, Utensils, Calendar, Check, Phone, Send, ChefHat, PartyPopper } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const cateringPackages = [
  {
    name: "Reunión Familiar",
    serves: "10-20 invitados",
    description: "Perfecto para reuniones familiares, fiestas de cumpleaños y pequeñas reuniones",
    features: [
      "Elección de 2 platos principales",
      "2-3 guarniciones incluidas",
      "Pan de maíz",
      "Té dulce",
      "Platos y utensilios desechables",
    ],
    popular: false,
    icon: Users,
  },
  {
    name: "Fiesta de Comida Soul",
    serves: "25-50 invitados",
    description: "Ideal para fiestas de oficina, eventos de iglesia y celebraciones",
    features: [
      "Elección de 3 platos principales",
      "3-4 guarniciones incluidas",
      "Pan de maíz y panecillos",
      "Té dulce y limonada",
      "1 bandeja de postres",
      "Configuración completa incluida",
      "Se proporcionan platos de calentamiento",
    ],
    popular: true,
    icon: ChefHat,
  },
  {
    name: "Gran Celebración",
    serves: "50-100+ invitados",
    description: "Para bodas, eventos corporativos y grandes celebraciones",
    features: [
      "Elección de 4 platos principales",
      "4-5 guarniciones incluidas",
      "Pan de maíz, panecillos y galletas",
      "Servicio completo de bebidas",
      "2 bandejas de postres",
      "Montaje y desmontaje completo",
      "Personal de servicio disponible",
      "Opciones de menú personalizadas",
    ],
    popular: false,
    icon: PartyPopper,
  },
];

const menuOptions = {
  entrees: [
    "Pollo Frito",
    "Chuletas de Cerdo Cubiertas",
    "Pollo al Horno",
    "Bagre Frito",
    "Puntas de Costilla BBQ",
    "Pastel de Carne",
    "Rabo de Buey",
  ],
  sides: [
    "Macarrones con Queso",
    "Verduras (Collard Greens)",
    "Batatas Confitadas",
    "Judías Verdes",
    "Puré de Papas",
    "Repollo",
    "Guisantes de Ojos Negros",
    "Ensalada de Col",
    "Maíz en la Mazorca",
  ],
  desserts: [
    "Pastel de Durazno",
    "Pudín de Plátano",
    "Pastel de Batata",
    "Pastel Red Velvet",
  ],
};

const Catering = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("cateringPage.consultationReceived"),
      description: t("cateringPage.consultationDesc"),
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      package: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-wood text-secondary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 gingham-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-highlight" />
              <Calendar className="w-8 h-8 text-highlight" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("cateringPage.title")}
            </h1>
            <p className="text-secondary-foreground/90 max-w-2xl mx-auto text-lg">
              {t("cateringPage.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Soon */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("cateringPage.availableSoon")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("cateringPage.availableDesc")}
            </p>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Catering;
