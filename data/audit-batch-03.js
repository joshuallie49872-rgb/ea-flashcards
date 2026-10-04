// Individual audit batch 3: Video 3 source cards v3-001 through v3-512.
const EA_AUDIT_BATCH_3={
 range:"v3-001..v3-512",reviewedCount:512,auditDate:"2026-10-03",taxYear:2025,examCycle:"2026-2027",
 method:"Individual review against the PSI Part 1 Income and Assets outline and current IRS publications",
 questions:[
  {
    "id": "audit-v3-001",
    "domain": 2,
    "topic": "Capital vs. business property",
    "coveredSources": [
      "v3-003",
      "v3-010",
      "v3-011",
      "v3-029",
      "v3-031",
      "v3-032",
      "v3-045",
      "v3-047",
      "v3-049",
      "v3-050",
      "v3-051"
    ],
    "q": "Which asset is generally NOT a capital asset in the taxpayer's hands?",
    "choices": [
      "Stock held for investment",
      "A personal automobile",
      "Inventory held for sale to customers",
      "A personal residence"
    ],
    "answer": 2,
    "explanation": "Inventory and certain property used in a trade or business are excluded from the capital-asset definition. Personal and investment property is generally capital property unless a statutory exception applies.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-002",
    "domain": 2,
    "topic": "Depreciable property",
    "coveredSources": [
      "v3-010",
      "v3-011",
      "v3-012",
      "v3-013",
      "v3-014",
      "v3-015",
      "v3-016"
    ],
    "q": "Which property is generally depreciable?",
    "choices": [
      "Land held for investment",
      "A computer used in a trade or business with a determinable useful life",
      "A taxpayer's personal-use sofa",
      "Stock held for investment"
    ],
    "answer": 1,
    "explanation": "Depreciation generally applies to property used in a trade or business or held for income production that wears out, becomes obsolete, or has a determinable useful life. Land is not depreciable.",
    "reference": "IRS Publication 946 (2025)"
  },
  {
    "id": "audit-v3-003",
    "domain": 2,
    "topic": "Basis",
    "coveredSources": [
      "v3-052",
      "v3-053",
      "v3-054",
      "v3-056",
      "v3-057",
      "v3-058",
      "v3-059",
      "v3-062",
      "v3-063",
      "v3-065"
    ],
    "q": "A taxpayer buys equipment for $20,000 and pays $1,200 of sales tax and $300 of delivery charges required to acquire it. What is the initial cost basis?",
    "choices": [
      "$20,000",
      "$20,300",
      "$21,200",
      "$21,500"
    ],
    "answer": 3,
    "explanation": "Cost basis generally includes the purchase price plus certain acquisition costs such as sales tax, freight, and installation or delivery charges necessary to acquire the property.",
    "reference": "IRS Publication 551"
  },
  {
    "id": "audit-v3-004",
    "domain": 2,
    "topic": "Real-property basis",
    "coveredSources": [
      "v3-066",
      "v3-067",
      "v3-068",
      "v3-069",
      "v3-070",
      "v3-071",
      "v3-072"
    ],
    "q": "Which cost is generally added to the basis of land rather than depreciated as part of a new building?",
    "choices": [
      "Cost to demolish an old building to prepare the land",
      "Interest on the mortgage used to buy the property",
      "Annual property taxes",
      "Routine repair expense"
    ],
    "answer": 0,
    "explanation": "Demolition costs of an old building are generally added to the basis of the land. Financing costs and current expenses follow separate rules.",
    "reference": "IRS Publication 551"
  },
  {
    "id": "audit-v3-005",
    "domain": 2,
    "topic": "Basis adjustments",
    "coveredSources": [
      "v3-073",
      "v3-074",
      "v3-075",
      "v3-076",
      "v3-077",
      "v3-078",
      "v3-079",
      "v3-080",
      "v3-081",
      "v3-082",
      "v3-083",
      "v3-085",
      "v3-087",
      "v3-088",
      "v3-090",
      "v3-091",
      "v3-092"
    ],
    "q": "Which event generally increases the adjusted basis of a home?",
    "choices": [
      "Deductible depreciation",
      "Insurance reimbursement for a casualty",
      "A capital improvement such as adding a room",
      "A rebate from the seller"
    ],
    "answer": 2,
    "explanation": "Capital improvements generally increase basis. Depreciation, certain casualty adjustments, rebates, and reimbursements can decrease basis.",
    "reference": "IRS Publication 551"
  },
  {
    "id": "audit-v3-006",
    "domain": 2,
    "topic": "Stock split basis",
    "coveredSources": [
      "v3-093",
      "v3-094",
      "v3-095",
      "v3-096",
      "v3-097",
      "v3-098",
      "v3-099",
      "v3-100"
    ],
    "q": "A taxpayer owns 100 shares with total basis of $6,000. A nontaxable 2-for-1 stock split increases the holding to 200 shares. What is the basis per share after the split?",
    "choices": [
      "$15",
      "$30",
      "$60",
      "$120"
    ],
    "answer": 1,
    "explanation": "A nontaxable stock split generally leaves total basis unchanged and spreads it over the new number of shares. $6,000 ÷ 200 = $30 per share.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-007",
    "domain": 2,
    "topic": "Nondividend distributions",
    "coveredSources": [
      "v3-101",
      "v3-102",
      "v3-103",
      "v3-104",
      "v3-105"
    ],
    "q": "A shareholder receives a corporate distribution that is properly treated as a nondividend return of capital. What is the general effect before basis reaches zero?",
    "choices": [
      "It increases stock basis",
      "It reduces stock basis",
      "It is always ordinary income",
      "It is always a deductible loss"
    ],
    "answer": 1,
    "explanation": "A nondividend distribution generally reduces stock basis to the extent of basis. Amounts exceeding basis can result in capital gain.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-008",
    "domain": 2,
    "topic": "Inherited property basis",
    "coveredSources": [
      "v3-106",
      "v3-107",
      "v3-108",
      "v3-109",
      "v3-110"
    ],
    "q": "Absent a special valuation rule, what is the general basis of property inherited from a decedent?",
    "choices": [
      "The decedent's original cost",
      "Fair market value at the date of death",
      "Zero",
      "The heir's estimated selling price"
    ],
    "answer": 1,
    "explanation": "Inherited property generally receives a basis equal to fair market value at the decedent's date of death, subject to alternate valuation and other special rules.",
    "reference": "IRS Publication 551"
  },
  {
    "id": "audit-v3-009",
    "domain": 2,
    "topic": "Gift basis",
    "coveredSources": [
      "v3-111",
      "v3-112",
      "v3-113",
      "v3-114",
      "v3-115"
    ],
    "q": "A donor gives stock with adjusted basis of $10,000 and fair market value of $7,000. The donee later sells it for $6,000. What basis is generally used to determine the loss?",
    "choices": [
      "$6,000",
      "$7,000",
      "$10,000",
      "$17,000"
    ],
    "answer": 1,
    "explanation": "When gifted property has FMV below the donor's basis, the donee generally uses the gift-date FMV to determine a loss. Special dual-basis rules apply.",
    "reference": "IRS Publication 551"
  },
  {
    "id": "audit-v3-010",
    "domain": 2,
    "topic": "Fair market value",
    "coveredSources": [
      "v3-116",
      "v3-117"
    ],
    "q": "Which statement best defines fair market value?",
    "choices": [
      "The seller's original cost",
      "The price between a willing buyer and willing seller, neither compelled to act and both reasonably informed",
      "The assessed value used by a county in every case",
      "The highest price the owner has ever been offered"
    ],
    "answer": 1,
    "explanation": "Fair market value is generally the price at which property would change hands between a willing buyer and willing seller, neither under compulsion and both having reasonable knowledge of relevant facts.",
    "reference": "IRS Publication 561"
  },
  {
    "id": "audit-v3-011",
    "domain": 2,
    "topic": "Personal-use property",
    "coveredSources": [
      "v3-118",
      "v3-119",
      "v3-120",
      "v3-121",
      "v3-122",
      "v3-123",
      "v3-124",
      "v3-125",
      "v3-126"
    ],
    "q": "A taxpayer sells a personal-use automobile for $12,000 that originally cost $30,000. How is the $18,000 loss generally treated?",
    "choices": [
      "Deductible as an ordinary loss",
      "Deductible as a capital loss",
      "Nondeductible personal loss",
      "Deductible only up to $3,000"
    ],
    "answer": 2,
    "explanation": "A loss on the sale of personal-use property is generally not deductible. A gain on personal-use capital property can be taxable.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-012",
    "domain": 2,
    "topic": "Capital gain holding period",
    "coveredSources": [
      "v3-127",
      "v3-128",
      "v3-129",
      "v3-130",
      "v3-131",
      "v3-132",
      "v3-133"
    ],
    "q": "A taxpayer buys stock on July 1, 2024, and sells it on July 2, 2025. Assuming no special holding-period rule applies, the gain or loss is generally:",
    "choices": [
      "Short-term because it was held for less than 18 months",
      "Long-term because the stock was held for more than one year",
      "Ordinary income",
      "Section 1231 gain"
    ],
    "answer": 1,
    "explanation": "Capital property held for more than one year generally produces long-term capital gain or loss. Inherited property is generally treated as long-term regardless of actual holding period.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-013",
    "domain": 2,
    "topic": "Capital loss limitation",
    "coveredSources": [
      "v3-134",
      "v3-135",
      "v3-136",
      "v3-137",
      "v3-138",
      "v3-139",
      "v3-140",
      "v3-151",
      "v3-153",
      "v3-154",
      "v3-155",
      "v3-156"
    ],
    "q": "A single taxpayer has no capital gains and a $9,000 net capital loss for 2025. How much is generally deductible against ordinary income for 2025?",
    "choices": [
      "$0",
      "$1,500",
      "$3,000",
      "$9,000"
    ],
    "answer": 2,
    "explanation": "Individuals generally may deduct up to $3,000 of net capital loss against ordinary income each year ($1,500 if MFS). The unused loss generally carries forward.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-014",
    "domain": 2,
    "topic": "Capital gain netting",
    "coveredSources": [
      "v3-141",
      "v3-142",
      "v3-143",
      "v3-144",
      "v3-145",
      "v3-146",
      "v3-147",
      "v3-148",
      "v3-149",
      "v3-150",
      "v3-152"
    ],
    "q": "A taxpayer has a $6,000 net short-term capital loss and a $10,000 net long-term capital gain. After netting, what is the overall result?",
    "choices": [
      "$4,000 net long-term capital gain",
      "$4,000 net short-term capital loss",
      "$16,000 net capital gain",
      "$6,000 ordinary loss"
    ],
    "answer": 0,
    "explanation": "Short-term gains and losses are netted, long-term gains and losses are netted, and opposite net results are then netted against one another. $10,000 long-term gain minus $6,000 short-term loss leaves a $4,000 net long-term gain.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-015",
    "domain": 2,
    "topic": "Capital gain rates",
    "coveredSources": [
      "v3-188",
      "v3-189",
      "v3-190",
      "v3-191",
      "v3-192",
      "v3-193",
      "v3-195"
    ],
    "q": "What are the three regular preferential federal tax rates generally associated with net long-term capital gain?",
    "choices": [
      "0%, 10%, and 20%",
      "0%, 15%, and 20%",
      "10%, 15%, and 28%",
      "12%, 22%, and 37%"
    ],
    "answer": 1,
    "explanation": "Net long-term capital gain is generally taxed at 0%, 15%, or 20%, depending largely on taxable income and filing status. Certain categories, such as collectibles and unrecaptured section 1250 gain, can have different maximum rates.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-016",
    "domain": 2,
    "topic": "Mutual fund capital gain distributions",
    "coveredSources": [
      "v3-198",
      "v3-199",
      "v3-200",
      "v3-201",
      "v3-202",
      "v3-203",
      "v3-204"
    ],
    "q": "A mutual fund reports a capital gain distribution to a shareholder who owned the fund shares for only 6 months. How is the distribution generally treated?",
    "choices": [
      "Short-term because the shareholder held the fund for less than one year",
      "Long-term capital gain",
      "Tax-exempt interest",
      "Self-employment income"
    ],
    "answer": 1,
    "explanation": "Capital gain distributions from a mutual fund are generally treated as long-term capital gains regardless of how long the shareholder owned the fund shares.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-017",
    "domain": 2,
    "topic": "Worthless securities",
    "coveredSources": [
      "v3-209",
      "v3-210",
      "v3-211",
      "v3-212",
      "v3-213"
    ],
    "q": "Stock becomes completely worthless during 2025. For capital gain or loss purposes, it is generally treated as if it were sold:",
    "choices": [
      "For its original cost on January 1, 2025",
      "For zero dollars on the last day of 2025",
      "For fair market value on the first day it declined",
      "Only when the taxpayer receives a Form 1099-B"
    ],
    "answer": 1,
    "explanation": "A security that becomes completely worthless is generally treated as sold for zero on the last day of the tax year, which affects the holding period and loss character.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-018",
    "domain": 2,
    "topic": "Wash sales",
    "coveredSources": [
      "v3-214",
      "v3-215",
      "v3-216",
      "v3-217",
      "v3-218",
      "v3-219",
      "v3-220",
      "v3-221",
      "v3-222",
      "v3-223"
    ],
    "q": "A taxpayer sells stock at a loss and buys substantially identical stock 20 days later. What is the general result under the wash-sale rule?",
    "choices": [
      "The loss is immediately deductible in full",
      "The loss is generally disallowed currently and basis rules apply to the replacement shares",
      "The sale is ignored entirely",
      "The loss becomes ordinary"
    ],
    "answer": 1,
    "explanation": "A wash sale generally occurs when substantially identical stock or securities are acquired within 30 days before or after a loss sale. The current loss is generally disallowed and usually added to the basis of replacement shares, subject to special IRA rules.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-019",
    "domain": 2,
    "topic": "Options",
    "coveredSources": [
      "v3-224",
      "v3-225",
      "v3-226"
    ],
    "q": "A taxpayer buys an option on stock that would be a capital asset. The option expires unexercised. How is the option cost generally treated?",
    "choices": [
      "As a capital loss",
      "As an itemized deduction",
      "As self-employment expense",
      "As tax-exempt loss"
    ],
    "answer": 0,
    "explanation": "If an option to buy or sell property expires, gain or loss is generally recognized as though the option were sold on the expiration date. Character follows the underlying property rules.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-020",
    "domain": 2,
    "topic": "Employee stock purchase plan",
    "coveredSources": [
      "v3-235",
      "v3-236",
      "v3-237",
      "v3-238",
      "v3-239",
      "v3-240",
      "v3-241"
    ],
    "q": "For favorable tax treatment of stock acquired through a qualified employee stock purchase plan, which holding-period concept is generally relevant?",
    "choices": [
      "More than 2 years from the offering date and more than 1 year from the purchase date",
      "Exactly 6 months from purchase",
      "Only the employee's age matters",
      "The stock must be sold in the same year it is purchased"
    ],
    "answer": 0,
    "explanation": "A qualifying disposition generally requires holding the stock more than 2 years after the grant/offering date and more than 1 year after the stock was transferred to the employee.",
    "reference": "IRS Publication 525 (2025)"
  },
  {
    "id": "audit-v3-021",
    "domain": 2,
    "topic": "Publicly traded partnerships",
    "coveredSources": [
      "v3-242",
      "v3-245",
      "v3-246",
      "v3-247",
      "v3-248",
      "v3-249",
      "v3-250"
    ],
    "q": "An owner receives a Schedule K-1 from a publicly traded partnership treated as a partnership. Which statement is generally correct?",
    "choices": [
      "PTP passive losses can freely offset wages",
      "PTP passive activity losses are generally subject to special limitations",
      "Cash distributions always create immediate ordinary income",
      "PTP units can never produce capital gain"
    ],
    "answer": 1,
    "explanation": "Publicly traded partnership passive losses are generally subject to special passive-activity limitations and are not freely usable against unrelated nonpassive income.",
    "reference": "IRS Publication 925 (2025)"
  },
  {
    "id": "audit-v3-022",
    "domain": 2,
    "topic": "Section 1244 stock",
    "coveredSources": [
      "v3-251",
      "v3-252",
      "v3-253",
      "v3-254",
      "v3-255",
      "v3-256",
      "v3-257"
    ],
    "q": "A single taxpayer realizes a $70,000 loss on qualifying Section 1244 stock. What is the maximum amount generally eligible for ordinary-loss treatment?",
    "choices": [
      "$3,000",
      "$25,000",
      "$50,000",
      "$70,000"
    ],
    "answer": 2,
    "explanation": "Qualifying Section 1244 losses can receive ordinary-loss treatment up to $50,000 for most taxpayers and $100,000 on a joint return. Excess loss is generally capital.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-023",
    "domain": 2,
    "topic": "Securities trader",
    "coveredSources": [
      "v3-284",
      "v3-285",
      "v3-286",
      "v3-287",
      "v3-288",
      "v3-289",
      "v3-290",
      "v3-291",
      "v3-292",
      "v3-293",
      "v3-294",
      "v3-295"
    ],
    "q": "Which fact is most consistent with being a securities trader rather than an investor?",
    "choices": [
      "Buying a few dividend stocks for long-term appreciation",
      "Seeking profit from daily market movements with substantial, continuous, and regular trading activity",
      "Holding one mutual fund for retirement",
      "Buying municipal bonds primarily for tax-exempt interest"
    ],
    "answer": 1,
    "explanation": "Trader status depends on seeking profit from short-term daily market movements and having substantial, continuous, regular activity. Investors generally seek income or long-term appreciation.",
    "reference": "IRS Topic 429; Publication 550 (2025)"
  },
  {
    "id": "audit-v3-024",
    "domain": 2,
    "topic": "Mark-to-market election",
    "coveredSources": [
      "v3-296",
      "v3-297",
      "v3-298",
      "v3-299",
      "v3-300",
      "v3-301",
      "v3-302",
      "v3-304",
      "v3-305",
      "v3-306",
      "v3-307",
      "v3-308",
      "v3-309",
      "v3-311"
    ],
    "q": "A qualifying securities trader makes a valid section 475(f) mark-to-market election. How are covered trading gains and losses generally treated?",
    "choices": [
      "As capital gains and losses subject to the $3,000 net capital-loss limit",
      "As ordinary gains and losses, with wash-sale and capital-loss limitations generally not applying to the covered trading securities",
      "As tax-exempt income",
      "As wages subject to withholding"
    ],
    "answer": 1,
    "explanation": "A valid mark-to-market election generally causes covered trading securities to be treated as sold at fair market value at year-end, with ordinary gain or loss. Capital-loss and wash-sale rules generally do not apply to those covered positions.",
    "reference": "IRS Topic 429; Publication 550 (2025)"
  },
  {
    "id": "audit-v3-025",
    "domain": 2,
    "topic": "Section 1256 contracts",
    "coveredSources": [
      "v3-314",
      "v3-315",
      "v3-316",
      "v3-317",
      "v3-318",
      "v3-319",
      "v3-320"
    ],
    "q": "How is gain or loss on a Section 1256 contract generally characterized under the 60/40 rule?",
    "choices": [
      "60% short-term and 40% long-term",
      "60% long-term and 40% short-term",
      "100% long-term",
      "100% ordinary"
    ],
    "answer": 1,
    "explanation": "Section 1256 contracts are generally marked to market at year-end and treated as 60% long-term and 40% short-term capital gain or loss, regardless of actual holding period, subject to exceptions.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-026",
    "domain": 2,
    "topic": "Digital assets",
    "coveredSources": [
      "v3-321",
      "v3-322",
      "v3-323",
      "v3-324",
      "v3-325",
      "v3-326",
      "v3-327",
      "v3-328",
      "v3-329",
      "v3-330",
      "v3-331",
      "v3-332",
      "v3-333",
      "v3-334",
      "v3-335",
      "v3-336"
    ],
    "q": "For federal income tax purposes, digital assets such as cryptocurrency are generally treated as:",
    "choices": [
      "Foreign currency in every case",
      "Property",
      "Tax-exempt securities",
      "Cash equivalents with no gain or loss on disposition"
    ],
    "answer": 1,
    "explanation": "Digital assets are generally treated as property for federal tax purposes. Sales, exchanges, and other dispositions can create gain or loss under general property principles.",
    "reference": "IRS Digital Assets guidance"
  },
  {
    "id": "audit-v3-027",
    "domain": 2,
    "topic": "Crypto received for services",
    "coveredSources": [
      "v3-337",
      "v3-338",
      "v3-339",
      "v3-340",
      "v3-341"
    ],
    "q": "A self-employed consultant receives cryptocurrency worth $2,000 for services. What amount is generally included in business gross receipts when received?",
    "choices": [
      "$0 until the cryptocurrency is sold",
      "$2,000 fair market value",
      "Only the consultant's basis in the cryptocurrency",
      "The amount the client originally paid for the cryptocurrency"
    ],
    "answer": 1,
    "explanation": "Property received for services is generally included in income at fair market value when received. Later disposition can create a separate gain or loss based on the taxpayer's basis.",
    "reference": "IRS Digital Assets guidance; Publication 525"
  },
  {
    "id": "audit-v3-028",
    "domain": 2,
    "topic": "Collectibles",
    "coveredSources": [
      "v3-342",
      "v3-343",
      "v3-344",
      "v3-346",
      "v3-347",
      "v3-348",
      "v3-349",
      "v3-350",
      "v3-351",
      "v3-352",
      "v3-353"
    ],
    "q": "What is the maximum federal long-term capital-gain rate generally associated with collectibles gain?",
    "choices": [
      "15%",
      "20%",
      "25%",
      "28%"
    ],
    "answer": 3,
    "explanation": "Long-term collectibles gain can be subject to a maximum 28% rate. The actual rate can be lower depending on the taxpayer's ordinary rate and overall tax computation.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-029",
    "domain": 2,
    "topic": "Nonbusiness bad debt",
    "coveredSources": [
      "v3-354",
      "v3-355",
      "v3-356",
      "v3-357",
      "v3-358",
      "v3-359",
      "v3-360"
    ],
    "q": "How is a qualifying nonbusiness bad debt generally deducted when it becomes wholly worthless?",
    "choices": [
      "As an ordinary loss",
      "As a short-term capital loss",
      "As a long-term capital loss regardless of holding period",
      "As an itemized medical deduction"
    ],
    "answer": 1,
    "explanation": "A qualifying nonbusiness bad debt is generally treated as a short-term capital loss in the year it becomes wholly worthless.",
    "reference": "IRS Publication 550 (2025)"
  },
  {
    "id": "audit-v3-030",
    "domain": 2,
    "topic": "Related-party losses",
    "coveredSources": [
      "v3-370",
      "v3-371",
      "v3-372",
      "v3-373"
    ],
    "q": "A taxpayer sells property at a loss to a related family member covered by the related-party rules. How is the loss generally treated?",
    "choices": [
      "Fully deductible as a capital loss",
      "Fully deductible as an ordinary loss",
      "Disallowed",
      "Automatically carried back 3 years"
    ],
    "answer": 2,
    "explanation": "Losses from sales or exchanges between certain related parties are generally disallowed. Gains remain taxable.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-031",
    "domain": 5,
    "topic": "Transfers incident to divorce",
    "coveredSources": [
      "v3-366",
      "v3-367",
      "v3-368",
      "v3-369"
    ],
    "q": "One spouse transfers appreciated investment property to the other spouse incident to divorce. What is the general federal income-tax treatment?",
    "choices": [
      "The transferor recognizes capital gain immediately",
      "No gain or loss is generally recognized, and the recipient generally takes carryover basis",
      "The recipient always takes fair market value basis",
      "The transfer is treated as wages"
    ],
    "answer": 1,
    "explanation": "Transfers of property between spouses or incident to divorce generally qualify for nonrecognition under section 1041, with carryover basis to the recipient, subject to exceptions.",
    "reference": "IRS Publication 504 (2025); IRC §1041"
  },
  {
    "id": "audit-v3-032",
    "domain": 2,
    "topic": "Home-sale exclusion",
    "coveredSources": [
      "v3-374",
      "v3-375",
      "v3-376",
      "v3-377",
      "v3-378",
      "v3-379",
      "v3-380",
      "v3-381"
    ],
    "q": "A single taxpayer has a $200,000 gain on the sale of a principal residence and meets all requirements for the full exclusion. How much gain is generally taxable?",
    "choices": [
      "$0",
      "$50,000",
      "$100,000",
      "$200,000"
    ],
    "answer": 0,
    "explanation": "A qualifying single taxpayer may generally exclude up to $250,000 of gain on the sale of a principal residence. A qualifying joint return may exclude up to $500,000.",
    "reference": "IRS Publication 523 (2025)"
  },
  {
    "id": "audit-v3-033",
    "domain": 2,
    "topic": "Home-sale ownership/use tests",
    "coveredSources": [
      "v3-382",
      "v3-383",
      "v3-384",
      "v3-385",
      "v3-386",
      "v3-387",
      "v3-388",
      "v3-389"
    ],
    "q": "What is the general ownership-and-use requirement for the principal-residence gain exclusion?",
    "choices": [
      "Own and use the home as a main home for at least 2 years during the 5-year period ending on the sale date",
      "Own the home for 5 consecutive years",
      "Use the home as a main home for 1 year",
      "Own and use the home for the same exact 24 consecutive months"
    ],
    "answer": 0,
    "explanation": "The taxpayer generally must meet separate 2-out-of-5-year ownership and use tests. The periods need not be the same exact two years.",
    "reference": "IRS Publication 523 (2025)"
  },
  {
    "id": "audit-v3-034",
    "domain": 2,
    "topic": "Partial home-sale exclusion",
    "coveredSources": [
      "v3-397",
      "v3-398",
      "v3-399",
      "v3-400",
      "v3-401",
      "v3-403",
      "v3-404",
      "v3-405"
    ],
    "q": "A single taxpayer owned and used a home as a principal residence for 12 months and sells because of a qualifying change in workplace location. What is the maximum partial exclusion based solely on the 12-of-24-month fraction?",
    "choices": [
      "$62,500",
      "$125,000",
      "$187,500",
      "$250,000"
    ],
    "answer": 1,
    "explanation": "A qualifying partial exclusion is generally prorated. Twelve months out of the required 24 is 50%; 50% of the $250,000 single maximum is $125,000.",
    "reference": "IRS Publication 523 (2025)"
  },
  {
    "id": "audit-v3-035",
    "domain": 2,
    "topic": "Home-sale depreciation",
    "coveredSources": [
      "v3-406",
      "v3-407",
      "v3-408",
      "v3-409",
      "v3-410",
      "v3-411",
      "v3-412",
      "v3-413",
      "v3-414"
    ],
    "q": "A taxpayer otherwise qualifies to exclude gain on the sale of a principal residence but previously claimed depreciation for rental or business use after May 6, 1997. Which statement is generally correct?",
    "choices": [
      "All gain can always be excluded",
      "Gain attributable to depreciation generally cannot be excluded under the home-sale exclusion",
      "The depreciation becomes a charitable deduction",
      "The depreciation is ignored if the taxpayer lived in the home for 2 years"
    ],
    "answer": 1,
    "explanation": "Gain attributable to depreciation deductions allowed or allowable for periods after May 6, 1997 generally cannot be excluded under section 121 and may be taxed under unrecaptured section 1250 gain rules.",
    "reference": "IRS Publication 523 (2025)"
  },
  {
    "id": "audit-v3-036",
    "domain": 2,
    "topic": "Home-sale reporting",
    "coveredSources": [
      "v3-415",
      "v3-416",
      "v3-417",
      "v3-418",
      "v3-420"
    ],
    "q": "A taxpayer sells a principal residence at a fully excludable gain and does not receive Form 1099-S. Must the sale generally be reported on the federal return?",
    "choices": [
      "Yes, every home sale must be reported",
      "No, if the entire gain is excludable and no Form 1099-S was received",
      "Only if the taxpayer is under age 65",
      "Only on Schedule C"
    ],
    "answer": 1,
    "explanation": "A home sale generally does not have to be reported if the entire gain is excludable and the taxpayer did not receive Form 1099-S. Other facts can require reporting.",
    "reference": "IRS Publication 523 (2025)"
  },
  {
    "id": "audit-v3-037",
    "domain": 2,
    "topic": "Cancellation of debt",
    "coveredSources": [
      "v3-422",
      "v3-423",
      "v3-424",
      "v3-425",
      "v3-426",
      "v3-427",
      "v3-428"
    ],
    "q": "Debt is canceled for less than full payment. What is the general federal income-tax rule?",
    "choices": [
      "Canceled debt is always tax-free",
      "Canceled debt may create taxable income unless an exclusion or exception applies",
      "Canceled debt is always capital gain",
      "Canceled debt is reported only if secured by a home"
    ],
    "answer": 1,
    "explanation": "Cancellation of indebtedness generally creates income unless a statutory exclusion or exception applies, such as bankruptcy, insolvency, or certain other provisions.",
    "reference": "IRS Publication 4681 (2025)"
  },
  {
    "id": "audit-v3-038",
    "domain": 2,
    "topic": "Installment sales",
    "coveredSources": [
      "v3-432",
      "v3-433",
      "v3-434",
      "v3-435",
      "v3-436",
      "v3-437",
      "v3-438",
      "v3-439",
      "v3-440"
    ],
    "q": "Which sale can generally qualify for installment-sale reporting?",
    "choices": [
      "A sale at a loss",
      "A gain sale in which at least one payment is received after the tax year of sale, subject to statutory exceptions",
      "A sale of publicly traded stock on an exchange",
      "Any cash sale completed in one year"
    ],
    "answer": 1,
    "explanation": "An installment sale generally is a sale of property at a gain where at least one payment is received after the year of sale. Certain property, including marketable securities, does not qualify.",
    "reference": "IRS Publication 537 (2025)"
  },
  {
    "id": "audit-v3-039",
    "domain": 2,
    "topic": "Installment-sale calculation",
    "coveredSources": [
      "v3-441",
      "v3-442",
      "v3-443",
      "v3-444",
      "v3-445",
      "v3-446",
      "v3-447",
      "v3-448",
      "v3-449",
      "v3-450",
      "v3-451",
      "v3-454"
    ],
    "q": "An installment sale has gross profit of $30,000 and contract price of $100,000. What percentage of each principal payment is generally recognized as gain?",
    "choices": [
      "20%",
      "30%",
      "70%",
      "100%"
    ],
    "answer": 1,
    "explanation": "Gross profit percentage equals gross profit divided by contract price. $30,000 ÷ $100,000 = 30%. Interest is separated before applying the gross profit percentage.",
    "reference": "IRS Publication 537 (2025)"
  },
  {
    "id": "audit-v3-040",
    "domain": 2,
    "topic": "Like-kind exchanges",
    "coveredSources": [
      "v3-455",
      "v3-456",
      "v3-457",
      "v3-458",
      "v3-460",
      "v3-461",
      "v3-462",
      "v3-463",
      "v3-464",
      "v3-465",
      "v3-466"
    ],
    "q": "Under current section 1031 rules, which exchange can potentially qualify for nonrecognition?",
    "choices": [
      "A personal automobile for another automobile",
      "U.S. investment real property for other U.S. business or investment real property of like kind",
      "Corporate stock for corporate stock",
      "A principal residence for cryptocurrency"
    ],
    "answer": 1,
    "explanation": "Section 1031 generally applies to qualifying exchanges of real property held for business or investment for like-kind real property. Personal-use property and securities do not qualify.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-041",
    "domain": 2,
    "topic": "Deferred like-kind exchange",
    "coveredSources": [
      "v3-468",
      "v3-469"
    ],
    "q": "In a deferred section 1031 exchange, replacement property generally must be identified within:",
    "choices": [
      "30 days",
      "45 days",
      "90 days",
      "180 days"
    ],
    "answer": 1,
    "explanation": "Replacement property generally must be identified within 45 days after transfer of the relinquished property and received by the earlier of 180 days or the due date, including extensions, of the return for the transfer year.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-042",
    "domain": 2,
    "topic": "Like-kind exchange boot",
    "coveredSources": [
      "v3-470",
      "v3-471",
      "v3-472",
      "v3-473",
      "v3-474",
      "v3-475"
    ],
    "q": "In an otherwise qualifying section 1031 exchange, the taxpayer receives $12,000 cash and has $30,000 realized gain. Ignoring other adjustments, how much gain is generally recognized?",
    "choices": [
      "$0",
      "$12,000",
      "$18,000",
      "$30,000"
    ],
    "answer": 1,
    "explanation": "Gain is generally recognized to the extent of money or non-like-kind property ('boot') received, limited by realized gain. Here, $12,000 is recognized.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-043",
    "domain": 2,
    "topic": "Related-party like-kind exchanges",
    "coveredSources": [
      "v3-481",
      "v3-482",
      "v3-483",
      "v3-484",
      "v3-485",
      "v3-486"
    ],
    "q": "What special holding concept generally applies to a section 1031 exchange between related parties?",
    "choices": [
      "A 30-day wash-sale period",
      "A 2-year disposition rule",
      "A 5-year home-sale use test",
      "A 10-year retirement holding period"
    ],
    "answer": 1,
    "explanation": "Special related-party rules can trigger recognition if either party disposes of the exchanged property within 2 years, subject to exceptions.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-044",
    "domain": 2,
    "topic": "Involuntary conversions",
    "coveredSources": [
      "v3-487",
      "v3-488",
      "v3-489",
      "v3-490",
      "v3-491",
      "v3-492",
      "v3-498",
      "v3-503"
    ],
    "q": "Property is destroyed and the owner receives insurance proceeds exceeding adjusted basis. When can gain potentially be postponed under section 1033?",
    "choices": [
      "When qualifying replacement property is timely acquired",
      "Only when the property was personal-use property",
      "Only when the taxpayer receives no insurance",
      "Never; all involuntary-conversion gains are immediately taxable"
    ],
    "answer": 0,
    "explanation": "Gain from an involuntary conversion can often be postponed when qualifying replacement property is acquired within the applicable replacement period and the statutory requirements are met.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-045",
    "domain": 2,
    "topic": "Involuntary conversion replacement period",
    "coveredSources": [
      "v3-499",
      "v3-500",
      "v3-501",
      "v3-502"
    ],
    "q": "What is the general replacement period for property involuntarily converted into money, absent a special extension?",
    "choices": [
      "1 year",
      "2 years",
      "3 years",
      "5 years"
    ],
    "answer": 1,
    "explanation": "The general replacement period is usually 2 years after the close of the first tax year in which gain is realized. Longer periods can apply to certain condemned real property and federally declared disaster situations.",
    "reference": "IRS Publication 544 (2025)"
  },
  {
    "id": "audit-v3-046",
    "domain": 2,
    "topic": "Condemnation",
    "coveredSources": [
      "v3-506",
      "v3-507",
      "v3-508",
      "v3-510",
      "v3-512"
    ],
    "q": "A sale of property under threat of condemnation is generally treated as:",
    "choices": [
      "A gift",
      "A condemnation/involuntary conversion for the applicable rules",
      "A wash sale",
      "A tax-free transfer between spouses"
    ],
    "answer": 1,
    "explanation": "A sale under threat or imminence of condemnation is generally treated as a condemnation for involuntary-conversion purposes.",
    "reference": "IRS Publication 544 (2025)"
  }
]
};
const EA_AUDIT_BATCH_3_REVIEWED=new Set(["v3-001","v3-002","v3-003","v3-004","v3-005","v3-006","v3-007","v3-008","v3-009","v3-010","v3-011","v3-012","v3-013","v3-014","v3-015","v3-016","v3-017","v3-018","v3-019","v3-020","v3-021","v3-022","v3-023","v3-024","v3-025","v3-026","v3-027","v3-028","v3-029","v3-030","v3-031","v3-032","v3-033","v3-034","v3-035","v3-036","v3-037","v3-038","v3-039","v3-040","v3-041","v3-042","v3-043","v3-044","v3-045","v3-046","v3-047","v3-048","v3-049","v3-050","v3-051","v3-052","v3-053","v3-054","v3-055","v3-056","v3-057","v3-058","v3-059","v3-060","v3-061","v3-062","v3-063","v3-064","v3-065","v3-066","v3-067","v3-068","v3-069","v3-070","v3-071","v3-072","v3-073","v3-074","v3-075","v3-076","v3-077","v3-078","v3-079","v3-080","v3-081","v3-082","v3-083","v3-084","v3-085","v3-086","v3-087","v3-088","v3-089","v3-090","v3-091","v3-092","v3-093","v3-094","v3-095","v3-096","v3-097","v3-098","v3-099","v3-100","v3-101","v3-102","v3-103","v3-104","v3-105","v3-106","v3-107","v3-108","v3-109","v3-110","v3-111","v3-112","v3-113","v3-114","v3-115","v3-116","v3-117","v3-118","v3-119","v3-120","v3-121","v3-122","v3-123","v3-124","v3-125","v3-126","v3-127","v3-128","v3-129","v3-130","v3-131","v3-132","v3-133","v3-134","v3-135","v3-136","v3-137","v3-138","v3-139","v3-140","v3-141","v3-142","v3-143","v3-144","v3-145","v3-146","v3-147","v3-148","v3-149","v3-150","v3-151","v3-152","v3-153","v3-154","v3-155","v3-156","v3-157","v3-158","v3-159","v3-160","v3-161","v3-162","v3-163","v3-164","v3-165","v3-166","v3-167","v3-168","v3-169","v3-170","v3-171","v3-172","v3-173","v3-174","v3-175","v3-176","v3-177","v3-178","v3-179","v3-180","v3-181","v3-182","v3-183","v3-184","v3-185","v3-186","v3-187","v3-188","v3-189","v3-190","v3-191","v3-192","v3-193","v3-194","v3-195","v3-196","v3-197","v3-198","v3-199","v3-200","v3-201","v3-202","v3-203","v3-204","v3-205","v3-206","v3-207","v3-208","v3-209","v3-210","v3-211","v3-212","v3-213","v3-214","v3-215","v3-216","v3-217","v3-218","v3-219","v3-220","v3-221","v3-222","v3-223","v3-224","v3-225","v3-226","v3-227","v3-228","v3-229","v3-230","v3-231","v3-232","v3-233","v3-234","v3-235","v3-236","v3-237","v3-238","v3-239","v3-240","v3-241","v3-242","v3-243","v3-244","v3-245","v3-246","v3-247","v3-248","v3-249","v3-250","v3-251","v3-252","v3-253","v3-254","v3-255","v3-256","v3-257","v3-258","v3-259","v3-260","v3-261","v3-262","v3-263","v3-264","v3-265","v3-266","v3-267","v3-268","v3-269","v3-270","v3-271","v3-272","v3-273","v3-274","v3-275","v3-276","v3-277","v3-278","v3-279","v3-280","v3-281","v3-282","v3-283","v3-284","v3-285","v3-286","v3-287","v3-288","v3-289","v3-290","v3-291","v3-292","v3-293","v3-294","v3-295","v3-296","v3-297","v3-298","v3-299","v3-300","v3-301","v3-302","v3-303","v3-304","v3-305","v3-306","v3-307","v3-308","v3-309","v3-310","v3-311","v3-312","v3-313","v3-314","v3-315","v3-316","v3-317","v3-318","v3-319","v3-320","v3-321","v3-322","v3-323","v3-324","v3-325","v3-326","v3-327","v3-328","v3-329","v3-330","v3-331","v3-332","v3-333","v3-334","v3-335","v3-336","v3-337","v3-338","v3-339","v3-340","v3-341","v3-342","v3-343","v3-344","v3-345","v3-346","v3-347","v3-348","v3-349","v3-350","v3-351","v3-352","v3-353","v3-354","v3-355","v3-356","v3-357","v3-358","v3-359","v3-360","v3-361","v3-362","v3-363","v3-364","v3-365","v3-366","v3-367","v3-368","v3-369","v3-370","v3-371","v3-372","v3-373","v3-374","v3-375","v3-376","v3-377","v3-378","v3-379","v3-380","v3-381","v3-382","v3-383","v3-384","v3-385","v3-386","v3-387","v3-388","v3-389","v3-390","v3-391","v3-392","v3-393","v3-394","v3-395","v3-396","v3-397","v3-398","v3-399","v3-400","v3-401","v3-402","v3-403","v3-404","v3-405","v3-406","v3-407","v3-408","v3-409","v3-410","v3-411","v3-412","v3-413","v3-414","v3-415","v3-416","v3-417","v3-418","v3-419","v3-420","v3-421","v3-422","v3-423","v3-424","v3-425","v3-426","v3-427","v3-428","v3-429","v3-430","v3-431","v3-432","v3-433","v3-434","v3-435","v3-436","v3-437","v3-438","v3-439","v3-440","v3-441","v3-442","v3-443","v3-444","v3-445","v3-446","v3-447","v3-448","v3-449","v3-450","v3-451","v3-452","v3-453","v3-454","v3-455","v3-456","v3-457","v3-458","v3-459","v3-460","v3-461","v3-462","v3-463","v3-464","v3-465","v3-466","v3-467","v3-468","v3-469","v3-470","v3-471","v3-472","v3-473","v3-474","v3-475","v3-476","v3-477","v3-478","v3-479","v3-480","v3-481","v3-482","v3-483","v3-484","v3-485","v3-486","v3-487","v3-488","v3-489","v3-490","v3-491","v3-492","v3-493","v3-494","v3-495","v3-496","v3-497","v3-498","v3-499","v3-500","v3-501","v3-502","v3-503","v3-504","v3-505","v3-506","v3-507","v3-508","v3-509","v3-510","v3-511","v3-512"]);
const EA_AUDIT_BATCH_3_COVERED=new Set(EA_AUDIT_BATCH_3.questions.flatMap(q=>q.coveredSources||[]));
const EA_AUDIT_BATCH_3_EXCLUDED=new Set([...EA_AUDIT_BATCH_3_REVIEWED].filter(id=>!EA_AUDIT_BATCH_3_COVERED.has(id)));
