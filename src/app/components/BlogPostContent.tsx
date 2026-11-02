import { Link } from "react-router";
import type { ReactNode } from "react";
import type { BlogSlug } from "../constants/blogs";

function InlineLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className="blog-inline-link">
      {children}
    </Link>
  );
}

function Takeaway({ children }: { children: ReactNode }) {
  return (
    <aside className="blog-takeaway" aria-label="Key takeaway">
      <div className="blog-takeaway__label">Key Takeaway</div>
      <p className="blog-takeaway__body">{children}</p>
    </aside>
  );
}

function BlogCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <p className="blog-cta-line">
      <Link to={href} className="blog-cta-link">
        {children}
      </Link>
    </p>
  );
}

function WhatIsDppContent() {
  return (
    <>
      <p>
        A Digital Product Passport (DPP) is a structured digital record that
        travels with a physical product and tells the full story of what it is,
        where it came from, and what it is made of. Accessed by scanning a QR
        code or data carrier on the product, a DPP holds verified information
        about materials, origin, manufacturing, sustainability, and end-of-life
        options. Under the EU’s{" "}
        <InlineLink to="/blog/espr-regulation-2024-1781-explained">
          ESPR regulation
        </InlineLink>
        , DPPs are becoming mandatory for products sold in the European Union.
      </p>

      <h2>What Does a Digital Product Passport Actually Contain?</h2>
      <p>
        Think of a DPP as an identity document for a product. The precise fields
        will be set category by category through ESPR’s delegated acts, but the
        shape of the record is already clear:
      </p>
      <ul>
        <li>
          <strong>Identity:</strong> a unique product identifier, the model or
          style, and the manufacturer or brand behind it.
        </li>
        <li>
          <strong>Materials:</strong> composition by percentage, including
          recycled content and any substances of concern.
        </li>
        <li>
          <strong>Origin and supply chain:</strong> where the product and its
          components were made, and by whom.
        </li>
        <li>
          <strong>Certifications:</strong> third-party schemes such as GOTS,
          OEKO-TEX or GRS, attached as evidence rather than displayed as a logo.
        </li>
        <li>
          <strong>Sustainability data:</strong> carbon footprint, water or
          chemical use, and durability or repairability indicators.
        </li>
        <li>
          <strong>Care and lifecycle:</strong> how to use, maintain and repair
          the product — and how to recycle or dispose of it at end of life.
        </li>
      </ul>

      <h2>How Does a Digital Product Passport Work?</h2>
      <p>
        A physical data carrier on the product — usually a QR code on a care
        label, hang tag or packaging — links to the passport record. Scanning it
        resolves to that specific product’s passport page, which is served from
        the platform holding the data.         The link is built on an open standard,
        typically{" "}
        <InlineLink to="/blog/gs1-digital-link-digital-product-passport">
          GS1 Digital Link
        </InlineLink>
        , so the same code can be read by a consumer’s
        phone, a retailer’s inventory system, a customs authority, and a
        recycler — each getting what is relevant to them from one physical code.
      </p>

      <h2>Who Needs a Digital Product Passport?</h2>
      <p>
        Anyone placing a covered product on the EU market. That obligation
        attaches to market placement, not to company nationality — so an Indian,
        Bangladeshi or Turkish manufacturer exporting into the EU is in scope
        even though the regulation is European. In fashion and textiles the
        chain runs from fibre and fabric suppliers, through cut-and-sew
        manufacturers, to the brand and the retailer that sells the finished
        garment. In practice the brand carries the compliance obligation, but it
        can only meet it with data its suppliers provide, which is why{" "}
        <InlineLink to="/solutions">
          fashion brands and their manufacturers
        </InlineLink>{" "}
        are being pulled into passport readiness well ahead of the deadline.
      </p>

      <h2>Why Is the EU Making Digital Product Passports Mandatory?</h2>
      <p>
        Two reasons, and both matter for how the passport is designed. The first
        is circularity: a recycler can only process a garment correctly if it
        knows what the garment is made of, and a resale platform can only price
        it if provenance can be verified. The second is anti-greenwashing:
        sustainability claims in fashion have historically been asserted rather
        than evidenced, and the passport converts a marketing statement into a
        checkable record. The regulation is, in effect, moving the burden from
        claim to proof.
      </p>

      <h2>What Makes a Digital Product Passport Trustworthy?</h2>
      <p>
        Verification, not presentation. A passport whose contents can be silently
        edited after publication is weak evidence — it tells you what the record
        says today, not what it said when a buyer relied on it. Tamper-evident
        records solve that: once anchored, an entry cannot be quietly rewritten,
        and any change is attributable and visible. This matters most for the
        passports that live longest, since a garment’s record can be updated by
        a brand, a repairer, a reseller and a recycler over several years. A
        lifecycle record that anyone can rewrite is not a lifecycle record.
      </p>

      <h2>How Do You Create a Digital Product Passport?</h2>
      <p>
        At a high level: identify which products need passports, gather the
        material, origin and certification data, structure it against the
        required fields,{" "}
        <InlineLink to="/product">publish it on a DPP platform</InlineLink>, and
        attach it to the product with a compliant QR code. Most brands start
        with a single product line rather than an entire catalogue — it surfaces
        exactly which data is easy to get and which supplier relationships need
        work, before any large commitment is made.{" "}
        <InlineLink to="/blog/how-to-create-a-digital-product-passport">
          The step-by-step version of this process
        </InlineLink>{" "}
        is covered in its own guide.
      </p>

      <Takeaway>
        A Digital Product Passport is a verified, scannable digital record of a
        product’s materials, origin, and sustainability data. Under EU ESPR 2024
        it is becoming mandatory for products sold in the EU from 2027 — and
        blockchain-verified DPPs turn compliance data into proof that regulators,
        buyers, and customers can trust.
      </Takeaway>

      <BlogCta href="/book-a-demo">
        See a live Digital Product Passport → book a demo
      </BlogCta>
    </>
  );
}

function EsprGuideContent() {
  return (
    <>
      <p>
        EU ESPR 2024 is the Ecodesign for Sustainable Products Regulation —
        Regulation (EU) 2024/1781 — in force since July 2024. It sets
        sustainability and information requirements for products sold in the
        European Union and introduces the{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>{" "}
        as the mechanism for carrying that information. Requirements apply
        category by category through delegated acts, with textiles among the
        priority categories and obligations expected from around 2027.
      </p>

      <h2>What Does ESPR Actually Require?</h2>
      <p>
        ESPR is a framework regulation, which means it sets the structure and
        then fills in the detail per product category. Across the framework,
        three obligations matter most to fashion and textile brands: products
        must meet ecodesign requirements for durability, repairability and
        recycled content; specified product information must be made available;
        and that information must be carried in a Digital Product Passport
        reachable through a data carrier on the product.
      </p>
      <p>
        Two design principles matter as much as the fields themselves. First, the
        data must be accessible — machine-readable, connected to the product
        through a standard data carrier, and based on open, interoperable
        formats rather than a proprietary system. Second, it must be dependable.
        A passport whose contents can be silently edited after publication is
        weak evidence; verifiable, tamper-evident records are what turn a
        passport into proof. This is where blockchain-anchored DPPs align
        naturally with what ESPR is trying to achieve.
      </p>

      <h2>Which Products Are in Scope?</h2>
      <p>
        Almost all physical goods placed on the EU market fall within ESPR’s
        potential scope, but nothing is in force for a category until its
        delegated act is adopted.         Textiles and apparel were named a priority
        because of the sector’s environmental footprint and its historically
        opaque supply chains. Practically, that means a fashion brand should
        assume it is in scope and be working on data readiness, while watching
        the textile delegated act for the exact fields and dates. For the
        manufacturer view, see our guide to{" "}
        <InlineLink to="/blog/digital-product-passport-for-textile-manufacturers">
          Digital Product Passports for textile manufacturers
        </InlineLink>
        .
      </p>

      <h2>What Is the ESPR Timeline?</h2>
      <ol className="blog-timeline">
        <li>
          <strong>July 2024:</strong> ESPR enters into force as Regulation (EU)
          2024/1781.
        </li>
        <li>
          <strong>2025–2026:</strong> The Commission develops delegated acts
          defining category-specific requirements; priority categories, including
          textiles, are worked on first.
        </li>
        <li>
          <strong>From 2027:</strong> DPP requirements begin to apply as
          delegated acts take effect, category by category.
        </li>
        <li>
          <strong>Through 2030:</strong> rollout extends across further product
          categories.
        </li>
      </ol>
      <p>
        The trap in this timeline is treating 2027 as the moment to start.
        Gathering supplier data, closing gaps, and standing up passport
        infrastructure takes seasons, not weeks — and buyers are already asking
        for traceability now, ahead of the legal deadline. The brands that will
        comply effortlessly in 2027 are the ones building their data foundation
        in 2026.
      </p>

      <h2>How Do Delegated Acts Work?</h2>
      <p>
        The regulation itself does not list the data fields for a T-shirt. A
        delegated act does. Each act takes a product category, sets the
        ecodesign requirements and the exact passport data fields for it, and
        gives a date from which they apply. This is why precision matters when
        talking about deadlines: ESPR has applied since 2024, but a textile
        manufacturer’s specific obligations arrive with the textile act. It is
        also why passport infrastructure needs to be maintained rather than built
        once — the fields will change as acts are adopted and revised.
      </p>

      <h2>What Are the Penalties for Non-Compliance?</h2>
      <p>
        Enforcement sits with member states, which set their own penalties, and
        the practical consequence for an exporter arrives earlier than any fine:
        a product without the required passport data cannot be lawfully placed
        on the market, and an EU buyer managing its own compliance risk will not
        take the order. For most non-EU manufacturers, the commercial deadline —
        the day a key buyer asks for passport-ready data as a condition of the
        relationship — lands well before the regulatory one. See our{" "}
        <InlineLink to="/solutions">solutions for exporters and manufacturers</InlineLink>{" "}
        for the practical view.
      </p>

      <h2>How to Get ESPR-Ready Now</h2>
      <p>
        Preparation does not have to be overwhelming. A sensible sequence is:
        assess which of your products will fall in scope; audit the data you
        already hold against the likely requirements; close the gaps with your
        suppliers; and{" "}
        <InlineLink to="/product">
          choose a Digital Product Passport platform
        </InlineLink>{" "}
        that will keep your records compliant as the delegated acts evolve. A
        readiness checklist is a useful starting point, and a short platform demo
        will show you exactly what a compliant passport looks like for your
        products. For the full process, see{" "}
        <InlineLink to="/blog/how-to-create-a-digital-product-passport">
          how to create a Digital Product Passport
        </InlineLink>
        .
      </p>

      <BlogCta href="/book-a-demo">
        Get the ESPR Readiness Checklist → book a demo
      </BlogCta>

      <Takeaway>
        EU ESPR 2024 (Regulation EU 2024/1781) makes verifiable Digital Product
        Passports mandatory for products sold in the EU, phasing in from 2027
        through 2030. The brands and manufacturers that prepare their data and
        passport infrastructure now will comply effortlessly — and gain a
        transparency advantage while doing so.
      </Takeaway>
    </>
  );
}

function HowToCreateContent() {
  return (
    <>
      <p>
        Creating a{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>{" "}
        takes five steps: identify which products need passports, gather the
        required data from your supply chain, structure that data against the
        DPP data fields, verify and publish it on a DPP platform, and attach the
        passport to the product with a GS1 Digital Link QR code. With a
        self-serve platform, a first passport can be live in minutes once the
        data is ready.
      </p>

      <h2>Before You Start: What You’ll Need</h2>
      <ul>
        <li>
          A list of the products (or product lines) that will need passports,
          prioritised by EU exposure.
        </li>
        <li>
          Your existing product documentation: composition sheets, supplier
          details, certifications, and test reports.
        </li>
        <li>
          A{" "}
          <InlineLink to="/product">DPP platform account</InlineLink> — this is
          what structures, verifies, hosts, and serves your passports.
        </li>
      </ul>

      <h2>Step 1: Identify Which Products Need a Passport</h2>
      <p>
        Start with scope, not software. If you sell into the EU,{" "}
        <InlineLink to="/blog/espr-regulation-2024-1781-explained">
          ESPR requirements
        </InlineLink>{" "}
        will phase in by product category from 2027 — textiles among the first.
        Prioritise the products with the greatest EU exposure: your best-selling
        EU lines, products your EU buyers are already asking traceability
        questions about, and any new collections heading to European retailers.
        You do not need to passport your entire catalogue on day one; you need
        your EU-facing products covered first.
      </p>

      <h2>Step 2: Gather the Product Data</h2>
      <p>
        This is the step that takes real time — which is exactly why starting
        early matters. For each product you need material composition by
        percentage, origin and manufacturing details, certifications with their
        evidence, and any sustainability metrics you intend to publish. Some of
        this sits in your own systems; some of it has to come from suppliers.
        Expect the exercise to reveal two things quickly: which suppliers can
        already produce structured data on request, and which relationships still
        run on a phone call and a scanned certificate. That gap is the real
        project, and it is better discovered in 2026 than in 2027.
      </p>

      <h2>Step 3: Structure the Data Against the DPP Fields</h2>
      <p>
        Raw supplier data is rarely in the shape a passport needs. Structuring
        means mapping what you have onto the required fields — composition,
        origin, certification, care, end-of-life — and identifying what is
        missing. A purpose-built platform does most of this for you, guiding you
        field by field, validating entries against ESPR’s expectations, and
        flagging gaps rather than letting an incomplete passport go live. On a
        component-aware platform you can also structure the record by component,
        so fabric, dye, hardware and lining each carry their own traceable data.
        That is what makes a passport genuinely detailed rather than superficial.
      </p>

      <h2>Step 4: Verify and Publish the Passport</h2>
      <p>
        Publishing is where a passport becomes evidence rather than a data entry.
        On a blockchain-anchored platform, the record is written so that any
        later change is visible and attributable — which is what allows a buyer
        or auditor to rely on it months later. Once published, the passport gets
        its own page, hosted and served by the platform, with the public and
        restricted fields separated so commercially sensitive supply-chain data
        is not exposed to every consumer who scans the code.
      </p>

      <h2>Step 5: Attach the Passport to the Product</h2>
      <p>
        The final step is physical. The passport needs a data carrier on the
        product — usually a QR code on a care label, hang tag, or packaging —
        built on the{" "}
        <InlineLink to="/blog/gs1-digital-link-digital-product-passport">
          GS1 Digital Link standard
        </InlineLink>{" "}
        so the code resolves to that
        specific product’s passport page and can be read by systems that have
        never seen your brand before. The platform generates the compliant code;
        your job is to get it onto the product at production speed, which is a
        labelling and print decision worth making early rather than at the last
        minute.
      </p>

      <BlogCta href="/create-dpp">Create your first passport free →</BlogCta>

      <p>
        Want to understand pricing before you scale? See{" "}
        <InlineLink to="/blog/digital-product-passport-cost">
          how much a Digital Product Passport costs
        </InlineLink>
        .
      </p>

      <h2>How Long Does It Take to Create Your First Passport?</h2>
      <p>
        Once the data is in hand, minutes. The honest answer to the whole
        question, though, is that the platform work is not the slow part —
        supplier data collection is. Brands that run a pilot on one product line
        first consistently move faster on the full rollout, because the pilot
        tells them exactly which data is easy, which is missing, and who inside
        the business owns getting it.
      </p>

      <Takeaway>
        Creating a Digital Product Passport is a five-step process — scope,
        gather, structure, verify and publish, attach. The platform steps take
        minutes; the supply-chain data collection is the real timeline, which is
        why running a pilot on one product line now is worth more than planning a
        full rollout later.
      </Takeaway>
    </>
  );
}

function DppCostContent() {
  return (
    <>
      <p>
        A{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>{" "}
        can cost anywhere from nothing — on a free, self-serve starter tier — up
        to a significant annual contract on enterprise blockchain infrastructure.
        What you actually pay depends on three things: how many products you’re
        issuing passports for, how much supply-chain data you’re capturing, and
        whether you’re buying software or building the verification layer
        yourself. For most fashion and textile brands getting ahead of ESPR, the
        realistic starting point is a low-cost or free self-serve plan, not a
        six-figure implementation.
      </p>

      <h2>What Factors Actually Determine Digital Product Passport Pricing?</h2>
      <p>
        Vendors don’t price DPPs the way they price generic SaaS, because the
        cost driver isn’t seats — it’s product complexity. The variables that
        move the number are:
      </p>
      <ul>
        <li>
          <strong>Product volume:</strong> how many SKUs or individual items need
          a passport — one shirt style vs. an entire seasonal collection.
        </li>
        <li>
          <strong>Data depth:</strong> a passport with fibre composition and care
          instructions costs less to populate than one tracing every supply-chain
          tier back to raw material.
        </li>
        <li>
          <strong>Verification method:</strong> a static database entry is
          cheaper to run than tamper-evident, on-chain verification — but it’s
          also easier to dispute in an audit.
        </li>
        <li>
          <strong>Integration needs:</strong> connecting to an existing ERP or
          PIM system adds implementation cost that a manual, form-based entry
          avoids.
        </li>
        <li>
          <strong>Support and onboarding:</strong> white-glove setup and
          dedicated account management cost more than self-serve tooling with
          documentation.
        </li>
      </ul>

      <h2>What Are the Different DPP Pricing Models?</h2>
      <p>
        Across the market, Digital Product Passport pricing tends to fall into
        four models, and most brands move through more than one as they scale:
      </p>
      <ul>
        <li>
          <strong>Free / self-serve entry:</strong> a limited number of passports
          at no cost, meant for testing the format before committing budget.
          StableDPP offers this as a starting point specifically so brands can
          see a real passport before they buy anything.
        </li>
        <li>
          <strong>Per-passport or per-SKU pricing:</strong> you pay per product
          line issued a passport, which scales predictably with your catalogue.
        </li>
        <li>
          <strong>Subscription tiers:</strong> a flat monthly or annual fee
          unlocking a set volume of passports plus features like custom branding,
          analytics, or API access.
        </li>
        <li>
          <strong>Enterprise contracts:</strong> custom pricing for large
          catalogues, deep ERP integration, and dedicated support — the model
          most legacy compliance-software vendors default to.
        </li>
      </ul>

      <h2>What Does a Free Digital Product Passport Platform Actually Include?</h2>
      <p>
        “Free” doesn’t usually mean unlimited. A typical free or starter tier
        covers a capped number of passports, the core data fields required for
        basic ESPR readiness, and standard QR code generation. What’s usually
        gated behind a paid plan is deeper verification (on-chain proof rather
        than a simple database record), custom domains for the passport page, API
        access for connecting to internal systems, and reporting or analytics on
        passport views. For a brand that just wants to see what a compliant
        passport looks like — or run a pilot with one product line before a full
        rollout — the free tier is enough to make that decision without a
        procurement process. The practical next step is{" "}
        <InlineLink to="/blog/how-to-create-a-digital-product-passport">
          how to create a Digital Product Passport
        </InlineLink>
        .
      </p>

      <BlogCta href="/create-dpp">
        Start free — create your first passport →
      </BlogCta>

      <h2>
        Is It Cheaper to Build a DPP In-House Instead of Buying Software?
      </h2>
      <p>
        It rarely is, once you account for the full cost — but it’s worth
        reasoning through rather than taking on faith.
      </p>
      <p>
        Building in-house means engineering time to design the data schema,
        infrastructure to host and serve passport pages at scale, a
        GS1-compliant resolver, a verification layer if you want tamper-evidence
        rather than a plain database, and ongoing maintenance every time ESPR’s
        technical requirements are updated through a delegated act. That last
        item is the one most internal business cases omit, because it never
        ends. A dedicated DPP platform absorbs that maintenance across all its
        customers, which is why the subscription price is usually lower than the
        fully-loaded cost of an internal build.
      </p>
      <p>
        <strong>The honest test — five questions before you build</strong>
      </p>
      <ol className="blog-checklist">
        <li>
          Does your team already own GS1 identifiers and a resolver, or would
          that be new work?
        </li>
        <li>
          Who maintains the passport schema when the textile delegated act
          changes it?
        </li>
        <li>
          Can your architecture prove a record wasn’t edited after the fact, or
          only that it currently reads a certain way?
        </li>
        <li>
          What happens to passport availability if the internal owner leaves?
        </li>
        <li>
          Is compliance infrastructure a system you want to be responsible for in
          five years?
        </li>
      </ol>
      <p>
        If most of those answers point outward, buying is the cheaper path — and
        the question becomes who to buy from.{" "}
        <InlineLink to="/product">
          StableDPP was built for exactly this decision
        </InlineLink>
        : blockchain-anchored verification rather than a database record, GS1
        Digital Link resolution handled at the platform level, a free tier to
        pilot one product line before any procurement conversation, and a roadmap
        that tracks the delegated acts as they land so brands don’t have to.
        Brands that start here can test the full workflow on a real product this
        month and scale spend as the mandate phases in — which is a materially
        cheaper way to find out what compliance actually costs them.
      </p>

      <h2>How Much Should Textile Brands Budget for ESPR Compliance in 2026?</h2>
      <p>
        Textile obligations under ESPR are expected to phase in from around 2027
        through a category-specific delegated act, which means 2026 is a
        preparation year, not an enforcement year. That changes the budgeting
        question from “what will the fine cost” to “what does it cost to be ready
        before buyers start asking.” Realistically, that means budgeting for a
        self-serve or low-tier subscription now, testing it against a handful of
        product lines, and scaling spend as passport volume grows toward the
        mandate — not committing to enterprise pricing for a requirement that
        hasn’t fully phased in yet. Manufacturers can go deeper in our{" "}
        <InlineLink to="/blog/digital-product-passport-for-textile-manufacturers">
          textile manufacturers guide
        </InlineLink>
        .
      </p>

      <Takeaway>
        Digital Product Passport cost scales with product complexity, not with
        the regulation itself — start on a free or low-cost self-serve plan,
        prove the passport works for one product line, and scale spend as ESPR
        requirements phase in.
      </Takeaway>
    </>
  );
}

function TextileManufacturersContent() {
  return (
    <>
      <p>
        For a textile manufacturer, a{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>{" "}
        is a digital record — reached by scanning a QR code on the garment or its
        packaging — that documents materials, origin, and supply-chain journey to
        meet EU ESPR requirements. Textiles and apparel are named as a priority
        category under ESPR, which means manufacturers exporting into the EU are
        expected to have passport-ready data before category-specific rules are
        formally phased in, currently anticipated from around 2027.
      </p>

      <h2>Why Are Textile Manufacturers a Priority Category Under ESPR?</h2>
      <p>
        The EU singled out textiles because of the sector’s environmental
        footprint and its historically opaque supply chains — a garment can pass
        through cutting, sewing, dyeing, and finishing across several countries
        before it reaches a retailer, and almost none of that journey is currently
        visible to the end customer or regulator. A passport forces that journey
        into a structured, checkable record. It also underpins the
        circular-economy objectives the regulation is built around: a recycler can
        only process a garment correctly if it knows what the garment is made of,
        and a resale platform can only price it fairly if provenance can be
        verified rather than asserted. For the full regulatory overview, read{" "}
        <InlineLink to="/blog/espr-regulation-2024-1781-explained">
          EU ESPR 2024 explained
        </InlineLink>
        .
      </p>

      <h2>What Supply-Chain Data Does a Textile DPP Actually Need?</h2>
      <p>
        Exact fields will be set by the textile delegated act, but the categories
        are already visible across ESPR guidance and industry pilots:
      </p>
      <ul>
        <li>
          <strong>Fibre composition:</strong> the material breakdown by
          percentage, including recycled content where claimed.
        </li>
        <li>
          <strong>Origin and tier data:</strong> where the garment was cut and
          sewn, and — progressively — where the fabric was milled and the fibre
          sourced.
        </li>
        <li>
          <strong>Certifications:</strong> commonly referenced schemes such as
          GOTS and OEKO-TEX, attached as evidence rather than as a logo.
        </li>
        <li>
          <strong>Chemical and process information:</strong> dyeing and finishing
          treatments, and any substances of concern.
        </li>
        <li>
          <strong>Care, repair and durability:</strong> how the garment should be
          maintained and what repair routes exist.
        </li>
        <li>
          <strong>End-of-life instructions:</strong> how the product should be
          disassembled, recycled, or disposed of.
        </li>
      </ul>

      <h2>How Do Textile Exporters Prepare Supply-Chain Data?</h2>
      <p>
        The practical route is tier by tier, not all at once. Start with Tier 1 —
        the cut-and-sew unit, which is data you already hold. Then map Tier 2, the
        fabric mills and processing units you buy from, and finally Tier 3, the
        raw material and fibre source. Most exporters find the exercise reveals
        two things quickly: which suppliers can already produce structured data on
        request, and which relationships depend on a phone call and a scanned
        certificate. That gap is the real project. Naming an internal owner for
        passport data — someone accountable for keeping it current as materials
        change — matters more at this stage than choosing software. See our{" "}
        <InlineLink to="/solutions">solutions for manufacturers</InlineLink> for
        how multi-tier workflows fit together.
      </p>

      <h2>Do Non-EU Textile Exporters Need a DPP?</h2>
      <p>
        Yes — if the product is placed on the EU market. The obligation attaches
        to market placement, not to where the manufacturer is based, which means
        an Indian, Bangladeshi, or Turkish exporter shipping into the EU is inside
        scope even though the regulation is European. More immediately, EU retail
        buyers are already starting to ask exporters for passport-ready data as a
        condition of the relationship, independent of the regulatory deadline,
        because they’re managing their own compliance risk. For Indian and other
        non-EU textile exporters, the practical timeline isn’t the delegated act
        date — it’s the point at which a key buyer asks for it, which is arriving
        earlier than the regulation itself.
      </p>

      <BlogCta href="/solutions">
        See how StableDPP works for textile exporters →
      </BlogCta>

      <h2>How Can a Manufacturer Start Without a Full ERP Overhaul?</h2>
      <p>
        You don’t need to integrate a DPP platform with your ERP to start. Most
        manufacturers begin with a self-serve platform, entering data
        product-by-product or in a batch upload, which is enough to issue real,
        verifiable passports for a pilot range. That lets a factory prove the
        workflow — what data is easy to get, what’s missing, who owns collecting
        it — before investing in any system integration. ERP or PIM integration
        becomes worthwhile once passport volume is high enough that manual entry
        is the bottleneck, not before. To{" "}
        <InlineLink to="/blog/digital-product-passport-cost">
          see what a self-serve starting point costs
        </InlineLink>
        , read the pricing guide.
      </p>

      <Takeaway>
        Textile manufacturers don’t need a full ERP overhaul or complete
        three-tier supply-chain data to start — begin with Tier 1 data on a
        self-serve platform, issue real passports for a pilot range, and add
        upstream tiers as ESPR’s textile rules phase in.
      </Takeaway>
    </>
  );
}

function Gs1DigitalLinkContent() {
  return (
    <>
      <p>
        GS1 Digital Link is a global standard that turns a product’s existing
        barcode or QR code into a structured web link, so a single scan can
        connect to multiple types of information — including a{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>
        . It’s built on top of GS1’s existing product numbering system (the GTIN
        already printed on most barcodes), which is why the EU references GS1
        standards specifically when talking about ESPR-ready data carriers: it
        doesn’t ask brands to adopt something new, it asks them to make what they
        already have machine-readable in a richer way.
      </p>

      <h2>How Is GS1 Digital Link Different From a Regular QR Code?</h2>
      <p>
        A regular QR code is usually just a static link to one page — scan it,
        land on that page, that’s the entire interaction. A GS1 Digital Link QR
        code encodes a structured URL that includes the product’s GTIN and,
        optionally, attributes like batch, serial number, or expiry. Because the
        link is structured rather than arbitrary, the same code can be resolved
        differently depending on who’s scanning and why — a consumer might land
        on a product story, a retailer’s system might pull inventory data, and a
        recycler might get end-of-life instructions, all from one physical code.
        That multi-stakeholder model is what{" "}
        <InlineLink to="/solutions">StableDPP solutions</InlineLink> are built
        around.
      </p>

      <h2>Why Does ESPR Favor GS1 Digital Link for Digital Product Passports?</h2>
      <p>
        Interoperability is the core reason. If every brand built its own
        proprietary QR format, retailers, recyclers, and customs authorities would
        each need to support dozens of incompatible systems to read passport data
        across a supply chain. GS1 Digital Link is already a widely adopted global
        standard across retail, which means a passport built on it can be read by
        systems that have never seen that specific brand before. The EU’s
        preference for open, interoperable data carriers over proprietary ones is
        a recurring theme across ESPR guidance, and GS1 Digital Link is the
        clearest existing standard that fits.
      </p>

      <h2>
        How Does a GS1 Digital Link QR Code Connect to a Product’s Passport?
      </h2>
      <p>
        Structurally, a GS1 Digital Link URL combines a domain, the product’s
        GTIN, and optional qualifiers like batch or serial number — a link format
        that reads roughly as domain.com/01/[GTIN]/21/[serial]. When the code is
        scanned, a resolver service reads that structured path and routes the
        request to the correct destination.{" "}
        <InlineLink to="/product">
          StableDPP uses GS1 Digital Link as the resolution layer
        </InlineLink>{" "}
        for every passport it issues: the platform generates the compliant Digital
        Link URL at the point the passport is created, and the resolver routes
        each scan to that specific product’s passport page — not a generic brand
        landing page, and not a manually maintained URL list.
      </p>
      <p>
        That distinction matters at scale. A brand with 400 SKUs across three
        seasons is managing over a thousand unique product identities;
        hand-mapping each one to a destination is the part manufacturers most
        consistently underestimate, and the part a compliant platform is expected
        to absorb.
      </p>

      <h2>Is GS1 Digital Link Mandatory Under ESPR?</h2>
      <p>
        Not by name. What ESPR requires is that the data carrier comply with
        international standards and use open, interoperable formats without vendor
        lock-in — the outcome, not one specific vendor’s implementation of it. In
        practice, GS1 Digital Link is the standard that already satisfies that
        requirement and is recognised as a valid identifier pattern, which makes
        it the safe default rather than a legal obligation. Choosing it means a
        brand is not betting on a proprietary format surviving the delegated acts.
      </p>

      <h2>
        What Do Brands Need to Generate GS1 Digital Link-Compliant QR Codes?
      </h2>
      <p>
        Three things: a GS1 company prefix (which is what makes your GTINs valid
        and unique), a resolver capable of routing structured Digital Link URLs,
        and a platform that generates the codes in the correct format
        automatically rather than requiring manual construction per product. The
        first comes from your national GS1 member organisation. The second and
        third should come from your DPP platform — if they don’t, you are building
        and maintaining resolver infrastructure in-house, which is a standing
        engineering commitment rather than a one-time setup. For the full
        workflow, see{" "}
        <InlineLink to="/blog/how-to-create-a-digital-product-passport">
          how to create a Digital Product Passport
        </InlineLink>
        .
      </p>

      <BlogCta href="/create-dpp">
        Generate GS1 Digital Link-ready passports free →
      </BlogCta>

      <Takeaway>
        GS1 Digital Link turns a single QR code into a structured, interoperable
        link between a physical product and its Digital Product Passport — and
        because it builds on the GTIN brands already use, it meets ESPR’s
        open-standard requirement without adopting a new numbering system.
      </Takeaway>
    </>
  );
}

function En1821xStandardsContent() {
  return (
    <>
      <p>
        Everyone writing about Digital Product Passports is still writing
        about the delegated act that hasn’t arrived. The more useful story is
        the one that already has: eight European standards — EN 18216,
        18219, 18220, 18221, 18222, 18223, 18239 and 18246 — that define how
        any passport is identified, carried, exchanged, stored, exposed and
        secured. They are product-agnostic, which means they apply whether
        the passport is for a battery, a mattress or a garment, and six of
        them are now cited as{" "}
        <strong>harmonised standards</strong> in the Official Journal. That
        single word — harmonised — is the difference between a{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>{" "}
        build that’s defensible and one that’s a rebuild waiting to happen.
      </p>

      <h2>The Part of DPP Nobody Covers</h2>
      <p>
        Most coverage of Digital Product Passports focuses on disclosure —
        what a T-shirt must say about its fibres, dyes and supply chain.
        That’s the wrong layer to be anxious about right now, because it
        isn’t finished yet. The layer that is finished is the plumbing: how
        any passport, regardless of product, gets a unique identity, gets
        attached to a physical item, moves data between systems, gets stored
        for the long term, gets exposed through an API, interoperates across
        vendors, and keeps sensitive fields away from people who shouldn’t
        see them. That plumbing is now specified in eight EN standards, and
        an exporter who builds against it today is building on ground that
        won’t move.
      </p>

      <h2>The Eight Standards, in Plain Language</h2>
      <p>
        Each standard answers one exporter-side question:
      </p>
      <ul>
        <li>
          <strong>EN 18219 — Unique identifiers.</strong> Whether a passport
          is issued at the model level, the batch level, or the individual
          item level — a choice with real cost consequences, since
          item-level identity means tracking serials through production, not
          just styles.
        </li>
        <li>
          <strong>EN 18220 — Data carriers.</strong> How the identifier is
          physically attached — 2D codes, RFID, NFC — including encoding,
          read quality and durability. For garments this is the
          laundry-durability problem: a care-label QR code has to survive
          wash cycles the product itself is rated for, which most 2026 pilots
          still get wrong. See our guide to{" "}
          <InlineLink to="/blog/gs1-digital-link-digital-product-passport">
            GS1 Digital Link
          </InlineLink>{" "}
          for the identifier format these carriers resolve to.
        </li>
        <li>
          <strong>EN 18216 — Data exchange protocols.</strong> How systems —
          yours, your supplier’s, your buyer’s — pass passport data to each
          other without each pair needing a custom integration.
        </li>
        <li>
          <strong>EN 18221 — Storage, archiving, persistence.</strong> The
          “who keeps this alive for ten years” question. A passport that
          outlives the vendor who issued it is a requirement, not a nice
          extra.
        </li>
        <li>
          <strong>EN 18222 — APIs and lifecycle management.</strong> How a
          passport gets updated — by a repairer, a reseller, a recycler —
          after it’s first published, without breaking the record’s
          integrity.
        </li>
        <li>
          <strong>EN 18223 — System interoperability.</strong> Whether a
          passport built on one vendor’s platform can be read, verified and
          extended by a system that has never seen that vendor before.
        </li>
        <li>
          <strong>EN 18239 / EN 18246 — Access rights, security and
          business confidentiality.</strong> The one that answers “will my
          buyer see my mill’s pricing?” These two were due to publish after
          clearing a formal vote on 16 July 2026 — confirm current
          publication status against the CEN-CENELEC register before citing
          them as final.
        </li>
      </ul>

      <h2>Available vs. Harmonised — and Why 15 July Mattered</h2>
      <p>
        A standard can exist and still carry no regulatory weight until it is{" "}
        <strong>cited as harmonised</strong> in the Official Journal. That
        happened for six of the eight EN 1821x standards on 15 July 2026,
        via Implementing Decision (EU) 2026/1736. The practical effect:
        conformity with those cited standards now carries a{" "}
        <em>presumption of conformity</em> with{" "}
        <InlineLink to="/blog/espr-regulation-2024-1781-explained">
          ESPR
        </InlineLink>{" "}
        Articles 10 and 11 — but only to the extent the cited standards
        cover those requirements. That scoping matters: presumption of
        conformity is not the same claim as “conformance equals compliance,”
        and no credible reading of the citation stretches it that far.
      </p>

      <h2>What an Exporter Can Build Today — Without the Textile Act</h2>
      <p>
        Four decisions don’t depend on the still-unwritten textile field
        list, because the EN 1821x standards already answer them:
      </p>
      <ul>
        <li>
          <strong>Identifier scheme:</strong> model, batch or item level,
          decided against EN 18219 rather than guessed.
        </li>
        <li>
          <strong>Carrier decision:</strong> which data-carrier technology
          and placement survives your product’s real-world handling, per EN
          18220.
        </li>
        <li>
          <strong>Data custody:</strong> where and how passport records are
          stored and archived long-term, per EN 18221.
        </li>
        <li>
          <strong>Access tiers:</strong> which fields are public, which are
          buyer-only, and which stay internal, per EN 18239/18246.
        </li>
      </ul>
      <p>
        Build those four against the standards now, and the eventual textile
        delegated act only has to supply a field list to slot into
        infrastructure that already exists — not a reason to rebuild it.
      </p>

      <h2>The Confidentiality Question, Answered Properly</h2>
      <p>
        The question exporters actually ask is narrower than “is my data
        safe” — it’s “will my buyer see what I pay for yarn.” EN 18239 and
        EN 18246 exist specifically to make that answerable: access-rights
        management and business-confidentiality controls are part of the
        standard, not a feature a vendor bolts on. A passport architecture
        that separates public, buyer-restricted and internal fields at the
        access layer — rather than relying on “we just won’t show that
        field” — is what the standards are asking for.
      </p>

      <h2>Where Tamper-Evidence Fits</h2>
      <p>
        Articles 10 and 11 require interoperability and data that is secure,
        authentic and reliable — the requirement is the outcome, not a named
        technology, and no EN 1821x standard mandates blockchain.{" "}
        <InlineLink to="/product">StableDPP’s architecture</InlineLink> is
        blockchain-anchored because tamper-evidence is the hardest part of
        that outcome to demonstrate with a record that can be silently
        edited after publication — that’s a design position, stated as
        architecture, not a claim about what the regulation mandates.
      </p>

      <BlogCta href="/book-a-demo">
        Talk through standards-readiness → book a demo
      </BlogCta>

      <Takeaway>
        Six of eight EN 1821x standards are now cited as harmonised,
        carrying a scoped presumption of conformity with ESPR Articles 10
        and 11. An exporter can build identifier scheme, data carriers, data
        custody and access tiers against them today — the textile delegated
        act only has to add the field list.
      </Takeaway>
    </>
  );
}

function BatteryPassportRehearsalContent() {
  return (
    <>
      <p>
        Textile exporters have anchored their planning on a date that
        doesn’t exist yet — an indicative 2027 delegated act, then an
        indicative 18-month transition, landing realistically in late 2028
        into 2029. That distance is exactly why nothing gets budgeted. There
        is, however, a date that is fixed:{" "}
        <strong>18 February 2027</strong>, when the battery passport becomes
        the EU’s first mandatory sector-specific{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>{" "}
        under the Battery Regulation. Batteries will run the registry, the
        identifiers, the carriers, the access-rights model and the
        supplier-data chase in production, at scale, on the same EU
        infrastructure textiles will later use. Every failure mode gets
        discovered there first — and exporters who read that rehearsal get
        roughly eighteen months of free lessons.
      </p>

      <h2>The Date Most Textile Exporters Are Waiting For Isn’t a Date</h2>
      <p>
        Planning against an indicative delegated act and an indicative
        transition period compounds two uncertainties into one number that
        feels solid but isn’t. “2027” gets repeated until it sounds
        confirmed; it isn’t. That’s not a reason to ignore the timeline — it’s
        a reason not to build a budget calendar on it.
      </p>

      <h2>The Date That Is Real</h2>
      <p>
        18 February 2027 is set in the Battery Regulation, not indicated by
        it. Battery passports go live on the same underlying EU DPP
        infrastructure — registry, identifier architecture, data-carrier and
        access-rights standards — that every later sector, textiles
        included, will be built on.
      </p>

      <h2>Five Things Batteries Will Prove Before Textiles Have To</h2>
      <ol className="blog-checklist">
        <li>
          Whether supplier data actually arrives on time, or arrives late
          and wrong.
        </li>
        <li>How the registry behaves under real production volume.</li>
        <li>Whether data carriers survive real-world handling and use.</li>
        <li>
          How access tiers hold up when a competitor sits downstream in the
          same supply chain.
        </li>
        <li>What buyers actually do to suppliers who can’t produce data on time.</li>
      </ol>
      <p>
        Every one of these is a question a textile exporter will eventually
        face. The battery sector will answer all five in public, under
        regulatory scrutiny, roughly eighteen months before textile
        obligations land.
      </p>

      <h2>The One Asymmetry That Favours Textiles</h2>
      <p>
        There’s a reason not to read this as pure reassurance: a garment’s
        bill of materials is more fragmented than a battery’s — more
        suppliers, smaller lots, faster seasons. Data collection is harder
        for textiles, not easier, which shortens the real runway rather than
        extending it. Watching batteries stumble through supplier-data
        delays is useful precisely because textiles start from a worse
        position on that specific problem.
      </p>

      <h2>What to Do in the Eighteen Months Between Rehearsal and Performance</h2>
      <p>
        A quarter-by-quarter readiness sequence from now through late 2028
        is more useful than waiting for a confirmed date:
      </p>
      <ul>
        <li>
          <strong>Now – Q1 2027:</strong> watch the battery passport
          go-live for the failure modes above, and build the parts of your
          own infrastructure that{" "}
          <InlineLink to="/blog/eu-dpp-standards-en-1821x-explained">
            don’t depend on the textile delegated act
          </InlineLink>{" "}
          — identifier scheme, carrier choice, data custody, access tiers.
        </li>
        <li>
          <strong>Through 2027:</strong> run a pilot on one product line so
          your organisation has already made its data-collection mistakes
          before the field list is final.
        </li>
        <li>
          <strong>2028:</strong> scale from pilot to rollout as the textile
          delegated act and its transition period clarify, using the
          battery sector’s documented failure modes as a checklist rather
          than discovering them yourselves.
        </li>
      </ul>

      <h2>The Cost of Waiting, Expressed Honestly</h2>
      <p>
        Not fear — arithmetic. Supplier onboarding for passport-ready data
        takes real time per tier-2 vendor, and that time doesn’t compress
        under deadline pressure; it just gets rushed and produces worse
        data. Multiply a realistic per-supplier onboarding window by the
        number of tier-2 vendors in a typical export operation, and “we’ll
        start when the act is final” stops looking like caution and starts
        looking like the more expensive option. See{" "}
        <InlineLink to="/blog/digital-product-passport-cost">
          how Digital Product Passport cost actually breaks down
        </InlineLink>{" "}
        for where that spend goes.
      </p>

      <BlogCta href="/book-a-demo">
        Get the ESPR Readiness Checklist → book a demo
      </BlogCta>

      <Takeaway>
        18 February 2027 — not an indicative textile date — is when the
        battery passport goes live on the same EU DPP infrastructure
        textiles will later use. Exporters who treat it as a rehearsal gain
        roughly eighteen months to fix the failure modes batteries will hit
        first.
      </Takeaway>
    </>
  );
}

function EuDppRegistryContent() {
  return (
    <>
      <p>
        The EU Digital Product Passport Registry went live on 19–20 July
        2026, and Implementing Regulation (EU) 2026/1778 took effect on 6
        August. Almost no exporter-facing content explains what a registry
        actually is in this system: a <strong>lookup layer</strong> holding
        identifiers and pointers, not a warehouse holding your product data.
        That misunderstanding produces two opposite, equally wrong
        reactions — panic that confidential mill data is now sitting on an
        EU server, and complacency that registration is someone else’s
        problem. Both are off. The exporter’s actual position in the chain
        is this: the{" "}
        <strong>economic operator placing the product on the EU market</strong>{" "}
        carries the registration obligation, which for most Indian exporters
        means the buyer — and that’s precisely why buyer data requests have
        sharpened since July.
      </p>

      <h2>Two Things Changed in the Same Week of July</h2>
      <p>
        Most exporters felt only one of them. The registry quietly went live
        as infrastructure. At the same time, the Article 25 destruction ban
        began applying to large fashion undertakings from 19 July 2026 —
        extending to medium-sized companies from 19 July 2030 — and that’s
        the change suppliers are actually feeling, as buyers suddenly ask
        sharper questions about over-production and unsold stock. If a buyer’s
        questionnaire changed tone this summer, this is why.
      </p>

      <h2>What a Registry Is, and What It Is Not</h2>
      <p>
        Kill the “server in Brussels” myth first: the registry holds
        identifiers and pointers to where a{" "}
        <InlineLink to="/blog/what-is-a-digital-product-passport">
          Digital Product Passport
        </InlineLink>{" "}
        record actually lives — not your material composition, your mill
        pricing, or your supplier list. Your product data stays wherever it’s
        hosted, under whatever access controls that platform enforces. The
        registry’s job is resolution — given an identifier, point to the
        right record — the same role a{" "}
        <InlineLink to="/blog/gs1-digital-link-digital-product-passport">
          GS1 Digital Link resolver
        </InlineLink>{" "}
        plays at the product level.
      </p>

      <h2>Who Actually Carries the Obligation</h2>
      <p>
        The obligation attaches to the economic operator placing the product
        on the EU market — in practice, whoever imports or sells it there.
        When you ship FOB to a European brand, that’s the brand, not you.
        The regulation does not create a direct ESPR obligation for a
        supplier shipping into a buyer who then places the product on the
        market — say this precisely, because it’s easy to overstate in
        either direction.
      </p>

      <h2>Why the Obligation Sits With the Buyer but the Work Lands on You</h2>
      <p>
        Obligations don’t travel upstream on their own — contracts do. A
        buyer managing its own ESPR exposure flows the data requirement down
        through sourcing agreements, which is why the annexe clauses showing
        up in AW26/SS27 contracts are new even though the underlying
        regulation isn’t. Reading those clauses as “the buyer’s compliance
        risk, contractually assigned to you” is more accurate than reading
        them as your own direct legal exposure.
      </p>

      <h2>Reading the Data Request You Just Received</h2>
      <p>
        Sort incoming fields into three buckets before responding to
        anything:
      </p>
      <ul>
        <li>
          <strong>Genuinely regulatory:</strong> fields that map to ESPR
          Articles 10/11 or the eventual textile delegated act.
        </li>
        <li>
          <strong>The buyer’s own ESG programme:</strong> fields a brand
          wants for its own sustainability reporting, beyond what regulation
          requires.
        </li>
        <li>
          <strong>A fishing expedition:</strong> fields that probe your
          sourcing or costing structure under cover of compliance.
        </li>
      </ul>
      <p>
        Most questionnaires mix all three without labelling which is which —
        sorting them is the first useful thing to do with one.
      </p>

      <h2>Negotiating From a Position of Readiness</h2>
      <p>
        This is a short note, not legal counsel: treat an unclear clause as
        a question to ask the buyer, not a clause to reject outright. The
        suppliers who can answer a data request cleanly and on time are the
        ones who keep the order when a buyer is consolidating its vendor
        base around who can prove readiness. That’s a pricing-of-readiness
        argument, not an absorb-the-cost-silently one — see{" "}
        <InlineLink to="/blog/digital-product-passport-cost">
          how Digital Product Passport cost actually breaks down
        </InlineLink>{" "}
        before agreeing to carry it for free.
      </p>

      <BlogCta href="/book-a-demo">
        Book a demo — built around answering a buyer data request →
      </BlogCta>

      <Takeaway>
        The EU DPP Registry is a lookup layer, not a data warehouse — and
        the registration obligation sits with whoever places the product on
        the EU market, usually your buyer, not you. What changed for
        exporters since July is sharper buyer data requests, not a new
        direct legal duty.
      </Takeaway>
    </>
  );
}

const CONTENT_BY_SLUG: Record<BlogSlug, () => ReactNode> = {
  "what-is-a-digital-product-passport": WhatIsDppContent,
  "espr-regulation-2024-1781-explained": EsprGuideContent,
  "how-to-create-a-digital-product-passport": HowToCreateContent,
  "digital-product-passport-cost": DppCostContent,
  "digital-product-passport-for-textile-manufacturers":
    TextileManufacturersContent,
  "gs1-digital-link-digital-product-passport": Gs1DigitalLinkContent,
  "eu-dpp-standards-en-1821x-explained": En1821xStandardsContent,
  "battery-passport-digital-product-passport-rehearsal":
    BatteryPassportRehearsalContent,
  "eu-dpp-registry-explained": EuDppRegistryContent,
};

export function BlogPostContent({ slug }: { slug: BlogSlug }) {
  const Content = CONTENT_BY_SLUG[slug];
  return <Content />;
}
