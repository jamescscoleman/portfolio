# Asset Reorganization Plan: `Portfolio-CADs` → `my-portfolio/portfolio-assets/`

**Status:** Proposed — nothing has been executed. Every command below is for the execution phase, after your approval.
**Guarantee:** No step in this plan deletes a single file. Every phase is additive (commit, tag, copy, backup) or a move, and every phase has a rollback.

---

## 0. What was verified before writing this plan

All claims below were checked against the real folders on 2026-07-12 (not assumed):

| Fact | Verified value |
|---|---|
| `Portfolio-CADs` is its own git repo | Yes — `.git` = 103 MB, working tree ≈ 95 MB, total ≈ 198 MB. Remote: `github.com/jamescscoleman/CADs.git` |
| Its git history | **One commit (`1074850 "first commit"`) containing only `README.md`** — see the critical finding below |
| `my-portfolio` deploy mechanism | Netlify site `ebe3626c-…` is **git-connected to `github.com/jamescscoleman/portfolio`**, build cmd `npm run build`, **publish dir `build`** (confirmed via `netlify api getSite`) |
| CRA build scope | react-scripts bundles `src/` imports and copies `public/` → `build/`. A root-level folder that is neither is inert — confirmed `build/` contains only `public/` copies + `static/` bundles |
| Site image references | All 17 refs live in `src/data/projects.js` + `public/index.html` as root-absolute paths (`'/BestDayUSA.PNG'`) resolving to `public/`. **Nothing references `Portfolio-CADs`**, so the move breaks zero paths |
| Largest file anywhere in the asset repo | 27.1 MB (`IMG_2519.png`) — comfortably under GitHub's 100 MB blob limit, so **no git-LFS needed** |
| `my-portfolio` repo weight | `.git` = 23 MB. `.gitignore` already ignores `/build`, `/node_modules`, `.netlify`, `.DS_Store` |
| Environment | macOS (APFS, case-insensitive default), git 2.48.1, no git-lfs installed |

### ⚠️ Critical finding the briefing missed: "ghost files" trapped in the inner `.git`

`Portfolio-CADs`'s single commit contains **only README.md**. But its git **index** holds 41 staged-but-never-committed files (~110 MB of blobs), and **12+ of those were later deleted from disk**. They currently exist *only* as objects inside the 103 MB `.git` directory:

- `Phone Mount v1.zip` (3.9 MB — verified to contain **`Phone Mount v1.stl`**, real CAD)
- `Ready to Print Final v1.zip`, `Final with drafts, volume, and scaled v1.zip`, `cap pxmty.zip` (more CAD/print exports)
- `appAPK.zip` (6.5 MB, the PhoneBelt app build), `Unplogbox.MP4`, `IMG_2532.png` (9.6 MB), `drinky1.jpg`, `foodcointainer2.jpg`, `Unplogbox_028.png`, `splashscreen.png`, `splashscreen2.png`, and several small screenshots/PDF

Two consequences:

1. **Deleting or "retiring" the inner `.git` would permanently destroy these files.** The plan therefore keeps it, and Phase 1 rescues the ghosts back onto disk *first*.
2. The briefing's "Portfolio-CADs contains almost no real CAD" needs a footnote: the *visible* folder has almost none (the `.step` lives in `PhoneBelt-main`), but real CAD exports (STL) are trapped in its git objects. Recovering them makes the "distinguish CAD from photos" goal more meaningful.

A further 22 files on disk (incl. `Cornell Certificate.pdf`, `Graduation.jpg`, `ShirtDesign.png`, `puppy.png`) are **untracked** — on disk only, in no git history at all. Total inventory after rescue: **~63 files**.

---

## 1. Recommended approach (the git/deploy reconciliation)

**Keep `Portfolio-CADs` as its own living git repo, move it wholesale (with its `.git`) to `my-portfolio/portfolio-assets/`, and add one line — `/portfolio-assets/` — to `my-portfolio/.gitignore`.**

Rationale (2–3 lines):
- You get *physical* centralization (everything under one folder, one Time Machine target, one place to look) while the deployable repo's tracked history, GitHub clone, and Netlify build **change by exactly one line**. Since Netlify builds from the GitHub clone and a gitignored folder never reaches GitHub, the assets can never bloat a clone, a build, or a deploy.
- The inner `.git` is not baggage — it is currently the *only* container of the ghost files, and after Phase 1 it becomes a full, pushable, offsite-backed-up history of every asset. Its remote (`CADs.git`) gives you a free second copy.
- Because the folder is gitignored, the outer repo never even descends into it — no nested-repo/gitlink warnings, no submodule ceremony.

**Alternatives considered and rejected:**

| Alternative | Why rejected |
|---|---|
| **Git submodule** | Commits a gitlink + `.gitmodules` into the deployable repo — couples deploys to a second repo, adds clone/CI ceremony, and gains nothing here since the site never imports these files. |
| **Git LFS in `my-portfolio`** | Pulls ~200 MB into the deployable repo's history as LFS objects — the exact bloat you want to avoid; consumes GitHub LFS quota; Netlify+LFS has known friction. LFS is also unnecessary: no file exceeds 100 MB. |
| **Kill the inner `.git`, keep a plain folder** | Would permanently destroy the 12+ ghost files and all recoverability. Violates "delete nothing." |
| **Leave the folder outside and symlink it in** | Fails the actual requirement (physical centralization); symlinks confuse backup and sync tools. |

---

## 2. Target structure

`my-portfolio/portfolio-assets/` — kebab-case dirs, one folder per real project, CAD/source files separated from photos, loose personal images quarantined from project material:

```
my-portfolio/
├── portfolio-assets/                  ← the renamed Portfolio-CADs (own .git inside, gitignored by outer repo)
│   ├── README.md                      ← role statement + pipeline doc (Phase 5)
│   ├── .gitignore                     ← just ".DS_Store"
│   ├── projects/                      ← REAL project material, grouped by project
│   │   ├── phonebelt/
│   │   │   ├── cad/                   Phone Mount v1.zip · Ready to Print Final v1.zip ·
│   │   │   │                          Final with drafts, volume, and scaled v1.zip · cap pxmty.zip
│   │   │   ├── app/                   appAPK.zip · splashscreen.png · splashscreen2.png · PhoneBeltApp.jpeg
│   │   │   └── photos/                phonebeltPOC.png · phonebelttestdrive.png · phonebelt3dprint.jpg ·
│   │   │                              phonebelt3dprint2.jpg · phonebelt site.PNG · PhoneMount.JPG ·
│   │   │                              PCB.jpg · blesenserev2.jpg · NewVentureFair.jpg
│   │   ├── drinky/                    DrinkyCAD.png · drinky1.jpg · drinky2.jpg
│   │   ├── unplug-box/                UnplugBox.png · unplugbox2.PNG · unplugbox3.jpg ·
│   │   │                              Unplogbox_028.png · Unplogbox.MP4
│   │   ├── food-container/            foodcontainer1.jpg · foodcointainer2.jpg
│   │   ├── car-ching/                 Car-Ching.png · Car-Ching-02 (1).jpg · chingsite.PNG ·
│   │   │                              drivescore.png · drivescore-removebg-preview.png
│   │   ├── shirt-design/              ShirtDesign.png · Printify.png
│   │   ├── equity-research/           EquityReseearch.JPG · Alaska-Airlines.png · Alaska_Airlines-Logo.wine.png
│   │   ├── data-analytics/            Rproject.zip · DataProject.png
│   │   └── one-offs/                  JamesAI.png · WerkHaus.PNG · BestDayUSA.PNG
│   ├── documents/                     Cornell Certificate.pdf · ConfirmationOfCompletionLetterStudent.pdf
│   ├── personal/                      Graduation.jpg · Graduation-BlackWhite.jpg · RevHeadshot.pmg.PNG ·
│   │                                  puppy.png · IMG_2519.png · IMG_2532.png · 60464478885__*.JPG ·
│   │                                  70336621905__*.jpg · 79765BCC-*.jpeg
│   └── unsorted/                      1.PNG · 2.PNG · 543.PNG · 1212.PNG · 123123123123123123.PNG ·
│                                      pngggg.png · quotes.png · Capture.PNG      ← YOUR judgment call (§8)
├── public/                            ← OUTPUT: optimized, deploy-ready copies (unchanged by this plan)
├── src/ · build/ · docs/ · …
```

**Naming convention (forward-looking, low-churn):**
- Directories: `kebab-case`, one per project.
- New files: `project-subject-nn.ext`, lowercase extension (the model is the existing `public/phonebelt-poc.jpg` set).
- **Do not mass-rename the 63 existing files now** — it adds churn with no functional gain. Optionally fix the three worst typos in Phase 6 (`EquityReseearch` → `equity-research`, `Unplogbox` → `unplug-box`, `RevHeadshot.pmg.PNG` → `rev-headshot.png`) via `git mv` so history follows.

---

## 3. Source → output pipeline (the mental model, at a glance)

```
portfolio-assets/  (SOURCE)          public/  (OUTPUT)              build/ → Netlify → jecolemans.com
full-res originals, CAD, docs,  →→   optimized/renamed web copies →  compiled site; ONLY this deploys
staging pile — never deployed        the site actually serves
```

- **Duplication across the two sides is intentional, not waste.** `public/NewVentureFair.jpg` (452 KB) is the optimized derivative of `portfolio-assets/.../NewVentureFair.jpg` (3.0 MB). Some pairs are currently byte-identical (e.g. `BestDayUSA.PNG`) — that just means no optimization pass happened yet; still two roles.
- **To add a new site image:** pick the original in `portfolio-assets/`, optimize it (e.g. `sips -Z 1600 --setProperty formatOptions 80 in.jpg --out public/project-subject.jpg`, or Squoosh), give it a kebab-case name in `public/`, reference it from `src/data/projects.js` as `'/project-subject.jpg'`. The original never moves.
- The 17 current source→public pairs (incl. the typo-fix pair `EquityReseearch.JPG` → `EquityResearch.JPG` and the 5 renamed `phonebelt-*.jpg` derivatives) get a mapping table in the new README.

---

## 4. Documentation to add (Phase 5)

1. **`portfolio-assets/README.md`** (replaces the trivial existing one, committed to the *inner* repo):
   - Role statement: *"SOURCE archive for jecolemans.com. Full-res originals, CAD exports, documents, and staging material. Nothing here deploys — the site serves optimized copies from `../public/`. This folder is its own git repo (`github.com/jamescscoleman/CADs`), gitignored by the outer portfolio repo."*
   - The tree from §2, the pipeline from §3, the source→public mapping table, the naming convention, and a note that the real PhoneBelt `.step` lives in `~/Documents/Code/PhoneBelt-main/`.
2. **`my-portfolio/README.md`** — add a 4-line "Assets" section: what `portfolio-assets/` is, that it's a separate gitignored repo, that `public/` holds the optimized serving copies, link to `docs/asset-reorg-plan.md`.
3. This plan file stays in `docs/` as the change record.

---

## 5. Step-by-step execution (safe, reversible order)

> Run phases in order; each ends with a verification gate. Stop if a gate fails.
> Note: `my-portfolio` currently has uncommitted work on branch `portfolio-narrative-refresh` — keep the Phase 3 `.gitignore` commit **separate** from that redesign work.

### Phase 0 — Preflight + belt-and-suspenders backup (read-only + one archive)

```bash
# 0.1 Record the "before" state
cd ~/Documents/Code/Portfolio-CADs
git status --short > ~/Desktop/portfolio-cads-before.txt
find . -not -path './.git/*' -type f | wc -l          # expect ~37 files pre-rescue
du -sh . .git                                          # expect ≈198M / ≈103M

# 0.2 One-time compressed archive of the ENTIRE folder including .git (~190 MB)
mkdir -p ~/Documents/Code/backups
tar -czf ~/Documents/Code/backups/Portfolio-CADs-pre-reorg-$(date +%Y%m%d).tgz \
    -C ~/Documents/Code Portfolio-CADs
tar -tzf ~/Documents/Code/backups/Portfolio-CADs-pre-reorg-*.tgz | wc -l   # sanity: lists files
```
**Gate:** tarball exists and lists > 0 entries. This single artifact makes *every* later phase trivially reversible.

### Phase 1 — Rescue the ghost files, then snapshot everything into git history

```bash
cd ~/Documents/Code/Portfolio-CADs

# 1.1 Restore the 12+ staged-but-deleted files (and README.md) from the index to disk.
#     This ADDS files; it deletes nothing.
git restore .

# 1.2 Keep macOS noise out of the inner repo before the big add
printf '.DS_Store\n' > .gitignore

# 1.3 Commit EVERYTHING (41 staged + 22 untracked) as one preservation snapshot
git add -A
git commit -m "Snapshot: full asset inventory before reorganization (recovers 12 staged-but-deleted files)"
git tag pre-reorg-snapshot

# 1.4 Offsite backup — push to the existing remote (largest blob 27.1 MB, fine for GitHub)
git push origin main --tags
```
**Gate:** `git status` is clean; `ls` shows the recovered files (`Phone Mount v1.zip`, `appAPK.zip`, `Unplogbox.MP4`, `IMG_2532.png`, …); `git show --stat pre-reorg-snapshot` lists ~60+ files; push succeeded.

### Phase 2 — Rename + relocate (one atomic same-volume move; `.git` travels with it)

```bash
mv ~/Documents/Code/Portfolio-CADs ~/Documents/Code/my-portfolio/portfolio-assets
```
**Gate:**
```bash
git -C ~/Documents/Code/my-portfolio/portfolio-assets log --oneline   # history intact (2 commits)
git -C ~/Documents/Code/my-portfolio/portfolio-assets status          # clean
du -sh ~/Documents/Code/my-portfolio/portfolio-assets                 # ≈ size from Phase 0 (+ new objects)
```

### Phase 3 — Insulate the deployable repo (the one-line reconciliation)

```bash
cd ~/Documents/Code/my-portfolio
printf '\n# Source-asset archive (own git repo; never tracked, never deployed)\n/portfolio-assets/\n' >> .gitignore
git add .gitignore
git commit -m "Ignore portfolio-assets/ source archive (separate repo, not deployed)"
```
**Gate (all four must pass):**
```bash
git check-ignore -v portfolio-assets            # → .gitignore rule matches
git status --short | grep -c portfolio-assets   # → 0 (outer git is blind to it)
npm run build && ls build/ | grep -ci portfolio # → 0 (not in the deployable output)
du -sh .git                                     # → still ≈23M (tracked history unchanged)
```
Netlify safety is transitive and already verified: Netlify clones the GitHub repo (which never receives the folder) and publishes only `build/` — re-confirm anytime with
`netlify api getSite --data '{"site_id":"ebe3626c-0fe0-4458-a213-9c589b69367d"}' | grep -E '"repo_url"|"cmd"|"dir"'`.

### Phase 4 — Internal reorganization (inside the inner repo, history-preserving `git mv`)

```bash
cd ~/Documents/Code/my-portfolio/portfolio-assets
mkdir -p projects/{phonebelt/{cad,app,photos},drinky,unplug-box,food-container,car-ching,shirt-design,equity-research,data-analytics,one-offs} \
         documents personal unsorted

# Representative moves (full manifest: Appendix A). Quote names with spaces.
git mv "Phone Mount v1.zip" "Ready to Print Final v1.zip" "Final with drafts, volume, and scaled v1.zip" "cap pxmty.zip"  projects/phonebelt/cad/
git mv appAPK.zip splashscreen.png splashscreen2.png PhoneBeltApp.jpeg                                                    projects/phonebelt/app/
git mv phonebeltPOC.png phonebelttestdrive.png phonebelt3dprint.jpg phonebelt3dprint2.jpg "phonebelt site.PNG" PhoneMount.JPG PCB.jpg blesenserev2.jpg NewVentureFair.jpg  projects/phonebelt/photos/
git mv "Cornell Certificate.pdf" ConfirmationOfCompletionLetterStudent.pdf                                                documents/
# … remaining moves per Appendix A …

git commit -m "Reorganize: projects/ (CAD vs photos), documents/, personal/, unsorted/"
git tag post-reorg-v1
git push origin main --tags
```
**Gate:** `git status` clean; `find . -not -path './.git/*' -type f | wc -l` equals the Phase 1 count (+1 for `.gitignore`); `git log --follow projects/phonebelt/cad/"Phone Mount v1.zip"` shows history through the rename.

### Phase 5 — Documentation

Write the two READMEs from §4; commit each to its own repo (`portfolio-assets/README.md` → inner repo; `my-portfolio/README.md` → outer repo, again as its own commit).
**Gate:** `head portfolio-assets/README.md` states the role; outer `git status` shows only the README change.

### Phase 6 — Optional polish (each independently skippable)

- Fix the three typo filenames via `git mv` (see §2) — nothing on the site references them, so zero breakage.
- Rename the GitHub remote repo for clarity: `gh repo rename portfolio-assets --repo jamescscoleman/CADs` (git remotes auto-follow GitHub redirects; update `origin` URL at leisure).
- Triage `unsorted/` (see §8).

---

## 6. Rollback (per phase, any time)

| Phase | Undo |
|---|---|
| 0 | Delete nothing — the tarball is inert. (Keep it ≥ a few months.) |
| 1 | `git reset pre-reorg-snapshot^ && git tag -d pre-reorg-snapshot` returns the repo to the old HEAD; recovered files simply become untracked on disk (still not deleted). The exact old *index* state is preserved inside the snapshot commit forever. |
| 2 | `mv ~/Documents/Code/my-portfolio/portfolio-assets ~/Documents/Code/Portfolio-CADs` — the same atomic rename, reversed. |
| 3 | `git revert <gitignore-commit>` in `my-portfolio` (or delete the two lines and commit). |
| 4 | `git reset --hard pre-reorg-snapshot` inside `portfolio-assets` — safe *only because* Phase 1 committed everything first; restores the flat layout exactly. |
| 5 | Revert the README commits. |
| Nuclear | `tar -xzf ~/Documents/Code/backups/Portfolio-CADs-pre-reorg-*.tgz -C ~/Documents/Code` recreates the original folder bit-for-bit, `.git` included. |

---

## 7. Risks & edge cases

- **Case-sensitivity:** APFS here is case-insensitive; Netlify's Linux builders are case-sensitive. All 17 current `src/` refs were verified to match `public/` filenames exactly, and this plan touches nothing in `public/`. If you ever case-only-rename a tracked file, use two-step `git mv name tmp && git mv tmp Name`.
- **Large files / LFS:** max blob 27.1 MB < GitHub's 100 MB hard limit; repo ≈ 200–230 MB, well under GitHub's ~1 GB guidance. No LFS needed (and none installed). If you ever add >100 MB originals (video), add LFS *to the inner repo only*.
- **Path references:** zero code references `Portfolio-CADs` (verified) — the move cannot break the site. The site's own image paths live in `src/data/projects.js` and are untouched.
- **Repo size before/after:** `my-portfolio/.git` 23 MB → 23 MB (unchanged — the crux requirement). Working dir grows 794 MB → ~1 GB on disk only (node_modules is already 740 MB of that). Inner `.git` grows ~103 → ~135 MB after Phase 1 (new objects for previously-untracked files). GitHub `portfolio` repo, Netlify clone time, build time, deploy size: all unchanged.
- **Nested-repo footgun:** because the folder is ignored, outer git never sees it. The one trap: a future `git add -f portfolio-assets` would add a useless *gitlink* (not files) — the README warns against it.
- **iCloud/Sync:** if "Desktop & Documents" iCloud sync is on, the move triggers a ~200 MB re-upload and `git` dislikes evicted (`.icloud`) placeholders — confirm files are local before Phase 1 (all were at plan time).
- **In-flight work:** `my-portfolio` has uncommitted redesign changes on `portfolio-narrative-refresh`. Phase 3's one-line commit is independent; don't fold it into the redesign commit.
- **`git restore .` semantics (Phase 1):** restores tracked files from the *index* — exactly the rescue we want; it cannot touch untracked files.

---

## 8. Nothing-is-deleted guarantee & your judgment calls

**Guarantee:** No command in this plan is `rm`, no phase deletes, overwrites, or prunes any file. Net effect on file count is **+13** (the rescued ghosts) plus a tarball backup and two READMEs. The only `reset --hard` appears in a *rollback* path, after everything is committed and tagged. Preservation layers, any one of which is sufficient: (1) the Phase 0 tarball, (2) the `pre-reorg-snapshot` tag, (3) the pushed GitHub copy, (4) the files on disk.

**Judgment calls reserved for you (the plan defaults are safe either way):**
1. **`unsorted/` triage** — `1.PNG`, `2.PNG`, `543.PNG`, `1212.PNG`, `123123….PNG`, `pngggg.png`, `quotes.png`, `Capture.PNG`: only you can say which project (if any) these screenshots belong to. They're parked, not deleted.
2. **The rescued ghost files** — some 2023–24 deletions may have been intentional. Default: restore and file them properly (they include real CAD). If you'd rather quarantine them, say so and Phase 4 routes them to `unsorted/recovered-from-git/` instead.
3. **GitHub repo rename** `CADs` → `portfolio-assets` (cosmetic, Phase 6).
4. **`PhoneBelt-main`** — out of scope by your instruction; the same pattern (own repo or plain folder, gitignored inside `my-portfolio`) applies if you ever want it centralized too. Its `PhoneBelt Mount CAD.step` stays the canonical CAD source.

---

## Appendix A — Full file → destination manifest (63 files)

| Current name | Destination | Note |
|---|---|---|
| Phone Mount v1.zip | projects/phonebelt/cad/ | ghost·rescued — contains Phone Mount v1.stl |
| Ready to Print Final v1.zip | projects/phonebelt/cad/ | ghost·rescued |
| Final with drafts, volume, and scaled v1.zip | projects/phonebelt/cad/ | ghost·rescued |
| cap pxmty.zip | projects/phonebelt/cad/ | ghost·rescued |
| appAPK.zip | projects/phonebelt/app/ | ghost·rescued |
| splashscreen.png, splashscreen2.png | projects/phonebelt/app/ | ghost·rescued |
| PhoneBeltApp.jpeg | projects/phonebelt/app/ | |
| phonebeltPOC.png, phonebelttestdrive.png, phonebelt3dprint.jpg, phonebelt3dprint2.jpg, phonebelt site.PNG | projects/phonebelt/photos/ | sources of public/phonebelt-*.jpg |
| PhoneMount.JPG, PCB.jpg, blesenserev2.jpg, NewVentureFair.jpg | projects/phonebelt/photos/ | |
| DrinkyCAD.png, drinky1.jpg†, drinky2.jpg | projects/drinky/ | †ghost·rescued |
| UnplugBox.png, unplugbox2.PNG†, unplugbox3.jpg, Unplogbox_028.png†, Unplogbox.MP4† | projects/unplug-box/ | †ghost·rescued |
| foodcontainer1.jpg, foodcointainer2.jpg† | projects/food-container/ | †ghost·rescued |
| Car-Ching.png, Car-Ching-02 (1).jpg, chingsite.PNG, drivescore.png†, drivescore-removebg-preview.png | projects/car-ching/ | †ghost·rescued |
| ShirtDesign.png, Printify.png | projects/shirt-design/ | |
| EquityReseearch.JPG, Alaska-Airlines.png, Alaska_Airlines-Logo.wine.png† | projects/equity-research/ | †ghost·rescued |
| Rproject.zip, DataProject.png | projects/data-analytics/ | |
| JamesAI.png, WerkHaus.PNG, BestDayUSA.PNG | projects/one-offs/ | |
| Cornell Certificate.pdf, ConfirmationOfCompletionLetterStudent.pdf† | documents/ | †ghost·rescued |
| Graduation.jpg, Graduation-BlackWhite.jpg, RevHeadshot.pmg.PNG, puppy.png | personal/ | |
| IMG_2519.png, IMG_2532.png†, 60464478885__*.JPG†, 70336621905__*.jpg†, 79765BCC-*.jpeg† | personal/ | †ghost·rescued |
| 1.PNG†, 2.PNG†, 1212.PNG†, 123123123123123123.PNG†, 543.PNG, pngggg.png†, quotes.png†, Capture.PNG | unsorted/ | your call (§8) |
| README.md | / (rewritten in Phase 5) | |
