# Benim Site Kaynağım — efe (Hasan Efe Kocasu)

Merhaba — bu repo, benim kişisel portföy sitemin statik versiyonunu barındırıyor. Ben siteyi doğrudan HTML + Tailwind (CDN) ile basit, hızlı ve kolay yönetilebilir tutmayı tercih ettim. Aşağıda projeyi nasıl kullanacağımı, nasıl düzenleyeceğimi ve neden bu şekilde tuttuğumu adım adım yazdım.

## Kısa Özet
- Tür: Statik web sitesi (tek `index.html` dosyası)
- Yayın: GitHub Pages — https://efekcss.github.io/
- Ana dosya: `index.html` (tüm içerik ve görseller burada veya harici URL'lerde)

## Neden statik?
Benim için yönetimi kolay olmalıydı. Hızlı değişiklik yapmak, dosyayı doğrudan düzenlemek ve anında GitHub Pages üzerinden yayınlamak istedim. React/Vite gibi araçlar güçlü ama ekstra karmaşıklık getiriyor; bu projede gereksizdi, bu yüzden temizledim.

## Ne var içeride
- `index.html` — site içeriği, stiller ve küçük yardımcı CSS/JS
- `README.md` — bu belge
- `metadata.json` — proje hakkında hızlı bilgiler (yazar, iletişim, teknoloji listesi)
- `.gitignore` — gereksiz dosyaların repo'ya eklenmesini engeller

## Hangi teknolojileri kullandım
- HTML5
- Tailwind CSS (CDN üzerinden, inline konfigürasyonla)
- Google Fonts (Inter, Material Symbols)
- Saf JavaScript (gerektiğinde)
- Git + GitHub Pages (yayınlama)

## Hızlı düzenleme rehberi (benim ağzımdan)
1. `index.html` dosyasını açarım.
2. Başlık, hero metni, servisler veya referans görselleri değiştirmek istiyorsam ilgili bölümde düzenleme yaparım.
3. Yeni görsel ekleyeceksem projede `images/` gibi bir klasör açarım ve `index.html` içindeki `src` adreslerini buna göre güncellerim.
4. Renk veya efekt değiştirmek istersem `index.html` içinde `primary` renk tanımını veya inline `style` bloklarını güncellerim.
5. Değişiklikleri kaydederim, sonra terminalde:

```bash
git add -A
git commit -m "Güncelleme: <kısa açıklama>"
git push origin main
```

GitHub Pages birkaç dakika içinde güncelleyecektir.

## Yerelde hızlı test
Node yüklemeye gerek yok. Terminalde proje kökünden:

```bash
python3 -m http.server 3000
# sonra tarayıcıda aç: http://localhost:3000
```

## Notlar — Temizleme/Geçmiş
- Önceden proje React + Vite ile geliyordu; ben bu sürümü kaldırdım. Eğer gelecekte component tabanlı geliştirme istersem commit geçmişinden eski sürümlere dönebiliyorum.

## Metadata ve iletişim
- `metadata.json` dosyasında yazar, site URL ve kullanılan teknolojiler bulunuyor. Bunu otomatik araçlar veya dokümantasyon için kullanabilirim.
- Bana ulaşmak isterseniz: `kocasuhasanefe@gmail.com` veya GitHub: https://github.com/efekcss

## Yayınlama & bakım notları
- Repo kökünde `index.html` bulunuyorsa GitHub Pages otomatik olarak bu dosyayı sunar (ayarlarda `main` — root seçili olmalı).
- Eğer site görünmezse GitHub repo ayarlarından Pages bölümünü kontrol ederim.

## İleri adımlar (opsiyonel)
- İleride siteyi daha kolay yönetmek istersen, küçük bir CMS veya Netlify CMS eklemeyi düşünebilirim.
- Çok daha büyük bir revizyon istersen (componentlar, veri dosyaları, build adımları), tekrar Node tabanlı bir workflow kurarım.

---
Bu README benim kişisel notum şeklinde yazıldı — istersen başka bir üslup, ayrıntı veya teknik bölüm ekleyebilirim. Ne eklememi istersin? 

