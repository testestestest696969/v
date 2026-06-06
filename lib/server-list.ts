import { ServerTypes } from "@/types/player-types";

export const initialServers: ServerTypes[] = [
  {
    name: "Icarus I",
    server: "icarus",
    status: "queue",
    desc: "Vast Collection",
  },
  {
    name: "Atlas II",
    server: "atlas_v2",
    status: "queue",
    desc: "Alternative",
  },
  {
    name: "Athena IV",
    server: "athena",
    status: "queue",
    desc: "Main Server",
  },
  {
    name: "Orion III",
    server: "orion",
    status: "queue",
    desc: "Built-In Subtitle",
  },

  // {
  //   name: "Thanatos ",
  //   server: "thanatos",
  //   status: "queue",
  //   desc: "Alternative",
  // },
  {
    name: "Daedalus V",
    server: "daedalus",
    status: "queue",
    desc: "Alternative",
  },

  // {
  //   name: "Daedalus V",
  //   server: "daedalus",
  //   status: "queue",
  //   desc: "Multi Audio Support",
  // },

  // {
  //   name: "Talos VII",
  //   server: "talos",
  //   status: "queue",
  //   desc: "Spanish Audio",
  // },
];
