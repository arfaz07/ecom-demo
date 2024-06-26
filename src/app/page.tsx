import Footer from "@/components/footer/footer";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Card, { ICardProps } from "@/components/card/card";
import { useCallback } from "react";
import { randomNumberToSeven } from "@/utils/helper";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const result = await fetch(
      `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/features`
    );
    console.log("result****", result);
    const response = await result?.json();
    console.log("response****", response);
    const size = randomNumberToSeven();
    const features = response?.features?.slice(0, size);
    return {
      title: "SYU Demo",
      description: `SEO Description with ${features?.length}`,
      keywords: ["B_Tech", "M_Tech"],
    };
  } catch (error) {
    return {
      title: "SYU Demo",
      description: `SEO Description with initial`,
    };
  }
}

export default async function Home() {
  const fetchData = useCallback(async () => {
    try {
      const result = await fetch(
        `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/features`
      );
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
        <h1 className={styles.marginAll}>
          Find Colleges, Courses & Exams that are Best for You
        </h1>
        <div className={styles.time}>
          <b>{`Last Syned from server: ${new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          })}`}</b>
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
