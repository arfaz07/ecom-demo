import Footer from "@/components/footer/footer";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Card, { ICardProps } from "@/components/card/card";
import { useCallback } from "react";
import { randomNumberToSeven } from "@/utils/helper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYU Demo",
  description: "SEO Description",
};

export default async function Home() {
  const fetchData = useCallback(async () => {
    try {
      console.log(
        "URL",
        `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/features`
      );
      // return {
      //   features: [],
      // };
      const result = await fetch(
        `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/features`
      );
      // console.log("result**", result);
      return await result?.json();
    } catch (error) {
      console.log("error**", error);
      return {
        features: [],
      };
    }
  }, []);
  const response = await fetchData();
  const size = randomNumberToSeven();
  const features = response?.features?.slice(0, size);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.time}>
          <p>{`Last Syned from server: ${new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          })}`}</p>
        </div>
        <div className={styles.cardContainer}>
          {features?.map((feature: ICardProps) => (
            <Card
              key={feature.title}
              description={feature.description}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
