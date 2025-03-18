const siteConfig = {
  name: "Bottles",
  description: "Bottles",
  pinata: {
    pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5ZTZlZTNjMi1jODJkLTQ2MjAtYjY2MC04MWVjOWJhMGExNTgiLCJlbWFpbCI6InN0b3J5Y2lrc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjI2ZWMzMGQyMGU5NWU1MTM4NWIiLCJzY29wZWRLZXlTZWNyZXQiOiI0YWVhNDliMzFiOGVmMWFhMDhmODI1ZWEyZjEzNDZmOGIzMDllM2NmMjliMWIzMTBlM2Q4ZjhhNDU3YzE2YjQwIiwiZXhwIjoxNzczODQ4OTkwfQ.bw1_ARzTYGIaDXxMp6gBkSg0Zkd4zKaw8nJT2QGtzEA",
    pinataGateway: "https://gateway.pinata.cloud",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Bottles",
      href: "/bottles",
    },

    {
      label: "More",
      href: "/more",
    },
  ],
};

export default siteConfig;
export type SiteConfig = typeof siteConfig;
