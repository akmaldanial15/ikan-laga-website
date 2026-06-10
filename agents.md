# Developer / AI Agents Notes

Dokumen ini mengandungi nota untuk rujukan pembangun (Banglong/Maman) atau ejen AI bagi penyelenggaraan website **Wild Betta Malaysia**.

## Reka Bentuk CSS & Pembersihan Kod (Code Cleaning)

Bagi memenuhi perancangan **Banglong** untuk melakukan pembersihan kod (*code cleaning*) menggunakan fail CSS khusus bagi setiap halaman (menggantikan atau mengasingkan kelas Tailwind inline), kami telah menyediakan fail-fail **CSS Modules** di dalam setiap folder halaman:

### Senarai Fail CSS Modules Disediakan:
1. **Halaman Utama (`/`)**: 
   * [page.module.css](file:///c:/Users/maman/OneDrive/Documents/Degree/carrer%20maman/A%20maman%20dan%20banglong%20business/ikan%20laga%20website/src/app/page.module.css)
2. **Panduan Penjagaan (`/care`)**: 
   * [care.module.css](file:///c:/Users/maman/OneDrive/Documents/Degree/carrer%20maman/A%20maman%20dan%20banglong%20business/ikan%20laga%20website/src/app/care/care.module.css)
3. **Daun Ketapang (`/leaves`)**: 
   * [leaves.module.css](file:///c:/Users/maman/OneDrive/Documents/Degree/carrer%20maman/A%20maman%20dan%20banglong%20business/ikan%20laga%20website/src/app/leaves/leaves.module.css)
4. **Cara Beli (`/purchase`)**: 
   * [purchase.module.css](file:///c:/Users/maman/OneDrive/Documents/Degree/carrer%20maman/A%20maman%20dan%20banglong%20business/ikan%20laga%20website/src/app/purchase/purchase.module.css)
5. **Hubungi Kami (`/contact`)**: 
   * [contact.module.css](file:///c:/Users/maman/OneDrive/Documents/Degree/carrer%20maman/A%20maman%20dan%20banglong%20business/ikan%20laga%20website/src/app/contact/contact.module.css)
6. **Kedai/Shop (`/shop`)**: 
   * [shop.module.css](file:///c:/Users/maman/OneDrive/Documents/Degree/carrer%20maman/A%20maman%20dan%20banglong%20business/ikan%20laga%20website/src/app/shop/shop.module.css)

---

### Cara Menggunakan CSS Modules dalam Kod Page:

Bila Banglong bersedia untuk memindahkan gaya kelas Tailwind ke dalam CSS bersih, ikut format ini dalam fail `page.tsx` berkenaan:

1. **Import CSS Module**:
   ```typescript
   import styles from "./care.module.css";
   ```

2. **Gunakan Kelas CSS**:
   Gantikan `className="..."` dengan rujukan objek `styles`:
   ```tsx
   // SEBELUM:
   <div className="mx-auto max-w-5xl px-6 py-16">
   
   // SELEPAS (Menggunakan CSS Module):
   <div className={styles.container}>
   ```

3. **Tulis CSS Bersih**:
   Tulis kod CSS di dalam fail `.module.css` tersebut:
   ```css
   .container {
     margin-left: auto;
     margin-right: auto;
     max-width: 64rem; /* 5xl */
     padding-left: 1.5rem;
     padding-right: 1.5rem;
     padding-top: 4rem;
     padding-bottom: 4rem;
   }
   ```
