import Card from "@/components/Card";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Card
        rating={8.5}
        tags={["Sci-fi", "2025", "futuristic"]}
        category="Stories"
        title="Test title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur molestie ligula, in pellentesque lacus scelerisque rutrum. Curabitur malesuada lobo..."
        wordLength={1000}
        readLength={5}
        userName="andrew"
      />
    </MainLayout>
  );
}
