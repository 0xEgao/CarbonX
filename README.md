# 🌱 CarbonX — Turning Donations into Digital Proof of Environmental Action

CarbonX is a Web3 donation platform that allows verified, impactful environmental organizations to raise funds through **impact-based NFTs**. These NFTs are not just art — they’re minted **only when someone donates**, tying real-world impact to blockchain transparency.

---

## 📌 How It Works — At a Glance

graph TD
  A[Organization Registration] --> B[Verification by CarbonX & LLM]
  B --> C[Impact Project Submission]
  C --> D[Environmental Impact Evaluation]
  D --> E[NFT Listed on Marketplace (Pre-Mint)]
  E --> F[User Donates → NFT Minted → Funds Released to Org]


## 🧰 Platform Flow in Detail

### ✅ 1. Organization Registration

Organizations submit:

* Legal documents (e.g., 80G/12A, NGO Darpan ID)
* Description of mission and past projects
* Verifiable certificates or government-issued proof
* Social links, media coverage, photos/videos

### 🔎 2. Verification with LLM Support

CarbonX verifies organizations using a hybrid approach:

* Human review + LLM API (e.g., OpenAI/LangChain)
* Authenticates uploaded certificates (Govt IDs, 80G/CSR approvals)
* Reviews public reputation using LLM summarization from web links
* Assigns a **trust score** that influences NFT pricing

### 📊 3. Impact Project Submission

Once verified, orgs can submit projects with:

* Activity type (e.g., tree planting, river cleaning)
* Units of impact (e.g., 10,000 trees, 2 tons plastic removed)
* Estimated CO₂ offset (with proof or study link)
* Execution cost breakdown
* Duration & project location
* Impact image (used as NFT image)

### 💰 4. Impact-Based NFT Valuation

CarbonX dynamically calculates the NFT price:

```
NFT Price = (Impact Units × Unit Rate) × Trust Multiplier
```

Example:

```
10,000 Trees × $1.00 = $10,000
High verification score → × 1.25
→ Final NFT Price = $12,500
```

LLMs are used to:

* Validate submitted CO₂ reduction logic
* Provide contextual suggestions (e.g., “plastic removal in oceans valued at \$X/kg”)

### 🖼️ 5. Marketplace Listing (Pre-Mint)

* The NFT is displayed on our marketplace with full project details.
* **It is not minted yet** — only after a donation does minting occur.

### 🎁 6. Donation & NFT Minting

* Donor picks a project and donates suggested amount (or more).
* NFT is minted **on demand** and transferred to the donor’s wallet.
* Funds are routed to the organization (minus blockchain fees).

---

## 🛡️ Trust & Transparency

* **Backend Checks + LLM + Docs** = High Confidence Listings
* **No Upfront Minting** — every NFT reflects real donation
* **On-Chain Metrics**: Track funds, offset CO₂, project stats

---

## 🧠 Powered by AI (LLM APIs)

CarbonX leverages Large Language Models (OpenAI or LangChain):

* To parse and verify certificates, reports, and websites
* To detect red flags from uploaded or linked documents
* To assist in accurate pricing of NFTs based on environmental impact

---

## 🔧 Tech Stack

* **Frontend**: Next.js + TypeScript + TailwindCSS + Framer Motion
* **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
* **Blockchain**: Solana + Anchor Framework
* **NFT Metadata**: Arweave / IPFS
* **AI/LLM**: OpenAI API / LangChain

---

## 📌 Example Project Card (UI)

```
Project: "Green Himalayas — Tree Plantation"
Impact: 5,000 Trees
Location: Himachal Pradesh, India
Suggested Donation: $7,200
Verification: ✅ Verified by CarbonX
Action: [Donate & Mint NFT]
```

---

## 🤝 Why CarbonX?

* Help real, verified organizations make the Earth better
* Earn a digital badge (NFT) that represents your contribution
* Track **real-world, transparent impact** — not just speculation

---

## 📬 Contact

Want to list your organization or partner with us?

* Email: [contact@carbonx.green](mailto:contact@carbonx.green)
* Website: [https://carbonx.green](https://carbonx.green)

---

> 🌍 **CarbonX — Where Blockchain Meets Climate Action.**
