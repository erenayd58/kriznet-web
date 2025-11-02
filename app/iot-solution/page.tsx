import { Metadata } from "next";
import IoTSolutionClient from "./client";

export const metadata: Metadata = {
  title: "IoT Çözümü - KrizNet",
  description:
    "Akıllı IoT cihazlarımız ve mesh altyapımız ile kriz anlarında kesintisiz iletişim sağlayın.",
};

export default function IoTSolutionPage() {
  return <IoTSolutionClient />;
}
