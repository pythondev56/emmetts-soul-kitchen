import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import friedCatfish from "@/assets/fried-catfish.png";
import meatloaf from "@/assets/meatloaf.png";
import bbqRibs from "@/assets/bbq-ribs.png";
import potRoast from "@/assets/pot-roast.png";

const Menu = () => {
  const { t } = useTranslation();

  const allMeatsArray = t("menuPage.allMeats", { returnObjects: true }) as string[];

  const soulFoodMeats = [
    {
      name: t("menuPage.meats.catfish"),
      description: t("menuPage.meats.catfishDesc"),
      featured: true,
      image: friedCatfish
    },
    {
      name: t("menuPage.meats.friedChicken"),
      description: t("menuPage.meats.chickenDesc"),
      featured: true
    },
    {
      name: t("menuPage.meats.meatloaf"),
      description: t("menuPage.meats.meatloafDesc"),
      featured: true,
      image: meatloaf
    },
    {
      name: t("menuPage.meats.chickenLivers"),
      description: t("menuPage.meats.liversDesc"),
      featured: true
    },
    {
      name: t("menuPage.meats.gizzards"),
      description: t("menuPage.meats.gizzardsDesc"),
      featured: true
    },
    {
      name: t("menuPage.meats.porkChops"),
      description: t("menuPage.meats.chopsDesc")
    },
    {
      name: t("menuPage.meats.bakedChicken"),
      description: t("menuPage.meats.bakedChickenDesc")
    },
    {
      name: t("menuPage.meats.ribTips"),
      description: t("menuPage.meats.ribTipsDesc"),
      image: bbqRibs
    },
    {
      name: t("menuPage.meats.oxtails"),
      description: t("menuPage.meats.oxtailsDesc"),
      image: "https://cdn.builder.io/api/v1/image/assets%2F8e76ff0f37864e249bbdbdd981b026fa%2Ff0beb89f147a416b9c12b0de136062b6?format=webp&width=800&height=1200"
    },
    {
      name: t("menuPage.meats.friedChops"),
      description: t("menuPage.meats.friedChopsDesc")
    },
  ];

  // Create individual card data for all meats
  const allMeatsCards = allMeatsArray.map((meat: string) => ({
    name: meat,
    description: ""
  }));

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gingham-pattern opacity-10" />
        <div className="container-custom text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              {t("menuPage.title")}
            </h1>
            <div className="bg-white/20 backdrop-blur-md inline-block px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-2xl border border-white/30">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                {t("menuPage.subtitle")}
              </p>
              <p className="text-sm sm:text-base md:text-lg opacity-90 mt-1 font-medium italic">
                {t("menuPage.dailyNotice")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-background relative">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

            {/* Meats Column */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b-4 border-primary pb-3 sm:pb-4">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight">
                  {t("menuPage.meatsTitle")}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5">
                {soulFoodMeats.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 transition-all border-2 ${item.featured
                      ? "bg-highlight/10 border-highlight shadow-md hover:shadow-lg"
                      : "bg-white border-gray-100 shadow-sm hover:shadow-md"
                      }`}
                  >
                    <div className={`grid ${item.image ? 'grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[120px_1fr]' : 'grid-cols-1'} gap-3 sm:gap-4 md:gap-5 items-start`}>
                      {item.image && (
                        <div className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 flex-shrink-0 rounded-lg sm:rounded-lg md:rounded-xl overflow-hidden shadow-inner border border-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-start">
                        <h3 className="font-heading font-black text-base sm:text-lg md:text-xl text-foreground mb-1 sm:mb-2 flex flex-wrap items-center gap-1 sm:gap-2">
                          {item.name}
                          {item.featured && (
                            <span className="bg-primary text-white text-[8px] sm:text-[9px] md:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-tighter whitespace-nowrap">
                              {t("menuPage.meats.specialty")}
                            </span>
                          )}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm md:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <Button variant="soul" size="lg" asChild className="px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-transform">
              <Link to="/contact">{t("common.contactToOrder")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Soul Food Meats Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b-4 border-primary pb-3 sm:pb-4">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                Soul Food Meats
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {allMeatsCards.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-primary/20 to-highlight/20 rounded-lg sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 shadow-warm border-2 border-primary/30 hover:border-primary/70 hover:shadow-lg hover:scale-105 transition-all h-full"
              >
                <div className="flex items-center justify-center min-h-16 sm:min-h-20 md:min-h-24">
                  <h3 className="font-heading font-bold text-xs sm:text-sm md:text-sm text-foreground text-center leading-tight">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soul Food Sides Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b-4 border-primary pb-3 sm:pb-4">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                Soul Food Sides
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {(t("menuPage.allSides", { returnObjects: true }) as string[]).map((side, index) => (
              <motion.div
                key={side}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-lg sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 shadow-warm border-2 border-secondary/30 hover:border-secondary/70 hover:shadow-lg hover:scale-105 transition-all h-full"
              >
                <div className="flex items-center justify-center min-h-16 sm:min-h-20 md:min-h-24">
                  <h3 className="font-heading font-bold text-xs sm:text-sm md:text-sm text-foreground text-center leading-tight">
                    {side}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
