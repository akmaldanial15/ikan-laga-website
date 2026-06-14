export interface BettaFish {
  id: string;
  name: string;
  scientificName: string;
  origin: string;
  description: string;
  fullStory: string;
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
    description: 'Dikenali sebagai "Peaceful Betta", spesies ini terkenal dengan sisik biru metalik yang berkilau apabila terkena cahaya matahari di sawah padi.',
    fullStory: 'Betta Imbellis adalah salah satu khazanah alam liar Malaysia yang paling indah. Hidup liar di kawasan sawah padi, paya, dan parit-parit kecil di utara Semenanjung. Berbeza dengan Betta Splendens yang sangat agresif, spesies Imbellis boleh ditempatkan bersama (jantan dan betina) di dalam satu akuarium komuniti yang mempunyai tumbuhan padat jika dipelihara dengan betul. Warna biru metalik pada badannya akan menyala dengan terang sebagai tanda dominasi dan keindahan semulajadi.',
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
    description: 'Nenek moyang kepada ikan laga hiasan moden. Memiliki badan yang runcing dengan sirip pendek merah menyala dan sisik hijau-biru.',
    fullStory: 'Ini adalah baka asal ikan laga liar sebelum ia dibiakkan secara terpilih menjadi pelbagai variasi sirip panjang (seperti Halfmoon atau Crowntail). Di habitat liarnya, mereka mendiami air bertakung yang cetek. Walaupun bersaiz kecil, ia mempunyai semangat juang yang tinggi dan mempamerkan warna merah terang yang sangat kontras dengan badannya yang gelap apabila berhadapan dengan pesaing.',
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
    description: 'Spesies unik dari kawasan paya nipah yang terkenal dengan warna hijau pudar (teal) keemasan yang membentuk garisan selari pada pipinya.',
    fullStory: 'Betta Mahachaiensis adalah spesies endemik yang mendiami kawasan air payau dan paya bakau/nipah yang ekstrem di sekeliling Teluk Thailand. Spesies ini sangat istimewa kerana kebolehannya menyesuaikan diri dengan kemasinan air yang berubah-ubah. Ciri fizikal utama yang membezakannya adalah dua jalur menegak hijau berkilau yang sangat jelas pada penutup insang (operculum), serta corak sirip ekor yang tersusun kemas seakan-akan bentuk mata lembing atau "spade-tail" semulajadi.',
    image: '/images/betta_mahachaiensis.png',
    price: 100.00,
    inStock: true,
    orderable: true,
    rarity: 'Extremely Rare',
    category: 'Show-Grade'
  }
];

