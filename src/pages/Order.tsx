import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CreditCard, Clock, Truck } from "lucide-react";

const icons = {
  ShoppingBag,
  CreditCard,
  Clock,
  Truck,
};

const Order = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: ShoppingBag,
      title: t("orderPage.steps.0.title"),
      description: t("orderPage.steps.0.description"),
    },
    {
      icon: CreditCard,
      title: t("orderPage.steps.1.title"),
      description: t("orderPage.steps.1.description"),
    },
    {
      icon: Clock,
      title: t("orderPage.steps.2.title"),
      description: t("orderPage.steps.2.description"),
    },
    {
      icon: Truck,
      title: t("orderPage.steps.3.title"),
      description: t("orderPage.steps.3.description"),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {t("orderPage.title")}
            </h1>
            <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8">
              {t("orderPage.description")}
            </p>
            <Button variant="gold" size="xl" asChild>
              <a href="#order-form">{t("orderPage.orderCTA")}</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("orderPage.howItWorks")}
            </h2>
            <p className="text-muted-foreground">
              {t("orderPage.workingDescription")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Placeholder */}
      <section id="order-form" className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-background rounded-2xl p-8 shadow-warm">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("orderPage.sectionTitle")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("orderPage.sectionDescription")}
              </p>

              <p className="text-sm text-muted-foreground">
                {t("orderPage.hasQuestions")}
                <Link to="/menu" className="text-primary hover:underline">
                  {t("orderPage.fullMenu")}
                </Link>
                {t("orderPage.or")}
                <Link to="/contact" className="text-primary hover:underline">
                  {t("orderPage.contactUs")}
                </Link>
                {t("orderPage.contactUsEnd")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
