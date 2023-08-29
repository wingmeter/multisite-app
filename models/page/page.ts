interface NavLink {
  id: number;
  label: string;
  route: string;
}

export interface HeaderContent {
  headerLogo: string;
  headerContacts: string;
  headerDeliveryText: string;
  headerNavLinks: NavLink[];
  headerLogOutIcon: string;
  headerProductCount: number;
  headerProductTotalPrice: number;
}

interface BottomPartContacts {
  phoneNumber: string;
  deliveryText: string;
  bonusCard: string;
  appIcons: string[];
}

interface BottomPartLink {
  id: number;
  label: string;
  link: string;
}

interface BottomPartInfo {
  firstText: string;
  secondText: string;
  thirdText: string;
  icons: string[];
}

interface BottomPart {
  bottomPartContacts: BottomPartContacts;
  bottomPartLinksFirst: BottomPartLink[];
  bottomPartLinksSecond: BottomPartLink[];
  bottomPartInfo: BottomPartInfo;
}

interface TopPart {
  topPartTitle: string;
  topPartLeftTitle: string;
  topPartLeftList: string[];
  topPartRightTitle: string;
  topPartRightList: string[];
  topPartAddressTitle: string;
}

export interface FooterContent {
  topPart: TopPart;
  bottomPart: BottomPart;
}

export interface MainContent {
  mainTitle: string;
}

export interface PageContent {
  headerContent: HeaderContent;
  mainContent: MainContent;
  footerContent: FooterContent;
}
