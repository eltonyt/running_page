interface ISiteMetadataResult {
  siteTitle: 'Elton\'s Running Journey';
  siteUrl: 'http://heyprojecthub.com/runningjourney';
  description: 'My Running Journey';
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
  siteTitle: 'Elton\'s Running Journey',
  siteUrl: 'http://heyprojecthub.com/runningjourney',
  logo: 'https://eltonpublicwebsite.s3.us-east-1.amazonaws.com/Running_Journal/running_gopher.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Project URL',
      url: 'https://github.com/eltonyt/running_page/blob/master/README.md',
    },
  ],
};

export default data;
