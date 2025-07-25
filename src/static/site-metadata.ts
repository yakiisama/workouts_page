interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Activities',
  siteUrl: 'https://activities.looyank.cc',
  logo: 'https://avatars.githubusercontent.com/u/42471741?v=4&size=64',
  description: '记录各种运动数据',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://looyank.cc',
    },
    {
      name: 'About',
      url: 'https://looyank.cc/about',
    },
  ],
};

export default data;
