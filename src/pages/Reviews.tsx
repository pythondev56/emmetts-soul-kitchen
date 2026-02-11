import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const { t } = useTranslation();
  const reviews = t("reviewsPage.reviews", { returnObjects: true }) as Array<{
    name: string;
    location: string;
    text: string;
    date: string;
  }>;
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-highlight text-highlight" />
              ))}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {t("reviewsPage.title")}
            </h1>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto">
              {t("reviewsPage.intro")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm relative"
              >
                <Quote className="w-10 h-10 text-accent/20 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                  ))}
                </div>

                <p className="text-foreground mb-4">
                  "{review.text}"
                </p>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-muted-foreground text-sm">{review.location}</p>
                  </div>
                  <p className="text-muted-foreground text-xs">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("reviewsPage.cta.heading")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t("reviewsPage.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="soul" size="lg" asChild>
                <a href="/contact">{t("reviewsPage.cta.contactBtn")}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.facebook.com/emmettskitchen" target="_blank" rel="noopener noreferrer">
                  {t("reviewsPage.cta.reviewBtn")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
