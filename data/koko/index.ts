import kokoLogo from '@/public/assets/images/kokoLogo.svg';

import logOutKoko from '@/public/assets/icons/logOutKoko.svg';

import appStore from '@/public/assets/icons/appstore.svg';
import playmarket from '@/public/assets/icons/playmarket.svg';

import visa from '@/public/assets/icons/visa.svg';
import mastercard from '@/public/assets/icons/mastercard.svg';
import mir from '@/public/assets/icons/mir.svg';
import visa2 from '@/public/assets/icons/visa2.svg';
import { PageContent } from '@/models/page/page';

const pageContent: PageContent = {
  headerContent: {
    headerLogo: kokoLogo,
    headerContacts: '290-41-41',
    headerDeliveryText: 'Работаем с 9:00 до 22:00, без выходных',
    headerNavLinks: [
      {
        id: 1,
        label: 'Закуска',
        route: '#',
      },
      {
        id: 2,
        label: 'Салаты',
        route: '#',
      },
      {
        id: 3,
        label: 'Супы',
        route: '#',
      },
      {
        id: 4,
        label: 'Горячее',
        route: '#',
      },
      {
        id: 5,
        label: 'Десерты',
        route: '#',
      },
      {
        id: 6,
        label: 'Напитки',
        route: '#',
      },
    ],
    headerProductCount: 0,
    headerProductTotalPrice: 0,
    headerLogOutIcon: logOutKoko,
  },
  mainContent: {
    mainTitle: 'Рекомендуем',
  },
  footerContent: {
    topPart: {
      topPartTitle: 'Доставка и оплата',
      topPartLeftTitle: 'О заведении',
      topPartLeftList: [
        'Доставка пиццы осуществляется из ресторанов итальянской кухни «Перцы», расположенных в разных частях Красноярска. Каждый заказ формируется наиболее близко к месту доставки. Таким образом пицца по итальянским рецептам, салаты, паста и многое другое привозится максимально быстро.',
      ],
      topPartRightTitle: 'Доставка бесплатно',
      topPartRightList: [
        'Минимальная сумма заказа 350 руб. Может быть увеличена до 700 руб., когда заказ сделан в отдаленные районы города, подробные условия читайте в разделе доставка и оплата.',
      ],
      topPartAddressTitle: 'Наш адрес',
      // topPartAddressMap: 'Наш адрес',
    },
    bottomPart: {
      bottomPartContacts: {
        phoneNumber: '290-41-41',
        deliveryText: 'Работаем с 9:00 до 22:00, без выходных',
        bonusCard: 'ООО «Перцы Взлётка», ИНН 2465271085',
        appIcons: [],
      },
      bottomPartLinksFirst: [
        { id: 1, label: 'Акции', link: '#' },
        { id: 2, label: 'Доставка и оплата', link: '#' },
        { id: 3, label: 'О компании', link: '#' },
      ],
      bottomPartLinksSecond: [
        { id: 1, label: 'Контакты', link: '#' },
        { id: 2, label: 'Правовая информация', link: '#' },
        { id: 3, label: 'Бонусная программа', link: '#' },
      ],
      bottomPartInfo: {
        firstText: '© 2018 Bellini Group',
        secondText: '',
        thirdText: '',
        icons: [visa, mastercard, mir],
      },
    },
  },
};

export default pageContent;
