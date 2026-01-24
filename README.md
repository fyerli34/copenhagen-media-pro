# Digi Alfa - Digital Agency Clone

WordPress şablonunuzdan klonlanmış modern bir Next.js web sitesi.

## 🚀 Özellikler

- ✅ Modern Next.js 15 + TypeScript
- ✅ Tailwind CSS ile responsive tasarım
- ✅ shadcn/ui komponentleri
- ✅ Kolay içerik yönetimi
- ✅ GDevelop oyun entegrasyonu için hazır alan
- ✅ Tüm görseller ve metinler özelleştirilebilir

## 📁 Proje Yapısı

```
digialfa-clone/
├── src/
│   ├── app/              # Next.js sayfaları
│   ├── components/       # Tüm bölüm komponentleri
│   └── lib/
│       └── content.ts    # İÇERİK YÖNETİMİ BURADAN
```

## 🎨 İçerik Nasıl Değiştirilir?

### 1. Logo Değiştirme

`src/lib/content.ts` dosyasını açın:

```typescript
logo: {
  text: "DIGI ALFA",
  imageUrl: "/logo.png", // Buraya kendi logo URL'inizi ekleyin
}
```

Logo dosyanızı `public/` klasörüne ekleyin veya harici bir URL kullanın.

### 2. Metinleri Değiştirme

Tüm metinler `content.ts` dosyasındadır. Örnek:

```typescript
hero: {
  title: {
    part1: "İŞLETMENİZİ GELİŞTİRİN",
    highlighted: "DAHA HIZLI",
    part2: "BİZ SAĞLIYORUZ"
  },
  description: "Kendi açıklamanız...",
  // ...
}
```

### 3. Görselleri Değiştirme

Görseller için 2 yöntem:

**a) Harici URL kullanın:**
```typescript
images: [
  "https://your-cdn.com/image1.jpg",
  "https://your-cdn.com/image2.jpg"
]
```

**b) Yerel dosya kullanın:**
1. Görseli `public/images/` klasörüne koyun
2. URL'yi `/images/your-image.jpg` olarak güncelleyin

### 4. 🎮 GDevelop Oyunu Ekleme

#### Adım 1: HTML5 Export Alın
1. GDevelop'ta projenizi açın
2. `File > Export > Web (HTML5)` seçin
3. Export'u tamamlayın

#### Adım 2: Oyunu Yükleyin
Oyun dosyalarınızı bir hosting servisine yükleyin:
- [Netlify](https://netlify.com) (Ücretsiz)
- [Vercel](https://vercel.com) (Ücretsiz)
- [GitHub Pages](https://pages.github.com) (Ücretsiz)

#### Adım 3: URL'yi Ekleyin
`src/lib/content.ts` dosyasında:

```typescript
gameSection: {
  enabled: true,
  gameUrl: "https://your-game-url.com", // Oyununuzun URL'i
  // ...
}
```

Oyun iframe içinde otomatik olarak görünecektir!

## 🛠️ Geliştirme

```bash
# Geliştirme sunucusunu başlat
bun run dev

# Production build
bun run build

# Production sunucusu
bun start
```

## 📝 Bölümler

Tüm bölümler kolayca özelleştirilebilir:

1. **Header** - Logo ve navigasyon
2. **Hero** - Ana başlık ve CTA
3. **Game Section** - Oyun alanı (özelleştirilebilir)
4. **Scrolling Banner** - Hizmetler banner'ı
5. **About** - Hakkımızda bölümü
6. **Stats** - İstatistikler
7. **Services** - Hizmetler kartları
8. **Projects** - Proje showcase
9. **Pricing** - Fiyatlandırma planları
10. **Team** - Ekip üyeleri
11. **Testimonials** - Müşteri yorumları
12. **Blog** - Blog yazıları
13. **CTA** - İletişim çağrısı
14. **Footer** - Alt bilgi

## 🎨 Renkleri Değiştirme

`src/app/globals.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
  --primary: 262.1 83.3% 57.8%; /* Mor renk */
  /* Diğer renkler... */
}
```

## 📱 Responsive

Site tamamen responsive'dir:
- Mobil (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Deploy (Yayınlama)

### Netlify
```bash
bun run build
# Netlify'da "digialfa-clone" klasörünü yükleyin
```

### Vercel
```bash
vercel
# Komutları takip edin
```

## 💡 İpuçları

1. **Görselleri optimize edin:** [TinyPNG](https://tinypng.com) kullanın
2. **Metinleri SEO uyumlu yapın:** `content.ts` içindeki metinleri özelleştirin
3. **Renkleri markanıza uyarlayın:** `globals.css` değişkenlerini düzenleyin
4. **Bölümleri yeniden sıralayın:** `src/app/page.tsx` içinde sırayı değiştirin

## 🆘 Yardım

Sorunlarla karşılaşırsanız:

1. `bun install` komutu ile bağımlılıkları yeniden yükleyin
2. `.next` klasörünü silin ve yeniden başlatın
3. Tarayıcı konsolunu kontrol edin (F12)

## 📄 Lisans

Bu proje sizin kullanımınız içindir. Dilediğiniz gibi özelleştirebilirsiniz.

---

**Not:** Tüm içerik değişiklikleri için sadece `src/lib/content.ts` dosyasını düzenlemeniz yeterlidir!
