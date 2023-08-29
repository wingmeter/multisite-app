import Formaggi from '@/components/containers/Formaggi';
import pageContent from '@/data/formaggi';
import { productData } from '@/data/formaggi/product/products';
import { PageContent } from '@/models/page/page';
import { Product } from '@/models/product/product';

interface IPageProps {
  pageData: PageContent;
  productData: Product[];
}

function FormaggiPage({ pageData, productData }: IPageProps) {
  return <Formaggi pageData={pageData} productData={productData} />;
}

export async function getStaticProps() {
  return {
    props: {
      pageData: pageContent,
      productData,
    },
  };
}

export default FormaggiPage;
