# Website photo sources and recovery

**TLDR:** The website serves 13 saved photographs locally, restoring 18 image placements without the inaccessible external image host. Elizabeth, Nick, and Lorena still need their original portraits; their initials remain visible.

Recovered September 11, 2026. All files below are under `client/public/photos/` and are copied without pixel edits. Instagram cover images can be a different frame or crop from the former website export; this is source recovery, not a claim of identical exported bytes.

## Saved sources

| Local file | Source | Recovery notes |
| --- | --- | --- |
| `brando-dancing.jpg` | [Original Drive photograph](https://drive.google.com/file/d/1OZhXX2GNJpvujyAnqgnxGB5kp4ppgvwL/view) | `IMG-20260209-WA0003.jpg`; original About banner. Also reused for the founder story while its separate 2022 photograph is unavailable. |
| `class-social.jpg` | [Original Drive photograph](https://drive.google.com/file/d/1khh-6rapIeXqAqNxvibAQ0MBkvuCJ1MJ/view) | `IMG-20260209-WA0005.jpg`; original Classes banner. |
| `instructors.jpg` | [Original Drive card](https://drive.google.com/file/d/1YaFdQtFUr_y7XPcHhRZdJzYf3CoscU_x/view) | WhatsApp Image 2026-02-05 at 10.34.47 PM.jpeg. |
| `natalia.jpg` | [Original Drive card](https://drive.google.com/file/d/1oCQCaMC0ey1h-CRGs6jAJfo7zSQxEeRl/view) | WhatsApp Image 2025-12-04 at 10.00.16 AM.jpeg. |
| `kriss.jpg` | [Original Drive card](https://drive.google.com/file/d/1N2TNK2rPFmEsnIcFE1d8WOoprOhoyo5F/view) | WhatsApp Image 2025-12-11 at 10.48.57 AM.jpeg. |
| `brando-zouk-teacher.jpg` | [Club Instagram teacher card](https://www.instagram.com/stanford_bachata_sensual_zouk/p/DSl85oHFGv5/) | Original card labelled Brando, Zouk Teacher. |
| `fontaine.jpg` | [Club Instagram teacher card](https://www.instagram.com/stanford_bachata_sensual_zouk/p/DSbVsaGiaLE/) | Original card labelled Fontaine, Zouk Teacher. |
| `zouk-shirt-fun.webp` | [Original club Instagram post](https://www.instagram.com/stanford_bachata_sensual_zouk/p/DWb5oHIgK68/) | Original six-person community photograph; post recorded in website commit `b758fcf`. |
| `natalia-teaching-class.jpg` | [Original class post](https://www.instagram.com/stanford_bachata_sensual_zouk/p/DWb6qm6AL3F/) | Video cover still from the original post recorded in `b758fcf`. Also replaces the unavailable `ig-post5` class image. |
| `zouk-stanford.webp` | [Club social photo, second carousel item](https://www.instagram.com/stanford_bachata_sensual_zouk/p/DQcb48DEiDe/?img_index=2) | Stanford Zouk social photograph. Used for Events and as a genuine club-photo replacement for the unavailable Home collage. |
| `community-recap.jpg` | [Original 2025 recap](https://www.instagram.com/stanford_bachata_sensual_zouk/reel/DS8Nn_yEg0m/) | Video cover still from the original Join source recorded in `b758fcf`; includes the recap title. |
| `henry.webp` | [Henry Bosch, Stanford Mathematics](https://mathematics.stanford.edu/people/henry-bosch) | Recovered from the same named source identified in website commit `5dbc6ea`. |
| `abhinav.jpeg` | [Stanford research group directory](https://crfm.stanford.edu/people.html) | Named Abhinav Garg portrait. The old export came from Google Scholar, so identical framing has not been verified. |

The 13 files total 2,051,862 bytes. Their page addresses use `import.meta.env.BASE_URL`, so they work both at `/sbsbz/` and at the root of a future custom domain. Sources are documented here for future editors; visitors do not need access to Drive or Instagram to load the saved photos.

## Originals still unavailable

The former host returned HTTP 403 (access denied) for all 19 unique photo addresses. The original exports do not exist in either repository's Git history. These three officer cards deliberately retain initials; an older Lorena portrait was found but was explicitly superseded in commit `0b7f122`, so it was not restored without confirmation.

| Person | Former export filename |
| --- | --- |
| Elizabeth | `elizabeth_3e0dc739.png` |
| Nick Montes | `nick_01e3496a.png` |
| Lorena Oliveira | `lorena_new_c1e46175.png` |

The other unavailable exact exports are `community-collage_6573bfed.png`, `ig-post5_485f39af.jpg`, and `IMG-20221123-WA0024_d4b0f7a2.jpg`; the table above identifies the authentic club images reused in those placements. Image descriptions were corrected where needed to match the recovered studio and social photographs.

To restore a remaining original, save it in `client/public/photos/`, replace the matching `img: undefined` in `client/src/pages/About.tsx` with `import.meta.env.BASE_URL + "photos/filename.jpg"`, update this record, and verify the image in the built site before publishing.

## Drive follow-up and permanent storage

On September 11, the [club Drive](https://drive.google.com/drive/folders/1cfAKuuzU9hRaaGp1GbzDIaIyJH-lX-3J) was checked again, including Marketing, Classes, Events, and the Roles & Responsibilities folder. The Marketing image previews include dance photographs and class flyers; searches for Elizabeth/Elisabeth, Nick, and Lorena returned no named image files. No additional officer portrait could be reliably assigned from these sources. This does not establish that a portrait cannot be embedded in another document or stored under an unidentified name.

All 13 images currently used by the website are committed in this repository. Keep each new photo and its page reference in the same commit, and preserve the source link in this record. Drive links here document provenance; they are not live image dependencies.

`scripts/check-photos.mjs` runs automatically before and after every production Pages build. It checks Git tracking, local files, literal `photos/filename` references, remote raster-image address regressions, and exact output copies. Keep page references in this literal form; if introducing dynamic image paths or a different asset-loading mechanism, extend the check and verify the rendered images. The three explicitly missing portraits remain documented initials rather than references to absent files.
