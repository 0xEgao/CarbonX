# 🌱 CarbonX — Turning Donations into Digital Proof of Environmental Action

CarbonX is a Web3 donation platform that allows verified, impactful environmental organizations to raise funds through **impact-based NFTs**. These NFTs are not just art — they’re minted **only when someone donates**, tying real-world impact to blockchain transparency.

---

## 📌 How It Works — At a Glance

```mermaid
graph TD
    A[Org Registration] --> B[CarbonX Verifies Org]
    B --> C[Org Submits Impact Project]
    C --> D[CarbonX Calculates NFT Price Based on Impact]
    D --> E[Project Listed on Marketplace (NFT Pre-Mint)]
    E --> F[User Donates to Mint NFT]
    F --> G[Donation Sent to Org & NFT Minted to Donor]
```

---

## 🛠️ Platform Flow in Detail

### ✅ 1. Organization Registration

Organizations submit:

* Legal documents (e.g., 80G/12A, NGO Darpan ID)
* Description of mission and past projects
* Verifiable certificates or media links

### 🔎 2. Verification

CarbonX team (with optional LLM assistance):

* Checks certificate authenticity
* Reviews media and history
* Scores the org’s transparency & track record

### 📊 3. Impact Project Submission

Each project includes:

* Activity type (tree planting, ocean cleanup, etc.)
* Units of impact (e.g., 5,000 trees)
* Estimated CO₂ reduction
* Execution cost
* Duration & location
* Project image (for NFT)

### 💰 4. Impact-Based NFT Valuation

CarbonX uses a formula to suggest NFT price:

```
NFT Price = (Impact Quantity × Impact Unit Price) × Transparency Modifier
```

Example:

```
5,000 Trees × $1.20 = $6,000
Verified by media → +20% modifier
Final NFT Price = $7,200
```

### 🖼️ 5. Marketplace Listing (Pre-Mint)

* NFT is displayed in the marketplace with project details.
* It is **not minted yet** — only visible to potential donors.

### 🎁 6. Donation & NFT Minting

* A donor selects a project and donates the suggested amount.
* Only then is the NFT minted and sent to the donor’s wallet.
* 100% of funds (minus gas/fees) go directly to the verified organization.

---

## 🧠 Powered by LLM APIs

CarbonX uses LLMs to:

* Analyze submitted documents and impact claims
* Score credibility and cost-efficiency
* Refine price suggestions based on project context

---

## 🛡️ Trust & Transparency

* **Proof-Based Listings**: No NFT is listed without backend and document verification
* **Impact Tied to Donation**: Minting = Money = Measurable Impact
* **Public Metrics**: Donors and users can see stats like total CO₂ offset, total funds raised, and projects supported

---

## 🔧 Tech Stack (Sample)

* **Frontend**: React + TailwindCSS
* **Backend**: Node.js / Express / Supabase
* **Smart Contracts**: Solidity (or Rust if on Solana)
* **NFT Metadata**: IPFS or Arweave
* **LLM API**: OpenAI / LangChain for verification support

---

## 📌 Example Project Card (UI)

```
Project: "Green Himalayas — Tree Plantation"
Impact: 5,000 Trees
Location: Himachal Pradesh, India
Suggested Donation: $7,200
Status: Verified ✅
Action: [Donate & Mint NFT]
```

---

## 🤝 Why CarbonX?

* Help real organizations build a better planet
* Get a digital badge of honor (NFT) for your contribution
* Track verified, transparent impact

---

## 📬 Contact

Want to list your org or partner with us?
Email: [contact@carbonx.green](mailto:contact@carbonx.green)
Website: [carbonx.green](https://carbonx.green)

---

> 🌍 CarbonX — Where Blockchain Meets Climate Action.
