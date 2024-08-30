import SEO from "@/constants/seo-data";

const NotFoundPage = () => (
  <>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
    />
    <title>{SEO[404].title}</title>

    {/* <Layout>
      <Hero />
    </Layout> */}
  </>
);

export default NotFoundPage;