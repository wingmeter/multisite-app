import rombabaLogo from '@/public/assets/images/rombabaLogo.svg';

import appStore from '@/public/assets/icons/appstore.svg';
import playmarket from '@/public/assets/icons/playmarket.svg';

import visa from '@/public/assets/icons/visa.svg';
import mastercard from '@/public/assets/icons/mastercard.svg';
import mir from '@/public/assets/icons/mir.svg';
import visa2 from '@/public/assets/icons/visa2.svg';
import { PageContent } from '@/models/page/page';

const pageContent: PageContent = {
  headerContent: {
    headerLogo: rombabaLogo,
    headerContacts: '+7 (391) 204-10-04',
    headerDeliveryText: 'Работаем с 11:00 до 22:40',
    headerNavLinks: [
      {
        id: 1,
        label: 'Торты',
        route: '#',
      },
      {
        id: 2,
        label: 'Пирожные',
        route: '#',
      },
      {
        id: 3,
        label: 'Мини-торты',
        route: '#',
      },
      {
        id: 4,
        label: 'Печенье',
        route: '#',
      },
      {
        id: 5,
        label: 'Выпечка',
        route: '#',
      },
      {
        id: 6,
        label: 'Лайт',
        route: '#',
      },
      {
        id: 7,
        label: 'Подарки',
        route: '#',
      },
      {
        id: 8,
        label: 'Сыры',
        route: '#',
      },
      {
        id: 9,
        label: 'Чай',
        route: '#',
      },
    ],
    headerProductCount: 0,
    headerProductTotalPrice: 0,
    headerLogOutIcon: '',
  },
  mainContent: {
    mainTitle: 'Рекомендуем',
  },
  footerContent: {
    topPart: {
      topPartTitle: 'Доставка и оплата',
      topPartLeftTitle: 'Работаем ежедневно',
      topPartLeftList: [
        'Время работы Вс-Чт 7:00-23:00, Пт-Сб 7:00-00:00.',
        'Заказы принимаем Вс-Чт 11:00 - 21:40, Пт-Сб 12:00 - 21:40',
        'Доставку осуществляем Вс-Чт 12:00 до 22:40, Пт-Сб 13:00 - 22:40',
        'Самовывоз возможен с 12:00 до 21:55',
        'Среднее время доставки 63 минуты, по возможности ранее. Время доставки может увеличиться в ситуации сильных пробок или другой неблагоприятной обстановки на дорогах.',
      ],
      topPartRightTitle: 'Доставка бесплатно',
      topPartRightList: [
        'Минимальная сумма заказа 600 руб. Она может быть увеличена, когда заказ сделан в отдаленные районы города, подробные условия читайте в разделе доставка и оплата.',
        'Изображения на сайте могут отличаться от фактического изображения приобретённых продуктов.',
        'Адрес самовывоза: Красноярск, проспект Мира, 15.',
      ],
      topPartAddressTitle: '',
      //   topPartAddressMap: 'Наш адрес',
    },
    bottomPart: {
      bottomPartContacts: {
        phoneNumber: '+7(391)204-10-80',
        deliveryText: 'Доставка Вс-Чт 12:00 до 22:40, Пт-Сб 13:00 - 22:40',
        bonusCard: 'Бонусная карта в вашем телефоне',
        appIcons: [appStore, playmarket],
      },
      bottomPartLinksFirst: [
        { id: 1, label: 'Акции', link: '#' },
        { id: 2, label: 'Доставка', link: '#' },
        { id: 3, label: 'Контакты', link: '#' },
        { id: 4, label: 'Зоны', link: '#' },
      ],
      bottomPartLinksSecond: [
        { id: 1, label: 'Правовая информация', link: '#' },
        { id: 2, label: 'Бонусная программа', link: '#' },
        { id: 3, label: 'Работа в Bellini group', link: '#' },
      ],
      bottomPartInfo: {
        firstText: '© 2022 Bellini Group',
        secondText: 'ООО «ПАЛЕНТА», ИНН 2466264789',
        thirdText:
          'На сайте представлен предлагаемый вариант сервировки/блюда.',
        icons: [visa, mir, visa2, mastercard],
      },
    },
  },
};

export default pageContent;
