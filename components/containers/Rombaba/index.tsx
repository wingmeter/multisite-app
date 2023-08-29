import React, { FC } from 'react';
import { Footer, Header, Main } from '@/components/layout';
import { PageContent } from '@/models/page/page';
import { Product } from '@/models/product/product';
import { Loader } from '@/components/UI';

interface IRombabaProps {
  pageData: PageContent;
  productData: Product[];
}

const Rombaba: FC<IRombabaProps> = ({ pageData, productData }) => {
  return (
    <>
      {pageData ? (
        <>
          <Header siteType="rombaba" pageData={pageData?.headerContent} />
          <Main
            siteType="rombaba"
            pageData={pageData?.mainContent}
            productData={productData}
          />
          <Footer siteType="rombaba" pageData={pageData?.footerContent} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Rombaba;
