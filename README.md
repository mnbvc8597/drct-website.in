# DRCT Website / DRCT இணையதளம்
Static website for Dhandapani Rural Charitable Trust, Gobichettipalayam. No server, no database, free on GitHub Pages.
இது சர்வர் / டேட்டாபேஸ் இல்லாத இலவச GitHub Pages இணையதளம்.

## Files / கோப்புகள்
| File | Purpose / பயன் |
|---|---|
| index.html | Page structure / பக்க அமைப்பு |
| style.css | Colours & design / நிறங்கள், வடிவமைப்பு |
| script.js | Contact details (CONFIG), schemes, gallery, faculty, downloads, jobs |
| courses.json | All courses / அனைத்து படிப்புகள் |
| announcements.json | All notices / அறிவிப்புகள் |
| assets/images | Logo & photos / லோகோ, படங்கள் |
| assets/pdf | Public PDF notices / பொது PDF கோப்புகள் |

## FIRST: fill official details / முதலில் அதிகாரப்பூர்வ விவரங்கள்
1. Open `script.js` → edit `CONFIG` (phone, WhatsApp, email, address, hours). Leave `""` if unknown – the site shows a yellow placeholder.
   `script.js` → `CONFIG` பகுதியில் தொலைபேசி, WhatsApp (எ.கா. `919876543210`), மின்னஞ்சல், முகவரி நிரப்பவும்.
2. Logo: save as `assets/images/logo.png` (square, ~200×200). / லோகோவை `assets/images/logo.png` ஆக சேமிக்கவும்.
3. Replace every yellow `[ ... ]` placeholder (Vision, Mission, history, faculty, stories) with verified facts only. Do not publish unverified approvals or numbers.
   மஞ்சள் `[ ... ]` இடங்களை சரிபார்க்கப்பட்ட தகவலால் மட்டும் நிரப்பவும்.

## Publish on GitHub Pages / GitHub Pages-ல் வெளியிட
1. Create a free account at github.com. / github.com-ல் இலவச கணக்கு உருவாக்கவும்.
2. Click **New repository** → name e.g. `drct-website` → **Public** → Create.
3. Click **uploading an existing file** → drag ALL files and the `assets` folder (index.html must be at the top level) → **Commit changes**.
   எல்லா கோப்புகளையும் `assets` folder-ஐயும் இழுத்து விடவும் → **Commit changes**.
4. **Settings → Pages → Branch: main, folder: / (root) → Save.**
5. Wait 1–2 minutes. Your site: `https://YOUR-USERNAME.github.io/drct-website/`
   Note: opening index.html by double-click will not load the JSON lists. Use the GitHub link (or VS Code "Live Server").

## Update courses / படிப்புகளை மாற்ற
GitHub → open `courses.json` → pencil icon ✏ → copy one `{ ... }` block, paste after it with a comma, change values → **Commit changes**.
Remove a course: delete its `{ ... }` block. `status` = `Open`, `Closed` or `Coming Soon`. `featured: true` shows on Home. Keep all commas and quotes. Validate at jsonlint.com.
படிப்பை நீக்க அதன் `{ ... }` பகுதியை நீக்கவும். காற்புள்ளி (,) மற்றும் மேற்கோள் குறிகளை கவனமாக வைக்கவும்.

## Publish a new announcement / புதிய அறிவிப்பு
Edit `announcements.json` the same way. `date` must be `YYYY-MM-DD`. Newest shows first; notices under 30 days old get a NEW badge.

## Upload a public PDF notice / PDF பதிவேற்ற
1. Open `assets/pdf` → **Add file → Upload files** → choose PDF (use simple names: `notice-oct-2026.pdf`) → Commit.
2. In `announcements.json` set `"pdf": "assets/pdf/notice-oct-2026.pdf"`. For the Downloads list, edit `DOWNLOADS` in `script.js`.
Never upload student lists, Aadhaar, phone numbers or any personal data. / மாணவர் தனிப்பட்ட தகவல்களை ஒருபோதும் பதிவேற்ற வேண்டாம்.

## Replace / add photos / படங்களை மாற்ற
1. Resize photos to ~1200 px wide (under 300 KB each) for fast loading. / படங்களை சிறிதாக்கவும்.
2. Upload to `assets/images`.
3. In `script.js`, edit the `GALLERY` list: `{ file: "assets/images/event1.jpg", caption: "...", category: "Training" }`.
Use the same file name to replace a photo.

## Privacy / தனியுரிமை
No forms, logins or tracking. Enquiries go through WhatsApp / phone / email links. A static site cannot have a secure admin panel – all edits happen in your private GitHub account.
