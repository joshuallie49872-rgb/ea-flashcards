// EA Part 1 exam-style practice bank
// Original questions modeled on the 2026-2027 IRS/PSI Part 1 blueprint.
const EA_EXAM_BLUEPRINT = {
  "title": "EA Part 1 — Individuals",
  "taxYear": 2025,
  "examCycle": "2026-2027",
  "scoredBlueprint": [
    {
      "domain": 1,
      "name": "Preliminary Work and Taxpayer Data",
      "scoredQuestions": 14
    },
    {
      "domain": 2,
      "name": "Income and Assets",
      "scoredQuestions": 17
    },
    {
      "domain": 3,
      "name": "Deductions and Credits",
      "scoredQuestions": 17
    },
    {
      "domain": 4,
      "name": "Taxation",
      "scoredQuestions": 15
    },
    {
      "domain": 5,
      "name": "Advising the Individual Taxpayer",
      "scoredQuestions": 11
    },
    {
      "domain": 6,
      "name": "Specialized Returns for Individuals",
      "scoredQuestions": 11
    }
  ],
  "bankCounts": [
    16,
    20,
    20,
    18,
    13,
    13
  ],
  "notes": "Original practice questions modeled on the current IRS/PSI Part 1 content outline. Not actual exam questions."
};

const EA_EXAM_BANK = [
  {
    "id": "p1-001",
    "domain": 1,
    "topic": "Filing status",
    "q": "A taxpayer legally marries on December 31, 2025, and is not legally separated under a decree at year-end. For federal income tax purposes, how is the taxpayer treated for 2025?",
    "choices": [
      "Unmarried for the entire year",
      "Married for the entire year",
      "Married only for December",
      "The taxpayer may choose married or unmarried"
    ],
    "answer": 1,
    "explanation": "Marital status is generally determined on the last day of the tax year. A taxpayer who is married on December 31 is treated as married for the entire year.",
    "reference": "Publication 501"
  },
  {
    "id": "p1-002",
    "domain": 1,
    "topic": "Dependents",
    "q": "Maria otherwise qualifies as her parents' dependent. She and her spouse file a joint return only to claim a refund of income tax withheld, and neither spouse would owe tax on separate returns. Does the joint-return test prevent Maria from being claimed as a dependent?",
    "choices": [
      "Yes, filing any joint return always prevents dependency",
      "Yes, unless Maria is a full-time student",
      "No, because the joint return was filed only to claim a refund and neither spouse had a separate tax liability",
      "No, but only if Maria is under age 19"
    ],
    "answer": 2,
    "explanation": "The joint-return test has a refund-only exception when the couple files jointly only to claim a refund of withholding or estimated tax and neither spouse would have a tax liability on separate returns.",
    "reference": "Publication 501"
  },
  {
    "id": "p1-003",
    "domain": 1,
    "topic": "Qualifying child",
    "q": "A taxpayer's 22-year-old son is a full-time college student, lived with the taxpayer more than half the year, did not provide more than half of his own support, and is younger than the taxpayer. Which age rule is satisfied?",
    "choices": [
      "He fails because every qualifying child must be under age 19",
      "He satisfies the student age test because he is under age 24",
      "He qualifies only if he has no income",
      "He qualifies only if he is permanently disabled"
    ],
    "answer": 1,
    "explanation": "A full-time student generally meets the qualifying-child age test if under age 24 at the end of the year and younger than the taxpayer, unless the permanent-disability exception applies.",
    "reference": "Publication 501"
  },
  {
    "id": "p1-004",
    "domain": 1,
    "topic": "Qualifying relative",
    "q": "For 2025, a person who is not a qualifying child generally fails the qualifying-relative gross-income test if the person's gross income is:",
    "choices": [
      "$1,350 or more",
      "$2,700 or more",
      "$5,200 or more",
      "$15,750 or more"
    ],
    "answer": 2,
    "explanation": "For 2025, the qualifying-relative gross-income test generally requires gross income of less than $5,200.",
    "reference": "Publication 501 (2025)"
  },
  {
    "id": "p1-005",
    "domain": 1,
    "topic": "Head of household",
    "q": "A single taxpayer pays more than half the cost of maintaining a separate home for her dependent mother. Her mother lives in that home all year and never lives with the taxpayer. Assuming all other requirements are met, may the taxpayer qualify as head of household?",
    "choices": [
      "No, a qualifying person must always live with the taxpayer",
      "No, because a parent can never be a qualifying person",
      "Yes, a dependent parent can qualify even without living with the taxpayer",
      "Yes, but only if the mother has no income"
    ],
    "answer": 2,
    "explanation": "A dependent father or mother is a special exception to the usual head-of-household residence rule. The parent need not live with the taxpayer if the taxpayer pays more than half the cost of keeping up the parent's main home.",
    "reference": "Publication 501"
  },
  {
    "id": "p1-006",
    "domain": 1,
    "topic": "Standard deduction",
    "q": "A married taxpayer files separately for 2025. The taxpayer's spouse itemizes deductions. What must the taxpayer generally do?",
    "choices": [
      "Claim the full $15,750 standard deduction",
      "Claim one-half of the joint standard deduction",
      "Itemize deductions and generally cannot claim the standard deduction",
      "Choose either the standard deduction or itemized deductions independently"
    ],
    "answer": 2,
    "explanation": "If one spouse filing separately itemizes, the other spouse generally cannot take the standard deduction and must itemize as well.",
    "reference": "2025 Form 1040 Instructions; Publication 501"
  },
  {
    "id": "p1-007",
    "domain": 1,
    "topic": "Standard deduction",
    "q": "What is the 2025 basic standard deduction for a taxpayer filing head of household?",
    "choices": [
      "$15,750",
      "$23,625",
      "$31,500",
      "$40,000"
    ],
    "answer": 1,
    "explanation": "For 2025, the head-of-household standard deduction is $23,625.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "p1-008",
    "domain": 1,
    "topic": "Dependent filing rules",
    "q": "A single dependent under age 65 and not blind has $4,000 of earned income and no unearned income in 2025. What is the dependent's basic standard deduction?",
    "choices": [
      "$1,350",
      "$4,000",
      "$4,450",
      "$15,750"
    ],
    "answer": 2,
    "explanation": "A dependent's 2025 standard deduction is generally the greater of $1,350 or earned income plus $450, limited by the regular standard deduction. Here, $4,000 + $450 = $4,450.",
    "reference": "Publication 501 (2025)"
  },
  {
    "id": "p1-009",
    "domain": 1,
    "topic": "Taxpayer identification",
    "q": "Which statement about an Individual Taxpayer Identification Number (ITIN) is correct?",
    "choices": [
      "It authorizes employment in the United States",
      "It makes the holder eligible for Social Security benefits",
      "It is a tax-processing number for certain individuals who cannot obtain an SSN",
      "It is issued only to U.S. citizens"
    ],
    "answer": 2,
    "explanation": "An ITIN is used for federal tax administration by certain people who need a taxpayer identification number but are not eligible for an SSN. It does not itself authorize work or provide Social Security eligibility.",
    "reference": "IRS ITIN guidance"
  },
  {
    "id": "p1-010",
    "domain": 1,
    "topic": "Residency",
    "q": "Which combination is part of the substantial presence test for a non-U.S. citizen who is not otherwise exempt from counting days?",
    "choices": [
      "At least 31 days in the current year and 183 weighted days over the current and two preceding years",
      "At least 90 days in each of the last two years",
      "At least 183 days in the current year only in every case",
      "At least 30 days in the current year and 365 days over five years"
    ],
    "answer": 0,
    "explanation": "The substantial presence test generally requires at least 31 days in the current year and 183 weighted days during the current year and the two preceding years.",
    "reference": "Publication 519"
  },
  {
    "id": "p1-011",
    "domain": 1,
    "topic": "Identity protection",
    "q": "A taxpayer has been issued an IRS Identity Protection PIN for 2025. What is the proper treatment when filing the return?",
    "choices": [
      "Ignore it unless the taxpayer had identity theft during 2025",
      "Enter the IP PIN on the return as instructed by the IRS",
      "Attach a copy of the taxpayer's driver's license instead",
      "Use the IP PIN as the taxpayer's filing-status code"
    ],
    "answer": 1,
    "explanation": "A taxpayer who has an IP PIN must enter it on the federal return as instructed. The IP PIN helps the IRS verify the return is legitimate.",
    "reference": "IRS Identity Protection PIN guidance"
  },
  {
    "id": "p1-012",
    "domain": 1,
    "topic": "Worldwide income",
    "q": "A U.S. citizen lives and works abroad for all of 2025. Which statement is generally correct?",
    "choices": [
      "Only U.S.-source income is reported on the U.S. return",
      "Worldwide income is generally reportable, subject to applicable exclusions or credits",
      "Foreign wages are never reportable on a U.S. return",
      "A U.S. return is required only if the taxpayer owns U.S. property"
    ],
    "answer": 1,
    "explanation": "U.S. citizens and resident aliens are generally taxed on worldwide income. Foreign earned income exclusions or foreign tax credits may reduce double taxation, but the income is not simply ignored.",
    "reference": "Publication 54"
  },
  {
    "id": "p1-013",
    "domain": 1,
    "topic": "FBAR",
    "q": "A U.S. person had three foreign financial accounts with an aggregate maximum value of $11,500 during 2025. Which statement is generally correct?",
    "choices": [
      "No FBAR is required because no single account exceeded $10,000",
      "An FBAR may be required because the aggregate value exceeded $10,000 at some time during the year",
      "Form 8938 automatically replaces the FBAR",
      "The accounts are reported only if they generated taxable income"
    ],
    "answer": 1,
    "explanation": "The FBAR threshold is based on the aggregate maximum value of foreign financial accounts exceeding $10,000 at any time during the calendar year, not on each account separately.",
    "reference": "FinCEN Form 114; IRS FBAR guidance"
  },
  {
    "id": "p1-014",
    "domain": 1,
    "topic": "Kiddie tax",
    "q": "The kiddie tax is primarily designed to apply to:",
    "choices": [
      "A child's earned wages from a summer job",
      "Certain unearned income of children who meet age and support conditions",
      "All income of every dependent under age 24",
      "Only tax-exempt interest received by a child"
    ],
    "answer": 1,
    "explanation": "The kiddie tax applies to certain unearned income of children who meet the statutory age, student, support, and filing conditions. Earned wages are not the income targeted by the rule.",
    "reference": "Form 8615 Instructions"
  },
  {
    "id": "p1-015",
    "domain": 1,
    "topic": "Premium tax credit",
    "q": "A taxpayer purchased health coverage through the Marketplace and received advance payments of the premium tax credit. Which forms are central to reconciling the credit?",
    "choices": [
      "Form W-2 and Schedule C",
      "Form 1095-A and Form 8962",
      "Form 1099-R and Form 8606",
      "Form 1098-T and Form 8863"
    ],
    "answer": 1,
    "explanation": "Marketplace coverage is reported on Form 1095-A. The taxpayer uses that information on Form 8962 to reconcile advance premium tax credit payments or claim the credit.",
    "reference": "Form 8962 Instructions"
  },
  {
    "id": "p1-016",
    "domain": 1,
    "topic": "Tax payments",
    "q": "Which item is generally treated as a payment against total tax on Form 1040 rather than as a deduction from income?",
    "choices": [
      "Federal income tax withheld from wages",
      "Student loan interest",
      "Traditional IRA deduction",
      "Medical expenses"
    ],
    "answer": 0,
    "explanation": "Federal income tax withholding is a tax payment credited against the taxpayer's total tax. The other items, if allowable, affect income or deductions rather than being payments.",
    "reference": "Form 1040 Instructions"
  },
  {
    "id": "p1-017",
    "domain": 2,
    "topic": "Barter income",
    "q": "An attorney prepares a contract for a contractor. In exchange, the contractor installs $2,000 of flooring in the attorney's home. Assuming the services are exchanged at fair market value, how much income does the attorney generally recognize?",
    "choices": [
      "$0 because no cash changed hands",
      "$1,000",
      "$2,000",
      "Only the attorney's out-of-pocket costs"
    ],
    "answer": 2,
    "explanation": "Barter income is taxable. The fair market value of property or services received in exchange for services is generally included in gross income.",
    "reference": "Publication 525"
  },
  {
    "id": "p1-018",
    "domain": 2,
    "topic": "Interest income",
    "q": "Which item is generally exempt from federal income tax?",
    "choices": [
      "Interest on a corporate bond",
      "Interest on a bank certificate of deposit",
      "Interest on a state or local government bond that qualifies for the federal exclusion",
      "Interest on a private loan"
    ],
    "answer": 2,
    "explanation": "Interest on qualifying state and local government obligations is generally exempt from federal income tax, although it may still be relevant for other tax calculations.",
    "reference": "Publication 550"
  },
  {
    "id": "p1-019",
    "domain": 2,
    "topic": "Dividends",
    "q": "How are qualified dividends generally taxed for an individual taxpayer?",
    "choices": [
      "They are excluded from gross income",
      "They are taxed at preferential long-term capital gain rates when requirements are met",
      "They are always taxed at the taxpayer's highest ordinary rate",
      "They are subject only to self-employment tax"
    ],
    "answer": 1,
    "explanation": "Qualified dividends are included in income but may receive the preferential tax rates that apply to net capital gain.",
    "reference": "Publication 550"
  },
  {
    "id": "p1-020",
    "domain": 2,
    "topic": "Scholarships",
    "q": "A degree candidate receives a scholarship that is restricted to room and board. How is the scholarship generally treated for federal income tax purposes?",
    "choices": [
      "Entirely tax-free because the student is a degree candidate",
      "Taxable because room and board are not qualified scholarship expenses for the exclusion",
      "Tax-free only if the student is under age 24",
      "Deductible as an education expense"
    ],
    "answer": 1,
    "explanation": "The scholarship exclusion generally covers qualified tuition and related required expenses. Amounts used for room and board are generally taxable.",
    "reference": "Publication 970"
  },
  {
    "id": "p1-021",
    "domain": 2,
    "topic": "Gambling",
    "q": "A casual gambler has $8,000 of gambling winnings and $5,000 of documented gambling losses in 2025. Which statement is generally correct?",
    "choices": [
      "Only the net $3,000 is reported as gross gambling income",
      "The $8,000 of winnings is reported as income, and losses may be deductible separately if the taxpayer itemizes, subject to the applicable limit",
      "The winnings are tax-free because losses were incurred",
      "The losses are deductible against wages"
    ],
    "answer": 1,
    "explanation": "Gambling winnings are reported as income. For a nonprofessional gambler, gambling losses are generally claimed separately as an itemized deduction, subject to the applicable limitation.",
    "reference": "Publication 525; Schedule A Instructions"
  },
  {
    "id": "p1-022",
    "domain": 2,
    "topic": "Cancellation of debt",
    "q": "A taxpayer has $20,000 of debt canceled while the taxpayer is insolvent by $12,000 immediately before the cancellation. Ignoring other exclusions, how much of the canceled debt may generally be excluded under the insolvency exception?",
    "choices": [
      "$0",
      "$8,000",
      "$12,000",
      "$20,000"
    ],
    "answer": 2,
    "explanation": "The insolvency exclusion generally applies only to the extent the taxpayer is insolvent. Here, up to $12,000 may be excluded; the remainder may be taxable unless another exception applies.",
    "reference": "Publication 4681; Form 982"
  },
  {
    "id": "p1-023",
    "domain": 2,
    "topic": "Alimony",
    "q": "A divorce instrument was executed in 2023 and is not governed by the pre-2019 alimony rules. How are qualifying alimony payments generally treated for federal income tax purposes?",
    "choices": [
      "Deductible by the payer and taxable to the recipient",
      "Not deductible by the payer and not taxable to the recipient",
      "Deductible by both spouses",
      "Taxable to both spouses"
    ],
    "answer": 1,
    "explanation": "For divorce or separation instruments executed after 2018, alimony is generally not deductible by the payer and not included in the recipient's income.",
    "reference": "Publication 504"
  },
  {
    "id": "p1-024",
    "domain": 2,
    "topic": "Other income",
    "q": "Which statement about illegally earned income is correct for federal income tax purposes?",
    "choices": [
      "It is excluded because the activity is illegal",
      "It is generally taxable income even though the activity is illegal",
      "It is taxable only after a criminal conviction",
      "It is reported only if a Form 1099 is issued"
    ],
    "answer": 1,
    "explanation": "Illegal income is generally taxable and must be included in income unless a specific exclusion applies.",
    "reference": "Publication 525"
  },
  {
    "id": "p1-025",
    "domain": 2,
    "topic": "Constructive receipt",
    "q": "A cash-basis consultant receives a client check on December 31, 2025. The check is available to the consultant without restriction that day, but the consultant waits until January 2026 to deposit it. When is the income generally recognized?",
    "choices": [
      "2025",
      "2026",
      "Half in each year",
      "Only when the bank clears the check"
    ],
    "answer": 0,
    "explanation": "Cash-basis taxpayers generally recognize income when actually or constructively received. Delaying deposit does not postpone income when the funds were available without substantial restriction in 2025.",
    "reference": "Publication 538"
  },
  {
    "id": "p1-026",
    "domain": 2,
    "topic": "Pass-through income",
    "q": "A partner receives a Schedule K-1 showing $12,000 of distributive share of partnership income but receives no cash distribution during the year. What is generally true?",
    "choices": [
      "The partner reports no income until cash is distributed",
      "The partner generally reports the distributive share even if no cash was distributed",
      "The partnership pays all federal income tax for the partner",
      "The income is reported only if it exceeds the partner's basis by $12,000"
    ],
    "answer": 1,
    "explanation": "Partners generally report their distributive shares of partnership items whether or not the partnership distributes cash, subject to basis and other limitation rules.",
    "reference": "Schedule K-1 (Form 1065) Instructions"
  },
  {
    "id": "p1-027",
    "domain": 2,
    "topic": "Royalties",
    "q": "A taxpayer who is not in the business of creating or selling intellectual property receives royalties from a book. Where are the royalties generally reported?",
    "choices": [
      "Schedule E",
      "Schedule F",
      "Form 8949 only",
      "Schedule A"
    ],
    "answer": 0,
    "explanation": "Royalty income is generally reported on Schedule E unless the taxpayer's activities rise to a trade or business requiring different treatment.",
    "reference": "Schedule E Instructions"
  },
  {
    "id": "p1-028",
    "domain": 2,
    "topic": "Tax benefit rule",
    "q": "A taxpayer deducted state income taxes as an itemized deduction in a prior year and received a state tax refund in 2025. When is the refund generally taxable?",
    "choices": [
      "Always, in full",
      "Never",
      "Only to the extent the prior deduction produced a federal tax benefit",
      "Only if the refund exceeds $10,000"
    ],
    "answer": 2,
    "explanation": "The tax benefit rule generally includes a recovery in income only to the extent the earlier deduction reduced federal income tax.",
    "reference": "Publication 525"
  },
  {
    "id": "p1-029",
    "domain": 2,
    "topic": "Information returns",
    "q": "A sole proprietor pays an unincorporated consultant $900 for services in the course of the business. Which information return is generally associated with reporting the nonemployee compensation?",
    "choices": [
      "Form 1099-NEC",
      "Form 1099-INT",
      "Form W-2",
      "Form 1098"
    ],
    "answer": 0,
    "explanation": "Form 1099-NEC is generally used to report qualifying nonemployee compensation paid in the course of a trade or business.",
    "reference": "Instructions for Forms 1099-MISC and 1099-NEC"
  },
  {
    "id": "p1-030",
    "domain": 2,
    "topic": "Traditional IRA basis",
    "q": "A taxpayer makes nondeductible contributions to a traditional IRA. Which form is generally used to report and track basis in traditional IRAs?",
    "choices": [
      "Form 8606",
      "Form 8863",
      "Form 8962",
      "Form 6251"
    ],
    "answer": 0,
    "explanation": "Form 8606 is used for nondeductible traditional IRA contributions and for computing taxable amounts of certain IRA distributions and conversions.",
    "reference": "Form 8606 Instructions"
  },
  {
    "id": "p1-031",
    "domain": 2,
    "topic": "Roth IRA distributions",
    "q": "A 61-year-old taxpayer has had a Roth IRA for more than five tax years and takes a distribution from it. Assuming no special complication, how is a qualified distribution generally treated?",
    "choices": [
      "Fully taxable as ordinary income",
      "Tax-free",
      "Taxable as a capital gain",
      "Subject to self-employment tax"
    ],
    "answer": 1,
    "explanation": "A Roth IRA distribution is generally qualified and tax-free when the five-year requirement and a qualifying condition such as reaching age 59½ are satisfied.",
    "reference": "Publication 590-B"
  },
  {
    "id": "p1-032",
    "domain": 2,
    "topic": "Qualified charitable distributions",
    "q": "An IRA owner who is old enough to make a qualified charitable distribution sends an otherwise qualifying amount directly from the IRA trustee to an eligible charity. Which statement is generally correct?",
    "choices": [
      "The distribution must first be paid to the taxpayer",
      "The QCD may be excluded from income and can count toward an RMD to the extent otherwise eligible",
      "The QCD is deductible only on Schedule C",
      "A QCD can be made only from a Roth 401(k)"
    ],
    "answer": 1,
    "explanation": "A qualifying charitable distribution is paid directly from the IRA to an eligible charity. It can be excluded from income and can satisfy RMD requirements to the extent the distribution qualifies.",
    "reference": "Publication 590-B"
  },
  {
    "id": "p1-033",
    "domain": 2,
    "topic": "Capital gains",
    "q": "A taxpayer buys stock on March 1, 2024, and sells it on April 2, 2025. Assuming no special rule changes the holding period, the gain or loss is generally:",
    "choices": [
      "Short-term because the sale occurred within two calendar years",
      "Long-term because the stock was held for more than one year",
      "Ordinary because all stock gains are ordinary",
      "Section 1231 gain"
    ],
    "answer": 1,
    "explanation": "Capital assets held for more than one year generally produce long-term capital gain or loss.",
    "reference": "Publication 550"
  },
  {
    "id": "p1-034",
    "domain": 2,
    "topic": "Gift basis",
    "q": "A parent gives stock to a child. The parent's adjusted basis is $10,000 and the stock's fair market value on the gift date is $7,000. The child later sells the stock for $6,000. What basis is generally used to determine the child's loss?",
    "choices": [
      "$6,000",
      "$7,000",
      "$10,000",
      "$17,000"
    ],
    "answer": 1,
    "explanation": "When gifted property has FMV below the donor's basis, special dual-basis rules apply. For determining a loss, the donee generally uses the FMV at the date of gift, here $7,000.",
    "reference": "Publication 551"
  },
  {
    "id": "p1-035",
    "domain": 2,
    "topic": "Gift basis",
    "q": "Using the same facts—donor basis $10,000 and gift-date FMV $7,000—the child sells the stock for $8,000. What is the general result under the dual-basis rule?",
    "choices": [
      "$2,000 loss",
      "$1,000 gain",
      "No recognized gain or loss",
      "$3,000 gain"
    ],
    "answer": 2,
    "explanation": "If the sale price falls between the donor's basis and the gift-date FMV, the dual-basis rule generally produces neither gain nor loss.",
    "reference": "Publication 551"
  },
  {
    "id": "p1-036",
    "domain": 2,
    "topic": "Inherited property",
    "q": "A taxpayer inherits publicly traded stock from a decedent. Absent an alternate valuation or special rule, the heir's basis is generally:",
    "choices": [
      "The decedent's original cost",
      "Zero",
      "Fair market value at the decedent's date of death",
      "The amount of estate tax paid"
    ],
    "answer": 2,
    "explanation": "Inherited property generally receives a basis equal to fair market value at the date of death, subject to exceptions and alternate valuation rules.",
    "reference": "Publication 551"
  },
  {
    "id": "p1-037",
    "domain": 3,
    "topic": "Medical expenses",
    "q": "A taxpayer has AGI of $100,000 and $10,000 of otherwise deductible medical expenses in 2025. If the taxpayer itemizes and has no reimbursement, how much is deductible as a medical expense?",
    "choices": [
      "$0",
      "$2,500",
      "$7,500",
      "$10,000"
    ],
    "answer": 1,
    "explanation": "Medical expenses are deductible only to the extent they exceed 7.5% of AGI. Seven and one-half percent of $100,000 is $7,500, leaving a $2,500 deduction.",
    "reference": "Publication 502"
  },
  {
    "id": "p1-038",
    "domain": 3,
    "topic": "SALT deduction",
    "q": "A single taxpayer with MAGI below the 2025 SALT phaseout threshold pays $45,000 of deductible state and local income and property taxes. What is the maximum 2025 SALT itemized deduction before considering any other limitation?",
    "choices": [
      "$10,000",
      "$20,000",
      "$40,000",
      "$45,000"
    ],
    "answer": 2,
    "explanation": "For 2025, the general SALT cap is $40,000 for most filing statuses, subject to a reduction at higher MAGI levels. Married filing separately generally has a $20,000 cap.",
    "reference": "2025 Schedule A Instructions"
  },
  {
    "id": "p1-039",
    "domain": 3,
    "topic": "Charitable contributions",
    "q": "A taxpayer makes a $500 cash contribution to a qualified charity. Which documentation is generally required to deduct the contribution?",
    "choices": [
      "No documentation because the gift is under $1,000",
      "A contemporaneous written acknowledgment from the charity because the contribution is $250 or more",
      "Only a verbal statement from the charity",
      "A qualified appraisal"
    ],
    "answer": 1,
    "explanation": "A contribution of $250 or more generally requires a contemporaneous written acknowledgment from the qualified organization. Cash contributions also require appropriate records.",
    "reference": "Publication 526"
  },
  {
    "id": "p1-040",
    "domain": 3,
    "topic": "Casualty losses",
    "q": "For 2025, which personal casualty loss is most likely to be potentially deductible by an individual, assuming all other requirements are met?",
    "choices": [
      "Gradual deterioration of a roof",
      "A loss from a federally declared disaster",
      "Normal wear and tear on a vehicle",
      "A decline in stock value"
    ],
    "answer": 1,
    "explanation": "Personal casualty and theft losses are generally limited to losses attributable to federally declared disasters for the applicable period, subject to statutory rules.",
    "reference": "Publication 547"
  },
  {
    "id": "p1-041",
    "domain": 3,
    "topic": "QBI deduction",
    "q": "Which item is generally NOT qualified business income for purposes of the section 199A deduction?",
    "choices": [
      "Net income from a qualifying sole proprietorship",
      "A partner's qualifying share of partnership business income",
      "Wages earned as an employee",
      "Qualifying income from an S corporation business"
    ],
    "answer": 2,
    "explanation": "Employee wages are not QBI. The deduction generally applies to qualifying business income from pass-through businesses and sole proprietorships, subject to limitations.",
    "reference": "Form 8995 Instructions"
  },
  {
    "id": "p1-042",
    "domain": 3,
    "topic": "Child and dependent care credit",
    "q": "A single parent pays daycare expenses so the parent can work. The child is age 4 and otherwise qualifies. Which fact is central to eligibility for the child and dependent care credit?",
    "choices": [
      "The care expense must be related to allowing the taxpayer to work or look for work",
      "The child must have investment income",
      "The taxpayer must itemize deductions",
      "The daycare provider must be a relative"
    ],
    "answer": 0,
    "explanation": "The credit generally requires work-related care expenses for a qualifying person and is subject to earned-income and other requirements.",
    "reference": "Publication 503"
  },
  {
    "id": "p1-043",
    "domain": 3,
    "topic": "Child tax credit",
    "q": "What is the maximum 2025 Child Tax Credit per qualifying child before phaseouts and other limitations?",
    "choices": [
      "$500",
      "$1,700",
      "$2,000",
      "$2,200"
    ],
    "answer": 3,
    "explanation": "The maximum Child Tax Credit for 2025 is $2,200 per qualifying child, subject to eligibility, SSN, income, and other rules.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "p1-044",
    "domain": 3,
    "topic": "Credit for other dependents",
    "q": "A taxpayer has a dependent who does not qualify for the Child Tax Credit but meets the requirements for the Credit for Other Dependents. What is the maximum credit generally available for that dependent?",
    "choices": [
      "$250",
      "$500",
      "$1,700",
      "$2,200"
    ],
    "answer": 1,
    "explanation": "The Credit for Other Dependents is generally a nonrefundable credit of up to $500 per qualifying dependent.",
    "reference": "Publication 972 / Form 1040 Instructions"
  },
  {
    "id": "p1-045",
    "domain": 3,
    "topic": "American Opportunity Credit",
    "q": "A taxpayer has $4,000 of qualified expenses for an eligible student and otherwise qualifies fully for the American Opportunity Tax Credit. What is the maximum credit before income limitations?",
    "choices": [
      "$1,000",
      "$2,000",
      "$2,500",
      "$4,000"
    ],
    "answer": 2,
    "explanation": "The AOTC is 100% of the first $2,000 of qualified expenses plus 25% of the next $2,000, for a maximum of $2,500 per eligible student.",
    "reference": "Publication 970; Form 8863 Instructions"
  },
  {
    "id": "p1-046",
    "domain": 3,
    "topic": "Lifetime Learning Credit",
    "q": "A taxpayer pays $10,000 of qualified expenses and otherwise qualifies fully for the Lifetime Learning Credit. What is the maximum credit before income limitations?",
    "choices": [
      "$1,000",
      "$2,000",
      "$2,500",
      "$10,000"
    ],
    "answer": 1,
    "explanation": "The Lifetime Learning Credit is generally 20% of up to $10,000 of qualified expenses per return, for a maximum of $2,000.",
    "reference": "Publication 970"
  },
  {
    "id": "p1-047",
    "domain": 3,
    "topic": "Foreign tax credit",
    "q": "A taxpayer pays qualifying foreign income tax and elects to claim a foreign tax credit for that tax. Which statement is correct?",
    "choices": [
      "The same foreign tax may also be deducted as an itemized deduction",
      "The taxpayer generally cannot both deduct and claim a credit for the same foreign income tax",
      "The credit is available only to corporations",
      "The foreign tax credit is always refundable"
    ],
    "answer": 1,
    "explanation": "A taxpayer generally cannot claim both a deduction and a credit for the same foreign income taxes. The credit is usually more directly valuable because it reduces tax rather than taxable income.",
    "reference": "Publication 514; Form 1116"
  },
  {
    "id": "p1-048",
    "domain": 3,
    "topic": "EITC due diligence",
    "q": "Which form is associated with a paid preparer's due-diligence requirements for the Earned Income Tax Credit and certain other refundable or filing-status benefits?",
    "choices": [
      "Form 8867",
      "Form 8606",
      "Form 6251",
      "Form 4797"
    ],
    "answer": 0,
    "explanation": "Paid preparers use Form 8867, Paid Preparer's Due Diligence Checklist, for EITC and certain other listed tax benefits.",
    "reference": "Form 8867 Instructions"
  },
  {
    "id": "p1-049",
    "domain": 3,
    "topic": "Premium tax credit",
    "q": "A taxpayer received advance premium tax credit payments for Marketplace coverage. Which action is generally required on the federal return?",
    "choices": [
      "Ignore the advance payments if coverage lasted all year",
      "Reconcile the advance payments using Form 8962",
      "Report the payments as wages",
      "Claim the payments as an itemized deduction"
    ],
    "answer": 1,
    "explanation": "Advance premium tax credit payments are reconciled on Form 8962 using Marketplace information from Form 1095-A.",
    "reference": "Form 8962 Instructions"
  },
  {
    "id": "p1-050",
    "domain": 3,
    "topic": "Health savings accounts",
    "q": "What is the 2025 HSA contribution limit for an eligible individual with family HDHP coverage, before any age-55 catch-up contribution?",
    "choices": [
      "$4,300",
      "$7,000",
      "$8,550",
      "$12,500"
    ],
    "answer": 2,
    "explanation": "The 2025 HSA contribution limit is $8,550 for family coverage and $4,300 for self-only coverage, before any eligible catch-up contribution.",
    "reference": "Publication 969 (2025)"
  },
  {
    "id": "p1-051",
    "domain": 3,
    "topic": "Student loan interest",
    "q": "Which statement about the student loan interest deduction is generally correct?",
    "choices": [
      "It is an itemized deduction only",
      "It is an adjustment to income, subject to limits and income phaseouts",
      "It is available without limit to married taxpayers filing separately",
      "It applies only to interest on credit cards used for tuition"
    ],
    "answer": 1,
    "explanation": "Qualified student loan interest may be deductible as an adjustment to income, generally up to the statutory limit and subject to MAGI and filing-status rules.",
    "reference": "Publication 970"
  },
  {
    "id": "p1-052",
    "domain": 3,
    "topic": "Self-employed health insurance",
    "q": "A self-employed taxpayer pays health insurance premiums but was eligible to participate in a subsidized employer health plan through the taxpayer's spouse for the same months. How does that generally affect the self-employed health insurance deduction for those months?",
    "choices": [
      "It has no effect",
      "The above-the-line deduction is generally not allowed for months the taxpayer was eligible for the subsidized plan",
      "The premiums become a refundable credit",
      "The premiums are automatically deductible on Schedule C"
    ],
    "answer": 1,
    "explanation": "The self-employed health insurance deduction generally is not available for any month the taxpayer was eligible to participate in a subsidized health plan maintained by an employer of the taxpayer or spouse.",
    "reference": "Form 1040 Schedule 1 Instructions"
  },
  {
    "id": "p1-053",
    "domain": 3,
    "topic": "Qualified tips deduction",
    "q": "A married taxpayer received qualified tips in 2025 and otherwise meets the income and occupation requirements. Which filing-status rule applies to the new qualified tips deduction?",
    "choices": [
      "The deduction is available on married filing separately returns",
      "A married taxpayer generally must file jointly to claim the deduction",
      "The deduction requires head-of-household status",
      "The deduction is available only to single taxpayers"
    ],
    "answer": 1,
    "explanation": "For 2025, a married taxpayer generally must file a joint return to claim the qualified tips deduction. The deduction is available to both itemizers and non-itemizers.",
    "reference": "2025 Form 1040 Instructions; Schedule 1-A"
  },
  {
    "id": "p1-054",
    "domain": 3,
    "topic": "Qualified overtime deduction",
    "q": "An employee is paid time-and-a-half for FLSA-required overtime. For the 2025 qualified overtime deduction, which portion is generally the qualified overtime compensation?",
    "choices": [
      "The employee's entire regular wage plus overtime premium",
      "Only the extra one-half premium above the regular rate",
      "Only the regular-rate portion",
      "None of the overtime pay can qualify"
    ],
    "answer": 1,
    "explanation": "For time-and-a-half FLSA overtime, the qualified overtime compensation is generally the premium portion that exceeds the regular rate—the extra one-half.",
    "reference": "2025 Form 1040 Instructions; IRS overtime FAQs"
  },
  {
    "id": "p1-055",
    "domain": 3,
    "topic": "Vehicle loan interest deduction",
    "q": "Which vehicle-loan interest payment is most likely to qualify for the new 2025 deduction, assuming income limits are satisfied?",
    "choices": [
      "Interest on a lease payment",
      "Interest on a loan for a used vehicle whose original use began with someone else",
      "Interest on a qualifying loan used to purchase a new personal-use vehicle that meets the U.S. final-assembly and other requirements",
      "Interest on any credit-card balance used for gasoline"
    ],
    "answer": 2,
    "explanation": "The 2025 qualified passenger vehicle loan interest deduction applies to qualifying interest on a loan used to purchase an eligible new personal-use vehicle meeting specified requirements. Leases do not qualify.",
    "reference": "Schedule 1-A Instructions; IRS Working Families Tax Cuts guidance"
  },
  {
    "id": "p1-056",
    "domain": 3,
    "topic": "Enhanced senior deduction",
    "q": "A 67-year-old single taxpayer otherwise qualifies for the new 2025 enhanced senior deduction and is below the phaseout range. What is the maximum deduction?",
    "choices": [
      "$1,600",
      "$2,000",
      "$6,000",
      "$12,000"
    ],
    "answer": 2,
    "explanation": "The 2025 enhanced senior deduction is up to $6,000 for each eligible taxpayer age 65 or older, subject to MAGI and other requirements. It is separate from the existing additional standard deduction for age or blindness.",
    "reference": "2025 Form 1040 Instructions; Schedule 1-A"
  },
  {
    "id": "p1-057",
    "domain": 4,
    "topic": "Alternative minimum tax",
    "q": "What is the basic purpose of the alternative minimum tax for individuals?",
    "choices": [
      "To replace Social Security tax",
      "To require a separate tax calculation that limits the benefit of certain exclusions, deductions, and preferences",
      "To tax only capital gains",
      "To impose a flat tax on every taxpayer"
    ],
    "answer": 1,
    "explanation": "AMT is a parallel tax system. Taxpayers recompute taxable income with specified adjustments and preferences and may owe AMT when the tentative minimum tax exceeds regular tax.",
    "reference": "Form 6251 Instructions"
  },
  {
    "id": "p1-058",
    "domain": 4,
    "topic": "Household employees",
    "q": "A taxpayer pays a household employee enough cash wages to trigger federal household employment taxes. Which schedule is generally used with Form 1040 to report those taxes?",
    "choices": [
      "Schedule H",
      "Schedule D",
      "Schedule E",
      "Schedule SE"
    ],
    "answer": 0,
    "explanation": "Schedule H is generally used to report Social Security, Medicare, federal unemployment, and withheld federal income taxes for household employees when the applicable requirements are met.",
    "reference": "Schedule H Instructions"
  },
  {
    "id": "p1-059",
    "domain": 4,
    "topic": "Estimated tax",
    "q": "Ignoring special rules, which payment pattern generally avoids an individual estimated-tax underpayment penalty?",
    "choices": [
      "Paying at least 50% of current-year tax",
      "Paying at least 90% of current-year tax or 100% of prior-year tax through timely withholding and estimated payments",
      "Paying the full balance only when an extension is filed",
      "Paying any amount by December 31"
    ],
    "answer": 1,
    "explanation": "The general safe harbor is based on paying at least 90% of current-year tax or 100% of prior-year tax, with a 110% prior-year rule for certain higher-income taxpayers.",
    "reference": "Form 2210 Instructions; Publication 505"
  },
  {
    "id": "p1-060",
    "domain": 4,
    "topic": "Estimated tax",
    "q": "A taxpayer's prior-year AGI exceeded the threshold for the higher-income estimated-tax safe harbor. What percentage of prior-year tax is generally used for that safe harbor?",
    "choices": [
      "90%",
      "100%",
      "110%",
      "125%"
    ],
    "answer": 2,
    "explanation": "Certain higher-income taxpayers generally use 110% of prior-year tax, rather than 100%, for the prior-year safe harbor.",
    "reference": "Publication 505"
  },
  {
    "id": "p1-061",
    "domain": 4,
    "topic": "Self-employment tax",
    "q": "A sole proprietor has $350 of net earnings from self-employment and no other self-employment income. Assuming no special rule applies, is self-employment tax generally due?",
    "choices": [
      "Yes, because any profit triggers self-employment tax",
      "Yes, because the threshold is $100",
      "No, because net earnings from self-employment are below $400",
      "No, because sole proprietors never pay self-employment tax"
    ],
    "answer": 2,
    "explanation": "Self-employment tax generally applies when net earnings from self-employment are $400 or more, subject to special rules.",
    "reference": "Schedule SE Instructions"
  },
  {
    "id": "p1-062",
    "domain": 4,
    "topic": "Self-employment tax",
    "q": "Before applying the Social Security and Medicare tax rates, net self-employment earnings are generally multiplied by which percentage?",
    "choices": [
      "50%",
      "75%",
      "92.35%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Schedule SE generally uses 92.35% of net profit to determine net earnings from self-employment before applying the self-employment tax rates.",
    "reference": "Schedule SE Instructions"
  },
  {
    "id": "p1-063",
    "domain": 4,
    "topic": "Self-employment tax",
    "q": "A self-employed taxpayer pays self-employment tax. What federal income-tax adjustment is generally available?",
    "choices": [
      "A deduction for one-half of self-employment tax in computing adjusted gross income",
      "A refundable credit for the entire self-employment tax",
      "An itemized deduction for the entire self-employment tax",
      "No deduction or adjustment"
    ],
    "answer": 0,
    "explanation": "One-half of self-employment tax is generally deductible as an adjustment to income. This does not reduce the self-employment tax itself.",
    "reference": "Schedule 1; Schedule SE Instructions"
  },
  {
    "id": "p1-064",
    "domain": 4,
    "topic": "Excess Social Security withholding",
    "q": "A taxpayer works for two unrelated employers and the combined Social Security tax withheld exceeds the annual employee maximum. How is the excess generally recovered?",
    "choices": [
      "By asking either employer to refund all Social Security tax withheld",
      "As a credit on the taxpayer's individual income tax return",
      "It cannot be recovered",
      "As a Schedule C expense"
    ],
    "answer": 1,
    "explanation": "When excess Social Security tax results from wages paid by two or more employers, the employee generally claims the excess as a credit on the individual return. If one employer alone withheld too much, the employee generally seeks correction from that employer.",
    "reference": "Form 1040 Instructions"
  },
  {
    "id": "p1-065",
    "domain": 4,
    "topic": "Clergy",
    "q": "A minister receives compensation for ministerial services and has not obtained an approved exemption from self-employment tax. How are those ministerial earnings generally treated for Social Security and Medicare purposes?",
    "choices": [
      "They are generally subject to self-employment tax rather than employee FICA",
      "They are always exempt from all Social Security and Medicare taxes",
      "They are subject only to Additional Medicare Tax",
      "They are treated as capital gain"
    ],
    "answer": 0,
    "explanation": "Ministers generally use the self-employment tax system for ministerial earnings unless a valid exemption applies, even though other income-tax rules may treat parts of compensation differently.",
    "reference": "Publication 517"
  },
  {
    "id": "p1-066",
    "domain": 4,
    "topic": "Military",
    "q": "Which statement about qualifying combat-zone pay is generally correct?",
    "choices": [
      "It is always fully taxable wages for federal income tax",
      "It may be excluded from gross income, and an election may allow nontaxable combat pay to count as earned income for EITC purposes",
      "It is treated as dividend income",
      "It is subject to net investment income tax"
    ],
    "answer": 1,
    "explanation": "Qualifying combat pay can be excluded from gross income. Taxpayers may elect to include nontaxable combat pay as earned income when computing EITC if that is beneficial.",
    "reference": "Publication 3"
  },
  {
    "id": "p1-067",
    "domain": 4,
    "topic": "Income in respect of a decedent",
    "q": "A cash-basis taxpayer earned interest before death but had not received it. The estate later collects the interest. The interest is generally:",
    "choices": [
      "Tax-free because the taxpayer died",
      "Income in respect of a decedent and taxable to the recipient when received",
      "A capital contribution to the estate",
      "Included only in the decedent's final return"
    ],
    "answer": 1,
    "explanation": "Amounts the decedent was entitled to receive but that were not properly includible before death may be income in respect of a decedent and are taxed to the estate or beneficiary that receives them.",
    "reference": "Publication 559"
  },
  {
    "id": "p1-068",
    "domain": 4,
    "topic": "Net investment income tax",
    "q": "Which item is generally included in net investment income for NIIT purposes?",
    "choices": [
      "Wages from employment",
      "Self-employment earnings from an active business",
      "Taxable interest and dividends",
      "Tax-exempt municipal bond interest"
    ],
    "answer": 2,
    "explanation": "Net investment income generally includes items such as taxable interest, dividends, annuities, royalties, rents, and net gain from property, subject to exceptions. Wages are not net investment income.",
    "reference": "Form 8960 Instructions"
  },
  {
    "id": "p1-069",
    "domain": 4,
    "topic": "Net investment income tax",
    "q": "What is the tax rate imposed by the Net Investment Income Tax when it applies?",
    "choices": [
      "0.9%",
      "3.8%",
      "7.5%",
      "15.3%"
    ],
    "answer": 1,
    "explanation": "NIIT is 3.8% of the lesser of net investment income or the excess of modified AGI over the applicable threshold.",
    "reference": "Form 8960 Instructions"
  },
  {
    "id": "p1-070",
    "domain": 4,
    "topic": "Additional Medicare Tax",
    "q": "Which income is potentially subject to the 0.9% Additional Medicare Tax when the applicable threshold is exceeded?",
    "choices": [
      "Tax-exempt interest only",
      "Wages, railroad retirement compensation, and self-employment income as applicable",
      "Qualified dividends only",
      "Long-term capital gains only"
    ],
    "answer": 1,
    "explanation": "Additional Medicare Tax applies to certain wages, railroad retirement compensation, and self-employment income above filing-status thresholds. Investment income is addressed separately by NIIT.",
    "reference": "Form 8959 Instructions"
  },
  {
    "id": "p1-071",
    "domain": 4,
    "topic": "Tip taxes",
    "q": "An employee received cash tips that were not reported to the employer. What federal employment-tax consequence may result?",
    "choices": [
      "No Social Security or Medicare tax is ever due on tips",
      "The employee may owe the employee share of Social Security and Medicare tax on unreported tips",
      "The tips become capital gains",
      "Only the employer owes tax"
    ],
    "answer": 1,
    "explanation": "Cash tips are generally wages for Social Security and Medicare purposes. Employees may have to report and pay their share of tax on tips not reported to the employer.",
    "reference": "Publication 531; Form 4137"
  },
  {
    "id": "p1-072",
    "domain": 4,
    "topic": "Underpayment interest",
    "q": "A taxpayer files an automatic extension of time to file Form 1040 but does not pay the expected balance due until the extended filing date. Which statement is generally correct?",
    "choices": [
      "The extension also automatically extends the time to pay without interest",
      "Interest generally runs from the original payment due date even though an extension to file was obtained",
      "No interest is charged if Form 4868 was filed",
      "Payment is not due until the return is actually filed"
    ],
    "answer": 1,
    "explanation": "An extension of time to file is not an extension of time to pay. Interest generally accrues on unpaid tax from the original due date.",
    "reference": "Form 4868 Instructions"
  },
  {
    "id": "p1-073",
    "domain": 4,
    "topic": "Social Security benefits",
    "q": "What is the maximum percentage of Social Security benefits that may be included in taxable income under the regular rules?",
    "choices": [
      "25%",
      "50%",
      "85%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Depending on provisional income and filing status, up to 85% of Social Security benefits may be taxable. This does not mean the benefits are taxed at an 85% tax rate.",
    "reference": "Publication 915"
  },
  {
    "id": "p1-074",
    "domain": 4,
    "topic": "Social Security benefits",
    "q": "A married taxpayer files separately and lived with the spouse at some time during the year. What base amount is generally used in determining taxable Social Security benefits?",
    "choices": [
      "$0",
      "$25,000",
      "$32,000",
      "$50,000"
    ],
    "answer": 0,
    "explanation": "For married filing separately taxpayers who lived with their spouse at any time during the year, the base amount is generally zero, causing Social Security benefits to become taxable more quickly.",
    "reference": "Publication 915"
  },
  {
    "id": "p1-075",
    "domain": 5,
    "topic": "Cash reporting",
    "q": "A person engaged in a trade or business receives more than $10,000 in cash in a single transaction in the course of that business. Which federal information return is generally associated with reporting the transaction?",
    "choices": [
      "Form 8300",
      "Form 8606",
      "Form 6251",
      "Form 8829"
    ],
    "answer": 0,
    "explanation": "Form 8300 is generally used to report cash payments over $10,000 received in a trade or business, subject to detailed aggregation and timing rules.",
    "reference": "Form 8300 Instructions"
  },
  {
    "id": "p1-076",
    "domain": 5,
    "topic": "Property sale planning",
    "q": "A homeowner expects to sell a principal residence. Which record is especially important for determining taxable gain?",
    "choices": [
      "Only the home's current property-tax bill",
      "Records of purchase price and capital improvements that affect adjusted basis",
      "Only the amount of the mortgage balance",
      "Only the real estate agent's commission"
    ],
    "answer": 1,
    "explanation": "Taxable gain depends on amount realized minus adjusted basis. Purchase cost, settlement items, capital improvements, casualty adjustments, and selling expenses can affect that computation.",
    "reference": "Publication 523"
  },
  {
    "id": "p1-077",
    "domain": 5,
    "topic": "529 plans",
    "q": "A distribution from a qualified tuition program is used entirely for qualified education expenses of the designated beneficiary. How is the earnings portion generally treated?",
    "choices": [
      "Taxable as wages",
      "Generally tax-free",
      "Subject to self-employment tax",
      "Always subject to the 10% additional tax"
    ],
    "answer": 1,
    "explanation": "Earnings on a 529 plan distribution are generally tax-free when the distribution does not exceed qualified education expenses, subject to coordination rules with other education benefits.",
    "reference": "Publication 970"
  },
  {
    "id": "p1-078",
    "domain": 5,
    "topic": "Gift versus inheritance",
    "q": "A client owns highly appreciated stock and is considering giving it to an adult child during life or leaving it to the child at death. Which basis rule is generally relevant to the comparison?",
    "choices": [
      "Both gifts and inheritances always receive zero basis",
      "Gifts generally carry over the donor's basis, while inherited property generally receives date-of-death fair market value basis",
      "Gifts always receive FMV basis and inheritances use carryover basis",
      "Basis is irrelevant because family transfers are never taxed"
    ],
    "answer": 1,
    "explanation": "Lifetime gifts generally carry over the donor's basis, subject to dual-basis rules for loss property. Inherited property generally receives a basis tied to fair market value at death.",
    "reference": "Publication 551"
  },
  {
    "id": "p1-079",
    "domain": 5,
    "topic": "Retirement planning",
    "q": "A taxpayer who is eligible to make a qualified charitable distribution wants to satisfy part of an RMD while supporting a charity. Which approach is generally most tax-efficient under the QCD rules?",
    "choices": [
      "Take the IRA distribution personally and later contribute the cash",
      "Direct the IRA trustee to transfer the qualifying amount directly to the eligible charity",
      "Transfer stock from a taxable brokerage account and call it a QCD",
      "Take a 401(k) loan and donate the proceeds"
    ],
    "answer": 1,
    "explanation": "A QCD must generally be transferred directly by the IRA trustee to an eligible charity. A qualifying QCD can count toward the RMD while being excluded from income.",
    "reference": "Publication 590-B"
  },
  {
    "id": "p1-080",
    "domain": 5,
    "topic": "Divorce",
    "q": "Incident to a divorce, one spouse transfers appreciated investment property to the other spouse. Which statement is generally correct under the federal income-tax nonrecognition rule?",
    "choices": [
      "The transferor generally recognizes gain immediately",
      "The transfer is generally nonrecognition, and the recipient generally takes a carryover basis",
      "The recipient always takes fair market value basis",
      "The transfer is treated as wages"
    ],
    "answer": 1,
    "explanation": "Transfers of property between spouses or incident to divorce generally do not trigger gain or loss. The recipient generally receives the transferor's adjusted basis.",
    "reference": "Publication 504; IRC §1041"
  },
  {
    "id": "p1-081",
    "domain": 5,
    "topic": "Capital loss carryovers",
    "q": "A single taxpayer has a $10,000 net capital loss and no capital gains for 2025. Ignoring special items, how much can generally be deducted against ordinary income for 2025?",
    "choices": [
      "$0",
      "$1,500",
      "$3,000",
      "$10,000"
    ],
    "answer": 2,
    "explanation": "Individuals generally may deduct up to $3,000 of net capital loss against ordinary income each year ($1,500 if married filing separately), carrying the remainder forward.",
    "reference": "Schedule D Instructions; Publication 550"
  },
  {
    "id": "p1-082",
    "domain": 5,
    "topic": "Injured spouse",
    "q": "A married couple files jointly and expects a refund, but one spouse has a past-due legally enforceable debt that may offset the joint refund. The other spouse wants to claim the portion attributable to that spouse's income and payments. Which relief is most relevant?",
    "choices": [
      "Innocent spouse relief only",
      "Injured spouse allocation",
      "Offer in compromise",
      "Currently not collectible status"
    ],
    "answer": 1,
    "explanation": "Injured spouse allocation may allow the nonobligated spouse to recover the share of a joint overpayment attributable to that spouse when the refund is applied to the other spouse's debt.",
    "reference": "Form 8379 Instructions"
  },
  {
    "id": "p1-083",
    "domain": 5,
    "topic": "Innocent spouse",
    "q": "Which situation is most closely associated with innocent spouse relief?",
    "choices": [
      "Recovering part of a joint refund taken for the other spouse's separate debt",
      "Seeking relief from joint tax liability attributable to erroneous items of the other spouse when statutory conditions are met",
      "Requesting more time to file",
      "Changing from itemized deductions to the standard deduction"
    ],
    "answer": 1,
    "explanation": "Innocent spouse relief concerns liability arising from a joint return. Injured spouse relief, by contrast, concerns allocation of a joint overpayment that is offset for the other spouse's debt.",
    "reference": "Publication 971"
  },
  {
    "id": "p1-084",
    "domain": 5,
    "topic": "Estimated tax planning",
    "q": "A self-employed taxpayer's income rises sharply in September. What is the most appropriate planning response to reduce a potential estimated-tax underpayment?",
    "choices": [
      "Wait until next April because estimated payments cannot be changed",
      "Recompute expected annual tax and adjust remaining estimated payments or withholding as appropriate",
      "Stop making estimated payments",
      "File an amended return before year-end"
    ],
    "answer": 1,
    "explanation": "Estimated tax planning should be updated when income changes. Increasing remaining estimated payments or withholding can reduce an underpayment and related penalty.",
    "reference": "Publication 505"
  },
  {
    "id": "p1-085",
    "domain": 5,
    "topic": "Timing",
    "q": "A cash-basis individual wants a deductible expense to count in 2025. Which general principle is most relevant?",
    "choices": [
      "The expense must generally be paid in 2025, subject to applicable rules",
      "The expense is deductible when merely discussed",
      "The expense is deductible when a bill is received, regardless of payment",
      "Cash-basis taxpayers always use accrual accounting for deductions"
    ],
    "answer": 0,
    "explanation": "Cash-basis taxpayers generally deduct expenses in the year paid, subject to special rules and the requirement that the expense itself be deductible.",
    "reference": "Publication 538"
  },
  {
    "id": "p1-086",
    "domain": 5,
    "topic": "MFJ liability",
    "q": "A married couple files a joint federal income tax return. What is the general liability rule?",
    "choices": [
      "Each spouse is liable only for tax on that spouse's income",
      "The higher-earning spouse is solely liable",
      "Both spouses are generally jointly and severally liable for the entire tax, interest, and penalties",
      "Liability automatically splits 50/50"
    ],
    "answer": 2,
    "explanation": "Spouses filing jointly are generally jointly and severally liable for the tax, interest, and penalties on the joint return, unless a specific relief provision applies.",
    "reference": "Publication 504; Publication 971"
  },
  {
    "id": "p1-087",
    "domain": 5,
    "topic": "Refund claims",
    "q": "A taxpayer discovers an error that would produce a refund. Under the general refund-claim limitation, a timely claim is usually required within:",
    "choices": [
      "One year from the original due date only",
      "The later of 3 years from filing the return or 2 years from paying the tax",
      "Five years from filing in every case",
      "Ten years from assessment"
    ],
    "answer": 1,
    "explanation": "The general limitation for a refund claim is the later of 3 years from the date the return was filed or 2 years from the date the tax was paid, subject to special rules.",
    "reference": "Publication 556; Form 1040-X Instructions"
  },
  {
    "id": "p1-088",
    "domain": 6,
    "topic": "Gross estate",
    "q": "A decedent owned a life insurance policy on the decedent's life and retained incidents of ownership until death. How are the death proceeds generally treated for federal estate-tax purposes?",
    "choices": [
      "Automatically excluded from the gross estate",
      "Generally included in the gross estate",
      "Taxed only as capital gain to the estate",
      "Included only if the beneficiary is the estate"
    ],
    "answer": 1,
    "explanation": "Life insurance proceeds are generally included in the gross estate when the decedent possessed incidents of ownership in the policy at death, even if someone else is the beneficiary.",
    "reference": "Form 706 Instructions"
  },
  {
    "id": "p1-089",
    "domain": 6,
    "topic": "Jointly held property",
    "q": "Spouses own property as a qualified joint interest. One spouse dies. What portion is generally included in the deceased spouse's gross estate?",
    "choices": [
      "0%",
      "25%",
      "50%",
      "100%"
    ],
    "answer": 2,
    "explanation": "For a qualified joint interest between spouses, one-half of the value is generally included in the estate of the first spouse to die.",
    "reference": "Form 706 Instructions"
  },
  {
    "id": "p1-090",
    "domain": 6,
    "topic": "Marital deduction",
    "q": "Property passes outright from a decedent to a surviving spouse who is a U.S. citizen. Which estate-tax provision may generally shelter the transfer, subject to applicable requirements?",
    "choices": [
      "Unlimited marital deduction",
      "Capital loss deduction",
      "Foreign tax credit",
      "Earned income credit"
    ],
    "answer": 0,
    "explanation": "Qualifying property passing to a surviving U.S.-citizen spouse generally may qualify for the estate-tax marital deduction, which can be unlimited in amount.",
    "reference": "Form 706 Instructions"
  },
  {
    "id": "p1-091",
    "domain": 6,
    "topic": "Portability",
    "q": "What action is generally required for an estate to elect portability of a deceased spouse's unused exclusion amount to the surviving spouse?",
    "choices": [
      "File a timely and complete Form 706 as required for the election",
      "File Form 709 in the surviving spouse's name only",
      "File an FBAR",
      "No filing is ever required"
    ],
    "answer": 0,
    "explanation": "Portability generally requires a valid election on a timely filed estate tax return, subject to applicable relief procedures.",
    "reference": "Form 706 Instructions"
  },
  {
    "id": "p1-092",
    "domain": 6,
    "topic": "Estate return due date",
    "q": "When is Form 706 generally due for a decedent's estate, before extensions?",
    "choices": [
      "Three months after death",
      "Six months after death",
      "Nine months after death",
      "April 15 of the following year in every case"
    ],
    "answer": 2,
    "explanation": "Form 706 is generally due 9 months after the date of death. An extension of time to file may be available, but payment rules are separate.",
    "reference": "Form 706 Instructions"
  },
  {
    "id": "p1-093",
    "domain": 6,
    "topic": "Gift splitting",
    "q": "A married couple wants to elect gift splitting for gifts made by one spouse to a third party. What is the effect of a valid gift-splitting election?",
    "choices": [
      "The entire gift is treated as made by the higher-income spouse",
      "Each spouse is generally treated as having made one-half of the gift",
      "The gift becomes income to the donor",
      "The gift is automatically excluded from all transfer taxes regardless of amount"
    ],
    "answer": 1,
    "explanation": "With a valid gift-splitting election and required consent, gifts made by either spouse to a third party are generally treated as made one-half by each spouse.",
    "reference": "Form 709 Instructions"
  },
  {
    "id": "p1-094",
    "domain": 6,
    "topic": "Annual gift exclusion",
    "q": "The federal annual gift-tax exclusion generally applies:",
    "choices": [
      "Once per donor, regardless of the number of recipients",
      "On a per-donor, per-donee basis for qualifying present-interest gifts",
      "Only to gifts of cash",
      "Only to gifts between spouses"
    ],
    "answer": 1,
    "explanation": "The annual exclusion generally applies separately to qualifying present-interest gifts to each donee. The dollar amount is indexed and can change by year.",
    "reference": "Publication 559; Form 709 Instructions"
  },
  {
    "id": "p1-095",
    "domain": 6,
    "topic": "Gift tax filing",
    "q": "Who is generally responsible for filing Form 709 and paying any federal gift tax due on a taxable gift?",
    "choices": [
      "The donee",
      "The donor",
      "The donor and donee equally",
      "The recipient's employer"
    ],
    "answer": 1,
    "explanation": "The donor is generally responsible for federal gift tax reporting and payment. The donee usually does not pay gift tax merely for receiving a gift.",
    "reference": "Form 709 Instructions"
  },
  {
    "id": "p1-096",
    "domain": 6,
    "topic": "Gift and estate unified credit",
    "q": "How are taxable lifetime gifts generally connected to the federal estate-tax system?",
    "choices": [
      "They are completely unrelated",
      "They generally use part of the donor's unified estate-and-gift transfer-tax exclusion/credit system",
      "They are treated as wages",
      "They always create immediate income tax to the donee"
    ],
    "answer": 1,
    "explanation": "Federal gift and estate taxes share a unified transfer-tax system. Taxable lifetime gifts generally reduce the exclusion/credit available for later transfers, subject to current law.",
    "reference": "Form 709 and Form 706 Instructions"
  },
  {
    "id": "p1-097",
    "domain": 6,
    "topic": "FBAR filing",
    "q": "Which statement correctly distinguishes the FBAR from the federal income tax return?",
    "choices": [
      "The FBAR is attached to Form 1040",
      "The FBAR is filed electronically with FinCEN, separate from the income tax return",
      "The FBAR is the same form as Form 8938",
      "The FBAR is filed only by corporations"
    ],
    "answer": 1,
    "explanation": "FinCEN Form 114 (FBAR) is filed electronically with the Financial Crimes Enforcement Network and is not attached to Form 1040.",
    "reference": "FinCEN Form 114; IRS FBAR guidance"
  },
  {
    "id": "p1-098",
    "domain": 6,
    "topic": "Form 8938",
    "q": "Which statement about Form 8938 is generally correct?",
    "choices": [
      "It is filed with the taxpayer's federal income tax return when applicable",
      "It is filed only with FinCEN and never with the IRS",
      "It replaces every FBAR filing requirement",
      "It applies only to domestic bank accounts"
    ],
    "answer": 0,
    "explanation": "Form 8938 is an IRS information return attached to the federal income tax return when applicable. Its asset definitions and thresholds differ from the FBAR, and some taxpayers may need to file both.",
    "reference": "Form 8938 Instructions"
  },
  {
    "id": "p1-099",
    "domain": 6,
    "topic": "International information returns",
    "q": "Which form is most closely associated with certain U.S. persons who are officers, directors, or shareholders of specified foreign corporations?",
    "choices": [
      "Form 5471",
      "Form 8606",
      "Form 8863",
      "Form 2441"
    ],
    "answer": 0,
    "explanation": "Form 5471 is an information return used by certain U.S. persons with specified relationships to foreign corporations. Other international forms apply to foreign partnerships, trusts, gifts, and assets.",
    "reference": "Form 5471 Instructions"
  },
  {
    "id": "p1-100",
    "domain": 6,
    "topic": "International reporting penalties",
    "q": "Why is timely international information reporting especially important?",
    "choices": [
      "Late information returns can never create a penalty",
      "Failures can trigger significant penalties and may affect the statute of limitations in some cases",
      "International reporting is optional if no U.S. tax is due",
      "Only criminal penalties are possible"
    ],
    "answer": 1,
    "explanation": "International information-return failures can carry substantial civil penalties, and incomplete or missing filings can affect limitation periods. Filing obligations may exist even when little or no income tax is due.",
    "reference": "Instructions for Forms 8938, 5471, 8865, and 3520"
  }
];
