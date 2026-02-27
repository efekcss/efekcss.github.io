# efekcss.github.io — Kişisel Web Sitesi (Statik)

Bu depo, H. Efe Kocasu'nun kişisel portföy sitesinin statik versiyonunu içerir. Proje artık React/Vite tabanlı değildir; site doğrudan kök `index.html` dosyası ile sunulur. Amaç: hızlı, kolay yönetilebilir ve doğrudan GitHub Pages üzerinde yayınlanabilir bir statik site yapısı sağlamak.

Özet
- Tür: Statik web sitesi (HTML + Tailwind via CDN)
- Yayın: GitHub Pages (repository `main` branch) — https://efekcss.github.io/
- Ana dosya: `index.html`

Önemli Not
- Projede daha önce React/Vite kullanılan kaynaklar temizlendi. Eğer ileride yeniden React isterseniz commit geçmişinde önceki sürümlere dönebilirsiniz.

Teknolojiler
- HTML5
- Tailwind CSS (CDN üzerinden)
- Google Fonts (Inter, Material Symbols)
- Saf JavaScript (gerekirse küçük etkileşimler için eklenir)
- Git + GitHub Pages (yayınlama)

Mimari ve Yapı
- Tek sayfa (single static file) yaklaşımı: `index.html` içinde tüm içerik, stiller (Tailwind sınıfları), ve gerekli küçük yardımcı stiller yer alır.
- Arka plan animasyonları ve efektler Tailwind sınıfları ve inline `style`/`script` konfigürasyonlarıyla uygulanmıştır.

Dosya/klasör yapısı (kök)
- index.html — Site ana HTML dosyası (hero, services, selected work, contact, footer)
- README.md — (Bu dosya)
- .gitignore, .eslintrc, metadata.json — yardımcı dosyalar

Önceki (silinmiş) içerikler
- `src/` klasörü ve Node araç zinciri (package.json, vite, tsconfig, CI workflow) kaldırıldı — çünkü site statik olarak yönetilecek.

Yerel Geliştirme & Test
1. Basit bir HTTP sunucusu kullanarak yerelde çalıştırın (hiç Node gerektirmez):

```bash
# proje kökünde çalıştırın
python3 -m http.server 3000
# sonra tarayıcıda açın:
http://localhost:3000/
```

2. Değişiklik yaptıktan sonra Git ile commit & push yapın; GitHub Pages otomatik olarak yayınlayacaktır.

Özelleştirme Rehberi (Hızlı)
- Başlık / içerik değişikliği: `index.html` içindeki ilgili bölümleri düzenleyin.
- Renkler / animasyonlar: `index.html` içinde `tailwind.config` benzeri inline ayarlar ve `style` blokları yer alır. Basit renk değişiklikleri için `primary` sınıfını arayın ve hex kodunu değiştirin.
- Fontlar: Google Fonts bağlantıları `index.html` head kısmında bulunmaktadır. Farklı bir font eklemek isterseniz orayı güncelleyin.
- Görseller: Mevcut görseller harici URL kullanıyor. Kendi görsellerinizi eklemek için `images/` gibi bir klasör oluşturup `index.html` içindeki `src` değerlerini güncelleyin.

Erişilebilirlik & SEO
- Her görsel `alt` veya `data-alt` ile işaretlenmiştir; canlı yayında `alt` eklemeyi/iyileştirmeyi düşünebilirsiniz.
- Başlıklar (`h1`, `h2`) ve meta viewport zaten ayarlı; meta description eklemek isterseniz `index.html` head kısmına ekleyin.

Yayınlama (GitHub Pages)
- Bu repo `main` branch üzerinde `index.html` kök dosyası ile yayınlanır. Değişiklik yaptığınızda `git add && git commit && git push` yeterlidir; GitHub Pages birkaç dakika içinde güncellenecektir.

Geri alma / Geçmiş
- Eğer React tabanlı eski sürümlere geri dönmek isterseniz commit geçmişinden önceki commit'leri kullanabilirsiniz (ör: `git log` ve `git checkout <commit>`).

Öneriler / İleri adımlar
- Küçük değişiklikler için doğrudan `index.html` düzenleyin.
- Daha büyük geliştirmeler, component tabanlı çalışma veya SSG/SSG için (Next.js, Astro vs.) gelecekte yeniden Node tabanlı yapı eklemeyi düşünebilirsiniz.

Katkıda Bulunma
- Kişisel repo olduğu için katkı süreci basittir: değişiklik yapın, commit edin ve pushlayın. Yardım veya öneri isterseniz issue açın veya doğrudan iletişime geçin.

İletişim
- E-posta: kocasuhasanefe@gmail.com
- GitHub: https://github.com/efekcss

Lisans
- Bu proje kişisel kullanıma yöneliktir; açık kaynak lisansı eklemek isterseniz talimat verin, `LICENSE` dosyası ekleyebilirim.

---
Bu README, projenin statik yapı ve yönetimini kolaylaştırmak için hazırlandı. Daha spesifik bir bölüm eklememi isterseniz (ör. detaylı CSS açıklamaları, erişilebilirlik checklist, ya da deploy adımları), söyleyin; hemen eklerim.
