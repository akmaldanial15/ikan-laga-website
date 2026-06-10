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
}

export const mockBettas: BettaFish[] = [
  {
    id: 'betta-imbellis',
    name: 'Betta Imbellis (Crescent Betta)',
    scientificName: 'Betta imbellis',
    origin: 'Kedah & Perlis, Malaysia',
    description: 'Dikenali sebagai "Peaceful Betta", spesies ini terkenal dengan sisik biru metalik yang berkilau apabila terkena cahaya matahari di sawah padi.',
    fullStory: 'Betta Imbellis adalah salah satu khazanah alam liar Malaysia yang paling indah. Hidup liar di kawasan sawah padi, paya, dan parit-parit kecil di utara Semenanjung. Berbeza dengan Betta Splendens yang sangat agresif, spesies Imbellis boleh ditempatkan bersama (jantan dan betina) di dalam satu akuarium komuniti yang mempunyai tumbuhan padat jika dipelihara dengan betul. Warna biru metalik pada badannya akan menyala dengan terang sebagai tanda dominasi dan keindahan semulajadi.',
    image: '/images/betta_imbellis.png',
    price: 65.00,
    inStock: true,
    orderable: true,
    rarity: 'Rare'
  },
  {
    id: 'betta-splendens-wild',
    name: 'Wild Betta Splendens',
    scientificName: 'Betta splendens (Wild Type)',
    origin: 'Pusat Semenanjung Malaysia',
    description: 'Nenek moyang kepada ikan laga hiasan moden. Memiliki badan yang runcing dengan sirip pendek merah menyala dan sisik hijau-biru.',
    fullStory: 'Ini adalah baka asal ikan laga liar sebelum ia dibiakkan secara terpilih menjadi pelbagai variasi sirip panjang (seperti Halfmoon atau Crowntail). Di habitat liarnya, mereka mendiami air bertakung yang cetek. Walaupun bersaiz kecil, ia mempunyai semangat juang yang tinggi dan mempamerkan warna merah terang yang sangat kontras dengan badannya yang gelap apabila berhadapan dengan pesaing.',
    image: '/images/betta_splendens_wild.png',
    price: 50.00,
    inStock: true,
    orderable: true,
    rarity: 'Common'
  },
  {
    id: 'betta-pugnax',
    name: 'Betta Pugnax (Penang Betta)',
    scientificName: 'Betta pugnax',
    origin: 'Pulau Pinang, Malaysia',
    description: 'Ikan laga jenis "mouthbrooder" (mengeram telur di dalam mulut) yang mendiami anak sungai berarus perlahan di kawasan bukit.',
    fullStory: 'Betta Pugnax adalah spesies ikan laga mulut (mouthbrooder) di mana ikan jantan akan mengeram telur di dalam mulutnya selama kira-kira 10 hingga 14 hari untuk melindungi anak ikan yang baru menetas. Mereka mendiami anak sungai yang bersih dan jernih di kawasan berbukit seperti di Pulau Pinang. Badannya lebih tegap dan berwarna coklat keemasan dengan tompokan hijau berkilau di bahagian pipi.',
    image: '/images/betta_pugnax.png',
    price: 80.00,
    inStock: false,
    orderable: false,
    rarity: 'Extremely Rare'
  }
];
