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

  const soulFoodSides = [
    t("menuPage.sides.macCheese"),
    t("menuPage.sides.collardGreens"),
    t("menuPage.sides.candiedYams"),
    t("menuPage.sides.greenBeans"),
    t("menuPage.sides.mashedPotatoes"),
    t("menuPage.sides.cabbage"),
    t("menuPage.sides.blackEyedPeas"),
    t("menuPage.sides.coleSlaw"),
    t("menuPage.sides.cornOnCob"),
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 gingham-pattern opacity-10" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
              {t("menuPage.title")}
            </h1>
            <div className="bg-white/20 backdrop-blur-md inline-block px-8 py-4 rounded-2xl border border-white/30">
              <p className="text-2xl md:text-3xl font-bold">
                {t("menuPage.subtitle")}
              </p>
              <p className="text-lg opacity-90 mt-1 font-medium italic">
                {t("menuPage.dailyNotice")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Meats Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8 border-b-4 border-primary pb-4">
                <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight">
                  {t("menuPage.meatsTitle")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {soulFoodMeats.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`rounded-2xl p-6 transition-all border-2 ${item.featured
                      ? "bg-highlight/10 border-highlight shadow-md scale-[1.02]"
                      : "bg-white border-gray-100 shadow-sm"
                      }`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {item.image && (
                        <div className="w-full md:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-inner border border-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h3 className="font-heading font-black text-xl text-foreground mb-2 flex items-center gap-2">
                              {item.name}
                              {item.featured && (
                                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                  {t("menuPage.meats.specialty")}
                                </span>
                              )}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sides Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-warm-lg border-2 border-primary/10 sticky top-24">
                <div className="flex items-center gap-3 mb-8 border-b-2 border-primary/20 pb-4">
                  <h2 className="font-heading text-3xl font-black text-foreground uppercase tracking-tight">
                    {t("menuPage.sidesTitle")}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {soulFoodSides.map((side, index) => (
                    <motion.li
                      key={side}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="text-xl font-bold text-gray-800 flex items-center gap-3 hover:text-primary transition-colors cursor-default"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {side}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-sm font-bold text-primary uppercase mb-2">{t("common.notice")}</p>
                  <p className="text-muted-foreground text-sm italic">
                    {t("menuPage.orderNotice")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <Button variant="soul" size="xl" asChild className="px-12 py-8 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform">
              <Link to="/contact">{t("common.contactToOrder")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Soul Food Meats Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8 border-b-4 border-primary pb-4">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight">
                Soul Food Meats
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {allMeatsCards.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl p-3 shadow-warm border-2 border-gray-100 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center min-h-20">
                  <h3 className="font-heading font-bold text-sm text-foreground text-center">
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
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8 border-b-4 border-primary pb-4">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight">
                Soul Food Sides
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {(t("menuPage.allSides", { returnObjects: true }) as string[]).map((side, index) => (
              <motion.div
                key={side}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl p-3 shadow-warm border-2 border-gray-100 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center min-h-20">
                  <h3 className="font-heading font-bold text-sm text-foreground text-center">
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
