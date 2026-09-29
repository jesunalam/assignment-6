import DetailsCard from "@/app/component/detailsCard";



interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
  const data = await res.json();

  return (
    <>
    <DetailsCard exercise={data}></DetailsCard>
    </>
  )
}