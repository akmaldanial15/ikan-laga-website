export interface BettaFish {
  id: string;
  name: string;
  scientificName: string;
  origin: string;
  description: { en: string; my: string };
  fullStory: { en: string; my: string };
  image: string; // URL path (e.g. /images/betta_imbellis.png)
  price: number;
  inStock: boolean;
  orderable: boolean;
  rarity: 'Common' | 'Rare' | 'Extremely Rare';
  category?: string; // bred category ('Wild-Caught', 'Show-Grade','Captive-Bred')
}

export const mockBettas: BettaFish[] = [
  {
    id: 'betta-imbellis',
    name: 'Betta Imbellis',
    scientificName: 'Betta imbellis',
    origin: 'Kedah & Perlis, Malaysia',
    description: {
      en: 'Known as the "Peaceful Betta", this species is famous for its metallic blue scales that sparkle when exposed to sunlight in rice paddies.',
      my: 'Dikenali sebagai "Peaceful Betta", spesies ini terkenal dengan sisik biru metalik yang berkilau apabila terkena cahaya matahari di sawah padi.'
    },
    fullStory: {
      en: 'Betta Imbellis is one of Malaysia\'s most beautiful wild treasures. Living wild in rice paddies, swamps, and small ditches in the north of the Peninsula. Unlike the highly aggressive Betta Splendens, the Imbellis species can be housed together (males and females) in a densely planted community aquarium if kept correctly. The metallic blue color on its body will light up brightly as a sign of dominance and natural beauty.',
      my: 'Betta Imbellis adalah salah satu khazanah alam liar Malaysia yang paling indah. Hidup liar di kawasan sawah padi, paya, dan parit-parit kecil di utara Semenanjung. Berbeza dengan Betta Splendens yang sangat agresif, spesies Imbellis boleh ditempatkan bersama (jantan dan betina) di dalam satu akuarium komuniti yang mempunyai tumbuhan padat jika dipelihara dengan betul. Warna biru metalik pada badannya akan menyala dengan terang sebagai tanda dominasi dan keindahan semulajadi.'
    },
    image: '/images/betta_imbellis.png',
    price: 25.00,
    inStock: true,
    orderable: true,
    rarity: 'Common',
    category: 'Wild-Caught'
  },
  {
    id: 'betta-splendens',
    name: 'Betta Splendens',
    scientificName: 'Betta splendens',
    origin: 'Mekong River, Thailand',
    description: {
      en: 'The ancestor of modern ornamental fighting fish. It has a slender body with short bright red fins and blue-green scales.',
      my: 'Nenek moyang kepada ikan laga hiasan moden. Memiliki badan yang runcing dengan sirip pendek merah menyala dan sisik hijau-biru.'
    },
    fullStory: {
      en: 'This is the original wild fighting fish species before it was selectively bred into various long-finned variations (like Halfmoon or Crowntail). In their wild habitat, they inhabit shallow stagnant water. Although small in size, it has a high fighting spirit and displays bright red colors that contrast sharply with its dark body when facing a competitor.',
      my: 'Ini adalah spesis asal ikan laga liar sebelum ia dibiakkan secara terpilih menjadi pelbagai variasi sirip panjang (seperti Halfmoon atau Crowntail). Di habitat liarnya, mereka mendiami air bertakung yang cetek. Walaupun bersaiz kecil, ia mempunyai semangat juang yang tinggi dan mempamerkan warna merah terang yang sangat kontras dengan badannya yang gelap apabila berhadapan dengan pesaing.'
    },
    image: '/images/betta_splendens.png',
    price: 100.00,
    inStock: true,
    orderable: true,
    rarity: 'Rare',
    category: 'Captive-Bred'
  },
  {
    id: 'betta-mahachaiensis',
    name: 'Betta Mahachaiensis',
    scientificName: 'Betta mahachaiensis',
    origin: 'Samut Sakhon, Thailand',
    description: {
      en: 'A unique species from the nipa palm swamps known for its metallic teal coloration forming parallel stripes on its cheeks.',
      my: 'Spesies unik dari kawasan paya nipah yang terkenal dengan warna hijau pudar (teal) keemasan yang membentuk garisan selari pada pipinya.'
    },
    fullStory: {
      en: 'Betta Mahachaiensis is an endemic species inhabiting extreme brackish water and mangrove/nipa swamps around the Gulf of Thailand. This species is very special due to its ability to adapt to fluctuating water salinity. The main physical characteristic that distinguishes it is the two clear sparkling green vertical stripes on the gill cover (operculum), as well as the neatly arranged tail fin pattern resembling a natural spearhead or "spade-tail".',
      my: 'Betta Mahachaiensis adalah spesies endemik yang mendiami kawasan air payau dan paya bakau/nipah yang ekstrem di sekeliling Teluk Thailand. Spesies ini sangat istimewa kerana kebolehannya menyesuaikan diri dengan kemasinan air yang berubah-ubah. Ciri fizikal utama yang membezakannya adalah dua jalur menegak hijau berkilau yang sangat jelas pada penutup insang (operculum), serta corak sirip ekor yang tersusun kemas seakan-akan bentuk mata lembing atau "spade-tail" semulajadi.'
    },
    image: '/images/betta_mahachaiensis.png',
    price: 100.00,
    inStock: true,
    orderable: true,
    rarity: 'Extremely Rare',
    category: 'Show-Grade'
  }
];

