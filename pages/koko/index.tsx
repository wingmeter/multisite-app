import Koko from '@/components/containers/Koko';
import pageContent from '@/data/koko';
import { productData } from '@/data/koko/product/products';
import { PageContent } from '@/models/page/page';
import { Product } from '@/models/product/product';

interface IPageProps {
  pageData: PageContent;
  productData: Product[];
}

function KokoPage({ pageData, productData }: IPageProps) {
  return <Koko pageData={pageData} productData={productData} />;
}

export async function getStaticProps() {
  return {
    props: {
      pageData: pageContent,
      productData,
    },
  };
}

export default KokoPage;
