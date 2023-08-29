import Rombaba from '@/components/containers/Rombaba';
import pageContent from '@/data/rombaba';

import { productData } from '@/data/rombaba/product/products';
import { PageContent } from '@/models/page/page';
import { Product } from '@/models/product/product';

interface IPageProps {
  pageData: PageContent;
  productData: Product[];
}

function RombabaPage({ pageData, productData }: IPageProps) {
  return <Rombaba pageData={pageData} productData={productData} />;
}

export async function getStaticProps() {
  return {
    props: {
      pageData: pageContent,
      productData,
    },
  };
}

export default RombabaPage;
