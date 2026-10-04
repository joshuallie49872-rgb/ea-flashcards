// Individual audit batch 5: Video 5 source cards v5-001 through v5-350.
const EA_AUDIT_BATCH_5={
 range:"v5-001..v5-350",reviewedCount:350,auditDate:"2026-10-03",taxYear:2025,examCycle:"2026-2027",
 method:"Individual review against PSI Part 1 Taxation/Credits scope and current 2025 IRS guidance",
 questions:[
  {
    "id": "audit-v5-001",
    "domain": 4,
    "topic": "Tax brackets",
    "coveredSources": [
      "v5-001",
      "v5-002",
      "v5-003",
      "v5-005",
      "v5-010",
      "v5-013",
      "v5-015",
      "v5-016"
    ],
    "q": "A taxpayer's taxable income rises into a higher marginal tax bracket. Which statement is correct?",
    "choices": [
      "All taxable income is taxed at the new higher rate",
      "Only the portion of taxable income falling in the higher bracket is taxed at that rate",
      "The taxpayer's effective rate automatically equals the top marginal rate",
      "Long-term capital gain is always taxed at the ordinary marginal rate"
    ],
    "answer": 1,
    "explanation": "Federal income tax brackets are marginal. Moving into a higher bracket generally subjects only the income within that bracket to the higher rate.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v5-002",
    "domain": 4,
    "topic": "Ordinary rates",
    "coveredSources": [
      "v5-005"
    ],
    "q": "What are the seven ordinary federal individual income-tax rates for 2025?",
    "choices": [
      "0%, 10%, 15%, 20%, 25%, 30%, 35%",
      "10%, 12%, 22%, 24%, 32%, 35%, 37%",
      "10%, 15%, 20%, 25%, 28%, 33%, 39.6%",
      "12%, 18%, 22%, 25%, 30%, 35%, 40%"
    ],
    "answer": 1,
    "explanation": "The 2025 ordinary individual rates are 10%, 12%, 22%, 24%, 32%, 35%, and 37%.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v5-003",
    "domain": 4,
    "topic": "Kiddie tax",
    "coveredSources": [
      "v5-019",
      "v5-020",
      "v5-022",
      "v5-024",
      "v5-025",
      "v5-026",
      "v5-027",
      "v5-028",
      "v5-029",
      "v5-030"
    ],
    "q": "The kiddie tax primarily applies to:",
    "choices": [
      "A child's earned wages from employment",
      "Certain unearned income of children who meet age, support, filing, and other requirements",
      "All income of every dependent under age 24",
      "Only tax-exempt municipal bond interest"
    ],
    "answer": 1,
    "explanation": "The kiddie tax generally applies to certain unearned income of children who meet the statutory age, student, support, parent, and filing conditions. Form 8615 is generally used when the child files a return subject to the tax.",
    "reference": "2025 Form 8615 Instructions"
  },
  {
    "id": "audit-v5-004",
    "domain": 3,
    "topic": "Premium Tax Credit",
    "coveredSources": [
      "v5-033",
      "v5-034",
      "v5-041",
      "v5-198",
      "v5-199",
      "v5-200",
      "v5-201",
      "v5-204",
      "v5-205",
      "v5-206",
      "v5-207",
      "v5-208"
    ],
    "q": "A taxpayer received advance Premium Tax Credit payments for Marketplace coverage. Which action is generally required on the federal return?",
    "choices": [
      "Ignore the advance payments",
      "Reconcile the advance payments using Form 8962 and Form 1095-A information",
      "Report the advance payments as wages",
      "Deduct the advance payments on Schedule A"
    ],
    "answer": 1,
    "explanation": "Advance Premium Tax Credit payments are reconciled on Form 8962 using Marketplace coverage information reported on Form 1095-A.",
    "reference": "2025 Form 8962 Instructions"
  },
  {
    "id": "audit-v5-005",
    "domain": 4,
    "topic": "Self-employment tax",
    "coveredSources": [
      "v5-042",
      "v5-043",
      "v5-044",
      "v5-045",
      "v5-046",
      "v5-047",
      "v5-048",
      "v5-049",
      "v5-050",
      "v5-055",
      "v5-056"
    ],
    "q": "A sole proprietor has $50,000 of net business profit. Before applying the Social Security and Medicare self-employment tax rates, net earnings from self-employment are generally computed by multiplying by:",
    "choices": [
      "50%",
      "75%",
      "92.35%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Schedule SE generally multiplies net self-employment income by 92.35% to determine net earnings from self-employment before applying the applicable Social Security and Medicare rates.",
    "reference": "2025 Schedule SE Instructions"
  },
  {
    "id": "audit-v5-006",
    "domain": 4,
    "topic": "Self-employment tax threshold",
    "coveredSources": [
      "v5-042",
      "v5-051"
    ],
    "q": "A taxpayer has $350 of net earnings from self-employment and no other self-employment income. Assuming no special rule applies, is self-employment tax generally due?",
    "choices": [
      "Yes, because any profit triggers self-employment tax",
      "Yes, because the threshold is $100",
      "No, because net earnings are below $400",
      "No, because sole proprietors do not pay self-employment tax"
    ],
    "answer": 2,
    "explanation": "Self-employment tax generally applies when net earnings from self-employment are $400 or more.",
    "reference": "2025 Schedule SE Instructions"
  },
  {
    "id": "audit-v5-007",
    "domain": 4,
    "topic": "Additional Medicare Tax",
    "coveredSources": [
      "v5-059",
      "v5-060",
      "v5-061",
      "v5-062",
      "v5-063",
      "v5-064",
      "v5-065"
    ],
    "q": "What is the rate of the Additional Medicare Tax when it applies?",
    "choices": [
      "0.9%",
      "2.9%",
      "3.8%",
      "6.2%"
    ],
    "answer": 0,
    "explanation": "Additional Medicare Tax is 0.9% on wages, railroad retirement compensation, and self-employment income above the applicable filing-status threshold.",
    "reference": "2025 Form 8959 Instructions"
  },
  {
    "id": "audit-v5-008",
    "domain": 4,
    "topic": "Unreported tips",
    "coveredSources": [
      "v5-066",
      "v5-067",
      "v5-068"
    ],
    "q": "An employee received cash tips that were not reported to the employer. Which form may be required to compute the employee share of Social Security and Medicare tax on those tips?",
    "choices": [
      "Form 4137",
      "Form 6251",
      "Form 8960",
      "Form 8606"
    ],
    "answer": 0,
    "explanation": "Form 4137 is used to report Social Security and Medicare tax on certain tip income not reported to the employer, including allocated tips when applicable.",
    "reference": "2025 Form 4137 Instructions"
  },
  {
    "id": "audit-v5-009",
    "domain": 4,
    "topic": "Net Investment Income Tax",
    "coveredSources": [
      "v5-069",
      "v5-070",
      "v5-071",
      "v5-072",
      "v5-073",
      "v5-074",
      "v5-075",
      "v5-076"
    ],
    "q": "The 3.8% Net Investment Income Tax is generally imposed on the lesser of:",
    "choices": [
      "Wages or self-employment income",
      "Net investment income or the excess of modified AGI over the applicable threshold",
      "Taxable income or gross income",
      "Capital gains or itemized deductions"
    ],
    "answer": 1,
    "explanation": "NIIT is 3.8% of the lesser of net investment income or the excess of modified AGI over the applicable filing-status threshold.",
    "reference": "2025 Form 8960 Instructions"
  },
  {
    "id": "audit-v5-010",
    "domain": 3,
    "topic": "Refundable credits",
    "coveredSources": [
      "v5-077",
      "v5-078",
      "v5-079",
      "v5-080",
      "v5-081",
      "v5-082",
      "v5-083"
    ],
    "q": "Which statement correctly describes a refundable tax credit?",
    "choices": [
      "It can reduce tax only to zero",
      "It can reduce tax below zero and potentially produce a refund",
      "It reduces taxable income rather than tax",
      "It is available only to taxpayers who itemize"
    ],
    "answer": 1,
    "explanation": "A refundable credit can exceed the taxpayer's tax liability and produce a refund of the excess, subject to the rules for that credit.",
    "reference": "IRS refundable tax credits guidance"
  },
  {
    "id": "audit-v5-011",
    "domain": 3,
    "topic": "Child Tax Credit",
    "coveredSources": [
      "v5-084",
      "v5-085",
      "v5-087",
      "v5-088",
      "v5-089",
      "v5-091",
      "v5-092",
      "v5-093",
      "v5-094",
      "v5-095",
      "v5-096"
    ],
    "q": "What is the maximum 2025 Child Tax Credit per qualifying child before phaseouts and other limitations?",
    "choices": [
      "$500",
      "$1,700",
      "$2,000",
      "$2,200"
    ],
    "answer": 3,
    "explanation": "For 2025, the Child Tax Credit is up to $2,200 per qualifying child. Up to $1,700 per qualifying child may be refundable through the Additional Child Tax Credit, subject to its rules.",
    "reference": "2025 Form 1040 Instructions; Schedule 8812 Instructions"
  },
  {
    "id": "audit-v5-012",
    "domain": 3,
    "topic": "Credit for Other Dependents",
    "coveredSources": [
      "v5-097",
      "v5-098",
      "v5-099",
      "v5-100"
    ],
    "q": "What is the maximum Credit for Other Dependents for an eligible dependent?",
    "choices": [
      "$250",
      "$500",
      "$1,700",
      "$2,200"
    ],
    "answer": 1,
    "explanation": "The Credit for Other Dependents is generally a nonrefundable credit of up to $500 per eligible dependent.",
    "reference": "2025 Schedule 8812 Instructions"
  },
  {
    "id": "audit-v5-013",
    "domain": 3,
    "topic": "Child and Dependent Care Credit",
    "coveredSources": [
      "v5-101",
      "v5-102",
      "v5-103",
      "v5-104",
      "v5-105",
      "v5-107",
      "v5-108",
      "v5-109",
      "v5-110",
      "v5-111",
      "v5-116",
      "v5-117",
      "v5-118",
      "v5-119",
      "v5-120",
      "v5-121",
      "v5-122"
    ],
    "q": "A single parent pays daycare expenses for a 4-year-old child so the parent can work. Which fact is central to eligibility for the Child and Dependent Care Credit?",
    "choices": [
      "The expenses must enable the taxpayer to work or look for work",
      "The taxpayer must itemize deductions",
      "The child must have investment income",
      "The provider must be a relative"
    ],
    "answer": 0,
    "explanation": "The credit generally requires work-related care expenses for a qualifying person, along with earned-income, provider-identification, and other requirements.",
    "reference": "IRS Publication 503 (2025)"
  },
  {
    "id": "audit-v5-014",
    "domain": 3,
    "topic": "Dependent care expense limit",
    "coveredSources": [
      "v5-103",
      "v5-104",
      "v5-105",
      "v5-106"
    ],
    "q": "What is the maximum amount of qualifying expenses generally used to compute the Child and Dependent Care Credit for two or more qualifying persons?",
    "choices": [
      "$2,000",
      "$3,000",
      "$6,000",
      "$10,000"
    ],
    "answer": 2,
    "explanation": "The expense limit is generally $3,000 for one qualifying person and $6,000 for two or more qualifying persons.",
    "reference": "IRS Publication 503 (2025)"
  },
  {
    "id": "audit-v5-015",
    "domain": 3,
    "topic": "EITC",
    "coveredSources": [
      "v5-123",
      "v5-124",
      "v5-125",
      "v5-130",
      "v5-133",
      "v5-134",
      "v5-135",
      "v5-136",
      "v5-137",
      "v5-138",
      "v5-143",
      "v5-144",
      "v5-145",
      "v5-146",
      "v5-147",
      "v5-148",
      "v5-149",
      "v5-150",
      "v5-151",
      "v5-152",
      "v5-153",
      "v5-154",
      "v5-156"
    ],
    "q": "Which statement about the 2025 Earned Income Tax Credit is correct?",
    "choices": [
      "A taxpayer must have earned income",
      "Investment income can be unlimited",
      "A taxpayer filing Form 2555 can always claim the EITC",
      "The credit is nonrefundable"
    ],
    "answer": 0,
    "explanation": "The EITC is refundable and generally requires earned income, applicable AGI and earned-income limits, an investment-income amount no more than $11,950 for 2025, and compliance with filing, SSN, residency, and qualifying-child rules.",
    "reference": "IRS Publication 596 (2025)"
  },
  {
    "id": "audit-v5-016",
    "domain": 3,
    "topic": "2025 EITC income limit",
    "coveredSources": [
      "v5-126",
      "v5-127",
      "v5-128",
      "v5-129",
      "v5-136"
    ],
    "q": "For 2025, what is the maximum AGI/earned-income limit for a married couple filing jointly with three or more qualifying children?",
    "choices": [
      "$57,554",
      "$61,555",
      "$64,430",
      "$68,675"
    ],
    "answer": 3,
    "explanation": "For 2025, the limit is $68,675 for MFJ taxpayers with three or more qualifying children. The investment-income limit is $11,950.",
    "reference": "IRS Publication 596 (2025)"
  },
  {
    "id": "audit-v5-017",
    "domain": 3,
    "topic": "American Opportunity Tax Credit",
    "coveredSources": [
      "v5-157",
      "v5-158",
      "v5-160",
      "v5-161",
      "v5-162",
      "v5-163",
      "v5-164",
      "v5-165",
      "v5-166",
      "v5-167",
      "v5-168",
      "v5-169",
      "v5-170",
      "v5-172",
      "v5-173",
      "v5-174",
      "v5-175",
      "v5-177",
      "v5-178"
    ],
    "q": "A taxpayer has $4,000 of qualified expenses for an eligible student and otherwise qualifies fully for the American Opportunity Tax Credit. What is the maximum credit?",
    "choices": [
      "$1,000",
      "$2,000",
      "$2,500",
      "$4,000"
    ],
    "answer": 2,
    "explanation": "The AOTC is generally 100% of the first $2,000 of qualified expenses plus 25% of the next $2,000, for a maximum $2,500 per eligible student. Up to $1,000 can be refundable.",
    "reference": "IRS Publication 970 (2025)"
  },
  {
    "id": "audit-v5-018",
    "domain": 3,
    "topic": "Lifetime Learning Credit",
    "coveredSources": [
      "v5-159",
      "v5-161",
      "v5-162",
      "v5-163",
      "v5-164",
      "v5-180",
      "v5-181",
      "v5-182",
      "v5-183",
      "v5-184",
      "v5-185",
      "v5-186"
    ],
    "q": "A taxpayer pays $10,000 of qualified expenses and otherwise qualifies fully for the Lifetime Learning Credit. What is the maximum credit?",
    "choices": [
      "$1,000",
      "$2,000",
      "$2,500",
      "$10,000"
    ],
    "answer": 1,
    "explanation": "The Lifetime Learning Credit is generally 20% of up to $10,000 of qualified expenses per return, for a maximum $2,000.",
    "reference": "IRS Publication 970 (2025)"
  },
  {
    "id": "audit-v5-019",
    "domain": 3,
    "topic": "Education credit phaseout",
    "coveredSources": [
      "v5-162",
      "v5-163"
    ],
    "q": "For 2025, the AOTC and Lifetime Learning Credit generally phase out over what MAGI range for a single taxpayer?",
    "choices": [
      "$50,000–$60,000",
      "$70,000–$80,000",
      "$80,000–$90,000",
      "$100,000–$120,000"
    ],
    "answer": 2,
    "explanation": "For 2025, the education credits generally phase out between $80,000 and $90,000 of MAGI for nonjoint filers and $160,000 to $180,000 for MFJ.",
    "reference": "IRS Publication 970 (2025)"
  },
  {
    "id": "audit-v5-020",
    "domain": 3,
    "topic": "Adoption Credit",
    "coveredSources": [
      "v5-187",
      "v5-188",
      "v5-189",
      "v5-190",
      "v5-191",
      "v5-192",
      "v5-193",
      "v5-194",
      "v5-195",
      "v5-196",
      "v5-197"
    ],
    "q": "What is the maximum 2025 Adoption Credit per eligible child before the income phaseout?",
    "choices": [
      "$5,000",
      "$10,000",
      "$17,280",
      "$19,000"
    ],
    "answer": 2,
    "explanation": "The 2025 maximum is $17,280 per eligible child. Beginning in 2025, up to $5,000 per qualifying child can be refundable, with the remaining eligible nonrefundable amount subject to carryforward rules.",
    "reference": "2025 Form 8839 Instructions"
  },
  {
    "id": "audit-v5-021",
    "domain": 3,
    "topic": "Premium Tax Credit eligibility",
    "coveredSources": [
      "v5-198",
      "v5-199",
      "v5-200",
      "v5-201",
      "v5-204",
      "v5-205",
      "v5-206"
    ],
    "q": "Which taxpayer is generally most likely to be eligible for the Premium Tax Credit?",
    "choices": [
      "A taxpayer enrolled in qualifying Marketplace coverage who meets the applicable household-income and coverage rules",
      "A taxpayer enrolled in Medicare",
      "A taxpayer eligible for affordable employer coverage who declines it solely to claim the credit",
      "A taxpayer with no Marketplace coverage"
    ],
    "answer": 0,
    "explanation": "The Premium Tax Credit generally requires qualifying Marketplace coverage and satisfaction of household-income, filing-status, and other health-coverage eligibility rules.",
    "reference": "2025 Form 8962 Instructions"
  },
  {
    "id": "audit-v5-022",
    "domain": 3,
    "topic": "Saver's Credit",
    "coveredSources": [
      "v5-246",
      "v5-247",
      "v5-248",
      "v5-249",
      "v5-250",
      "v5-251",
      "v5-252",
      "v5-253",
      "v5-254",
      "v5-255"
    ],
    "q": "Which statement about the Saver's Credit is correct?",
    "choices": [
      "It is refundable",
      "It can equal 10%, 20%, or 50% of eligible retirement contributions, subject to income and eligibility limits",
      "It is available to taxpayers under age 18",
      "It applies to unlimited contribution amounts"
    ],
    "answer": 1,
    "explanation": "The Retirement Savings Contributions Credit is nonrefundable and can be 10%, 20%, or 50% of eligible contributions, subject to AGI and taxpayer eligibility rules.",
    "reference": "2025 Form 8880 Instructions"
  },
  {
    "id": "audit-v5-023",
    "domain": 4,
    "topic": "Estimated tax safe harbor",
    "coveredSources": [
      "v5-260",
      "v5-262",
      "v5-263",
      "v5-264",
      "v5-266",
      "v5-267",
      "v5-268",
      "v5-269",
      "v5-270",
      "v5-273"
    ],
    "q": "Ignoring special rules, which payment pattern generally avoids an individual estimated-tax underpayment penalty?",
    "choices": [
      "Paying at least 50% of current-year tax",
      "Paying at least 90% of current-year tax or 100% of prior-year tax through timely withholding and estimated payments",
      "Paying the full balance only by the extended filing date",
      "Paying any amount by December 31"
    ],
    "answer": 1,
    "explanation": "The general safe harbor is based on paying at least 90% of current-year tax or 100% of prior-year tax. Certain higher-income taxpayers use 110% of prior-year tax.",
    "reference": "IRS Publication 505 (2025); Form 2210 Instructions"
  },
  {
    "id": "audit-v5-024",
    "domain": 4,
    "topic": "Higher-income estimated tax safe harbor",
    "coveredSources": [
      "v5-269"
    ],
    "q": "For certain higher-income taxpayers, what percentage of prior-year tax is generally used for the prior-year estimated-tax safe harbor?",
    "choices": [
      "90%",
      "100%",
      "110%",
      "125%"
    ],
    "answer": 2,
    "explanation": "For taxpayers whose prior-year AGI exceeded the applicable threshold, the prior-year safe harbor generally uses 110% of prior-year tax.",
    "reference": "IRS Publication 505 (2025)"
  },
  {
    "id": "audit-v5-025",
    "domain": 4,
    "topic": "Alternative Minimum Tax",
    "coveredSources": [
      "v5-285",
      "v5-286",
      "v5-287",
      "v5-288",
      "v5-289",
      "v5-290",
      "v5-291",
      "v5-292",
      "v5-293",
      "v5-294",
      "v5-297",
      "v5-298",
      "v5-299",
      "v5-300",
      "v5-301",
      "v5-302",
      "v5-303",
      "v5-304",
      "v5-310",
      "v5-315",
      "v5-316",
      "v5-317",
      "v5-318",
      "v5-319"
    ],
    "q": "What is the basic purpose of the Alternative Minimum Tax for individuals?",
    "choices": [
      "To replace Social Security tax",
      "To require a parallel tax calculation that limits the benefit of certain exclusions, deductions, and preferences",
      "To tax only long-term capital gains",
      "To impose a flat tax on every taxpayer"
    ],
    "answer": 1,
    "explanation": "AMT is a parallel tax system that recomputes income with specified adjustments and preference items. Additional AMT may be owed when tentative minimum tax exceeds regular tax.",
    "reference": "2025 Form 6251 Instructions"
  },
  {
    "id": "audit-v5-026",
    "domain": 4,
    "topic": "AMT adjustments",
    "coveredSources": [
      "v5-294",
      "v5-298",
      "v5-299",
      "v5-301",
      "v5-302"
    ],
    "q": "Which item is generally added back or treated differently when computing Alternative Minimum Taxable Income?",
    "choices": [
      "The standard deduction",
      "Federal income tax withholding",
      "Estimated tax payments",
      "Refundable credits"
    ],
    "answer": 0,
    "explanation": "The standard deduction is not allowed for AMT and is added back. State and local tax deductions and certain other items also receive different AMT treatment.",
    "reference": "2025 Form 6251 Instructions"
  },
  {
    "id": "audit-v5-027",
    "domain": 4,
    "topic": "Prior-year AMT credit",
    "coveredSources": [
      "v5-031",
      "v5-032",
      "v5-331",
      "v5-332",
      "v5-333"
    ],
    "q": "Which form is generally used to compute a credit for certain prior-year minimum tax?",
    "choices": [
      "Form 8801",
      "Form 8960",
      "Form 4137",
      "Form 2441"
    ],
    "answer": 0,
    "explanation": "Form 8801 is used to compute the Credit for Prior Year Minimum Tax when applicable, generally relating to deferral items rather than exclusion items.",
    "reference": "2025 Form 8801 Instructions"
  }
]
};
const EA_AUDIT_BATCH_5_REVIEWED=new Set(["v5-001","v5-002","v5-003","v5-004","v5-005","v5-006","v5-007","v5-008","v5-009","v5-010","v5-011","v5-012","v5-013","v5-014","v5-015","v5-016","v5-017","v5-018","v5-019","v5-020","v5-021","v5-022","v5-023","v5-024","v5-025","v5-026","v5-027","v5-028","v5-029","v5-030","v5-031","v5-032","v5-033","v5-034","v5-035","v5-036","v5-037","v5-038","v5-039","v5-040","v5-041","v5-042","v5-043","v5-044","v5-045","v5-046","v5-047","v5-048","v5-049","v5-050","v5-051","v5-052","v5-053","v5-054","v5-055","v5-056","v5-057","v5-058","v5-059","v5-060","v5-061","v5-062","v5-063","v5-064","v5-065","v5-066","v5-067","v5-068","v5-069","v5-070","v5-071","v5-072","v5-073","v5-074","v5-075","v5-076","v5-077","v5-078","v5-079","v5-080","v5-081","v5-082","v5-083","v5-084","v5-085","v5-086","v5-087","v5-088","v5-089","v5-090","v5-091","v5-092","v5-093","v5-094","v5-095","v5-096","v5-097","v5-098","v5-099","v5-100","v5-101","v5-102","v5-103","v5-104","v5-105","v5-106","v5-107","v5-108","v5-109","v5-110","v5-111","v5-112","v5-113","v5-114","v5-115","v5-116","v5-117","v5-118","v5-119","v5-120","v5-121","v5-122","v5-123","v5-124","v5-125","v5-126","v5-127","v5-128","v5-129","v5-130","v5-131","v5-132","v5-133","v5-134","v5-135","v5-136","v5-137","v5-138","v5-139","v5-140","v5-141","v5-142","v5-143","v5-144","v5-145","v5-146","v5-147","v5-148","v5-149","v5-150","v5-151","v5-152","v5-153","v5-154","v5-155","v5-156","v5-157","v5-158","v5-159","v5-160","v5-161","v5-162","v5-163","v5-164","v5-165","v5-166","v5-167","v5-168","v5-169","v5-170","v5-171","v5-172","v5-173","v5-174","v5-175","v5-176","v5-177","v5-178","v5-179","v5-180","v5-181","v5-182","v5-183","v5-184","v5-185","v5-186","v5-187","v5-188","v5-189","v5-190","v5-191","v5-192","v5-193","v5-194","v5-195","v5-196","v5-197","v5-198","v5-199","v5-200","v5-201","v5-202","v5-203","v5-204","v5-205","v5-206","v5-207","v5-208","v5-209","v5-210","v5-211","v5-212","v5-213","v5-214","v5-215","v5-216","v5-217","v5-218","v5-219","v5-220","v5-221","v5-222","v5-223","v5-224","v5-225","v5-226","v5-227","v5-228","v5-229","v5-230","v5-231","v5-232","v5-233","v5-234","v5-235","v5-236","v5-237","v5-238","v5-239","v5-240","v5-241","v5-242","v5-243","v5-244","v5-245","v5-246","v5-247","v5-248","v5-249","v5-250","v5-251","v5-252","v5-253","v5-254","v5-255","v5-256","v5-257","v5-258","v5-259","v5-260","v5-261","v5-262","v5-263","v5-264","v5-265","v5-266","v5-267","v5-268","v5-269","v5-270","v5-271","v5-272","v5-273","v5-274","v5-275","v5-276","v5-277","v5-278","v5-279","v5-280","v5-281","v5-282","v5-283","v5-284","v5-285","v5-286","v5-287","v5-288","v5-289","v5-290","v5-291","v5-292","v5-293","v5-294","v5-295","v5-296","v5-297","v5-298","v5-299","v5-300","v5-301","v5-302","v5-303","v5-304","v5-305","v5-306","v5-307","v5-308","v5-309","v5-310","v5-311","v5-312","v5-313","v5-314","v5-315","v5-316","v5-317","v5-318","v5-319","v5-320","v5-321","v5-322","v5-323","v5-324","v5-325","v5-326","v5-327","v5-328","v5-329","v5-330","v5-331","v5-332","v5-333","v5-334","v5-335","v5-336","v5-337","v5-338","v5-339","v5-340","v5-341","v5-342","v5-343","v5-344","v5-345","v5-346","v5-347","v5-348","v5-349","v5-350"]);
const EA_AUDIT_BATCH_5_COVERED=new Set(EA_AUDIT_BATCH_5.questions.flatMap(q=>q.coveredSources||[]));
const EA_AUDIT_BATCH_5_EXCLUDED=new Set([...EA_AUDIT_BATCH_5_REVIEWED].filter(id=>!EA_AUDIT_BATCH_5_COVERED.has(id)));
