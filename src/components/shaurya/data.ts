import bgmi1 from "@/assets/thumb-bgmi-1.png";
import bgmi2 from "@/assets/thumb-bgmi-2.png";
import bgmi3 from "@/assets/thumb-bgmi-3.png";
import spawny from "@/assets/spawny.jpg";
import cyrax from "@/assets/cyrax.jpg";
import aaquif from "@/assets/aaaquif.jpg";
import flicker from "@/assets/flicker.jpg";
import gta1 from "@/assets/thumb-gta-1.png";
import gta2 from "@/assets/thumb-gta-2.png";
import valo1 from "@/assets/thumb-valo-1.png";
import valo2 from "@/assets/thumb-valo-2.png";
import mc1 from "@/assets/thumb-mc-1.png";
import mc2 from "@/assets/thumb-mc-2.png";
import aaqu from "@/assets/aaquif.png";
import raghav from "@/assets/raghavan.png";
import liveMc from "@/assets/live-mc.png";
import trap from "@/assets/trap.jpg";
import senpai from "@/assets/senpai.jpg";
import senpai2 from "@/assets/senpai2.jpg";
import oldPack from "@/assets/old-pack.jpg";
import starPack from "@/assets/star.jpg";
import arena from "@/assets/arena.jpg";
import fps from "@/assets/fps.jpg";
import bestmod from "@/assets/bestmod.jpg";
import cage4 from "@/assets/cage4.png";
import revebge1 from "@/assets/revebge1.png";
import pvp from "@/assets/pvp-thumbnail.png";
import dakuu from "@/assets/dakuu.png";
import endfight from "@/assets/endfight.png";
import sky from "@/assets/sky.jpg";
import app1 from "@/assets/app1.png";
import star from "@/assets/star.jpg";
import byfun from "@/assets/byfun_mace.jpg";
import drizzle from "@/assets/drizzaroart2.png";
import img10texture from "@/assets/10-texture.jpg";
import after1 from "@/assets/after-1.png";
import ajaybradar from "@/assets/ajay-bradar.png";
import ajaypat from "@/assets/ajay-pat.png";
import ajaypatil from "@/assets/ajay-patil.png";
import ajaypatil2 from "@/assets/ajay-patil2.png";
import ajaypatil3 from "@/assets/ajay-patil3.png";
import ajaypatil4 from "@/assets/ajay-patil4.png";
import ajaypatil5 from "@/assets/ajay-patil5.png";
import ajaypatil6 from "@/assets/ajay-patil6.png";
import ajaypatil8 from "@/assets/ajay-patil8.png";
import ajay from "@/assets/ajay.png";
import ajay2 from "@/assets/ajay2.png";
import ajay3 from "@/assets/ajay3.png";
import ajay4 from "@/assets/ajay4.png";
import ajay5 from "@/assets/ajay5.png";
import ajay6 from "@/assets/ajay6.png";
import ajay7 from "@/assets/ajay7.png";
import atm1 from "@/assets/atm1.png";
import before1 from "@/assets/before-1.png";
import bestserver from "@/assets/best-server.jpg";
import cooked from "@/assets/cooked.png";
import cyraxtop100 from "@/assets/cyrax-top100.png";
import cyraxtop30 from "@/assets/cyrax-top30.png";
import cyraxnew2 from "@/assets/cyraxnew2.png";
import cyraxpurple from "@/assets/cyraxpurple.png";
import cyraxtop30_ from "@/assets/cyraxtop-30.png";
import forever from "@/assets/forever.png";
import IMG8955 from "@/assets/IMG_8955.jpg";
import kidnap3 from "@/assets/kidnap3.png";
import livelost from "@/assets/live-lost.png";
import sapnyadakait from "@/assets/sapnya-dakait.png";
import sapnyalost from "@/assets/sapnya-lost.png";
import sapnyarangdar from "@/assets/sapnya-rangdar.png";
import sapnyascammer from "@/assets/sapnya-scammer.png";
import sapnya66 from "@/assets/sapnya66.png";
import sapnyafff from "@/assets/sapnyafff.png";
import sddefault from "@/assets/sddefault.jpg";
import spspawny from "@/assets/sp-spawny.png";
import spawnygangster from "@/assets/spawny-gangster.png";
import akxita from "@/assets/akxita.png";
import akxita2 from "@/assets/akxita2.png";
import akxita3 from "@/assets/akxita3.png";
import drizvalo from "@/assets/drizvalo.png";
import ultimate from "@/assets/ultimate.png";
import conqueror from "@/assets/conqueror.png";
import cyraxrrr from "@/assets/cyraxrrr.png";
import cyraxcc from "@/assets/cyraxcc.png";
import maxresdefault61_1781697466695 from "@/assets/maxresdefault61_1781697466695.jpg";


export type Project = {
  id: string;
  title: string;
  category: "BGMI" | "GTA V" | "Valorant" | "Minecraft";
  img: string;
  description: string;
  client: string;
  feedback: string;
  span?: "tall" | "wide" | "normal";
  galleryOnly?: boolean;
};

export const projects: Project[] = [
  {
    id: "bgmi-1",
    title: "Conqueror Rank Push Live",
    category: "BGMI",
    img: bgmi1,
    description: "Thumbnail for conqueror rank push live",
    client: "@cyraxislive",
    feedback: "CTR jumped from 4% to 11% on the next video. Insane.",
    span: "wide",
  },
  {
    id: "gta-1",
    title: "The Legends Roleplay LIVE",
    category: "GTA V",
    img: gta1,
    description: "Movie-poster composition with three-character lineup, neon skyline, and bold heist typography.",
    client: "@8bit-FlickerHeadPlayz",
    feedback: "Best thumbnail I've ever had. Hit 10K views in 4 days.",
    span: "tall",
  },
  {
    id: "valo-1",
    title: "Setup Tour Video",
    category: "Minecraft",
    img: valo1,
    description: "A mixture of Minecraft and real life together",
    client: "@RealAaquif_",
    feedback: "My Character sitting on gaming chair looks cool !!",
  },
  {
    id: "mc-1",
    title: "Gun Deal TheLegends Roleplay Live",
    category: "GTA V",
    img: mc1,
    description: "Bold composition with weapon and high-stakes atmosphere.",
    client: "@SpAwnyIsLive",
    feedback: "Doubled my CTR and the live got more views than ever before",
  },
  {
    id: "bgmi-2",
    title: "Conqueror Tier Rank Push",
    category: "BGMI",
    img: bgmi2,
    description: "Premium golden-wings portrait with fire accents and trophy iconography.",
    client: "@cyraxislive",
    feedback: "Pure premium. Worth every rupee.",
  },
  {
    id: "gta-2",
    title: "Soulcity by ECHORP Live",
    category: "GTA V",
    img: gta2,
    description: "Thumbnail for soulcity by ECHORP live",
    client: "@informniagaming",
    feedback: "My audience kept asking who made this. Worth it.",
    span: "wide",
  },
  {
    id: "valo-2",
    title: "Grind Live",
    category: "Valorant",
    img: valo2,
    description: "Holding a Valo gun , cinematic texts",
    client: "@Drizzaro",
    feedback: "Best Valo Thumbnail I've ever made !",
  },
  {
    id: "mc-2",
    title: "LostMC Club Mafia TheLegendsRoleplay Live",
    category: "GTA V",
    img: mc2,
    description: "LostMC Mafia chilling on a Sofa",
    client: "@SpAwnyIsLive",
    feedback: "It feels so bossy",
    span: "tall",
  },
  {
    id: "bgmi-3",
    title: "Minecraft Chill Live",
    category: "Minecraft",
    img: bgmi3,
    description: "Just a Minimalist Live Thumbnail",
    client: "@RealAaquif_",
    feedback: "Easily the most Minimalist thumbnail of my channel.",
  },
  {
    id: "mc-3",
    title: "Secret Thumbnail",
    category: "Minecraft",
    img: aaqu, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-4",
    title: "Secret Thumbnail",
    category: "Minecraft",
    img: liveMc, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-5",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: trap, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-6",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: senpai, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-7",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: senpai2, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-8",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: oldPack, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-9",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: starPack, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-10",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: arena, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-11",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: fps, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-12",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: bestmod, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-13",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: cage4, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-14",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: revebge1, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-15",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: pvp, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-16",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: dakuu, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-17",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: endfight, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-18",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: sky, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },

  {
    id: "mc-19",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: app1, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-19",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: byfun, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },
  {
    id: "mc-19",
    title: "Trap Thumbnail",
    category: "Minecraft",
    img: drizzle, // assuming you imported this at the top
    description: "This will only show up in the gallery.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true, // 👈 ADD THIS LINE
  },

  {
    id: "img10texture",
    title: "New Thumbnail",
    category: "Minecraft", // change as needed
    img: img10texture,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "after1",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: after1,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaybradar",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaybradar,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypat",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypat,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypatil",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypatil,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypatil2",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypatil2,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypatil3",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypatil3,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypatil4",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypatil4,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypatil5",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypatil5,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypatil6",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypatil6,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajaypatil8",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajaypatil8,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajay",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajay,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajay2",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajay2,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajay3",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajay3,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajay4",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajay4,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajay5",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajay5,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajay6",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajay6,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ajay7",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: ajay7,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "atm1",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: atm1,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "bestserver",
    title: "New Thumbnail",
    category: "Minecraft", // change as needed
    img: bestserver,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cooked",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cooked,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cyraxtop100",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cyraxtop100,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cyraxtop30",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cyraxtop30,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cyraxnew2",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cyraxnew2,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cyraxpurple",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cyraxpurple,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cyraxtop30_",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cyraxtop30_,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "forever",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: forever,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "IMG8955",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: IMG8955,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "kidnap3",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: kidnap3,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "livelost",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: livelost,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "sapnyadakait",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: sapnyadakait,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "sapnyalost",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: sapnyalost,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "sapnyarangdar",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: sapnyarangdar,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "sapnyascammer",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: sapnyascammer,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "sapnya66",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: sapnya66,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "sapnyafff",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: sapnyafff,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "sddefault",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: sddefault,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "spspawny",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: spspawny,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "spawnygangster",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: spawnygangster,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "raghav1",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: raghav,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "akxita",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: akxita,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "akxita2",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: akxita2,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "akxita3",
    title: "New Thumbnail",
    category: "Minecraft", // change as needed
    img: akxita3,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "drizvalo",
    title: "New Thumbnail",
    category: "Valorant", // change as needed
    img: drizvalo,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "ultimate",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: ultimate,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "conqueror",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: conqueror,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cyraxrr",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cyraxrrr,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },
  {
    id: "cyraxcc",
    title: "New Thumbnail",
    category: "BGMI", // change as needed
    img: cyraxcc,
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  },

];

export const categories = [
  { name: "BGMI", subtitle: "Battle Royale Thumbnail Collection", img: akxita2, count: 15 },
  { name: "GTA V", subtitle: "Cinematic Gaming Artwork", img: ajay3, count: 35 },
  { name: "Valorant", subtitle: "Competitive Esports Designs", img: valo2, count: 5 },
  { name: "Minecraft", subtitle: "Challenge & SMP Designs", img: img10texture, count: 20 },
] as const;

export const reviews = [
  { name: "ItzAdiyan", niche: "Minecraft Creator · 10K+ subs", text: "Shaurya understood my channel's vibe in one call. CTR has been crazy ever since." },
  { name: "StonerGamer", niche: "BGMI Streamer · 14K+ subs", text: "The thumbnails feel like Esports posters. My audience can't scroll past them." },
  { name: "NetherPlayz", niche: "Valorant Pro · 1k+ subs", text: "Easily the most professional designer I've worked with. Fast, clean, premium." },
  { name: "GamingZx3", niche: "Minecraft Creator · 35K+ subs", text: "Every series I launch with Shaurya's thumbnails outperforms by 2-3x." },
  { name: "Jwuggie", niche: "Valo and Minecraft Creator · 3K+ subs", text: "Replies fast, revisions are quick, designs hit. Worth every penny." },
  { name: "Powdy", niche: "Minecraft PVP coach · 10K+ subs", text: "He's not just a designer — he's a CTR strategist. Period." },
  { name: "ITZ ME PAGAL", niche: "Minecraft Creator · 50K+ subs", text: "Booked him for 1 weeks straight. Won't switch. Ever." },
  { name: "Nirbhay Katiyar", niche: "Variety Streamer · 3K+ subs", text: "Premium quality without the agency price tag. Highly recommend." },
];

export const specialReviews = [
  { name: "SpAwnyIsLive", niche: "GTA RP STREAMER · 1.4k+ subs", text: "Working with Shaurya completely transformed my channel's branding. The attention to detail is unmatched and the CTR speaks for itself.", logo: spawny },
  { name: "8Bit HeadFlicker", niche: "GTA RP STREAMER · 130K+ subs", text: "If you want premium thumbnails that actually convert and look like cinematic posters, this is the guy you hire.", logo: flicker },
  { name: "RealAaquif_", niche: "MINECRAFT AIO CREATOR · 11K+ subs", text: "Every thumbnail is a masterpiece. Fast, reliable, and the quality is always 10/10. Highly recommended for serious creators.", logo: aaquif },
  { name: "Cyrax Is Live", niche: "BGMI STREAMER · 10k+ subs", text: "He's not just making pictures, he's engineering clicks. Best decision I made for my channel's growth.", logo: cyrax },
];