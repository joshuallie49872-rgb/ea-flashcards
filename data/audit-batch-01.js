// Individual audit batch 1: Video 1 source cards v1-001 through v1-220.
// Every source card in this range was reviewed. Duplicative, lecture-context,
// low-value form-layout, or off-Part-1 items are intentionally not carried forward.
const EA_AUDIT_BATCH_1 = {
  range: "v1-001..v1-220",
  reviewedCount: 220,
  auditDate: "2026-10-03",
  taxYear: 2025,
  examCycle: "2026-2027",
  method: "Individual review against the current Part 1 blueprint and 2025 IRS guidance",
  questions: [
  {
    "id": "audit-v1-001",
    "domain": 1,
    "topic": "Gross income",
    "coveredSources": [
      "v1-001",
      "v1-002",
      "v1-003",
      "v1-004"
    ],
    "q": "For federal income tax purposes, gross income can generally include income received in which forms?",
    "choices": [
      "Cash only",
      "Cash and checks only",
      "Money, goods, property, or services",
      "Money and property, but not services"
    ],
    "answer": 2,
    "explanation": "Gross income generally includes taxable income received as money, goods, property, or services. The form of payment does not by itself make the income nontaxable.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-002",
    "domain": 2,
    "topic": "Worldwide income",
    "coveredSources": [
      "v1-005",
      "v1-148"
    ],
    "q": "A U.S. citizen lives in another country for all of 2025 and earns wages there. Which statement is generally correct?",
    "choices": [
      "Foreign wages are never reported on a U.S. return",
      "Only income paid in U.S. dollars is reportable",
      "Worldwide income is generally reportable, subject to applicable exclusions or credits",
      "Foreign wages are reportable only if deposited in a U.S. bank"
    ],
    "answer": 2,
    "explanation": "U.S. citizens and resident aliens generally report worldwide income. Provisions such as the foreign earned income exclusion or foreign tax credit may reduce U.S. tax, but they do not make the income automatically irrelevant.",
    "reference": "IRS Publication 54 (2025)"
  },
  {
    "id": "audit-v1-003",
    "domain": 1,
    "topic": "Dependent filing income",
    "coveredSources": [
      "v1-006",
      "v1-156"
    ],
    "q": "For purposes of the filing requirements and standard deduction of a dependent, how is a taxable scholarship or fellowship grant generally treated?",
    "choices": [
      "Earned income",
      "Unearned income",
      "Tax-exempt income in all cases",
      "Self-employment income"
    ],
    "answer": 0,
    "explanation": "For these specific dependent filing and standard-deduction rules, taxable scholarship and fellowship grants are treated as earned income.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-004",
    "domain": 1,
    "topic": "Dependent filing income",
    "coveredSources": [
      "v1-007",
      "v1-008",
      "v1-009",
      "v1-010",
      "v1-011",
      "v1-012",
      "v1-013",
      "v1-014",
      "v1-157",
      "v1-158"
    ],
    "q": "Which item is generally treated as earned income for the dependent filing-requirement rules?",
    "choices": [
      "Taxable interest",
      "Ordinary dividends",
      "Wages from employment",
      "Taxable pension income"
    ],
    "answer": 2,
    "explanation": "Wages are earned income. Taxable interest, dividends, capital gains, unemployment compensation, taxable Social Security benefits, pensions, annuities, and distributions of unearned income from a trust are generally unearned income for these rules.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-005",
    "domain": 1,
    "topic": "Filing thresholds",
    "coveredSources": [
      "v1-015",
      "v1-018",
      "v1-170",
      "v1-172"
    ],
    "q": "For most filing statuses in 2025, the basic gross-income filing threshold generally corresponds to which amount?",
    "choices": [
      "The applicable basic standard deduction",
      "The taxpayer's itemized deductions",
      "The personal exemption amount",
      "The Child Tax Credit"
    ],
    "answer": 0,
    "explanation": "For most taxpayers, the 2025 filing threshold generally tracks the applicable basic standard deduction. Married Filing Separately is a major exception because its filing threshold is only $5.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-006",
    "domain": 1,
    "topic": "Married Filing Separately",
    "coveredSources": [
      "v1-016",
      "v1-165",
      "v1-173"
    ],
    "q": "A taxpayer is married filing separately for 2025. At what gross-income level is a return generally required under the basic filing-threshold table?",
    "choices": [
      "$0",
      "$5",
      "$1,350",
      "$15,750"
    ],
    "answer": 1,
    "explanation": "For 2025, the basic filing threshold for Married Filing Separately is $5 of gross income.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-007",
    "domain": 1,
    "topic": "Qualifying Surviving Spouse",
    "coveredSources": [
      "v1-017",
      "v1-171"
    ],
    "q": "For 2025, which statement best describes the basic tax-rate and standard-deduction treatment of a qualifying surviving spouse?",
    "choices": [
      "It generally follows the Single amounts",
      "It generally follows the Head of Household amounts",
      "It generally follows the Married Filing Jointly amounts",
      "It always follows Married Filing Separately"
    ],
    "answer": 2,
    "explanation": "A qualifying surviving spouse generally receives the same basic tax-rate and standard-deduction treatment as a married couple filing jointly.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-008",
    "domain": 1,
    "topic": "Nonresident aliens",
    "coveredSources": [
      "v1-023",
      "v1-146"
    ],
    "q": "Which federal individual income tax return is generally used by a nonresident alien who is required to file a U.S. income tax return?",
    "choices": [
      "Form 1040-X",
      "Form 1040-NR",
      "Form 1041",
      "Form 709"
    ],
    "answer": 1,
    "explanation": "A nonresident alien who has a U.S. filing requirement generally uses Form 1040-NR, subject to the applicable rules.",
    "reference": "IRS Form 1040-NR Instructions (2025)"
  },
  {
    "id": "audit-v1-009",
    "domain": 1,
    "topic": "Tax return calculation",
    "coveredSources": [
      "v1-025",
      "v1-027",
      "v1-028"
    ],
    "q": "Gross income minus allowable adjustments to income generally equals:",
    "choices": [
      "Taxable income",
      "Adjusted gross income (AGI)",
      "Total tax",
      "Total payments"
    ],
    "answer": 1,
    "explanation": "Adjusted gross income is generally gross income reduced by allowable adjustments to income.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-010",
    "domain": 1,
    "topic": "Adjusted gross income",
    "coveredSources": [
      "v1-029"
    ],
    "q": "Why is adjusted gross income (AGI) an important figure on an individual return?",
    "choices": [
      "It is always the taxpayer's final tax liability",
      "Many deductions, credits, limitations, and phaseouts use AGI or a modified form of AGI",
      "It equals total federal withholding",
      "It is used only to determine filing status"
    ],
    "answer": 1,
    "explanation": "Many federal tax provisions use AGI or modified AGI to determine eligibility, limitations, or phaseouts.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-011",
    "domain": 1,
    "topic": "Taxable income",
    "coveredSources": [
      "v1-030",
      "v1-031",
      "v1-032"
    ],
    "q": "Which amount is generally the starting point for applying the regular income-tax tables or rate schedules?",
    "choices": [
      "Gross income",
      "Adjusted gross income",
      "Taxable income",
      "Total payments"
    ],
    "answer": 2,
    "explanation": "Regular income tax is generally computed from taxable income after the applicable deductions have been taken.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-012",
    "domain": 3,
    "topic": "Credits and deductions",
    "coveredSources": [
      "v1-033"
    ],
    "q": "Which statement correctly distinguishes a tax credit from a deduction?",
    "choices": [
      "A credit generally reduces tax, while a deduction generally reduces income subject to tax",
      "A deduction reduces tax dollar-for-dollar, while a credit reduces AGI",
      "Credits are available only to itemizers",
      "Deductions and credits always have the same tax effect"
    ],
    "answer": 0,
    "explanation": "A deduction generally reduces income used to compute tax. A credit generally reduces the tax itself, subject to the rules for that credit.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-013",
    "domain": 4,
    "topic": "Total tax",
    "coveredSources": [
      "v1-034",
      "v1-035"
    ],
    "q": "After regular income tax is reduced by applicable nonrefundable credits, what may still increase the taxpayer's total tax?",
    "choices": [
      "Other taxes, such as self-employment tax when applicable",
      "The standard deduction",
      "Federal income tax withholding",
      "Estimated tax payments"
    ],
    "answer": 0,
    "explanation": "Other taxes can be added after the regular income-tax calculation. Withholding and estimated tax are generally payments, not additions to total tax.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-014",
    "domain": 4,
    "topic": "Payments and refundable credits",
    "coveredSources": [
      "v1-036",
      "v1-038",
      "v1-039"
    ],
    "q": "Which item is generally treated as a payment against total tax on Form 1040?",
    "choices": [
      "Student loan interest deduction",
      "Federal estimated tax payment",
      "Standard deduction",
      "Qualified business income deduction"
    ],
    "answer": 1,
    "explanation": "Federal estimated tax payments, withholding, and refundable credits are generally applied against total tax as payments.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-015",
    "domain": 4,
    "topic": "Refund or amount due",
    "coveredSources": [
      "v1-040",
      "v1-041",
      "v1-052"
    ],
    "q": "A taxpayer has total tax of $6,200 and total payments and refundable credits of $7,000. What is the general result before any offsets?",
    "choices": [
      "$800 amount due",
      "$800 overpayment",
      "$6,200 refund",
      "No refund and no balance due"
    ],
    "answer": 1,
    "explanation": "Payments exceed total tax by $800, producing an $800 overpayment before considering any offsets or other adjustments.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-016",
    "domain": 5,
    "topic": "Penalty of perjury",
    "coveredSources": [
      "v1-059",
      "v1-060"
    ],
    "q": "When a taxpayer signs Form 1040 under penalties of perjury, what is the taxpayer declaring?",
    "choices": [
      "That the IRS prepared the return",
      "That, to the best of the taxpayer's knowledge, the return is true, correct, and complete",
      "That every item was independently audited",
      "That the taxpayer waives the right to amend the return"
    ],
    "answer": 1,
    "explanation": "The signature jurat requires the taxpayer to declare, under penalties of perjury, that the return and accompanying schedules and statements have been examined and are true, correct, and complete to the best of the taxpayer's knowledge.",
    "reference": "2025 Form 1040"
  },
  {
    "id": "audit-v1-017",
    "domain": 1,
    "topic": "Prior-year returns",
    "coveredSources": [
      "v1-077",
      "v1-078",
      "v1-079",
      "v1-080",
      "v1-083"
    ],
    "q": "Why is a taxpayer's prior-year return useful when preparing the current-year return?",
    "choices": [
      "It automatically determines the current-year tax",
      "It can identify recurring items, carryovers, and documents that may be expected again",
      "It eliminates the need to verify current-year information",
      "It replaces current-year Forms W-2 and 1099"
    ],
    "answer": 1,
    "explanation": "A prior-year return can help identify recurring income, deductions, credits, carryovers, and expected documents, but current-year facts still must be verified.",
    "reference": "IRS SEE Part 1 Content Outline — Preliminary Work and Taxpayer Data"
  },
  {
    "id": "audit-v1-018",
    "domain": 1,
    "topic": "Current-year verification",
    "coveredSources": [
      "v1-081",
      "v1-082"
    ],
    "q": "A preparer has the taxpayer's prior-year return. Which approach is appropriate for the current year?",
    "choices": [
      "Copy all personal information without asking the taxpayer",
      "Verify current information because items such as address, filing status, and dependents may have changed",
      "Use the prior return instead of current identification documents",
      "Assume all carryovers are zero"
    ],
    "answer": 1,
    "explanation": "The prior return is a starting point, not a substitute for verifying current-year taxpayer information.",
    "reference": "IRS SEE Part 1 Content Outline — Preliminary Work and Taxpayer Data"
  },
  {
    "id": "audit-v1-019",
    "domain": 1,
    "topic": "Carryovers",
    "coveredSources": [
      "v1-084",
      "v1-085",
      "v1-086"
    ],
    "q": "Which item may need to be carried from a prior-year individual return into a later year?",
    "choices": [
      "Unused capital loss",
      "Current-year federal withholding",
      "Current-year wages",
      "Current-year filing status"
    ],
    "answer": 0,
    "explanation": "Items such as capital-loss carryovers, net operating loss carryovers, and certain credit carryovers can affect later returns.",
    "reference": "IRS SEE Part 1 Content Outline — Preliminary Work and Taxpayer Data"
  },
  {
    "id": "audit-v1-020",
    "domain": 1,
    "topic": "Return comparison",
    "coveredSources": [
      "v1-087",
      "v1-088"
    ],
    "q": "A current return shows a large unexplained change from the prior year. What is the best next step before filing?",
    "choices": [
      "Ignore the change because each year stands alone",
      "Ask questions and determine whether the difference is supported or an item was omitted",
      "File first and investigate only if the IRS sends a notice",
      "Change the current return to match the prior year"
    ],
    "answer": 1,
    "explanation": "A large unexplained difference can signal missing or incorrect information. It should be investigated before filing rather than forced to match the prior year.",
    "reference": "IRS SEE Part 1 Content Outline — Preliminary Work and Taxpayer Data"
  },
  {
    "id": "audit-v1-021",
    "domain": 6,
    "topic": "Amended returns",
    "coveredSources": [
      "v1-102"
    ],
    "q": "Which form is generally used to amend an individual Form 1040-series income tax return?",
    "choices": [
      "Form 4868",
      "Form 1040-X",
      "Form 2848",
      "Form 843"
    ],
    "answer": 1,
    "explanation": "Form 1040-X is generally used to amend an individual income tax return.",
    "reference": "Form 1040-X Instructions"
  },
  {
    "id": "audit-v1-022",
    "domain": 1,
    "topic": "Taxpayer information",
    "coveredSources": [
      "v1-118"
    ],
    "q": "Which information is commonly needed to prepare an accurate individual income tax return?",
    "choices": [
      "Only taxable wages",
      "Income, deductions or expenses, credits, identifying information, and relevant asset basis",
      "Only information reported on Forms W-2",
      "Only information from the prior-year return"
    ],
    "answer": 1,
    "explanation": "Preparing the return may require income, deductions and expenses, credit information, identifying data, basis information, and other facts relevant to the taxpayer's situation.",
    "reference": "IRS SEE Part 1 Content Outline — Preliminary Work and Taxpayer Data"
  },
  {
    "id": "audit-v1-023",
    "domain": 2,
    "topic": "Basis records",
    "coveredSources": [
      "v1-119",
      "v1-120",
      "v1-133",
      "v1-134",
      "v1-135",
      "v1-136"
    ],
    "q": "Why should a taxpayer retain records that establish an asset's adjusted basis?",
    "choices": [
      "Basis is used to determine gain or loss when the asset is disposed of",
      "Basis determines filing status",
      "Basis is the same as fair market value in every case",
      "Basis is needed only for tax-exempt property"
    ],
    "answer": 0,
    "explanation": "Adjusted basis is generally used in computing gain or loss on a disposition. Purchase records, settlement statements, brokerage records, improvements, depreciation, and other adjustments may affect basis.",
    "reference": "IRS Publication 551"
  },
  {
    "id": "audit-v1-024",
    "domain": 1,
    "topic": "Income documents",
    "coveredSources": [
      "v1-123"
    ],
    "q": "What information does Form W-2 generally report to an employee?",
    "choices": [
      "Mortgage interest and property taxes",
      "Wages and certain taxes withheld by the employer",
      "Partnership distributive share",
      "College tuition billed by a school"
    ],
    "answer": 1,
    "explanation": "Form W-2 generally reports wages and other compensation and federal, Social Security, Medicare, and certain state/local withholding information.",
    "reference": "2025 Form W-2 Instructions"
  },
  {
    "id": "audit-v1-025",
    "domain": 1,
    "topic": "Information returns",
    "coveredSources": [
      "v1-124"
    ],
    "q": "Which item is commonly reported on a Form 1099 rather than Form W-2?",
    "choices": [
      "Employee wages",
      "Interest income",
      "Employee Social Security withholding",
      "Employee Medicare withholding"
    ],
    "answer": 1,
    "explanation": "The Form 1099 series reports many types of nonwage income and payments, including interest, dividends, and nonemployee compensation.",
    "reference": "IRS Information Return Instructions"
  },
  {
    "id": "audit-v1-026",
    "domain": 2,
    "topic": "Schedule K-1",
    "coveredSources": [
      "v1-125",
      "v1-126"
    ],
    "q": "A taxpayer receives a Schedule K-1. Which statement is generally correct?",
    "choices": [
      "It can report the taxpayer's share of items from a partnership, S corporation, estate, or trust",
      "It is used only to report employee wages",
      "It replaces Form 1040",
      "It reports only mortgage interest"
    ],
    "answer": 0,
    "explanation": "Schedule K-1 can report a taxpayer's share of income, deductions, credits, and other items from pass-through entities, estates, or trusts.",
    "reference": "IRS Schedule K-1 Instructions"
  },
  {
    "id": "audit-v1-027",
    "domain": 3,
    "topic": "Mortgage interest records",
    "coveredSources": [
      "v1-129",
      "v1-130"
    ],
    "q": "Which information return generally reports mortgage interest received by a lender from a borrower?",
    "choices": [
      "Form 1098",
      "Form 1098-T",
      "Form 1099-INT",
      "Form 1099-R"
    ],
    "answer": 0,
    "explanation": "Form 1098 is generally used by a lender to report qualifying mortgage interest received.",
    "reference": "Form 1098 Instructions"
  },
  {
    "id": "audit-v1-028",
    "domain": 3,
    "topic": "Education records",
    "coveredSources": [
      "v1-131"
    ],
    "q": "Form 1098-T is most closely associated with which type of tax information?",
    "choices": [
      "Mortgage interest",
      "Qualified education tuition information",
      "Retirement distributions",
      "Unemployment compensation"
    ],
    "answer": 1,
    "explanation": "Eligible educational institutions generally use Form 1098-T to report tuition-related information relevant to education tax benefits.",
    "reference": "Form 1098-T Instructions"
  },
  {
    "id": "audit-v1-029",
    "domain": 1,
    "topic": "IRS correspondence",
    "coveredSources": [
      "v1-137",
      "v1-138"
    ],
    "q": "Why should prior IRS notices be reviewed when preparing a current-year return?",
    "choices": [
      "The IRS may have adjusted a prior-year item that affects a current-year carryover or starting amount",
      "An IRS notice automatically changes the taxpayer's filing status",
      "Every IRS notice requires an amended return",
      "IRS notices replace current-year tax documents"
    ],
    "answer": 0,
    "explanation": "A prior IRS adjustment can affect carryovers, basis, credits, or other amounts entering the current year.",
    "reference": "IRS SEE Part 1 Content Outline — Preliminary Work and Taxpayer Data"
  },
  {
    "id": "audit-v1-030",
    "domain": 1,
    "topic": "Dependent documentation",
    "coveredSources": [
      "v1-140"
    ],
    "q": "School records may be useful in preparing an individual return primarily because they can help establish:",
    "choices": [
      "A child's age, identity, residence, or student status for a tax benefit",
      "The taxpayer's capital-loss carryover",
      "The taxpayer's mortgage balance",
      "The amount of self-employment tax"
    ],
    "answer": 0,
    "explanation": "School records can help support facts such as a child's identity, age, residence, and full-time student status when those facts affect a tax benefit.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-031",
    "domain": 1,
    "topic": "Identity verification",
    "coveredSources": [
      "v1-141",
      "v1-142"
    ],
    "q": "Why may official identification be relevant when gathering taxpayer information?",
    "choices": [
      "It can help verify identity and reduce identity-theft or fraud risk",
      "It determines the taxpayer's marginal tax bracket",
      "It substitutes for an SSN on the tax return",
      "It proves every deduction claimed"
    ],
    "answer": 0,
    "explanation": "Official identification can help verify that the taxpayer is who they claim to be and can reduce identity-theft and fraud risk.",
    "reference": "IRS SEE Part 1 Content Outline — Preliminary Work and Taxpayer Data"
  },
  {
    "id": "audit-v1-032",
    "domain": 1,
    "topic": "Filing requirement factors",
    "coveredSources": [
      "v1-143",
      "v1-144",
      "v1-145"
    ],
    "q": "For a U.S. citizen or resident alien, the basic individual filing requirement generally depends on which combination of factors?",
    "choices": [
      "Gross income, filing status, age, and whether the person is a dependent",
      "Only the amount of federal withholding",
      "Only whether the taxpayer is married",
      "Only whether the taxpayer received a Form W-2"
    ],
    "answer": 0,
    "explanation": "The basic filing requirement generally depends on gross income, filing status, age, and dependency status, with additional special filing rules that can require a return even below the normal threshold.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-033",
    "domain": 1,
    "topic": "Gross income for filing",
    "coveredSources": [
      "v1-147",
      "v1-151",
      "v1-152",
      "v1-153",
      "v1-154",
      "v1-159"
    ],
    "q": "For the basic filing-requirement rules, which statement about gross income is correct?",
    "choices": [
      "Gross income generally includes taxable income but is not reduced by business or capital losses for the filing-threshold test",
      "Gross income means wages only",
      "Gross income is always the same as adjusted gross income",
      "Gross income excludes taxable investment income"
    ],
    "answer": 0,
    "explanation": "Gross income includes taxable earned and unearned income. For the filing-threshold rules, losses generally do not reduce gross income in determining whether the threshold is met.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-034",
    "domain": 1,
    "topic": "Single filing threshold",
    "coveredSources": [
      "v1-160",
      "v1-161"
    ],
    "q": "A single taxpayer who is age 40 has $15,900 of gross income in 2025 and no special filing trigger. Is a federal return generally required?",
    "choices": [
      "No, because the threshold is $17,750",
      "No, because the threshold is $23,625",
      "Yes, because the basic threshold is $15,750",
      "Yes, but only if the taxpayer itemizes"
    ],
    "answer": 2,
    "explanation": "For 2025, the basic filing threshold for a single taxpayer under age 65 is $15,750. Gross income of $15,900 exceeds that amount.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-035",
    "domain": 1,
    "topic": "Single age-65 filing threshold",
    "coveredSources": [
      "v1-161"
    ],
    "q": "What is the 2025 basic gross-income filing threshold for a single taxpayer who is age 65 or older?",
    "choices": [
      "$15,750",
      "$17,750",
      "$23,625",
      "$25,625"
    ],
    "answer": 1,
    "explanation": "For 2025, the basic filing threshold for a single taxpayer age 65 or older is $17,750.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-036",
    "domain": 1,
    "topic": "Head of Household filing threshold",
    "coveredSources": [
      "v1-166",
      "v1-167"
    ],
    "q": "A head-of-household taxpayer is age 50. What is the 2025 basic gross-income filing threshold?",
    "choices": [
      "$15,750",
      "$17,750",
      "$23,625",
      "$31,500"
    ],
    "answer": 2,
    "explanation": "For 2025, the basic filing threshold for Head of Household under age 65 is $23,625.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-037",
    "domain": 1,
    "topic": "Married Filing Jointly threshold",
    "coveredSources": [
      "v1-162",
      "v1-163",
      "v1-164"
    ],
    "q": "A married couple files jointly for 2025. One spouse is age 66 and the other is age 62. What is their basic gross-income filing threshold?",
    "choices": [
      "$31,500",
      "$33,100",
      "$34,700",
      "$37,900"
    ],
    "answer": 1,
    "explanation": "For 2025, the MFJ threshold is $33,100 when one spouse is age 65 or older.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-038",
    "domain": 1,
    "topic": "Qualifying Surviving Spouse threshold",
    "coveredSources": [
      "v1-168",
      "v1-169"
    ],
    "q": "What is the 2025 basic gross-income filing threshold for a qualifying surviving spouse under age 65?",
    "choices": [
      "$15,750",
      "$23,625",
      "$31,500",
      "$33,100"
    ],
    "answer": 2,
    "explanation": "For 2025, the basic filing threshold for a qualifying surviving spouse under age 65 is $31,500.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-039",
    "domain": 1,
    "topic": "Dependent filing rules",
    "coveredSources": [
      "v1-174",
      "v1-175",
      "v1-176",
      "v1-177",
      "v1-178"
    ],
    "q": "A single dependent, age 17 and not blind, has $1,500 of taxable interest and no earned income in 2025. Is the dependent generally required to file?",
    "choices": [
      "No, because gross income is below $15,750",
      "No, because dependents never file their own returns",
      "Yes, because unearned income is more than $1,350",
      "Yes, but only if federal tax was withheld"
    ],
    "answer": 2,
    "explanation": "A single dependent under age 65 and not blind generally must file if unearned income is more than $1,350, even if total gross income is below the normal single filing threshold.",
    "reference": "IRS Publication 501 (2025), Table 2"
  },
  {
    "id": "audit-v1-040",
    "domain": 1,
    "topic": "Dependent filing rules",
    "coveredSources": [
      "v1-176",
      "v1-177"
    ],
    "q": "A single dependent, age 17 and not blind, has $8,000 of wages and $500 of interest in 2025. Which statement is correct under the dependent filing rules?",
    "choices": [
      "A return is generally not required because wages are below $15,750",
      "A return is generally required because $8,500 gross income exceeds the $8,450 combined-income threshold",
      "A return is required only if the interest exceeds $1,350",
      "A return is never required when earned income is below the regular standard deduction"
    ],
    "answer": 1,
    "explanation": "The combined-income test uses the larger of $1,350 or earned income plus $450. Here, $8,000 + $450 = $8,450, and gross income is $8,500, so the dependent generally must file.",
    "reference": "IRS Publication 501 (2025), Table 2"
  },
  {
    "id": "audit-v1-041",
    "domain": 1,
    "topic": "Dependent filing rules",
    "coveredSources": [
      "v1-179",
      "v1-180",
      "v1-181",
      "v1-182",
      "v1-183"
    ],
    "q": "A single dependent is age 67, not blind, and has $3,500 of taxable interest with no earned income in 2025. Is a return generally required?",
    "choices": [
      "No, because the taxpayer is over age 65",
      "No, because unearned income must exceed $5,350",
      "Yes, because unearned income is more than $3,350",
      "Yes, only if the taxpayer also has wages"
    ],
    "answer": 2,
    "explanation": "For a single dependent who is age 65 or older or blind, the 2025 unearned-income filing threshold is more than $3,350. The higher $5,350 figure applies if the dependent is both age 65 or older and blind.",
    "reference": "IRS Publication 501 (2025), Table 2"
  },
  {
    "id": "audit-v1-042",
    "domain": 1,
    "topic": "Married dependent filing rules",
    "coveredSources": [
      "v1-184",
      "v1-185",
      "v1-186",
      "v1-187"
    ],
    "q": "A married dependent, under age 65 and not blind, has $6 of gross income. The dependent's spouse files separately and itemizes deductions. Is the dependent generally required to file?",
    "choices": [
      "No, because gross income is below $1,350",
      "No, because married dependents use the $15,750 threshold in every case",
      "Yes, because gross income is at least $5 and the spouse files separately and itemizes",
      "Yes, but only if the $6 is unearned income"
    ],
    "answer": 2,
    "explanation": "A married dependent generally must file if gross income is at least $5 and the spouse files a separate return and itemizes deductions.",
    "reference": "IRS Publication 501 (2025), Table 2"
  },
  {
    "id": "audit-v1-043",
    "domain": 1,
    "topic": "Married dependent filing rules",
    "coveredSources": [
      "v1-188",
      "v1-189",
      "v1-190",
      "v1-191",
      "v1-192"
    ],
    "q": "A married dependent is age 67, not blind, and has $3,100 of taxable interest and no earned income in 2025. Assuming the spouse-itemizes $5 rule does not apply, is a return generally required?",
    "choices": [
      "No, because the unearned-income threshold is $4,550",
      "No, because the unearned-income threshold is $3,350",
      "Yes, because unearned income is more than $2,950",
      "Yes, only if earned income also exceeds $17,350"
    ],
    "answer": 2,
    "explanation": "For a married dependent who is age 65 or older or blind, the 2025 unearned-income threshold is more than $2,950. The $4,550 threshold applies if the dependent is both age 65 or older and blind.",
    "reference": "IRS Publication 501 (2025), Table 2"
  },
  {
    "id": "audit-v1-044",
    "domain": 1,
    "topic": "Special filing requirements",
    "coveredSources": [
      "v1-195",
      "v1-196",
      "v1-197",
      "v1-198",
      "v1-199",
      "v1-200",
      "v1-201",
      "v1-202",
      "v1-203"
    ],
    "q": "A taxpayer's gross income is below the normal filing threshold. Which circumstance can nevertheless create a federal filing requirement?",
    "choices": [
      "Owing certain additional taxes, such as household employment tax or tax on unreported tips",
      "Having no taxable income and no special taxes",
      "Receiving only tax-exempt municipal bond interest",
      "Choosing not to itemize deductions"
    ],
    "answer": 0,
    "explanation": "Special filing rules can require a return even when gross income is below the normal threshold. Examples include certain additional taxes, household employment taxes, taxes on tips, and other listed situations.",
    "reference": "IRS Publication 501 (2025), Table 3"
  },
  {
    "id": "audit-v1-045",
    "domain": 1,
    "topic": "HSA filing requirement",
    "coveredSources": [
      "v1-202",
      "v1-204"
    ],
    "q": "Which HSA-related event can create a federal filing requirement even when the taxpayer is below the normal gross-income threshold?",
    "choices": [
      "Merely owning an HSA with no activity",
      "Receiving an HSA distribution or owing certain additional HSA taxes",
      "Having an employer offer an HSA",
      "Opening a checking account at the same bank as the HSA"
    ],
    "answer": 1,
    "explanation": "A distribution from an HSA or certain other medical savings accounts, or liability for certain additional taxes, can trigger a filing requirement.",
    "reference": "IRS Publication 501 (2025), Table 3"
  },
  {
    "id": "audit-v1-046",
    "domain": 4,
    "topic": "Self-employment filing requirement",
    "coveredSources": [
      "v1-205",
      "v1-206"
    ],
    "q": "A taxpayer has $450 of net earnings from self-employment and otherwise has income below the normal filing threshold. Which statement is generally correct?",
    "choices": [
      "No return is required because total income is below the standard deduction",
      "A return is generally required because net self-employment earnings are at least $400",
      "A return is required only if the taxpayer also has wages",
      "A return is required only if the taxpayer itemizes deductions"
    ],
    "answer": 1,
    "explanation": "A taxpayer generally must file if net earnings from self-employment are $400 or more, because self-employment tax may be due.",
    "reference": "IRS Publication 501 (2025), Table 3; Schedule SE Instructions"
  },
  {
    "id": "audit-v1-047",
    "domain": 4,
    "topic": "Church employee income",
    "coveredSources": [
      "v1-207",
      "v1-208"
    ],
    "q": "A taxpayer has $150 of wages from a church or qualified church-controlled organization that is exempt from employer Social Security and Medicare taxes. Which threshold is relevant to the special filing rule?",
    "choices": [
      "$5",
      "$108.28",
      "$400",
      "$1,350"
    ],
    "answer": 1,
    "explanation": "A taxpayer generally must file if qualifying church-employee income subject to the special self-employment-tax rules is $108.28 or more.",
    "reference": "IRS Publication 501 (2025), Table 3"
  },
  {
    "id": "audit-v1-048",
    "domain": 3,
    "topic": "Premium Tax Credit",
    "coveredSources": [
      "v1-209"
    ],
    "q": "A taxpayer received advance payments of the Premium Tax Credit for Marketplace coverage. What is generally required?",
    "choices": [
      "No return is needed if gross income is below the normal filing threshold",
      "A federal return generally must be filed to reconcile the advance payments",
      "Only a state return is required",
      "The advance payments are ignored unless they exceed $10,000"
    ],
    "answer": 1,
    "explanation": "Advance Premium Tax Credit payments generally must be reconciled on a federal return using Form 8962.",
    "reference": "IRS Publication 501 (2025), Table 3; Form 8962 Instructions"
  },
  {
    "id": "audit-v1-049",
    "domain": 1,
    "topic": "Voluntary filing",
    "coveredSources": [
      "v1-215",
      "v1-216",
      "v1-217",
      "v1-218",
      "v1-219"
    ],
    "q": "A single taxpayer under age 65 has $15,500 of gross income in 2025, no special filing trigger, and $600 of federal income tax withheld. Which statement is correct?",
    "choices": [
      "The taxpayer is prohibited from filing because income is below $15,750",
      "The taxpayer is generally not required to file under the basic threshold but may file to claim a refund of withholding",
      "The taxpayer must file because any withholding creates a filing requirement",
      "The taxpayer may receive the withholding refund without filing a return"
    ],
    "answer": 1,
    "explanation": "The basic 2025 threshold for a single taxpayer under age 65 is $15,750. A taxpayer below the required-filing threshold may still file voluntarily to claim a refund of withholding or certain refundable credits.",
    "reference": "IRS Publication 501 (2025)"
  }
]
};

const EA_AUDIT_BATCH_1_REVIEWED = new Set(
  Array.from({length: 220}, (_, i) => "v1-" + String(i + 1).padStart(3, "0"))
);

const EA_AUDIT_BATCH_1_COVERED = new Set(
  EA_AUDIT_BATCH_1.questions.flatMap(q => q.coveredSources || [])
);

const EA_AUDIT_BATCH_1_EXCLUDED = new Set(
  [...EA_AUDIT_BATCH_1_REVIEWED].filter(id => !EA_AUDIT_BATCH_1_COVERED.has(id))
);
