import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import FacebookVideos from "@/components/home/FacebookVideos";
import Testimonials from "@/components/home/Testimonials";
import LocationInfo from "@/components/home/LocationInfo";
import VeteranOwned from "@/components/home/VeteranOwned";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedDishes />
      {/* FacebookVideos section hidden - will be visible when video content is ready */}
      {/* <FacebookVideos /> */}
      {/* Testimonials section hidden - will be visible again when ready */}
      {/* <Testimonials /> */}
      <VeteranOwned />
      <LocationInfo />
    </Layout>
  );
};

export default Index;
