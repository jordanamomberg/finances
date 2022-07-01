import dynamic from "next/dynamic";
import PageTags from "components/PageTags";

export const DynamicHeader = dynamic(() => import("pages/Dashboard"), {
  ssr: false,
});

const DashboardPage = () => {
  const title = "Ações";
  const description = "Ações Apple";
  const url = "https://acoes-apple.com.br";

  return (
    <>
      <PageTags title={title} description={description} url={url} />
      <DynamicHeader />
    </>
  );
};
export default DashboardPage;
