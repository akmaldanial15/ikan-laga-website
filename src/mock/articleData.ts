import type { BilingualText } from "../context/LanguageContext";

export interface Article {
  id: string;
  title: BilingualText;
  subtitle?: BilingualText;
  content: BilingualText;
}

export const articles: Record<string, Article> = {
  "betta-mahachaiensis": {
    id: "betta-mahachaiensis",
    title: {
      en: "Betta mahachaiensis: An Endangered Species Facing the Flood of Hybridization in the Aqua Trade",
      my: "Betta mahachaiensis: Spesies Terancam Menghadapi Banjir Hibridisasi dalam Perdagangan Akua",
    },
    subtitle: {
      en: "A definitive guide for differentiating show-grade hybrids from authentic, pure captive-bred Betta mahachaiensis.",
      my: "Panduan definitif untuk membezakan hibrid gred pertunjukan daripada Betta mahachaiensis biakan tulen yang autentik.",
    },
    content: {
      en: `## Introduction

Betta mahachaiensis is one of the ancestral species of the current domestic betta commonly found in pet and aquarium shops, alongside other species such as Betta splendens, Betta smaragdina, and Betta imbellis. It is considered a relatively newly described species within the Splendens complex, due to a combination of a highly endemic habitat and years of early misdescription. Betta mahachaiensis can only be found in the brackish Nypa palm mangroves of Samut Sakhon Province and small pockets of western Bangkok bordering it. While early rumors and older reports claimed they were also in Samut Prakan and Samut Songkhram, exhaustive scientific surveys actually proved their wild footprint is much more restricted. The species was originally discovered in Samut Sakhon, specifically in Maha Chai, which gives the species its specific name (mahachai + -ensis, which means "from or native to Mahachai").

Before the Zootaxa article was published in 2012, the fish was already well known to hobbyists and the aqua trade. People referred to it as Betta sp. Mahachai, Green Plakat, Mahachai Fighter, and many other regional names. This is because the fish could frequently be found in local gambling dens, the Chatuchak Market, and in early YouTube videos posted before 2012. Prior to its formal scientific description, many believed the fish was simply a wild hybrid of Betta splendens. However, the 2012 Zootaxa paper proved that Betta mahachaiensis is a completely distinct species, clearly differentiable by both its phenotype and genotype.

## The Threat of Commercial Success

In today's market, Betta mahachaiensis is highly sought after because of its unique appearance: a slender body, a brilliant bluish-green iridescence covering their pitch-black body, and absolutely zero red pigment anywhere on its frame. Because of this massive demand, Betta mahachaiensis has been heavily hybridized to achieve the hyper-metallic look requested by the commercial trade. Today, we can find several varieties, including Mahachai-hybrid green, Mahachai-hybrid blue, and even copper or silver variants. This makes the fish highly appealing to look at and incredibly competitive in the wild betta competition scene, where unfortunately, the original pure wild look will almost always lose against the flashier hybrid versions.

The severe downside to this commercial success is genetic pollution. These Mahachai-hybrids cannot scientifically be called pure Betta mahachaiensis anymore, because their genetic blueprint has been crossed with Betta splendens, smaragdina, and even domestic lines to achieve those desired show attributes. Today, we can classify these commercial strains under the broader Betta splendens complex or as "Alien Bettas" (even though the term is currently used for full-masking wild-hybrids, "Alien" originally classified any wild betta crossed with another wild or domestic species).

Because the market is currently flooded with Mahachai-hybrids that superficially look like the real thing, pure-bred Betta mahachaiensis are incredibly hard to find in the aqua trade. When someone finally lists a pure specimen for sale, skeptics in the community often debunk it, saying it's just a "claimed original" and pointing out that "anyone can say their fish is pure." This article serves as a definitive guide for differentiating a show-grade hybrid from an authentic, pure captive-bred Betta mahachaiensis.

---

## Morphological Identification Criteria Based on Zootaxa (2012)

- **The Opercular Signature:** The gill covers (opercle) must feature exactly two parallel, vertical iridescent green or bluish-green bars. Crucially, the opercular membrane itself must be a solid brown-to-black color completely free of any red streaks or patches (unlike B. splendens or B. imbellis).
- **The Face Mask:** The head, cheeks, throat, and lips must remain a clean, matte dark brown to pitch-black. While there may be sparse iridescent scales, a pure specimen does not possess a solid metallic facial mask (a dead giveaway of "Alien" or domestic hybrid lines).
- **Body Scaling Pattern:** The body background is dark brown to black, with iridescent green-to-teal coloration distributed evenly as a central spot on each individual scale along regular rows. This creates a clean, uniform, grid-like or droplet-like appearance rather than a solid, unbroken metallic sheet.
- **The Dorsal Fin Matrix:** The dorsal fin must showcase black transverse bars crossing over the iridescent green background, covering at least the proximal two-thirds of the fin.
- **The Caudal Fin (The Hybrid Decider):** The tail fin's trailing margin ranges from rounded to medially pointed. Most importantly, there must be an absence of dark transverse bars (stripes) on the caudal fin. Instead, look for small, black, rounded marks that flank the internal fin rays on the membranes. If the tail has solid vertical "tiger stripes," it is a hybrid.
- **Anal & Pelvic Fin Coloration:** The anal fin rays are dark, contrasting against bright green-blue membranes, tapering to a point at the rear. The pelvic (ventral) fins are falcate (sickle-shaped), brown-to-black, featuring a distinct iridescent green/bluish-green front margin and a crisp white tip. There must be absolutely no red or orange pigment bleeding into these fins.

### The Hard Truth: "Looks" Aren't Everything

While physical traits are our first line of defense, the Zootaxa paper proved B. mahachaiensis is an independent evolutionary lineage through DNA barcoding of the mitochondrial COI gene. Scientifically, the genetic distance between a pure Mahachai and Betta splendens is roughly 11%, and 14% from Betta smaragdina. Interestingly, the researchers noted that during their study, fish bought from commercial markets (like Chatuchak) that looked like pure Mahachai fighters were exposed by DNA sequencing to be secret hybrids carrying B. splendens genes. This proves genetic pollution isn't a new theory—it was documented by the very scientists who discovered the species itself.

---

## Competition Specifications

When showing Betta mahachaiensis, judges are looking for fully matured adult fish that display impressive size, a perfectly balanced wild silhouette, and vibrant color contrast. Since the hybrid version is common in the market, it is allowed to compete in the original class, as long as the coloration and the features follow the specification. Other color variants can join the "AOC Class." However, heavily altered show attributes from hybrid lines will be penalized, and any trace of domestic bloodlines will get disqualified (DQ).

### Size Requirements

- **Minimum Male Size:** 3.75 cm (1.5 inches) Body Only.
- **Minimum Female Size:** 3.25 cm (1.25 inches) Body Only.
- **Note:** While minimum sizes are strictly enforced, larger specimens are always preferred on the bench as long as they maintain proper proportions.

### Ideal Shape, Form, and Fin Metrics

To score top marks, a competitive specimen must hit precise anatomical shapes and fin-to-body ratios:

- **Head & Body Proportion:** The head must feature a smooth, rounded/oval shape. The body must be long and round, maintaining a strict length-to-height ratio of 4:1.
- **Dorsal Fin:** Must be shaped beautifully like three-quarters of a circle and feature single fin rays.
- **Caudal Fin (Tail):** The ideal show shape is a clean spade tail, though a neat rounded tail is also acceptable. It must feature double fin rays, spread wide, and maintain a perfect length-to-height ratio of 1:1 when flaring.
- **Anal Fin:** Tapered into a pointed trapezoid shape. The length of the first ray closest to the head must be roughly 1/3 the length of the extended pointed tip. The ideal length-to-height ratio for the entire anal fin is 2:2. It must consist of single fin rays.
- **Ventral (Pelvic) Fins:** Sharp, knife-shaped, and pointed straight down. The ideal length must be exactly half the total length of the fish's body (head included), which should align perfectly with the tip of the extended anal fin.
- **Pectoral Fins:** Standard size, shaped like a hand fan with smooth, rounded edges.

### Strict Color Standards

The contrast between the pitch-black base and the bright iridescence must be sharp, solid, and incredibly vivid.

- **Head:** Pitch-black, highlighted sharply by 2 vertical bluish-green iridescent bars on the operculum.
- **Body:** Clean black base with distinct bluish-green iridescent spots completely restricted to the center of the scales.
- **Dorsal Fin:** Black background completely covered by an intricate iridescent "spider-web" pattern.
- **Caudal Fin:** Solid black, packed with a patterned green metallic layout and distinct black spots flanking the rays.
- **Anal Fin:** Black base accented with clean, parallel green metallic lines running through the pattern.
- **Ventral Fins:** Solid black base topped with stark, crisp white tips.
- **Pectoral Fins:** A clean, clear transparent black.

### Competition Faults & Disqualifications

If you want to place on the podium, your fish needs to avoid the following structural and color defects:

#### Shape & Form Faults

- **Grooved Head Profile:** Any indent or "spoon-head" groove behind the eye is an immediate Disqualification.
- **Bullet-Shaped Head:** A head profile mimicking a domestic Betta splendens is a Severe Fault.
- **Short Anal Fin Tip:** If the pointed tip of the anal fin is stunted and fails to meet the ideal 2:2 ratio, it is marked as a Major Fault.

#### Color Faults

- **Red Pigmentation (The Hybrid Giveaway):** Any red color on the dorsal fin, a major red wash on the base of the anal fin, or red coloring on the ventral fins counts as a Major Fault. A slight red wash that is only visible under harsh, direct testing light is penalized as a Slight Fault.
- **Missing Iridescence:** A complete lack of iridescence on the anal fin is a Major Fault, while an uneven or sloppy line pattern on the anal or caudal fins is a Minor Fault.
- **Incomplete Dorsal Pattern:** A dorsal fin that lacks a full iridescent "spider-web" pattern is a Minor Fault.
- **Ventral Tip Defects:** Ventral fins lacking the signature white tips are marked as a Minor Fault. If the white coloration bleeds too far up and spreads wildly toward the base of the fin, it is also a Minor Fault.
- **Dull Overall Coloration:** Pale, washed-out colors across the body are graded as a Major Fault, while uneven distribution of body spots is a Minor Fault. If the iridescent green spots fail to show up on the body scales entirely, it jumps to a Severe Fault.

---

## How a Mahachai-Hybrid is Engineered

To understand the threat of genetic pollution, you have to look at how breeders deliberately construct a Mahachai-hybrid. Because all members of the Betta splendens complex share highly compatible chromosome structures, crossing different species doesn't produce sterile hybrids. Instead, it yields fully fertile offspring that can be bred back into pure lines or crossed with other variants indefinitely.

To tap into the high-demand commercial market, a breeder typically starts with a standard, pure wild Betta mahachaiensis and crosses it with a domestic Green or Blue Metallic Short-Finned Plakat (Betta splendens).

> **The Breeding Pipeline:**
> [Pure Male B. mahachaiensis] x [Domestic Metallic Plakat]
> ↳ [F1 Mahachai-Hybrids] *(Heavy domestic traits, thick scales, rounder tails)*
> ↳ Backcrossed to [Pure B. mahachaiensis]
> ↳ [F2 / F3 Mahachai-Hybrids] *(Looks 90% wild type, holds polluted genetics)*

- **The F1 Generation:** The initial cross yields fry that carry a chaotic mix of traits. They usually have heavily extended, domestic-style finnage, thicker bodies, and a solid iridescent sheen that completely covers the face. These look too much like domestic fish to be sold as "wild type."
- **The Backcross Phase:** To fix this, the breeder takes the best-looking F1 hybrid and breeds it back to a pure Betta mahachaiensis. By repeating this backcrossing process into the F2 and F3 generations, the breeder gradually washes away the obvious domestic traits while keeping the enhanced color intensity.

The final result is a Mahachai-hybrid that looks superficially identical to a pure wild fish but carries deeply polluted genetics. The most dangerous aspect of the Mahachai-hybrid is just how flawlessly it mimics the real thing. To a casual hobbyist, a high-grade green Mahachai-hybrid looks like a textbook wild specimen.

When sitting un-flared in a pet shop tank, a Mahachai-hybrid perfectly captures the general aesthetic signature of the pure species:

- **The Silhouette:** They match the elongated, slender, aerodynamic body shape that sets Mahachaiensis apart from stocky domestic bettas.
- **The Palette:** They display that breathtaking, high-contrast mix of brilliant bluish-green iridescence layered over a pitch-black or deep charcoal-brown body base.
- **The Fin Highlights:** They often feature long, dark pelvic fins with a striking iridescent green leading edge and a stark white tip—the classic visual calling card of the species.

Because a high-grade hybrid replicates these traits so accurately, it easily deceives the naked eye. This extreme visual similarity is exactly why the Zootaxa research team discovered that multiple market-bought specimens, which visually looked like perfect Betta mahachaiensis, were proven by DNA barcoding to be hidden Betta splendens hybrids. The optical illusion is so complete that without advanced genetic testing or an incredibly trained eye looking for microscopic flaws, they are virtually impossible for the average hobbyist to tell apart.

### Why the Market is Flooded with Hybrids

The dominance of the Mahachai-hybrid in the aqua trade isn't an accident; it is driven entirely by consumer preferences and the commercial advantage of domestic genes:

- **The Show-Ring Trap:** In commercial show competition circuits, bigger, rounder, and more dramatic fins grab the judges' eyes. Pure wild-types carry compact, streamlined fins designed to navigate dense Nipa palm roots. Mahachai-hybrids inherit domestic genes that artificially inflate fin volume, increase tail spread, and lengthen pelvic fins, meaning a pure wild-type will almost always lose on points against a flashy hybrid variant.
- **Instant Iridescence:** Pure wild lines require precise water parameters—specifically a low-salinity, tannin-heavy brackish biotope—to show their full, deep colors. Hybrids, thanks to their domestic splendens blood, maintain a hyper-bright, neon-metallic sheen even in standard, clear tap water, making them much easier for commercial shops to display and sell.
- **Mass Commercial Value:** Because consumers want the "wild look" but demand the vibrant, un-clamped color of a domestic show fish, breeders are commercially incentivized to keep crossing lines. This economic drive has completely flooded the market with lookalikes, pushing the original, authentic wild genetic blueprint out of main commercial breeding facilities.

---

## Pure Captive-Bred Conservation

With the market currently flooded with deceptive hybrid lookalikes, the responsibility to save the original species falls on a strict and disciplined method called pure captive selective breeding. Commercial operations usually cross-breed for instant and flashy results, but master preservationists treat captive breeding with extreme care. The goal is simple but incredibly difficult. They want to amplify the natural beauty, scale symmetry, and health of Betta mahachaiensis over multiple generations while keeping the genetic pool completely free of domestic pollution. A master breeder's job is basically to debug the lineage and hunt down tiny anomalies without altering the core genetics.

### The Legacy of Suwit Suadech

The blueprint for successful long-term genetic preservation of this species was established by pioneering Thai breeders like Suwit Suadech. His work is so foundational to the history of the species that he is explicitly credited within the official 2012 Zootaxa description paper. He provided vital specimens and breeding insights to the scientific community.

The researchers highlighted an incredible fact about his conservation efforts. He had successfully bred Betta mahachaiensis in captivity for more than 10 years. Across countless consecutive generations, his fish always bred true. Not a single specimen ever emerged showing domestic Betta splendens or Betta smaragdina anomalies.

When the Zootaxa team ran advanced DNA barcoding on his long-running captive stocks, the genetic signatures came back entirely unique to Betta mahachaiensis with zero traces of outside species pollution. This scientific validation proved that through disciplined selective breeding, it is entirely possible to enhance a wild species for captivity without degrading its genetic purity. Modern elite lines like those developed by Frank Sriboribun (FranksBettas) build directly upon this exact philosophy of strict genetic isolation and relentless selective breeding to produce show-grade fish.

---

## The Architecture of Show-Grade Selection Systems

To breed a show-grade pure wild-type that can consistently win trophies without losing its scientific integrity, a breeder must look past overall flashiness. They need to judge the fish on highly specific anatomical criteria.

The process requires a massive spawning run that often yields hundreds of fry. This is then followed by a rigorous selection process across several captive generations like F1, F2, F3, and beyond. When sorting through a generation to choose the next ancestral pairs, the selective breeding protocol focuses tightly on four foundational pillars:

1. **Ruthless Facial Culling (Enforcing the Matte-Black Boundary):** Because you are working with an unpolluted line, you will never see a fry with a full face mask. Instead, you are hunting for micro-flaws. The most important step in pure selective breeding is maintaining the strict face boundary. If a young male displays even a single rogue iridescent green scale creeping forward onto his snout, jawline, or underneath his eye socket, he is culled from the pure breeding program. Only specimens with a flawless and solid matte-black head are permitted to pass their genes down to the next generation.
2. **Dorsal Matrix Stabilization:** In the wild, the parallel cross-banding matrix on the dorsal fin can vary somewhat between individuals. Through generation after generation of selection, show-grade selective breeding stabilizes this trait until it acts like an exact and predictable barcode. Breeders look for fry that exhibit deep black and perfectly parallel lines crossing evenly over the green canvas. They must be entirely free of any blurred metallic blotches.
3. **Preserving the Balanced Spade-Tail:** While domestic show plakats are bred for massive 180-degree half-moon tail spreads, a pure Mahachaiensis must maintain its traditional teardrop or medially pointed silhouette. Breeders select for a powerful and robust caudal fin that naturally tapers into a symmetrical diamond or spade point when the fish snaps to full attention. The goal is to maximize fin crispness and ray alignment without artificially bloating the fin size to the point where it drags or loses its ancestral shape.
4. **Breeding for Aggressive Deportment (Stamina):** A show-grade wild betta is not just judged on looks. It is judged heavily on posture and attitude. Wild-caught bettas can sometimes be incredibly skittish, clamping their fins or hiding behind leaf cover when approached. Selective breeding slowly conditions out this extreme shyness. It is a technical grind to lock in this trait, but by selecting the boldest and most active flarers from every spawn, a master breeder produces pure wild-types that possess fierce territorial stamina. They will instantly flare at a judging stick or mirror without losing an ounce of confidence.

Selective breeding is a slow and patient grind that requires a masterfully trained eye. However, as proven by pioneering conservationists, it is the only pipeline capable of producing a flawless show-winning fish that still holds the exact genetic truth of its wild ancestors.`,

      my: `## Pengenalan

Betta mahachaiensis merupakan salah satu spesies nenek moyang betta domestik masa kini yang lazim ditemui di kedai haiwan peliharaan dan akuarium, bersama spesies lain seperti Betta splendens, Betta smaragdina, dan Betta imbellis. Ia dianggap sebagai spesies yang agak baru dihuraikan dalam kompleks Splendens, disebabkan oleh gabungan habitat yang sangat endemik dan bertahun-tahun salah penghuraian awal. Betta mahachaiensis hanya boleh ditemui di kawasan paya bakau nipah air payau di Wilayah Samut Sakhon dan beberapa kawasan kecil di barat Bangkok yang bersempadannya. Walaupun khabar angin awal dan laporan lama mendakwa mereka juga berada di Samut Prakan dan Samut Songkhram, tinjauan saintifik yang menyeluruh sebenarnya membuktikan jejak liar mereka jauh lebih terhad. Spesies ini pada asalnya ditemui di Samut Sakhon, khususnya di Maha Chai, yang memberikan nama spesifiknya (mahachai + -ensis, bermaksud "dari atau asli Mahachai").

Sebelum artikel Zootaxa diterbitkan pada tahun 2012, ikan ini sudah terkenal di kalangan penghobi dan perdagangan akua. Orang merujuknya sebagai Betta sp. Mahachai, Green Plakat, Mahachai Fighter, dan pelbagai nama serantau lain. Ini kerana ikan ini sering ditemui di gelanggang judi tempatan, Pasar Chatuchak, dan dalam video YouTube awal yang dimuat naik sebelum 2012. Sebelum penghuraian saintifik rasminya, ramai yang percaya ikan ini hanyalah hibrid liar Betta splendens. Walau bagaimanapun, kertas kerja Zootaxa 2012 membuktikan bahawa Betta mahachaiensis adalah spesies yang benar-benar berbeza, boleh dibezakan dengan jelas melalui fenotip dan genotipnya.

## Ancaman Kejayaan Komersial

Di pasaran hari ini, Betta mahachaiensis sangat dicari kerana penampilannya yang unik: badan yang ramping, kilauan iridesens biru-hijau yang mempesonakan menyelimuti badan hitam pekatnya, dan langsung tiada pigmen merah di mana-mana pada tubuhnya. Disebabkan permintaan yang sangat tinggi ini, Betta mahachaiensis telah dihibridkan secara besar-besaran untuk mencapai penampilan hiper-metalik yang diminta oleh perdagangan komersial. Hari ini, kita boleh menemui beberapa varieti, termasuk Mahachai-hibrid hijau, Mahachai-hibrid biru, malah varian tembaga atau perak. Ini menjadikan ikan ini sangat menarik dipandang dan amat kompetitif dalam arena pertandingan betta liar, di mana malangnya, penampilan liar tulen asal hampir selalu kalah berbanding versi hibrid yang lebih memukau.

Kesan buruk kejayaan komersial ini ialah pencemaran genetik. Mahachai-hibrid ini secara saintifik tidak boleh dipanggil Betta mahachaiensis tulen lagi, kerana cetak biru genetik mereka telah dikacukkan dengan Betta splendens, smaragdina, dan juga garisan domestik untuk mencapai ciri-ciri pertunjukan yang diingini. Hari ini, kita boleh mengklasifikasikan baka komersial ini di bawah kompleks Betta splendens yang lebih luas atau sebagai "Alien Bettas" (walaupun istilah ini kini digunakan untuk hibrid liar bertopeng penuh, "Alien" pada asalnya mengklasifikasikan mana-mana betta liar yang dikacukkan dengan betta liar atau domestik lain).

Oleh kerana pasaran kini dibanjiri Mahachai-hibrid yang kelihatan serupa dengan yang asli secara luaran, Betta mahachaiensis baka tulen amat sukar ditemui dalam perdagangan akua. Apabila seseorang akhirnya menyenaraikan spesimen tulen untuk dijual, skeptik dalam komuniti sering menafikannya, mengatakan ia hanya "diaku asli" dan menunjukkan bahawa "sesiapa sahaja boleh mendakwa ikan mereka tulen." Artikel ini berfungsi sebagai panduan definitif untuk membezakan hibrid gred pertunjukan daripada Betta mahachaiensis biakan tulen yang autentik.

---

## Kriteria Pengenalpastian Morfologi Berdasarkan Zootaxa (2012)

- **Tanda Operkular:** Penutup insang (operkulum) mesti memaparkan tepat dua bar iridesens hijau atau hijau-kebiruan yang selari dan menegak. Yang penting, membran operkular itu sendiri mesti berwarna perang-ke-hitam pepejal yang bebas sepenuhnya daripada sebarang jalur atau tompok merah (tidak seperti B. splendens atau B. imbellis).
- **Topeng Muka:** Kepala, pipi, tekak, dan bibir mesti kekal berwarna perang gelap matte yang bersih sehingga hitam pekat. Walaupun mungkin terdapat sisik iridesens yang jarang, spesimen tulen tidak memiliki topeng muka metalik pepejal (petunjuk jelas garisan "Alien" atau hibrid domestik).
- **Corak Sisik Badan:** Latar belakang badan berwarna perang gelap ke hitam, dengan pewarnaan iridesens hijau-ke-teal yang diagihkan secara sekata sebagai titik pusat pada setiap sisik individu sepanjang baris yang teratur. Ini menghasilkan penampilan seragam, grid-like atau seperti titisan yang bersih, bukannya kepingan metalik pepejal yang tidak terputus.
- **Matriks Sirip Dorsal:** Sirip dorsal mesti mempamerkan bar melintang hitam yang melintasi latar belakang iridesens hijau, meliputi sekurang-kurangnya dua pertiga proksimal sirip.
- **Sirip Kaudal (Penentu Hibrid):** Pinggir belakang sirip ekor berjulat dari bulat ke runcing di tengah. Yang paling penting, mesti tiada bar melintang gelap (jalur) pada sirip kaudal. Sebaliknya, cari tanda hitam kecil dan bulat yang mengapit ray sirip dalaman pada membran. Jika ekor mempunyai "jalur harimau" menegak pepejal, ia adalah hibrid.
- **Pewarnaan Sirip Anal & Pelvik:** Ray sirip anal adalah gelap, berbeza dengan membran biru-hijau terang, menirus ke titik di bahagian belakang. Sirip pelvik (ventral) berbentuk falkat (seperti sabit), perang-ke-hitam, memaparkan margin hadapan iridesens hijau/hijau-kebiruan yang jelas dan hujung putih yang tegas. Langsung tidak boleh ada pigmen merah atau oren yang meresap ke dalam sirip ini.

### Hakikat Pahit: "Rupa" Bukanlah Segalanya

Walaupun ciri fizikal adalah barisan pertahanan pertama kita, kertas kerja Zootaxa membuktikan B. mahachaiensis adalah keturunan evolusi yang bebas melalui pengekodan bar DNA gen mitokondria COI. Secara saintifik, jarak genetik antara Mahachai tulen dan Betta splendens adalah kira-kira 11%, dan 14% daripada Betta smaragdina. Menariknya, para penyelidik mencatatkan bahawa semasa kajian mereka, ikan yang dibeli dari pasaran komersial (seperti Chatuchak) yang kelihatan seperti pejuang Mahachai tulen telah didedahkan melalui penjujukan DNA sebagai hibrid rahsia yang membawa gen B. splendens. Ini membuktikan pencemaran genetik bukanlah teori baru—ia telah didokumenkan oleh saintis yang menemui spesies itu sendiri.

---

## Spesifikasi Pertandingan

Apabila mempamerkan Betta mahachaiensis, juri mencari ikan dewasa yang matang sepenuhnya yang mempamerkan saiz yang mengagumkan, siluet liar yang seimbang sempurna, dan kontras warna yang meriah. Memandangkan versi hibrid lazim di pasaran, ia dibenarkan bertanding dalam kelas asal, selagi pewarnaan dan ciri mengikut spesifikasi. Varian warna lain boleh menyertai "Kelas AOC." Walau bagaimanapun, ciri pertunjukan yang banyak diubah daripada garisan hibrid akan dikenakan penalti, dan sebarang kesan garisan domestik akan didiskualifikasi (DQ).

### Keperluan Saiz

- **Saiz Minimum Jantan:** 3.75 cm (1.5 inci) Badan Sahaja.
- **Saiz Minimum Betina:** 3.25 cm (1.25 inci) Badan Sahaja.
- **Nota:** Walaupun saiz minimum dikuatkuasakan dengan ketat, spesimen yang lebih besar sentiasa diutamakan di atas meja selagi mereka mengekalkan perkadaran yang betul.

### Bentuk, Rupa dan Metrik Sirip yang Ideal

Untuk mendapat markah tertinggi, spesimen yang kompetitif mesti mencapai bentuk anatomi dan nisbah sirip-ke-badan yang tepat:

- **Perkadaran Kepala & Badan:** Kepala mesti memaparkan bentuk bulat/bujur yang licin. Badan mesti panjang dan bulat, mengekalkan nisbah panjang-ke-tinggi yang ketat iaitu 4:1.
- **Sirip Dorsal:** Mesti berbentuk cantik seperti tiga suku bulatan dan memaparkan ray sirip tunggal.
- **Sirip Kaudal (Ekor):** Bentuk pertunjukan yang ideal ialah ekor spade yang bersih, walaupun ekor bulat yang kemas juga diterima. Ia mesti memaparkan ray sirip berganda, terbentang luas, dan mengekalkan nisbah panjang-ke-tinggi yang sempurna iaitu 1:1 semasa mengembang.
- **Sirip Anal:** Menirus menjadi bentuk trapezoid runcing. Panjang ray pertama yang paling dekat dengan kepala mestilah kira-kira 1/3 panjang hujung runcing yang dilanjutkan. Nisbah panjang-ke-tinggi yang ideal untuk keseluruhan sirip anal ialah 2:2. Ia mesti terdiri daripada ray sirip tunggal.
- **Sirip Ventral (Pelvik):** Tajam, berbentuk pisau, dan menghala lurus ke bawah. Panjang ideal mestilah tepat separuh daripada jumlah panjang badan ikan (termasuk kepala), yang sepatutnya sejajar sempurna dengan hujung sirip anal yang dilanjutkan.
- **Sirip Pektoral:** Saiz standard, berbentuk seperti kipas tangan dengan tepi yang licin dan bulat.

### Piawaian Warna yang Ketat

Kontras antara asas hitam pekat dan iridesens terang mesti tajam, pepejal, dan sangat meriah.

- **Kepala:** Hitam pekat, ditonjolkan dengan tajam oleh 2 bar iridesens hijau-kebiruan menegak pada operkulum.
- **Badan:** Asas hitam bersih dengan titik iridesens hijau-kebiruan yang jelas dan sepenuhnya terhad pada pusat sisik.
- **Sirip Dorsal:** Latar belakang hitam yang sepenuhnya diliputi corak iridesens "sarang labah-labah" yang rumit.
- **Sirip Kaudal:** Hitam pepejal, dipenuhi susun atur metalik hijau bercorak dan titik hitam yang jelas mengapit ray.
- **Sirip Anal:** Asas hitam dihiasi garisan metalik hijau yang bersih dan selari melalui corak.
- **Sirip Ventral:** Asas hitam pepejal dengan hujung putih yang tegas dan jelas.
- **Sirip Pektoral:** Hitam lutsinar yang bersih dan jernih.

### Kesalahan dan Penyahkelayakan Pertandingan

Jika anda ingin naik podium, ikan anda perlu mengelakkan kecacatan struktur dan warna berikut:

#### Kesalahan Bentuk dan Rupa

- **Profil Kepala Beralur:** Sebarang lekuk atau alur "kepala sudu" di belakang mata adalah Penyahkelayakan serta-merta.
- **Kepala Berbentuk Peluru:** Profil kepala yang meniru Betta splendens domestik adalah Kesalahan Teruk.
- **Hujung Sirip Anal Pendek:** Jika hujung runcing sirip anal terbantut dan gagal memenuhi nisbah ideal 2:2, ia ditandakan sebagai Kesalahan Besar.

#### Kesalahan Warna

- **Pigmentasi Merah (Petunjuk Hibrid):** Sebarang warna merah pada sirip dorsal, warna merah yang ketara pada pangkal sirip anal, atau pewarnaan merah pada sirip ventral dikira sebagai Kesalahan Besar. Warna merah sedikit yang hanya kelihatan di bawah cahaya ujian langsung yang keras dikenakan penalti sebagai Kesalahan Ringan.
- **Iridesens Hilang:** Ketiadaan iridesens sepenuhnya pada sirip anal adalah Kesalahan Besar, manakala corak garisan yang tidak sekata atau tidak kemas pada sirip anal atau kaudal adalah Kesalahan Kecil.
- **Corak Dorsal Tidak Lengkap:** Sirip dorsal yang tidak mempunyai corak iridesens "sarang labah-labah" penuh adalah Kesalahan Kecil.
- **Kecacatan Hujung Ventral:** Sirip ventral yang tidak mempunyai hujung putih khas ditandakan sebagai Kesalahan Kecil. Jika pewarnaan putih meresap terlalu jauh ke atas dan merebak liar ke arah pangkal sirip, ia juga merupakan Kesalahan Kecil.
- **Pewarnaan Keseluruhan Kusam:** Warna pucat dan luntur di seluruh badan dinilai sebagai Kesalahan Besar, manakala pengagihan titik badan yang tidak sekata adalah Kesalahan Kecil. Jika titik iridesens hijau gagal muncul pada sisik badan sepenuhnya, ia melonjak menjadi Kesalahan Teruk.

---

## Bagaimana Mahachai-Hibrid Direkayasa

Untuk memahami ancaman pencemaran genetik, anda perlu melihat bagaimana penternak sengaja membina Mahachai-hibrid. Kerana semua ahli kompleks Betta splendens berkongsi struktur kromosom yang sangat serasi, mengacukkan spesies yang berbeza tidak menghasilkan hibrid mandul. Sebaliknya, ia menghasilkan anak yang benar-benar subur yang boleh dibiakkan semula ke garisan tulen atau dikacukkan dengan varian lain tanpa had.

Untuk menembusi pasaran komersial permintaan tinggi, penternak biasanya bermula dengan Betta mahachaiensis liar tulen standard dan mengacukkannya dengan Plakat Sirip Pendek Metalik Hijau atau Biru domestik (Betta splendens).

> **Saluran Pembiakan:**
> [Jantan Tulen B. mahachaiensis] x [Plakat Metalik Domestik]
> ↳ [F1 Mahachai-Hibrid] *(Ciri domestik berat, sisik tebal, ekor lebih bulat)*
> ↳ Kacuk balik ke [B. mahachaiensis Tulen]
> ↳ [F2 / F3 Mahachai-Hibrid] *(Kelihatan 90% jenis liar, menyimpan genetik tercemar)*

- **Generasi F1:** Kacukan awal menghasilkan burayak yang membawa campuran ciri yang huru-hara. Mereka biasanya mempunyai sirip gaya domestik yang sangat lanjut, badan yang lebih tebal, dan kilauan iridesens pepejal yang sepenuhnya menutupi muka. Ini kelihatan terlalu seperti ikan domestik untuk dijual sebagai "jenis liar."
- **Fasa Kacuk Balik:** Untuk memperbaiki ini, penternak mengambil hibrid F1 yang paling cantik dan membiakkannya semula dengan Betta mahachaiensis tulen. Dengan mengulang proses kacuk balik ini ke dalam generasi F2 dan F3, penternak secara beransur-ansur menghilangkan ciri domestik yang jelas sambil mengekalkan intensiti warna yang dipertingkat.

Hasil akhir ialah Mahachai-hibrid yang kelihatan sama secara luaran dengan ikan liar tulen tetapi membawa genetik yang sangat tercemar. Aspek paling berbahaya Mahachai-hibrid ialah betapa sempurnanya ia meniru yang asli. Bagi penghobi biasa, Mahachai-hibrid hijau gred tinggi kelihatan seperti spesimen liar buku teks.

Apabila duduk tanpa mengembang dalam tangki kedai haiwan, Mahachai-hibrid menangkap tanda estetik umum spesies tulen dengan sempurna:

- **Siluet:** Mereka menyamai bentuk badan yang memanjang, ramping, dan aerodinamik yang membezakan Mahachaiensis daripada betta domestik yang gempal.
- **Palet:** Mereka mempamerkan campuran kontras tinggi yang memukau antara iridesens biru-hijau cemerlang berlapis di atas asas badan hitam pekat atau perang arang yang dalam.
- **Sorotan Sirip:** Mereka sering memaparkan sirip pelvik yang panjang dan gelap dengan pinggir hadapan iridesens hijau yang mencolok dan hujung putih yang tegas—tanda panggilan visual klasik spesies ini.

Oleh kerana hibrid gred tinggi mereplikasi ciri-ciri ini dengan begitu tepat, ia mudah memperdaya mata kasar. Keserupaan visual yang melampau ini tepat mengapa pasukan penyelidik Zootaxa menemui bahawa pelbagai spesimen yang dibeli di pasaran, yang secara visual kelihatan seperti Betta mahachaiensis yang sempurna, dibuktikan melalui pengekodan bar DNA sebagai hibrid Betta splendens tersembunyi. Ilusi optik ini begitu sempurna sehingga tanpa ujian genetik lanjutan atau mata yang sangat terlatih mencari kecacatan mikroskopik, mereka hampir mustahil untuk dibezakan oleh penghobi biasa.

### Mengapa Pasaran Dibanjiri Hibrid

Penguasaan Mahachai-hibrid dalam perdagangan akua bukanlah satu kebetulan; ia didorong sepenuhnya oleh keutamaan pengguna dan kelebihan komersial gen domestik:

- **Perangkap Arena Pertunjukan:** Dalam litar pertandingan komersial, sirip yang lebih besar, lebih bulat, dan lebih dramatik menarik perhatian juri. Jenis liar tulen membawa sirip yang padat dan aerodinamik, direka untuk mengemudi akar nipah yang padat. Mahachai-hibrid mewarisi gen domestik yang mengembungkan isi padu sirip secara tiruan, meningkatkan bentangan ekor, dan memanjangkan sirip pelvik, bermakna jenis liar tulen hampir selalu kalah markah berbanding varian hibrid yang memukau.
- **Iridesens Segera:** Garisan liar tulen memerlukan parameter air yang tepat—khususnya biotop air payau berkemasinan rendah dan kaya tanin—untuk menunjukkan warna penuh dan dalam mereka. Hibrid, berkat darah splendens domestik mereka, mengekalkan kilauan hiper-terang, metalik-neon walaupun dalam air paip jernih standard, menjadikan mereka lebih mudah untuk kedai komersial mempamerkan dan menjual.
- **Nilai Komersial Massa:** Kerana pengguna mahukan "penampilan liar" tetapi menuntut warna yang meriah dan tidak terjepit daripada ikan pertunjukan domestik, penternak secara komersial diberi insentif untuk terus mengacukkan garisan. Dorongan ekonomi ini telah membanjiri pasaran sepenuhnya dengan yang serupa, menolak cetak biru genetik liar asal dan autentik keluar dari kemudahan pembiakan komersial utama.

---

## Konservasi Pembiakan Tulen dalam Kurungan

Dengan pasaran yang kini dibanjiri hibrid tiruan yang menipu, tanggungjawab untuk menyelamatkan spesies asal terletak pada kaedah yang ketat dan berdisiplin yang dipanggil pembiakan selektif tulen dalam kurungan. Operasi komersial biasanya mengacukkan untuk hasil segera dan memukau, tetapi pemelihara pakar merawat pembiakan dalam kurungan dengan sangat berhati-hati. Matlamatnya mudah tetapi amat sukar. Mereka mahu memperkuat keindahan semulajadi, simetri sisik, dan kesihatan Betta mahachaiensis merentasi pelbagai generasi sambil memastikan kolam genetik bebas sepenuhnya daripada pencemaran domestik. Tugas penternak pakar pada dasarnya ialah menyahpepijat keturunan dan memburu anomali kecil tanpa mengubah genetik teras.

### Warisan Suwit Suadech

Pelan tindakan untuk pemeliharaan genetik jangka panjang yang berjaya bagi spesies ini telah ditetapkan oleh penternak Thai perintis seperti Suwit Suadech. Kerja beliau begitu asas kepada sejarah spesies sehingga beliau secara eksplisit dikreditkan dalam kertas kerja penghuraian rasmi Zootaxa 2012. Beliau menyediakan spesimen penting dan pandangan pembiakan kepada komuniti saintifik.

Para penyelidik menonjolkan fakta yang luar biasa tentang usaha konservasi beliau. Beliau telah berjaya membiakkan Betta mahachaiensis dalam kurungan selama lebih daripada 10 tahun. Merentasi generasi berturut-turut yang tidak terkira, ikan beliau sentiasa membiak dengan benar. Tidak satu pun spesimen pernah muncul menunjukkan anomali Betta splendens atau Betta smaragdina domestik.

Apabila pasukan Zootaxa menjalankan pengekodan bar DNA lanjutan pada stok kurungan beliau yang lama berjalan, tandatangan genetik kembali sepenuhnya unik kepada Betta mahachaiensis dengan sifar kesan pencemaran spesies luar. Pengesahan saintifik ini membuktikan bahawa melalui pembiakan selektif yang berdisiplin, adalah sepenuhnya mungkin untuk meningkatkan spesies liar untuk kurungan tanpa merosakkan ketulenan genetiknya. Garisan elit moden seperti yang dibangunkan oleh Frank Sriboribun (FranksBettas) dibina secara langsung atas falsafah tepat ini iaitu pengasingan genetik yang ketat dan pembiakan selektif tanpa henti untuk menghasilkan ikan gred pertunjukan.

---

## Senibina Sistem Pemilihan Gred Pertunjukan

Untuk membiakkan jenis liar tulen gred pertunjukan yang boleh secara konsisten memenangi trofi tanpa kehilangan integriti saintifiknya, penternak mesti melihat melangkaui kemegahan keseluruhan. Mereka perlu menilai ikan berdasarkan kriteria anatomi yang sangat spesifik.

Proses ini memerlukan larian pemijahan besar-besaran yang sering menghasilkan ratusan burayak. Ini kemudian diikuti oleh proses pemilihan yang ketat merentasi beberapa generasi kurungan seperti F1, F2, F3, dan seterusnya. Apabila menapis melalui generasi untuk memilih pasangan nenek moyang seterusnya, protokol pembiakan selektif menumpukan dengan ketat pada empat tiang asas:

1. **Penyingkiran Muka yang Kejam (Menguatkuasakan Sempadan Hitam-Matte):** Kerana anda bekerja dengan garisan yang tidak tercemar, anda tidak akan pernah melihat burayak dengan topeng muka penuh. Sebaliknya, anda memburu kecacatan mikro. Langkah paling penting dalam pembiakan selektif tulen ialah mengekalkan sempadan muka yang ketat. Jika jantan muda mempamerkan walaupun satu sisik iridesens hijau yang merayap ke hadapan pada muncung, garis rahang, atau di bawah soket matanya, ia disingkirkan daripada program pembiakan tulen. Hanya spesimen dengan kepala hitam-matte yang sempurna dan pepejal dibenarkan mewariskan gen mereka kepada generasi seterusnya.
2. **Penstabilan Matriks Dorsal:** Di alam liar, matriks jalur silang selari pada sirip dorsal boleh berbeza sedikit antara individu. Melalui generasi demi generasi pemilihan, pembiakan selektif gred pertunjukan menstabilkan ciri ini sehingga ia bertindak seperti kod bar yang tepat dan boleh diramal. Penternak mencari burayak yang mempamerkan garisan hitam pekat dan selari sempurna yang melintang secara sekata di atas kanvas hijau. Ia mesti sepenuhnya bebas daripada sebarang tompok metalik kabur.
3. **Memelihara Ekor-Spade Seimbang:** Manakala plakat pertunjukan domestik dibiakkan untuk bentangan ekor separuh bulan 180 darjah yang besar, Mahachaiensis tulen mesti mengekalkan siluet titisan air atau runcing di tengah tradisionalnya. Penternak memilih sirip kaudal yang kuat dan tegap yang secara semulajadi menirus menjadi titik berlian atau spade yang simetri apabila ikan bertindak dalam perhatian penuh. Matlamatnya ialah memaksimumkan ketajaman sirip dan penjajaran ray tanpa mengembungkan saiz sirip secara tiruan sehingga ia terseret atau kehilangan bentuk nenek moyangnya.
4. **Pembiakan untuk Lagak Agresif (Stamina):** Betta liar gred pertunjukan bukan sahaja dinilai atas rupa. Ia dinilai berat pada postur dan sikap. Betta tangkapan liar kadangkala boleh sangat penakut, mengempit sirip atau bersembunyi di sebalik penutup daun apabila didekati. Pembiakan selektif perlahan-lahan mengkondisikan keluar rasa malu melampau ini. Ia adalah kerja teknikal yang penat untuk mengunci ciri ini, tetapi dengan memilih pengembang yang paling berani dan paling aktif daripada setiap pemijahan, penternak pakar menghasilkan jenis liar tulen yang memiliki stamina wilayah yang garang. Mereka akan serta-merta mengembang pada batang penilaian atau cermin tanpa kehilangan sedikit pun keyakinan.

Pembiakan selektif adalah kerja perlahan dan sabar yang memerlukan mata yang sangat terlatih. Walau bagaimanapun, seperti yang dibuktikan oleh pemelihara perintis, ia adalah satu-satunya saluran yang mampu menghasilkan ikan pemenang pertunjukan yang sempurna yang masih memegang kebenaran genetik tepat nenek moyang liarnya.`,
    },
  },
};
