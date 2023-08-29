import { Product } from '@/models/product/product';
import product1 from '@/public/assets/images/formaggiProducts/asdasd.png';
import product2 from '@/public/assets/images/formaggiProducts/asdasdasd.png';
import product3 from '@/public/assets/images/formaggiProducts/asdasdww.png';
import product4 from '@/public/assets/images/formaggiProducts/qwer.png';
import product5 from '@/public/assets/images/formaggiProducts/tap.png';
import product6 from '@/public/assets/images/formaggiProducts/tapqwe.png';

export const productData: Product[] = [
  {
    productId: 1,
    productImage: product5,
    productTitle: 'Мини-брускетты с макрелью и печёным перцем',
    productWeight: 65,
    productPrice: 315,
  },
  {
    productId: 2,
    productImage: product1,
    productTitle: 'Обожжённый лосось с листьями романо и соусом каламанси',
    productWeight: 140,
    productPrice: 1075,
  },
  {
    productId: 3,
    productImage: product2,
    productTitle: 'Буйабес с морепродуктами',
    productWeight: 345,
    productPrice: 625,
  },
  {
    productId: 4,
    productImage: product3,
    productTitle: 'Курица из печи по-ливански с фалафелем из нута',
    productWeight: 500,
    productPrice: 965,
  },
  {
    productId: 5,
    productImage: product4,
    productTitle: 'Томлёные щёчки, томаты и хрустящий нут',
    productWeight: 175,
    productPrice: 525,
  },

  {
    productId: 6,
    productImage: product6,
    productTitle: 'Мини-брускетты с макрелью и печёным перцем',
    productWeight: 65,
    productPrice: 315,
  },
];
