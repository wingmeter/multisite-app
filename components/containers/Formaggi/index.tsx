import React, { FC } from 'react';
import { Footer, Header, Main } from '@/components/layout';
import { PageContent } from '@/models/page/page';
import { Product } from '@/models/product/product';
import { Loader } from '@/components/UI';

interface IFormaggiProps {
  pageData: PageContent;
  productData: Product[];
}

const Formaggi: FC<IFormaggiProps> = ({ pageData, productData }) => {
  return (
    <>
      {pageData ? (
        <>
          <Header siteType="formaggi" pageData={pageData?.headerContent} />
          <Main
            siteType="formaggi"
            pageData={pageData?.mainContent}
            productData={productData}
          />
          <Footer siteType="formaggi" pageData={pageData?.footerContent} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Formaggi;
