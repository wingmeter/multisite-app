import React, { FC } from 'react';
import { Footer, Header, Main } from '@/components/layout';
import { PageContent } from '@/models/page/page';
import { Product } from '@/models/product/product';
import { Loader } from '@/components/UI';

interface IKokoProps {
  pageData: PageContent;
  productData: Product[];
}

const Koko: FC<IKokoProps> = ({ pageData, productData }) => {
  return (
    <>
      {pageData ? (
        <>
          <Header siteType="koko" pageData={pageData?.headerContent} />
          <Main
            siteType="koko"
            pageData={pageData?.mainContent}
            productData={productData}
          />
          <Footer siteType="koko" pageData={pageData?.footerContent} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Koko;
