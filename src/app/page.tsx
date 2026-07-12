import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroBanner";
import { FeaturesSection } from "@/components/Features"; 
import clientPromise from "@/lib/mongodb";

async function getResources() {
  const client = await clientPromise;
  const db = client.db("devstack");
  const items = await db.collection("resources")
    .aggregate([{ $sample: { size: 3 } }])
    .toArray();

  return items.map((item) => ({
    ...item,
    _id: item._id.toString(), 
    createdAt: item.createdAt ? item.createdAt.toISOString() : null, 
  }));
}


export default async function Home() {

  const items = await getResources();

  return (
    <div>
      <HeroSection />
      <FeaturesSection items={items} />
      <Footer />
    </div>
  );
}