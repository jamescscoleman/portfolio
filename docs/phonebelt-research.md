# PhoneBelt — Case-Study Research & Market Sizing (working doc)

**Purpose:** The fully-loaded reference behind the PhoneBelt portfolio page. This is the *rough draft / data warehouse* — every figure, source, and caveat lives here so the website copy can stay lean and pull from it. Not for publication as-is.

**Status:** Working draft, last updated 2026-06. Figures verified against public sources (links at bottom). Items flagged ⚠️ still need tightening.

---

## 1. The cost asymmetry — why commercial, not consumer

The core argument for the commercial wedge: a crash costs *categorically* more behind the wheel of a commercial truck, and the liability tail is exploding.

| Scenario | Typical cost | Source basis |
|---|---|---|
| Passenger at-fault claim (property) | ~$5,300 | Insurance-industry averages (III) |
| Passenger at-fault claim (bodily injury) | ~$18,000–24,000 | Insurance-industry averages (III) |
| **Passenger at-fault, typical total** | **~$20,000–30,000** | (sum of above) |
| Average large-truck crash (all severities) | **~$91,000** | FMCSA ⚠️ ~2005 dollars — conservative |
| Large-truck injury crash | ~$200,000 | FMCSA ⚠️ ~2005 dollars |
| Large-truck fatal crash | **~$3.6 million** | FMCSA ⚠️ ~2005 dollars |
| Any fatal crash (economic) / (comprehensive) | ~$1.95M / ~$13.7M | NSC Injury Facts, 2023 |
| Disabling injury (economic) | ~$167,000 | NSC Injury Facts, 2023 |

**Nuclear verdicts — the tail that scares fleet operators (ATRI):**
- Among trucking verdicts over $1M, the **average award rose from $2.31M (2010) → $22.3M (2018)** — up ~967%.
- Verdict awards grew **51.7% per year** over that span, vs. 1.7% inflation / 2.9% healthcare.
- Cases with verdicts over $1M rose **335%** (2012–2019); 265 such cases by 2019.

**Honest takeaway (this replaces the earlier "40× / $800K" gut estimate):**
- On the *average* crash, commercial runs ~**3–4×** a passenger claim (~$91K vs ~$25K).
- On the *tail* (fatalities, liability verdicts), it's genuinely **orders of magnitude** — fatal truck crashes average ~$3.6M and nuclear verdicts now average $22M+.
- So the defensible framing is *"several times more on average, with a catastrophic tail into the tens of millions"* — **not** a single multiplier on an "identical" crash (that comparison is rhetorically slippery and the most attackable line).

⚠️ FMCSA's widely-cited $91K/$3.6M figures trace to the 2007 *Unit Costs of Medium/Heavy Truck Crashes* report (≈2005 dollars). FMCSA published a 2024–25 Crash Cost Methodology update that would raise these in current dollars — the .gov PDF blocks automated fetching; pull the current-dollar numbers manually before leaning on a precise figure.

---

## 2. Market sizing (comps-based)

Approach: **don't** compare commercial vs. personal driving by vehicle count (personal is far bigger and would undercut the wedge). Size by **value-at-risk / safety spend**, where commercial dominates per unit. Three lenses:

### 2a. Willingness to pay — Samsara as the comp
- **Pricing:** core telematics ~**$27–33 / vehicle / month**; with AI safety dashcams **~$40–60 / vehicle / month**. Standard 36-month contracts; hardware bundled. (Samsara doesn't publish pricing; figures are third-party/customer-reported. ⚠️ soft.)
- **Company scale (FY2025, NYSE: IOT):** revenue **$1.25B (+33% YoY)**, **ARR $1.46B (+32%)**, **2,506 customers paying >$100K/yr** (+36% YoY).
- **Interpretation:** a *single* vendor at ~$1.5B ARR, still compounding 30%+, is hard proof that enterprise budget and demand exist — and that fleets will pay recurring per-vehicle SaaS for exactly this safety function.

### 2b. Analyst TAM (directional cross-check)
| Market definition | 2025 size | Forecast | CAGR | Source |
|---|---|---|---|---|
| Fleet telematics | $10.4B | $21.95B (2032) | 11.2% | MarketsandMarkets |
| Video telematics | ~$10.0B | $53.8B (2035) | ~18% | Market Research Future |
| **Commercial-vehicle AI video telematics & driver-behavior analytics** | — | ~$15.4B (2034) | 14% | Research Intelo — *most relevant segment* |
| Broader fleet management | ~$27–33B | — | ~15–17% | GMI / Mordor |

⚠️ Analyst TAMs vary widely by definition/methodology — treat as order-of-magnitude, not precise.

### 2c. Addressable units (US) + bottom-up SAM
- **14.89M** registered large commercial trucks in the US (single-unit + combination, 2023, BTS).
- **1.1M+** US companies operate a fleet of **≥5** commercial vehicles (2024).

**Bottom-up (illustrative):** 14.89M trucks × ~$480/yr ($40/mo safety tier) ≈ **~$7.1B/yr** US TAM ceiling (range **~$6–11B** at $33–60/mo). Realistic SAM is a fraction of that, but it cross-checks cleanly against the analyst fleet-telematics TAM (~$10B global). ⚠️ Refine by using *fleet* vehicle counts rather than all registrations, and apply a realistic adoption %.

**One-line version for the site:** fleets already pay $40–60 per vehicle per month for this category, and Samsara has built a ~$1.5B/yr business largely on it — the budget is real; driver satisfaction with the incumbent product isn't.

---

## 3. The product wedge (privacy-first, sensor-based)

- **Incumbent = driver-facing cameras** (Samsara, Lytx, Motive). Continuously/ event-triggered monitoring for phone use, seat-belt compliance, drowsiness. They work, but they're among the most *resented* tools in the industry.
- **Why drivers hate them:** many commercial drivers effectively live in their cabs; an in-cab lens reads as surveillance. Drives retention problems and union pushback — e.g., the Teamsters have blocked UPS from installing driver-facing cameras.

### 3a. The camera-resistance evidence (verified 2026-07)
- **UPS / Teamsters (2023):** the National Master Agreement bans inward-facing cameras in UPS vehicles and bars using telematics data alone to discipline drivers. "Wages UP, Cameras OFF!" was an official campaign slogan. ⚠️ Caveat: the contract still permits driver-facing *sensors* for in-cab audible distraction alerts (a lens-vs-"sensor" wording loophole critics flagged). [Teamsters, contract PDF, FreightWaves]
- **FedEx Ground (2017– ):** required Lytx DriveCam (dual-facing, records in-cab audio) in every contractor truck by Aug 1, 2017 — no camera, no dispatch. Footage feeds a cloud portal; drivers are scored and can face discipline. [TruckersReport, MarketingScoop]
- **Amazon (2021– ):** Netradyne "Driveri" four-camera system (one driver-facing); biometric consent required; AI "events" feed weekly scores tied to bonuses/pay. Documented driver resignations over privacy; drivers dinged for mirror checks/being cut off; U.S. senators (Markey et al.) sent an oversight letter; Fight for the Future called it "the largest expansion of corporate surveillance in history." [Vice, CBS News, Markey letter]
- **Lytx BIPA settlement:** $4M+ settlement of an Illinois biometric-privacy class action over DriveCam face-geometry scanning. [FreightWaves]
- **Framing note:** companies *adopt* cameras top-down (FedEx, Amazon); *drivers/unions* fight them, and where labor has leverage (UPS) the camera got banned outright. PhoneBelt's wedge: deliver the safety signal without entering that fight.
- **PhoneBelt's approach:** no camera. **Bluetooth distance + angle** to detect a phone-in-hand behind the wheel; **accelerometer** data to evaluate driving behavior/safety. No lens, no footage.
- **Adoption thesis (the keeper line):** *camera systems win the data but lose the driver; privacy-first design earns the buy-in that decides whether a safety program actually works in the field.*

---

## 4. Raw figures to pull from (appendix)

- Passenger at-fault: ~$5.3K property + ~$18–24K BI → ~$20–30K typical [III via SmartFinancial]
- Large-truck crash avg ~$91K / injury ~$200K / fatal ~$3.6M [FMCSA, ~2005$ ⚠️]
- Fatal crash (any): ~$1.95M economic / ~$13.7M comprehensive; disabling injury ~$167K economic [NSC 2023]
- Nuclear verdicts: $2.31M (2010) → $22.3M (2018) avg for >$1M cases; +51.7%/yr; cases +335% (2012–19) [ATRI]
- Samsara pricing: ~$27–33/mo core, ~$40–60/mo w/ AI safety; 36-mo terms [third-party ⚠️]
- Samsara FY2025: $1.25B rev (+33%), $1.46B ARR (+32%), 2,506 customers >$100K [Samsara/Businesswire]
- Fleet telematics TAM: $10.4B (2025) → $21.95B (2032), 11.2% CAGR [MarketsandMarkets]
- Video telematics TAM: ~$10B (2025) → $53.8B (2035), ~18% CAGR [MRFR]
- Commercial AI video telematics & driver-behavior: ~$15.4B by 2034, 14% CAGR [Research Intelo]
- US large commercial trucks: 14.89M registered (2023) [BTS]; 1.1M+ firms with ≥5-vehicle fleets (2024) [FleetOwner]
- Bottom-up US SAM (illustrative): ~$6–11B/yr at $33–60/veh/mo

---

## 5. Open questions / to refine
- ⚠️ Pull FMCSA's **current-dollar** per-crash costs from the 2024–25 methodology (site blocks bots — fetch manually).
- ⚠️ Samsara's official pricing is undisclosed; current figures are third-party estimates.
- Decide PhoneBelt's own assumed ARPU vs. camera incumbents (likely lower hardware cost — could be a price wedge, not just a privacy wedge).
- Tighten SAM using fleet-vehicle counts × realistic adoption %, not total registrations.

---

## Sources
- [FMCSA — Safety Is Good Business](https://www.fmcsa.dot.gov/safety/good-business/safety-good-business) · [Unit Costs of Medium/Heavy Truck Crashes (2007)](https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/docs/UnitCostsTruck%20Crashes2007.pdf)
- [NSC Injury Facts — Motor Vehicle](https://injuryfacts.nsc.org/motor-vehicle/overview/introduction/)
- [ATA / ATRI — Nuclear Verdicts](https://www.trucking.org/news-insights/how-nuclear-verdicts-are-strangling-americas-trucking-industry) · [FreightWaves on ATRI study](https://www.freightwaves.com/news/atri-study-reveals-nuclear-verdicts-on-the-rise)
- [Passenger claim averages — SmartFinancial (citing III)](https://smartfinancial.com/car-accident-cost)
- [Samsara pricing — CheckThat.ai](https://checkthat.ai/brands/samsara/pricing) · [Airpinpoint breakdown](https://airpinpoint.com/compare/samsara-pricing)
- [Samsara FY2025 results — Businesswire](https://www.businesswire.com/news/home/20250306123472/en/Samsara-Reports-Fourth-Quarter-and-Full-Fiscal-Year-2025-Financial-Results)
- [Fleet telematics market — MarketsandMarkets](https://www.marketsandmarkets.com/PressReleases/future-commercial-vehicle-telematics.asp)
- [Video telematics market — Market Research Future](https://www.marketresearchfuture.com/reports/video-telematics-market-26756)
- [Commercial AI video telematics & driver-behavior — Research Intelo](https://researchintelo.com/report/commercial-vehicle-fleet-ai-video-telematics-and-driver-behavior-analytics-market)
- [US truck registrations — Bureau of Transportation Statistics](https://www.bts.gov/browse-statistical-products-and-data/national-transportation-statistics/number-us-truck) · [Trucking by the Numbers 2024 — FleetOwner](https://www.fleetowner.com/research/media-gallery/55249687/trucking-by-the-numbers-2024-trends-challenges-and-opportunities-in-the-industry)
