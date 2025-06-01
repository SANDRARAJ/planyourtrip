'use client';
import BannerContent from "@/components/BannerContent/BannerContent";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Hotels from "@/components/Hotels/Hotels";
import SelectTab from "@/components/SelectTab/SelectTab";
import '@/styles/common.scss';





export default function Home() {
  return (
    <>
      <HomeBanner />
      <BannerContent />
      <SelectTab />
      <Hotels />
    </>
  );
}
