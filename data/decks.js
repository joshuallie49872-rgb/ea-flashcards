const EA_DECKS = [
  {
    "id": "video-1",
    "video": 1,
    "title": "Overview & Getting Started",
    "cards": [
      {
        "id": "v1-001",
        "q": "Can gross income include income received as money?",
        "a": "Yes, if it is not exempt from tax."
      },
      {
        "id": "v1-002",
        "q": "Can gross income include income received as goods?",
        "a": "Yes, if it is not exempt from tax."
      },
      {
        "id": "v1-003",
        "q": "Can gross income include income received as property?",
        "a": "Yes, if it is not exempt from tax."
      },
      {
        "id": "v1-004",
        "q": "Can gross income include income received as services?",
        "a": "Yes, if it is not exempt from tax."
      },
      {
        "id": "v1-005",
        "q": "Can gross income include income from sources outside the United States?",
        "a": "Yes."
      },
      {
        "id": "v1-006",
        "q": "How are taxable scholarships and grants classified for these filing rules?",
        "a": "As earned income."
      },
      {
        "id": "v1-007",
        "q": "Is taxable interest earned or unearned income?",
        "a": "Unearned income."
      },
      {
        "id": "v1-008",
        "q": "Are dividends earned or unearned income?",
        "a": "Unearned income."
      },
      {
        "id": "v1-009",
        "q": "Are capital gains earned or unearned income?",
        "a": "Unearned income."
      },
      {
        "id": "v1-010",
        "q": "Is unemployment compensation earned or unearned income?",
        "a": "Unearned income."
      },
      {
        "id": "v1-011",
        "q": "Is taxable Social Security earned or unearned income?",
        "a": "Unearned income."
      },
      {
        "id": "v1-012",
        "q": "Are pensions earned or unearned income in the year received?",
        "a": "Unearned income."
      },
      {
        "id": "v1-013",
        "q": "Are annuities earned or unearned income?",
        "a": "Unearned income."
      },
      {
        "id": "v1-014",
        "q": "Are distributions of unearned income from trusts treated as earned or unearned income?",
        "a": "Unearned income."
      },
      {
        "id": "v1-015",
        "q": "How does the $23,625 Head of Household filing threshold compare with the Single and MFJ thresholds?",
        "a": "It is exactly halfway between the Single and Married Filing Jointly thresholds."
      },
      {
        "id": "v1-016",
        "q": "Why will virtually everyone filing Married Filing Separately need to file a 2025 return?",
        "a": "Because the MFS filing threshold is only $5 of gross income."
      },
      {
        "id": "v1-017",
        "q": "For most tax purposes, how is a Qualifying Surviving Spouse treated?",
        "a": "Like a taxpayer filing Married Filing Jointly."
      },
      {
        "id": "v1-018",
        "q": "How do the ordinary filing thresholds generally relate to the standard deduction?",
        "a": "Except for Married Filing Separately, the filing thresholds shown generally equal the applicable standard deduction amounts."
      },
      {
        "id": "v1-019",
        "q": "How much extra time can the unused pre-April-15 period add to the 180-day combat-zone extension?",
        "a": "Up to about an additional 3½ months."
      },
      {
        "id": "v1-020",
        "q": "What is the purpose of the additional 'other' box near the top of the 2025 Form 1040?",
        "a": "It is a box the IRS can use for another purpose if needed."
      },
      {
        "id": "v1-021",
        "q": "What credit-related information is newly shown for dependents on the 2025 Form 1040?",
        "a": "Checkboxes indicating whether certain credits are being claimed for that dependent."
      },
      {
        "id": "v1-022",
        "q": "Under the special student closer-connection discussion, what must be true about the student's intent to remain in the U.S.?",
        "a": "The student is temporarily present and does not intend to stay in the United States."
      },
      {
        "id": "v1-023",
        "q": "Who generally uses Form 1040-NR?",
        "a": "Nonresident aliens who are required to file a U.S. tax return."
      },
      {
        "id": "v1-024",
        "q": "What is the ultimate purpose of the individual tax-return calculation?",
        "a": "To determine whether the taxpayer owes the IRS money or has an overpayment/refund."
      },
      {
        "id": "v1-025",
        "q": "What is the starting point in the tax-return flow?",
        "a": "Gross income."
      },
      {
        "id": "v1-026",
        "q": "At this point in the tax-return flow, what does gross income mean?",
        "a": "The taxpayer's income before subtracting adjustments and deductions."
      },
      {
        "id": "v1-027",
        "q": "What is subtracted from gross income first?",
        "a": "Adjustments to income."
      },
      {
        "id": "v1-028",
        "q": "Gross income minus adjustments to income equals what?",
        "a": "Adjusted gross income (AGI)."
      },
      {
        "id": "v1-029",
        "q": "Why is AGI an important checkpoint?",
        "a": "Many provisions of the tax law refer back to AGI."
      },
      {
        "id": "v1-030",
        "q": "What is generally subtracted from AGI next?",
        "a": "Deductions."
      },
      {
        "id": "v1-031",
        "q": "AGI minus deductions produces what?",
        "a": "Taxable income."
      },
      {
        "id": "v1-032",
        "q": "How is income tax calculated from taxable income?",
        "a": "By using tax tables or tax-rate schedules."
      },
      {
        "id": "v1-033",
        "q": "What can reduce income tax after the initial tax calculation?",
        "a": "Tax credits."
      },
      {
        "id": "v1-034",
        "q": "What may have to be added to income tax?",
        "a": "Other taxes."
      },
      {
        "id": "v1-035",
        "q": "Income tax minus applicable credits plus other taxes equals what?",
        "a": "Total tax."
      },
      {
        "id": "v1-036",
        "q": "What is subtracted from total tax?",
        "a": "Tax payments and refundable credits."
      },
      {
        "id": "v1-037",
        "q": "Give an example of a tax payment subtracted from total tax.",
        "a": "Federal income-tax withholding from a job."
      },
      {
        "id": "v1-038",
        "q": "What other common tax payment is subtracted from total tax?",
        "a": "Estimated tax payments."
      },
      {
        "id": "v1-039",
        "q": "How are refundable tax credits treated in the tax-return flow?",
        "a": "As payments."
      },
      {
        "id": "v1-040",
        "q": "What happens if total payments exceed total tax?",
        "a": "The taxpayer has an overpayment/refund."
      },
      {
        "id": "v1-041",
        "q": "What happens if total tax exceeds total payments?",
        "a": "The taxpayer has an amount due to the IRS."
      },
      {
        "id": "v1-042",
        "q": "What basic information appears at the top of Form 1040?",
        "a": "Name, Social Security number, address, filing status, checkboxes, and dependent information."
      },
      {
        "id": "v1-043",
        "q": "Where are the taxpayer's various types of income reported on Form 1040?",
        "a": "In the income section of the return."
      },
      {
        "id": "v1-044",
        "q": "Where do adjustments to income primarily come from?",
        "a": "Schedule 1, with the total carried to Form 1040."
      },
      {
        "id": "v1-045",
        "q": "What important figure appears near the bottom of page 1 of Form 1040?",
        "a": "Adjusted gross income (AGI)."
      },
      {
        "id": "v1-046",
        "q": "What figure is carried again onto page 2 of Form 1040?",
        "a": "AGI."
      },
      {
        "id": "v1-047",
        "q": "What appears after AGI on page 2?",
        "a": "Additional checkboxes and deductions."
      },
      {
        "id": "v1-048",
        "q": "What is reported on Form 1040 line 15?",
        "a": "Taxable income."
      },
      {
        "id": "v1-049",
        "q": "What is reported on Form 1040 line 16?",
        "a": "Tax."
      },
      {
        "id": "v1-050",
        "q": "What comes after the initial tax calculation on page 2?",
        "a": "Tax credits and other taxes."
      },
      {
        "id": "v1-051",
        "q": "What follows total tax on Form 1040?",
        "a": "Payments and refundable credits."
      },
      {
        "id": "v1-052",
        "q": "What does the return determine after comparing total payments with total tax?",
        "a": "Refund/overpayment or amount due."
      },
      {
        "id": "v1-053",
        "q": "What banking information can be entered to receive a refund electronically?",
        "a": "Bank routing number and account number."
      },
      {
        "id": "v1-054",
        "q": "Can an amount owed also be withdrawn electronically from a bank account?",
        "a": "Yes."
      },
      {
        "id": "v1-055",
        "q": "What is the third-party designee section used for?",
        "a": "To authorize the IRS to discuss that particular return with the designated person, such as the preparer."
      },
      {
        "id": "v1-056",
        "q": "What information can the preparer enter in the third-party designee section?",
        "a": "The preparer's name and phone number."
      },
      {
        "id": "v1-057",
        "q": "Does the taxpayer have to agree to the third-party designation?",
        "a": "Yes."
      },
      {
        "id": "v1-058",
        "q": "What appears at the bottom of page 2 of Form 1040?",
        "a": "Signature blocks for the taxpayer and paid preparer."
      },
      {
        "id": "v1-059",
        "q": "Under what legal declaration are the taxpayer and preparer signing Form 1040?",
        "a": "Under penalties of perjury."
      },
      {
        "id": "v1-060",
        "q": "What does signing under penalties of perjury mean in practical terms?",
        "a": "The signer declares that, to the best of their knowledge, the return has been examined and is true and correct."
      },
      {
        "id": "v1-061",
        "q": "Is Form 1040 necessarily the only form in an individual tax return?",
        "a": "No. Many schedules and additional forms may be attached."
      },
      {
        "id": "v1-062",
        "q": "What does “SR” in Form 1040-SR stand for?",
        "a": "Senior."
      },
      {
        "id": "v1-063",
        "q": "For whom was Form 1040-SR designed?",
        "a": "Taxpayers age 65 or older."
      },
      {
        "id": "v1-064",
        "q": "What is the main substantive difference between Form 1040 and Form 1040-SR?",
        "a": "There is essentially no substantive tax difference; 1040-SR uses larger print."
      },
      {
        "id": "v1-065",
        "q": "Does Form 1040-SR report different income from Form 1040?",
        "a": "No."
      },
      {
        "id": "v1-066",
        "q": "Does Form 1040-SR use different deductions from Form 1040?",
        "a": "No."
      },
      {
        "id": "v1-067",
        "q": "Does Form 1040-SR give a different standard deduction merely because that form is used?",
        "a": "No."
      },
      {
        "id": "v1-068",
        "q": "Is the tax liability different solely because a taxpayer uses Form 1040-SR?",
        "a": "No."
      },
      {
        "id": "v1-069",
        "q": "Is the refund or amount due different solely because Form 1040-SR is used?",
        "a": "No."
      },
      {
        "id": "v1-070",
        "q": "Why does Form 1040-SR take three main pages rather than two?",
        "a": "The larger font requires more space."
      },
      {
        "id": "v1-071",
        "q": "What is on the fourth page of Form 1040-SR?",
        "a": "A reference chart showing standard deductions under different circumstances."
      },
      {
        "id": "v1-072",
        "q": "Why is Form 1040-SR especially relevant to paper filers?",
        "a": "Its larger print is easier to read."
      },
      {
        "id": "v1-073",
        "q": "Does a taxpayer age 65+ have to use Form 1040-SR?",
        "a": "No. It is voluntary."
      },
      {
        "id": "v1-074",
        "q": "Can a preparer use an ordinary Form 1040 for a taxpayer age 65+?",
        "a": "Yes."
      },
      {
        "id": "v1-075",
        "q": "Why might a preparer still provide a client's copy using Form 1040-SR?",
        "a": "The client may appreciate the larger print."
      },
      {
        "id": "v1-076",
        "q": "Does the basic Form 1040 discussion also apply to Form 1040-SR?",
        "a": "Yes; both produce the same tax result."
      },
      {
        "id": "v1-077",
        "q": "What is a strong starting point when preparing the current-year return?",
        "a": "Obtain and review the prior-year tax return."
      },
      {
        "id": "v1-078",
        "q": "If you prepared the client's prior-year return, what should you do with it before preparing this year's return?",
        "a": "Review it."
      },
      {
        "id": "v1-079",
        "q": "If you did not prepare last year's return, what should you ask the taxpayer for?",
        "a": "A copy of the prior-year return."
      },
      {
        "id": "v1-080",
        "q": "What basic information can the prior-year return provide?",
        "a": "Names, address, Social Security numbers, and other taxpayer information."
      },
      {
        "id": "v1-081",
        "q": "Should prior-year basic information simply be copied without verification?",
        "a": "No. Verify it because information can change."
      },
      {
        "id": "v1-082",
        "q": "What basic taxpayer item commonly changes and should be reverified each year?",
        "a": "The taxpayer's address."
      },
      {
        "id": "v1-083",
        "q": "How can last year's return help identify documents expected this year?",
        "a": "Taxpayers often receive similar forms from year to year, such as W-2s, 1099s, and K-1s."
      },
      {
        "id": "v1-084",
        "q": "Name one carryover that may be discovered from a prior-year return.",
        "a": "A net operating loss carryover."
      },
      {
        "id": "v1-085",
        "q": "What other loss carryover may appear on a prior-year return?",
        "a": "A capital loss carryover."
      },
      {
        "id": "v1-086",
        "q": "What recurring tax item may need to carry forward from a prior year?",
        "a": "Depreciation."
      },
      {
        "id": "v1-087",
        "q": "Why should the completed current return be compared with the prior-year return?",
        "a": "To identify unusual changes and possible omissions or mistakes."
      },
      {
        "id": "v1-088",
        "q": "What should a large unexplained year-to-year discrepancy cause the preparer to do?",
        "a": "Investigate why the amount changed and verify that nothing was missed."
      },
      {
        "id": "v1-089",
        "q": "Is possession of last year's tax return absolutely required to prepare this year's return?",
        "a": "No. It is very helpful, but the current return can still be prepared without it."
      },
      {
        "id": "v1-090",
        "q": "What must a preparer do after discovering an error on the client's prior return?",
        "a": "Inform the client and explain the consequences."
      },
      {
        "id": "v1-091",
        "q": "Is the preparer automatically required to correct a prior-year error?",
        "a": "No."
      },
      {
        "id": "v1-092",
        "q": "Can a prior-return error result in additional tax owed?",
        "a": "Yes."
      },
      {
        "id": "v1-093",
        "q": "What can accompany additional tax resulting from a prior-year error?",
        "a": "Interest and penalties."
      },
      {
        "id": "v1-094",
        "q": "Can a prior-return error instead result in an additional refund?",
        "a": "Yes."
      },
      {
        "id": "v1-095",
        "q": "If an amended return produces an old overpayment, what can the IRS pay in addition to the refund?",
        "a": "Interest."
      },
      {
        "id": "v1-096",
        "q": "Who decides whether to amend the prior return?",
        "a": "The taxpayer/client."
      },
      {
        "id": "v1-097",
        "q": "Can the preparer force the client to amend a routine erroneous return?",
        "a": "No."
      },
      {
        "id": "v1-098",
        "q": "If the client chooses not to amend a routine error, should the preparer report the client to the IRS?",
        "a": "No."
      },
      {
        "id": "v1-099",
        "q": "What confidentiality concept applies between tax practitioners and clients?",
        "a": "Tax practitioner/client confidentiality or privilege."
      },
      {
        "id": "v1-100",
        "q": "Does a tax preparer work for the IRS?",
        "a": "No."
      },
      {
        "id": "v1-101",
        "q": "Can fraud or criminal conduct create different practitioner issues from an ordinary tax-return mistake?",
        "a": "Yes."
      },
      {
        "id": "v1-102",
        "q": "What form is used to amend an individual income-tax return?",
        "a": "Form 1040-X."
      },
      {
        "id": "v1-103",
        "q": "Under the special student closer-connection discussion, where must the student's tax home remain?",
        "a": "In another country."
      },
      {
        "id": "v1-104",
        "q": "What duty does an enrolled agent have concerning information supplied by the client?",
        "a": "Due diligence."
      },
      {
        "id": "v1-105",
        "q": "Does due diligence mean the preparer must audit the taxpayer?",
        "a": "No."
      },
      {
        "id": "v1-106",
        "q": "What must the preparer believe about the completed return?",
        "a": "To the best of the preparer's knowledge, it is true and correct."
      },
      {
        "id": "v1-107",
        "q": "May a preparer generally rely on information provided by the taxpayer?",
        "a": "Yes, if it appears reasonable based on the taxpayer's circumstances."
      },
      {
        "id": "v1-108",
        "q": "Must a taxpayer generally prove every statement or number they give the preparer?",
        "a": "No."
      },
      {
        "id": "v1-109",
        "q": "Are there circumstances where the IRS specifically requires evidence?",
        "a": "Yes, including due-diligence requirements for certain credits and other situations."
      },
      {
        "id": "v1-110",
        "q": "What informal test can a preparer use when client information seems suspicious or implausible?",
        "a": "The “smell test.”"
      },
      {
        "id": "v1-111",
        "q": "What should a preparer do if something does not pass the smell test?",
        "a": "Ask additional questions and investigate the inconsistency."
      },
      {
        "id": "v1-112",
        "q": "What professional standard is used to evaluate what a preparer should do?",
        "a": "What a reasonable, well-informed tax preparer would do under the circumstances."
      },
      {
        "id": "v1-113",
        "q": "In the due-diligence example, how much does the taxpayer earn from their job?",
        "a": "$50,000."
      },
      {
        "id": "v1-114",
        "q": "In the due-diligence example, what charitable contribution does the taxpayer claim?",
        "a": "$40,000."
      },
      {
        "id": "v1-115",
        "q": "Why does the $40,000 contribution warrant follow-up?",
        "a": "It appears unusually large compared with $50,000 of income and no apparent significant savings or investments."
      },
      {
        "id": "v1-116",
        "q": "What type of evidence might the preparer ask for in that charitable-contribution example?",
        "a": "A receipt or other documentation supporting the contribution."
      },
      {
        "id": "v1-117",
        "q": "If client information is reasonable and no rule requires proof, what may the preparer generally do?",
        "a": "Rely on the client's information."
      },
      {
        "id": "v1-118",
        "q": "What broad categories of information does a preparer need?",
        "a": "Income, expenses/deductions, credits, asset basis, and other identifying/tax information."
      },
      {
        "id": "v1-119",
        "q": "Why is an asset's basis important?",
        "a": "It is needed to determine taxable gain or loss when the asset is sold."
      },
      {
        "id": "v1-120",
        "q": "At its simplest, what does basis often begin with?",
        "a": "How much the taxpayer paid for the asset."
      },
      {
        "id": "v1-121",
        "q": "Should the preparer ask about both taxable and nontaxable income?",
        "a": "Yes. The preparer needs information about the taxpayer's worldwide taxable and nontaxable income."
      },
      {
        "id": "v1-122",
        "q": "Why ask about nontaxable income?",
        "a": "Some nontaxable amounts may still need to be reported or may affect other tax calculations."
      },
      {
        "id": "v1-123",
        "q": "What does Form W-2 generally report?",
        "a": "Wages/earnings and amounts withheld by an employer."
      },
      {
        "id": "v1-124",
        "q": "What types of income can Forms 1099 report?",
        "a": "Examples include interest, dividends, and nonemployee compensation."
      },
      {
        "id": "v1-125",
        "q": "From what entities can Schedule K-1 come?",
        "a": "S corporations, partnerships, trusts, and estates."
      },
      {
        "id": "v1-126",
        "q": "What can a Schedule K-1 report?",
        "a": "Items of income and expense/deduction allocated to the taxpayer."
      },
      {
        "id": "v1-127",
        "q": "What financial statements might help document investments?",
        "a": "Bank and brokerage statements."
      },
      {
        "id": "v1-128",
        "q": "What taxpayer-created records might be relevant for a small business?",
        "a": "Bookkeeping records, spreadsheets, receipts, and similar records."
      },
      {
        "id": "v1-129",
        "q": "What family of forms commonly reports expenses rather than income?",
        "a": "Forms 1098."
      },
      {
        "id": "v1-130",
        "q": "What does a mortgage Form 1098 generally show?",
        "a": "Mortgage interest paid."
      },
      {
        "id": "v1-131",
        "q": "What does Form 1098-T generally relate to?",
        "a": "College tuition/education information."
      },
      {
        "id": "v1-132",
        "q": "Besides forms, what can substantiate deductible expenses?",
        "a": "Receipts, bank statements, canceled checks, and taxpayer records."
      },
      {
        "id": "v1-133",
        "q": "What real-estate documents can help establish basis?",
        "a": "Closing statements from the purchase and sale."
      },
      {
        "id": "v1-134",
        "q": "What records can help establish basis in stocks, bonds, or mutual funds?",
        "a": "Brokerage statements and applicable tax forms."
      },
      {
        "id": "v1-135",
        "q": "What form can be relevant to employer stock and basis?",
        "a": "Form 3922."
      },
      {
        "id": "v1-136",
        "q": "What other records can help establish asset basis?",
        "a": "Receipts, canceled checks, appraisals, and other supporting records."
      },
      {
        "id": "v1-137",
        "q": "What question should a preparer routinely ask about IRS correspondence?",
        "a": "Whether the client received any IRS letters or notices."
      },
      {
        "id": "v1-138",
        "q": "Why should the preparer obtain IRS notices from prior years?",
        "a": "The IRS may have adjusted figures on a previous return that affect the current return."
      },
      {
        "id": "v1-139",
        "q": "Does every IRS correction require the taxpayer to file an amended return?",
        "a": "No. The IRS may make an adjustment itself and notify the taxpayer."
      },
      {
        "id": "v1-140",
        "q": "How can school records be relevant to a return?",
        "a": "They may help establish a child's identity, age, school attendance, or eligibility for tax benefits."
      },
      {
        "id": "v1-141",
        "q": "Why might a preparer copy a client's driver's license or other official ID?",
        "a": "To verify identity and reduce identity-theft or fraud risk."
      },
      {
        "id": "v1-142",
        "q": "What identification should generally be obtained from a new client the preparer does not know?",
        "a": "At least one form of official identification."
      },
      {
        "id": "v1-143",
        "q": "Who generally files Form 1040 if filing requirements are met?",
        "a": "A U.S. citizen or resident of the United States or Puerto Rico."
      },
      {
        "id": "v1-144",
        "q": "What primarily determines whether most taxpayers must file?",
        "a": "The amount of their income, together with filing status, age, and dependency status."
      },
      {
        "id": "v1-145",
        "q": "Can a taxpayer be required to file even if income is below the normal threshold?",
        "a": "Yes. Certain special situations require filing regardless of income."
      },
      {
        "id": "v1-146",
        "q": "What return may a nonresident alien need to file instead?",
        "a": "Form 1040-NR."
      },
      {
        "id": "v1-147",
        "q": "What is gross income for filing-requirement purposes?",
        "a": "Income received in money, goods, property, or services that is not exempt from tax."
      },
      {
        "id": "v1-148",
        "q": "Can gross income include foreign-source income?",
        "a": "Yes, when applicable to the taxpayer."
      },
      {
        "id": "v1-149",
        "q": "Can taxable gain from selling a home be included in gross income?",
        "a": "Yes, to the extent it isn't excluded from income."
      },
      {
        "id": "v1-150",
        "q": "Does gross income include the taxable portion of Social Security?",
        "a": "Yes."
      },
      {
        "id": "v1-151",
        "q": "For filing-threshold purposes, does business gross income include business losses?",
        "a": "No. Gross business income is included; business losses are not included in gross income for this definition."
      },
      {
        "id": "v1-152",
        "q": "For this filing-threshold definition, are capital gains included?",
        "a": "Yes."
      },
      {
        "id": "v1-153",
        "q": "For this filing-threshold definition, are capital losses included?",
        "a": "No."
      },
      {
        "id": "v1-154",
        "q": "What are the two broad types of gross income used in these filing rules?",
        "a": "Earned income and unearned income."
      },
      {
        "id": "v1-155",
        "q": "Give common examples of earned income.",
        "a": "Salaries, wages, tips, professional fees, and business income."
      },
      {
        "id": "v1-156",
        "q": "How are taxable scholarships and grants classified for these filing-requirement rules?",
        "a": "Earned income."
      },
      {
        "id": "v1-157",
        "q": "Give common examples of unearned income.",
        "a": "Taxable interest, dividends, capital gains, unemployment compensation, taxable Social Security, pensions, annuities, and unearned trust distributions."
      },
      {
        "id": "v1-158",
        "q": "Why are current pension and Social Security payments considered unearned income even though the taxpayer worked to earn the benefits?",
        "a": "The taxpayer performed the work in prior years, not in the current year."
      },
      {
        "id": "v1-159",
        "q": "Earned income plus unearned income equals what?",
        "a": "Gross income."
      },
      {
        "id": "v1-160",
        "q": "What is the 2025 filing threshold for a single taxpayer under 65?",
        "a": "Gross income of at least $15,750."
      },
      {
        "id": "v1-161",
        "q": "What is the 2025 filing threshold for a single taxpayer age 65+?",
        "a": "$17,750."
      },
      {
        "id": "v1-162",
        "q": "What is the threshold for MFJ when both spouses are under 65?",
        "a": "$31,500."
      },
      {
        "id": "v1-163",
        "q": "What is the MFJ threshold when one spouse is age 65+?",
        "a": "$33,100."
      },
      {
        "id": "v1-164",
        "q": "What is the MFJ threshold when both spouses are age 65+?",
        "a": "$34,700."
      },
      {
        "id": "v1-165",
        "q": "What is the filing threshold for married filing separately?",
        "a": "$5 of gross income."
      },
      {
        "id": "v1-166",
        "q": "What is the head-of-household threshold under age 65?",
        "a": "$23,625."
      },
      {
        "id": "v1-167",
        "q": "What is the head-of-household threshold age 65+?",
        "a": "$25,625."
      },
      {
        "id": "v1-168",
        "q": "What is the qualifying-surviving-spouse threshold under age 65?",
        "a": "$31,500."
      },
      {
        "id": "v1-169",
        "q": "What is the qualifying-surviving-spouse threshold age 65+?",
        "a": "$33,100."
      },
      {
        "id": "v1-170",
        "q": "Why is the basic MFJ filing threshold exactly twice the Single threshold?",
        "a": "$31,500 is exactly twice $15,750."
      },
      {
        "id": "v1-171",
        "q": "Why does qualifying surviving spouse use the same basic threshold as MFJ?",
        "a": "Qualifying surviving spouse generally receives the same tax-rate and standard-deduction treatment as MFJ."
      },
      {
        "id": "v1-172",
        "q": "What is the relationship between most filing thresholds and the standard deduction?",
        "a": "For most filing statuses, the threshold generally corresponds to the applicable basic standard deduction."
      },
      {
        "id": "v1-173",
        "q": "What major exception exists to the general relationship between filing thresholds and the standard deduction?",
        "a": "Married Filing Separately, where the filing threshold is only $5."
      },
      {
        "id": "v1-174",
        "q": "Who does NOT use the “most taxpayers” filing-threshold chart?",
        "a": "Someone who can be claimed as another taxpayer's dependent."
      },
      {
        "id": "v1-175",
        "q": "For a single dependent under 65 and not blind, what unearned income triggers filing?",
        "a": "More than $1,350."
      },
      {
        "id": "v1-176",
        "q": "For a single dependent under 65 and not blind, what earned income triggers filing?",
        "a": "More than $15,750."
      },
      {
        "id": "v1-177",
        "q": "What gross-income test also applies to a single dependent under 65/not blind?",
        "a": "Gross income greater than the larger of $1,350 or earned income + $450."
      },
      {
        "id": "v1-178",
        "q": "Why is there a combined gross-income test for dependents?",
        "a": "To catch taxpayers whose mix of earned and unearned income doesn't individually exceed either separate threshold but is high enough in combination to require filing."
      },
      {
        "id": "v1-179",
        "q": "For a single dependent age 65+ OR blind, what unearned-income threshold applies?",
        "a": "More than $3,350."
      },
      {
        "id": "v1-180",
        "q": "For a single dependent age 65+ OR blind, what earned-income threshold applies?",
        "a": "More than $17,750."
      },
      {
        "id": "v1-181",
        "q": "What combined test applies to a single dependent age 65+ OR blind?",
        "a": "Gross income greater than the larger of $3,350 or earned income + $2,450."
      },
      {
        "id": "v1-182",
        "q": "For a single dependent who is BOTH age 65+ and blind, what unearned-income figure applies?",
        "a": "More than $5,350."
      },
      {
        "id": "v1-183",
        "q": "For a single dependent who is BOTH age 65+ and blind, what earned-income figure applies?",
        "a": "More than $19,750."
      },
      {
        "id": "v1-184",
        "q": "For a married dependent under 65/not blind, what unearned-income threshold applies?",
        "a": "More than $1,350."
      },
      {
        "id": "v1-185",
        "q": "For a married dependent under 65/not blind, what earned-income threshold applies?",
        "a": "More than $15,750."
      },
      {
        "id": "v1-186",
        "q": "What combined-income test applies to a married dependent under 65/not blind?",
        "a": "Gross income greater than the larger of $1,350 or earned income + $450."
      },
      {
        "id": "v1-187",
        "q": "What extra $5 rule applies to married dependents?",
        "a": "They must file if gross income is at least $5 and their spouse files separately and itemizes deductions."
      },
      {
        "id": "v1-188",
        "q": "For a married dependent age 65+ OR blind, what unearned-income threshold applies?",
        "a": "More than $2,950."
      },
      {
        "id": "v1-189",
        "q": "For a married dependent age 65+ OR blind, what earned-income threshold applies?",
        "a": "More than $17,350."
      },
      {
        "id": "v1-190",
        "q": "What combined-income test applies to a married dependent age 65+ OR blind?",
        "a": "More than the larger of $2,950 or earned income (up to $15,300) + $2,050."
      },
      {
        "id": "v1-191",
        "q": "For a married dependent both age 65+ AND blind, what unearned threshold applies?",
        "a": "More than $4,550."
      },
      {
        "id": "v1-192",
        "q": "For a married dependent both age 65+ AND blind, what earned threshold applies?",
        "a": "More than $18,950."
      },
      {
        "id": "v1-193",
        "q": "In the Johnny example, Johnny is a single dependent with only $10,000 of job earnings. Must he file based on those facts?",
        "a": "No. His earned income is below $15,750 and he has no unearned income."
      },
      {
        "id": "v1-194",
        "q": "What immigration-law condition is part of the special student closer-connection discussion?",
        "a": "The student must be following the applicable U.S. immigration laws."
      },
      {
        "id": "v1-195",
        "q": "If a taxpayer owes Alternative Minimum Tax, can filing be required despite low income?",
        "a": "Yes."
      },
      {
        "id": "v1-196",
        "q": "Can additional tax on a qualified retirement plan create a filing requirement?",
        "a": "Yes."
      },
      {
        "id": "v1-197",
        "q": "Can owing household employment taxes require Form 1040?",
        "a": "Yes."
      },
      {
        "id": "v1-198",
        "q": "Can unreported-tip Social Security or Medicare tax create a filing requirement?",
        "a": "Yes."
      },
      {
        "id": "v1-199",
        "q": "What if an employer paid wages but failed to withhold required Social Security/Medicare tax?",
        "a": "The taxpayer may be required to file Form 1040 to report/pay it."
      },
      {
        "id": "v1-200",
        "q": "Can uncollected Social Security/Medicare tax on reported tips create a filing requirement?",
        "a": "Yes."
      },
      {
        "id": "v1-201",
        "q": "Can tax associated with group-term life insurance create a filing requirement?",
        "a": "Yes."
      },
      {
        "id": "v1-202",
        "q": "Can additional HSA taxes create a filing requirement?",
        "a": "Yes."
      },
      {
        "id": "v1-203",
        "q": "Can recapture taxes such as depreciation recapture create a filing requirement?",
        "a": "Yes."
      },
      {
        "id": "v1-204",
        "q": "Can receiving a distribution from an HSA or certain similar medical accounts require filing?",
        "a": "Yes."
      },
      {
        "id": "v1-205",
        "q": "What self-employment threshold can require filing regardless of the normal gross-income threshold?",
        "a": "$400 or more of net earnings from self-employment."
      },
      {
        "id": "v1-206",
        "q": "Why can a taxpayer with at least $400 of net self-employment earnings need to file even with no income-tax liability?",
        "a": "Because self-employment tax may be due."
      },
      {
        "id": "v1-207",
        "q": "What special church-employee wage threshold can trigger filing/self-employment-tax obligations?",
        "a": "$108.28 or more of qualifying church employee income."
      },
      {
        "id": "v1-208",
        "q": "Why is $108.28 associated with certain church employees?",
        "a": "Certain church employees are exempt from having Social Security and Medicare taxes withheld from their paychecks; if they have at least $108.28 of qualifying church-employee income, they may be required to file."
      },
      {
        "id": "v1-209",
        "q": "Do advance payments of the Premium Tax Credit generally require a return to be filed?",
        "a": "Yes."
      },
      {
        "id": "v1-210",
        "q": "What obscure foreign-income provision can create a filing requirement?",
        "a": "Required income inclusions under IRC §965 involving deferred foreign income."
      },
      {
        "id": "v1-211",
        "q": "Does the old dependency exemption still exist?",
        "a": "No. It used to provide a deduction for each dependent, but it no longer exists."
      },
      {
        "id": "v1-212",
        "q": "What clean-vehicle transaction can create a filing requirement?",
        "a": "Purchasing an eligible new/used clean vehicle and transferring the tax credit to the registered dealer to reduce the purchase price."
      },
      {
        "id": "v1-213",
        "q": "What are Joey's 2025 income amounts in the example?",
        "a": "$12,000 wages + $2,500 dividends + $1,000 interest = $15,500 gross income."
      },
      {
        "id": "v1-214",
        "q": "Is Joey a dependent in the example?",
        "a": "No. He is 21, single, and cannot be claimed by anyone else."
      },
      {
        "id": "v1-215",
        "q": "Must Joey file based solely on his $15,500 gross income?",
        "a": "No. The single-under-65 threshold is $15,750."
      },
      {
        "id": "v1-216",
        "q": "Can Joey still voluntarily file even though he isn't required to?",
        "a": "Yes."
      },
      {
        "id": "v1-217",
        "q": "Why might Joey voluntarily file if federal income tax was withheld from his wages?",
        "a": "Filing is necessary to claim the refund of excess withholding."
      },
      {
        "id": "v1-218",
        "q": "What is another reason to file voluntarily below the normal filing threshold?",
        "a": "To claim tax credits that require a filed return, such as the Earned Income Credit."
      },
      {
        "id": "v1-219",
        "q": "Do filing thresholds prohibit taxpayers below the threshold from filing?",
        "a": "No. They determine when filing is required, not when it is permitted."
      },
      {
        "id": "v1-220",
        "q": "What are Monica's income amounts in the example?",
        "a": "$12,000 from a grass-cutting business + $2,500 dividends + $1,000 interest = $15,500."
      },
      {
        "id": "v1-221",
        "q": "Why must Monica file even though her $15,500 is below the general $15,750 single threshold?",
        "a": "Her business produces self-employment earnings well over the $400 filing threshold."
      },
      {
        "id": "v1-222",
        "q": "What key distinction separates Joey's and Monica's examples?",
        "a": "Joey's $12,000 is wages from a job; Monica's $12,000 is self-employment/business income."
      },
      {
        "id": "v1-223",
        "q": "What is the general Form 1040 filing deadline?",
        "a": "The 15th day of the fourth month after the end of the tax year—normally April 15."
      },
      {
        "id": "v1-224",
        "q": "What happens if a federal tax deadline falls on a weekend or holiday?",
        "a": "The deadline moves to the next business day."
      },
      {
        "id": "v1-225",
        "q": "When was the 2025 Form 1040 due?",
        "a": "April 15, 2026."
      },
      {
        "id": "v1-226",
        "q": "Does the weekend/holiday deadline rule apply only to April 15?",
        "a": "No. It applies to tax-return due dates generally."
      },
      {
        "id": "v1-227",
        "q": "What form requests the ordinary automatic individual filing extension?",
        "a": "Form 4868."
      },
      {
        "id": "v1-228",
        "q": "How long is the ordinary automatic Form 1040 filing extension?",
        "a": "Six months."
      },
      {
        "id": "v1-229",
        "q": "What is the usual extended due date after a timely Form 4868?",
        "a": "October 15."
      },
      {
        "id": "v1-230",
        "q": "Why is Form 4868 called an “automatic” extension?",
        "a": "No special reason or IRS approval showing cause is required; timely filing of the form grants the extension."
      },
      {
        "id": "v1-231",
        "q": "Must Form 4868 actually be filed to receive the ordinary six-month extension?",
        "a": "Yes."
      },
      {
        "id": "v1-232",
        "q": "Is Form 4868 an extension of time to pay tax?",
        "a": "No. It is an extension to file, not an extension to pay."
      },
      {
        "id": "v1-233",
        "q": "When is tax generally still due if the taxpayer extends the return?",
        "a": "By the original April 15 payment deadline."
      },
      {
        "id": "v1-234",
        "q": "What should the taxpayer/preparer do if exact tax cannot yet be calculated at extension time?",
        "a": "Make a reasonable estimate using the best available information."
      },
      {
        "id": "v1-235",
        "q": "What should accompany Form 4868 if the taxpayer is expected to owe?",
        "a": "Payment of the estimated balance due."
      },
      {
        "id": "v1-236",
        "q": "What happens if insufficient tax is paid by the original due date?",
        "a": "Interest and potentially failure-to-pay penalties may accrue."
      },
      {
        "id": "v1-237",
        "q": "If the taxpayer expects a refund, must tax be paid with Form 4868?",
        "a": "No."
      },
      {
        "id": "v1-238",
        "q": "What was the extended deadline for a 2025 return using Form 4868?",
        "a": "October 15, 2026."
      },
      {
        "id": "v1-239",
        "q": "Who can receive the special automatic two-month overseas filing extension?",
        "a": "A U.S. citizen or resident living outside the United States whose main place of business or military post of duty is outside the United States."
      },
      {
        "id": "v1-240",
        "q": "How long is the special overseas automatic extension?",
        "a": "Two months."
      },
      {
        "id": "v1-241",
        "q": "What was the resulting deadline for the 2025 return?",
        "a": "June 15, 2026."
      },
      {
        "id": "v1-242",
        "q": "Is Form 4868 required merely to obtain the initial two-month overseas extension?",
        "a": "No."
      },
      {
        "id": "v1-243",
        "q": "Does the automatic overseas filing extension generally extend the tax-payment deadline?",
        "a": "No."
      },
      {
        "id": "v1-244",
        "q": "What should an overseas taxpayer expecting to owe generally do by April 15?",
        "a": "Estimate and pay the tax due."
      },
      {
        "id": "v1-245",
        "q": "What do practitioners often do for overseas clients who expect to owe?",
        "a": "File Form 4868 by April 15 and send the estimated payment."
      },
      {
        "id": "v1-246",
        "q": "Can an overseas taxpayer obtain a further extension to October 15?",
        "a": "Yes, by filing Form 4868 by the applicable June deadline."
      },
      {
        "id": "v1-247",
        "q": "Does merely being on vacation outside the U.S. on April 15 qualify for the special two-month extension?",
        "a": "No."
      },
      {
        "id": "v1-248",
        "q": "Does merely being abroad on a temporary business trip qualify?",
        "a": "No."
      },
      {
        "id": "v1-249",
        "q": "What matters for this special extension?",
        "a": "The taxpayer is actually living abroad and their main place of business/post of duty is abroad."
      },
      {
        "id": "v1-250",
        "q": "What happens when a taxpayer is affected by a presidentially declared disaster?",
        "a": "The IRS may postpone both filing and payment deadlines."
      },
      {
        "id": "v1-251",
        "q": "Is there one fixed statutory disaster-extension date?",
        "a": "No. The IRS announces a deadline based on the particular disaster."
      },
      {
        "id": "v1-252",
        "q": "How does the IRS commonly identify taxpayers covered by disaster relief?",
        "a": "By affected geographic areas, often counties."
      },
      {
        "id": "v1-253",
        "q": "Does disaster relief apply only to individuals?",
        "a": "No. It can apply to both individual and business taxpayers."
      },
      {
        "id": "v1-254",
        "q": "Can a taxpayer qualify because tax records are located in the disaster area even if the taxpayer lives elsewhere?",
        "a": "Yes."
      },
      {
        "id": "v1-255",
        "q": "Can qualifying disaster relief workers receive the extension?",
        "a": "Yes."
      },
      {
        "id": "v1-256",
        "q": "Who designates a combat zone for the special tax deadline rules?",
        "a": "The President."
      },
      {
        "id": "v1-257",
        "q": "Does the combat-zone extension apply only to military members?",
        "a": "No."
      },
      {
        "id": "v1-258",
        "q": "What civilian groups may qualify for combat-zone relief?",
        "a": "Civilian support personnel, Red Cross personnel, and certain war correspondents."
      },
      {
        "id": "v1-259",
        "q": "Does combat-zone relief extend both filing and payment?",
        "a": "Yes."
      },
      {
        "id": "v1-260",
        "q": "What is the basic 180-day portion of the combat-zone extension?",
        "a": "180 days after the later of the person's last day in the combat zone or the last day of a qualifying hospital stay resulting from combat-zone injury."
      },
      {
        "id": "v1-261",
        "q": "What additional period is added to the 180 days?",
        "a": "The number of days remaining before the original filing deadline when the person entered the combat zone."
      },
      {
        "id": "v1-262",
        "q": "When did Nick enter the combat zone in the example?",
        "a": "January 31, 2025."
      },
      {
        "id": "v1-263",
        "q": "When did Nick leave the combat zone in the example?",
        "a": "March 31, 2026."
      },
      {
        "id": "v1-264",
        "q": "How many basic extension days does Nick get after March 31, 2026?",
        "a": "180 days."
      },
      {
        "id": "v1-265",
        "q": "How many additional unused pre-deadline days does Nick receive?",
        "a": "74 days."
      },
      {
        "id": "v1-266",
        "q": "What is Nick's total extension in the example?",
        "a": "254 days after March 31, 2026."
      },
      {
        "id": "v1-267",
        "q": "What due date does that produce?",
        "a": "December 10, 2026."
      },
      {
        "id": "v1-268",
        "q": "Does Nick's December 10 date apply to both filing and paying?",
        "a": "Yes."
      },
      {
        "id": "v1-269",
        "q": "What is the normal failure-to-file penalty rate?",
        "a": "5% of unpaid tax for each month or part of a month the return is late."
      },
      {
        "id": "v1-270",
        "q": "What is the normal maximum failure-to-file penalty?",
        "a": "25% of the unpaid tax."
      },
      {
        "id": "v1-271",
        "q": "Does part of a month count as a full month for the failure-to-file penalty?",
        "a": "Yes."
      },
      {
        "id": "v1-272",
        "q": "If $10,000 is unpaid, what is a 5% monthly failure-to-file penalty?",
        "a": "$500 per month."
      },
      {
        "id": "v1-273",
        "q": "If a $10,000-balance return is 4 months and 1 day late, how many months of failure-to-file penalty count?",
        "a": "Five months."
      },
      {
        "id": "v1-274",
        "q": "What failure-to-file penalty results in the $10,000 example after five counted months?",
        "a": "$2,500, the 25% maximum."
      },
      {
        "id": "v1-275",
        "q": "What is the fraudulent failure-to-file rate?",
        "a": "15% per month."
      },
      {
        "id": "v1-276",
        "q": "What is the maximum fraudulent failure-to-file penalty?",
        "a": "75% of unpaid tax."
      },
      {
        "id": "v1-277",
        "q": "What special minimum applies when a 2025 individual return is more than 60 days late?",
        "a": "The smaller of $525 or 100% of the unpaid tax."
      },
      {
        "id": "v1-278",
        "q": "In the $400 unpaid-tax example more than 60 days late, what is the minimum failure-to-file penalty?",
        "a": "$400, because $400 is less than $525."
      },
      {
        "id": "v1-279",
        "q": "What happens if the taxpayer obtained an extension but misses the extended filing deadline?",
        "a": "The failure-to-file penalty is measured back from the original due date."
      },
      {
        "id": "v1-280",
        "q": "Is there a failure-to-file penalty when no tax is due?",
        "a": "Generally no, because this penalty is based on unpaid tax/balance due."
      },
      {
        "id": "v1-281",
        "q": "What is the ordinary failure-to-pay penalty?",
        "a": "0.5% of unpaid tax per month or part of a month."
      },
      {
        "id": "v1-282",
        "q": "What is the maximum ordinary failure-to-pay penalty?",
        "a": "25% of unpaid tax."
      },
      {
        "id": "v1-283",
        "q": "On $10,000 unpaid tax, what is a 0.5% monthly penalty?",
        "a": "$50 per month."
      },
      {
        "id": "v1-284",
        "q": "What 90% extension-payment rule should you remember?",
        "a": "If at least 90% of the eventual tax due is paid by the original due date and the remaining balance is paid when the return is filed, the extension-period failure-to-pay penalty is generally avoided."
      },
      {
        "id": "v1-285",
        "q": "If a taxpayer pays $10,000 with an extension but ultimately owes $11,000, is $10,000 more than 90% of $11,000?",
        "a": "Yes."
      },
      {
        "id": "v1-286",
        "q": "If there is no unpaid balance, is there a failure-to-pay penalty?",
        "a": "No."
      },
      {
        "id": "v1-287",
        "q": "If both failure-to-file and failure-to-pay penalties apply during the same month, are they simply added to 5.5%?",
        "a": "No. The failure-to-file penalty is reduced by the failure-to-pay penalty, generally producing a combined 5% during the overlap."
      },
      {
        "id": "v1-288",
        "q": "After the failure-to-file penalty reaches its maximum, can the failure-to-pay penalty continue?",
        "a": "Yes."
      },
      {
        "id": "v1-289",
        "q": "Does the special over-60-days failure-to-file minimum still matter when both penalties apply?",
        "a": "Yes."
      },
      {
        "id": "v1-290",
        "q": "Does an ordinary extension to file stop interest on unpaid tax?",
        "a": "No."
      },
      {
        "id": "v1-291",
        "q": "When would an extension prevent interest during the postponed period?",
        "a": "When the taxpayer actually has an authorized extension/postponement of time to pay, such as qualifying relief."
      },
      {
        "id": "v1-292",
        "q": "Can the IRS charge interest on penalties as well as unpaid tax?",
        "a": "Yes."
      },
      {
        "id": "v1-293",
        "q": "What benchmark are IRS underpayment interest rates based on?",
        "a": "The federal short-term rate."
      },
      {
        "id": "v1-294",
        "q": "How often is IRS interest compounded?",
        "a": "Daily."
      },
      {
        "id": "v1-295",
        "q": "How often are the applicable IRS interest rates updated?",
        "a": "Quarterly."
      },
      {
        "id": "v1-296",
        "q": "What distinction matters between the IRS interest rate and compounding?",
        "a": "The rate is updated quarterly, but interest is compounded daily."
      },
      {
        "id": "v1-297",
        "q": "When can interest sometimes be abated?",
        "a": "In limited circumstances involving an IRS error or delay."
      },
      {
        "id": "v1-298",
        "q": "Is interest abatement common?",
        "a": "No. It is relatively rare."
      },
      {
        "id": "v1-299",
        "q": "What criminal conduct is associated with the false-return/perjury rule?",
        "a": "Knowingly filing or helping file a false return or aiding fraud."
      },
      {
        "id": "v1-300",
        "q": "Is knowingly participating in tax-return fraud a felony?",
        "a": "Yes."
      },
      {
        "id": "v1-301",
        "q": "What maximum fine can apply to the false-return offense discussed here?",
        "a": "$100,000."
      },
      {
        "id": "v1-302",
        "q": "What maximum prison term can apply?",
        "a": "Up to 3 years."
      },
      {
        "id": "v1-303",
        "q": "Can both the fine and imprisonment apply?",
        "a": "Yes—$100,000 and/or up to three years."
      },
      {
        "id": "v1-304",
        "q": "Is the penalty potentially applied per count?",
        "a": "Yes."
      },
      {
        "id": "v1-305",
        "q": "Does this rule apply only to tax preparers?",
        "a": "No. It also applies to taxpayers who knowingly file false or fraudulent returns."
      },
      {
        "id": "v1-306",
        "q": "What examples of digital assets are specifically discussed?",
        "a": "Virtual currencies, NFTs, and Bitcoin."
      },
      {
        "id": "v1-307",
        "q": "What tax year do individual taxpayers use almost all the time?",
        "a": "A calendar year, January 1 through December 31."
      },
      {
        "id": "v1-308",
        "q": "What is a non-calendar business tax year commonly called?",
        "a": "A fiscal year."
      },
      {
        "id": "v1-309",
        "q": "Are non-calendar tax years possible for individuals?",
        "a": "Yes, but they are extremely rare."
      },
      {
        "id": "v1-310",
        "q": "Does a taxpayer's death during the year normally create a short individual income-tax year?",
        "a": "No. The final return generally remains a calendar-year return."
      },
      {
        "id": "v1-311",
        "q": "What new 2025 Form 1040 box relates to the combat-zone rules?",
        "a": "A box identifying the taxpayer as being in a combat zone."
      },
      {
        "id": "v1-312",
        "q": "What information is entered if the taxpayer died during 2025?",
        "a": "The applicable death box is checked and the date of death is entered."
      },
      {
        "id": "v1-313",
        "q": "What obscure new top-of-return box relates to certain automatic extensions?",
        "a": "A box used when specified tax elections create certain automatic extensions."
      },
      {
        "id": "v1-314",
        "q": "In an MFJ return, which spouse must be listed first?",
        "a": "Either spouse; there is no required order."
      },
      {
        "id": "v1-315",
        "q": "On a joint return, what does “you” mean?",
        "a": "The spouse listed first."
      },
      {
        "id": "v1-316",
        "q": "On a joint return, what does “your spouse” mean?",
        "a": "The spouse listed second."
      },
      {
        "id": "v1-317",
        "q": "Which address should generally appear on the return if the taxpayer moved after year-end?",
        "a": "The taxpayer's current address."
      },
      {
        "id": "v1-318",
        "q": "Why use the current address rather than the prior year-end address?",
        "a": "So current IRS correspondence or checks reach the taxpayer."
      },
      {
        "id": "v1-319",
        "q": "Can a foreign address be entered on Form 1040?",
        "a": "Yes."
      },
      {
        "id": "v1-320",
        "q": "What additional dependent information was added/revised on the 2025 Form 1040?",
        "a": "Boxes concerning whether the dependent lived with the taxpayer more than half the year, whether the dependent is a full-time student or permanently disabled, and applicable credits."
      },
      {
        "id": "v1-321",
        "q": "Why does the return ask whether a dependent lived with the taxpayer more than half the year?",
        "a": "Residence is relevant to dependent and other tax-benefit rules."
      },
      {
        "id": "v1-322",
        "q": "Why does the return ask whether a dependent is a full-time student or permanently disabled?",
        "a": "Those facts affect dependent eligibility."
      },
      {
        "id": "v1-323",
        "q": "What spouse-related checkbox appears in the dependent/top section?",
        "a": "Whether the taxpayer lived apart from the spouse for the last six months."
      },
      {
        "id": "v1-324",
        "q": "Why is living apart from a spouse for the last six months potentially important?",
        "a": "It is relevant to the “considered unmarried” rules for head-of-household status."
      },
      {
        "id": "v1-325",
        "q": "What identifying number must each person listed on the tax return generally have?",
        "a": "An SSN or applicable taxpayer identification number (TIN)."
      },
      {
        "id": "v1-326",
        "q": "Does the identifying-number requirement apply to dependents of all ages?",
        "a": "Yes."
      },
      {
        "id": "v1-327",
        "q": "What unusual exception allows a dependent without an SSN to be claimed?",
        "a": "A baby who was born and died during the tax year may be claimed without an SSN."
      },
      {
        "id": "v1-328",
        "q": "What does ITIN stand for?",
        "a": "Individual Taxpayer Identification Number."
      },
      {
        "id": "v1-329",
        "q": "Who generally needs an ITIN?",
        "a": "A person who needs a U.S. tax identification number but is not eligible for an SSN, including certain resident/nonresident aliens and dependents."
      },
      {
        "id": "v1-330",
        "q": "What form is used to apply for an ITIN?",
        "a": "Form W-7."
      },
      {
        "id": "v1-331",
        "q": "Does an ITIN itself authorize employment in the United States?",
        "a": "No."
      },
      {
        "id": "v1-332",
        "q": "Is an ITIN a general-purpose identification document?",
        "a": "No. It is issued for federal tax purposes."
      },
      {
        "id": "v1-333",
        "q": "What does ATIN stand for?",
        "a": "Adoption Taxpayer Identification Number."
      },
      {
        "id": "v1-334",
        "q": "Why might an adopted child need an ATIN?",
        "a": "The adoption is still pending, so an SSN cannot yet be obtained even though the child may qualify as a dependent."
      },
      {
        "id": "v1-335",
        "q": "What form is used to request an ATIN?",
        "a": "Form W-7A."
      },
      {
        "id": "v1-336",
        "q": "What does “alien” mean for U.S. federal tax purposes?",
        "a": "A person who is not a U.S. citizen."
      },
      {
        "id": "v1-337",
        "q": "What are the three alien tax-residency categories?",
        "a": "Resident alien, nonresident alien, and dual-status alien."
      },
      {
        "id": "v1-338",
        "q": "How is the new U.S.-main-home checkbox declaration made on the return?",
        "a": "Under penalties of perjury."
      },
      {
        "id": "v1-339",
        "q": "How is a resident alien generally taxed?",
        "a": "On worldwide income, like a U.S. citizen."
      },
      {
        "id": "v1-340",
        "q": "What is an alien's default tax classification before applying the residency tests?",
        "a": "Nonresident alien."
      },
      {
        "id": "v1-341",
        "q": "What two tests can generally convert an alien from nonresident to resident-alien status?",
        "a": "The green card test or substantial presence test."
      },
      {
        "id": "v1-342",
        "q": "What is the green card test?",
        "a": "Being a lawful permanent resident of the United States."
      },
      {
        "id": "v1-343",
        "q": "What document ordinarily demonstrates lawful permanent resident status?",
        "a": "A Permanent Resident Card (“green card”)."
      },
      {
        "id": "v1-344",
        "q": "Why might a preparer copy the green card?",
        "a": "It helps verify identity and establish lawful permanent-resident/resident-alien status."
      },
      {
        "id": "v1-345",
        "q": "Can someone without a green card still be a resident alien?",
        "a": "Yes, by satisfying the substantial presence test."
      },
      {
        "id": "v1-346",
        "q": "What is the first current-year requirement of the substantial presence test?",
        "a": "Physical presence in the U.S. for at least 31 days during the current year."
      },
      {
        "id": "v1-347",
        "q": "What is the weighted three-year requirement?",
        "a": "At least 183 weighted days over the current year and two preceding years."
      },
      {
        "id": "v1-348",
        "q": "How are current-year days counted?",
        "a": "100% of the days."
      },
      {
        "id": "v1-349",
        "q": "How are days from the immediately preceding year counted?",
        "a": "One-third."
      },
      {
        "id": "v1-350",
        "q": "How are days from two years prior counted?",
        "a": "One-sixth."
      },
      {
        "id": "v1-351",
        "q": "In Bjorn's example, how many days was he present in each of 2025, 2024, and 2023?",
        "a": "120 days in each year."
      },
      {
        "id": "v1-352",
        "q": "How many of Bjorn's 2025 days count?",
        "a": "120."
      },
      {
        "id": "v1-353",
        "q": "How many of Bjorn's 2024 days count?",
        "a": "40, which is one-third of 120."
      },
      {
        "id": "v1-354",
        "q": "How many of Bjorn's 2023 days count?",
        "a": "20, which is one-sixth of 120."
      },
      {
        "id": "v1-355",
        "q": "What is Bjorn's weighted three-year total?",
        "a": "180 days."
      },
      {
        "id": "v1-356",
        "q": "Does Bjorn satisfy the 183-day substantial-presence requirement?",
        "a": "No. 180 is below 183, so he is a nonresident alien under the example."
      },
      {
        "id": "v1-357",
        "q": "Are all physical-presence days necessarily counted for the substantial presence test?",
        "a": "No. Certain days are excluded."
      },
      {
        "id": "v1-358",
        "q": "Do days as an exempt foreign-government-related individual generally count?",
        "a": "No, when the statutory requirements are met."
      },
      {
        "id": "v1-359",
        "q": "What visas are associated with qualifying foreign-government-related exempt individuals?",
        "a": "A or G visas."
      },
      {
        "id": "v1-360",
        "q": "Can certain teachers or trainees have excluded presence days?",
        "a": "Yes, such as qualifying individuals temporarily present under J or Q visas."
      },
      {
        "id": "v1-361",
        "q": "Can certain foreign students have excluded presence days?",
        "a": "Yes, under the applicable F, J, M, or Q visa rules."
      },
      {
        "id": "v1-362",
        "q": "Can a professional athlete have excluded days?",
        "a": "Yes, for qualifying presence to compete in a charitable sporting event."
      },
      {
        "id": "v1-363",
        "q": "Are days necessarily counted when a visitor cannot leave the U.S. because of a medical condition that arose while in the U.S.?",
        "a": "No; qualifying medically prevented days can be excluded."
      },
      {
        "id": "v1-364",
        "q": "Give an example of the medical-condition exception to substantial-presence day counting.",
        "a": "A visitor on vacation has an automobile accident and must remain hospitalized in the United States."
      },
      {
        "id": "v1-365",
        "q": "What is the “closer connection” exception designed to recognize?",
        "a": "Someone may spend significant time in the U.S. but maintain a stronger tax/residential connection to a foreign country."
      },
      {
        "id": "v1-366",
        "q": "For the ordinary closer-connection exception, how many days may the person be physically present in the U.S. during the current year?",
        "a": "Fewer than 183 days."
      },
      {
        "id": "v1-367",
        "q": "What foreign connection must the person maintain?",
        "a": "A closer connection to a foreign country than to the United States."
      },
      {
        "id": "v1-368",
        "q": "What facts can indicate a closer connection to a foreign country?",
        "a": "Residence, family, vehicle registration, and other life connections centered in the foreign country."
      },
      {
        "id": "v1-369",
        "q": "What “tax home” condition applies?",
        "a": "The person must maintain a tax home in the foreign country."
      },
      {
        "id": "v1-370",
        "q": "What immigration-related condition applies to the ordinary closer-connection exception?",
        "a": "The person must not have taken steps toward lawful permanent-resident status."
      },
      {
        "id": "v1-371",
        "q": "Can the closer-connection concept apply when the taxpayer moves from one foreign country to another?",
        "a": "Yes, there are rules allowing a closer connection to two foreign countries."
      },
      {
        "id": "v1-372",
        "q": "Is there a specialized closer-connection rule for certain students?",
        "a": "Yes."
      },
      {
        "id": "v1-373",
        "q": "Can a qualifying foreign student potentially remain nonresident after spending 183+ days physically in the U.S.?",
        "a": "Yes, under the specialized student rules when the foreign connection and temporary status requirements are maintained."
      },
      {
        "id": "v1-374",
        "q": "How is a nonresident alien generally taxed?",
        "a": "Primarily on U.S.-source income and certain income effectively connected with a U.S. trade or business."
      },
      {
        "id": "v1-375",
        "q": "What return may a nonresident alien have to file?",
        "a": "Form 1040-NR."
      },
      {
        "id": "v1-376",
        "q": "Can a U.S. citizen or resident alien elect to treat a nonresident-alien spouse as a resident for tax purposes?",
        "a": "Yes, if the applicable requirements/election are met."
      },
      {
        "id": "v1-377",
        "q": "What is the major tax consequence of treating the nonresident spouse as a resident?",
        "a": "The spouse becomes subject to U.S. taxation on worldwide income under the election."
      },
      {
        "id": "v1-378",
        "q": "Does Form 1040-NR resemble Form 1040 structurally?",
        "a": "Yes. It includes income, AGI, deductions, tax, payments, refund, and amount due."
      },
      {
        "id": "v1-379",
        "q": "Can Form 1040-NR be filed by an estate or trust as well as an individual?",
        "a": "Yes."
      },
      {
        "id": "v1-380",
        "q": "Can most nonresident aliens take the ordinary standard deduction?",
        "a": "Generally no; most use itemized deductions instead."
      },
      {
        "id": "v1-381",
        "q": "What income is generally reported by a nonresident alien rather than worldwide income?",
        "a": "Applicable U.S.-source income and income connected with a U.S. trade or business."
      },
      {
        "id": "v1-382",
        "q": "What is a dual-status alien?",
        "a": "Someone who is a resident alien for part of the year and a nonresident alien for another part."
      },
      {
        "id": "v1-383",
        "q": "When is dual-status treatment especially common?",
        "a": "The year of arrival in the U.S. or departure from the U.S."
      },
      {
        "id": "v1-384",
        "q": "How is income taxed during the resident-alien part of a dual-status year?",
        "a": "Worldwide income is generally subject to U.S. tax."
      },
      {
        "id": "v1-385",
        "q": "How is income taxed during the nonresident-alien part of a dual-status year?",
        "a": "Generally only applicable U.S.-source/connected income."
      },
      {
        "id": "v1-386",
        "q": "For dual-status treatment, why does the date income is received matter?",
        "a": "It determines whether the taxpayer was a resident or nonresident when the income was received."
      },
      {
        "id": "v1-387",
        "q": "What are the five individual filing statuses?",
        "a": "Single, Married Filing Jointly, Married Filing Separately, Head of Household, and Qualifying Surviving Spouse."
      },
      {
        "id": "v1-388",
        "q": "What was Qualifying Surviving Spouse previously called?",
        "a": "Qualifying widow(er)."
      },
      {
        "id": "v1-389",
        "q": "When was the terminology changed to Qualifying Surviving Spouse?",
        "a": "2022."
      },
      {
        "id": "v1-390",
        "q": "What does MFJ stand for?",
        "a": "Married Filing Jointly."
      },
      {
        "id": "v1-391",
        "q": "What does MFS stand for?",
        "a": "Married Filing Separately."
      },
      {
        "id": "v1-392",
        "q": "What does HOH stand for?",
        "a": "Head of Household."
      },
      {
        "id": "v1-393",
        "q": "What does QSS stand for?",
        "a": "Qualifying Surviving Spouse."
      },
      {
        "id": "v1-394",
        "q": "What date generally determines marital status for the entire tax year?",
        "a": "December 31."
      },
      {
        "id": "v1-395",
        "q": "If a divorce becomes final on December 31, 2025, is the taxpayer treated as married for 2025?",
        "a": "No. The taxpayer is unmarried on the last day of the year."
      },
      {
        "id": "v1-396",
        "q": "If a spouse died before 2025 and the taxpayer did not remarry, is the taxpayer generally married for 2025?",
        "a": "No, although another filing status such as QSS or HOH may apply."
      },
      {
        "id": "v1-397",
        "q": "If a spouse dies during 2025, is the surviving spouse generally treated as married for 2025?",
        "a": "Yes."
      },
      {
        "id": "v1-398",
        "q": "If a couple gets married on December 31, are they generally treated as married for the entire year?",
        "a": "Yes."
      },
      {
        "id": "v1-399",
        "q": "Can a surviving spouse generally file MFJ for the year the other spouse died?",
        "a": "Yes, assuming the requirements are otherwise met."
      },
      {
        "id": "v1-400",
        "q": "Must both spouses agree to file MFJ?",
        "a": "Yes."
      },
      {
        "id": "v1-401",
        "q": "What income is reported on an MFJ return?",
        "a": "The spouses' combined income."
      },
      {
        "id": "v1-402",
        "q": "What expenses/deductions are generally included on MFJ?",
        "a": "The spouses' combined allowable items."
      },
      {
        "id": "v1-403",
        "q": "What liability rule generally applies to spouses filing jointly?",
        "a": "Joint and several liability."
      },
      {
        "id": "v1-404",
        "q": "What does joint and several liability mean?",
        "a": "Each spouse can generally be liable for 100% of the joint tax liability, not merely half."
      },
      {
        "id": "v1-405",
        "q": "Is MFJ usually more favorable for tax liability than MFS?",
        "a": "Generally yes."
      },
      {
        "id": "v1-406",
        "q": "Can professional tax software compare MFJ and MFS results?",
        "a": "Yes."
      },
      {
        "id": "v1-407",
        "q": "Can a joint return generally be amended to MFS after the filing due date has passed?",
        "a": "No."
      },
      {
        "id": "v1-408",
        "q": "If a joint return was filed before the filing deadline, can separate returns potentially replace it before that deadline?",
        "a": "Yes. After the filing deadline, the normal MFJ-to-MFS change is barred."
      },
      {
        "id": "v1-409",
        "q": "Under MFS, whose income and expenses does each spouse report?",
        "a": "Their own."
      },
      {
        "id": "v1-410",
        "q": "Under MFS, who is generally liable for the tax shown on each separate return?",
        "a": "The spouse filing that return."
      },
      {
        "id": "v1-411",
        "q": "Can a legally married taxpayer simply choose Single instead of MFJ/MFS?",
        "a": "Generally no."
      },
      {
        "id": "v1-412",
        "q": "What important exception may let a legally married taxpayer use a non-married filing status?",
        "a": "Being “considered unmarried” and qualifying for Head of Household."
      },
      {
        "id": "v1-413",
        "q": "Can an MFS return later be amended to MFJ?",
        "a": "Yes, within the normal amendment period if requirements are met."
      },
      {
        "id": "v1-414",
        "q": "What amendment period is generally available to change MFS to MFJ?",
        "a": "Generally three years from the original due date."
      },
      {
        "id": "v1-415",
        "q": "What is the general marital-status requirement for HOH?",
        "a": "The taxpayer must be unmarried or considered unmarried at year-end."
      },
      {
        "id": "v1-416",
        "q": "What home-cost requirement applies to HOH?",
        "a": "The taxpayer must pay more than half the cost of keeping up the home for the year."
      },
      {
        "id": "v1-417",
        "q": "What qualifying-person residence rule generally applies for HOH?",
        "a": "A qualifying person generally must live with the taxpayer for more than half the year."
      },
      {
        "id": "v1-418",
        "q": "Do temporary absences such as college normally count against the HOH residence test?",
        "a": "No, if the taxpayer's home remains the person's home."
      },
      {
        "id": "v1-419",
        "q": "What major exception exists to the HOH “lives with you” requirement?",
        "a": "A dependent parent does not have to live with the taxpayer."
      },
      {
        "id": "v1-420",
        "q": "What tax advantages does HOH generally have compared with Single/MFS?",
        "a": "A higher standard deduction and generally more favorable tax brackets."
      },
      {
        "id": "v1-421",
        "q": "Can a legally married taxpayer be treated as unmarried for HOH purposes?",
        "a": "Yes, if all specific “considered unmarried” tests are met."
      },
      {
        "id": "v1-422",
        "q": "Must a taxpayer seeking “considered unmarried” treatment file a separate return?",
        "a": "Yes."
      },
      {
        "id": "v1-423",
        "q": "Must the taxpayer pay more than half the cost of keeping up the home?",
        "a": "Yes."
      },
      {
        "id": "v1-424",
        "q": "How long must the spouse not have lived in the taxpayer's home?",
        "a": "The last six months of the year."
      },
      {
        "id": "v1-425",
        "q": "Does a spouse's temporary business trip during the last six months satisfy the living-apart test?",
        "a": "No. The spouse must actually maintain a separate residence/home rather than merely be temporarily absent."
      },
      {
        "id": "v1-426",
        "q": "Whose main home must the taxpayer's home be for more than half the year under the “considered unmarried” rule?",
        "a": "The taxpayer's child, stepchild, or foster child."
      },
      {
        "id": "v1-427",
        "q": "Can some other qualifying relative substitute for the child under the “considered unmarried” test?",
        "a": "No. The special considered-unmarried test requires the specified child relationship."
      },
      {
        "id": "v1-428",
        "q": "Must the taxpayer generally be able to claim the child as a dependent for the considered-unmarried HOH rule?",
        "a": "Yes, subject to the special separated-parent exception."
      },
      {
        "id": "v1-429",
        "q": "Must the taxpayer actually claim the child to satisfy that portion of the considered-unmarried rule?",
        "a": "Not always; being entitled to claim the child can be sufficient when the noncustodial parent claims the child under the special rules."
      },
      {
        "id": "v1-430",
        "q": "Does rent count as a cost of keeping up a home?",
        "a": "Yes."
      },
      {
        "id": "v1-431",
        "q": "Does mortgage interest count?",
        "a": "Yes."
      },
      {
        "id": "v1-432",
        "q": "Do real-estate taxes count?",
        "a": "Yes."
      },
      {
        "id": "v1-433",
        "q": "Does homeowners insurance count?",
        "a": "Yes."
      },
      {
        "id": "v1-434",
        "q": "Do home repairs count?",
        "a": "Yes."
      },
      {
        "id": "v1-435",
        "q": "Do utilities count?",
        "a": "Yes."
      },
      {
        "id": "v1-436",
        "q": "Does food eaten in the home count?",
        "a": "Yes."
      },
      {
        "id": "v1-437",
        "q": "Does restaurant food count as a cost of keeping up the home?",
        "a": "No."
      },
      {
        "id": "v1-438",
        "q": "Does clothing count as a cost of keeping up the home?",
        "a": "No."
      },
      {
        "id": "v1-439",
        "q": "Does education count as a cost of keeping up the home?",
        "a": "No."
      },
      {
        "id": "v1-440",
        "q": "Does medical treatment count as a cost of keeping up the home?",
        "a": "No."
      },
      {
        "id": "v1-441",
        "q": "Do vacations count as a cost of keeping up the home?",
        "a": "No."
      },
      {
        "id": "v1-442",
        "q": "Does life insurance count as a cost of keeping up the home?",
        "a": "No."
      },
      {
        "id": "v1-443",
        "q": "Does transportation count as a cost of keeping up the home?",
        "a": "No."
      },
      {
        "id": "v1-444",
        "q": "Does the value of services provided count?",
        "a": "No."
      },
      {
        "id": "v1-445",
        "q": "Can clothing, education, or medical treatment still matter for a different tax test?",
        "a": "Yes. They can be part of the person's support, even though they are not costs of keeping up the home."
      },
      {
        "id": "v1-446",
        "q": "What three broad categories can be an HOH qualifying person?",
        "a": "A qualifying child, qualifying parent, or certain other qualifying relative."
      },
      {
        "id": "v1-447",
        "q": "Can a son or daughter be an HOH qualifying person?",
        "a": "Yes."
      },
      {
        "id": "v1-448",
        "q": "Can a grandchild be an HOH qualifying person?",
        "a": "Yes."
      },
      {
        "id": "v1-449",
        "q": "If the taxpayer's unmarried child or grandchild otherwise meets the HOH residence rules, must the child actually be claimed as a dependent to be an HOH qualifying person?",
        "a": "Generally no; an unmarried child can qualify even when the other parent claims the dependency-related benefit."
      },
      {
        "id": "v1-450",
        "q": "What if that child is married?",
        "a": "The child generally must be claimable as the taxpayer's dependent to be the qualifying person."
      },
      {
        "id": "v1-451",
        "q": "When will a child generally fail to be an HOH qualifying person under the chart?",
        "a": "If the child is married and cannot be claimed as the taxpayer's dependent."
      },
      {
        "id": "v1-452",
        "q": "When is a mother or father an HOH qualifying person?",
        "a": "When the taxpayer can claim the parent as a dependent."
      },
      {
        "id": "v1-453",
        "q": "Does a qualifying dependent parent have to live with the taxpayer?",
        "a": "No."
      },
      {
        "id": "v1-454",
        "q": "What does an “other qualifying relative” generally need for HOH purposes?",
        "a": "More-than-half-year residence, a qualifying relationship on the special list, and dependent status."
      },
      {
        "id": "v1-455",
        "q": "Does the title “relatives who don't have to live with you” mean an other relative used for HOH never needs to live with you?",
        "a": "No. HOH has its own residence requirement."
      },
      {
        "id": "v1-456",
        "q": "For whom is Qualifying Surviving Spouse status designed?",
        "a": "A widow/widower with a qualifying dependent child who meets the other requirements."
      },
      {
        "id": "v1-457",
        "q": "What tax-rate/standard-deduction treatment does QSS provide?",
        "a": "Generally the same as Married Filing Jointly."
      },
      {
        "id": "v1-458",
        "q": "For how many years after the year of death can QSS apply?",
        "a": "The two years following the year of death."
      },
      {
        "id": "v1-459",
        "q": "If a spouse dies in 2025, what filing statuses generally apply for 2025?",
        "a": "Married Filing Jointly or Married Filing Separately, because the survivor is treated as married for the year of death."
      },
      {
        "id": "v1-460",
        "q": "If a spouse dies in 2025, what years could QSS potentially apply?",
        "a": "2026 and 2027."
      },
      {
        "id": "v1-461",
        "q": "Must the surviving taxpayer have been entitled to file a joint return with the deceased spouse for the year of death?",
        "a": "Yes, although they did not necessarily have to actually file jointly."
      },
      {
        "id": "v1-462",
        "q": "For a 2025 QSS return, when must the spouse generally have died?",
        "a": "2023 or 2024."
      },
      {
        "id": "v1-463",
        "q": "Can the taxpayer have remarried by the end of 2025 and still use QSS based on the deceased spouse?",
        "a": "No."
      },
      {
        "id": "v1-464",
        "q": "What dependent relationship is required for QSS?",
        "a": "A child or stepchild meeting the applicable dependent requirements."
      },
      {
        "id": "v1-465",
        "q": "What dependent exceptions are discussed for QSS?",
        "a": "QSS can still be possible if the child could not be claimed only because the child's gross income was $5,200 or more, the child filed a joint return, or the taxpayer could be claimed as a dependent by someone else."
      },
      {
        "id": "v1-466",
        "q": "How long must the qualifying child live in the taxpayer's home for QSS?",
        "a": "All year, subject to temporary-absence rules."
      },
      {
        "id": "v1-467",
        "q": "Do temporary absences such as school generally break the QSS all-year residence test?",
        "a": "No."
      },
      {
        "id": "v1-468",
        "q": "What home-cost test applies to QSS?",
        "a": "The taxpayer pays more than half the cost of keeping up the home."
      },
      {
        "id": "v1-469",
        "q": "Once the two QSS years expire, what filing status might a taxpayer with qualifying children use instead?",
        "a": "Head of Household, if its requirements are met."
      },
      {
        "id": "v1-470",
        "q": "Which filing statuses are at the top of the general filing-status hierarchy?",
        "a": "Married Filing Jointly is first, followed by Qualifying Surviving Spouse; they are the same for most purposes, with MFJ slightly better in a few cases."
      },
      {
        "id": "v1-471",
        "q": "What comes below MFJ/QSS in the filing-status hierarchy?",
        "a": "Head of Household."
      },
      {
        "id": "v1-472",
        "q": "What comes below HOH?",
        "a": "Single."
      },
      {
        "id": "v1-473",
        "q": "Which filing status is generally at the bottom of that hierarchy?",
        "a": "Married Filing Separately."
      },
      {
        "id": "v1-474",
        "q": "If someone qualifies for both QSS and HOH, which status should be used under this comparison?",
        "a": "QSS."
      },
      {
        "id": "v1-475",
        "q": "If someone qualifies for both HOH and Single, which status should be used under this comparison?",
        "a": "HOH."
      },
      {
        "id": "v1-476",
        "q": "If someone qualifies for both HOH and MFS through the considered-unmarried rules, which status should be used under this comparison?",
        "a": "HOH."
      },
      {
        "id": "v1-477",
        "q": "Why might a couple choose MFS even when MFJ produces lower tax?",
        "a": "Nontax reasons can outweigh the extra tax."
      },
      {
        "id": "v1-478",
        "q": "How can student-loan repayment programs create an incentive for MFS?",
        "a": "Some programs determine payments/forgiveness using tax-return income; filing separately may exclude the spouse's income from the relevant calculation."
      },
      {
        "id": "v1-479",
        "q": "What comparison should be made in that student-loan situation?",
        "a": "Additional tax from MFS versus the student-loan savings/forgiveness."
      },
      {
        "id": "v1-480",
        "q": "Why might a spouse file separately when the other spouse takes aggressive tax positions or commits tax fraud?",
        "a": "To avoid signing and becoming liable on a joint return involving those positions."
      },
      {
        "id": "v1-481",
        "q": "Why might spouses going through a divorce choose MFS?",
        "a": "They may not trust one another or may want separate tax liabilities."
      },
      {
        "id": "v1-482",
        "q": "Can spouses choose MFS simply because they prefer to keep finances separate?",
        "a": "Yes."
      },
      {
        "id": "v1-483",
        "q": "In Carol's example, who claimed the children as dependents?",
        "a": "Her ex-husband David."
      },
      {
        "id": "v1-484",
        "q": "With whom did Carol's children live more than half of 2025?",
        "a": "Carol."
      },
      {
        "id": "v1-485",
        "q": "Who paid the cost of maintaining Carol's home?",
        "a": "Carol."
      },
      {
        "id": "v1-486",
        "q": "Can Carol use HOH even though David claims the children as dependents?",
        "a": "Yes. Her unmarried children remain qualifying persons for her HOH status under the applicable rules."
      },
      {
        "id": "v1-487",
        "q": "What principle does Carol's example illustrate?",
        "a": "A child can be the custodial parent's HOH qualifying person even when the noncustodial parent claims the child under the separated-parent dependency rules."
      },
      {
        "id": "v1-488",
        "q": "When did Eduardo's wife Maria die in the example?",
        "a": "2024."
      },
      {
        "id": "v1-489",
        "q": "What was Eduardo doing in 2025?",
        "a": "Remaining unmarried, raising his two children, paying their expenses, and claiming them as dependents."
      },
      {
        "id": "v1-490",
        "q": "Does Eduardo technically qualify for HOH?",
        "a": "Yes."
      },
      {
        "id": "v1-491",
        "q": "Why is HOH not the filing status Eduardo should use in the example?",
        "a": "Eduardo qualifies for the generally more favorable Qualifying Surviving Spouse status."
      },
      {
        "id": "v1-492",
        "q": "What concept does Eduardo's example test?",
        "a": "A taxpayer can qualify for more than one status, so determine which applicable status provides the proper/more favorable treatment."
      },
      {
        "id": "v1-493",
        "q": "What is the tax-law definition of a dependent?",
        "a": "A qualifying child or qualifying relative."
      },
      {
        "id": "v1-494",
        "q": "Does a “qualifying child” literally have to be the taxpayer's own son or daughter?",
        "a": "No."
      },
      {
        "id": "v1-495",
        "q": "Does a “qualifying relative” literally have to be biologically related to the taxpayer?",
        "a": "No."
      },
      {
        "id": "v1-496",
        "q": "Can a taxpayer claim a housekeeper, maid, or servant as a dependent merely because the person works for them?",
        "a": "No."
      },
      {
        "id": "v1-497",
        "q": "Can a person who can themselves be claimed as another taxpayer's dependent generally claim dependents of their own?",
        "a": "No."
      },
      {
        "id": "v1-498",
        "q": "What refund-only exception applies when the taxpayer can be claimed as someone else's dependent?",
        "a": "The restriction may not apply if the other taxpayer filed only to obtain a refund of withholding and otherwise was not required to file."
      },
      {
        "id": "v1-499",
        "q": "Can a married person who files a joint return generally be claimed as someone else's dependent?",
        "a": "No."
      },
      {
        "id": "v1-500",
        "q": "What exception applies to a married dependent's joint-return rule?",
        "a": "A joint return filed only to obtain a refund of withholding, when the couple otherwise was not required to file."
      },
      {
        "id": "v1-501",
        "q": "What citizenship/residency categories can generally satisfy the dependent citizenship test?",
        "a": "U.S. citizen, U.S. resident alien, U.S. national, or resident of Canada or Mexico."
      },
      {
        "id": "v1-502",
        "q": "What two tests ultimately determine whether someone is a dependent?",
        "a": "Qualifying child or qualifying relative."
      },
      {
        "id": "v1-503",
        "q": "What relationships can meet the qualifying-child relationship test?",
        "a": "Son, daughter, stepchild, foster child, brother, sister, half sibling, step sibling, or a descendant of any of them."
      },
      {
        "id": "v1-504",
        "q": "Can a niece or nephew be someone's “qualifying child”?",
        "a": "Yes, as a descendant of the taxpayer's brother or sister if the other tests are met."
      },
      {
        "id": "v1-505",
        "q": "Can a grandchild be a qualifying child?",
        "a": "Yes."
      },
      {
        "id": "v1-506",
        "q": "What is the basic age test for a qualifying child who is not a student?",
        "a": "Under age 19 at year-end."
      },
      {
        "id": "v1-507",
        "q": "What is the age test for a qualifying child who is a full-time student?",
        "a": "Under age 24."
      },
      {
        "id": "v1-508",
        "q": "What relative-age requirement generally applies?",
        "a": "The qualifying child must generally be younger than the taxpayer (subject to the disability rule)."
      },
      {
        "id": "v1-509",
        "q": "Is there an age limit for a permanently and totally disabled qualifying child?",
        "a": "No."
      },
      {
        "id": "v1-510",
        "q": "How long must a qualifying child generally live with the taxpayer?",
        "a": "More than half the year."
      },
      {
        "id": "v1-511",
        "q": "Do temporary absences generally count against the residence test?",
        "a": "No."
      },
      {
        "id": "v1-512",
        "q": "How much of their own support may a qualifying child provide?",
        "a": "They must not provide more than half of their own support."
      },
      {
        "id": "v1-513",
        "q": "Does merely earning substantial income automatically disqualify someone as a qualifying child?",
        "a": "No. The relevant support test asks whether the child actually provided more than half of their own support."
      },
      {
        "id": "v1-514",
        "q": "Can a qualifying child generally file a joint return and still be claimed?",
        "a": "No, subject to the refund-only joint-return exception."
      },
      {
        "id": "v1-515",
        "q": "Can someone be a qualifying relative if they are the qualifying child of the taxpayer or another taxpayer?",
        "a": "No."
      },
      {
        "id": "v1-516",
        "q": "What relationship/residence alternative applies for a qualifying relative?",
        "a": "The person must either have a qualifying relationship on the special list or live with the taxpayer all year as a member of the household."
      },
      {
        "id": "v1-517",
        "q": "Can an unrelated person be a qualifying relative?",
        "a": "Yes, if they live with the taxpayer all year as a member of the household, the relationship doesn't violate local law, and all other tests are met."
      },
      {
        "id": "v1-518",
        "q": "What adoption example illustrates an unrelated qualifying relative?",
        "a": "A child whose adoption is not yet final but who lived with the taxpayer all year."
      },
      {
        "id": "v1-519",
        "q": "What other unrelated-person example illustrates the qualifying-relative rule?",
        "a": "A neighbor or family friend takes in and supports a child whose parents cannot care for them."
      },
      {
        "id": "v1-520",
        "q": "What is the 2025 gross-income limit for a qualifying relative?",
        "a": "The person's gross income must be less than $5,200."
      },
      {
        "id": "v1-521",
        "q": "How much support must the taxpayer provide for a qualifying relative?",
        "a": "More than half of the person's total support."
      },
      {
        "id": "v1-522",
        "q": "Does a child/descendant appear on the special qualifying-relative relationship list?",
        "a": "Yes."
      },
      {
        "id": "v1-523",
        "q": "Does a brother or sister appear on the list?",
        "a": "Yes."
      },
      {
        "id": "v1-524",
        "q": "Does a parent or grandparent appear on the list?",
        "a": "Yes."
      },
      {
        "id": "v1-525",
        "q": "Does a stepparent appear on the list?",
        "a": "Yes."
      },
      {
        "id": "v1-526",
        "q": "Does a niece or nephew appear on the list?",
        "a": "Yes."
      },
      {
        "id": "v1-527",
        "q": "Does an aunt or uncle appear on the list?",
        "a": "Yes."
      },
      {
        "id": "v1-528",
        "q": "Which in-laws are specifically included on the qualifying-relative relationship list?",
        "a": "Son-in-law, daughter-in-law, father-in-law, mother-in-law, brother-in-law, and sister-in-law."
      },
      {
        "id": "v1-529",
        "q": "Does a relationship established by marriage end for these dependent rules when the couple divorces?",
        "a": "No."
      },
      {
        "id": "v1-530",
        "q": "Does a relationship established by marriage end when a spouse dies?",
        "a": "No."
      },
      {
        "id": "v1-531",
        "q": "What happens to an in-law relationship for these dependent rules after divorce or death?",
        "a": "It continues; for example, a mother-in-law remains a qualifying relationship for this purpose."
      },
      {
        "id": "v1-532",
        "q": "What percentage of a qualifying relative's total support must the taxpayer ordinarily provide?",
        "a": "More than 50%."
      },
      {
        "id": "v1-533",
        "q": "Does food count as support?",
        "a": "Yes."
      },
      {
        "id": "v1-534",
        "q": "Does lodging count as support?",
        "a": "Yes."
      },
      {
        "id": "v1-535",
        "q": "Does clothing count as support?",
        "a": "Yes."
      },
      {
        "id": "v1-536",
        "q": "Does education count as support?",
        "a": "Yes."
      },
      {
        "id": "v1-537",
        "q": "Do medical and dental care count as support?",
        "a": "Yes."
      },
      {
        "id": "v1-538",
        "q": "Does recreation count as support?",
        "a": "Yes."
      },
      {
        "id": "v1-539",
        "q": "Does transportation count as support?",
        "a": "Yes."
      },
      {
        "id": "v1-540",
        "q": "How is lodging valued for the support test?",
        "a": "Using fair rental value."
      },
      {
        "id": "v1-541",
        "q": "Does money sitting unused in a dependent's bank account count as support the dependent provided themselves?",
        "a": "No."
      },
      {
        "id": "v1-542",
        "q": "When does a dependent's own income or savings count toward their own support?",
        "a": "When it is actually spent on their support."
      },
      {
        "id": "v1-543",
        "q": "In the Mabel example, who is Mabel?",
        "a": "George's mother-in-law; George's wife Marilyn died in 2023."
      },
      {
        "id": "v1-544",
        "q": "Does Mabel stop being George's mother-in-law when Marilyn dies?",
        "a": "No. Relationships established by marriage do not end because of death."
      },
      {
        "id": "v1-545",
        "q": "How much Social Security income does Mabel have?",
        "a": "$5,000."
      },
      {
        "id": "v1-546",
        "q": "What does Mabel do with her $5,000 of Social Security?",
        "a": "Donates it to her church rather than using it for her support."
      },
      {
        "id": "v1-547",
        "q": "Who provides virtually all of Mabel's support?",
        "a": "George."
      },
      {
        "id": "v1-548",
        "q": "Can George claim Mabel as a dependent in the example?",
        "a": "Yes."
      },
      {
        "id": "v1-549",
        "q": "In the twins example, how old are John and Joe?",
        "a": "20."
      },
      {
        "id": "v1-550",
        "q": "Which twin is a full-time college student?",
        "a": "John."
      },
      {
        "id": "v1-551",
        "q": "How much does John earn from his part-time job?",
        "a": "$15,000."
      },
      {
        "id": "v1-552",
        "q": "Why can John still be a qualifying child despite earning $15,000?",
        "a": "He is under 24, a full-time student, lives at home, and his parents provide more than half his support."
      },
      {
        "id": "v1-553",
        "q": "Is Joe a qualifying child?",
        "a": "No. He is 20 and not a full-time student."
      },
      {
        "id": "v1-554",
        "q": "Does Joe's failure to be a qualifying child automatically mean he cannot be a dependent?",
        "a": "No. He may still be a qualifying relative."
      },
      {
        "id": "v1-555",
        "q": "How much income does Joe earn?",
        "a": "$1,000 from housesitting."
      },
      {
        "id": "v1-556",
        "q": "Why does Joe satisfy the qualifying-relative income test?",
        "a": "$1,000 is below the $5,200 limit."
      },
      {
        "id": "v1-557",
        "q": "Why does Joe satisfy the relationship test?",
        "a": "He is the taxpayers' son, a listed qualifying relationship."
      },
      {
        "id": "v1-558",
        "q": "Can Patrick and Irene claim Joe as a dependent?",
        "a": "Yes, as a qualifying relative if the other tests are met."
      },
      {
        "id": "v1-559",
        "q": "What key lesson does the twins example demonstrate?",
        "a": "Always test both qualifying-child and qualifying-relative status."
      },
      {
        "id": "v1-560",
        "q": "What is a multiple support agreement used for?",
        "a": "When two or more people jointly support a qualifying relative and use an agreement to designate which eligible supporter will claim that dependent."
      },
      {
        "id": "v1-561",
        "q": "What common situation illustrates a multiple support agreement?",
        "a": "Adult children jointly supporting an elderly parent."
      },
      {
        "id": "v1-562",
        "q": "Under the multiple-support rule, how much support must the person who claims the dependent personally provide?",
        "a": "More than 10% of the person's total support."
      },
      {
        "id": "v1-563",
        "q": "Can the family rotate which eligible supporter claims the parent from year to year?",
        "a": "Yes."
      },
      {
        "id": "v1-564",
        "q": "Can the same dependent be claimed by multiple taxpayers in the same year?",
        "a": "No."
      },
      {
        "id": "v1-565",
        "q": "What form is associated with a multiple support agreement?",
        "a": "Form 2120."
      },
      {
        "id": "v1-566",
        "q": "What do the other qualifying supporters do with Form 2120?",
        "a": "Provide the required declarations/consent allowing the designated eligible taxpayer to claim the dependent."
      },
      {
        "id": "v1-567",
        "q": "Which parent normally claims the child under the divorced/separated-parent rule?",
        "a": "The custodial parent."
      },
      {
        "id": "v1-568",
        "q": "How is the custodial parent determined?",
        "a": "The parent with whom the child lived for the greater number of nights during the year."
      },
      {
        "id": "v1-569",
        "q": "What measurement is used to determine the custodial parent?",
        "a": "Overnights."
      },
      {
        "id": "v1-570",
        "q": "Can the custodial parent release the dependency/child-tax-credit claim to the noncustodial parent?",
        "a": "Yes."
      },
      {
        "id": "v1-571",
        "q": "Can a divorce agreement specify alternating years or divide children between parents?",
        "a": "Yes."
      },
      {
        "id": "v1-572",
        "q": "What form is generally used to release the claim to the noncustodial parent?",
        "a": "Form 8332."
      },
      {
        "id": "v1-573",
        "q": "Who signs Form 8332?",
        "a": "The custodial parent releasing the claim."
      },
      {
        "id": "v1-574",
        "q": "Who attaches Form 8332 to the tax return?",
        "a": "The noncustodial parent claiming the child."
      },
      {
        "id": "v1-575",
        "q": "What special rule applies to qualifying pre-2009 divorce decrees?",
        "a": "Certain pages of the divorce decree may substitute for Form 8332 when the older decree meets the requirements."
      },
      {
        "id": "v1-576",
        "q": "For a 2009-or-later divorce decree, is the divorce decree alone generally enough?",
        "a": "No. Form 8332 is required."
      },
      {
        "id": "v1-577",
        "q": "What principal benefit does the noncustodial parent receive after the release?",
        "a": "The Child Tax Credit, assuming eligibility."
      },
      {
        "id": "v1-578",
        "q": "Does the released child allow the noncustodial parent to claim HOH solely because of the release?",
        "a": "No."
      },
      {
        "id": "v1-579",
        "q": "Does the noncustodial parent receive the dependent-care credit merely because Form 8332 was released?",
        "a": "No."
      },
      {
        "id": "v1-580",
        "q": "Does the noncustodial parent receive dependent-care-benefit exclusion rights merely because of Form 8332?",
        "a": "No."
      },
      {
        "id": "v1-581",
        "q": "Does the noncustodial parent receive the Earned Income Credit merely because of Form 8332?",
        "a": "No."
      },
      {
        "id": "v1-582",
        "q": "Which parent generally retains HOH, dependent-care, and EIC-related child treatment under these rules?",
        "a": "The custodial parent, assuming the relevant requirements are met."
      },
      {
        "id": "v1-583",
        "q": "Can two people use the same child for the Child Tax Credit in the same year?",
        "a": "No."
      },
      {
        "id": "v1-584",
        "q": "Can two people use the same child for HOH status in the same year?",
        "a": "No."
      },
      {
        "id": "v1-585",
        "q": "Can two people use the same child for the dependent-care credit in the same year?",
        "a": "No."
      },
      {
        "id": "v1-586",
        "q": "Can two people use the same child for the Earned Income Credit in the same year?",
        "a": "No."
      },
      {
        "id": "v1-587",
        "q": "If only one competing person is the child's parent, who wins the qualifying-child tiebreaker?",
        "a": "The parent."
      },
      {
        "id": "v1-588",
        "q": "If both parents claim the child, which parent generally wins?",
        "a": "The parent with whom the child lived for the greater number of nights."
      },
      {
        "id": "v1-589",
        "q": "If the child lived equally with both parents, what breaks the tie?",
        "a": "The parent with the higher AGI."
      },
      {
        "id": "v1-590",
        "q": "If neither parent can claim the child as a qualifying child, who generally wins among other qualifying persons?",
        "a": "The person with the highest AGI."
      },
      {
        "id": "v1-591",
        "q": "If no parent claims the child voluntarily, what extra AGI restriction applies to a nonparent claimant?",
        "a": "The nonparent's AGI must be higher than the AGI of any parent who could claim the child."
      },
      {
        "id": "v1-592",
        "q": "Why does that nonparent AGI rule exist?",
        "a": "To prevent a high-income parent whose Child Tax Credit has phased out from shifting the child to a lower-income relative so that relative can claim the credit and pass the benefit back."
      },
      {
        "id": "v1-593",
        "q": "What 2025 Child Tax Credit amount is used in the example?",
        "a": "$2,200."
      },
      {
        "id": "v1-594",
        "q": "What strategy does the Child Tax Credit tiebreaker example illustrate?",
        "a": "A high-income parent tries to let grandparents claim the child so the grandparents obtain a $2,200 credit and effectively pass the benefit back to the parent."
      },
      {
        "id": "v1-595",
        "q": "Does the IRS allow that strategy when the parent's AGI exceeds the nonparent's and the parent could claim the child?",
        "a": "No; the tiebreaker restriction prevents it."
      },
      {
        "id": "v1-596",
        "q": "How much can a taxpayer designate to the Presidential Election Campaign Fund?",
        "a": "$3."
      },
      {
        "id": "v1-597",
        "q": "Does checking the presidential campaign box increase tax owed?",
        "a": "No."
      },
      {
        "id": "v1-598",
        "q": "Does checking the presidential campaign box reduce the taxpayer's refund?",
        "a": "No."
      },
      {
        "id": "v1-599",
        "q": "What does checking the presidential campaign box actually do?",
        "a": "Directs $3 of federal tax receipts to the Presidential Election Campaign Fund."
      },
      {
        "id": "v1-600",
        "q": "Can the taxpayer or spouse on a joint return choose the $3 Presidential Election Campaign Fund designation?",
        "a": "Yes. The $3 designation does not change the tax owed or the refund."
      },
      {
        "id": "v1-601",
        "q": "What two broad types of digital-asset activity can require a “Yes” answer on the Form 1040 digital-asset question?",
        "a": "Receiving a digital asset as a reward/award/payment for property or services, or selling, exchanging, gifting, or otherwise disposing of a digital asset/financial interest."
      },
      {
        "id": "v1-602",
        "q": "Must the digital-asset question be answered?",
        "a": "Yes. The taxpayer must check Yes or No."
      },
      {
        "id": "v1-603",
        "q": "If the client says they had no reportable digital-asset activity and the preparer has no reason to doubt them, must the preparer demand proof of a negative?",
        "a": "Generally no. The preparer can rely on the reasonable statement and check No."
      },
      {
        "id": "v1-604",
        "q": "What if the preparer knows the client engaged in digital-asset activity requiring a Yes answer?",
        "a": "The preparer should check Yes and explain to the taxpayer that Yes is required because the return is signed under penalties of perjury."
      },
      {
        "id": "v1-605",
        "q": "Why is the digital-asset Yes/No answer especially important?",
        "a": "The taxpayer and preparer sign the return under penalties of perjury."
      },
      {
        "id": "v1-606",
        "q": "What new 2025 checkbox asks about the taxpayer's main home?",
        "a": "Whether the taxpayer's main home—and the spouse's on a joint return—was in the United States for more than half of 2025."
      },
      {
        "id": "v1-607",
        "q": "Why was the U.S.-main-home checkbox added?",
        "a": "Residence in the United States for more than half the year matters for certain credits, including the Earned Income Credit."
      },
      {
        "id": "v1-608",
        "q": "How long must the main home have been in the U.S. for the new box to be checked?",
        "a": "More than half of 2025."
      }
    ]
  },
  {
    "id": "video-2",
    "video": 2,
    "title": "Income",
    "cards": []
  },
  {
    "id": "video-3",
    "video": 3,
    "title": "Capital Gains",
    "cards": [
      {
        "id": "v3-001",
        "q": "What is investment property?",
        "a": "Property that produces investment income."
      },
      {
        "id": "v3-002",
        "q": "Give examples of investment property.",
        "a": "Stocks, bonds, Treasury bills, and rental real estate."
      },
      {
        "id": "v3-003",
        "q": "What is business property?",
        "a": "Property used in a trade or business."
      },
      {
        "id": "v3-004",
        "q": "Give examples of business property.",
        "a": "Buildings, computers, equipment, trucks, and other property used in a business."
      },
      {
        "id": "v3-005",
        "q": "What is tangible property?",
        "a": "Property that is physical in nature and can be touched."
      },
      {
        "id": "v3-006",
        "q": "What is intangible property?",
        "a": "Property that is not physical in nature."
      },
      {
        "id": "v3-007",
        "q": "Give examples of intangible property.",
        "a": "Computer software, patents, trademarks, licenses, and customer lists."
      },
      {
        "id": "v3-008",
        "q": "In a laptop example, which part is tangible property?",
        "a": "The physical computer."
      },
      {
        "id": "v3-009",
        "q": "In a laptop example, which part is intangible property?",
        "a": "The software running on the computer."
      },
      {
        "id": "v3-010",
        "q": "To what kinds of property does depreciation generally apply?",
        "a": "Certain business or rental/income-producing property."
      },
      {
        "id": "v3-011",
        "q": "Does depreciation generally apply to personal-use assets?",
        "a": "No."
      },
      {
        "id": "v3-012",
        "q": "What is depreciation expense?",
        "a": "A deduction for the cost of property used in a business or income-producing activity, spread over the property’s estimated useful life."
      },
      {
        "id": "v3-013",
        "q": "Why is the cost of a long-lived business asset generally not deducted entirely in the year of purchase?",
        "a": "Because the cost is generally spread over the asset’s estimated useful life through depreciation."
      },
      {
        "id": "v3-014",
        "q": "Give examples of depreciable property.",
        "a": "Buildings, machinery, equipment, computers, vehicles, and furniture."
      },
      {
        "id": "v3-015",
        "q": "Is land depreciable?",
        "a": "No."
      },
      {
        "id": "v3-016",
        "q": "Why is land not depreciable?",
        "a": "It is not considered to wear out over time; its useful life is treated as essentially indefinite."
      },
      {
        "id": "v3-017",
        "q": "What is real property?",
        "a": "Land, buildings, and property or fixtures attached to land or buildings."
      },
      {
        "id": "v3-018",
        "q": "Give examples of fixtures or systems that can be part of real property.",
        "a": "Heating and air-conditioning systems, plumbing, and other items built into a building."
      },
      {
        "id": "v3-019",
        "q": "What is a simple way to think of real property?",
        "a": "Real estate."
      },
      {
        "id": "v3-020",
        "q": "What is personal property in the real-property versus personal-property distinction?",
        "a": "Property other than real property; generally property that can be moved."
      },
      {
        "id": "v3-021",
        "q": "Does “personal property” necessarily mean property used for personal rather than business purposes?",
        "a": "No. The term distinguishes it from real property."
      },
      {
        "id": "v3-022",
        "q": "What is the basic treatment of a noncapital asset when sold?",
        "a": "Its gain or loss is generally ordinary income or ordinary loss rather than capital gain or loss."
      },
      {
        "id": "v3-023",
        "q": "What is ordinary income in this context?",
        "a": "Income taxed like wages, interest, dividends, and other ordinary income."
      },
      {
        "id": "v3-024",
        "q": "What is a capital asset under the approach taught here?",
        "a": "An asset that is not on the list of noncapital assets."
      },
      {
        "id": "v3-025",
        "q": "What happens when a capital asset is sold?",
        "a": "The result is treated as a capital gain or capital loss."
      },
      {
        "id": "v3-026",
        "q": "Why are long-term capital gains generally preferred to ordinary gains?",
        "a": "Long-term capital gains can be taxed at lower rates."
      },
      {
        "id": "v3-027",
        "q": "Why are ordinary losses generally preferred to capital losses?",
        "a": "Ordinary losses are not subject to the same capital-loss limitation and can offset ordinary income."
      },
      {
        "id": "v3-028",
        "q": "What combination do taxpayers generally prefer: capital gains or ordinary gains, and capital losses or ordinary losses?",
        "a": "Capital gains and ordinary losses."
      },
      {
        "id": "v3-029",
        "q": "Is inventory held for sale to customers a capital asset?",
        "a": "No."
      },
      {
        "id": "v3-030",
        "q": "How is gain from selling inventory generally treated?",
        "a": "As ordinary gain."
      },
      {
        "id": "v3-031",
        "q": "Is depreciable property used in a trade or business a capital asset?",
        "a": "No."
      },
      {
        "id": "v3-032",
        "q": "Is real property used in a trade or business a capital asset under the noncapital-asset list?",
        "a": "No."
      },
      {
        "id": "v3-033",
        "q": "Why is real property used in business listed separately from depreciable business property?",
        "a": "Because land is real property but is not depreciable."
      },
      {
        "id": "v3-034",
        "q": "When are patents, copyrights, and secret formulas noncapital assets?",
        "a": "When held by the creator or by someone who received them as a gift from the creator."
      },
      {
        "id": "v3-035",
        "q": "If an inventor creates a patent, is that patent a capital asset in the inventor’s hands?",
        "a": "No."
      },
      {
        "id": "v3-036",
        "q": "If another person buys that patent from the inventor, can it be a capital asset in the buyer’s hands?",
        "a": "Yes."
      },
      {
        "id": "v3-037",
        "q": "Are business accounts receivable capital assets?",
        "a": "No."
      },
      {
        "id": "v3-038",
        "q": "When can certain U.S. government publications be noncapital assets?",
        "a": "When they were not purchased at the price available to the general public."
      },
      {
        "id": "v3-039",
        "q": "If a U.S. government publication was purchased at the normal public price, can it be a capital asset?",
        "a": "Yes."
      },
      {
        "id": "v3-040",
        "q": "Are certain commodity derivative instruments held by dealers capital assets?",
        "a": "No."
      },
      {
        "id": "v3-041",
        "q": "Why are commodity derivative instruments held by dealers treated like noncapital assets?",
        "a": "Dealers buy investments for resale to customers, making them similar to inventory."
      },
      {
        "id": "v3-042",
        "q": "What is a hedging transaction in this context?",
        "a": "A transaction entered into to offset or protect another asset or position rather than primarily to earn a profit."
      },
      {
        "id": "v3-043",
        "q": "Why is a hedging asset compared to insurance?",
        "a": "It is acquired to reduce risk on another asset, not primarily to earn a profit."
      },
      {
        "id": "v3-044",
        "q": "Are hedging transactions capital assets under the noncapital-asset list?",
        "a": "No."
      },
      {
        "id": "v3-045",
        "q": "Are supplies used in a trade or business capital assets?",
        "a": "No."
      },
      {
        "id": "v3-046",
        "q": "What common theme applies to many noncapital assets?",
        "a": "They are connected with operating a business."
      },
      {
        "id": "v3-047",
        "q": "Are most assets owned by an individual for personal or investment purposes capital assets?",
        "a": "Yes."
      },
      {
        "id": "v3-048",
        "q": "Give examples of personal assets that are generally capital assets.",
        "a": "A house, car, furniture, clothing, investments, and collectibles."
      },
      {
        "id": "v3-049",
        "q": "What often determines whether an asset is capital or noncapital: the physical type of asset or how it is used?",
        "a": "How it is used."
      },
      {
        "id": "v3-050",
        "q": "Can the same car be a capital asset for an individual but a noncapital asset for a business using it in the business?",
        "a": "Yes."
      },
      {
        "id": "v3-051",
        "q": "Can the same computer be a capital asset when personally owned but noncapital when used as business property?",
        "a": "Yes."
      },
      {
        "id": "v3-052",
        "q": "What is another common name for an asset’s basis?",
        "a": "Cost basis."
      },
      {
        "id": "v3-053",
        "q": "Why is basis needed when an asset is sold?",
        "a": "To determine the gain or loss on the sale."
      },
      {
        "id": "v3-054",
        "q": "How does basis affect depreciation?",
        "a": "Depreciation is calculated based on the asset’s basis."
      },
      {
        "id": "v3-055",
        "q": "How can basis affect a business balance sheet?",
        "a": "The amount recorded for an asset is based on its basis."
      },
      {
        "id": "v3-056",
        "q": "What is the simplest way to think about basis?",
        "a": "The amount invested in the asset."
      },
      {
        "id": "v3-057",
        "q": "A treadmill costs $1,000 plus $70 sales tax. What is its basis?",
        "a": "$1,070."
      },
      {
        "id": "v3-058",
        "q": "What is the basic formula for gain or loss on sale?",
        "a": "Sales price minus basis equals gain or loss."
      },
      {
        "id": "v3-059",
        "q": "If an asset has a $1,070 basis and is sold for $1,570, what is the gain?",
        "a": "$500."
      },
      {
        "id": "v3-060",
        "q": "You bought 20 shares for $500, or $25 per share. You later sell 10 shares for $30 per share. What is the basis of the 10 shares sold?",
        "a": "$250."
      },
      {
        "id": "v3-061",
        "q": "In the 20-share stock example, selling 10 shares at $30 per share produces what gain?",
        "a": "$50."
      },
      {
        "id": "v3-062",
        "q": "What costs can be included in cost basis in addition to the purchase price?",
        "a": "Related acquisition costs such as sales tax, commissions, fees, and closing costs."
      },
      {
        "id": "v3-063",
        "q": "You buy 100 shares at $10 each and pay $20 brokerage fees. What is total basis?",
        "a": "$1,020."
      },
      {
        "id": "v3-064",
        "q": "In that stock example, what is basis per share?",
        "a": "$10.20 per share."
      },
      {
        "id": "v3-065",
        "q": "A car costs $30,000 plus $2,400 sales tax, $400 delivery, and $200 dealer administrative fee. What is basis?",
        "a": "$33,000."
      },
      {
        "id": "v3-066",
        "q": "For real property, where can many basis-related acquisition costs be found?",
        "a": "On the closing statement."
      },
      {
        "id": "v3-067",
        "q": "Give examples of real-property costs that can be added to basis.",
        "a": "Recording fees, appraisal fees, abstract fees, survey costs, title insurance, and similar acquisition costs."
      },
      {
        "id": "v3-068",
        "q": "Are loan fees and points added to the basis of real property?",
        "a": "No."
      },
      {
        "id": "v3-069",
        "q": "Why are loan fees and points not treated as part of the property’s basis?",
        "a": "The financing is separate from the property itself."
      },
      {
        "id": "v3-070",
        "q": "If a building is constructed rather than purchased, what kinds of costs are included in basis?",
        "a": "Construction costs such as materials, labor, permit fees, and inspection fees."
      },
      {
        "id": "v3-071",
        "q": "If an old building is demolished before a new building is constructed, where are the demolition costs added?",
        "a": "To the basis of the land."
      },
      {
        "id": "v3-072",
        "q": "Why is adding demolition costs to land less favorable for depreciation?",
        "a": "Land is not depreciable."
      },
      {
        "id": "v3-073",
        "q": "Can basis increase after an asset is purchased?",
        "a": "Yes."
      },
      {
        "id": "v3-074",
        "q": "What commonly increases the basis of real property after purchase?",
        "a": "Major improvements or additions."
      },
      {
        "id": "v3-075",
        "q": "Give examples of improvements that increase real-property basis.",
        "a": "Adding a room, driveway, fence, landscaping, flooring, or a major system such as a new air conditioner."
      },
      {
        "id": "v3-076",
        "q": "Do ordinary repairs and maintenance generally increase basis?",
        "a": "No."
      },
      {
        "id": "v3-077",
        "q": "Give examples of repairs that do not increase basis.",
        "a": "Painting, fixing leaks, filling holes or cracks, and replacing broken hardware."
      },
      {
        "id": "v3-078",
        "q": "Does filling a hole in an existing driveway increase basis?",
        "a": "No; it is a repair."
      },
      {
        "id": "v3-079",
        "q": "Does adding an entirely new driveway increase basis?",
        "a": "Yes; it is an addition or improvement."
      },
      {
        "id": "v3-080",
        "q": "Does repairing an existing air conditioner increase basis?",
        "a": "No."
      },
      {
        "id": "v3-081",
        "q": "Does installing a new air conditioner increase basis?",
        "a": "Yes."
      },
      {
        "id": "v3-082",
        "q": "Can basis decrease after purchase?",
        "a": "Yes."
      },
      {
        "id": "v3-083",
        "q": "What is the most common decrease to basis?",
        "a": "Depreciation expense."
      },
      {
        "id": "v3-084",
        "q": "What happens to basis when a tax deduction is taken for an asset?",
        "a": "The deduction generally reduces basis."
      },
      {
        "id": "v3-085",
        "q": "A business truck costs $50,000 and $10,000 depreciation is deducted each year. What is basis after one year?",
        "a": "$40,000."
      },
      {
        "id": "v3-086",
        "q": "In the truck example, what is basis after two years of $10,000 annual depreciation?",
        "a": "$30,000."
      },
      {
        "id": "v3-087",
        "q": "Can casualty-loss deductions reduce basis?",
        "a": "Yes."
      },
      {
        "id": "v3-088",
        "q": "How do rebates affect basis?",
        "a": "They reduce basis."
      },
      {
        "id": "v3-089",
        "q": "An asset costs $1,000 and the buyer receives a $100 rebate. What is basis?",
        "a": "$900."
      },
      {
        "id": "v3-090",
        "q": "How do insurance or other reimbursements for a loss affect basis?",
        "a": "They reduce basis."
      },
      {
        "id": "v3-091",
        "q": "If insurance proceeds are later reinvested in an improvement, what can happen to basis?",
        "a": "The reimbursement reduces basis, but the new improvement can increase basis again."
      },
      {
        "id": "v3-092",
        "q": "A roof is damaged, insurance proceeds are received, and a new roof is installed. What is the basis effect?",
        "a": "The insurance proceeds reduce basis; the cost of the new roof increases basis."
      },
      {
        "id": "v3-093",
        "q": "Are stock dividends and stock splits usually taxable when received?",
        "a": "No."
      },
      {
        "id": "v3-094",
        "q": "Can stock dividends and stock splits change basis per share?",
        "a": "Yes."
      },
      {
        "id": "v3-095",
        "q": "How is basis per share generally recomputed after a nontaxable stock dividend or split?",
        "a": "Divide the unchanged total basis by the new total number of shares."
      },
      {
        "id": "v3-096",
        "q": "Terrence owns 100 shares with total basis $1,000 and receives a 20% stock dividend, ending with 120 shares. What is total basis after the dividend?",
        "a": "$1,000."
      },
      {
        "id": "v3-097",
        "q": "In Terrence’s 120-share stock-dividend example, what is basis per share?",
        "a": "$8.33 per share."
      },
      {
        "id": "v3-098",
        "q": "Sandra owns 100 shares with total basis $1,000 and receives a 3-for-1 split. How many shares does she have afterward?",
        "a": "300 shares."
      },
      {
        "id": "v3-099",
        "q": "After Sandra’s 3-for-1 split, what is her total basis?",
        "a": "$1,000."
      },
      {
        "id": "v3-100",
        "q": "After Sandra’s 3-for-1 split, what is basis per share?",
        "a": "$3.33 per share."
      },
      {
        "id": "v3-101",
        "q": "What is a nondividend distribution from a corporation?",
        "a": "A distribution treated as a return of the shareholder’s investment rather than a current taxable dividend."
      },
      {
        "id": "v3-102",
        "q": "How does a nondividend distribution affect stock basis?",
        "a": "It reduces basis."
      },
      {
        "id": "v3-103",
        "q": "Why can a nondividend distribution increase future taxable gain when the stock is sold?",
        "a": "Because it lowers basis."
      },
      {
        "id": "v3-104",
        "q": "Terrence has $1,000 basis in 100 shares and receives a $100 nondividend cash distribution. What is new total basis?",
        "a": "$900."
      },
      {
        "id": "v3-105",
        "q": "After that $100 nondividend distribution, what is Terrence’s basis per share?",
        "a": "$9 per share."
      },
      {
        "id": "v3-106",
        "q": "What is the general basis of inherited property?",
        "a": "Fair market value at the date of death."
      },
      {
        "id": "v3-107",
        "q": "What alternate valuation date may the estate elect for inherited property?",
        "a": "Six months after the date of death."
      },
      {
        "id": "v3-108",
        "q": "Who makes the alternate valuation election discussed for inherited property?",
        "a": "The estate/executor, not the heir unless the heir is also acting in that role."
      },
      {
        "id": "v3-109",
        "q": "What is the step-up in basis?",
        "a": "Inherited property receives basis equal to its fair market value at the relevant valuation date rather than the decedent’s old basis."
      },
      {
        "id": "v3-110",
        "q": "Why can a step-up in basis reduce capital gain when inherited appreciated property is sold soon after death?",
        "a": "The heir’s basis is raised to near the current fair market value."
      },
      {
        "id": "v3-111",
        "q": "What is the general basis rule for gifted property?",
        "a": "Carryover basis: the recipient generally takes the donor’s basis."
      },
      {
        "id": "v3-112",
        "q": "If appreciated stock is gifted immediately before the donor’s death instead of inherited afterward, what basis generally applies to the recipient?",
        "a": "The donor’s carryover basis rather than a step-up to date-of-death value."
      },
      {
        "id": "v3-113",
        "q": "What planning point is illustrated by appreciated assets and the step-up rule?",
        "a": "Holding appreciated assets until death can produce a step-up in basis, while gifting them during life generally carries over the donor’s basis."
      },
      {
        "id": "v3-114",
        "q": "What special basis rule applies when gifted property is later sold at a loss?",
        "a": "Use the lesser of the donor’s basis or the fair market value at the date of the gift for determining the loss."
      },
      {
        "id": "v3-115",
        "q": "Why does the gifted-property loss rule use the lower fair market value in some cases?",
        "a": "To prevent shifting built-in losses to another taxpayer who might be able to use them."
      },
      {
        "id": "v3-116",
        "q": "What is fair market value?",
        "a": "The price at which property would change hands between a willing buyer and willing seller, neither compelled to act, with both having reasonable knowledge of the relevant facts."
      },
      {
        "id": "v3-117",
        "q": "Does fair market value assume the buyer and seller know relevant defects or facts about the property?",
        "a": "Yes."
      },
      {
        "id": "v3-118",
        "q": "What are the two broad categories of capital assets discussed?",
        "a": "Capital assets held for investment and capital assets held for personal use."
      },
      {
        "id": "v3-119",
        "q": "Give examples of investment capital assets.",
        "a": "Stocks, stock rights, bonds, and collectibles, unless held by a dealer."
      },
      {
        "id": "v3-120",
        "q": "How are gains on investment capital assets treated?",
        "a": "As capital gains."
      },
      {
        "id": "v3-121",
        "q": "How are losses on investment capital assets treated?",
        "a": "As capital losses, subject to the capital-loss rules."
      },
      {
        "id": "v3-122",
        "q": "Give examples of personal-use capital assets.",
        "a": "A family home, car, furniture, and clothing."
      },
      {
        "id": "v3-123",
        "q": "How are gains on personal-use capital assets treated?",
        "a": "As taxable capital gains."
      },
      {
        "id": "v3-124",
        "q": "Are losses on personal-use capital assets deductible?",
        "a": "No."
      },
      {
        "id": "v3-125",
        "q": "If a personal car bought for $30,000 is sold for $10,000, is the $20,000 loss deductible?",
        "a": "No."
      },
      {
        "id": "v3-126",
        "q": "If a personal home is sold at a loss, is the loss deductible?",
        "a": "No."
      },
      {
        "id": "v3-127",
        "q": "What holding period creates a long-term capital asset?",
        "a": "More than one year."
      },
      {
        "id": "v3-128",
        "q": "What holding period creates a short-term capital asset?",
        "a": "One year or less."
      },
      {
        "id": "v3-129",
        "q": "How is inherited property classified for holding-period purposes?",
        "a": "Automatically long-term."
      },
      {
        "id": "v3-130",
        "q": "If a decedent bought an asset two months before death and the heir sells it shortly after inheritance, is it short-term or long-term for the heir?",
        "a": "Long-term."
      },
      {
        "id": "v3-131",
        "q": "How are net long-term capital gains generally taxed?",
        "a": "At favorable long-term capital-gain rates."
      },
      {
        "id": "v3-132",
        "q": "How are short-term capital gains taxed?",
        "a": "At ordinary income tax rates."
      },
      {
        "id": "v3-133",
        "q": "A stock is bought July 1, 2024 and sold July 1, 2025. Is the gain long-term or short-term?",
        "a": "Short-term, because the asset was held exactly one year."
      },
      {
        "id": "v3-134",
        "q": "What is the annual net capital-loss deduction limit for most filing statuses?",
        "a": "$3,000 beyond capital gains."
      },
      {
        "id": "v3-135",
        "q": "What is the annual net capital-loss deduction limit for Married Filing Separately?",
        "a": "$1,500 beyond capital gains."
      },
      {
        "id": "v3-136",
        "q": "Do Single, HOH, QSS, and MFJ all use the same $3,000 capital-loss limit?",
        "a": "Yes."
      },
      {
        "id": "v3-137",
        "q": "Does MFJ get a $6,000 capital-loss deduction merely because there are two spouses?",
        "a": "No; the limit is still $3,000."
      },
      {
        "id": "v3-138",
        "q": "A taxpayer has a $6,000 net capital loss and no capital gains. How much can generally be deducted this year?",
        "a": "$3,000, assuming the taxpayer is not MFS."
      },
      {
        "id": "v3-139",
        "q": "What happens to the remaining $3,000 in that $6,000-loss example?",
        "a": "It is carried forward to a future year."
      },
      {
        "id": "v3-140",
        "q": "Can current-year capital losses offset current-year capital gains without the $3,000 limitation?",
        "a": "Yes; losses first offset capital gains."
      },
      {
        "id": "v3-141",
        "q": "A taxpayer has a $10,000 capital gain and a $6,000 capital loss. What is the net capital gain?",
        "a": "$4,000."
      },
      {
        "id": "v3-142",
        "q": "What does “netting” capital gains and losses mean?",
        "a": "Offsetting gains with losses."
      },
      {
        "id": "v3-143",
        "q": "What is the first short-term netting step?",
        "a": "Total all short-term capital gains and subtract all short-term capital losses."
      },
      {
        "id": "v3-144",
        "q": "What does short-term netting produce?",
        "a": "A net short-term capital gain or net short-term capital loss."
      },
      {
        "id": "v3-145",
        "q": "What is the long-term netting step?",
        "a": "Total all long-term capital gains and subtract all long-term capital losses."
      },
      {
        "id": "v3-146",
        "q": "What does long-term netting produce?",
        "a": "A net long-term capital gain or net long-term capital loss."
      },
      {
        "id": "v3-147",
        "q": "If the net short-term and net long-term results are opposite—one gain and one loss—what happens?",
        "a": "They are netted against each other to produce an overall result."
      },
      {
        "id": "v3-148",
        "q": "If the net short-term and net long-term results are both gains, is further netting required?",
        "a": "No; both categories remain gains."
      },
      {
        "id": "v3-149",
        "q": "If the net short-term and net long-term results are both losses, is further netting required?",
        "a": "No; both categories remain losses before applying the deduction/carryforward rules."
      },
      {
        "id": "v3-150",
        "q": "How is a net short-term capital gain taxed?",
        "a": "At ordinary income tax rates."
      },
      {
        "id": "v3-151",
        "q": "How is a net short-term capital loss treated if it exceeds the allowed annual deduction?",
        "a": "Deduct up to the applicable annual limit and carry the remainder forward."
      },
      {
        "id": "v3-152",
        "q": "How is a net long-term capital gain taxed?",
        "a": "At favorable long-term capital-gain rates."
      },
      {
        "id": "v3-153",
        "q": "How is a net long-term capital loss treated if it exceeds the allowed annual deduction?",
        "a": "Deduct up to the applicable annual limit and carry the remainder forward."
      },
      {
        "id": "v3-154",
        "q": "How long can excess capital losses generally be carried forward?",
        "a": "Indefinitely until used."
      },
      {
        "id": "v3-155",
        "q": "What happens to unused capital-loss carryforwards when an individual taxpayer dies?",
        "a": "They are lost after the year of death."
      },
      {
        "id": "v3-156",
        "q": "Can a taxpayer use the normal annual capital-loss deduction in the year of death?",
        "a": "Yes, but any remaining unused carryforward is lost afterward."
      },
      {
        "id": "v3-157",
        "q": "How are short-term capital-loss carryforwards used in a later year?",
        "a": "They are netted against current short-term gains."
      },
      {
        "id": "v3-158",
        "q": "How are long-term capital-loss carryforwards used in a later year?",
        "a": "They are netted against current long-term gains."
      },
      {
        "id": "v3-159",
        "q": "Jerry has long-term gains of $2,000 and long-term losses of $3,000 and $5,000. What is his net long-term result?",
        "a": "$6,000 net long-term loss."
      },
      {
        "id": "v3-160",
        "q": "Jerry has a $2,000 short-term gain and a $1,000 short-term loss. What is his net short-term result?",
        "a": "$1,000 net short-term gain."
      },
      {
        "id": "v3-161",
        "q": "Jerry has a $6,000 net long-term loss and $1,000 net short-term gain. What is his overall result after netting?",
        "a": "$5,000 net long-term loss."
      },
      {
        "id": "v3-162",
        "q": "If Jerry is single with a $5,000 net capital loss, how much offsets ordinary income in 2025?",
        "a": "$3,000."
      },
      {
        "id": "v3-163",
        "q": "How much of Jerry’s $5,000 net long-term loss carries forward?",
        "a": "$2,000 as a long-term capital-loss carryforward."
      },
      {
        "id": "v3-164",
        "q": "Julie has long-term gains of $3,000 and $2,000, a $1,000 long-term loss, and a $2,000 long-term loss carryforward. What is her net long-term gain?",
        "a": "$2,000."
      },
      {
        "id": "v3-165",
        "q": "Julie has a $3,000 short-term gain and a $2,000 short-term loss. What is her net short-term gain?",
        "a": "$1,000."
      },
      {
        "id": "v3-166",
        "q": "If Julie has a $2,000 net long-term gain and a $1,000 net short-term gain, are they netted together?",
        "a": "No; both are gains and retain their separate character."
      },
      {
        "id": "v3-167",
        "q": "How is Julie’s $2,000 long-term gain taxed?",
        "a": "At long-term capital-gain rates."
      },
      {
        "id": "v3-168",
        "q": "How is Julie’s $1,000 short-term gain taxed?",
        "a": "At ordinary income tax rates."
      },
      {
        "id": "v3-169",
        "q": "What form is generally used to list individual capital-asset sale transactions?",
        "a": "Form 8949."
      },
      {
        "id": "v3-170",
        "q": "What part of Form 8949 is used for short-term transactions?",
        "a": "Part I/page 1."
      },
      {
        "id": "v3-171",
        "q": "How many category boxes are checked on a single Form 8949 for a group of transactions?",
        "a": "One."
      },
      {
        "id": "v3-172",
        "q": "What changed on Form 8949 for 2025 regarding category boxes?",
        "a": "Three additional boxes were added for digital-asset transactions."
      },
      {
        "id": "v3-173",
        "q": "What do the first three 2025 Form 8949 category boxes generally cover?",
        "a": "More typical securities transactions, such as stocks, bonds, and mutual funds."
      },
      {
        "id": "v3-174",
        "q": "What do the last three 2025 Form 8949 category boxes cover?",
        "a": "Digital-asset transactions."
      },
      {
        "id": "v3-175",
        "q": "Which short-term Form 8949 category is used when a Form 1099-B reports the transaction and basis is reported?",
        "a": "Box A."
      },
      {
        "id": "v3-176",
        "q": "Which short-term Form 8949 category is used when a Form 1099-B reports the transaction but basis is not reported?",
        "a": "Box B."
      },
      {
        "id": "v3-177",
        "q": "Which short-term Form 8949 category is used when no Form 1099-B is received?",
        "a": "Box C."
      },
      {
        "id": "v3-178",
        "q": "Why might a brokerage Form 1099-B fail to show basis?",
        "a": "For example, the asset may have been transferred from another brokerage and basis information was not transferred."
      },
      {
        "id": "v3-179",
        "q": "If transactions fall into more than one Form 8949 category, what should be done?",
        "a": "Use separate Forms 8949 for the different categories."
      },
      {
        "id": "v3-180",
        "q": "What information is listed for each transaction on Form 8949?",
        "a": "Description, acquisition date, sale date, proceeds, basis, applicable codes/adjustments, and gain or loss."
      },
      {
        "id": "v3-181",
        "q": "What is done with gains and losses at the bottom of Form 8949?",
        "a": "They are totaled."
      },
      {
        "id": "v3-182",
        "q": "What part of Form 8949 is used for long-term transactions?",
        "a": "Part II/page 2."
      },
      {
        "id": "v3-183",
        "q": "After Form 8949 transactions are totaled, where do the totals generally flow?",
        "a": "Schedule D."
      },
      {
        "id": "v3-184",
        "q": "What does Part I of Schedule D summarize?",
        "a": "Short-term capital gains and losses."
      },
      {
        "id": "v3-185",
        "q": "What does the long-term portion of Schedule D summarize?",
        "a": "Long-term capital gains and losses."
      },
      {
        "id": "v3-186",
        "q": "Can Form 8949 sometimes be skipped?",
        "a": "Yes; in some situations amounts may be reported directly on Schedule D."
      },
      {
        "id": "v3-187",
        "q": "What does Schedule D ultimately determine before the result flows to Form 1040?",
        "a": "The net short-term and long-term capital gain or loss and the overall reportable result."
      },
      {
        "id": "v3-188",
        "q": "What are the three normal long-term capital-gain tax rates?",
        "a": "0%, 15%, and 20%."
      },
      {
        "id": "v3-189",
        "q": "What two factors determine which normal long-term capital-gain rate applies?",
        "a": "Filing status and taxable income."
      },
      {
        "id": "v3-190",
        "q": "For a single taxpayer in the example, what 2025 taxable-income amount is below the 0% capital-gain cutoff?",
        "a": "$48,350."
      },
      {
        "id": "v3-191",
        "q": "If a single taxpayer’s taxable income is below $48,350 in the example, what long-term capital-gain rate applies?",
        "a": "0%."
      },
      {
        "id": "v3-192",
        "q": "What rate generally applies to long-term capital gains for taxpayers in the middle capital-gain bracket?",
        "a": "15%."
      },
      {
        "id": "v3-193",
        "q": "What rate generally applies to long-term capital gains for higher-income taxpayers in the top capital-gain bracket?",
        "a": "20%."
      },
      {
        "id": "v3-194",
        "q": "Do you need to memorize every exact capital-gain income cutoff from the chart?",
        "a": "No; know the 0%, 15%, and 20% rates and be generally familiar with the chart."
      },
      {
        "id": "v3-195",
        "q": "Are all long-term capital gains necessarily taxed at only 0%, 15%, or 20%?",
        "a": "No. Certain special categories can be taxed at higher maximum rates."
      },
      {
        "id": "v3-196",
        "q": "What information does Form 1099-B from a brokerage often provide for security sales?",
        "a": "Sales price/proceeds, basis, and relevant dates."
      },
      {
        "id": "v3-197",
        "q": "What forms can often be prepared using the information on Form 1099-B?",
        "a": "Form 8949 and Schedule D."
      },
      {
        "id": "v3-198",
        "q": "What are the two ways a mutual fund can generate capital-gain-related amounts for an investor?",
        "a": "The fund can distribute gains from its own security sales, and the investor can have a gain or loss from selling mutual-fund shares."
      },
      {
        "id": "v3-199",
        "q": "How are long-term gains realized inside a mutual fund generally reported to the shareholder?",
        "a": "As capital gain distributions."
      },
      {
        "id": "v3-200",
        "q": "How are mutual-fund capital gain distributions treated on the shareholder’s return?",
        "a": "As long-term capital gains."
      },
      {
        "id": "v3-201",
        "q": "If a shareholder owned a mutual fund for less than one year, can a capital gain distribution still be long-term?",
        "a": "Yes, because the fund’s holding period for the underlying security controls that distribution’s character."
      },
      {
        "id": "v3-202",
        "q": "How are a mutual fund’s short-term capital gains generally reported to shareholders?",
        "a": "As ordinary dividends."
      },
      {
        "id": "v3-203",
        "q": "Can a shareholder separately identify the short-term capital-gain portion inside ordinary dividends for netting against personal capital losses?",
        "a": "No, under the treatment discussed."
      },
      {
        "id": "v3-204",
        "q": "Why can’t mutual-fund short-term gains reported as ordinary dividends be netted against the shareholder’s other short-term capital losses?",
        "a": "They are not separately identified from other ordinary dividend income."
      },
      {
        "id": "v3-205",
        "q": "In a corporate liquidation, how are initial distributions treated up to the shareholder’s stock basis?",
        "a": "As a return of basis, not taxable gain."
      },
      {
        "id": "v3-206",
        "q": "A shareholder has $1,000 basis and receives $1,500 in a complete liquidation. What is the capital gain?",
        "a": "$500."
      },
      {
        "id": "v3-207",
        "q": "If a shareholder’s total liquidation proceeds are less than stock basis, what can result?",
        "a": "A capital loss."
      },
      {
        "id": "v3-208",
        "q": "A shareholder has $1,000 basis and receives $700 in a total liquidation. What is the capital loss?",
        "a": "$300."
      },
      {
        "id": "v3-209",
        "q": "How are stocks, stock rights, and bonds that become completely worthless during the year treated?",
        "a": "As if sold for $0 on the last day of the tax year."
      },
      {
        "id": "v3-210",
        "q": "On what form is a worthless security generally reported?",
        "a": "Form 8949."
      },
      {
        "id": "v3-211",
        "q": "How is the holding period for a worthless security determined?",
        "a": "Compare the acquisition date with the last day of the year in which it became worthless."
      },
      {
        "id": "v3-212",
        "q": "Must the taxpayer be able to support that a security became totally worthless?",
        "a": "Yes."
      },
      {
        "id": "v3-213",
        "q": "Is a decline in value enough by itself to claim a worthless-security loss?",
        "a": "No; total worthlessness must be supportable."
      },
      {
        "id": "v3-214",
        "q": "What is a wash sale?",
        "a": "A loss sale of stock or securities followed or preceded within 30 days by acquiring substantially identical stock or securities or certain equivalent positions."
      },
      {
        "id": "v3-215",
        "q": "What is the wash-sale window?",
        "a": "30 days before or 30 days after the loss sale."
      },
      {
        "id": "v3-216",
        "q": "Can buying substantially identical securities in a trade within the wash-sale window trigger the rule?",
        "a": "Yes."
      },
      {
        "id": "v3-217",
        "q": "Can entering into a contract or option to acquire substantially identical securities within the wash-sale window trigger the rule?",
        "a": "Yes."
      },
      {
        "id": "v3-218",
        "q": "Can acquiring substantially identical securities in an IRA or Roth IRA trigger the wash-sale rule?",
        "a": "Yes."
      },
      {
        "id": "v3-219",
        "q": "Is a wash-sale loss currently deductible?",
        "a": "No."
      },
      {
        "id": "v3-220",
        "q": "Can a taxpayer avoid the wash-sale rule by buying replacement shares before selling the loss shares rather than after?",
        "a": "No; the rule applies both before and after the sale."
      },
      {
        "id": "v3-221",
        "q": "Does the wash-sale rule apply only when the transaction produces a loss?",
        "a": "Yes, as discussed; gains still must be reported."
      },
      {
        "id": "v3-222",
        "q": "If a stock is sold at a gain and repurchased within 30 days, is the gain still reportable?",
        "a": "Yes."
      },
      {
        "id": "v3-223",
        "q": "How may a wash sale appear on brokerage tax reporting?",
        "a": "It may be identified by a wash-sale code/adjustment associated with Form 8949 reporting."
      },
      {
        "id": "v3-224",
        "q": "How is gain or loss from selling or trading an option treated if the underlying property would be a capital asset in the taxpayer’s hands?",
        "a": "As capital gain or loss."
      },
      {
        "id": "v3-225",
        "q": "Are stock options generally capital assets when the underlying stock would be a capital asset to the taxpayer?",
        "a": "Yes."
      },
      {
        "id": "v3-226",
        "q": "If an option expires unexercised and worthless, how is the cost generally treated?",
        "a": "As a sale resulting in a capital loss."
      },
      {
        "id": "v3-227",
        "q": "In the example, why does an option to buy stock at $21 become worthless when the stock trades at $19 at expiration?",
        "a": "No one would pay for the right to buy at $21 when the stock can be bought for $19."
      },
      {
        "id": "v3-228",
        "q": "What is a straddle in this context?",
        "a": "A risk-reduction arrangement involving offsetting positions, such as an option to buy and an option to sell."
      },
      {
        "id": "v3-229",
        "q": "When an option is part of a straddle, when is gain or loss generally reported?",
        "a": "When both positions have settled."
      },
      {
        "id": "v3-230",
        "q": "When is income generally recognized on a statutory incentive stock option when received?",
        "a": "No income is recognized when the option is received."
      },
      {
        "id": "v3-231",
        "q": "For a statutory incentive stock option, when is tax generally triggered?",
        "a": "When the actual stock is sold."
      },
      {
        "id": "v3-232",
        "q": "How is a nonstatutory stock option treated if its value can be determined when received?",
        "a": "The value is included in income when the option is received."
      },
      {
        "id": "v3-233",
        "q": "How is a nonstatutory stock option treated if its value cannot be determined when received?",
        "a": "It becomes taxable when the option is exercised or sold."
      },
      {
        "id": "v3-234",
        "q": "How is the ultimate gain on the stock treated?",
        "a": "As capital gain."
      },
      {
        "id": "v3-235",
        "q": "What is an employee stock purchase plan (ESPP)?",
        "a": "A corporate benefit allowing employees to buy company stock at a discount."
      },
      {
        "id": "v3-236",
        "q": "For a qualified ESPP, when is income recognized?",
        "a": "When the stock is sold, not when it is purchased."
      },
      {
        "id": "v3-237",
        "q": "What holding periods are emphasized for favorable ESPP treatment?",
        "a": "More than 24 months after the offering date and more than 12 months after the purchase date."
      },
      {
        "id": "v3-238",
        "q": "If the favorable ESPP holding periods are met, what kinds of income can the gain contain?",
        "a": "A mix of ordinary income and capital gain."
      },
      {
        "id": "v3-239",
        "q": "Why is part of an ESPP gain ordinary income?",
        "a": "The employee received a purchase-price discount because of employment."
      },
      {
        "id": "v3-240",
        "q": "What form is associated with ESPP information?",
        "a": "Form 3922."
      },
      {
        "id": "v3-241",
        "q": "What two key ESPP rules should be remembered?",
        "a": "The 24-month/12-month holding rule and the mix of ordinary and capital gain."
      },
      {
        "id": "v3-242",
        "q": "What is a publicly traded partnership (PTP)?",
        "a": "A partnership whose ownership units are traded on an established securities market or readily tradable on a secondary market."
      },
      {
        "id": "v3-243",
        "q": "How are PTPs generally treated by default?",
        "a": "Like corporations, so their units are generally bought and sold like stock."
      },
      {
        "id": "v3-244",
        "q": "For a typical PTP treated like a corporation, how is gain or loss on the sale of units generally determined?",
        "a": "Like stock: compare sales proceeds with basis."
      },
      {
        "id": "v3-245",
        "q": "What income test can cause a PTP to be treated as a partnership rather than a corporation?",
        "a": "If 90% or more of its income comes from certain passive-income sources."
      },
      {
        "id": "v3-246",
        "q": "If a PTP is treated as a partnership, what tax form do owners receive?",
        "a": "Schedule K-1."
      },
      {
        "id": "v3-247",
        "q": "What limitation applies to passive losses flowing through a partnership-treated PTP?",
        "a": "Passive activity losses generally offset passive activity income, not nonpassive income."
      },
      {
        "id": "v3-248",
        "q": "If a partnership-treated PTP makes cash distributions, what can happen to the owner’s basis?",
        "a": "The distributions can reduce basis."
      },
      {
        "id": "v3-249",
        "q": "Why can basis-reducing PTP distributions increase gain when the units are later sold?",
        "a": "Lower basis creates a larger gain on sale."
      },
      {
        "id": "v3-250",
        "q": "Can some gain on the sale of a partnership-treated PTP be ordinary rather than capital?",
        "a": "Yes, because of partnership rules."
      },
      {
        "id": "v3-251",
        "q": "What is Section 1244 stock?",
        "a": "Stock in a domestic small-business corporation primarily operating a business rather than merely investing, with the taxpayer as an original owner."
      },
      {
        "id": "v3-252",
        "q": "What type of loss can qualify for special Section 1244 treatment?",
        "a": "A loss on the sale or worthlessness of qualifying Section 1244 stock."
      },
      {
        "id": "v3-253",
        "q": "How much Section 1244 loss can generally be treated as ordinary for a taxpayer who is not MFJ?",
        "a": "Up to $50,000."
      },
      {
        "id": "v3-254",
        "q": "How much Section 1244 loss can generally be treated as ordinary on a joint return?",
        "a": "Up to $100,000."
      },
      {
        "id": "v3-255",
        "q": "How is Section 1244 loss above the ordinary-loss limit treated?",
        "a": "As capital loss."
      },
      {
        "id": "v3-256",
        "q": "How is gain on qualifying Section 1244 stock treated?",
        "a": "As capital gain."
      },
      {
        "id": "v3-257",
        "q": "Why is Section 1244 described as offering favorable treatment?",
        "a": "Gains can be capital while qualifying losses can be ordinary up to the limits."
      },
      {
        "id": "v3-258",
        "q": "What is an SBIC?",
        "a": "A small business investment company licensed and operated under the Small Business Investment Act of 1958."
      },
      {
        "id": "v3-259",
        "q": "How is loss on qualifying SBIC stock treated?",
        "a": "As ordinary loss."
      },
      {
        "id": "v3-260",
        "q": "How is gain on qualifying SBIC stock treated?",
        "a": "As capital gain."
      },
      {
        "id": "v3-261",
        "q": "Does the SBIC ordinary-loss treatment have the $50,000/$100,000 Section 1244 limit?",
        "a": "No; there is no such limitation for the SBIC rule as taught here."
      },
      {
        "id": "v3-262",
        "q": "What is Section 1202 stock also called?",
        "a": "Qualified small business stock (QSBS)."
      },
      {
        "id": "v3-263",
        "q": "What general type of corporation can issue qualifying Section 1202 stock?",
        "a": "Certain C corporations operating qualifying active businesses."
      },
      {
        "id": "v3-264",
        "q": "What traditional holding period is emphasized for the full Section 1202 exclusion?",
        "a": "At least five years."
      },
      {
        "id": "v3-265",
        "q": "What traditional gross-assets limit is one qualification for Section 1202 stock acquired before the newer OBBBA threshold?",
        "a": "$50 million or less."
      },
      {
        "id": "v3-266",
        "q": "How must Section 1202 stock generally be acquired?",
        "a": "At original issue, as compensation, or in certain inherited or gifted situations discussed."
      },
      {
        "id": "v3-267",
        "q": "What business-activity requirement applies to Section 1202 stock?",
        "a": "The corporation must meet the active-business test and operate a real qualifying business."
      },
      {
        "id": "v3-268",
        "q": "What entity-type requirement applies over substantially the entire relevant period?",
        "a": "It must be a C corporation substantially the entire time."
      },
      {
        "id": "v3-269",
        "q": "Under the pre-July-4-2025 rule discussed, how much qualifying Section 1202 gain can generally be excluded?",
        "a": "Up to $10 million or 10 times initial basis, whichever is greater, subject to the filing-status changes described."
      },
      {
        "id": "v3-270",
        "q": "What happens to qualifying Section 1202 gain within the applicable exclusion limit?",
        "a": "It can be excluded from tax."
      },
      {
        "id": "v3-271",
        "q": "How is excess Section 1202 gain above the exclusion treated?",
        "a": "As capital gain taxed at the taxpayer’s ordinary rate up to a maximum of 25%."
      },
      {
        "id": "v3-272",
        "q": "For Section 1202 stock acquired before February 17, 2009, what percentage of gain can be excluded under the dates discussed?",
        "a": "50%."
      },
      {
        "id": "v3-273",
        "q": "For qualifying Section 1202 stock acquired in the specified 2009–2010 period, what exclusion percentage applies?",
        "a": "75%."
      },
      {
        "id": "v3-274",
        "q": "For qualifying Section 1202 stock acquired after September 27, 2010 under the old rule, what exclusion percentage applies?",
        "a": "100%."
      },
      {
        "id": "v3-275",
        "q": "For Section 1202 stock acquired after July 4, 2025, what gross-assets limit is discussed?",
        "a": "$75 million."
      },
      {
        "id": "v3-276",
        "q": "For Section 1202 stock acquired after July 4, 2025, what general maximum exclusion amount is discussed?",
        "a": "$15 million."
      },
      {
        "id": "v3-277",
        "q": "For Section 1202 stock acquired after July 4, 2025, what MFS exclusion amount is discussed?",
        "a": "$7.5 million."
      },
      {
        "id": "v3-278",
        "q": "For stock acquired before July 4, 2025, what MFS limit did OBBBA change the $10 million exclusion to?",
        "a": "$5 million."
      },
      {
        "id": "v3-279",
        "q": "For stock acquired before July 4, 2025, what exclusion limit remains for filing statuses other than MFS?",
        "a": "$10 million."
      },
      {
        "id": "v3-280",
        "q": "Starting when are the Section 1202 exclusion amounts discussed as indexed for inflation?",
        "a": "2027."
      },
      {
        "id": "v3-281",
        "q": "For Section 1202 stock acquired after July 4, 2025, what exclusion percentage applies after at least three years?",
        "a": "50%."
      },
      {
        "id": "v3-282",
        "q": "For Section 1202 stock acquired after July 4, 2025, what exclusion percentage applies after at least four years?",
        "a": "75%."
      },
      {
        "id": "v3-283",
        "q": "For Section 1202 stock acquired after July 4, 2025, what exclusion percentage applies after at least five years?",
        "a": "100%, subject to the applicable dollar cap."
      },
      {
        "id": "v3-284",
        "q": "What is an investor in securities?",
        "a": "Someone who buys and sells securities expecting dividends, interest, or capital appreciation and is not in the business of investing."
      },
      {
        "id": "v3-285",
        "q": "Do investors typically hold securities for a substantial period?",
        "a": "Yes."
      },
      {
        "id": "v3-286",
        "q": "How are investors’ security sales generally treated?",
        "a": "As short-term or long-term capital gains and losses, subject to normal capital-loss rules."
      },
      {
        "id": "v3-287",
        "q": "What is a securities dealer?",
        "a": "A merchant in securities who buys securities for resale to customers and may keep inventory."
      },
      {
        "id": "v3-288",
        "q": "How can dealers earn income?",
        "a": "From marketing securities to customers or compensation for intermediary/market-maker services."
      },
      {
        "id": "v3-289",
        "q": "Must securities dealers use mark-to-market?",
        "a": "Yes."
      },
      {
        "id": "v3-290",
        "q": "What is a securities trader in the discussion?",
        "a": "Someone in the business of buying and selling securities for their own account, such as a qualifying day trader."
      },
      {
        "id": "v3-291",
        "q": "Do traders need customers or inventory to be considered in the securities-trading business?",
        "a": "No."
      },
      {
        "id": "v3-292",
        "q": "What three conditions are emphasized for trader status?",
        "a": "Seeking profit from daily market movements, substantial activity, and continuity and regularity."
      },
      {
        "id": "v3-293",
        "q": "Can qualifying traders report business expenses on Schedule C?",
        "a": "Yes."
      },
      {
        "id": "v3-294",
        "q": "Do qualifying securities traders pay self-employment tax on this trading income?",
        "a": "No."
      },
      {
        "id": "v3-295",
        "q": "Can qualifying traders elect mark-to-market treatment?",
        "a": "Yes."
      },
      {
        "id": "v3-296",
        "q": "What does mark-to-market require at year-end?",
        "a": "Treat securities held at year-end as if sold at fair market value on the last business day of the year and recognize the resulting gain or loss."
      },
      {
        "id": "v3-297",
        "q": "Why is basis adjusted after a mark-to-market gain or loss is recognized?",
        "a": "To prevent taxing the same gain twice or deducting the same loss twice when the security is later actually sold."
      },
      {
        "id": "v3-298",
        "q": "What does it mean to realize a gain or loss?",
        "a": "The gain or loss arises from an actual disposition such as a sale."
      },
      {
        "id": "v3-299",
        "q": "What does it mean to recognize a gain or loss?",
        "a": "Report it on the tax return."
      },
      {
        "id": "v3-300",
        "q": "Under mark-to-market, can a gain or loss be recognized without being realized through an actual sale?",
        "a": "Yes."
      },
      {
        "id": "v3-301",
        "q": "Who must use mark-to-market among investors, traders, and dealers?",
        "a": "Dealers."
      },
      {
        "id": "v3-302",
        "q": "Who may elect mark-to-market?",
        "a": "Qualifying traders."
      },
      {
        "id": "v3-303",
        "q": "Who cannot use mark-to-market?",
        "a": "Investors."
      },
      {
        "id": "v3-304",
        "q": "If a trader makes a valid mark-to-market election, how are gains and losses treated?",
        "a": "As ordinary rather than capital."
      },
      {
        "id": "v3-305",
        "q": "If a trader elects mark-to-market, do capital-loss limitations apply?",
        "a": "No."
      },
      {
        "id": "v3-306",
        "q": "If a trader elects mark-to-market, do wash-sale rules apply?",
        "a": "No."
      },
      {
        "id": "v3-307",
        "q": "What long-term-capital-gain benefit does a trader give up by electing mark-to-market?",
        "a": "Long-term gains are treated as ordinary, so favorable long-term capital-gain rates do not apply."
      },
      {
        "id": "v3-308",
        "q": "If a trader does not elect mark-to-market, how are gains and losses treated?",
        "a": "Like those of an investor: capital treatment based on holding period, with capital-loss limitations."
      },
      {
        "id": "v3-309",
        "q": "By when must a trader generally make a mark-to-market election for a year?",
        "a": "By the due date of the prior year’s tax return."
      },
      {
        "id": "v3-310",
        "q": "For 2025 mark-to-market treatment, what date is emphasized for making the election?",
        "a": "April 15, 2025."
      },
      {
        "id": "v3-311",
        "q": "Must a trader make a new mark-to-market election every year once it is in place?",
        "a": "No; it continues until revoked."
      },
      {
        "id": "v3-312",
        "q": "By when must revocation generally be made for the year it becomes effective?",
        "a": "By the tax-return due date for that year, illustrated as April 15."
      },
      {
        "id": "v3-313",
        "q": "Why can’t a trader wait until December to decide whether to elect mark-to-market for that same year?",
        "a": "The election deadline occurs earlier, preventing taxpayers from waiting to see whether gains or losses make the election favorable."
      },
      {
        "id": "v3-314",
        "q": "Do Section 1256 contracts use mark-to-market regardless of whether the holder is an investor, trader, or dealer?",
        "a": "Yes."
      },
      {
        "id": "v3-315",
        "q": "Give examples of Section 1256 contracts.",
        "a": "Regulated futures contracts, foreign currency contracts, nonequity options, dealer equity options, and dealer securities futures contracts."
      },
      {
        "id": "v3-316",
        "q": "How are Section 1256 contracts held at year-end treated?",
        "a": "As if sold at fair market value on the last business day of the year, with gain or loss recognized."
      },
      {
        "id": "v3-317",
        "q": "Does the Section 1256 mark-to-market rule apply to a properly identified hedging transaction?",
        "a": "No, under the exception discussed."
      },
      {
        "id": "v3-318",
        "q": "What is the 60/40 rule for Section 1256 contracts?",
        "a": "60% of gain or loss is treated as long-term and 40% as short-term."
      },
      {
        "id": "v3-319",
        "q": "Does the actual holding period change the Section 1256 60/40 split?",
        "a": "No."
      },
      {
        "id": "v3-320",
        "q": "What three facts are emphasized together for Section 1256 contracts?",
        "a": "Section 1256, mark-to-market, and 60% long-term/40% short-term treatment."
      },
      {
        "id": "v3-321",
        "q": "How are digital assets treated for federal tax purposes?",
        "a": "As property, not as currency."
      },
      {
        "id": "v3-322",
        "q": "What general tax principles apply to digital-asset transactions?",
        "a": "The general tax principles applicable to property."
      },
      {
        "id": "v3-323",
        "q": "Where is digital-asset activity declared on the individual income-tax return?",
        "a": "The digital-asset question on Form 1040."
      },
      {
        "id": "v3-324",
        "q": "Where are digital-asset sale transactions reported in the capital-gain reporting process?",
        "a": "Form 8949, then Schedule D."
      },
      {
        "id": "v3-325",
        "q": "Can selling a digital asset for cash create taxable gain or loss?",
        "a": "Yes."
      },
      {
        "id": "v3-326",
        "q": "Can exchanging a digital asset for property, goods, or services create taxable gain or loss?",
        "a": "Yes."
      },
      {
        "id": "v3-327",
        "q": "Can trading one digital asset for another create a taxable event?",
        "a": "Yes."
      },
      {
        "id": "v3-328",
        "q": "Can receiving a digital asset as payment for goods or services create taxable income?",
        "a": "Yes."
      },
      {
        "id": "v3-329",
        "q": "Can receiving a new digital asset from a hard fork create taxable income under the transactions listed?",
        "a": "Yes."
      },
      {
        "id": "v3-330",
        "q": "Can mining or staking produce taxable digital-asset income under the list discussed?",
        "a": "Yes."
      },
      {
        "id": "v3-331",
        "q": "Can an airdrop produce taxable digital-asset income under the list discussed?",
        "a": "Yes."
      },
      {
        "id": "v3-332",
        "q": "Can another disposition of a financial interest in a digital asset create taxable gain or loss?",
        "a": "Yes."
      },
      {
        "id": "v3-333",
        "q": "Can receiving or transferring a digital asset for free be taxable if it is not a bona fide gift?",
        "a": "Yes."
      },
      {
        "id": "v3-334",
        "q": "What is the basic gain formula for a digital asset?",
        "a": "Sales/disposition value minus basis."
      },
      {
        "id": "v3-335",
        "q": "If basis exceeds the disposition value of a digital asset, what results?",
        "a": "A loss."
      },
      {
        "id": "v3-336",
        "q": "If a digital-asset loss is a capital loss, what annual limitation applies under the same rules?",
        "a": "The same $3,000 capital-loss limit for most filing statuses, with the usual rules."
      },
      {
        "id": "v3-337",
        "q": "How is cryptocurrency received by a self-employed person for services treated?",
        "a": "As business gross receipts at fair market value in U.S. dollars when received."
      },
      {
        "id": "v3-338",
        "q": "If a self-employed person receives $100 worth of crypto for services, what amount is initially included as gross receipts?",
        "a": "$100."
      },
      {
        "id": "v3-339",
        "q": "When crypto is used to pay an expense, what value is used for the payment?",
        "a": "Fair market value at the time of payment."
      },
      {
        "id": "v3-340",
        "q": "Can spending appreciated crypto create a gain in addition to paying the expense?",
        "a": "Yes."
      },
      {
        "id": "v3-341",
        "q": "A taxpayer received crypto worth $100 for services and later spends it when worth $500. What gain is illustrated?",
        "a": "$400."
      },
      {
        "id": "v3-342",
        "q": "Give examples of collectibles.",
        "a": "Art, rugs, antiques, metals, gems, stamps, coins, alcoholic beverages such as wine, musical instruments, historical objects, and similar assets."
      },
      {
        "id": "v3-343",
        "q": "Can precious-metals-based ETFs be treated as collectibles?",
        "a": "Yes."
      },
      {
        "id": "v3-344",
        "q": "Can an equity interest in a pass-through entity that holds collectibles be treated as a collectible?",
        "a": "Yes."
      },
      {
        "id": "v3-345",
        "q": "Can the IRS designate additional assets as collectibles as markets change?",
        "a": "Yes."
      },
      {
        "id": "v3-346",
        "q": "Are collectibles generally capital assets when held by a collector rather than a dealer?",
        "a": "Yes."
      },
      {
        "id": "v3-347",
        "q": "How is a long-term capital gain from a collectible taxed?",
        "a": "At the lower of the taxpayer’s ordinary tax rate or 28%."
      },
      {
        "id": "v3-348",
        "q": "What is the maximum long-term capital-gain rate emphasized for collectibles?",
        "a": "28%."
      },
      {
        "id": "v3-349",
        "q": "Do collectibles use the normal 0%/15%/20% long-term capital-gain structure in the same way as most capital assets?",
        "a": "No; the special maximum rate is 28%."
      },
      {
        "id": "v3-350",
        "q": "When is a loss on a collectible potentially deductible?",
        "a": "When the collectible was held for investment rather than personal enjoyment."
      },
      {
        "id": "v3-351",
        "q": "What determines whether a collectible was held for investment?",
        "a": "The taxpayer’s intent at purchase and the surrounding facts and circumstances."
      },
      {
        "id": "v3-352",
        "q": "If baseball cards are bought with an expectation of profit as an investment, can losses potentially be deductible?",
        "a": "Yes."
      },
      {
        "id": "v3-353",
        "q": "If baseball cards are bought mainly for personal enjoyment, is a loss on sale deductible?",
        "a": "No."
      },
      {
        "id": "v3-354",
        "q": "How can a qualifying nonbusiness bad debt be deducted?",
        "a": "As a short-term capital loss."
      },
      {
        "id": "v3-355",
        "q": "What must be true for a nonbusiness bad debt to qualify?",
        "a": "It must be a genuine debt rather than a gift, the taxpayer must have basis in the debt, and it must become worthless."
      },
      {
        "id": "v3-356",
        "q": "Is money a parent spends for a minor child’s basic needs a genuine debt merely because the parent calls it a loan?",
        "a": "No."
      },
      {
        "id": "v3-357",
        "q": "Why must the taxpayer have basis in a bad debt?",
        "a": "The taxpayer must actually have loaned cash or something of value."
      },
      {
        "id": "v3-358",
        "q": "Can unpaid child support create a deductible nonbusiness bad debt for the recipient?",
        "a": "No, because the recipient did not lend out money or property and has no basis in that unpaid amount."
      },
      {
        "id": "v3-359",
        "q": "When is a qualifying nonbusiness bad debt deducted?",
        "a": "In the year it becomes worthless."
      },
      {
        "id": "v3-360",
        "q": "What does “worthless” mean for a bad debt?",
        "a": "There is no longer a reasonable chance it will be repaid."
      },
      {
        "id": "v3-361",
        "q": "Must worthlessness of a bad debt be supportable?",
        "a": "Yes."
      },
      {
        "id": "v3-362",
        "q": "Is a nonbusiness bad-debt loss subject to the $3,000 capital-loss limitation?",
        "a": "Yes."
      },
      {
        "id": "v3-363",
        "q": "Can excess nonbusiness bad-debt capital loss be carried forward?",
        "a": "Yes."
      },
      {
        "id": "v3-364",
        "q": "On what form are sales of noncapital business assets generally reported in the discussion?",
        "a": "Form 4797."
      },
      {
        "id": "v3-365",
        "q": "How are gains or losses on noncapital assets usually treated?",
        "a": "As ordinary income or ordinary loss, subject to exceptions covered elsewhere."
      },
      {
        "id": "v3-366",
        "q": "Is gain or loss generally recognized on a transfer of property between spouses?",
        "a": "No."
      },
      {
        "id": "v3-367",
        "q": "Is gain or loss generally recognized on a property transfer between former spouses incident to divorce?",
        "a": "No."
      },
      {
        "id": "v3-368",
        "q": "How is a nontaxable transfer between spouses generally treated for basis purposes?",
        "a": "Like a gift: the receiving spouse takes the transferring spouse’s basis."
      },
      {
        "id": "v3-369",
        "q": "Does the special gifted-property loss-basis rule apply to transfers between spouses?",
        "a": "No; the receiving spouse takes carryover basis even if the property is later sold at a loss."
      },
      {
        "id": "v3-370",
        "q": "Are losses on sales between related parties deductible?",
        "a": "No."
      },
      {
        "id": "v3-371",
        "q": "Are gains on sales between related parties taxable?",
        "a": "Yes."
      },
      {
        "id": "v3-372",
        "q": "Give examples of related parties discussed for the loss-disallowance rule.",
        "a": "Family members, a corporation and a greater-than-50% owner, and a fiduciary and beneficiary of the same trust."
      },
      {
        "id": "v3-373",
        "q": "Why are related-party losses disallowed?",
        "a": "To prevent taxpayers from manufacturing tax losses through transactions with closely related persons while economic control or use may remain within the related group."
      },
      {
        "id": "v3-374",
        "q": "Is a primary residence generally a capital asset?",
        "a": "Yes."
      },
      {
        "id": "v3-375",
        "q": "What special tax benefit can apply when a taxpayer sells a primary residence at a gain?",
        "a": "All or part of the gain may be excluded if the requirements are met."
      },
      {
        "id": "v3-376",
        "q": "What is the maximum home-sale gain exclusion for Single, HOH, or MFS?",
        "a": "$250,000."
      },
      {
        "id": "v3-377",
        "q": "What is the maximum home-sale gain exclusion for qualifying MFJ taxpayers?",
        "a": "$500,000."
      },
      {
        "id": "v3-378",
        "q": "Does the $250,000/$500,000 home-sale exclusion apply to sales price or gain?",
        "a": "Gain, not gross sales price."
      },
      {
        "id": "v3-379",
        "q": "A home with $800,000 basis is sold for $1,000,000. What is the gain before any exclusion?",
        "a": "$200,000."
      },
      {
        "id": "v3-380",
        "q": "If that taxpayer qualifies for at least a $250,000 home-sale exclusion, how much of the $200,000 gain is taxable?",
        "a": "$0."
      },
      {
        "id": "v3-381",
        "q": "Is a loss on the sale of a personal primary residence deductible?",
        "a": "No."
      },
      {
        "id": "v3-382",
        "q": "What is the ownership requirement for the primary-residence gain exclusion?",
        "a": "Own the home for at least two years during the five-year period ending on the sale date."
      },
      {
        "id": "v3-383",
        "q": "What is the use requirement for the primary-residence gain exclusion?",
        "a": "Use the home as the main home for at least two years during the five-year period ending on the sale date."
      },
      {
        "id": "v3-384",
        "q": "Must the two years of ownership and two years of use be the same two years?",
        "a": "No."
      },
      {
        "id": "v3-385",
        "q": "For MFJ to qualify for the $500,000 exclusion, how many spouses must meet the ownership test?",
        "a": "At least one spouse."
      },
      {
        "id": "v3-386",
        "q": "For MFJ to qualify for the $500,000 exclusion, how many spouses must meet the use test?",
        "a": "Both spouses."
      },
      {
        "id": "v3-387",
        "q": "How often can the primary-residence exclusion generally be used?",
        "a": "Not more than once every two years."
      },
      {
        "id": "v3-388",
        "q": "If the taxpayer excluded gain on another principal residence within the previous two years, can the full exclusion normally be used again?",
        "a": "No."
      },
      {
        "id": "v3-389",
        "q": "John rented a house beginning August 1, 2020 and bought it July 1, 2022. Can time living there as a renter count toward the use test?",
        "a": "Yes."
      },
      {
        "id": "v3-390",
        "q": "In John’s example, how long did he own the house before selling August 1, 2025?",
        "a": "Three years and one month."
      },
      {
        "id": "v3-391",
        "q": "In John’s example, how long did he use the house as his primary residence?",
        "a": "Two years and two months."
      },
      {
        "id": "v3-392",
        "q": "Does John meet both ownership and use requirements in the example?",
        "a": "Yes."
      },
      {
        "id": "v3-393",
        "q": "John has a $200,000 gain and satisfies the tests. How much can he exclude?",
        "a": "The entire $200,000 gain."
      },
      {
        "id": "v3-394",
        "q": "Why is John limited to a $250,000 maximum rather than $500,000 even though he is married when he sells?",
        "a": "His wife did not meet the use requirement for that home."
      },
      {
        "id": "v3-395",
        "q": "Maria owns her New York home for 3 years and 7 months but lives in it only 18 months during the relevant period. Which test does she fail?",
        "a": "The use test."
      },
      {
        "id": "v3-396",
        "q": "Under Maria’s original school example, can she exclude the $200,000 gain?",
        "a": "No, because she did not meet the two-year use requirement and the facts given did not qualify her for a partial exclusion."
      },
      {
        "id": "v3-397",
        "q": "Can a taxpayer who fails the full home-sale eligibility tests still qualify for a partial exclusion?",
        "a": "Yes, in qualifying circumstances."
      },
      {
        "id": "v3-398",
        "q": "What qualifying reasons for a partial home-sale exclusion are listed?",
        "a": "A change in workplace location, health-related reasons, or other unforeseeable events."
      },
      {
        "id": "v3-399",
        "q": "How is the partial home-sale exclusion generally calculated?",
        "a": "Take the percentage of the failed test that was satisfied—or the lowest percentage if more than one test failed—and multiply it by the applicable $250,000 or $500,000 maximum."
      },
      {
        "id": "v3-400",
        "q": "If a Single taxpayer satisfies only 12 of the required 24 months, what fraction of the $250,000 maximum is potentially available?",
        "a": "One-half."
      },
      {
        "id": "v3-401",
        "q": "If a Single taxpayer qualifies for a 50% partial exclusion, what is the maximum exclusion?",
        "a": "$125,000."
      },
      {
        "id": "v3-402",
        "q": "In the revised Maria example, why does her sale qualify for a partial exclusion?",
        "a": "She sold because of a qualifying change in workplace location."
      },
      {
        "id": "v3-403",
        "q": "Maria satisfies 18 of 24 months and is Single. What percentage of the full exclusion does she qualify for?",
        "a": "75%."
      },
      {
        "id": "v3-404",
        "q": "Maria’s partial exclusion is 18/24 of $250,000. What amount is excluded?",
        "a": "$187,500."
      },
      {
        "id": "v3-405",
        "q": "If Maria’s gain is $200,000 and she excludes $187,500, what taxable capital gain remains?",
        "a": "$12,500."
      },
      {
        "id": "v3-406",
        "q": "What can trigger depreciation recapture when a home is sold?",
        "a": "Prior depreciation deductions from rental use or a home-office deduction."
      },
      {
        "id": "v3-407",
        "q": "Can depreciation recapture be excluded simply because the taxpayer otherwise qualifies for the home-sale gain exclusion?",
        "a": "No."
      },
      {
        "id": "v3-408",
        "q": "What does “recapture” mean in this context?",
        "a": "The taxpayer must pay tax on the depreciation amount previously deducted or allowable."
      },
      {
        "id": "v3-409",
        "q": "What type of gain is the depreciation recapture amount described as for the home?",
        "a": "Capital gain associated with Section 1250 property."
      },
      {
        "id": "v3-410",
        "q": "At what maximum rate is the depreciation-recapture gain on the home taxed?",
        "a": "The taxpayer’s ordinary tax rate up to a maximum of 25%."
      },
      {
        "id": "v3-411",
        "q": "Why does depreciation recapture exist?",
        "a": "To prevent a double tax benefit from deducting depreciation and then excluding the same economic gain on sale."
      },
      {
        "id": "v3-412",
        "q": "Lawrence took $22,000 depreciation on a rental home, then later qualified to exclude a $200,000 home-sale gain. How much depreciation is still subject to recapture?",
        "a": "$22,000."
      },
      {
        "id": "v3-413",
        "q": "Lawrence is in the 35% bracket and the recapture maximum rate is 25%. What tax rate applies to the $22,000 recapture?",
        "a": "25%."
      },
      {
        "id": "v3-414",
        "q": "What is 25% of Lawrence’s $22,000 depreciation recapture?",
        "a": "$5,500."
      },
      {
        "id": "v3-415",
        "q": "When must a primary-residence sale be reported on Form 8949?",
        "a": "If all or part of the gain cannot be excluded, or if the taxpayer received Form 1099-S."
      },
      {
        "id": "v3-416",
        "q": "What does Form 1099-S report?",
        "a": "Proceeds from a real-estate transaction."
      },
      {
        "id": "v3-417",
        "q": "Who may issue Form 1099-S in a home sale?",
        "a": "The closing agent, such as a title company."
      },
      {
        "id": "v3-418",
        "q": "When may the closing agent avoid issuing Form 1099-S for a principal residence sale?",
        "a": "When the agent reasonably believes the seller satisfies the requirements for the principal-residence exclusion based on the seller’s certification."
      },
      {
        "id": "v3-419",
        "q": "What facts may the seller certify to avoid Form 1099-S in the example?",
        "a": "Two years of ownership in the last five, two years of main-home use in the last five, and no excluded gain from another principal residence in the last two years."
      },
      {
        "id": "v3-420",
        "q": "If no Form 1099-S is issued and the entire gain is excludable, must the home sale be reported on the return?",
        "a": "No."
      },
      {
        "id": "v3-421",
        "q": "Where is home-sale depreciation recapture reported on Schedule D?",
        "a": "Line 19."
      },
      {
        "id": "v3-422",
        "q": "What is the general rule when debt is forgiven?",
        "a": "The forgiven amount can be cancellation-of-indebtedness income unless an exception applies."
      },
      {
        "id": "v3-423",
        "q": "What home-related debt exception is discussed for foreclosure or abandonment?",
        "a": "Qualified principal residence indebtedness."
      },
      {
        "id": "v3-424",
        "q": "What events can produce the home-debt-forgiveness situation described?",
        "a": "Foreclosure, short sale accepted in full satisfaction, or abandonment/turning the property over to the lender in satisfaction of the debt."
      },
      {
        "id": "v3-425",
        "q": "What must qualified principal residence debt generally have been used for?",
        "a": "To buy, build, or improve the main home, including qualifying refinanced debt used for those purposes."
      },
      {
        "id": "v3-426",
        "q": "Does cash-out refinancing used to pay unrelated debt qualify for the principal-residence debt exclusion?",
        "a": "No."
      },
      {
        "id": "v3-427",
        "q": "Must the qualified principal residence indebtedness relate to the taxpayer’s main home?",
        "a": "Yes."
      },
      {
        "id": "v3-428",
        "q": "What form does the lender issue in the foreclosure/abandonment situation discussed?",
        "a": "Form 1099-A."
      },
      {
        "id": "v3-429",
        "q": "Peter originally borrowed $200,000 for his home, later refinanced $175,000 of remaining home debt plus $25,000 cash to pay a car loan. What amount is qualified principal residence indebtedness?",
        "a": "$175,000."
      },
      {
        "id": "v3-430",
        "q": "In Peter’s foreclosure example, how much debt-cancellation income is taxable because the cash-out portion paid a car loan?",
        "a": "$25,000."
      },
      {
        "id": "v3-431",
        "q": "If Peter had used the extra $25,000 refinancing proceeds to add onto the home instead of paying a car loan, how would the example treat that amount?",
        "a": "It would qualify as home-improvement debt and could be eligible for the exclusion."
      },
      {
        "id": "v3-432",
        "q": "What is an installment sale?",
        "a": "A sale at a gain in which at least one payment is received in a tax year after the year of sale."
      },
      {
        "id": "v3-433",
        "q": "How is gain generally recognized in an installment sale?",
        "a": "Part of the gain is recognized in each year one or more payments are received."
      },
      {
        "id": "v3-434",
        "q": "Must all gain be reported in the year of sale when installment treatment applies?",
        "a": "No."
      },
      {
        "id": "v3-435",
        "q": "Does installment-sale treatment apply to exchange-traded stocks or securities?",
        "a": "No."
      },
      {
        "id": "v3-436",
        "q": "Can a taxpayer elect out of installment-sale treatment?",
        "a": "Yes, and recognize the gain in the year of sale instead."
      },
      {
        "id": "v3-437",
        "q": "Does installment-sale treatment apply when the sale produces a loss?",
        "a": "No; it applies to sales at a gain."
      },
      {
        "id": "v3-438",
        "q": "What form is used to report an installment sale?",
        "a": "Form 6252."
      },
      {
        "id": "v3-439",
        "q": "For how many years is Form 6252 generally filed?",
        "a": "Each year in which one or more installment payments are received."
      },
      {
        "id": "v3-440",
        "q": "What three components can an installment payment contain?",
        "a": "Return of basis, interest income, and gain on sale."
      },
      {
        "id": "v3-441",
        "q": "What is the formula for the gain portion of an installment payment?",
        "a": "Gross profit percentage multiplied by the payment amount after subtracting interest."
      },
      {
        "id": "v3-442",
        "q": "How is gross profit percentage calculated?",
        "a": "Gross profit divided by contract price."
      },
      {
        "id": "v3-443",
        "q": "How is gross profit calculated under the formula taught?",
        "a": "Sales price minus costs of sale minus basis."
      },
      {
        "id": "v3-444",
        "q": "If contract price is $60,000 and gross profit is $15,000, what is the gross profit percentage?",
        "a": "25%."
      },
      {
        "id": "v3-445",
        "q": "If the gross profit percentage is 25%, what percentage of each principal payment is treated as gain?",
        "a": "25%."
      },
      {
        "id": "v3-446",
        "q": "Marcus has basis $30,000, sells land for $48,000, and pays $2,000 closing costs. What is gross profit?",
        "a": "$16,000."
      },
      {
        "id": "v3-447",
        "q": "Marcus’s gross profit is $16,000 on a $48,000 contract price. What is the gross profit percentage?",
        "a": "33.33%."
      },
      {
        "id": "v3-448",
        "q": "Marcus receives a $2,000 installment payment with $200 interest. How much remains after subtracting interest?",
        "a": "$1,800."
      },
      {
        "id": "v3-449",
        "q": "At a 33.33% gross profit percentage, how much of Marcus’s $1,800 principal payment is gain?",
        "a": "$600."
      },
      {
        "id": "v3-450",
        "q": "How much of Marcus’s $2,000 payment is interest income?",
        "a": "$200."
      },
      {
        "id": "v3-451",
        "q": "How much of Marcus’s $2,000 payment is return of basis?",
        "a": "$1,200."
      },
      {
        "id": "v3-452",
        "q": "Marcus receives 12 payments in 2025, each producing $600 of gain. What total long-term capital gain is reported?",
        "a": "$7,200."
      },
      {
        "id": "v3-453",
        "q": "Marcus receives 12 payments with $200 interest each. What total interest income is reported?",
        "a": "$2,400."
      },
      {
        "id": "v3-454",
        "q": "For an installment-sale calculation, what should be subtracted from each payment before applying the gross profit percentage?",
        "a": "The interest portion."
      },
      {
        "id": "v3-455",
        "q": "What is a Section 1031 exchange?",
        "a": "A qualifying like-kind exchange of business or investment real property for other business or investment real property."
      },
      {
        "id": "v3-456",
        "q": "In a fully qualifying Section 1031 exchange with only like-kind property, is gain recognized immediately?",
        "a": "No."
      },
      {
        "id": "v3-457",
        "q": "In a fully qualifying Section 1031 exchange with only like-kind property, is loss deducted immediately?",
        "a": "No."
      },
      {
        "id": "v3-458",
        "q": "What form is used to report a like-kind exchange?",
        "a": "Form 8824."
      },
      {
        "id": "v3-459",
        "q": "Where else does the lecture say the Section 1031 exchange is reported?",
        "a": "Schedule D."
      },
      {
        "id": "v3-460",
        "q": "Must the property in a Section 1031 exchange be business or investment property?",
        "a": "Yes."
      },
      {
        "id": "v3-461",
        "q": "Can personal-use property qualify for Section 1031 treatment?",
        "a": "No."
      },
      {
        "id": "v3-462",
        "q": "What type of property must be given and received for the current Section 1031 rule discussed?",
        "a": "Real property."
      },
      {
        "id": "v3-463",
        "q": "Must the exchanged properties be like kind?",
        "a": "Yes."
      },
      {
        "id": "v3-464",
        "q": "For U.S. real property, how broadly is like-kind treatment described?",
        "a": "Real estate for real estate is generally like kind as long as both properties are in the United States."
      },
      {
        "id": "v3-465",
        "q": "Can vacant land be exchanged for a warehouse and still be like kind under the example?",
        "a": "Yes."
      },
      {
        "id": "v3-466",
        "q": "Can property held primarily for resale qualify for Section 1031 treatment?",
        "a": "No."
      },
      {
        "id": "v3-467",
        "q": "Can a home builder use Section 1031 treatment for houses held for sale to customers?",
        "a": "No."
      },
      {
        "id": "v3-468",
        "q": "By when must replacement property be identified in a deferred Section 1031 exchange?",
        "a": "Within 45 days after transferring the property given up."
      },
      {
        "id": "v3-469",
        "q": "By when must replacement property generally be received?",
        "a": "By the earlier of 180 days after transferring the old property or the due date, including extensions, of the tax return for the transfer year."
      },
      {
        "id": "v3-470",
        "q": "What is “boot” in a Section 1031 exchange?",
        "a": "Money or non-like-kind property received in addition to the like-kind real property."
      },
      {
        "id": "v3-471",
        "q": "Can receiving boot make part of a Section 1031 exchange taxable?",
        "a": "Yes."
      },
      {
        "id": "v3-472",
        "q": "How much gain is recognized when boot is received?",
        "a": "The lesser of the realized gain or the boot received, reduced by applicable costs of sale under the formula discussed."
      },
      {
        "id": "v3-473",
        "q": "If the other party assumes the taxpayer’s liability on the relinquished property, how is that treated?",
        "a": "Like cash received, so it is treated as boot."
      },
      {
        "id": "v3-474",
        "q": "A $50,000 mortgage is assumed by the other party in the exchange. How much boot does that liability assumption represent?",
        "a": "$50,000."
      },
      {
        "id": "v3-475",
        "q": "If the taxpayer pays additional money rather than receives boot, does that alone make the exchange taxable?",
        "a": "No, assuming the other qualifying requirements are met."
      },
      {
        "id": "v3-476",
        "q": "Alex gives property with $80,000 basis and receives property worth $100,000 plus $10,000 cash while paying $5,000 closing costs. What is realized gain in the example?",
        "a": "$25,000."
      },
      {
        "id": "v3-477",
        "q": "In Alex’s first example, what is the recognized/taxable gain?",
        "a": "$5,000."
      },
      {
        "id": "v3-478",
        "q": "Why is Alex’s recognized gain $5,000 in the first example?",
        "a": "The $10,000 cash boot is reduced by $5,000 closing costs."
      },
      {
        "id": "v3-479",
        "q": "In Alex’s second example, the other party also assumes a $30,000 mortgage. What is Alex’s realized gain?",
        "a": "$55,000."
      },
      {
        "id": "v3-480",
        "q": "In Alex’s second example with the $30,000 assumed mortgage, what is taxable gain?",
        "a": "$35,000."
      },
      {
        "id": "v3-481",
        "q": "Can related parties engage in a Section 1031 exchange?",
        "a": "Yes."
      },
      {
        "id": "v3-482",
        "q": "What special two-year rule applies to related-party Section 1031 exchanges?",
        "a": "If either party disposes of the exchanged property within two years, the exchange can lose nonrecognition treatment."
      },
      {
        "id": "v3-483",
        "q": "What may be required if a related party disposes of Section 1031 property within two years after the exchange?",
        "a": "The previously deferred gain or loss may have to be recognized, potentially requiring an amended return."
      },
      {
        "id": "v3-484",
        "q": "When is the previously deferred gain recognized after a disqualifying related-party disposition?",
        "a": "When the property is disposed of."
      },
      {
        "id": "v3-485",
        "q": "Give examples of family members treated as related parties for the Section 1031 rule discussed.",
        "a": "Spouse, siblings, parent, child, and similar family relationships."
      },
      {
        "id": "v3-486",
        "q": "What ownership percentage can make an entity and owner related for this Section 1031 rule?",
        "a": "More than 50% direct or indirect ownership."
      },
      {
        "id": "v3-487",
        "q": "What Internal Revenue Code section is associated with involuntary conversions?",
        "a": "Section 1033."
      },
      {
        "id": "v3-488",
        "q": "What is an involuntary conversion?",
        "a": "Property is destroyed, stolen, condemned, or disposed of under threat of condemnation and the owner receives property or money such as insurance or a condemnation award."
      },
      {
        "id": "v3-489",
        "q": "How is an involuntary conversion generally treated initially?",
        "a": "As a sale, with gain or loss generally determined in the year realized unless postponement rules apply."
      },
      {
        "id": "v3-490",
        "q": "What is the basic gain/loss formula for an involuntary conversion?",
        "a": "Net payment received minus adjusted basis."
      },
      {
        "id": "v3-491",
        "q": "What is “net payment” in an involuntary conversion?",
        "a": "The payment received minus costs of obtaining it."
      },
      {
        "id": "v3-492",
        "q": "Can attorney fees incurred to obtain a condemnation award reduce the net payment used to calculate gain?",
        "a": "Yes."
      },
      {
        "id": "v3-493",
        "q": "Levi’s personal-use workshop has $40,000 basis and he receives $50,000 insurance proceeds after a tornado. What gain is realized?",
        "a": "$10,000."
      },
      {
        "id": "v3-494",
        "q": "How is Levi’s $10,000 gain on the personal-use workshop treated if not postponed?",
        "a": "As a capital gain."
      },
      {
        "id": "v3-495",
        "q": "Levi’s personal-use workshop has $60,000 basis and he receives $50,000 insurance proceeds. What loss is realized?",
        "a": "$10,000."
      },
      {
        "id": "v3-496",
        "q": "Is Levi’s $10,000 loss on the personal-use workshop deductible?",
        "a": "No, because losses on personal-use property are not deductible."
      },
      {
        "id": "v3-497",
        "q": "Would the loss potentially be deductible if the destroyed workshop were a business asset?",
        "a": "Yes, under the distinction discussed."
      },
      {
        "id": "v3-498",
        "q": "When can gain from an involuntary conversion be postponed?",
        "a": "When qualifying replacement property is received or purchased within the replacement period."
      },
      {
        "id": "v3-499",
        "q": "What is the general replacement period for an involuntary conversion?",
        "a": "Two years."
      },
      {
        "id": "v3-500",
        "q": "What replacement period applies to business or investment real property under the exception discussed?",
        "a": "Three years."
      },
      {
        "id": "v3-501",
        "q": "What replacement period applies to a main home lost in a federal disaster area?",
        "a": "Four years."
      },
      {
        "id": "v3-502",
        "q": "What replacement period applies to livestock lost in an area eligible for federal assistance?",
        "a": "Four years."
      },
      {
        "id": "v3-503",
        "q": "What does it mean to postpone gain from an involuntary conversion?",
        "a": "The gain is deferred until the replacement property is later disposed of."
      },
      {
        "id": "v3-504",
        "q": "Levi has $40,000 basis, receives $50,000 insurance proceeds, and rebuilds the workshop within the replacement period. How much current capital gain is recognized in the example?",
        "a": "$0."
      },
      {
        "id": "v3-505",
        "q": "What is Levi’s basis in the rebuilt workshop in that postponement example?",
        "a": "$40,000."
      },
      {
        "id": "v3-506",
        "q": "What is a condemnation?",
        "a": "The legal taking of private property by a government body for public use without the owner’s consent."
      },
      {
        "id": "v3-507",
        "q": "Is a sale under threat of condemnation treated as a condemnation for these rules?",
        "a": "Yes."
      },
      {
        "id": "v3-508",
        "q": "Is condemnation a type of involuntary conversion?",
        "a": "Yes."
      },
      {
        "id": "v3-509",
        "q": "Must the government pay for condemned property?",
        "a": "Yes; the example describes payment of fair market value."
      },
      {
        "id": "v3-510",
        "q": "Can the normal $250,000/$500,000 principal-residence gain exclusion apply to a condemned principal residence?",
        "a": "Yes, if the requirements are met."
      },
      {
        "id": "v3-511",
        "q": "Can condemnation support a partial principal-residence exclusion when the full tests are not met?",
        "a": "Yes; it is treated as an unforeseeable event in the discussion."
      },
      {
        "id": "v3-512",
        "q": "Can gain on condemned property other than a principal residence be postponed with qualifying replacement property?",
        "a": "Yes, under the involuntary-conversion replacement rules."
      }
    ]
  },
  {
    "id": "video-4",
    "video": 4,
    "title": "Adjustments & Deductions",
    "cards": [
      {
        "id": "v4-001",
        "q": "What is adjusted gross income (AGI) in the tax-return flow?",
        "a": "Gross income minus adjustments to income."
      },
      {
        "id": "v4-002",
        "q": "What do below-the-line deductions reduce AGI to?",
        "a": "Taxable income."
      },
      {
        "id": "v4-003",
        "q": "What is the “line” in the phrases above-the-line and below-the-line deductions?",
        "a": "Adjusted gross income (AGI)."
      },
      {
        "id": "v4-004",
        "q": "What are adjustments to income also called?",
        "a": "Above-the-line deductions."
      },
      {
        "id": "v4-005",
        "q": "Are the standard deduction and itemized deductions above-the-line or below-the-line deductions?",
        "a": "Below-the-line deductions."
      },
      {
        "id": "v4-006",
        "q": "Is the qualified business income deduction (QBID) above or below the line?",
        "a": "Below the line."
      },
      {
        "id": "v4-007",
        "q": "Where are adjustments to income reported on Form 1040?",
        "a": "Schedule 1, Part II."
      },
      {
        "id": "v4-008",
        "q": "What is the 2025 educator expense deduction limit per eligible educator?",
        "a": "$300."
      },
      {
        "id": "v4-009",
        "q": "Which school levels qualify for the educator expense deduction?",
        "a": "Kindergarten through 12th grade."
      },
      {
        "id": "v4-010",
        "q": "Which education workers can qualify for the educator expense deduction?",
        "a": "Teachers, instructors, counselors, principals, and aides."
      },
      {
        "id": "v4-011",
        "q": "How many hours must an eligible educator work in a school during the calendar year?",
        "a": "At least 900 hours."
      },
      {
        "id": "v4-012",
        "q": "If both spouses filing jointly qualify as educators, what is their combined maximum educator expense deduction?",
        "a": "$600, or $300 each."
      },
      {
        "id": "v4-013",
        "q": "What types of educator expenses can qualify for the deduction?",
        "a": "Unreimbursed ordinary and necessary expenses for professional development courses, books, supplies, equipment, and other classroom materials."
      },
      {
        "id": "v4-014",
        "q": "Can qualifying educator expenses include PPE and disinfectant used to prevent the spread of coronavirus?",
        "a": "Yes."
      },
      {
        "id": "v4-015",
        "q": "Does the educator expense deduction apply to preschool teachers?",
        "a": "No."
      },
      {
        "id": "v4-016",
        "q": "Does the educator expense deduction apply to college instructors?",
        "a": "No; it is limited to K–12."
      },
      {
        "id": "v4-017",
        "q": "Do homeschooling expenses qualify for the educator expense deduction?",
        "a": "No."
      },
      {
        "id": "v4-018",
        "q": "Do nonathletic supplies for health or physical-education courses qualify for the educator expense deduction?",
        "a": "No."
      },
      {
        "id": "v4-019",
        "q": "When can National Guard and Reserve members deduct unreimbursed travel expenses as an adjustment to income?",
        "a": "When they travel more than 100 miles from home to perform their service."
      },
      {
        "id": "v4-020",
        "q": "Can qualifying performing artists deduct certain business expenses as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-021",
        "q": "Can fee-based state or local government officials deduct certain business expenses as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-022",
        "q": "What form is associated with certain employee business expenses for these special categories of taxpayers?",
        "a": "Form 2106."
      },
      {
        "id": "v4-023",
        "q": "When is an HSA contribution deductible as an adjustment to income?",
        "a": "When it was not made by the employer and was not already taken from pay on a pre-tax basis."
      },
      {
        "id": "v4-024",
        "q": "Why are HSA contributions taken from an employee’s paycheck on a pre-tax basis not deducted again as an adjustment to income?",
        "a": "Because they were already excluded from W-2 wages."
      },
      {
        "id": "v4-025",
        "q": "Where can a self-employed taxpayer deduct qualifying HSA contributions?",
        "a": "As an adjustment to income."
      },
      {
        "id": "v4-026",
        "q": "Can an employee deduct extra HSA contributions made outside payroll as an adjustment to income?",
        "a": "Yes, if they were not already made pre-tax."
      },
      {
        "id": "v4-027",
        "q": "Can new Archer MSA accounts generally be opened?",
        "a": "No; Archer MSAs are older accounts."
      },
      {
        "id": "v4-028",
        "q": "Can contributions to an existing Archer MSA be deductible as an adjustment to income?",
        "a": "Yes, if they were not already made pre-tax through payroll."
      },
      {
        "id": "v4-029",
        "q": "Who can potentially take the self-employed health insurance deduction?",
        "a": "A self-employed taxpayer who paid health-insurance premiums for themselves, a spouse, or dependents and meets the other eligibility rules."
      },
      {
        "id": "v4-030",
        "q": "What employer-coverage condition can block the self-employed health insurance deduction?",
        "a": "Eligibility for subsidized health insurance through the taxpayer’s or spouse’s employer."
      },
      {
        "id": "v4-031",
        "q": "What does subsidized employer health insurance mean?",
        "a": "The employer pays part or all of the insurance cost."
      },
      {
        "id": "v4-032",
        "q": "If a self-employed taxpayer is eligible for subsidized employer coverage but chooses not to enroll, can they still take the self-employed health insurance deduction?",
        "a": "No."
      },
      {
        "id": "v4-033",
        "q": "Can a taxpayer qualify for the self-employed health insurance deduction for some months but not others?",
        "a": "Yes."
      },
      {
        "id": "v4-034",
        "q": "If a taxpayer leaves a job with subsidized insurance and starts a business, for which months can the self-employed health insurance deduction potentially apply?",
        "a": "For the months when the taxpayer no longer had access to subsidized employer coverage."
      },
      {
        "id": "v4-035",
        "q": "Can the self-employed health insurance deduction create or increase a business loss?",
        "a": "No."
      },
      {
        "id": "v4-036",
        "q": "What is the maximum self-employed health insurance deduction relative to business profit?",
        "a": "It cannot exceed the profit from the business."
      },
      {
        "id": "v4-037",
        "q": "Are alimony payments under a divorce or separation agreement entered before January 1, 2019 deductible by the payer?",
        "a": "Yes, generally."
      },
      {
        "id": "v4-038",
        "q": "Are alimony payments under an agreement entered on or after January 1, 2019 deductible by the payer?",
        "a": "No."
      },
      {
        "id": "v4-039",
        "q": "For a pre-2019 divorce, how is alimony generally treated for the payer and recipient?",
        "a": "The payer can deduct it, and the recipient must include it in income."
      },
      {
        "id": "v4-040",
        "q": "For a post-2018 divorce, how is alimony generally treated for the payer and recipient?",
        "a": "The payer cannot deduct it, and the recipient does not include it in income."
      },
      {
        "id": "v4-041",
        "q": "Can a later modification to a pre-2019 divorce agreement eliminate the alimony deduction?",
        "a": "Yes, if the post-2018 modification provides that the alimony will not be included in the recipient’s income."
      },
      {
        "id": "v4-042",
        "q": "Can self-employed contributions to a SEP, SIMPLE, or qualified retirement plan be deducted as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-043",
        "q": "Where is a deductible IRA contribution taken on the individual return?",
        "a": "As an adjustment to income."
      },
      {
        "id": "v4-044",
        "q": "What is the maximum annual student-loan interest deduction discussed for 2025?",
        "a": "$2,500."
      },
      {
        "id": "v4-045",
        "q": "Can a taxpayer filing Married Filing Separately take the student-loan interest deduction?",
        "a": "No."
      },
      {
        "id": "v4-046",
        "q": "Can a taxpayer who is claimed as someone else’s dependent take the student-loan interest deduction?",
        "a": "No."
      },
      {
        "id": "v4-047",
        "q": "For filing statuses other than MFJ, over what AGI range does the student-loan interest deduction phase out?",
        "a": "$85,000 to $100,000."
      },
      {
        "id": "v4-048",
        "q": "For MFJ, over what AGI range does the student-loan interest deduction phase out?",
        "a": "$170,000 to $200,000."
      },
      {
        "id": "v4-049",
        "q": "If a single taxpayer’s AGI is under $85,000, what student-loan interest deduction can they potentially take?",
        "a": "Up to $2,500."
      },
      {
        "id": "v4-050",
        "q": "If a single taxpayer’s AGI is over $100,000, how much student-loan interest deduction is allowed?",
        "a": "None."
      },
      {
        "id": "v4-051",
        "q": "When can a parent deduct student-loan interest paid for a child?",
        "a": "Only if the parent is legally liable for repayment, such as being a borrower or co-signer."
      },
      {
        "id": "v4-052",
        "q": "If a student loan is only in the student’s name but the parents make the payments, who may deduct the interest?",
        "a": "The student, if otherwise eligible and not claimed as a dependent."
      },
      {
        "id": "v4-053",
        "q": "What must a qualifying student loan have been used to pay for?",
        "a": "Qualified higher-education expenses for the taxpayer, spouse, dependent, or certain persons who could have been dependents except for specified exceptions."
      },
      {
        "id": "v4-054",
        "q": "Can room and board count as qualified expenses for the student-loan interest deduction?",
        "a": "Yes."
      },
      {
        "id": "v4-055",
        "q": "Must the education be in a degree, certificate, or similar program at an eligible institution for the student-loan interest rules discussed?",
        "a": "Yes."
      },
      {
        "id": "v4-056",
        "q": "Can attorney fees and court costs for certain unlawful-discrimination claims be deducted as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-057",
        "q": "What is the limit on the deduction for attorney fees and court costs from an unlawful-discrimination claim?",
        "a": "The deduction cannot exceed the gross income from the claim."
      },
      {
        "id": "v4-058",
        "q": "How are IRS whistleblower-award legal expenses treated?",
        "a": "Attorney fees and court costs can be deducted as an adjustment to income up to the amount of the award included in income."
      },
      {
        "id": "v4-059",
        "q": "What percentage of recovered amounts can an IRS whistleblower potentially receive in the example discussed?",
        "a": "15% to 30%."
      },
      {
        "id": "v4-060",
        "q": "Is an IRS whistleblower award taxable income?",
        "a": "Yes."
      },
      {
        "id": "v4-061",
        "q": "What portion of self-employment tax is generally deductible as an adjustment to income?",
        "a": "One-half."
      },
      {
        "id": "v4-062",
        "q": "What does the one-half self-employment-tax deduction represent?",
        "a": "The employer-equivalent share of Social Security and Medicare tax."
      },
      {
        "id": "v4-063",
        "q": "Is the one-half self-employment-tax deduction taken on Schedule C?",
        "a": "No; it is taken as an adjustment to income on the individual return."
      },
      {
        "id": "v4-064",
        "q": "Who can currently deduct unreimbursed moving expenses as an adjustment to income under the rule discussed?",
        "a": "Qualifying members of the Armed Forces moving under military orders."
      },
      {
        "id": "v4-065",
        "q": "Can an early-withdrawal penalty on a certificate of deposit or similar savings account be deducted as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-066",
        "q": "If an employee must turn jury-duty pay over to their employer because the employer continued their salary, how is the jury-duty pay treated?",
        "a": "It is included in income and then deducted as an adjustment to income."
      },
      {
        "id": "v4-067",
        "q": "When can Olympic awards and medals effectively be excluded using an adjustment to income?",
        "a": "When the athlete’s AGI is under $1 million."
      },
      {
        "id": "v4-068",
        "q": "What happens to Olympic award income if the athlete’s AGI is over $1 million?",
        "a": "It remains taxable because no offsetting adjustment is allowed."
      },
      {
        "id": "v4-069",
        "q": "Can certain reforestation expenses be deducted as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-070",
        "q": "Can repayment of certain supplemental unemployment benefits be deducted as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-071",
        "q": "Can contributions to certain union pension plans be deducted as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-072",
        "q": "Can certain contributions by chaplains to §403(b) plans be deducted as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-073",
        "q": "Where is the foreign housing deduction taken?",
        "a": "As an adjustment to income."
      },
      {
        "id": "v4-074",
        "q": "Can certain excess deductions from a trust be taken as an adjustment to income?",
        "a": "Yes."
      },
      {
        "id": "v4-075",
        "q": "How should an incorrect Form 1099-K generally be handled under the method discussed?",
        "a": "Report the amount as income so IRS matching sees it, then back it out with an adjustment to income."
      },
      {
        "id": "v4-076",
        "q": "Why report an incorrect Form 1099-K amount before deducting it back out?",
        "a": "To avoid an IRS computer-matching notice while still preventing tax on the incorrect amount."
      },
      {
        "id": "v4-077",
        "q": "Can most taxpayers choose each year between itemizing deductions and taking the standard deduction?",
        "a": "Yes."
      },
      {
        "id": "v4-078",
        "q": "Can a taxpayer switch between itemizing and taking the standard deduction from one year to the next?",
        "a": "Yes."
      },
      {
        "id": "v4-079",
        "q": "If MFS spouses file separately and one spouse itemizes, can the other spouse take the standard deduction?",
        "a": "No; both must itemize or both must use the standard deduction."
      },
      {
        "id": "v4-080",
        "q": "Can most nonresident aliens and dual-status aliens take the standard deduction?",
        "a": "No."
      },
      {
        "id": "v4-081",
        "q": "What election can allow a nonresident alien married to a U.S. citizen or resident alien to take the standard deduction?",
        "a": "Electing to be taxed as a U.S. resident."
      },
      {
        "id": "v4-082",
        "q": "What special group from India may be able to take the standard deduction despite nonresident status?",
        "a": "Certain students and business apprentices from India."
      },
      {
        "id": "v4-083",
        "q": "Can a taxpayer filing a short tax year because of a change in annual accounting period take the standard deduction?",
        "a": "No."
      },
      {
        "id": "v4-084",
        "q": "What is the 2025 basic standard deduction for Single or MFS?",
        "a": "$15,750."
      },
      {
        "id": "v4-085",
        "q": "What is the 2025 basic standard deduction for MFJ?",
        "a": "$31,500."
      },
      {
        "id": "v4-086",
        "q": "What is the 2025 basic standard deduction for Qualifying Surviving Spouse?",
        "a": "$31,500."
      },
      {
        "id": "v4-087",
        "q": "What is the 2025 basic standard deduction for Head of Household?",
        "a": "$23,625."
      },
      {
        "id": "v4-088",
        "q": "How is the HOH basic standard deduction related to the Single and MFJ amounts?",
        "a": "It is exactly halfway between $15,750 and $31,500."
      },
      {
        "id": "v4-089",
        "q": "How many standard-deduction “points” are added for being age 65 or older?",
        "a": "One point."
      },
      {
        "id": "v4-090",
        "q": "How many standard-deduction “points” are added for blindness?",
        "a": "One point."
      },
      {
        "id": "v4-091",
        "q": "For Single or HOH, how much is added to the standard deduction per age/blindness point?",
        "a": "$2,000."
      },
      {
        "id": "v4-092",
        "q": "For married taxpayers and Qualifying Surviving Spouse, how much is added per age/blindness point?",
        "a": "$1,600."
      },
      {
        "id": "v4-093",
        "q": "What is the 2025 standard deduction for a Single taxpayer age 65 or older but not blind?",
        "a": "$17,750."
      },
      {
        "id": "v4-094",
        "q": "What is the 2025 standard deduction for a Single taxpayer who is both age 65 or older and blind?",
        "a": "$19,750."
      },
      {
        "id": "v4-095",
        "q": "What is the maximum number of age/blindness points for a Single or HOH taxpayer?",
        "a": "Two."
      },
      {
        "id": "v4-096",
        "q": "What is the maximum number of age/blindness points for MFJ?",
        "a": "Four."
      },
      {
        "id": "v4-097",
        "q": "Why can an MFS taxpayer sometimes claim age/blindness points for a spouse not on the return?",
        "a": "If the spouse has no gross income, does not file a return, and cannot be claimed as someone else’s dependent."
      },
      {
        "id": "v4-098",
        "q": "For age-65 standard-deduction purposes, what date is used to determine age?",
        "a": "January 1 of the following year."
      },
      {
        "id": "v4-099",
        "q": "If a taxpayer turns 65 on January 1, 2026, are they treated as age 65 for the 2025 standard deduction?",
        "a": "Yes."
      },
      {
        "id": "v4-100",
        "q": "If a taxpayer can be claimed as someone else’s dependent, what is the basic standard-deduction formula?",
        "a": "The greater of $1,350 or earned income plus $450."
      },
      {
        "id": "v4-101",
        "q": "For a dependent taxpayer who is age 65 or older or blind, what extra amount is added per point if Single or HOH?",
        "a": "$2,000 per point."
      },
      {
        "id": "v4-102",
        "q": "For a dependent taxpayer who is age 65 or older or blind, what extra amount is added per point for the other filing statuses?",
        "a": "$1,600 per point."
      },
      {
        "id": "v4-103",
        "q": "In the Walken example, what is the standard deduction for a 15-year-old dependent with $3,500 of earned income?",
        "a": "$3,950, because $3,500 + $450 exceeds $1,350."
      },
      {
        "id": "v4-104",
        "q": "When can a qualified disaster loss increase the standard deduction?",
        "a": "When it is a qualified disaster loss in a federally declared disaster area meeting the applicable date requirements."
      },
      {
        "id": "v4-105",
        "q": "For the 2025 rule discussed, by what amount does a qualified disaster loss increase the standard deduction?",
        "a": "The loss amount minus $500."
      },
      {
        "id": "v4-106",
        "q": "What date limitation applies to the qualified disaster loss rule taught for 2025?",
        "a": "The disaster must have occurred on or before July 4, 2025 and ended by August 3, 2025."
      },
      {
        "id": "v4-107",
        "q": "In the Luke and Laura example, what is the standard deduction when an MFJ couple has a $10,000 qualified disaster loss?",
        "a": "$41,000: $31,500 + $10,000 − $500."
      },
      {
        "id": "v4-108",
        "q": "What are the main categories of itemized deductions discussed?",
        "a": "Medical and dental expenses, taxes paid, interest paid, charitable contributions, casualty and theft losses, and other itemized deductions."
      },
      {
        "id": "v4-109",
        "q": "What percentage-of-AGI floor applies to deductible medical and dental expenses?",
        "a": "7.5% of AGI."
      },
      {
        "id": "v4-110",
        "q": "If AGI is $100,000 and eligible medical expenses are $10,000, how much is deductible after the 7.5% floor?",
        "a": "$2,500."
      },
      {
        "id": "v4-111",
        "q": "Whose qualifying medical expenses can generally be included in a taxpayer’s itemized medical deduction?",
        "a": "The taxpayer’s, spouse’s, and dependents’ qualifying medical expenses."
      },
      {
        "id": "v4-112",
        "q": "How can medical expenses for a decedent be deducted on the final return?",
        "a": "Expenses incurred before death may be deducted on the final return if paid within one year and one day after death."
      },
      {
        "id": "v4-113",
        "q": "Why is there a special one-year-and-one-day rule for a decedent’s medical expenses?",
        "a": "It allows expenses incurred before death but billed or paid later to be deducted on the final return."
      },
      {
        "id": "v4-114",
        "q": "Can a doctor-prescribed weight-loss program qualify as a deductible medical expense?",
        "a": "Yes."
      },
      {
        "id": "v4-115",
        "q": "What is the lodging limit discussed for travel related to medical care?",
        "a": "Up to $50 per eligible person."
      },
      {
        "id": "v4-116",
        "q": "Are meals deductible merely because they are incurred while traveling for medical care?",
        "a": "No."
      },
      {
        "id": "v4-117",
        "q": "Can health, dental, and vision insurance premiums be deductible as medical expenses?",
        "a": "Yes, but only to the extent they were not already deducted elsewhere or paid pre-tax."
      },
      {
        "id": "v4-118",
        "q": "Can health-insurance premiums already excluded from W-2 wages through pre-tax payroll deductions be deducted again as an itemized medical expense?",
        "a": "No."
      },
      {
        "id": "v4-119",
        "q": "Can Medicare Part B premiums be included in deductible medical expenses?",
        "a": "Yes."
      },
      {
        "id": "v4-120",
        "q": "Can Medicare Part D premiums be included in deductible medical expenses?",
        "a": "Yes."
      },
      {
        "id": "v4-121",
        "q": "Can long-term-care insurance premiums be deductible medical expenses?",
        "a": "Yes, subject to age-based limits."
      },
      {
        "id": "v4-122",
        "q": "How do the deductible limits for long-term-care insurance premiums generally change with age?",
        "a": "They increase as the taxpayer gets older."
      },
      {
        "id": "v4-123",
        "q": "When can a home improvement or special equipment be deductible as a medical capital expense?",
        "a": "When its main purpose is medical care, the cost is reasonable, and the deduction is limited to the amount that does not increase the property’s fair market value."
      },
      {
        "id": "v4-124",
        "q": "If a medically necessary home improvement costs $12,000 and raises the home’s value by $5,000, what amount is deductible?",
        "a": "$7,000."
      },
      {
        "id": "v4-125",
        "q": "If the same $12,000 medically necessary improvement is made to a rented home, how much may be deductible under the example?",
        "a": "The full $12,000, because the renter does not receive the increase in the property’s value."
      },
      {
        "id": "v4-126",
        "q": "Can the cost of equipping a vehicle with special medical controls or equipment be deductible?",
        "a": "Yes."
      },
      {
        "id": "v4-127",
        "q": "Are diet foods deductible medical expenses merely because a weight-loss program is medically indicated?",
        "a": "No; the program may qualify, but ordinary food does not."
      },
      {
        "id": "v4-128",
        "q": "Is cosmetic surgery generally deductible as a medical expense?",
        "a": "No."
      },
      {
        "id": "v4-129",
        "q": "Are life-insurance premiums deductible as medical expenses?",
        "a": "No."
      },
      {
        "id": "v4-130",
        "q": "Is Medicare tax withheld from wages deductible as a medical expense?",
        "a": "No."
      },
      {
        "id": "v4-131",
        "q": "Is nursing care for a healthy baby deductible as a medical expense merely because a nurse provides it?",
        "a": "No; it is essentially child care rather than medical care."
      },
      {
        "id": "v4-132",
        "q": "Are nonprescription medicines generally deductible as medical expenses?",
        "a": "No, with insulin specifically noted as an exception."
      },
      {
        "id": "v4-133",
        "q": "Can insulin qualify as a deductible medical expense even though it no longer requires a prescription?",
        "a": "Yes."
      },
      {
        "id": "v4-134",
        "q": "Are vitamins and minerals generally deductible medical expenses?",
        "a": "No."
      },
      {
        "id": "v4-135",
        "q": "Are illegal drugs or illegal medical procedures deductible medical expenses?",
        "a": "No."
      },
      {
        "id": "v4-136",
        "q": "Are imported drugs that are not FDA-approved deductible medical expenses?",
        "a": "No."
      },
      {
        "id": "v4-137",
        "q": "Is travel primarily to rest or de-stress deductible as a medical expense?",
        "a": "No."
      },
      {
        "id": "v4-138",
        "q": "In the John example, why is only $10,000 of $12,000 health-insurance premiums deductible as self-employed health insurance?",
        "a": "Because his business profit is only $10,000, and that deduction cannot exceed business profit."
      },
      {
        "id": "v4-139",
        "q": "In the John example, how much of the remaining insurance premiums can be considered for itemized medical deduction?",
        "a": "$2,000."
      },
      {
        "id": "v4-140",
        "q": "In the John example, what total medical expenses are subject to the 7.5% AGI floor?",
        "a": "$7,000: $2,000 of remaining premiums plus $5,000 of other out-of-pocket medical expenses."
      },
      {
        "id": "v4-141",
        "q": "In the John example, what is 7.5% of his $30,000 AGI?",
        "a": "$2,250."
      },
      {
        "id": "v4-142",
        "q": "In the John example, what is his deductible medical-expense itemized deduction?",
        "a": "$4,750."
      },
      {
        "id": "v4-143",
        "q": "What does SALT stand for?",
        "a": "State and local taxes."
      },
      {
        "id": "v4-144",
        "q": "Are state and local income taxes potentially deductible as itemized deductions?",
        "a": "Yes."
      },
      {
        "id": "v4-145",
        "q": "Can mandatory contributions to state unemployment or workers’ compensation funds count with deductible state and local income taxes?",
        "a": "Yes, under the rule discussed."
      },
      {
        "id": "v4-146",
        "q": "Can taxes paid to a U.S. possession qualify with deductible state and local income taxes?",
        "a": "Yes."
      },
      {
        "id": "v4-147",
        "q": "What alternative may a taxpayer choose instead of deducting state and local income taxes?",
        "a": "State and local sales taxes."
      },
      {
        "id": "v4-148",
        "q": "Can a taxpayer deduct both state/local income taxes and state/local sales taxes for the same year?",
        "a": "No; it is one or the other."
      },
      {
        "id": "v4-149",
        "q": "What are the two methods discussed for determining deductible state and local sales tax?",
        "a": "Actual sales tax from receipts, or the Schedule A tables and worksheets."
      },
      {
        "id": "v4-150",
        "q": "What factors are used in the Schedule A sales-tax tables?",
        "a": "State of residence, income, and household size."
      },
      {
        "id": "v4-151",
        "q": "Are state and local real property taxes potentially deductible?",
        "a": "Yes."
      },
      {
        "id": "v4-152",
        "q": "What form may show real property taxes paid through a mortgage escrow account?",
        "a": "Form 1098."
      },
      {
        "id": "v4-153",
        "q": "If a seller pays their prorated share of property taxes through the settlement statement, can that amount be deductible?",
        "a": "Yes."
      },
      {
        "id": "v4-154",
        "q": "Can foreign real property taxes be deducted as a SALT itemized deduction?",
        "a": "No."
      },
      {
        "id": "v4-155",
        "q": "Are special assessments for services such as trash or lawn service deductible as real property taxes?",
        "a": "No."
      },
      {
        "id": "v4-156",
        "q": "Can state or local personal-property taxes on items such as cars, boats, or airplanes be deductible?",
        "a": "Yes, if they qualify as personal property taxes."
      },
      {
        "id": "v4-157",
        "q": "Are federal income taxes deductible as itemized taxes?",
        "a": "No."
      },
      {
        "id": "v4-158",
        "q": "Are federal excise taxes deductible as itemized taxes?",
        "a": "No."
      },
      {
        "id": "v4-159",
        "q": "Are Social Security and Medicare taxes deductible as itemized taxes?",
        "a": "No."
      },
      {
        "id": "v4-160",
        "q": "Are federal unemployment and railroad retirement taxes deductible as itemized taxes?",
        "a": "No."
      },
      {
        "id": "v4-161",
        "q": "Are customs duties and federal estate or gift taxes deductible as itemized taxes?",
        "a": "No."
      },
      {
        "id": "v4-162",
        "q": "Are driver’s-license fees, marriage fees, gasoline taxes, car-inspection charges, and special assessments generally deductible as itemized taxes?",
        "a": "No."
      },
      {
        "id": "v4-163",
        "q": "Can foreign income taxes be deducted instead of claimed as a credit?",
        "a": "Yes, although taking the credit is usually more favorable."
      },
      {
        "id": "v4-164",
        "q": "If foreign income taxes are deducted, are they included in the SALT cap?",
        "a": "No."
      },
      {
        "id": "v4-165",
        "q": "What is the 2025 SALT deduction cap under the OBBBA for most filing statuses?",
        "a": "$40,000."
      },
      {
        "id": "v4-166",
        "q": "What is the 2025 SALT deduction cap for MFS?",
        "a": "$20,000."
      },
      {
        "id": "v4-167",
        "q": "At what modified AGI level does the 2025 SALT cap begin to be reduced for higher-income taxpayers?",
        "a": "$500,000."
      },
      {
        "id": "v4-168",
        "q": "How is the 2025 SALT cap reduced once modified AGI exceeds $500,000?",
        "a": "By 30% of the excess over $500,000."
      },
      {
        "id": "v4-169",
        "q": "What is the minimum SALT cap after the high-income reduction?",
        "a": "$10,000."
      },
      {
        "id": "v4-170",
        "q": "In the Delilah example, with MAGI of $550,000, how much is the $40,000 SALT cap reduced?",
        "a": "$15,000, which is 30% of the $50,000 excess over $500,000."
      },
      {
        "id": "v4-171",
        "q": "In the Delilah example, what is the final SALT deduction limit?",
        "a": "$25,000."
      },
      {
        "id": "v4-172",
        "q": "In the Eunice example, with AGI of $700,000, what final SALT deduction is allowed despite the formula producing a lower amount?",
        "a": "$10,000."
      },
      {
        "id": "v4-173",
        "q": "What is a home mortgage for interest-deduction purposes?",
        "a": "A loan secured by the taxpayer’s main home or second home, regardless of the loan’s label."
      },
      {
        "id": "v4-174",
        "q": "What kinds of loans can count as home mortgages?",
        "a": "First mortgages, second mortgages, home-equity loans, and refinanced mortgages, if the other rules are met."
      },
      {
        "id": "v4-175",
        "q": "How many homes can generally support deductible home-mortgage interest?",
        "a": "Two: the main home and one second home."
      },
      {
        "id": "v4-176",
        "q": "What does it mean for a mortgage loan to be secured by the home?",
        "a": "The home serves as collateral for the loan."
      },
      {
        "id": "v4-177",
        "q": "Can a condominium qualify as a home for the mortgage-interest deduction?",
        "a": "Yes."
      },
      {
        "id": "v4-178",
        "q": "Can a mobile home qualify as a home for the mortgage-interest deduction?",
        "a": "Yes."
      },
      {
        "id": "v4-179",
        "q": "Can a boat qualify as a home for the mortgage-interest deduction?",
        "a": "Yes, if it has basic living accommodations."
      },
      {
        "id": "v4-180",
        "q": "What basic living accommodations must a property have to qualify as a home for mortgage-interest purposes?",
        "a": "Sleeping space, toilet, and cooking facilities."
      },
      {
        "id": "v4-181",
        "q": "For 2025, can interest on a home-equity loan still qualify as home-mortgage interest?",
        "a": "Yes, if the proceeds and other requirements qualify."
      },
      {
        "id": "v4-182",
        "q": "Can the taxpayer change which property is treated as the second home from year to year?",
        "a": "Yes."
      },
      {
        "id": "v4-183",
        "q": "Are mortgage insurance premiums (MIP) deductible in 2025 under the material discussed?",
        "a": "No."
      },
      {
        "id": "v4-184",
        "q": "For home-mortgage interest to qualify, how must the loan proceeds generally be used?",
        "a": "To buy, build, or substantially improve the home."
      },
      {
        "id": "v4-185",
        "q": "If a home-equity loan is used to substantially improve the home, can the interest qualify?",
        "a": "Yes."
      },
      {
        "id": "v4-186",
        "q": "If a home-equity loan is used for a vacation, car, or to pay unrelated debt, does the interest qualify as home-mortgage interest?",
        "a": "No."
      },
      {
        "id": "v4-187",
        "q": "If mortgage proceeds are used for business or investment purposes, can the interest still be deductible somewhere else?",
        "a": "Yes; it may qualify as business or investment interest rather than home-mortgage interest."
      },
      {
        "id": "v4-188",
        "q": "Can interest on a refinanced mortgage qualify if the original debt was used to buy, build, or substantially improve the home?",
        "a": "Yes."
      },
      {
        "id": "v4-189",
        "q": "For qualifying home-acquisition debt taken out before December 15, 2017, what debt limit applies for the mortgage-interest deduction?",
        "a": "$1 million."
      },
      {
        "id": "v4-190",
        "q": "For qualifying home-acquisition debt taken out after December 15, 2017, what debt limit applies?",
        "a": "$750,000."
      },
      {
        "id": "v4-191",
        "q": "What key mortgage-interest cutoff date separates the $1 million and $750,000 debt limits?",
        "a": "December 15, 2017."
      },
      {
        "id": "v4-192",
        "q": "Can a taxpayer elect to treat a mortgage as not secured by the home so it does not count toward the home-mortgage debt limit?",
        "a": "Yes."
      },
      {
        "id": "v4-193",
        "q": "Why might a taxpayer elect to treat a home-secured loan as not qualifying home-mortgage debt?",
        "a": "So interest used for business or investment purposes can be treated separately and the debt does not consume the home-mortgage limit."
      },
      {
        "id": "v4-194",
        "q": "What is the general rule for deducting mortgage points?",
        "a": "They are deducted ratably over the term of the loan."
      },
      {
        "id": "v4-195",
        "q": "What does one mortgage point generally equal?",
        "a": "1% of the loan amount."
      },
      {
        "id": "v4-196",
        "q": "On a $200,000 mortgage, how much is one point?",
        "a": "$2,000."
      },
      {
        "id": "v4-197",
        "q": "When can mortgage points often be deducted entirely in the year paid?",
        "a": "When the mortgage qualifies, the points are based on a percentage of the loan, are reasonable, and the taxpayer’s cash paid at closing is at least as much as the points."
      },
      {
        "id": "v4-198",
        "q": "Can points on a loan used to improve a home also potentially be currently deductible?",
        "a": "Yes, under similar qualifying rules."
      },
      {
        "id": "v4-199",
        "q": "What is investment interest?",
        "a": "Interest on a loan used to generate taxable investment income."
      },
      {
        "id": "v4-200",
        "q": "Does deductible investment interest include interest allocable to passive activities?",
        "a": "No."
      },
      {
        "id": "v4-201",
        "q": "Does deductible investment interest include interest on borrowing used to buy tax-exempt securities?",
        "a": "No."
      },
      {
        "id": "v4-202",
        "q": "Can interest on money borrowed to invest in taxable stocks or a private business qualify as investment interest?",
        "a": "Yes."
      },
      {
        "id": "v4-203",
        "q": "Can margin-account interest charged by a broker qualify as investment interest?",
        "a": "Yes."
      },
      {
        "id": "v4-204",
        "q": "Where are the four new OBBBA individual deductions reported for 2025?",
        "a": "Schedule 1-A."
      },
      {
        "id": "v4-205",
        "q": "What income measure is used for the phaseouts of the new 2025 deductions discussed?",
        "a": "Modified adjusted gross income (MAGI)."
      },
      {
        "id": "v4-206",
        "q": "For most taxpayers, how does MAGI compare with AGI for these new deductions?",
        "a": "It is the same, unless items such as Puerto Rico income or foreign earned income exclusions must be added back."
      },
      {
        "id": "v4-207",
        "q": "For what years is the qualified tips deduction currently scheduled to apply?",
        "a": "2025 through 2028."
      },
      {
        "id": "v4-208",
        "q": "What is the maximum qualified tips deduction for 2025 for filing statuses other than MFS?",
        "a": "$25,000."
      },
      {
        "id": "v4-209",
        "q": "Can a taxpayer filing MFS take the qualified tips deduction?",
        "a": "No."
      },
      {
        "id": "v4-210",
        "q": "Must a taxpayer itemize to take the qualified tips deduction?",
        "a": "No."
      },
      {
        "id": "v4-211",
        "q": "At what MAGI does the qualified tips deduction begin to phase out for most filers?",
        "a": "$150,000."
      },
      {
        "id": "v4-212",
        "q": "At what MAGI does the qualified tips deduction begin to phase out for MFJ?",
        "a": "$300,000."
      },
      {
        "id": "v4-213",
        "q": "How is the qualified tips deduction reduced once MAGI exceeds the threshold?",
        "a": "By $100 for each $1,000 over the threshold."
      },
      {
        "id": "v4-214",
        "q": "If a single taxpayer has MAGI of $160,000 and otherwise qualifies for the full $25,000 tips deduction, what is the deduction after phaseout?",
        "a": "$24,000."
      },
      {
        "id": "v4-215",
        "q": "For a self-employed taxpayer, what additional limit applies to the qualified tips deduction?",
        "a": "It cannot exceed the profit from the business."
      },
      {
        "id": "v4-216",
        "q": "Can the qualified tips deduction reduce a self-employed business below zero?",
        "a": "No."
      },
      {
        "id": "v4-217",
        "q": "Does the qualified tips deduction reduce Social Security or Medicare tax?",
        "a": "No; it is an income-tax deduction only."
      },
      {
        "id": "v4-218",
        "q": "What taxpayer identification requirement applies to the qualified tips deduction?",
        "a": "The taxpayer must have and report a Social Security number."
      },
      {
        "id": "v4-219",
        "q": "What kind of tips qualify for the qualified tips deduction?",
        "a": "Cash tips received in an occupation that customarily and regularly received tips on or before December 31, 2024, subject to the IRS list."
      },
      {
        "id": "v4-220",
        "q": "For the qualified tips deduction, can a credit-card tip count as a cash tip?",
        "a": "Yes."
      },
      {
        "id": "v4-221",
        "q": "Can tips received through a tip-sharing arrangement qualify?",
        "a": "Yes."
      },
      {
        "id": "v4-222",
        "q": "How must qualifying tips generally be reported to support the deduction?",
        "a": "On a W-2, 1099, or Form 4137 for employee tips not reported to the employer."
      },
      {
        "id": "v4-223",
        "q": "What is Form 4137 used for in the tips context?",
        "a": "Reporting employee tips that were not reported to the employer."
      },
      {
        "id": "v4-224",
        "q": "Can unreported tips qualify for the deduction if they are not on a W-2, 1099, or Form 4137?",
        "a": "No."
      },
      {
        "id": "v4-225",
        "q": "What special transition rule applies to 2025 tip reporting?",
        "a": "Employers do not have to separately identify qualifying tips on 2025 forms, so a reasonable method may be used to determine the deductible amount."
      },
      {
        "id": "v4-226",
        "q": "Must a qualifying tip be voluntary?",
        "a": "Yes."
      },
      {
        "id": "v4-227",
        "q": "Does an automatically imposed restaurant gratuity qualify as a qualified tip under the rule discussed?",
        "a": "No, because it is not voluntary."
      },
      {
        "id": "v4-228",
        "q": "Can tips from a specified service trade or business (SSTB) qualify for the qualified tips deduction?",
        "a": "No."
      },
      {
        "id": "v4-229",
        "q": "How does a tips deduction affect QBI for the qualified business income deduction?",
        "a": "It must be subtracted from business income when computing QBI."
      },
      {
        "id": "v4-230",
        "q": "In the Sam and Diane example, how much qualified tips deduction does an MFJ couple get when each spouse has more than $25,000 of qualifying tips?",
        "a": "$25,000 total."
      },
      {
        "id": "v4-231",
        "q": "If Sam and Diane were unmarried single taxpayers, how much could each potentially deduct for qualifying tips?",
        "a": "Up to $25,000 each."
      },
      {
        "id": "v4-232",
        "q": "For what years is the qualified overtime deduction currently scheduled to apply?",
        "a": "2025 through 2028."
      },
      {
        "id": "v4-233",
        "q": "What is the maximum qualified overtime deduction for most individual filers?",
        "a": "$12,500."
      },
      {
        "id": "v4-234",
        "q": "What is the maximum qualified overtime deduction for MFJ?",
        "a": "$25,000."
      },
      {
        "id": "v4-235",
        "q": "What overtime compensation qualifies for the deduction?",
        "a": "The portion of overtime required under §7 of the Fair Labor Standards Act that exceeds the employee’s regular rate."
      },
      {
        "id": "v4-236",
        "q": "If overtime is paid at time-and-a-half, what portion of the overtime pay qualifies for the deduction?",
        "a": "Only the extra one-half over the regular rate."
      },
      {
        "id": "v4-237",
        "q": "Must a taxpayer itemize to take the qualified overtime deduction?",
        "a": "No."
      },
      {
        "id": "v4-238",
        "q": "At what MAGI does the qualified overtime deduction begin to phase out for most filers?",
        "a": "$150,000."
      },
      {
        "id": "v4-239",
        "q": "At what MAGI does the qualified overtime deduction begin to phase out for MFJ?",
        "a": "$300,000."
      },
      {
        "id": "v4-240",
        "q": "How is the qualified overtime deduction reduced above the MAGI threshold?",
        "a": "By $100 for each $1,000 over the threshold."
      },
      {
        "id": "v4-241",
        "q": "Does the qualified overtime deduction reduce Social Security or Medicare tax?",
        "a": "No."
      },
      {
        "id": "v4-242",
        "q": "What identification requirement applies to the qualified overtime deduction?",
        "a": "A Social Security number must be reported."
      },
      {
        "id": "v4-243",
        "q": "What overtime rate does §7 of the FLSA generally require?",
        "a": "At least 1.5 times the employee’s regular rate."
      },
      {
        "id": "v4-244",
        "q": "If an employee is paid double time, how much of that premium qualifies for the deduction?",
        "a": "Only the extra 50% required by the FLSA, not the full double-time premium."
      },
      {
        "id": "v4-245",
        "q": "Does overtime required only by state law qualify if the FLSA would not require it?",
        "a": "No."
      },
      {
        "id": "v4-246",
        "q": "Under the FLSA rule discussed, when does weekly overtime generally begin?",
        "a": "After 40 hours in a workweek."
      },
      {
        "id": "v4-247",
        "q": "If a state requires overtime after 8 hours in a day but the employee works no more than 40 hours for the week, does that state-only overtime qualify for the federal qualified overtime deduction?",
        "a": "No."
      },
      {
        "id": "v4-248",
        "q": "In the Travis time-and-a-half example, what deduction results from 200 overtime hours at a $20 regular rate and $30 overtime rate?",
        "a": "$2,000."
      },
      {
        "id": "v4-249",
        "q": "Why is the Travis time-and-a-half deduction $2,000?",
        "a": "200 hours × the $10 qualifying premium per hour."
      },
      {
        "id": "v4-250",
        "q": "If Travis is paid double time at $40 per hour for the same 200 overtime hours, what is the qualified overtime deduction?",
        "a": "$2,000, because only the FLSA-required 50% premium qualifies."
      },
      {
        "id": "v4-251",
        "q": "For what years is the new car-loan interest deduction currently scheduled to apply?",
        "a": "2025 through 2028."
      },
      {
        "id": "v4-252",
        "q": "What is the maximum annual new car-loan interest deduction?",
        "a": "$10,000."
      },
      {
        "id": "v4-253",
        "q": "At what AGI does the car-loan interest deduction begin to phase out for most filers?",
        "a": "$100,000."
      },
      {
        "id": "v4-254",
        "q": "At what AGI does the car-loan interest deduction begin to phase out for MFJ?",
        "a": "$200,000."
      },
      {
        "id": "v4-255",
        "q": "How is the car-loan interest deduction reduced above the phaseout threshold?",
        "a": "By $200 for each $1,000 over the threshold."
      },
      {
        "id": "v4-256",
        "q": "When must the vehicle-loan indebtedness have been incurred to qualify for the 2025 deduction?",
        "a": "After 2024."
      },
      {
        "id": "v4-257",
        "q": "What lien requirement applies to the qualifying car-loan interest deduction?",
        "a": "The debt must be secured by a first lien on the vehicle."
      },
      {
        "id": "v4-258",
        "q": "Must the qualifying vehicle be for personal use?",
        "a": "Yes."
      },
      {
        "id": "v4-259",
        "q": "Must a qualifying passenger vehicle be new under the rule discussed?",
        "a": "Yes."
      },
      {
        "id": "v4-260",
        "q": "How many wheels must a qualifying passenger vehicle have at minimum?",
        "a": "At least two."
      },
      {
        "id": "v4-261",
        "q": "What types of vehicles can potentially qualify?",
        "a": "Typical cars, minivans, vans, SUVs, pickup trucks, and motorcycles."
      },
      {
        "id": "v4-262",
        "q": "What is the gross vehicle weight rating ceiling for a qualifying vehicle?",
        "a": "Less than 14,000 pounds."
      },
      {
        "id": "v4-263",
        "q": "Where must final assembly occur for a vehicle to qualify?",
        "a": "In the United States."
      },
      {
        "id": "v4-264",
        "q": "Can a foreign-brand vehicle qualify if final assembly occurs in the United States?",
        "a": "Yes."
      },
      {
        "id": "v4-265",
        "q": "Can a domestic-brand vehicle qualify if final assembly occurs outside the United States?",
        "a": "No."
      },
      {
        "id": "v4-266",
        "q": "Can a refinanced vehicle loan qualify for the deduction?",
        "a": "Yes, as long as the refinanced amount does not exceed the old loan balance."
      },
      {
        "id": "v4-267",
        "q": "Does lease financing qualify for the car-loan interest deduction?",
        "a": "No."
      },
      {
        "id": "v4-268",
        "q": "Does interest paid to a related party qualify for the car-loan interest deduction?",
        "a": "No."
      },
      {
        "id": "v4-269",
        "q": "Do fleet vehicles qualify for the personal car-loan interest deduction?",
        "a": "No."
      },
      {
        "id": "v4-270",
        "q": "Do vehicles with salvage titles or vehicles intended for scrap or parts qualify?",
        "a": "No."
      },
      {
        "id": "v4-271",
        "q": "What vehicle information must be reported on the return to claim the car-loan interest deduction?",
        "a": "The VIN."
      },
      {
        "id": "v4-272",
        "q": "If a taxpayer pays at least $600 of qualifying vehicle-loan interest, what should they receive for 2025?",
        "a": "A statement from the lender."
      },
      {
        "id": "v4-273",
        "q": "What is the enhanced senior deduction amount per qualifying person?",
        "a": "$6,000."
      },
      {
        "id": "v4-274",
        "q": "What age is required for the enhanced senior deduction?",
        "a": "Age 65 or older."
      },
      {
        "id": "v4-275",
        "q": "Does a taxpayer have to receive Social Security to qualify for the enhanced senior deduction?",
        "a": "No."
      },
      {
        "id": "v4-276",
        "q": "Can someone under age 65 qualify merely because they receive Social Security?",
        "a": "No."
      },
      {
        "id": "v4-277",
        "q": "Is the $6,000 senior deduction indexed for inflation under the rule discussed?",
        "a": "No."
      },
      {
        "id": "v4-278",
        "q": "At what MAGI does the enhanced senior deduction begin to phase out for most filers?",
        "a": "$75,000."
      },
      {
        "id": "v4-279",
        "q": "At what MAGI does the enhanced senior deduction begin to phase out for MFJ?",
        "a": "$150,000."
      },
      {
        "id": "v4-280",
        "q": "How is the enhanced senior deduction reduced above the threshold?",
        "a": "By 6% of MAGI above the threshold."
      },
      {
        "id": "v4-281",
        "q": "Can a taxpayer filing MFS take the enhanced senior deduction?",
        "a": "No."
      },
      {
        "id": "v4-282",
        "q": "What ID requirement applies to the enhanced senior deduction?",
        "a": "The taxpayer must have and report a Social Security number."
      },
      {
        "id": "v4-283",
        "q": "In the Patricia and James example, how many $6,000 senior deductions are potentially available when Patricia is 65 and James is 63?",
        "a": "One."
      },
      {
        "id": "v4-284",
        "q": "In the Patricia and James example, what is the phaseout reduction when MFJ MAGI is $170,000?",
        "a": "$1,200, which is 6% of the $20,000 excess over $150,000."
      },
      {
        "id": "v4-285",
        "q": "In the Patricia and James example, what is the final enhanced senior deduction?",
        "a": "$4,800."
      },
      {
        "id": "v4-286",
        "q": "Is the QBID available to taxpayers who take the standard deduction?",
        "a": "Yes."
      },
      {
        "id": "v4-287",
        "q": "Is the QBID available to taxpayers who itemize?",
        "a": "Yes."
      },
      {
        "id": "v4-288",
        "q": "Is the QBID an above-the-line or below-the-line deduction?",
        "a": "Below the line."
      },
      {
        "id": "v4-289",
        "q": "What are the two components of the QBID?",
        "a": "The QBI component and the REIT/PTP component."
      },
      {
        "id": "v4-290",
        "q": "What percentage of qualified business income is the basic QBI component?",
        "a": "20%."
      },
      {
        "id": "v4-291",
        "q": "What entities can generate QBI for the QBI component?",
        "a": "Domestic sole proprietorships, partnerships, S corporations, trusts, and estates."
      },
      {
        "id": "v4-292",
        "q": "Can a C corporation generate QBI for the individual QBID?",
        "a": "No."
      },
      {
        "id": "v4-293",
        "q": "What percentage of qualified REIT dividends and PTP income is generally included in the REIT/PTP component?",
        "a": "20%."
      },
      {
        "id": "v4-294",
        "q": "What overall limitation applies to the combined QBID?",
        "a": "20% of taxable income minus capital gains."
      },
      {
        "id": "v4-295",
        "q": "If taxable income is $150,000 and $50,000 is capital gain, what is the maximum QBID under the overall limitation?",
        "a": "$20,000."
      },
      {
        "id": "v4-296",
        "q": "Can rental real estate qualify as a trade or business solely for QBID purposes under a safe-harbor-type rule?",
        "a": "Yes."
      },
      {
        "id": "v4-297",
        "q": "What recordkeeping requirement applies to a rental enterprise seeking the QBID rental-real-estate treatment?",
        "a": "Separate books and records must be kept for each rental enterprise."
      },
      {
        "id": "v4-298",
        "q": "What rental-service hours requirement is discussed for established rental enterprises?",
        "a": "At least 250 hours of rental services in at least 3 of the last 5 years."
      },
      {
        "id": "v4-299",
        "q": "If a rental activity has existed for less than four years, how often must the 250-hour requirement be met under the rule discussed?",
        "a": "Every year."
      },
      {
        "id": "v4-300",
        "q": "Must records be maintained of rental services performed to use the rental-real-estate QBID rule?",
        "a": "Yes."
      },
      {
        "id": "v4-301",
        "q": "Can rental or licensing income from property rented to a commonly controlled trade or business qualify for QBID even if the rental itself is not a separate trade or business?",
        "a": "Yes."
      },
      {
        "id": "v4-302",
        "q": "Can licensing income from personally owned intangible property, such as a patent licensed to the owner’s business, count for QBID under the commonly controlled rule?",
        "a": "Yes."
      },
      {
        "id": "v4-303",
        "q": "What is QBI generally based on?",
        "a": "Net income from a domestic trade or business."
      },
      {
        "id": "v4-304",
        "q": "Does QBI include capital gains from business property?",
        "a": "No."
      },
      {
        "id": "v4-305",
        "q": "Does QBI include ordinary investment interest or dividends?",
        "a": "No."
      },
      {
        "id": "v4-306",
        "q": "Do employee wages count as QBI?",
        "a": "No."
      },
      {
        "id": "v4-307",
        "q": "Which above-the-line deductions must reduce business income when computing QBI?",
        "a": "The deductible part of self-employment tax, self-employed health-insurance deduction, qualified tips deduction, and deductible contributions to qualified retirement plans."
      },
      {
        "id": "v4-308",
        "q": "Do prior-year net business losses reduce current-year QBI?",
        "a": "Yes."
      },
      {
        "id": "v4-309",
        "q": "In the Monique example, what Schedule C business income amount is the starting point for QBI?",
        "a": "$70,000."
      },
      {
        "id": "v4-310",
        "q": "In the Monique example, is $1,000 of interest on a business savings account included in QBI?",
        "a": "No."
      },
      {
        "id": "v4-311",
        "q": "In the Monique example, is a $2,000 capital gain on sale of a business asset included in QBI?",
        "a": "No."
      },
      {
        "id": "v4-312",
        "q": "In the Monique example, what deductions reduce the $70,000 business income for QBI?",
        "a": "$10,000 self-employed health insurance, $4,946 one-half SE tax, and $5,000 SEP-IRA contribution."
      },
      {
        "id": "v4-313",
        "q": "In the Monique example, what is QBI after the required reductions?",
        "a": "$50,054."
      },
      {
        "id": "v4-314",
        "q": "Below what 2025 taxable-income threshold is the QBI component generally simply 20% for most filing statuses?",
        "a": "$197,300."
      },
      {
        "id": "v4-315",
        "q": "Below what 2025 taxable-income threshold is the QBI component generally simply 20% for MFJ?",
        "a": "$394,600."
      },
      {
        "id": "v4-316",
        "q": "What is an SSTB?",
        "a": "A specified service trade or business."
      },
      {
        "id": "v4-317",
        "q": "What are examples of SSTBs?",
        "a": "Health, law, accounting, actuarial services, performing arts, consulting, athletics, financial services, and similar service businesses."
      },
      {
        "id": "v4-318",
        "q": "Are architects and engineers treated as SSTBs under the rule discussed?",
        "a": "No."
      },
      {
        "id": "v4-319",
        "q": "For most filing statuses, what upper threshold marks the point where an SSTB is fully phased out of QBID?",
        "a": "$247,300."
      },
      {
        "id": "v4-320",
        "q": "For MFJ, what upper threshold marks the point where an SSTB is fully phased out of QBID?",
        "a": "$494,600."
      },
      {
        "id": "v4-321",
        "q": "If taxable income exceeds the upper threshold and the business is an SSTB, what is the QBID from that SSTB?",
        "a": "Zero."
      },
      {
        "id": "v4-322",
        "q": "For a non-SSTB above the upper threshold, what limitation applies?",
        "a": "The wage/UBIA limitation."
      },
      {
        "id": "v4-323",
        "q": "What form is used for the simplified QBID computation when taxable income is below the threshold?",
        "a": "Form 8995."
      },
      {
        "id": "v4-324",
        "q": "What form is used for higher-income QBID computations?",
        "a": "Form 8995-A."
      },
      {
        "id": "v4-325",
        "q": "What additional schedule is used with Form 8995-A for an SSTB?",
        "a": "Schedule A of Form 8995-A."
      },
      {
        "id": "v4-326",
        "q": "In the Cedric example, what is his total QBI before the overall taxable-income limitation?",
        "a": "$165,000: $125,000 Schedule C QBI plus $40,000 S-corporation QBI."
      },
      {
        "id": "v4-327",
        "q": "In the Cedric example, what is 20% of $165,000 QBI?",
        "a": "$33,000."
      },
      {
        "id": "v4-328",
        "q": "In the Cedric example, what overall taxable-income limitation applies when taxable income is $160,000 and capital gains are $5,000?",
        "a": "$31,000, which is 20% of $155,000."
      },
      {
        "id": "v4-329",
        "q": "In the Cedric example, what is the final QBID?",
        "a": "$31,000."
      },
      {
        "id": "v4-330",
        "q": "Above the upper income threshold for a non-SSTB, what is the wage/UBIA limitation?",
        "a": "The greater of 50% of W-2 wages or 25% of W-2 wages plus 2.5% of UBIA of qualified property."
      },
      {
        "id": "v4-331",
        "q": "What does UBIA stand for in the QBID rules?",
        "a": "Unadjusted basis immediately after acquisition."
      },
      {
        "id": "v4-332",
        "q": "What amount is generally used as UBIA for qualifying property?",
        "a": "Its unadjusted cost when acquired, while it remains within the applicable class-life period."
      },
      {
        "id": "v4-333",
        "q": "What maximum period is used for property with a class life longer than 10 years in the UBIA rule discussed?",
        "a": "10 years."
      },
      {
        "id": "v4-334",
        "q": "Can a high-income non-SSTB with no W-2 wages and no qualifying UBIA have a zero QBID?",
        "a": "Yes."
      },
      {
        "id": "v4-335",
        "q": "In the Travis and Taylor high-income non-SSTB example, what is tentative QBI deduction on $320,000 of QBI?",
        "a": "$64,000."
      },
      {
        "id": "v4-336",
        "q": "In the Travis and Taylor example, what is 50% of $60,000 W-2 wages?",
        "a": "$30,000."
      },
      {
        "id": "v4-337",
        "q": "In the Travis and Taylor example, what is 25% of $60,000 wages plus 2.5% of zero UBIA?",
        "a": "$15,000."
      },
      {
        "id": "v4-338",
        "q": "Which wage/UBIA limitation amount is used in the Travis and Taylor example?",
        "a": "$30,000, the larger amount."
      },
      {
        "id": "v4-339",
        "q": "In the Travis and Taylor example with $500,000 taxable income, what is the final QBID?",
        "a": "$30,000."
      },
      {
        "id": "v4-340",
        "q": "For income in the QBID phase-in range, how is the non-MFJ phase-in percentage computed?",
        "a": "(Taxable income − $197,300) ÷ $50,000."
      },
      {
        "id": "v4-341",
        "q": "For MFJ income in the QBID phase-in range, how is the phase-in percentage computed?",
        "a": "(Taxable income − $394,600) ÷ $100,000."
      },
      {
        "id": "v4-342",
        "q": "In the Travis and Taylor phase-in example with MFJ taxable income of $464,600, what is the phase-in percentage?",
        "a": "70%."
      },
      {
        "id": "v4-343",
        "q": "In that phase-in example, how much does the $64,000 tentative QBID exceed the $30,000 wage limitation?",
        "a": "$34,000."
      },
      {
        "id": "v4-344",
        "q": "In that phase-in example, what is 70% of the $34,000 excess?",
        "a": "$23,800."
      },
      {
        "id": "v4-345",
        "q": "In that phase-in example, what is the final QBID?",
        "a": "$40,200."
      },
      {
        "id": "v4-346",
        "q": "For an SSTB in the phase-in range, what additional concept is used besides the ordinary phase-in percentage?",
        "a": "An applicable percentage equal to 1 minus the phase-in percentage."
      },
      {
        "id": "v4-347",
        "q": "In the Jason and Kylie SSTB example, what applicable percentage results from a 70% phase-in percentage?",
        "a": "30%."
      },
      {
        "id": "v4-348",
        "q": "In the Jason and Kylie example, what is adjusted QBI when ordinary QBI is $320,000 and the applicable percentage is 30%?",
        "a": "$96,000."
      },
      {
        "id": "v4-349",
        "q": "In the Jason and Kylie example, what are adjusted W-2 wages when ordinary wages are $60,000 and the applicable percentage is 30%?",
        "a": "$18,000."
      },
      {
        "id": "v4-350",
        "q": "In the Jason and Kylie SSTB example, what is the tentative 20% deduction on adjusted QBI of $96,000?",
        "a": "$19,200."
      },
      {
        "id": "v4-351",
        "q": "In that SSTB example, what is 50% of adjusted wages of $18,000?",
        "a": "$9,000."
      },
      {
        "id": "v4-352",
        "q": "In that SSTB example, what is the final QBID after the partial phase-in calculation?",
        "a": "$12,060."
      },
      {
        "id": "v4-353",
        "q": "Can a taxpayer deduct the value of their donated time or services as a charitable contribution?",
        "a": "No."
      },
      {
        "id": "v4-354",
        "q": "Can gifts made directly to an individual through a personal fundraiser generally be deducted as charitable contributions?",
        "a": "No."
      },
      {
        "id": "v4-355",
        "q": "Are gifts to foreign charities generally deductible under the rule taught?",
        "a": "Generally no, subject to limited exceptions for certain Canadian, Israeli, and Mexican charities."
      },
      {
        "id": "v4-356",
        "q": "Are payments to lobbying groups, civic leagues, social clubs, sports clubs, labor unions, or chambers of commerce generally deductible as charitable contributions?",
        "a": "No."
      },
      {
        "id": "v4-357",
        "q": "If a charitable payment gives the taxpayer a benefit in return, what amount is deductible?",
        "a": "Only the amount paid above the fair value of the benefit received."
      },
      {
        "id": "v4-358",
        "q": "If a taxpayer pays $100 for a charitable dinner worth $40, what charitable deduction is allowed in the example?",
        "a": "$60."
      },
      {
        "id": "v4-359",
        "q": "What substantiation is required for a single charitable contribution of $250 or more?",
        "a": "A contemporaneous written acknowledgment from the charity showing the donation and whether goods or services were received in return."
      },
      {
        "id": "v4-360",
        "q": "Does the $250 written-acknowledgment rule apply merely because separate smaller gifts to the same charity total more than $250 during the year?",
        "a": "No; the threshold applies to an individual contribution."
      },
      {
        "id": "v4-361",
        "q": "What is the main AGI limit taught for cash charitable contributions?",
        "a": "60% of AGI."
      },
      {
        "id": "v4-362",
        "q": "What is the main AGI limit taught for noncash charitable contributions?",
        "a": "50% of AGI minus cash contributions."
      },
      {
        "id": "v4-363",
        "q": "What is the main AGI limit taught for gifts of capital-gain property?",
        "a": "30% of AGI."
      },
      {
        "id": "v4-364",
        "q": "How long can excess charitable contributions generally be carried forward?",
        "a": "Up to 5 years."
      },
      {
        "id": "v4-365",
        "q": "For a noncash charitable contribution under $250, what documentation should the taxpayer generally try to obtain?",
        "a": "A written receipt from the charity."
      },
      {
        "id": "v4-366",
        "q": "If getting a receipt for a property contribution under $250 is impractical, what must the taxpayer keep?",
        "a": "Detailed personal records describing the gift, date, value, and how the value was determined."
      },
      {
        "id": "v4-367",
        "q": "For a noncash charitable contribution of $250 to $500, is a written receipt required?",
        "a": "Yes."
      },
      {
        "id": "v4-368",
        "q": "What additional form is generally required for noncash contributions over $500 up to $5,000?",
        "a": "Form 8283."
      },
      {
        "id": "v4-369",
        "q": "What additional requirement generally applies to noncash contributions over $5,000?",
        "a": "A qualified written appraisal, in addition to Form 8283."
      },
      {
        "id": "v4-370",
        "q": "What condition generally must donated clothing and household items be in to be deductible?",
        "a": "Good used condition or better, unless the special appraisal exception applies."
      },
      {
        "id": "v4-371",
        "q": "For donated cars, boats, or airplanes worth more than $500, what amount is generally deductible under the rule taught?",
        "a": "The smaller of the charity's gross sale proceeds or the vehicle's fair market value on the contribution date."
      },
      {
        "id": "v4-372",
        "q": "What form can a charity issue showing the proceeds from sale of a donated vehicle?",
        "a": "Form 1098-C."
      },
      {
        "id": "v4-373",
        "q": "For property subject to debt, how is the charitable contribution reduced?",
        "a": "By debt the charity assumes."
      },
      {
        "id": "v4-374",
        "q": "If donated property has fair market value below the taxpayer's basis, what amount is generally deductible?",
        "a": "The fair market value."
      },
      {
        "id": "v4-375",
        "q": "If appreciated capital-gain property is donated directly to charity, what value may generally be deducted under the rule taught?",
        "a": "Fair market value, subject to the charitable limits."
      },
      {
        "id": "v4-376",
        "q": "What capital-gain benefit can result from donating appreciated capital-gain property directly instead of selling it first?",
        "a": "The built-in gain is not recognized by the donor."
      },
      {
        "id": "v4-377",
        "q": "If ordinary-income property such as inventory is donated and FMV exceeds basis, what amount is generally deductible?",
        "a": "The taxpayer's basis."
      },
      {
        "id": "v4-378",
        "q": "Are personal casualty and theft losses generally deductible outside federally declared disaster areas?",
        "a": "No, except they may offset casualty gains under the rule taught."
      },
      {
        "id": "v4-379",
        "q": "What is a casualty for casualty-loss purposes?",
        "a": "Damage, destruction, or loss from an identifiable event that is sudden, unexpected, or unusual."
      },
      {
        "id": "v4-380",
        "q": "What does “sudden” mean in the casualty definition?",
        "a": "Swift rather than gradual or progressive."
      },
      {
        "id": "v4-381",
        "q": "What does “unexpected” mean in the casualty definition?",
        "a": "Not ordinarily anticipated or intended."
      },
      {
        "id": "v4-382",
        "q": "What does “unusual” mean in the casualty definition?",
        "a": "Not a day-to-day occurrence or typical of the activity involved."
      },
      {
        "id": "v4-383",
        "q": "What is theft for casualty/theft-loss purposes?",
        "a": "Illegal taking and removing of money or property with criminal intent to deprive the owner."
      },
      {
        "id": "v4-384",
        "q": "Is a criminal conviction required before a loss can qualify as theft under the rule taught?",
        "a": "No."
      },
      {
        "id": "v4-385",
        "q": "Can blackmail, burglary, embezzlement, extortion, kidnapping, larceny, or robbery qualify as theft?",
        "a": "Yes."
      },
      {
        "id": "v4-386",
        "q": "Is misplaced or lost property generally treated as a deductible theft loss?",
        "a": "No."
      },
      {
        "id": "v4-387",
        "q": "Is progressive damage from termites, moths, insects, or disease generally a deductible casualty?",
        "a": "No."
      },
      {
        "id": "v4-388",
        "q": "What is a federal casualty loss?",
        "a": "A casualty or theft loss of personal-use property attributable to a federally declared disaster."
      },
      {
        "id": "v4-389",
        "q": "How is the preliminary amount of a federal casualty loss computed?",
        "a": "Use the lesser of adjusted basis or the decline in fair market value, then subtract insurance or other reimbursement."
      },
      {
        "id": "v4-390",
        "q": "What per-event reduction is applied to a federal casualty loss under the general rule taught?",
        "a": "$100."
      },
      {
        "id": "v4-391",
        "q": "After the $100 reduction, what AGI floor applies to the general federal casualty-loss deduction?",
        "a": "10% of AGI."
      },
      {
        "id": "v4-392",
        "q": "Does the $100 reduction apply per item of property or per casualty event?",
        "a": "Per event."
      },
      {
        "id": "v4-393",
        "q": "When is a federal casualty loss generally deducted?",
        "a": "In the year the casualty occurs, subject to the disaster rules."
      },
      {
        "id": "v4-394",
        "q": "In the Fred and Elizabeth example, what was the casualty loss before limitations?",
        "a": "$20,000."
      },
      {
        "id": "v4-395",
        "q": "In the Fred and Elizabeth example, what was their AGI?",
        "a": "$50,000."
      },
      {
        "id": "v4-396",
        "q": "In the Fred and Elizabeth example, what loss remained after the $100 per-event reduction?",
        "a": "$19,900."
      },
      {
        "id": "v4-397",
        "q": "In the Fred and Elizabeth example, what was the 10%-of-AGI reduction?",
        "a": "$5,000."
      },
      {
        "id": "v4-398",
        "q": "In the Fred and Elizabeth example, what casualty-loss deduction remained?",
        "a": "$14,900."
      },
      {
        "id": "v4-399",
        "q": "Under the general federal casualty-loss rule taught, must the taxpayer itemize deductions to claim the loss?",
        "a": "Yes."
      },
      {
        "id": "v4-400",
        "q": "What types of purposes can qualify an organization as a charitable organization for deductible contributions?",
        "a": "Religious, charitable, educational, scientific, or literary purposes, or work preventing cruelty to children or animals."
      },
      {
        "id": "v4-401",
        "q": "What IRS status commonly shows that contributions to an organization are tax-deductible?",
        "a": "Tax-exempt status such as §501(c)(3), although some qualifying organizations such as governmental entities and churches do not have to obtain that status in the ordinary way."
      },
      {
        "id": "v4-402",
        "q": "What three broad forms can a deductible charitable contribution take?",
        "a": "Cash, property, or qualifying unreimbursed out-of-pocket expenses from volunteer work."
      },
      {
        "id": "v4-403",
        "q": "For charitable-contribution rules, does “cash” mean only physical currency?",
        "a": "No. It generally means money contributions, including checks, electronic transfers, and credit-card payments."
      },
      {
        "id": "v4-404",
        "q": "Are donated household goods, clothing, or stock treated as cash contributions?",
        "a": "No. They are property contributions."
      },
      {
        "id": "v4-405",
        "q": "Can unreimbursed out-of-pocket expenses from volunteer work for a qualified charity be deductible?",
        "a": "Yes, if the expenses otherwise qualify."
      },
      {
        "id": "v4-406",
        "q": "What mileage rate applies to deductible charitable driving under the 2025 rule taught?",
        "a": "14 cents per mile."
      },
      {
        "id": "v4-407",
        "q": "Must a taxpayer itemize deductions to deduct charitable contributions for 2025?",
        "a": "Yes. There is no above-the-line charitable-contribution deduction for 2025."
      },
      {
        "id": "v4-408",
        "q": "If a taxpayer receives a tax credit for making a contribution, can the same amount also be deducted as a charitable contribution?",
        "a": "No."
      },
      {
        "id": "v4-409",
        "q": "Are amounts paid to a college or university for the right to buy athletic-event tickets deductible as charitable contributions?",
        "a": "No."
      },
      {
        "id": "v4-410",
        "q": "When can travel expenses connected with charitable volunteer work be deductible?",
        "a": "When there is no significant element of personal pleasure, recreation, or vacation in the travel."
      },
      {
        "id": "v4-411",
        "q": "If insurance reimburses a taxpayer for unscheduled personal property lost in a casualty, must gain generally be recognized on that reimbursement under the rule taught?",
        "a": "No."
      },
      {
        "id": "v4-412",
        "q": "What does “unscheduled personal property” mean in the casualty-insurance discussion?",
        "a": "Ordinary personal property that is not specifically listed or separately scheduled on the insurance policy."
      },
      {
        "id": "v4-413",
        "q": "What are examples of scheduled personal property?",
        "a": "High-value items specifically listed on the insurance policy, such as expensive jewelry or a valuable collection."
      },
      {
        "id": "v4-414",
        "q": "Can the home-sale gain exclusion potentially apply to insurance gain on a destroyed main home?",
        "a": "Yes. If the taxpayer otherwise qualifies, the $250,000 or $500,000 primary-residence exclusion can apply."
      },
      {
        "id": "v4-415",
        "q": "What is the normal replacement period for postponing gain from an involuntary conversion?",
        "a": "Generally 2 years."
      },
      {
        "id": "v4-416",
        "q": "What replacement period applies to a main home lost in a federally declared disaster area under the rule taught?",
        "a": "4 years."
      },
      {
        "id": "v4-417",
        "q": "For disaster replacement purposes, how are insurance proceeds for the home and scheduled personal property treated?",
        "a": "They can be combined and treated as proceeds for a single item of property, with replacement property similarly treated together."
      },
      {
        "id": "v4-418",
        "q": "In the George and Carla disaster example, how much of the $25,000 insurance payment for unscheduled personal property was taxable?",
        "a": "$0."
      },
      {
        "id": "v4-419",
        "q": "In the George and Carla disaster example, how much replacement spending was needed to postpone gain on the $200,000 home proceeds plus $15,000 of scheduled-property proceeds?",
        "a": "$215,000."
      },
      {
        "id": "v4-420",
        "q": "Do casualty and theft losses on income-producing property have to occur in a federally declared disaster area to be deductible under the rule taught?",
        "a": "No."
      },
      {
        "id": "v4-421",
        "q": "Do the $100-per-event and 10%-of-AGI personal casualty-loss reductions apply to casualty losses on income-producing property under the rule taught?",
        "a": "No."
      },
      {
        "id": "v4-422",
        "q": "How is the deductible casualty loss on income-producing property generally measured in the discussion?",
        "a": "Adjusted basis minus salvage value and minus insurance or other reimbursement received."
      },
      {
        "id": "v4-423",
        "q": "If rental property has a $200,000 adjusted basis and the owner receives $180,000 of insurance after a casualty, what loss is deductible in the example?",
        "a": "$20,000."
      },
      {
        "id": "v4-424",
        "q": "How are losses from a Ponzi scheme treated in the itemized-deduction discussion?",
        "a": "They can be deductible as theft losses of income-producing property, subject to the applicable rules."
      },
      {
        "id": "v4-425",
        "q": "Can losses of income-producing property from scams other than Ponzi schemes potentially be deductible?",
        "a": "Yes, subject to the applicable Form 4684 rules."
      },
      {
        "id": "v4-426",
        "q": "What is a bond premium in the other-itemized-deduction discussion?",
        "a": "The amount paid for a taxable bond above its stated principal amount."
      },
      {
        "id": "v4-427",
        "q": "What can a taxpayer generally do with an amortizable premium on a taxable bond?",
        "a": "Amortize the premium under the applicable rules."
      },
      {
        "id": "v4-428",
        "q": "Are fines and penalties generally deductible?",
        "a": "No."
      },
      {
        "id": "v4-429",
        "q": "Where must the full amount of gambling winnings generally be reported?",
        "a": "As income on Schedule 1."
      },
      {
        "id": "v4-430",
        "q": "Where are deductible gambling losses reported by a nonprofessional gambler?",
        "a": "On Schedule A as an itemized deduction."
      },
      {
        "id": "v4-431",
        "q": "How much gambling loss can a nonprofessional gambler deduct?",
        "a": "Up to the amount of gambling winnings."
      },
      {
        "id": "v4-432",
        "q": "Can a gambler simply net gambling losses against winnings and report only the difference as income?",
        "a": "No. Full winnings are reported, and allowable losses are deducted separately."
      },
      {
        "id": "v4-433",
        "q": "What records should a taxpayer keep to support gambling losses?",
        "a": "Contemporaneous records such as a gambling diary or similar record showing when, where, and how much was gambled."
      },
      {
        "id": "v4-434",
        "q": "Where does a professional gambler generally report gambling activity?",
        "a": "Schedule C."
      },
      {
        "id": "v4-435",
        "q": "Can a professional gambler deduct both gambling losses and related business expenses?",
        "a": "Yes, but under the rule taught the total losses and expenses cannot exceed gambling winnings, so the activity cannot create a net loss."
      },
      {
        "id": "v4-436",
        "q": "What basic use test generally applies for a home-office deduction?",
        "a": "The space must be used regularly and exclusively for business, subject to specific exceptions."
      },
      {
        "id": "v4-437",
        "q": "What home-office exception applies to space used to store business inventory?",
        "a": "The space does not have to satisfy the ordinary exclusive-use requirement."
      },
      {
        "id": "v4-438",
        "q": "What home-office exclusive-use exception applies to a qualifying licensed daycare facility?",
        "a": "The space can qualify even though it is also used personally at other times."
      },
      {
        "id": "v4-439",
        "q": "What business-location test applies to a home office under the rule taught?",
        "a": "It must be the principal place of business or the only place where administrative or management activities can be performed."
      },
      {
        "id": "v4-440",
        "q": "Can an employee take the home-office deduction under the rule taught?",
        "a": "No. The taxpayer must be in business for themself."
      },
      {
        "id": "v4-441",
        "q": "How is the simplified home-office deduction calculated?",
        "a": "$5 per square foot of qualifying business space, up to 300 square feet."
      },
      {
        "id": "v4-442",
        "q": "What is the maximum simplified home-office deduction?",
        "a": "$1,500."
      },
      {
        "id": "v4-443",
        "q": "If a qualifying home office is 200 square feet, what simplified deduction results?",
        "a": "$1,000."
      },
      {
        "id": "v4-444",
        "q": "How is the regular-method home-office business percentage generally determined?",
        "a": "Business-use square footage divided by total home living-space square footage."
      },
      {
        "id": "v4-445",
        "q": "If a home office is 200 square feet in a 2,000-square-foot home, what business-use percentage applies under the regular method?",
        "a": "10%."
      },
      {
        "id": "v4-446",
        "q": "What types of costs can be allocated under the regular home-office method?",
        "a": "Costs such as mortgage interest, homeowners insurance, utilities, repairs, maintenance, depreciation, and rent."
      },
      {
        "id": "v4-447",
        "q": "Can a qualifying taxpayer compare the simplified and regular home-office methods and use the one that produces the larger deduction?",
        "a": "Yes."
      },
      {
        "id": "v4-448",
        "q": "When can a repayment under a claim of right produce an itemized deduction under the rule taught?",
        "a": "When at least $3,000 was included in income in a prior year because the taxpayer appeared to have an unrestricted right to it, but the amount later had to be repaid."
      },
      {
        "id": "v4-449",
        "q": "In the claim-of-right example, what deduction results when $5,000 of advanced commissions included in 2024 income must be repaid in 2025?",
        "a": "A $5,000 itemized deduction in 2025."
      }
    ]
  },
  {
    "id": "video-5",
    "video": 5,
    "title": "Tax & Credits",
    "cards": [
      {
        "id": "v5-001",
        "q": "When are the 2025 tax tables used instead of the tax rate schedules?",
        "a": "For taxable income under $100,000."
      },
      {
        "id": "v5-002",
        "q": "When are the tax rate schedules used?",
        "a": "For taxable income of $100,000 or more."
      },
      {
        "id": "v5-003",
        "q": "What amount from Form 1040 is used to enter the tax tables or rate schedules?",
        "a": "Taxable income from line 15."
      },
      {
        "id": "v5-004",
        "q": "In the MFJ tax-table example with $25,300 of taxable income, what is the tax?",
        "a": "$2,562."
      },
      {
        "id": "v5-005",
        "q": "What are the seven ordinary federal income-tax rates for 2025?",
        "a": "10%, 12%, 22%, 24%, 32%, 35%, and 37%."
      },
      {
        "id": "v5-006",
        "q": "For a Single taxpayer, what taxable-income range is in the 10% bracket in the example chart?",
        "a": "$0 through $11,925."
      },
      {
        "id": "v5-007",
        "q": "For MFJ, what taxable-income range is in the 10% bracket in the example chart?",
        "a": "$0 through $23,850."
      },
      {
        "id": "v5-008",
        "q": "For a Single taxpayer, what range is in the 12% bracket in the example chart?",
        "a": "$11,926 through $48,475."
      },
      {
        "id": "v5-009",
        "q": "For a Single taxpayer, what range is in the 22% bracket in the example chart?",
        "a": "$48,476 through $103,350."
      },
      {
        "id": "v5-010",
        "q": "Does crossing into a higher tax bracket cause all taxable income to be taxed at the higher rate?",
        "a": "No; only the income within that higher bracket is taxed at the higher rate."
      },
      {
        "id": "v5-011",
        "q": "If MFJ taxable income is $96,951, how much of it is taxed at 22% in the example?",
        "a": "Only the final $1."
      },
      {
        "id": "v5-012",
        "q": "If MFJ taxable income is $96,951, how much is taxed at 10%?",
        "a": "The first $23,850."
      },
      {
        "id": "v5-013",
        "q": "What is a marginal tax rate?",
        "a": "The rate that applies to the taxpayer’s next dollar of taxable income."
      },
      {
        "id": "v5-014",
        "q": "Why do the tax rate schedules include subtraction amounts?",
        "a": "To account for the portions of income that are taxed at lower brackets."
      },
      {
        "id": "v5-015",
        "q": "How is an effective tax rate computed?",
        "a": "Actual income tax divided by taxable income."
      },
      {
        "id": "v5-016",
        "q": "What does the effective tax rate represent?",
        "a": "The blended average tax rate after the different marginal brackets are applied."
      },
      {
        "id": "v5-017",
        "q": "Are long-term capital gains taxed using the ordinary income tax brackets?",
        "a": "No; they use the separate long-term capital-gain rates."
      },
      {
        "id": "v5-018",
        "q": "What are the general long-term capital-gain rates discussed?",
        "a": "0%, 15%, and 20%."
      },
      {
        "id": "v5-019",
        "q": "What is the purpose of the kiddie tax?",
        "a": "To tax certain unearned income of children at the parents’ tax rate and prevent shifting investment income to children for lower tax rates."
      },
      {
        "id": "v5-020",
        "q": "What 2025 unearned-income threshold triggers kiddie-tax treatment under the material discussed?",
        "a": "More than $2,700."
      },
      {
        "id": "v5-021",
        "q": "How is a child’s first $2,700 of unearned income generally taxed under the kiddie-tax discussion?",
        "a": "At the child’s own tax rate."
      },
      {
        "id": "v5-022",
        "q": "What form does a child attach when filing their own return subject to the kiddie tax?",
        "a": "Form 8615."
      },
      {
        "id": "v5-023",
        "q": "What form can parents use to elect to include a qualifying child’s unearned income on their own return?",
        "a": "Form 8814."
      },
      {
        "id": "v5-024",
        "q": "What is the first income condition for Form 8615 kiddie-tax treatment?",
        "a": "The child has more than $2,700 of unearned income."
      },
      {
        "id": "v5-025",
        "q": "Must the child otherwise be required to file a tax return for Form 8615 to apply?",
        "a": "Yes."
      },
      {
        "id": "v5-026",
        "q": "What age condition can make a child subject to the kiddie tax if under 18?",
        "a": "Being under age 18 at year-end and meeting the other conditions."
      },
      {
        "id": "v5-027",
        "q": "Can an 18-year-old be subject to the kiddie tax?",
        "a": "Yes, if earned income is not more than half of support and the other conditions are met."
      },
      {
        "id": "v5-028",
        "q": "Can a full-time student age 19 through 24 be subject to the kiddie tax?",
        "a": "Yes, if earned income is not more than half of support and the other conditions are met."
      },
      {
        "id": "v5-029",
        "q": "Must at least one parent be alive at year-end for the kiddie tax to apply?",
        "a": "Yes."
      },
      {
        "id": "v5-030",
        "q": "Does the kiddie tax apply if the child files a joint return?",
        "a": "No."
      },
      {
        "id": "v5-031",
        "q": "What form is used to compute the credit for prior-year AMT when applicable?",
        "a": "Form 8801."
      },
      {
        "id": "v5-032",
        "q": "Can a taxpayer claim a prior-year AMT credit in a year when they also owe AMT?",
        "a": "No."
      },
      {
        "id": "v5-033",
        "q": "What form is used to reconcile the premium tax credit with actual income?",
        "a": "Form 8962."
      },
      {
        "id": "v5-034",
        "q": "What happens if advance premium tax credit was larger than the credit ultimately allowed?",
        "a": "The excess is repaid as an additional tax."
      },
      {
        "id": "v5-035",
        "q": "If income is below 200% of the federal poverty line, what is the maximum excess advance premium tax credit repayment for a Single taxpayer under the amounts discussed?",
        "a": "$375."
      },
      {
        "id": "v5-036",
        "q": "If income is below 200% of the federal poverty line, what is the maximum repayment for other eligible filing statuses?",
        "a": "$750."
      },
      {
        "id": "v5-037",
        "q": "For income between 200% and 300% of the federal poverty line, what is the maximum repayment for Single?",
        "a": "$975."
      },
      {
        "id": "v5-038",
        "q": "For income between 200% and 300% of the federal poverty line, what is the maximum repayment for other eligible filing statuses?",
        "a": "$1,950."
      },
      {
        "id": "v5-039",
        "q": "For income between 300% and 400% of the federal poverty line, what is the maximum repayment for Single?",
        "a": "$1,625."
      },
      {
        "id": "v5-040",
        "q": "What happens to the repayment cap when income is above 400% of the federal poverty line?",
        "a": "There is no repayment maximum."
      },
      {
        "id": "v5-041",
        "q": "Can a taxpayer filing MFS generally claim the premium tax credit?",
        "a": "No."
      },
      {
        "id": "v5-042",
        "q": "At what level of net earnings from self-employment does self-employment tax generally apply?",
        "a": "$400 or more."
      },
      {
        "id": "v5-043",
        "q": "What forms or sources can generate self-employment income discussed here?",
        "a": "Schedule C, Schedule F, partnership K-1 income, and certain special employee income."
      },
      {
        "id": "v5-044",
        "q": "What form computes self-employment tax?",
        "a": "Schedule SE."
      },
      {
        "id": "v5-045",
        "q": "What is the overall self-employment tax rate?",
        "a": "15.3%."
      },
      {
        "id": "v5-046",
        "q": "What portion of self-employment tax is Social Security tax?",
        "a": "12.4%."
      },
      {
        "id": "v5-047",
        "q": "What portion of self-employment tax is Medicare tax?",
        "a": "2.9%."
      },
      {
        "id": "v5-048",
        "q": "What portion of self-employment tax is deductible as an adjustment to income?",
        "a": "One-half."
      },
      {
        "id": "v5-049",
        "q": "How are net earnings from self-employment generally computed from self-employment income?",
        "a": "Multiply self-employment income by 92.35%."
      },
      {
        "id": "v5-050",
        "q": "Why is the 92.35% factor used in computing net earnings from self-employment?",
        "a": "It removes the 7.65% employer-equivalent share before applying self-employment tax."
      },
      {
        "id": "v5-051",
        "q": "Approximately how much net business profit corresponds to $400 of net earnings from self-employment?",
        "a": "$434."
      },
      {
        "id": "v5-052",
        "q": "In the Leo example, what is Schedule C profit when revenue is $60,000 and expenses are $23,000?",
        "a": "$37,000."
      },
      {
        "id": "v5-053",
        "q": "In the Leo example, what are net earnings from self-employment after multiplying $37,000 by 92.35%?",
        "a": "$34,170."
      },
      {
        "id": "v5-054",
        "q": "In the Leo example, what self-employment tax results from $34,170 × 15.3%?",
        "a": "$5,228."
      },
      {
        "id": "v5-055",
        "q": "What 2025 earnings ceiling applies to the 12.4% Social Security portion of self-employment tax?",
        "a": "$176,100."
      },
      {
        "id": "v5-056",
        "q": "Does the 2.9% Medicare portion of self-employment tax have the same $176,100 ceiling?",
        "a": "No; all net self-employment earnings are subject to the Medicare portion."
      },
      {
        "id": "v5-057",
        "q": "What optional self-employment-tax method can some low-income or loss businesses use?",
        "a": "An optional method based on two-thirds of gross income rather than normal net income."
      },
      {
        "id": "v5-058",
        "q": "Why might a taxpayer elect the optional self-employment-tax method?",
        "a": "To increase Social Security earnings credit or qualify for certain earned-income-based credits or deductions."
      },
      {
        "id": "v5-059",
        "q": "What percentage is the Additional Medicare Tax?",
        "a": "0.9%."
      },
      {
        "id": "v5-060",
        "q": "For Single, HOH, or QSS, at what wage/self-employment income threshold does the Additional Medicare Tax apply?",
        "a": "Over $200,000."
      },
      {
        "id": "v5-061",
        "q": "For MFJ, at what threshold does the Additional Medicare Tax apply?",
        "a": "Over $250,000."
      },
      {
        "id": "v5-062",
        "q": "For MFS, at what threshold does the Additional Medicare Tax apply?",
        "a": "Over $125,000."
      },
      {
        "id": "v5-063",
        "q": "At what wage level must employers begin withholding Additional Medicare Tax regardless of the employee’s filing status?",
        "a": "Over $200,000."
      },
      {
        "id": "v5-064",
        "q": "Why can an MFJ taxpayer receive a refund of Additional Medicare Tax withholding?",
        "a": "Because an employer withholds above $200,000 of wages, while the MFJ liability threshold is $250,000."
      },
      {
        "id": "v5-065",
        "q": "If an MFJ couple has combined wages of $300,000 with no Additional Medicare Tax withheld, how much income is subject to the 0.9% tax?",
        "a": "$50,000."
      },
      {
        "id": "v5-066",
        "q": "When must employees generally report tips to their employer?",
        "a": "When they receive more than $20 of tips in a month."
      },
      {
        "id": "v5-067",
        "q": "What form reports employee tips not included on Form W-2?",
        "a": "Form 4137."
      },
      {
        "id": "v5-068",
        "q": "What W-2 box can contain allocated tips that also require Form 4137?",
        "a": "Box 8."
      },
      {
        "id": "v5-069",
        "q": "What is the Net Investment Income Tax rate?",
        "a": "3.8%."
      },
      {
        "id": "v5-070",
        "q": "What types of income are included in net investment income?",
        "a": "Interest, dividends, capital gains, and similar investment income, reduced by allowable investment expenses."
      },
      {
        "id": "v5-071",
        "q": "For Single or HOH, what AGI threshold triggers possible Net Investment Income Tax?",
        "a": "$200,000."
      },
      {
        "id": "v5-072",
        "q": "For MFJ or QSS, what AGI threshold triggers possible Net Investment Income Tax?",
        "a": "$250,000."
      },
      {
        "id": "v5-073",
        "q": "For MFS, what AGI threshold triggers possible Net Investment Income Tax?",
        "a": "$125,000."
      },
      {
        "id": "v5-074",
        "q": "What amount is subject to the 3.8% Net Investment Income Tax?",
        "a": "The lesser of net investment income or the amount AGI exceeds the applicable threshold."
      },
      {
        "id": "v5-075",
        "q": "In the Veronica and Vince example, with MFJ AGI of $275,000 and $40,000 of net investment income, how much is subject to NIIT?",
        "a": "$25,000."
      },
      {
        "id": "v5-076",
        "q": "In that example, what is the 3.8% NIIT on $25,000?",
        "a": "$950."
      },
      {
        "id": "v5-077",
        "q": "What is the basic difference between a tax credit and a tax deduction?",
        "a": "A credit reduces tax dollar-for-dollar; a deduction reduces taxable income."
      },
      {
        "id": "v5-078",
        "q": "If tax is $3,000 and the taxpayer has a $1,000 credit, what tax remains?",
        "a": "$2,000."
      },
      {
        "id": "v5-079",
        "q": "If an MFJ taxpayer in the 10% bracket has a $1,000 deduction, approximately how much tax does that deduction save?",
        "a": "$100."
      },
      {
        "id": "v5-080",
        "q": "What is a refundable tax credit?",
        "a": "A credit that can reduce tax below zero and produce a refund of the excess."
      },
      {
        "id": "v5-081",
        "q": "What is a nonrefundable tax credit?",
        "a": "A credit that can reduce tax to zero but cannot by itself create a refund beyond the tax owed."
      },
      {
        "id": "v5-082",
        "q": "If tax is $600 and a refundable credit is $1,000, what happens?",
        "a": "Tax falls to zero and $400 is refundable."
      },
      {
        "id": "v5-083",
        "q": "If tax is $600 and a nonrefundable credit is $1,000, what happens?",
        "a": "Tax falls to zero, but the extra $400 is not refunded."
      },
      {
        "id": "v5-084",
        "q": "What is the 2025 Child Tax Credit amount per qualifying child?",
        "a": "$2,200."
      },
      {
        "id": "v5-085",
        "q": "What age must a child be at year-end to qualify for the Child Tax Credit?",
        "a": "Under age 17, meaning age 16 or younger."
      },
      {
        "id": "v5-086",
        "q": "Is the Child Tax Credit itself technically refundable?",
        "a": "No; the refundable portion comes through the Additional Child Tax Credit."
      },
      {
        "id": "v5-087",
        "q": "At what AGI does the Child Tax Credit begin to phase out for MFJ?",
        "a": "$400,000."
      },
      {
        "id": "v5-088",
        "q": "At what AGI does the Child Tax Credit begin to phase out for other filing statuses?",
        "a": "$200,000."
      },
      {
        "id": "v5-089",
        "q": "How is the Child Tax Credit reduced above the phaseout threshold?",
        "a": "By $50 for each $1,000 of AGI over the threshold."
      },
      {
        "id": "v5-090",
        "q": "What Social Security number requirement applies to the Child Tax Credit?",
        "a": "Both the taxpayer and qualifying child must have Social Security numbers."
      },
      {
        "id": "v5-091",
        "q": "Must a qualifying child for the Child Tax Credit be claimed as a dependent on the taxpayer’s return?",
        "a": "Yes."
      },
      {
        "id": "v5-092",
        "q": "Can a child filing a joint return still qualify for the Child Tax Credit?",
        "a": "Only if the joint return is filed solely to claim a refund of tax paid or withheld."
      },
      {
        "id": "v5-093",
        "q": "What citizenship/residency status must a child have for the Child Tax Credit?",
        "a": "U.S. citizen, U.S. national, or U.S. resident alien."
      },
      {
        "id": "v5-094",
        "q": "What is the maximum refundable Additional Child Tax Credit for 2025?",
        "a": "$1,700 per qualifying child."
      },
      {
        "id": "v5-095",
        "q": "What earned-income amount is generally required to qualify for the Additional Child Tax Credit?",
        "a": "At least $2,500."
      },
      {
        "id": "v5-096",
        "q": "Can a taxpayer who files Form 2555 claim the Additional Child Tax Credit under the rule discussed?",
        "a": "No."
      },
      {
        "id": "v5-097",
        "q": "What is the maximum Credit for Other Dependents per eligible dependent?",
        "a": "$500."
      },
      {
        "id": "v5-098",
        "q": "Can the taxpayer claiming the Credit for Other Dependents use an ITIN instead of an SSN?",
        "a": "Yes."
      },
      {
        "id": "v5-099",
        "q": "What identification numbers can a qualifying dependent have for the Credit for Other Dependents?",
        "a": "SSN, ITIN, or ATIN."
      },
      {
        "id": "v5-100",
        "q": "What phaseout rule applies to the Credit for Other Dependents?",
        "a": "The same $50 per $1,000 phaseout above $400,000 MFJ or $200,000 for other filers."
      },
      {
        "id": "v5-101",
        "q": "Is the Child and Dependent Care Credit refundable?",
        "a": "No."
      },
      {
        "id": "v5-102",
        "q": "What is the purpose requirement for the Child and Dependent Care Credit?",
        "a": "The care must enable the taxpayer to work or look for work."
      },
      {
        "id": "v5-103",
        "q": "What is the maximum eligible expense amount for one qualifying person for the Child and Dependent Care Credit?",
        "a": "$3,000."
      },
      {
        "id": "v5-104",
        "q": "What is the maximum eligible expense amount for two or more qualifying persons?",
        "a": "$6,000."
      },
      {
        "id": "v5-105",
        "q": "What percentage of eligible care expenses becomes the credit?",
        "a": "20% to 35%, depending on AGI."
      },
      {
        "id": "v5-106",
        "q": "If eligible care expenses are $6,000 and the taxpayer’s percentage is 20%, what is the credit?",
        "a": "$1,200."
      },
      {
        "id": "v5-107",
        "q": "What form computes the Child and Dependent Care Credit?",
        "a": "Form 2441."
      },
      {
        "id": "v5-108",
        "q": "What age must a qualifying child generally be for the Child and Dependent Care Credit?",
        "a": "Under age 13."
      },
      {
        "id": "v5-109",
        "q": "If a child turns 13 during the year, can expenses before the 13th birthday still qualify?",
        "a": "Yes."
      },
      {
        "id": "v5-110",
        "q": "Can care for a disabled spouse qualify for the Child and Dependent Care Credit?",
        "a": "Yes, if the spouse lived with the taxpayer more than half the year and the other rules are met."
      },
      {
        "id": "v5-111",
        "q": "Can care for another disabled dependent qualify?",
        "a": "Yes, if the person lived with the taxpayer more than half the year and meets the dependency-related rules."
      },
      {
        "id": "v5-112",
        "q": "Do child-support payments qualify for the Child and Dependent Care Credit?",
        "a": "No."
      },
      {
        "id": "v5-113",
        "q": "Do care expenses reimbursed by a social-service agency qualify?",
        "a": "No."
      },
      {
        "id": "v5-114",
        "q": "Can household services such as a maid, cook, babysitter, or cleaning person qualify as dependent-care expenses?",
        "a": "Yes, if they are needed for care so the taxpayer can work or look for work."
      },
      {
        "id": "v5-115",
        "q": "Do chauffeur, bartender, or gardener expenses qualify as dependent-care expenses under the examples discussed?",
        "a": "No."
      },
      {
        "id": "v5-116",
        "q": "Can a taxpayer normally claim the Child and Dependent Care Credit while filing MFS?",
        "a": "Generally no, subject to the special separated-spouse exception."
      },
      {
        "id": "v5-117",
        "q": "Can the care provider be the taxpayer’s spouse?",
        "a": "No."
      },
      {
        "id": "v5-118",
        "q": "Can the care provider be the parent of the qualifying child?",
        "a": "No."
      },
      {
        "id": "v5-119",
        "q": "Can the care provider be a person the taxpayer claims as a dependent?",
        "a": "No."
      },
      {
        "id": "v5-120",
        "q": "If the care provider is the taxpayer’s child, what age/dependency condition applies?",
        "a": "The child must be at least age 19 and not be the taxpayer’s dependent."
      },
      {
        "id": "v5-121",
        "q": "What identifying information about the care provider must generally be reported on Form 2441?",
        "a": "Name, address, taxpayer identification number, and amount paid."
      },
      {
        "id": "v5-122",
        "q": "When can an MFS taxpayer potentially claim the Child and Dependent Care Credit?",
        "a": "If the spouses lived apart for the last 6 months, the qualifying person’s main home was with the taxpayer more than 6 months, and the taxpayer paid more than half the home’s upkeep."
      },
      {
        "id": "v5-123",
        "q": "Is the Earned Income Credit refundable?",
        "a": "Yes."
      },
      {
        "id": "v5-124",
        "q": "Can a taxpayer without a qualifying child potentially claim the EIC?",
        "a": "Yes, if the no-child rules are met."
      },
      {
        "id": "v5-125",
        "q": "For EIC purposes, must both AGI and earned income be below the applicable limit?",
        "a": "Yes."
      },
      {
        "id": "v5-126",
        "q": "For 2025, what is the maximum AGI/earned-income amount shown for MFJ with three or more qualifying children?",
        "a": "$68,675."
      },
      {
        "id": "v5-127",
        "q": "For 2025, what is the maximum amount shown for non-MFJ filers with three or more qualifying children?",
        "a": "$61,555."
      },
      {
        "id": "v5-128",
        "q": "For taxpayers with no qualifying children, what maximum income amount is shown for MFJ?",
        "a": "$26,214."
      },
      {
        "id": "v5-129",
        "q": "For taxpayers with no qualifying children, what maximum income amount is shown for other filing statuses?",
        "a": "$19,104."
      },
      {
        "id": "v5-130",
        "q": "Can an MFS taxpayer ever claim the EIC?",
        "a": "Yes, under the special separated-spouse rules."
      },
      {
        "id": "v5-131",
        "q": "What child-residency condition applies to an MFS taxpayer claiming EIC under the exception?",
        "a": "The qualifying child must live with the taxpayer more than half the year."
      },
      {
        "id": "v5-132",
        "q": "What separation conditions can allow an MFS taxpayer to claim EIC?",
        "a": "Living apart from the spouse for the last 6 months, or being legally separated and not living in the same household at year-end."
      },
      {
        "id": "v5-133",
        "q": "What Social Security number requirement applies to the EIC?",
        "a": "The taxpayer, spouse, and each person claimed for EIC must have valid Social Security numbers."
      },
      {
        "id": "v5-134",
        "q": "What citizenship/residency rule generally applies to the EIC?",
        "a": "The taxpayer must be a U.S. citizen or resident alien for the entire year, subject to the election for certain nonresident spouses."
      },
      {
        "id": "v5-135",
        "q": "Can a taxpayer filing Form 2555 claim the EIC?",
        "a": "No."
      },
      {
        "id": "v5-136",
        "q": "What is the 2025 EIC investment-income limit discussed?",
        "a": "$11,950."
      },
      {
        "id": "v5-137",
        "q": "Must a taxpayer have earned income to claim the EIC?",
        "a": "Yes."
      },
      {
        "id": "v5-138",
        "q": "What common items count as earned income for the EIC?",
        "a": "Wages, salaries, tips, and net earnings from self-employment."
      },
      {
        "id": "v5-139",
        "q": "Does nontaxable combat pay count as earned income for EIC purposes?",
        "a": "Yes."
      },
      {
        "id": "v5-140",
        "q": "Can a minister’s nontaxable housing allowance count as earned income for EIC purposes?",
        "a": "Yes."
      },
      {
        "id": "v5-141",
        "q": "Can taxable strike and lockout benefits count as earned income for EIC purposes?",
        "a": "Yes."
      },
      {
        "id": "v5-142",
        "q": "Can disability retirement payments count as earned income for EIC purposes?",
        "a": "Yes, unlike ordinary disability insurance payments."
      },
      {
        "id": "v5-143",
        "q": "What relationship test applies to an EIC qualifying child?",
        "a": "The child must be the taxpayer’s child, sibling, or a descendant of either."
      },
      {
        "id": "v5-144",
        "q": "What age rule applies to an EIC qualifying child who is not disabled?",
        "a": "Under 19 and younger than the taxpayer, or under 24, a full-time student, and younger than the taxpayer."
      },
      {
        "id": "v5-145",
        "q": "Can a permanently and totally disabled person be an EIC qualifying child regardless of age?",
        "a": "Yes."
      },
      {
        "id": "v5-146",
        "q": "What residence rule applies to an EIC qualifying child?",
        "a": "The child must live with the taxpayer in the United States for more than half the year, subject to normal temporary-absence/birth/death rules."
      },
      {
        "id": "v5-147",
        "q": "Can an EIC qualifying child file a joint return?",
        "a": "Only if the joint return is filed solely to claim a refund."
      },
      {
        "id": "v5-148",
        "q": "Can the same child be used by more than one taxpayer to claim EIC?",
        "a": "No."
      },
      {
        "id": "v5-149",
        "q": "If only one claimant is the child’s parent, who wins the EIC tiebreaker?",
        "a": "The parent."
      },
      {
        "id": "v5-150",
        "q": "If both parents claim the child, who wins the EIC tiebreaker?",
        "a": "The parent with whom the child lived longer during the year."
      },
      {
        "id": "v5-151",
        "q": "If the child lived equally with both parents, who wins the tiebreaker?",
        "a": "The parent with the higher AGI."
      },
      {
        "id": "v5-152",
        "q": "If no parent claims the child, when can another person claim the child for EIC?",
        "a": "If that person has the highest AGI and it is higher than any parent who could claim the child."
      },
      {
        "id": "v5-153",
        "q": "Can someone who is another taxpayer’s EIC qualifying child claim EIC for their own child?",
        "a": "No."
      },
      {
        "id": "v5-154",
        "q": "If a taxpayer has no qualifying child, what age range is required for EIC?",
        "a": "At least age 25 but under age 65 at year-end."
      },
      {
        "id": "v5-155",
        "q": "Does the age-25-to-under-65 rule apply when the taxpayer has a qualifying child?",
        "a": "No."
      },
      {
        "id": "v5-156",
        "q": "Without a qualifying child, must the taxpayer live in the United States more than half the year to claim EIC?",
        "a": "Yes."
      },
      {
        "id": "v5-157",
        "q": "What are the two main education credits?",
        "a": "American Opportunity Credit (AOC) and Lifetime Learning Credit (LLC)."
      },
      {
        "id": "v5-158",
        "q": "Which education credit is generally aimed at the first four years of undergraduate education?",
        "a": "American Opportunity Credit."
      },
      {
        "id": "v5-159",
        "q": "Which education credit is generally used for graduate school or ongoing education?",
        "a": "Lifetime Learning Credit."
      },
      {
        "id": "v5-160",
        "q": "Who claims an education credit when the student is someone else’s dependent?",
        "a": "The taxpayer who claims the student as a dependent."
      },
      {
        "id": "v5-161",
        "q": "Can both AOC and LLC be claimed for the same student in the same year?",
        "a": "No."
      },
      {
        "id": "v5-162",
        "q": "Over what AGI range do the education credits phase out for most filing statuses?",
        "a": "$80,000 to $90,000."
      },
      {
        "id": "v5-163",
        "q": "Over what AGI range do they phase out for MFJ?",
        "a": "$160,000 to $180,000."
      },
      {
        "id": "v5-164",
        "q": "Can MFS claim the AOC or LLC?",
        "a": "No."
      },
      {
        "id": "v5-165",
        "q": "Must the student attend an accredited postsecondary institution for the education credits discussed?",
        "a": "Yes."
      },
      {
        "id": "v5-166",
        "q": "What is the maximum AOC per qualifying student?",
        "a": "$2,500."
      },
      {
        "id": "v5-167",
        "q": "How is the AOC computed on the first $4,000 of qualified expenses?",
        "a": "100% of the first $2,000 plus 25% of the next $2,000."
      },
      {
        "id": "v5-168",
        "q": "How much of the AOC can be refundable?",
        "a": "Up to 40%, or $1,000."
      },
      {
        "id": "v5-169",
        "q": "For how many tax years can the AOC generally be claimed per student?",
        "a": "A maximum of four years."
      },
      {
        "id": "v5-170",
        "q": "What enrollment level is required for the AOC?",
        "a": "At least half-time for at least one academic period in a degree or certificate program."
      },
      {
        "id": "v5-171",
        "q": "Can a student with a felony conviction for possession or distribution of a controlled substance qualify for the AOC?",
        "a": "No."
      },
      {
        "id": "v5-172",
        "q": "What school form is generally needed to support the education credit?",
        "a": "Form 1098-T."
      },
      {
        "id": "v5-173",
        "q": "What form is used to claim the education credits?",
        "a": "Form 8863."
      },
      {
        "id": "v5-174",
        "q": "Do AOC qualified expenses include tuition and required fees regardless of whether paid with cash, check, or student loan?",
        "a": "Yes."
      },
      {
        "id": "v5-175",
        "q": "Do books, supplies, and equipment qualify for AOC even if purchased somewhere other than the school?",
        "a": "Yes, if they are needed for the course."
      },
      {
        "id": "v5-176",
        "q": "Can mandatory student-activity or athletic fees qualify for AOC?",
        "a": "Yes, if required as a condition of enrollment."
      },
      {
        "id": "v5-177",
        "q": "Do room and board qualify for AOC?",
        "a": "No."
      },
      {
        "id": "v5-178",
        "q": "Do insurance, medical, and transportation expenses qualify for AOC?",
        "a": "No."
      },
      {
        "id": "v5-179",
        "q": "Do sports, hobby, or noncredit-course expenses qualify for AOC?",
        "a": "Only if they are part of the student’s degree program."
      },
      {
        "id": "v5-180",
        "q": "What is the Lifetime Learning Credit rate and maximum?",
        "a": "20% of the first $10,000 of qualified expenses, for a maximum $2,000 credit."
      },
      {
        "id": "v5-181",
        "q": "Is the $2,000 LLC maximum per student?",
        "a": "No; it is the maximum per return."
      },
      {
        "id": "v5-182",
        "q": "Is there a limit on the number of years the LLC can be claimed?",
        "a": "No."
      },
      {
        "id": "v5-183",
        "q": "Can the LLC be claimed for a student with a felony drug conviction?",
        "a": "Yes."
      },
      {
        "id": "v5-184",
        "q": "For LLC, when do books, supplies, and equipment qualify?",
        "a": "Only if they must be paid to the institution as a condition of enrollment or attendance."
      },
      {
        "id": "v5-185",
        "q": "Can courses that improve job skills qualify for the LLC even if not part of a degree program?",
        "a": "Yes."
      },
      {
        "id": "v5-186",
        "q": "How is qualified education expense reduced when the student receives tax-free scholarships, grants, employer assistance, or veterans’ education benefits?",
        "a": "Those tax-free amounts reduce the qualified expenses."
      },
      {
        "id": "v5-187",
        "q": "What age/disability rule applies to a child for the adoption credit?",
        "a": "The child must be under age 18 or disabled."
      },
      {
        "id": "v5-188",
        "q": "What is the 2025 adoption-credit expense limit per child?",
        "a": "$17,280."
      },
      {
        "id": "v5-189",
        "q": "Over what AGI range does the adoption credit phase out under the transcript?",
        "a": "$259,190 to $299,190."
      },
      {
        "id": "v5-190",
        "q": "What form is used for the adoption credit?",
        "a": "Form 8839."
      },
      {
        "id": "v5-191",
        "q": "For a U.S. child adoption, when can qualified expenses generally be claimed if the adoption is not yet final?",
        "a": "In the year after the expenses were incurred."
      },
      {
        "id": "v5-192",
        "q": "Can U.S.-child adoption expenses qualify even if the adoption never becomes final?",
        "a": "Yes."
      },
      {
        "id": "v5-193",
        "q": "For a foreign child adoption, when can pre-finalization expenses be claimed?",
        "a": "In the year the adoption becomes final."
      },
      {
        "id": "v5-194",
        "q": "What is the maximum adoption credit per child regardless of how many years the process takes?",
        "a": "$17,280."
      },
      {
        "id": "v5-195",
        "q": "How much of the adoption credit became refundable for 2025 under the OBBBA rule discussed?",
        "a": "Up to $5,000."
      },
      {
        "id": "v5-196",
        "q": "How long can excess adoption credit be carried forward?",
        "a": "Up to five years."
      },
      {
        "id": "v5-197",
        "q": "How much employer-provided adoption assistance can generally be excluded from income under the amount discussed?",
        "a": "Up to $17,280."
      },
      {
        "id": "v5-198",
        "q": "What type of health insurance can qualify a taxpayer for the Premium Tax Credit?",
        "a": "A qualified health plan purchased through the ACA marketplace."
      },
      {
        "id": "v5-199",
        "q": "Is the Premium Tax Credit refundable?",
        "a": "Yes."
      },
      {
        "id": "v5-200",
        "q": "What form generally reports marketplace health-insurance information to the taxpayer?",
        "a": "Form 1095-A."
      },
      {
        "id": "v5-201",
        "q": "What form is used to claim and reconcile the Premium Tax Credit?",
        "a": "Form 8962."
      },
      {
        "id": "v5-202",
        "q": "What minimum income level generally applies for the Premium Tax Credit?",
        "a": "At least 100% of the federal poverty level, subject to the applicable rules."
      },
      {
        "id": "v5-203",
        "q": "Why are taxpayers below the poverty level generally not eligible for the Premium Tax Credit?",
        "a": "They are generally eligible for Medicaid instead."
      },
      {
        "id": "v5-204",
        "q": "Can a taxpayer eligible for affordable employer-sponsored coverage claim the Premium Tax Credit merely by declining that employer coverage?",
        "a": "No."
      },
      {
        "id": "v5-205",
        "q": "Can a taxpayer eligible for Medicare, Medicaid, TRICARE, or similar government health coverage claim the Premium Tax Credit?",
        "a": "Generally no."
      },
      {
        "id": "v5-206",
        "q": "Must a taxpayer with advance Premium Tax Credit payments file a tax return?",
        "a": "Yes."
      },
      {
        "id": "v5-207",
        "q": "If actual income is higher than estimated for advance Premium Tax Credit purposes, what generally happens?",
        "a": "Part of the advance credit may have to be repaid."
      },
      {
        "id": "v5-208",
        "q": "If actual income is lower than estimated, what generally happens to the Premium Tax Credit?",
        "a": "The taxpayer may receive additional refundable credit."
      },
      {
        "id": "v5-209",
        "q": "Are the 2025 residential energy and vehicle credits discussed refundable?",
        "a": "No."
      },
      {
        "id": "v5-210",
        "q": "When do the residential energy credits discussed expire?",
        "a": "After 2025."
      },
      {
        "id": "v5-211",
        "q": "What percentage applies to the Energy Efficient Home Improvement Credit?",
        "a": "30% of qualifying costs."
      },
      {
        "id": "v5-212",
        "q": "What is the general annual maximum Energy Efficient Home Improvement Credit?",
        "a": "$1,200."
      },
      {
        "id": "v5-213",
        "q": "What is the annual window limit under that credit?",
        "a": "$600."
      },
      {
        "id": "v5-214",
        "q": "What is the per-door limit and total door limit under the Energy Efficient Home Improvement Credit?",
        "a": "$250 per door, up to $500 total."
      },
      {
        "id": "v5-215",
        "q": "What is the per-item limit for qualifying central air conditioners, certain water heaters, and furnaces?",
        "a": "$600 per item."
      },
      {
        "id": "v5-216",
        "q": "What is the home energy audit limit?",
        "a": "$150."
      },
      {
        "id": "v5-217",
        "q": "What separate annual limit applies to heat pumps, biomass stoves, and boilers?",
        "a": "$2,000."
      },
      {
        "id": "v5-218",
        "q": "Can unused Energy Efficient Home Improvement Credit be carried forward?",
        "a": "No."
      },
      {
        "id": "v5-219",
        "q": "By what date must qualifying 2025 home-improvement property be installed?",
        "a": "December 31, 2025."
      },
      {
        "id": "v5-220",
        "q": "What percentage is the Residential Clean Energy Credit?",
        "a": "30% of qualifying cost."
      },
      {
        "id": "v5-221",
        "q": "What types of property can qualify for the Residential Clean Energy Credit?",
        "a": "Solar, wind, geothermal, solar water heaters, fuel cells, and battery storage."
      },
      {
        "id": "v5-222",
        "q": "Does the Residential Clean Energy Credit have an annual or lifetime dollar cap under the rule discussed?",
        "a": "No."
      },
      {
        "id": "v5-223",
        "q": "Can unused Residential Clean Energy Credit be carried forward?",
        "a": "Yes."
      },
      {
        "id": "v5-224",
        "q": "What is the maximum new clean-vehicle credit discussed for 2025?",
        "a": "$7,500."
      },
      {
        "id": "v5-225",
        "q": "By what date must a qualifying new clean vehicle be acquired under the 2025 cutoff?",
        "a": "September 30, 2025."
      },
      {
        "id": "v5-226",
        "q": "What MSRP limit applies to vans, SUVs, and pickups for the new clean-vehicle credit?",
        "a": "$80,000."
      },
      {
        "id": "v5-227",
        "q": "What MSRP limit applies to other new vehicles?",
        "a": "$55,000."
      },
      {
        "id": "v5-228",
        "q": "Is the new clean-vehicle credit refundable or carryforward?",
        "a": "No; it is nonrefundable and cannot be carried forward."
      },
      {
        "id": "v5-229",
        "q": "What is the used clean-vehicle credit percentage and maximum?",
        "a": "30% of sales price, up to $4,000."
      },
      {
        "id": "v5-230",
        "q": "How often can the used clean-vehicle credit generally be claimed?",
        "a": "Once every three years."
      },
      {
        "id": "v5-231",
        "q": "Must a used clean vehicle be purchased from a dealer to qualify?",
        "a": "Yes."
      },
      {
        "id": "v5-232",
        "q": "How old must a used vehicle be for the used clean-vehicle credit?",
        "a": "At least two model years old."
      },
      {
        "id": "v5-233",
        "q": "For a 2025 purchase, what is the newest model year that can qualify as previously owned under the rule discussed?",
        "a": "2023."
      },
      {
        "id": "v5-234",
        "q": "What is the maximum sales price for a used clean vehicle to qualify?",
        "a": "$25,000."
      },
      {
        "id": "v5-235",
        "q": "What does “acquired” mean for the September 30, 2025 clean-vehicle cutoff?",
        "a": "A binding written contract has been entered into and a payment, including a nominal down payment or trade-in, has been made."
      },
      {
        "id": "v5-236",
        "q": "Can a vehicle delivered after September 30, 2025 still qualify if the binding contract and payment occurred by that date?",
        "a": "Yes."
      },
      {
        "id": "v5-237",
        "q": "For the new clean-vehicle credit, what AGI threshold applies to MFJ or QSS?",
        "a": "$300,000."
      },
      {
        "id": "v5-238",
        "q": "For the new clean-vehicle credit, what AGI threshold applies to Single or MFS?",
        "a": "$150,000."
      },
      {
        "id": "v5-239",
        "q": "For the new clean-vehicle credit, what AGI threshold applies to HOH?",
        "a": "$225,000."
      },
      {
        "id": "v5-240",
        "q": "For the used clean-vehicle credit, what AGI threshold applies to MFJ?",
        "a": "$150,000."
      },
      {
        "id": "v5-241",
        "q": "For the used clean-vehicle credit, what AGI threshold applies to Single or MFS?",
        "a": "$75,000."
      },
      {
        "id": "v5-242",
        "q": "For the used clean-vehicle credit, what AGI threshold applies to HOH?",
        "a": "$112,500."
      },
      {
        "id": "v5-243",
        "q": "For clean-vehicle credit AGI testing, which year’s AGI may be used?",
        "a": "The lower of current-year or prior-year AGI."
      },
      {
        "id": "v5-244",
        "q": "If a taxpayer transfers a clean-vehicle credit to the dealer, must the taxpayer still file a tax return?",
        "a": "Yes."
      },
      {
        "id": "v5-245",
        "q": "What forms must be attached when a clean-vehicle credit was transferred to the dealer?",
        "a": "Form 8936 and Schedule A of Form 8936."
      },
      {
        "id": "v5-246",
        "q": "What is the Saver’s Credit formally called?",
        "a": "The Retirement Savings Contributions Credit."
      },
      {
        "id": "v5-247",
        "q": "What age must a taxpayer generally be to claim the Saver’s Credit?",
        "a": "At least 18."
      },
      {
        "id": "v5-248",
        "q": "What credit percentages can apply to eligible retirement contributions for the Saver’s Credit?",
        "a": "10%, 20%, or 50%."
      },
      {
        "id": "v5-249",
        "q": "What maximum contribution amount is eligible for the Saver’s Credit for a non-MFJ taxpayer?",
        "a": "$2,000."
      },
      {
        "id": "v5-250",
        "q": "What maximum contribution amount is eligible for MFJ?",
        "a": "$4,000."
      },
      {
        "id": "v5-251",
        "q": "What is the maximum possible Saver’s Credit for MFJ at the 50% rate?",
        "a": "$2,000."
      },
      {
        "id": "v5-252",
        "q": "What is the maximum AGI for the Saver’s Credit for MFJ under the amounts discussed?",
        "a": "$79,000."
      },
      {
        "id": "v5-253",
        "q": "What is the maximum AGI for Single, MFS, or QSS?",
        "a": "$39,500."
      },
      {
        "id": "v5-254",
        "q": "What is the maximum AGI for HOH?",
        "a": "$59,250."
      },
      {
        "id": "v5-255",
        "q": "Is the Saver’s Credit refundable?",
        "a": "No."
      },
      {
        "id": "v5-256",
        "q": "Who can potentially claim the Credit for the Elderly or Disabled?",
        "a": "A taxpayer age 65 or older or a qualifying disabled taxpayer who meets the income limits."
      },
      {
        "id": "v5-257",
        "q": "What schedule is used for the Credit for the Elderly or Disabled?",
        "a": "Schedule R."
      },
      {
        "id": "v5-258",
        "q": "Can the taxpayer ask the IRS to compute the Credit for the Elderly or Disabled?",
        "a": "Yes, by checking the applicable box."
      },
      {
        "id": "v5-259",
        "q": "Is the Credit for the Elderly or Disabled refundable?",
        "a": "No."
      },
      {
        "id": "v5-260",
        "q": "What are the main categories of tax payments on the return?",
        "a": "Withholding, estimated tax payments, amounts applied from a prior-year overpayment, and refundable credits."
      },
      {
        "id": "v5-261",
        "q": "What forms commonly show federal income-tax withholding?",
        "a": "Form W-2 and various Forms 1099, especially Form 1099-R."
      },
      {
        "id": "v5-262",
        "q": "What form is used for individual estimated tax payments?",
        "a": "Form 1040-ES."
      },
      {
        "id": "v5-263",
        "q": "Why are estimated tax payments required?",
        "a": "To pay tax as income is earned when enough tax is not being withheld and to avoid underpayment penalties."
      },
      {
        "id": "v5-264",
        "q": "What are the four standard estimated-tax due dates?",
        "a": "April 15, June 15, September 15, and January 15 of the following year."
      },
      {
        "id": "v5-265",
        "q": "What happens if an estimated-tax due date falls on a weekend or federal holiday?",
        "a": "The payment is due the next business day."
      },
      {
        "id": "v5-266",
        "q": "If expected balance due after withholding and refundable credits is less than $1,000, are estimated payments generally required?",
        "a": "No."
      },
      {
        "id": "v5-267",
        "q": "What current-year safe harbor can eliminate the estimated-tax payment requirement?",
        "a": "Withholding and refundable credits equal at least 90% of current-year tax."
      },
      {
        "id": "v5-268",
        "q": "What prior-year safe harbor generally eliminates the estimated-tax payment requirement?",
        "a": "Withholding and refundable credits equal at least 100% of prior-year tax."
      },
      {
        "id": "v5-269",
        "q": "When does the prior-year safe harbor increase from 100% to 110%?",
        "a": "When prior-year AGI exceeded $150,000."
      },
      {
        "id": "v5-270",
        "q": "What requirement applies to the prior-year return for use of the prior-year safe harbor?",
        "a": "It must cover a full 12-month year."
      },
      {
        "id": "v5-271",
        "q": "If current-year tax is $20,000 and withholding is $18,000, does the taxpayer meet the 90% safe harbor?",
        "a": "Yes."
      },
      {
        "id": "v5-272",
        "q": "If prior-year tax was $5,000 and prior-year AGI was below $150,000, how much current-year withholding/credits generally satisfies the prior-year safe harbor?",
        "a": "$5,000."
      },
      {
        "id": "v5-273",
        "q": "What form can the taxpayer use to compute an underpayment penalty?",
        "a": "Form 2210."
      },
      {
        "id": "v5-274",
        "q": "Can the IRS compute the underpayment penalty instead of the taxpayer?",
        "a": "Yes."
      },
      {
        "id": "v5-275",
        "q": "Can a current-year refund be applied to next year’s estimated taxes?",
        "a": "Yes."
      },
      {
        "id": "v5-276",
        "q": "Can a taxpayer apply only part of a refund to next year and receive the rest?",
        "a": "Yes."
      },
      {
        "id": "v5-277",
        "q": "What is a common electronic method to pay a balance due with a return?",
        "a": "Direct debit from a bank account."
      },
      {
        "id": "v5-278",
        "q": "Can tax still be paid by check for 2025 under the material discussed?",
        "a": "Yes, though checks are being phased out."
      },
      {
        "id": "v5-279",
        "q": "Can a tax balance be paid by credit or debit card online?",
        "a": "Yes, usually with a processing fee."
      },
      {
        "id": "v5-280",
        "q": "Can some tax payments be made in cash?",
        "a": "Yes, at IRS taxpayer assistance centers and up to specified limits through certain retail partners."
      },
      {
        "id": "v5-281",
        "q": "What is a common way to receive a tax refund?",
        "a": "Direct deposit to a bank account."
      },
      {
        "id": "v5-282",
        "q": "Can a taxpayer receive a refund on a prepaid debit card?",
        "a": "Yes."
      },
      {
        "id": "v5-283",
        "q": "Can a refund be applied to the next year’s tax instead of being paid out?",
        "a": "Yes."
      },
      {
        "id": "v5-284",
        "q": "Can taxpayers use a federal refund to purchase U.S. savings bonds under the 2025 rules discussed?",
        "a": "No; that option was eliminated in 2024."
      },
      {
        "id": "v5-285",
        "q": "What is the Alternative Minimum Tax (AMT)?",
        "a": "A separate additional income tax designed to ensure taxpayers with high economic income pay at least a minimum amount of tax."
      },
      {
        "id": "v5-286",
        "q": "What form is used to compute AMT?",
        "a": "Form 6251."
      },
      {
        "id": "v5-287",
        "q": "What is the starting point for calculating AMT?",
        "a": "Regular taxable income."
      },
      {
        "id": "v5-288",
        "q": "After starting with regular taxable income, what is added for AMT before adjustments?",
        "a": "AMT preference items."
      },
      {
        "id": "v5-289",
        "q": "What comes after adding AMT preferences?",
        "a": "Add or subtract AMT adjustments to arrive at tentative AMTI."
      },
      {
        "id": "v5-290",
        "q": "What is subtracted from tentative AMTI before applying AMT tax rates?",
        "a": "The AMT exemption."
      },
      {
        "id": "v5-291",
        "q": "After applying AMT tax rates, what credit is subtracted before comparing AMT with regular tax?",
        "a": "Any AMT foreign tax credit."
      },
      {
        "id": "v5-292",
        "q": "How is the final additional AMT determined?",
        "a": "Subtract regular tax from the tentative AMT; the excess is added as additional tax."
      },
      {
        "id": "v5-293",
        "q": "What are AMT preference items?",
        "a": "Items receiving special treatment for regular tax that are added back for AMT."
      },
      {
        "id": "v5-294",
        "q": "What tax-exempt interest is a common AMT preference item?",
        "a": "Private activity bond interest."
      },
      {
        "id": "v5-295",
        "q": "What percentage of certain pre-September-28-2010 qualified small business stock gain is added back as an AMT preference under the material taught?",
        "a": "7%."
      },
      {
        "id": "v5-296",
        "q": "Name two oil-and-gas AMT preference items taught.",
        "a": "Excess depletion over basis and intangible drilling cost differences."
      },
      {
        "id": "v5-297",
        "q": "How do AMT adjustments differ from AMT preferences?",
        "a": "Adjustments can increase or decrease AMTI; preferences are generally added back."
      },
      {
        "id": "v5-298",
        "q": "What happens to the standard deduction for AMT purposes?",
        "a": "It is added back."
      },
      {
        "id": "v5-299",
        "q": "What happens to state, local, and foreign income, sales, and property taxes deducted as itemized deductions for AMT purposes?",
        "a": "They are added back."
      },
      {
        "id": "v5-300",
        "q": "Can investment-interest expense be computed differently for AMT?",
        "a": "Yes; the adjustment can increase or decrease AMTI."
      },
      {
        "id": "v5-301",
        "q": "When are incentive stock options generally taxed for AMT purposes?",
        "a": "When the option is exercised, rather than when the stock is later sold."
      },
      {
        "id": "v5-302",
        "q": "Can depreciation differ for AMT and regular tax purposes?",
        "a": "Yes."
      },
      {
        "id": "v5-303",
        "q": "Can gain or loss on disposition of property differ for AMT because AMT basis may differ?",
        "a": "Yes."
      },
      {
        "id": "v5-304",
        "q": "Does the $3,000 capital-loss limitation still apply in computing AMT?",
        "a": "Yes."
      },
      {
        "id": "v5-305",
        "q": "What is the 2025 AMT exemption for Single and Head of Household?",
        "a": "$88,100."
      },
      {
        "id": "v5-306",
        "q": "What is the 2025 AMT exemption for MFJ and Qualifying Surviving Spouse?",
        "a": "$137,000."
      },
      {
        "id": "v5-307",
        "q": "How is the MFS AMT exemption determined under the material taught?",
        "a": "It is half the MFJ amount."
      },
      {
        "id": "v5-308",
        "q": "For Single or HOH, below what AMTI is the full 2025 AMT exemption available under the chart taught?",
        "a": "Below $626,350."
      },
      {
        "id": "v5-309",
        "q": "For Single or HOH, above what AMTI is the AMT exemption fully phased out under the chart taught?",
        "a": "Above $978,750."
      },
      {
        "id": "v5-310",
        "q": "What are the two AMT tax rates?",
        "a": "26% and 28%."
      },
      {
        "id": "v5-311",
        "q": "For filing statuses other than MFS, how much 2025 AMTI is taxed at 26% before the 28% rate applies?",
        "a": "The first $239,100."
      },
      {
        "id": "v5-312",
        "q": "For filing statuses other than MFS, what AMT rate applies above $239,100?",
        "a": "28%."
      },
      {
        "id": "v5-313",
        "q": "What subtraction amount is used in the 28% AMT shortcut calculation taught?",
        "a": "$4,782."
      },
      {
        "id": "v5-314",
        "q": "Why is $4,782 subtracted in the 28% AMT shortcut?",
        "a": "It adjusts for the first $239,100 having been taxed at 26% rather than 28%."
      },
      {
        "id": "v5-315",
        "q": "How are long-term capital gains taxed for AMT purposes under the material taught?",
        "a": "Using the same preferential 0%, 15%, and 20% capital-gain rates."
      },
      {
        "id": "v5-316",
        "q": "What income pattern can signal possible AMT exposure?",
        "a": "Gross income significantly higher than regular taxable income because of exclusions or deductions."
      },
      {
        "id": "v5-317",
        "q": "Can significant long-term capital gains be an AMT warning sign?",
        "a": "Yes."
      },
      {
        "id": "v5-318",
        "q": "Can exercising many incentive stock options be an AMT trigger?",
        "a": "Yes."
      },
      {
        "id": "v5-319",
        "q": "Can substantial private-activity-bond interest be an AMT trigger?",
        "a": "Yes."
      },
      {
        "id": "v5-320",
        "q": "In the Harold AMT example, what was his regular taxable income?",
        "a": "$130,000."
      },
      {
        "id": "v5-321",
        "q": "In the Harold AMT example, what was his regular income tax?",
        "a": "$24,047."
      },
      {
        "id": "v5-322",
        "q": "How much private-activity-bond interest did Harold have?",
        "a": "$40,000."
      },
      {
        "id": "v5-323",
        "q": "What standard deduction amount was added back in Harold's AMT calculation?",
        "a": "$15,750."
      },
      {
        "id": "v5-324",
        "q": "What was Harold's tentative AMTI before the exemption?",
        "a": "$185,750."
      },
      {
        "id": "v5-325",
        "q": "What AMT exemption did Harold subtract?",
        "a": "$88,100."
      },
      {
        "id": "v5-326",
        "q": "What AMTI remained for Harold after the exemption?",
        "a": "$97,650."
      },
      {
        "id": "v5-327",
        "q": "What AMT rate applied to Harold's $97,650 AMTI?",
        "a": "26%."
      },
      {
        "id": "v5-328",
        "q": "What was Harold's tentative AMT before subtracting regular tax?",
        "a": "$25,389."
      },
      {
        "id": "v5-329",
        "q": "What additional AMT did Harold owe after subtracting his $24,047 regular tax?",
        "a": "$1,342."
      },
      {
        "id": "v5-330",
        "q": "Where is Harold's additional AMT reported as an additional tax?",
        "a": "Schedule 2."
      },
      {
        "id": "v5-331",
        "q": "Why can prior-year AMT sometimes generate a credit in a later year?",
        "a": "Some AMT adjustments are timing differences that reverse in later years."
      },
      {
        "id": "v5-332",
        "q": "What form is used to calculate the credit for prior-year AMT?",
        "a": "Form 8801."
      },
      {
        "id": "v5-333",
        "q": "Can the prior-year AMT credit generally be used in a year when the taxpayer also owes AMT?",
        "a": "No; the credit is used against regular tax in a year when AMT does not apply."
      },
      {
        "id": "v5-334",
        "q": "In the David kiddie-tax example, what were David's wages, dividends, and total gross income?",
        "a": "$5,000 of wages, $3,700 of dividends, and $8,700 of gross income."
      },
      {
        "id": "v5-335",
        "q": "In the David kiddie-tax example, what standard deduction did he claim?",
        "a": "$5,450, equal to his $5,000 of earned income plus $450."
      },
      {
        "id": "v5-336",
        "q": "In the David kiddie-tax example, what was his taxable income?",
        "a": "$3,250."
      },
      {
        "id": "v5-337",
        "q": "In the David kiddie-tax example, how much of his dividends was taxed at his parents' tax rate?",
        "a": "$1,000, equal to $3,700 of unearned income minus the $2,700 amount taxed at his own rate."
      },
      {
        "id": "v5-338",
        "q": "In the David kiddie-tax example, how much taxable income remained to be taxed at David's own rate?",
        "a": "$2,250."
      },
      {
        "id": "v5-339",
        "q": "What age/student condition must a child meet for the parents to elect Form 8814 treatment under the rule taught?",
        "a": "The child must be under age 19, or under age 24 and a full-time student."
      },
      {
        "id": "v5-340",
        "q": "What gross-income limit applies to the child for the Form 8814 election under the 2025 amounts taught?",
        "a": "The child's gross income must be less than $13,500."
      },
      {
        "id": "v5-341",
        "q": "What type of income can the child have for the Form 8814 election under the rule taught?",
        "a": "Only investment-type income."
      },
      {
        "id": "v5-342",
        "q": "Can Form 8814 be used if the child files a joint return?",
        "a": "No."
      },
      {
        "id": "v5-343",
        "q": "Can Form 8814 be used if federal income tax was withheld from the child's income under the rule taught?",
        "a": "No."
      },
      {
        "id": "v5-344",
        "q": "Can Form 8814 be used if estimated tax payments were made on the child's behalf?",
        "a": "No."
      },
      {
        "id": "v5-345",
        "q": "How many Forms 8814 are filed when parents elect to report income for multiple qualifying children?",
        "a": "A separate Form 8814 for each qualifying child."
      },
      {
        "id": "v5-346",
        "q": "Who is the qualifying parent for Form 8814 when the parents file Married Filing Jointly?",
        "a": "The parents filing the joint return."
      },
      {
        "id": "v5-347",
        "q": "Who generally reports the child's income for Form 8814 when the parents are MFS or unmarried but living together?",
        "a": "The parent with the higher taxable income."
      },
      {
        "id": "v5-348",
        "q": "Who is generally the qualifying parent for Form 8814 when the parents live apart?",
        "a": "The custodial parent."
      },
      {
        "id": "v5-349",
        "q": "If the custodial parent remarried and files separately, when can that parent use Form 8814 under the rule taught?",
        "a": "When the custodial parent's taxable income is higher than the new spouse's taxable income."
      },
      {
        "id": "v5-350",
        "q": "If a remarried custodial parent filing separately has lower taxable income than the new spouse, what happens under the Form 8814 rule taught?",
        "a": "Form 8814 cannot be used; the child must file a separate return."
      }
    ]
  },
  {
    "id": "video-6",
    "video": 6,
    "title": "Retirement & Social Security",
    "cards": [
      {
        "id": "v6-001",
        "q": "What does IRA stand for in the broad tax sense used here?",
        "a": "Individual Retirement Arrangement."
      },
      {
        "id": "v6-002",
        "q": "What two forms can an Individual Retirement Arrangement take?",
        "a": "An individual retirement account or an individual retirement annuity."
      },
      {
        "id": "v6-003",
        "q": "What is the basic difference between an IRA account and an IRA annuity?",
        "a": "An account holds invested assets, while an annuity pays a series of usually equal payments over time."
      },
      {
        "id": "v6-004",
        "q": "What are the two main types of IRA?",
        "a": "Traditional IRA and Roth IRA."
      },
      {
        "id": "v6-005",
        "q": "What is the basic tax benefit of a traditional IRA?",
        "a": "Potentially deductible contributions now, tax-deferred growth, and taxable distributions later."
      },
      {
        "id": "v6-006",
        "q": "What is the basic tax treatment of Roth IRA contributions?",
        "a": "They are not deductible."
      },
      {
        "id": "v6-007",
        "q": "What is the basic tax treatment of qualified Roth IRA growth and retirement distributions?",
        "a": "Tax-free."
      },
      {
        "id": "v6-008",
        "q": "When does a traditional IRA generally provide its main tax benefit?",
        "a": "Now, through a current deduction and tax-deferred growth."
      },
      {
        "id": "v6-009",
        "q": "When does a Roth IRA generally provide its main tax benefit?",
        "a": "Later, through tax-free growth and qualified distributions."
      },
      {
        "id": "v6-010",
        "q": "What does SEP stand for?",
        "a": "Simplified Employee Pension."
      },
      {
        "id": "v6-011",
        "q": "What does SIMPLE stand for?",
        "a": "Savings Incentive Match Plan for Employees."
      },
      {
        "id": "v6-012",
        "q": "Where is a deductible traditional IRA contribution taken on the return?",
        "a": "As an adjustment to income."
      },
      {
        "id": "v6-013",
        "q": "What does tax-deferred growth mean for a traditional IRA?",
        "a": "Earnings are not taxed each year; tax is generally deferred until distribution."
      },
      {
        "id": "v6-014",
        "q": "Why can tax-deferred growth compound faster than a taxable account?",
        "a": "Because taxes are not taken out each year from the account’s earnings."
      },
      {
        "id": "v6-015",
        "q": "Is traditional IRA growth tax-free?",
        "a": "No; it is tax-deferred."
      },
      {
        "id": "v6-016",
        "q": "What type of compensation is generally required to contribute to an IRA?",
        "a": "Wages or self-employment income."
      },
      {
        "id": "v6-017",
        "q": "Is there an age limit for making IRA contributions under the current rule discussed?",
        "a": "No."
      },
      {
        "id": "v6-018",
        "q": "What is the 2025 IRA contribution limit for someone under age 50?",
        "a": "The lesser of $7,000 or total taxable compensation."
      },
      {
        "id": "v6-019",
        "q": "What is the 2025 IRA catch-up contribution for someone age 50 or older?",
        "a": "$1,000."
      },
      {
        "id": "v6-020",
        "q": "What is the 2025 maximum IRA contribution for someone age 50 or older?",
        "a": "$8,000."
      },
      {
        "id": "v6-021",
        "q": "For an MFJ couple both under age 50, what is the combined maximum IRA contribution?",
        "a": "$14,000."
      },
      {
        "id": "v6-022",
        "q": "If one spouse is age 50 or older and the other is under 50, what combined maximum is discussed?",
        "a": "$15,000."
      },
      {
        "id": "v6-023",
        "q": "If both spouses are age 50 or older, what is the combined maximum?",
        "a": "$16,000."
      },
      {
        "id": "v6-024",
        "q": "For MFJ, must each spouse separately have compensation to contribute to an IRA?",
        "a": "No; one spouse’s compensation can support contributions for both spouses."
      },
      {
        "id": "v6-025",
        "q": "If one MFJ spouse has at least $14,000 of compensation and both are under 50, can both spouses contribute $7,000?",
        "a": "Yes."
      },
      {
        "id": "v6-026",
        "q": "Do the IRA contribution limits apply separately to each traditional and Roth IRA account?",
        "a": "No; the annual limit applies across all IRAs combined for that person."
      },
      {
        "id": "v6-027",
        "q": "Can a taxpayer have multiple traditional and Roth IRA accounts?",
        "a": "Yes, but the combined annual contribution limit still applies."
      },
      {
        "id": "v6-028",
        "q": "What is the deadline to make a 2025 IRA contribution?",
        "a": "The original due date of the 2025 return, April 15, 2026."
      },
      {
        "id": "v6-029",
        "q": "Can a 2025 IRA deduction be claimed on a return filed before the contribution is actually made?",
        "a": "Yes, as long as the contribution is made by the original due date."
      },
      {
        "id": "v6-030",
        "q": "Must a taxpayer contribute to an IRA every year once an account is opened?",
        "a": "No."
      },
      {
        "id": "v6-031",
        "q": "What factors determine whether a traditional IRA contribution is deductible?",
        "a": "Workplace retirement-plan coverage, filing status, and modified AGI."
      },
      {
        "id": "v6-032",
        "q": "For IRA purposes, what does being “covered by a retirement plan at work” mean?",
        "a": "Being eligible to participate, even if the taxpayer does not actually participate."
      },
      {
        "id": "v6-033",
        "q": "If a worker is eligible for a 401(k) but contributes nothing, are they still treated as covered by a workplace retirement plan?",
        "a": "Yes."
      },
      {
        "id": "v6-034",
        "q": "For IRA MAGI, is the IRA deduction itself subtracted when computing the MAGI used to test deductibility?",
        "a": "No; MAGI is computed without regard to the IRA deduction."
      },
      {
        "id": "v6-035",
        "q": "What student-loan item is added back in computing IRA MAGI?",
        "a": "The student-loan interest deduction."
      },
      {
        "id": "v6-036",
        "q": "What foreign-income items are added back in computing IRA MAGI?",
        "a": "Foreign earned income exclusion and foreign housing exclusion or deduction."
      },
      {
        "id": "v6-037",
        "q": "What savings-bond item is added back in computing IRA MAGI?",
        "a": "Excluded U.S. savings-bond interest used for education."
      },
      {
        "id": "v6-038",
        "q": "What adoption item is added back in computing IRA MAGI?",
        "a": "Excluded employer-provided adoption benefits."
      },
      {
        "id": "v6-039",
        "q": "For a Single or HOH taxpayer covered by a workplace plan, at what 2025 MAGI is the traditional IRA deduction fully available?",
        "a": "$79,000 or less."
      },
      {
        "id": "v6-040",
        "q": "For a Single or HOH taxpayer covered by a workplace plan, at what MAGI is the deduction fully phased out?",
        "a": "$89,000 or more."
      },
      {
        "id": "v6-041",
        "q": "What happens between $79,000 and $89,000 MAGI for Single/HOH taxpayers covered by a workplace plan?",
        "a": "The deduction is partial."
      },
      {
        "id": "v6-042",
        "q": "For MFJ or QSS taxpayers covered by a workplace plan, at what MAGI is the full deduction available?",
        "a": "$126,000 or less."
      },
      {
        "id": "v6-043",
        "q": "For MFJ or QSS taxpayers covered by a workplace plan, at what MAGI is the deduction fully phased out?",
        "a": "$146,000 or more."
      },
      {
        "id": "v6-044",
        "q": "For an MFS taxpayer covered by a workplace plan, what is the relevant phaseout range?",
        "a": "Less than $10,000 can allow a partial deduction; $10,000 or more allows no deduction."
      },
      {
        "id": "v6-045",
        "q": "If a taxpayer is not covered by a workplace plan and is Single, HOH, or QSS, does MAGI limit the traditional IRA deduction?",
        "a": "No under the rule discussed; the full deduction can be available."
      },
      {
        "id": "v6-046",
        "q": "If neither spouse is covered by a workplace plan, does MAGI limit the traditional IRA deduction under the rule discussed?",
        "a": "No."
      },
      {
        "id": "v6-047",
        "q": "If the taxpayer is not covered by a plan but an MFJ spouse is covered, at what MAGI is the full deduction available?",
        "a": "$236,000 or less."
      },
      {
        "id": "v6-048",
        "q": "If the taxpayer is not covered but an MFJ spouse is covered, at what MAGI is the deduction fully phased out?",
        "a": "$246,000 or more."
      },
      {
        "id": "v6-049",
        "q": "If the taxpayer is MFS, not covered, but the spouse is covered, what MAGI rule applies?",
        "a": "Below $10,000 can allow a partial deduction; $10,000 or more allows none."
      },
      {
        "id": "v6-050",
        "q": "Can a taxpayer still make a traditional IRA contribution even if the contribution is not deductible?",
        "a": "Yes, up to the annual contribution limit."
      },
      {
        "id": "v6-051",
        "q": "What tax concept is created by nondeductible traditional IRA contributions?",
        "a": "Basis in the IRA."
      },
      {
        "id": "v6-052",
        "q": "How are nondeductible traditional IRA contributions treated when later distributed?",
        "a": "The contribution basis is not taxed again."
      },
      {
        "id": "v6-053",
        "q": "How are earnings on nondeductible traditional IRA contributions treated when distributed?",
        "a": "They are taxable."
      },
      {
        "id": "v6-054",
        "q": "How are deductible traditional IRA contributions treated when distributed?",
        "a": "They are taxable."
      },
      {
        "id": "v6-055",
        "q": "What form tracks nondeductible traditional IRA contributions?",
        "a": "Form 8606."
      },
      {
        "id": "v6-056",
        "q": "Why can a Roth IRA be more attractive than a nondeductible traditional IRA when the taxpayer qualifies?",
        "a": "Both use after-tax contributions, but qualified Roth earnings can also be tax-free."
      },
      {
        "id": "v6-057",
        "q": "What is a trustee-to-trustee IRA transfer?",
        "a": "A direct transfer from one IRA trustee to another in which the taxpayer never receives the funds."
      },
      {
        "id": "v6-058",
        "q": "Is a trustee-to-trustee IRA transfer taxable or subject to the 10% early-distribution penalty?",
        "a": "No. It is tax- and penalty-free."
      },
      {
        "id": "v6-059",
        "q": "What is an indirect IRA rollover?",
        "a": "A distribution is paid to the taxpayer, who then redeposits it into another eligible retirement account."
      },
      {
        "id": "v6-060",
        "q": "How long does a taxpayer generally have to complete an indirect rollover?",
        "a": "60 days."
      },
      {
        "id": "v6-061",
        "q": "If an employer retirement plan distributes funds directly to the taxpayer for rollover, what federal withholding generally applies?",
        "a": "20% mandatory withholding."
      },
      {
        "id": "v6-062",
        "q": "If a 401(k) distributes $100,000 to the taxpayer for an indirect rollover, how much will the taxpayer generally receive after 20% withholding?",
        "a": "$80,000."
      },
      {
        "id": "v6-063",
        "q": "In the $100,000 401(k) rollover example, how much must the taxpayer deposit into the new plan within 60 days to make the entire distribution tax-free?",
        "a": "The full $100,000."
      },
      {
        "id": "v6-064",
        "q": "In the $100,000 rollover example, what happens to the $20,000 withheld if the taxpayer replaces it and rolls over the full $100,000?",
        "a": "The $20,000 is claimed as tax withholding on the tax return and can be refunded or applied against tax."
      },
      {
        "id": "v6-065",
        "q": "What rollover method avoids the mandatory 20% withholding on an employer-plan distribution?",
        "a": "A direct trustee-to-trustee transfer."
      },
      {
        "id": "v6-066",
        "q": "Does the mandatory 20% withholding generally apply when an IRA makes an indirect rollover distribution directly to the taxpayer?",
        "a": "No."
      },
      {
        "id": "v6-067",
        "q": "How often can a taxpayer generally make an indirect IRA-to-IRA rollover?",
        "a": "Once in a 12-month period."
      },
      {
        "id": "v6-068",
        "q": "Does the once-per-year IRA rollover limit apply to direct trustee-to-trustee transfers?",
        "a": "No."
      },
      {
        "id": "v6-069",
        "q": "How is an IRA transfer incident to divorce generally treated for tax purposes?",
        "a": "It is tax-free if transferred under the divorce rules."
      },
      {
        "id": "v6-070",
        "q": "How are taxable distributions from a traditional IRA taxed?",
        "a": "As ordinary income."
      },
      {
        "id": "v6-071",
        "q": "Do traditional IRA distributions receive long-term capital-gain rates because the IRA held stocks or other capital assets?",
        "a": "No. Taxable traditional IRA distributions are ordinary income."
      },
      {
        "id": "v6-072",
        "q": "What additional tax generally applies to the taxable portion of a traditional IRA distribution taken before age 59½?",
        "a": "A 10% additional tax, unless an exception applies."
      },
      {
        "id": "v6-073",
        "q": "What is a qualified charitable distribution (QCD)?",
        "a": "A direct transfer from an IRA trustee to an eligible charity."
      },
      {
        "id": "v6-074",
        "q": "What age must an IRA owner generally have reached to make a QCD under the rule taught in the transcript?",
        "a": "Age 70½."
      },
      {
        "id": "v6-075",
        "q": "What is the 2025 annual qualified charitable distribution (QCD) limit per person?",
        "a": "$108,000 per person."
      },
      {
        "id": "v6-076",
        "q": "Is a qualified charitable distribution included in taxable income?",
        "a": "No, if the requirements are met."
      },
      {
        "id": "v6-077",
        "q": "Is the 10% early-distribution penalty imposed on a qualifying QCD?",
        "a": "No."
      },
      {
        "id": "v6-078",
        "q": "Can a taxpayer also claim a charitable-contribution deduction for the same QCD?",
        "a": "No."
      },
      {
        "id": "v6-079",
        "q": "Why can a QCD be useful even though no charitable deduction is allowed?",
        "a": "The distribution is excluded from income and does not depend on itemizing or charitable percentage limits."
      },
      {
        "id": "v6-080",
        "q": "Can a QCD count toward the taxpayer's required minimum distribution?",
        "a": "Yes."
      },
      {
        "id": "v6-081",
        "q": "What happens if a taxpayer timely withdraws an IRA contribution and related earnings by the due date, including extensions?",
        "a": "The contribution is generally treated as if it had never been made."
      },
      {
        "id": "v6-082",
        "q": "If a current-year IRA contribution is timely returned, is the taxpayer allowed an IRA deduction for that contribution?",
        "a": "No."
      },
      {
        "id": "v6-083",
        "q": "If a timely returned IRA contribution had earnings, how are the earnings treated?",
        "a": "The earnings are taxable."
      },
      {
        "id": "v6-084",
        "q": "What is the maximum qualified disaster recovery distribution amount taught in the transcript?",
        "a": "$22,000 total from all eligible retirement accounts."
      },
      {
        "id": "v6-085",
        "q": "How can a qualified disaster recovery distribution generally be included in income?",
        "a": "Ratably over three years, unless the taxpayer elects to include it all in the current year."
      },
      {
        "id": "v6-086",
        "q": "Does the 10% early-distribution penalty apply to a qualified disaster recovery distribution?",
        "a": "No."
      },
      {
        "id": "v6-087",
        "q": "Can a qualified disaster recovery distribution generally be repaid?",
        "a": "Yes; repayment can permit amended-return treatment under the disaster rules."
      },
      {
        "id": "v6-088",
        "q": "When do traditional IRA required minimum distributions generally begin?",
        "a": "By April 1 of the year after the taxpayer reaches age 73."
      },
      {
        "id": "v6-089",
        "q": "After the first RMD, by what date are later annual RMDs generally due?",
        "a": "December 31 of each year."
      },
      {
        "id": "v6-090",
        "q": "Can an RMD be rolled over to another retirement account?",
        "a": "No."
      },
      {
        "id": "v6-091",
        "q": "Can a QCD satisfy part or all of an IRA owner's RMD?",
        "a": "Yes."
      },
      {
        "id": "v6-092",
        "q": "What excise tax generally applies to a missed RMD under the rule taught in the transcript?",
        "a": "25% of the amount not taken."
      },
      {
        "id": "v6-093",
        "q": "To what rate can the missed-RMD excise tax be reduced if the failure is corrected within two years?",
        "a": "10%."
      },
      {
        "id": "v6-094",
        "q": "Who typically calculates the annual IRA RMD amount?",
        "a": "The IRA administrator or trustee."
      },
      {
        "id": "v6-095",
        "q": "What form generally reports an IRA distribution?",
        "a": "Form 1099-R."
      },
      {
        "id": "v6-096",
        "q": "Is federal income tax generally withheld from retirement distributions unless the taxpayer elects otherwise?",
        "a": "Yes."
      },
      {
        "id": "v6-097",
        "q": "When is Form 8606 relevant to a traditional IRA distribution?",
        "a": "When the taxpayer has basis from nondeductible IRA contributions or other after-tax amounts."
      },
      {
        "id": "v6-098",
        "q": "Why is Form 8606 important when an IRA contains after-tax basis?",
        "a": "It determines the taxable and nontaxable portions so previously taxed basis is not taxed again."
      },
      {
        "id": "v6-099",
        "q": "Are Roth IRA owners subject to lifetime RMDs from their own Roth IRAs?",
        "a": "No."
      },
      {
        "id": "v6-100",
        "q": "What is the 2025 annual contribution limit for Roth IRAs before the age-50 catch-up?",
        "a": "$7,000, subject to compensation and income limits."
      },
      {
        "id": "v6-101",
        "q": "What is the 2025 Roth IRA contribution limit for someone age 50 or older?",
        "a": "$8,000, including the $1,000 catch-up contribution."
      },
      {
        "id": "v6-102",
        "q": "Are the traditional and Roth IRA contribution limits separate?",
        "a": "No. The annual limit is combined across the taxpayer's traditional and Roth IRAs."
      },
      {
        "id": "v6-103",
        "q": "For MFJ or QSS, below what 2025 MAGI can the full Roth IRA contribution generally be made?",
        "a": "Below $236,000."
      },
      {
        "id": "v6-104",
        "q": "For MFJ or QSS, at what 2025 MAGI is the Roth IRA contribution fully phased out?",
        "a": "$246,000 or more."
      },
      {
        "id": "v6-105",
        "q": "For single, HOH, or MFS taxpayers who lived apart from their spouse all year, below what 2025 MAGI can the full Roth contribution generally be made?",
        "a": "Below $150,000."
      },
      {
        "id": "v6-106",
        "q": "For single, HOH, or MFS taxpayers who lived apart from their spouse all year, at what 2025 MAGI is the Roth contribution fully phased out?",
        "a": "$165,000 or more."
      },
      {
        "id": "v6-107",
        "q": "For MFS taxpayers who lived with their spouse at any time during the year, what Roth IRA phaseout range applies?",
        "a": "$0 to $10,000 of MAGI."
      },
      {
        "id": "v6-108",
        "q": "What is the key difference between the traditional-IRA deduction phaseout and the Roth-IRA contribution phaseout?",
        "a": "A traditional IRA contribution may still be allowed but nondeductible, while an income-disqualified Roth contribution cannot be made."
      },
      {
        "id": "v6-109",
        "q": "Can Roth IRA contribution principal generally be withdrawn tax- and penalty-free?",
        "a": "Yes, because those contributions were made with after-tax money."
      },
      {
        "id": "v6-110",
        "q": "What two broad requirements make Roth IRA earnings a qualified distribution?",
        "a": "The Roth IRA must satisfy the five-year rule and the distribution must meet a qualifying reason."
      },
      {
        "id": "v6-111",
        "q": "What is the Roth IRA five-year rule for qualified earnings distributions?",
        "a": "The Roth IRA must have been established for at least five years."
      },
      {
        "id": "v6-112",
        "q": "What age-based event can make Roth IRA earnings qualified after the five-year rule is met?",
        "a": "The taxpayer is age 59½ or older."
      },
      {
        "id": "v6-113",
        "q": "What disability event can make Roth IRA earnings a qualified distribution after the five-year rule?",
        "a": "The owner is disabled."
      },
      {
        "id": "v6-114",
        "q": "Can a Roth IRA distribution to a beneficiary after the owner's death qualify for tax-free earnings treatment?",
        "a": "Yes, subject to the applicable rules."
      },
      {
        "id": "v6-115",
        "q": "What first-home amount can qualify as a Roth IRA qualified distribution after satisfying the five-year rule?",
        "a": "Up to $10,000."
      },
      {
        "id": "v6-116",
        "q": "If a Roth IRA earnings distribution is not qualified, what taxes can apply?",
        "a": "The earnings are taxable and may also be subject to the 10% early-distribution penalty."
      },
      {
        "id": "v6-117",
        "q": "What is an IRA recharacterization?",
        "a": "Treating a contribution originally made to one type of IRA as though it had been made to another type."
      },
      {
        "id": "v6-118",
        "q": "How is an IRA recharacterization generally accomplished?",
        "a": "By a trustee-to-trustee transfer of the contribution plus related earnings."
      },
      {
        "id": "v6-119",
        "q": "By when must an IRA contribution generally be recharacterized?",
        "a": "By the tax-return due date, including extensions."
      },
      {
        "id": "v6-120",
        "q": "What form is used to report certain IRA recharacterizations and nondeductible IRA activity?",
        "a": "Form 8606."
      },
      {
        "id": "v6-121",
        "q": "In the Dean example, how much was originally contributed before being recharacterized?",
        "a": "$5,000."
      },
      {
        "id": "v6-122",
        "q": "What is a Roth conversion?",
        "a": "Moving money from a traditional IRA or eligible retirement plan into a Roth IRA."
      },
      {
        "id": "v6-123",
        "q": "Is the taxable amount of a traditional-to-Roth conversion included in income?",
        "a": "Yes."
      },
      {
        "id": "v6-124",
        "q": "Does the 10% early-distribution penalty generally apply merely because taxable traditional IRA money is converted to a Roth IRA?",
        "a": "No."
      },
      {
        "id": "v6-125",
        "q": "What three methods can be used for a traditional IRA-to-Roth conversion?",
        "a": "A 60-day rollover, a trustee-to-trustee transfer, or a transfer within the same trustee."
      },
      {
        "id": "v6-126",
        "q": "Does the once-per-year indirect IRA rollover rule prevent Roth conversions under the rule taught in the transcript?",
        "a": "No."
      },
      {
        "id": "v6-127",
        "q": "How long must a SIMPLE IRA generally exist before it can be converted to a Roth IRA under the rule taught?",
        "a": "Two years."
      },
      {
        "id": "v6-128",
        "q": "Can money from a qualified employer plan be converted directly to a Roth IRA?",
        "a": "Yes; the taxable amount is generally included in income without the 10% penalty."
      },
      {
        "id": "v6-129",
        "q": "What withholding issue arises if an employer-plan distribution intended for Roth conversion is paid to the taxpayer instead of transferred directly?",
        "a": "The plan generally withholds 20%, so the taxpayer must replace that amount to roll over the full distribution."
      },
      {
        "id": "v6-130",
        "q": "Can one Roth IRA be rolled over or transferred to another Roth IRA?",
        "a": "Yes."
      },
      {
        "id": "v6-131",
        "q": "Can an IRA owner borrow money from their IRA?",
        "a": "No. Borrowing from an IRA is a prohibited transaction."
      },
      {
        "id": "v6-132",
        "q": "Can an IRA owner sell personal property to their own IRA?",
        "a": "No. That is a prohibited transaction."
      },
      {
        "id": "v6-133",
        "q": "Can an IRA be pledged as collateral for a personal loan?",
        "a": "No."
      },
      {
        "id": "v6-134",
        "q": "Can an IRA be used to buy property for the owner's personal use?",
        "a": "No."
      },
      {
        "id": "v6-135",
        "q": "What happens if the IRA owner or beneficiary engages in a prohibited transaction with the IRA?",
        "a": "The account ceases to be an IRA as of the first day of that year."
      },
      {
        "id": "v6-136",
        "q": "If an IRA ceases to qualify because of an owner's prohibited transaction, what amount is treated as distributed?",
        "a": "The fair market value of all IRA assets as of the first day of the year."
      },
      {
        "id": "v6-137",
        "q": "What initial excise tax can apply to another disqualified person involved in a prohibited transaction?",
        "a": "15%."
      },
      {
        "id": "v6-138",
        "q": "What additional excise tax can apply if a prohibited transaction is not corrected?",
        "a": "100%."
      },
      {
        "id": "v6-139",
        "q": "How is an IRA investment in collectibles generally treated?",
        "a": "As a distribution of the amount invested in the collectible."
      },
      {
        "id": "v6-140",
        "q": "What annual excise tax applies to an excess IRA contribution while it remains uncorrected?",
        "a": "6% each year."
      },
      {
        "id": "v6-141",
        "q": "How can an excess IRA contribution generally avoid the 6% tax for the contribution year?",
        "a": "Remove the excess by the tax-return due date under the applicable correction rules."
      },
      {
        "id": "v6-142",
        "q": "Can an excess Roth IRA contribution be designated as a contribution for the following year under the rule taught?",
        "a": "Yes."
      },
      {
        "id": "v6-143",
        "q": "Can an excess traditional IRA contribution simply be designated as the following year's contribution under the rule taught?",
        "a": "No."
      },
      {
        "id": "v6-144",
        "q": "What medical-expense exception can avoid the 10% early IRA-distribution penalty?",
        "a": "Distributions for unreimbursed medical expenses above 7.5% of AGI."
      },
      {
        "id": "v6-145",
        "q": "What unemployment-related health-insurance exception can avoid the 10% IRA penalty?",
        "a": "Certain distributions used to pay health-insurance premiums after unemployment."
      },
      {
        "id": "v6-146",
        "q": "Does total and permanent disability provide an exception to the 10% early-distribution penalty?",
        "a": "Yes."
      },
      {
        "id": "v6-147",
        "q": "Does terminal illness provide an exception to the 10% early-distribution penalty?",
        "a": "Yes."
      },
      {
        "id": "v6-148",
        "q": "Does a distribution after the IRA owner's death to a beneficiary or estate incur the owner's 10% early-distribution penalty?",
        "a": "No."
      },
      {
        "id": "v6-149",
        "q": "What substantially-equal-payment exception can avoid the 10% early-distribution penalty?",
        "a": "A qualifying series of substantially equal periodic payments."
      },
      {
        "id": "v6-150",
        "q": "Can qualified higher-education expenses qualify for an exception to the 10% IRA early-distribution penalty?",
        "a": "Yes."
      },
      {
        "id": "v6-151",
        "q": "What first-time-homebuyer amount can qualify for an exception to the 10% IRA penalty?",
        "a": "Up to $10,000."
      },
      {
        "id": "v6-152",
        "q": "Can an IRS levy on an IRA qualify for an exception to the 10% early-distribution penalty?",
        "a": "Yes, when the distribution is made directly under the levy."
      },
      {
        "id": "v6-153",
        "q": "Can qualified reservist distributions qualify for an exception to the 10% early-distribution penalty?",
        "a": "Yes."
      },
      {
        "id": "v6-154",
        "q": "What amount of a qualified birth or adoption distribution can qualify for an exception to the 10% IRA penalty under the rule taught?",
        "a": "Up to $5,000."
      },
      {
        "id": "v6-155",
        "q": "Can certain qualified disaster or emergency distributions avoid the 10% early-distribution penalty?",
        "a": "Yes."
      },
      {
        "id": "v6-156",
        "q": "Can a one-time IRA-to-HSA funding distribution receive special penalty-free treatment?",
        "a": "Yes, if the requirements are met."
      },
      {
        "id": "v6-157",
        "q": "What domestic-abuse distribution amount can qualify for special IRA treatment under the transcript?",
        "a": "Up to $10,000 per year."
      },
      {
        "id": "v6-158",
        "q": "By when must a domestic-abuse distribution generally be taken to qualify under the rule taught?",
        "a": "Within one year of becoming a victim of domestic abuse."
      },
      {
        "id": "v6-159",
        "q": "How long does a taxpayer generally have to repay a qualifying domestic-abuse distribution under the rule taught?",
        "a": "Three years."
      },
      {
        "id": "v6-160",
        "q": "What emergency-personal-expense distribution amount is discussed in the transcript?",
        "a": "Up to $1,000."
      },
      {
        "id": "v6-161",
        "q": "How often can the $1,000 emergency-personal-expense distribution generally be used under the rule taught?",
        "a": "Once per year."
      },
      {
        "id": "v6-162",
        "q": "How long can the taxpayer have to repay a qualifying emergency-personal-expense distribution?",
        "a": "Three years."
      },
      {
        "id": "v6-163",
        "q": "What is the first IRA option available to a surviving spouse who inherits an IRA?",
        "a": "Treat the inherited IRA as the spouse's own IRA."
      },
      {
        "id": "v6-164",
        "q": "What is another option for a surviving spouse who inherits an IRA?",
        "a": "Roll the inherited IRA into the spouse's existing IRA."
      },
      {
        "id": "v6-165",
        "q": "Can a surviving spouse instead use the beneficiary options available to other eligible beneficiaries?",
        "a": "Yes."
      },
      {
        "id": "v6-166",
        "q": "If a nonspouse beneficiary takes an inherited traditional IRA as cash, how is it generally taxed?",
        "a": "As ordinary income."
      },
      {
        "id": "v6-167",
        "q": "If a nonspouse beneficiary takes an inherited Roth IRA as cash, is the distribution generally taxable under the rule taught?",
        "a": "Generally no, assuming the Roth distribution rules are satisfied."
      },
      {
        "id": "v6-168",
        "q": "Does the 10% early-distribution penalty generally apply to distributions from an inherited IRA to a beneficiary?",
        "a": "No."
      },
      {
        "id": "v6-169",
        "q": "What is an inherited IRA?",
        "a": "An IRA maintained in the deceased owner's name for the benefit of the beneficiary."
      },
      {
        "id": "v6-170",
        "q": "Under the general 10-year inherited-IRA rule, by when must the account generally be emptied?",
        "a": "By the end of the 10th year after the owner's death."
      },
      {
        "id": "v6-171",
        "q": "If the deceased IRA owner had already reached the RMD age, what additional inherited-IRA requirement is discussed?",
        "a": "Annual distributions generally must continue during the 10-year period."
      },
      {
        "id": "v6-172",
        "q": "Are inherited Roth IRAs completely exempt from beneficiary distribution rules?",
        "a": "No. Inherited Roth IRAs are also subject to inherited-account distribution requirements."
      },
      {
        "id": "v6-173",
        "q": "What option can a spouse or other eligible beneficiary use based on life expectancy?",
        "a": "Keep the inherited IRA and take distributions based on the applicable beneficiary rules, potentially delaying until the deceased owner would have reached the RMD age."
      },
      {
        "id": "v6-174",
        "q": "Can an eligible beneficiary choose the 10-year distribution method?",
        "a": "Yes."
      },
      {
        "id": "v6-175",
        "q": "Can an IRA beneficiary choose a lump-sum distribution?",
        "a": "Yes."
      },
      {
        "id": "v6-176",
        "q": "If the deceased owner was required to take an RMD in the year of death but had not taken it, who must take it?",
        "a": "The beneficiary."
      },
      {
        "id": "v6-177",
        "q": "What form generally reports distributions from employer retirement plans such as 401(k)s and 403(b)s?",
        "a": "Form 1099-R."
      },
      {
        "id": "v6-178",
        "q": "If all contributions to a traditional 401(k) or 403(b) were pre-tax, how is a distribution generally taxed?",
        "a": "The entire distribution is generally taxable as ordinary income."
      },
      {
        "id": "v6-179",
        "q": "How are qualified distributions from a Roth employer retirement account generally treated?",
        "a": "Tax-free."
      },
      {
        "id": "v6-180",
        "q": "If an employer retirement distribution includes both pre-tax and after-tax amounts, what determines the taxable portion?",
        "a": "The plan's basis allocation, often reflected on Form 1099-R; a simplified method may be used in applicable cases."
      },
      {
        "id": "v6-181",
        "q": "What age generally separates ordinary employer-plan distributions from early distributions for the 10% penalty rules discussed?",
        "a": "Age 59½."
      },
      {
        "id": "v6-182",
        "q": "Can eligible employer-plan distributions generally be rolled over?",
        "a": "Yes."
      },
      {
        "id": "v6-183",
        "q": "Do traditional employer plans generally have RMD rules beginning at age 73 under the material taught?",
        "a": "Yes."
      },
      {
        "id": "v6-184",
        "q": "Are Roth employer-plan accounts subject to lifetime RMDs for the owner under the current rule taught?",
        "a": "No."
      },
      {
        "id": "v6-185",
        "q": "Can a participant borrow from an employer retirement plan if the plan permits loans?",
        "a": "Yes."
      },
      {
        "id": "v6-186",
        "q": "If a permitted employer-plan loan is repaid on time, is it treated as a taxable distribution?",
        "a": "No."
      },
      {
        "id": "v6-187",
        "q": "What form reports Social Security benefits?",
        "a": "Form SSA-1099."
      },
      {
        "id": "v6-188",
        "q": "What is the maximum percentage of Social Security benefits that can be included in taxable income?",
        "a": "85%."
      },
      {
        "id": "v6-189",
        "q": "What income measure is used to determine whether Social Security benefits are taxable?",
        "a": "One-half of Social Security benefits plus the taxpayer's other income, including tax-exempt interest."
      },
      {
        "id": "v6-190",
        "q": "What Social Security base amount applies to Married Filing Jointly under the transcript?",
        "a": "$32,000."
      },
      {
        "id": "v6-191",
        "q": "What Social Security base amount applies to MFS taxpayers who lived with their spouse during the year?",
        "a": "$0."
      },
      {
        "id": "v6-192",
        "q": "What Social Security base amount applies to most other filing statuses under the transcript?",
        "a": "$25,000."
      },
      {
        "id": "v6-193",
        "q": "If the Social Security income measure is below the applicable base amount, how much Social Security is taxable?",
        "a": "None."
      },
      {
        "id": "v6-194",
        "q": "Can more than 85% of Social Security benefits ever be taxable under the rule taught?",
        "a": "No."
      },
      {
        "id": "v6-195",
        "q": "In the Flo and Joseph example, how much total Social Security did they receive?",
        "a": "$32,000: $18,000 for Flo and $14,000 for Joseph."
      },
      {
        "id": "v6-196",
        "q": "In the Flo and Joseph example, how much of their $32,000 Social Security is included in the preliminary income measure?",
        "a": "$16,000, one-half of the benefits."
      },
      {
        "id": "v6-197",
        "q": "What other income did Flo and Joseph have in the example?",
        "a": "A $12,000 pension and $3,000 of tax-exempt interest."
      },
      {
        "id": "v6-198",
        "q": "What was Flo and Joseph's income measure for Social Security taxation?",
        "a": "$31,000."
      },
      {
        "id": "v6-199",
        "q": "Why was none of Flo and Joseph's Social Security taxable?",
        "a": "Their $31,000 income measure was below the $32,000 MFJ base amount."
      }
    ]
  },
  {
    "id": "video-7",
    "video": 7,
    "title": "Specialized Returns & Topics",
    "cards": [
      {
        "id": "v7-001",
        "q": "What form is used to amend an individual Form 1040 return?",
        "a": "Form 1040-X."
      },
      {
        "id": "v7-002",
        "q": "What does an “X” at the end of a tax form number generally signify in this material?",
        "a": "An amended return."
      },
      {
        "id": "v7-003",
        "q": "Must the original return be filed before Form 1040-X can be filed?",
        "a": "Yes."
      },
      {
        "id": "v7-004",
        "q": "Is there a limit on the number of Forms 1040-X that can be filed for a tax year, assuming each is timely?",
        "a": "No."
      },
      {
        "id": "v7-005",
        "q": "What can a taxpayer file instead of an amended return if an error is found after an early-filed return but before the original due date?",
        "a": "A superseding Form 1040."
      },
      {
        "id": "v7-006",
        "q": "After the original filing due date has passed, what form is generally used to correct an individual return?",
        "a": "Form 1040-X."
      },
      {
        "id": "v7-007",
        "q": "On Form 1040-X, what does column A show?",
        "a": "The original amount from the previously filed return."
      },
      {
        "id": "v7-008",
        "q": "On Form 1040-X, what does column C show?",
        "a": "The corrected amount."
      },
      {
        "id": "v7-009",
        "q": "On Form 1040-X, what does column B show?",
        "a": "The change, or difference between the original and corrected amounts."
      },
      {
        "id": "v7-010",
        "q": "Does Form 1040-X require an explanation of the changes?",
        "a": "Yes, an explanation is provided on page 2."
      },
      {
        "id": "v7-011",
        "q": "What should be attached to Form 1040-X when a schedule or form changes?",
        "a": "The corrected schedule or form."
      },
      {
        "id": "v7-012",
        "q": "What is the general deadline to claim an amended-return refund?",
        "a": "The later of 3 years from filing the original return or 2 years from paying the tax."
      },
      {
        "id": "v7-013",
        "q": "If an original return is filed before its original due date, what filing date is generally used for the 3-year amendment period?",
        "a": "The original due date."
      },
      {
        "id": "v7-014",
        "q": "If a return is filed after April 15 under an extension, what filing date is generally used for the 3-year amendment period?",
        "a": "The actual filing date."
      },
      {
        "id": "v7-015",
        "q": "What special amendment period applies when the amendment is due to a bad debt or worthless security?",
        "a": "7 years after the due date of the return for the year it became worthless."
      },
      {
        "id": "v7-016",
        "q": "What special amendment period applies for a foreign tax credit?",
        "a": "10 years from the original due date of the return."
      },
      {
        "id": "v7-017",
        "q": "How long does the IRS generally have to audit a return?",
        "a": "3 years from the date due or filed, whichever is later."
      },
      {
        "id": "v7-018",
        "q": "If more than 25% of income is omitted, how long does the IRS generally have to audit the return?",
        "a": "6 years."
      },
      {
        "id": "v7-019",
        "q": "What is the audit statute of limitations if the taxpayer commits fraud?",
        "a": "There is no statute of limitations."
      },
      {
        "id": "v7-020",
        "q": "What is the audit statute of limitations if the taxpayer never files a return?",
        "a": "There is no statute of limitations; the period does not start until a return is filed."
      },
      {
        "id": "v7-021",
        "q": "Does filing an amended return generally restart the IRS audit statute for the original return?",
        "a": "No."
      },
      {
        "id": "v7-022",
        "q": "What special audit-period rule applies if an amended return is filed less than 60 days before the normal statute expires?",
        "a": "The IRS has 60 days from the amended return's filing date."
      },
      {
        "id": "v7-023",
        "q": "What form can be used instead of Form 1040-X for certain tentative refund claims?",
        "a": "Form 1045, Application for Tentative Refund."
      },
      {
        "id": "v7-024",
        "q": "Name a carryback that can qualify for Form 1045 treatment.",
        "a": "A net operating loss carryback."
      },
      {
        "id": "v7-025",
        "q": "Can a general business credit carryback qualify for Form 1045 treatment?",
        "a": "Yes."
      },
      {
        "id": "v7-026",
        "q": "Can a Section 1256 contract loss carryback qualify for Form 1045 treatment?",
        "a": "Yes."
      },
      {
        "id": "v7-027",
        "q": "Can a claim-of-right adjustment overpayment qualify for Form 1045 treatment?",
        "a": "Yes."
      },
      {
        "id": "v7-028",
        "q": "Must U.S. citizens and resident aliens report foreign income?",
        "a": "Yes. They generally report worldwide income, earned and unearned."
      },
      {
        "id": "v7-029",
        "q": "What form is used for the foreign earned income exclusion?",
        "a": "Form 2555."
      },
      {
        "id": "v7-030",
        "q": "What is the 2025 foreign earned income exclusion amount taught in the transcript?",
        "a": "Up to $130,000 per person."
      },
      {
        "id": "v7-031",
        "q": "If all of a taxpayer's earned income is excluded under Form 2555, must the taxpayer still file Form 1040?",
        "a": "Yes."
      },
      {
        "id": "v7-032",
        "q": "What 2025 foreign housing exclusion/deduction amount is emphasized in the transcript?",
        "a": "Up to $39,000, subject to location-specific limits."
      },
      {
        "id": "v7-033",
        "q": "Do the foreign earned income and housing exclusions discussed apply to U.S. government employees and members of the military?",
        "a": "No."
      },
      {
        "id": "v7-034",
        "q": "What two broad requirements must be met for the foreign earned income/housing exclusions?",
        "a": "The taxpayer's tax home must be in a foreign country and the taxpayer must meet either the bona fide residence test or physical presence test."
      },
      {
        "id": "v7-035",
        "q": "What kind of foreign work assignment generally establishes a foreign tax home?",
        "a": "A permanent or indefinite assignment, rather than a temporary assignment."
      },
      {
        "id": "v7-036",
        "q": "Does a fixed 12-month temporary foreign assignment generally move the taxpayer's tax home under the rule taught?",
        "a": "No."
      },
      {
        "id": "v7-037",
        "q": "What period must a bona fide resident generally satisfy for the bona fide residence test?",
        "a": "An uninterrupted period that includes an entire calendar year."
      },
      {
        "id": "v7-038",
        "q": "What extra requirement applies to a resident alien using the bona fide residence test?",
        "a": "The country of which the person is a citizen must have a tax treaty with the United States."
      },
      {
        "id": "v7-039",
        "q": "Does merely living in a foreign country for a calendar year automatically establish bona fide residence?",
        "a": "No; facts and circumstances determine bona fide residence."
      },
      {
        "id": "v7-040",
        "q": "What is the physical presence test?",
        "a": "Physical presence in one or more foreign countries for at least 330 full days during a 12-month consecutive period."
      },
      {
        "id": "v7-041",
        "q": "Can the 12-month physical-presence period span two tax years?",
        "a": "Yes."
      },
      {
        "id": "v7-042",
        "q": "If the physical-presence period spans two tax years, how is the exclusion handled?",
        "a": "It is prorated between the years."
      },
      {
        "id": "v7-043",
        "q": "For an employee, what foreign housing benefit may be excluded?",
        "a": "A qualifying employer-provided housing allowance, up to the applicable limit."
      },
      {
        "id": "v7-044",
        "q": "For a self-employed person, how are qualifying foreign housing expenses treated?",
        "a": "They may be deducted, up to the applicable limit."
      },
      {
        "id": "v7-045",
        "q": "How does a taxpayer elect the foreign earned income or housing exclusion?",
        "a": "By filing Form 2555 and claiming the exclusion."
      },
      {
        "id": "v7-046",
        "q": "Once made, how long does the Form 2555 exclusion election generally continue?",
        "a": "It continues until revoked."
      },
      {
        "id": "v7-047",
        "q": "After revoking the foreign earned income exclusion election, how long must a taxpayer generally wait before using it again under the rule taught?",
        "a": "5 years."
      },
      {
        "id": "v7-048",
        "q": "What alternative may be considered instead of excluding foreign earned income?",
        "a": "The foreign tax credit."
      },
      {
        "id": "v7-049",
        "q": "Can a taxpayer take the Child Tax Credit if they claim the foreign earned income exclusion on Form 2555 under the material taught?",
        "a": "No."
      },
      {
        "id": "v7-050",
        "q": "Can a taxpayer take the Earned Income Credit if they claim the foreign earned income exclusion on Form 2555?",
        "a": "No."
      },
      {
        "id": "v7-051",
        "q": "Can the foreign tax credit be claimed on foreign tax attributable to income that was excluded under Form 2555?",
        "a": "No."
      },
      {
        "id": "v7-052",
        "q": "What form generally reports the foreign tax credit?",
        "a": "Form 1116."
      },
      {
        "id": "v7-053",
        "q": "Can the foreign tax credit apply to foreign taxes on both earned and unearned income?",
        "a": "Yes."
      },
      {
        "id": "v7-054",
        "q": "If all foreign income is passive investment income, is Form 1116 always required under the rule taught?",
        "a": "No; in some cases the credit can be taken without filing Form 1116."
      },
      {
        "id": "v7-055",
        "q": "Is an unused foreign tax credit refundable?",
        "a": "No."
      },
      {
        "id": "v7-056",
        "q": "How far can an unused foreign tax credit generally be carried back?",
        "a": "1 year."
      },
      {
        "id": "v7-057",
        "q": "How far can an unused foreign tax credit generally be carried forward?",
        "a": "10 years."
      },
      {
        "id": "v7-058",
        "q": "Can foreign income taxes be deducted on Schedule A instead of claimed as a credit?",
        "a": "Yes."
      },
      {
        "id": "v7-059",
        "q": "Why is the foreign tax credit usually more valuable than an itemized deduction?",
        "a": "A credit directly reduces tax dollar-for-dollar, while a deduction reduces taxable income."
      },
      {
        "id": "v7-060",
        "q": "Can a taxpayer both exclude foreign earned income and claim a foreign tax credit on the same excluded income?",
        "a": "No."
      },
      {
        "id": "v7-061",
        "q": "How is foreign retirement income generally treated?",
        "a": "Like comparable U.S. retirement income, subject to possible treaty modifications."
      },
      {
        "id": "v7-062",
        "q": "What three reporting areas are highlighted for foreign financial accounts/assets?",
        "a": "Schedule B Part III, Form 8938, and the FBAR."
      },
      {
        "id": "v7-063",
        "q": "When must a taxpayer answer the foreign-account questions in Schedule B Part III?",
        "a": "Whenever Schedule B is required and the taxpayer has the relevant foreign account or foreign trust activity."
      },
      {
        "id": "v7-064",
        "q": "What is the general Schedule B filing threshold for interest or dividends mentioned in the transcript?",
        "a": "More than $1,500 of interest or dividends."
      },
      {
        "id": "v7-065",
        "q": "What foreign-account fact does Schedule B Part III ask about?",
        "a": "Whether the taxpayer had a financial interest in or signature authority over a foreign financial account."
      },
      {
        "id": "v7-066",
        "q": "If an FBAR is required, what additional information is listed on Schedule B?",
        "a": "The names of the foreign countries where the accounts are located."
      },
      {
        "id": "v7-067",
        "q": "What foreign-trust activity on Schedule B can point to a Form 3520 filing requirement?",
        "a": "Receiving a distribution from, being the grantor of, or transferring to a foreign trust."
      },
      {
        "id": "v7-068",
        "q": "What is Form 8938 used for?",
        "a": "Reporting specified foreign financial assets when applicable thresholds are met."
      },
      {
        "id": "v7-069",
        "q": "For a taxpayer living in the U.S. who is not MFJ, what Form 8938 thresholds are taught?",
        "a": "At least $50,000 at year-end or $75,000 at any time during the year."
      },
      {
        "id": "v7-070",
        "q": "For MFJ taxpayers living in the U.S., what Form 8938 thresholds are taught?",
        "a": "At least $100,000 at year-end or $150,000 at any time during the year."
      },
      {
        "id": "v7-071",
        "q": "For a taxpayer living outside the U.S. who is not MFJ, what Form 8938 thresholds are taught?",
        "a": "At least $200,000 at year-end or $300,000 at any time during the year."
      },
      {
        "id": "v7-072",
        "q": "For MFJ taxpayers living outside the U.S., what Form 8938 thresholds are taught?",
        "a": "At least $400,000 at year-end or $600,000 at any time during the year."
      },
      {
        "id": "v7-073",
        "q": "Does filing Form 8938 eliminate a separate FBAR filing requirement?",
        "a": "No."
      },
      {
        "id": "v7-074",
        "q": "What is the FBAR form number?",
        "a": "FinCEN Form 114."
      },
      {
        "id": "v7-075",
        "q": "Is the FBAR an IRS tax form?",
        "a": "No. It is a FinCEN filing."
      },
      {
        "id": "v7-076",
        "q": "Who can be a U.S. person for FBAR purposes under the material taught?",
        "a": "A citizen, resident, corporation, partnership, LLC, trust, or estate."
      },
      {
        "id": "v7-077",
        "q": "What account relationship can trigger an FBAR?",
        "a": "A financial interest in, signature authority over, or other authority over a foreign financial account."
      },
      {
        "id": "v7-078",
        "q": "What aggregate account-value threshold triggers the FBAR under the transcript?",
        "a": "More than $10,000 at any time during the calendar year."
      },
      {
        "id": "v7-079",
        "q": "When is the FBAR due?",
        "a": "April 15 of the following year."
      },
      {
        "id": "v7-080",
        "q": "What automatic FBAR extension is available?",
        "a": "To October 15, without filing an extension request."
      },
      {
        "id": "v7-081",
        "q": "How must the FBAR be filed?",
        "a": "Electronically through FinCEN's system."
      },
      {
        "id": "v7-082",
        "q": "What 2025 nonwillful FBAR penalty amount is taught in the transcript?",
        "a": "$16,536."
      },
      {
        "id": "v7-083",
        "q": "What willful FBAR penalty is taught?",
        "a": "The greater of $165,353 or 50% of the account balance at the time of the violation."
      },
      {
        "id": "v7-084",
        "q": "What did the Supreme Court rule in Bittner v. United States about nonwillful FBAR penalties?",
        "a": "The nonwillful penalty applies per annual report, not per account."
      },
      {
        "id": "v7-085",
        "q": "What form is associated with certain transactions with foreign trusts?",
        "a": "Form 3520."
      },
      {
        "id": "v7-086",
        "q": "What form is used by certain U.S. officers, directors, or shareholders to report ownership in foreign corporations?",
        "a": "Form 5471."
      },
      {
        "id": "v7-087",
        "q": "Where is ordinary rental real-estate income and expense generally reported?",
        "a": "Schedule E."
      },
      {
        "id": "v7-088",
        "q": "If two owners hold rental property 50/50, how does each generally report the activity?",
        "a": "Each reports 50% of the income and 50% of the expenses."
      },
      {
        "id": "v7-089",
        "q": "How are rental activities generally classified for passive-activity purposes?",
        "a": "Passive."
      },
      {
        "id": "v7-090",
        "q": "What is the general rule for passive rental losses?",
        "a": "They can generally offset passive income, not salary or other nonpassive income."
      },
      {
        "id": "v7-091",
        "q": "What professional-status exception can make rental real estate nonpassive?",
        "a": "Qualifying as a bona fide real estate professional."
      },
      {
        "id": "v7-092",
        "q": "If a property owner provides substantial services such as regular cleaning, linen changes, or housekeeping, where is the activity generally reported?",
        "a": "Schedule C as a business rather than Schedule E rental activity."
      },
      {
        "id": "v7-093",
        "q": "What common short-term rental example is treated as a business when substantial services are provided?",
        "a": "An Airbnb-type activity."
      },
      {
        "id": "v7-094",
        "q": "What special rental-real-estate loss allowance is available to certain active participants?",
        "a": "Up to $25,000."
      },
      {
        "id": "v7-095",
        "q": "What ownership percentage is required for active participation in rental real estate under the rule taught?",
        "a": "At least 10%."
      },
      {
        "id": "v7-096",
        "q": "What kind of decisions demonstrate active participation in rental real estate?",
        "a": "Significant bona fide management decisions such as approving tenants, rental terms, and expenditures."
      },
      {
        "id": "v7-097",
        "q": "What can the $25,000 active-participation rental loss allowance offset?",
        "a": "Nonpassive income."
      },
      {
        "id": "v7-098",
        "q": "How is the $25,000 rental loss allowance phased out?",
        "a": "It is reduced by 50% of MAGI over $100,000, or over $50,000 for MFS."
      },
      {
        "id": "v7-099",
        "q": "What happens to passive rental losses that cannot be deducted in the current year?",
        "a": "They carry forward."
      },
      {
        "id": "v7-100",
        "q": "How are expenses allocated when part of a home is rented and part is used personally?",
        "a": "Common expenses are allocated between personal and rental use using a reasonable method such as square footage or rooms."
      },
      {
        "id": "v7-101",
        "q": "Can expenses solely attributable to the personal portion of a partly rented home be deducted as rental expenses?",
        "a": "No."
      },
      {
        "id": "v7-102",
        "q": "Can expenses solely attributable to the rental portion be deducted as rental expenses?",
        "a": "Yes, generally 100%."
      },
      {
        "id": "v7-103",
        "q": "In the George and Louise duplex example, what portion of common expenses was allocated to the rental unit?",
        "a": "50%."
      },
      {
        "id": "v7-104",
        "q": "In the George and Louise example, how much of the $7,000 mortgage interest was allocated to the rental?",
        "a": "$3,500."
      },
      {
        "id": "v7-105",
        "q": "In the George and Louise duplex example, what total rental expenses were deductible?",
        "a": "$8,850."
      },
      {
        "id": "v7-106",
        "q": "If a basement apartment is 1,000 square feet of a 3,000-square-foot home, what percentage of common expenses is allocated to the rental in the example?",
        "a": "One-third."
      },
      {
        "id": "v7-107",
        "q": "What employment taxes may apply to household employees?",
        "a": "Social Security, Medicare, and federal unemployment tax (FUTA)."
      },
      {
        "id": "v7-108",
        "q": "Must a household employer withhold federal income tax from household-employee wages?",
        "a": "No, but the employer may do so if the employee requests it."
      },
      {
        "id": "v7-109",
        "q": "What determines whether a household worker is an employee?",
        "a": "Whether the homeowner controls not only what work is done but how it is done."
      },
      {
        "id": "v7-110",
        "q": "Does a household worker's full-time versus part-time status determine whether they are an employee?",
        "a": "No."
      },
      {
        "id": "v7-111",
        "q": "Does paying a household worker hourly versus by the job determine employee status?",
        "a": "No."
      },
      {
        "id": "v7-112",
        "q": "What characteristics generally indicate a household worker is self-employed?",
        "a": "The worker controls how the work is done, provides their own tools, and offers services to the public."
      },
      {
        "id": "v7-113",
        "q": "If an agency provides and controls a nanny, whose employee is the nanny generally?",
        "a": "The agency's employee, not the household's."
      },
      {
        "id": "v7-114",
        "q": "What 2025 wage threshold generally triggers Form W-2 for a household employee?",
        "a": "$2,800 or more."
      },
      {
        "id": "v7-115",
        "q": "If federal income tax was withheld from a household employee earning less than $2,800, is a W-2 still required?",
        "a": "Yes."
      },
      {
        "id": "v7-116",
        "q": "When is a household employee's W-2 generally due?",
        "a": "January 31 of the following year."
      },
      {
        "id": "v7-117",
        "q": "What W-2 copies are generally provided to the household employee?",
        "a": "Copies B, C, and 2."
      },
      {
        "id": "v7-118",
        "q": "What form transmits Copy A of W-2 to the government?",
        "a": "Form W-3."
      },
      {
        "id": "v7-119",
        "q": "Does a household employer who files W-2s need an EIN?",
        "a": "Yes."
      },
      {
        "id": "v7-120",
        "q": "What form is used to compute household employment taxes with an individual return?",
        "a": "Schedule H."
      },
      {
        "id": "v7-121",
        "q": "What taxes can Schedule H compute?",
        "a": "Social Security, Medicare, FUTA, and any federal income tax withheld."
      },
      {
        "id": "v7-122",
        "q": "When is Schedule H required based on wages to one household employee?",
        "a": "When $2,800 or more is paid to a single employee, subject to the applicable rules."
      },
      {
        "id": "v7-123",
        "q": "Can withholding federal income tax from a household employee trigger Schedule H even if wages are below $2,800?",
        "a": "Yes."
      },
      {
        "id": "v7-124",
        "q": "What quarterly wage threshold can trigger FUTA for household employment?",
        "a": "$1,000 or more of total cash wages in any calendar quarter."
      },
      {
        "id": "v7-125",
        "q": "Can Schedule H be filed by itself if the taxpayer is not otherwise required to file Form 1040?",
        "a": "Yes."
      },
      {
        "id": "v7-126",
        "q": "Which wages are excluded from the $2,800 Social Security/Medicare household-employment threshold under the chart taught?",
        "a": "Wages paid to a spouse, a child under 21, a parent, or an employee under 18 at any time during 2025."
      },
      {
        "id": "v7-127",
        "q": "What combined Social Security and Medicare rate applies to covered household wages?",
        "a": "15.3%."
      },
      {
        "id": "v7-128",
        "q": "What is the employee share of household Social Security and Medicare taxes?",
        "a": "7.65%."
      },
      {
        "id": "v7-129",
        "q": "What is the employer share of household Social Security and Medicare taxes?",
        "a": "7.65%."
      },
      {
        "id": "v7-130",
        "q": "Can a household employer choose to pay the employee's 7.65% share instead of withholding it?",
        "a": "Yes."
      },
      {
        "id": "v7-131",
        "q": "For household FUTA, which family wages are excluded under the rule taught?",
        "a": "Wages paid to a spouse, child under 21, or parent."
      },
      {
        "id": "v7-132",
        "q": "For household FUTA, are wages paid to an employee under 18 automatically excluded merely because of age?",
        "a": "No."
      },
      {
        "id": "v7-133",
        "q": "What FUTA rate and wage base are taught for household employment?",
        "a": "6% on up to $7,000 of cash wages."
      },
      {
        "id": "v7-134",
        "q": "What is the maximum FUTA amount before credits under the numbers taught?",
        "a": "$420."
      },
      {
        "id": "v7-135",
        "q": "What is injured-spouse relief designed to protect?",
        "a": "The portion of a joint refund belonging to a spouse who does not owe the other spouse's past-due debt."
      },
      {
        "id": "v7-136",
        "q": "What form is used for injured-spouse relief?",
        "a": "Form 8379."
      },
      {
        "id": "v7-137",
        "q": "Can Form 8379 be filed with the joint return?",
        "a": "Yes."
      },
      {
        "id": "v7-138",
        "q": "Can Form 8379 be filed after the joint refund has already been offset?",
        "a": "Yes."
      },
      {
        "id": "v7-139",
        "q": "What is the normal joint-liability rule for MFJ returns?",
        "a": "Both spouses are jointly and severally liable for the tax."
      },
      {
        "id": "v7-140",
        "q": "What is innocent-spouse relief designed for?",
        "a": "Relief for a spouse who was not involved in and did not know or have reason to know about the other spouse's improper tax activity."
      },
      {
        "id": "v7-141",
        "q": "What form is used to request innocent-spouse relief?",
        "a": "Form 8857."
      },
      {
        "id": "v7-142",
        "q": "Is innocent-spouse relief automatic after Form 8857 is filed?",
        "a": "No. The IRS evaluates the facts and circumstances."
      },
      {
        "id": "v7-143",
        "q": "Can a spouse who deliberately ignores obvious signs of understated income necessarily qualify as an innocent spouse?",
        "a": "No."
      },
      {
        "id": "v7-144",
        "q": "In a community-property state, how is earned income generally allocated when spouses file separately?",
        "a": "50/50 between the spouses."
      },
      {
        "id": "v7-145",
        "q": "If only one spouse works in a community-property state and they file MFS, how is earned income generally reported?",
        "a": "Each spouse reports half."
      },
      {
        "id": "v7-146",
        "q": "Are IRA distributions split 50/50 under the community-property earned-income rule taught?",
        "a": "No. They are taxable to the spouse named on the IRA."
      },
      {
        "id": "v7-147",
        "q": "How is alimony under a pre-2019 divorce agreement treated under the rule taught?",
        "a": "Deductible by the payer and taxable to the recipient."
      },
      {
        "id": "v7-148",
        "q": "How is alimony under a 2019-or-later divorce agreement treated?",
        "a": "Not deductible by the payer and not included in the recipient's income."
      },
      {
        "id": "v7-149",
        "q": "How is child support treated for federal income tax purposes?",
        "a": "Never deductible by the payer and not income to the recipient."
      },
      {
        "id": "v7-150",
        "q": "Do property transfers incident to divorce generally create gain or loss?",
        "a": "No."
      },
      {
        "id": "v7-151",
        "q": "When is a property transfer automatically considered incident to divorce based on timing alone?",
        "a": "When made within one year after the divorce."
      },
      {
        "id": "v7-152",
        "q": "How long after divorce can a transfer under an original or modified divorce agreement still qualify as incident to divorce under the rule taught?",
        "a": "Within six years after the divorce."
      },
      {
        "id": "v7-153",
        "q": "Who pays income tax merely upon receiving a gift or inheritance?",
        "a": "Generally neither recipient pays income tax on the transfer itself; later income or sale can have tax consequences."
      },
      {
        "id": "v7-154",
        "q": "Who is responsible for gift tax if it applies?",
        "a": "The gift giver."
      },
      {
        "id": "v7-155",
        "q": "Who is responsible for estate tax if it applies?",
        "a": "The estate."
      },
      {
        "id": "v7-156",
        "q": "What is the 2025 combined lifetime gift-and-estate exemption taught in the transcript?",
        "a": "$13,990,000."
      },
      {
        "id": "v7-157",
        "q": "What doubled 2025 exemption amount is discussed when spousal portability is elected?",
        "a": "$27,980,000."
      },
      {
        "id": "v7-158",
        "q": "How do taxable lifetime gifts generally affect the lifetime estate exemption?",
        "a": "They reduce the remaining lifetime exemption."
      },
      {
        "id": "v7-159",
        "q": "If a taxpayer uses $300,000 of lifetime exemption for gifts, what remains from a $13,990,000 exemption?",
        "a": "$13,690,000."
      },
      {
        "id": "v7-160",
        "q": "What is the 2025 annual gift-tax exclusion per recipient?",
        "a": "$19,000."
      },
      {
        "id": "v7-161",
        "q": "Does a gift at or below $19,000 to one recipient generally reduce the lifetime exemption?",
        "a": "No."
      },
      {
        "id": "v7-162",
        "q": "What is gift splitting?",
        "a": "Treating a married couple's gift as made one-half by each spouse."
      },
      {
        "id": "v7-163",
        "q": "How much can a married couple give one recipient in 2025 using both $19,000 exclusions?",
        "a": "$38,000."
      },
      {
        "id": "v7-164",
        "q": "If a married couple gives $19,000 each to both their married child and the child's spouse, how much can be transferred using annual exclusions?",
        "a": "$76,000."
      },
      {
        "id": "v7-165",
        "q": "For the educational-expense gift-tax exception, what expense must be paid directly to the school?",
        "a": "Tuition."
      },
      {
        "id": "v7-166",
        "q": "Does the direct-tuition gift-tax exception apply only to college?",
        "a": "No. It can apply to qualifying tuition at any education level."
      },
      {
        "id": "v7-167",
        "q": "How can another person's medical expenses be paid without using the $19,000 annual gift exclusion?",
        "a": "Pay the medical provider directly."
      },
      {
        "id": "v7-168",
        "q": "Are gifts to a U.S.-citizen spouse limited by the ordinary $19,000 annual exclusion?",
        "a": "No; qualifying gifts to a U.S.-citizen spouse are fully excluded."
      },
      {
        "id": "v7-169",
        "q": "Are qualified charitable donations treated as taxable gifts?",
        "a": "No."
      },
      {
        "id": "v7-170",
        "q": "Are political donations treated as gifts for the gift-tax rules taught?",
        "a": "No."
      },
      {
        "id": "v7-171",
        "q": "What form is the federal gift-tax return?",
        "a": "Form 709."
      },
      {
        "id": "v7-172",
        "q": "When is Form 709 generally due?",
        "a": "April 15."
      },
      {
        "id": "v7-173",
        "q": "Is Form 709 filed as part of Form 1040?",
        "a": "No. It is a separate return."
      },
      {
        "id": "v7-174",
        "q": "Can spouses file one joint Form 709?",
        "a": "No."
      },
      {
        "id": "v7-175",
        "q": "Can gift splitting require Forms 709 even when no gift tax is due?",
        "a": "Yes."
      },
      {
        "id": "v7-176",
        "q": "If a gift exceeds the annual exclusion, what two broad choices are described?",
        "a": "Use part of the lifetime exemption or pay gift tax."
      },
      {
        "id": "v7-177",
        "q": "What gift-tax rate range is taught?",
        "a": "18% to 40%."
      },
      {
        "id": "v7-178",
        "q": "Can debt forgiveness be a gift?",
        "a": "Yes."
      },
      {
        "id": "v7-179",
        "q": "Can selling property to a family member below market value create a gift?",
        "a": "Yes."
      },
      {
        "id": "v7-180",
        "q": "If a $300,000 house is sold to an adult child for $100,000, what gift amount is created in the example?",
        "a": "$200,000."
      },
      {
        "id": "v7-181",
        "q": "What 2025 annual exclusion for gifts to a noncitizen spouse is taught?",
        "a": "$190,000."
      },
      {
        "id": "v7-182",
        "q": "Does the $190,000 noncitizen-spouse limit apply even if the spouse is a resident alien?",
        "a": "Yes."
      },
      {
        "id": "v7-183",
        "q": "What generally makes up a decedent's gross estate?",
        "a": "Virtually all of the decedent's assets."
      },
      {
        "id": "v7-184",
        "q": "Name expenses that can reduce a gross estate before determining the taxable estate.",
        "a": "Funeral expenses, administrative expenses, attorney fees, and allowed adjustments."
      },
      {
        "id": "v7-185",
        "q": "What is the federal estate-tax return form?",
        "a": "Form 706."
      },
      {
        "id": "v7-186",
        "q": "What additional purpose can Form 706 serve even when portability is the key issue?",
        "a": "Electing portability of the deceased spouse's unused exemption for the surviving spouse."
      },
      {
        "id": "v7-187",
        "q": "When is Form 706 generally due?",
        "a": "9 months after the date of death."
      },
      {
        "id": "v7-188",
        "q": "How long can the Form 706 due date be extended?",
        "a": "6 months."
      },
      {
        "id": "v7-189",
        "q": "What form is used to request the Form 706 extension?",
        "a": "Form 4768."
      },
      {
        "id": "v7-190",
        "q": "What estate-tax rate range is taught?",
        "a": "18% to 40%."
      },
      {
        "id": "v7-191",
        "q": "What is the generation-skipping transfer tax designed to address?",
        "a": "Transfers that skip a generation, such as from a grandparent directly to a grandchild."
      },
      {
        "id": "v7-192",
        "q": "What GST tax rate is taught?",
        "a": "40%."
      },
      {
        "id": "v7-193",
        "q": "Does spousal portability double the exemption for GST purposes under the rule taught?",
        "a": "No."
      },
      {
        "id": "v7-194",
        "q": "What is a trust?",
        "a": "A state-law entity formed to hold assets for the benefit of a beneficiary."
      },
      {
        "id": "v7-195",
        "q": "Who is the grantor of a trust?",
        "a": "The person who contributes property to the trust."
      },
      {
        "id": "v7-196",
        "q": "Who is the trustee or fiduciary?",
        "a": "The person or entity responsible for carrying out the trust's terms."
      },
      {
        "id": "v7-197",
        "q": "Who is the beneficiary?",
        "a": "The person who receives trust income and/or assets."
      },
      {
        "id": "v7-198",
        "q": "Can the grantor also be a beneficiary?",
        "a": "Yes, in some trusts."
      },
      {
        "id": "v7-199",
        "q": "Can a trust be required to file its own tax return?",
        "a": "Yes."
      },
      {
        "id": "v7-200",
        "q": "How is income passed from a trust to beneficiaries commonly reported to them?",
        "a": "On Schedule K-1."
      },
      {
        "id": "v7-201",
        "q": "Where is pass-through trust income commonly reported on an individual's return?",
        "a": "Schedule E."
      },
      {
        "id": "v7-202",
        "q": "What estate-planning benefit can a trust provide regarding probate?",
        "a": "It can keep assets out of probate and preserve privacy."
      },
      {
        "id": "v7-203",
        "q": "What is a revocable or living trust commonly used for?",
        "a": "Avoiding probate and directing assets to specific beneficiaries."
      },
      {
        "id": "v7-204",
        "q": "Can assets be moved in and out of a revocable living trust while the grantor is alive?",
        "a": "Yes."
      },
      {
        "id": "v7-205",
        "q": "What is a key feature of an irrevocable trust?",
        "a": "Assets transferred into it generally cannot be taken back by the grantor."
      },
      {
        "id": "v7-206",
        "q": "Why can an irrevocable trust reduce the grantor's taxable estate?",
        "a": "The trust, as a separate entity, owns the transferred assets rather than the grantor."
      },
      {
        "id": "v7-207",
        "q": "What is a family limited partnership used for in the estate-planning discussion?",
        "a": "Holding a family business and transferring interests among family members or trusts."
      },
      {
        "id": "v7-208",
        "q": "What two valuation discounts are discussed for family limited partnership interests?",
        "a": "Lack of control and lack of marketability."
      },
      {
        "id": "v7-209",
        "q": "How can annual gifting of family-partnership interests assist succession planning?",
        "a": "Interests can be transferred gradually using annual gift exclusions."
      },
      {
        "id": "v7-210",
        "q": "What important non-tax requirement is emphasized for a family limited partnership?",
        "a": "It must have a valid business purpose and not exist primarily to save taxes."
      },
      {
        "id": "v7-211",
        "q": "What is a donor-advised fund?",
        "a": "A charitable fund maintained by a public charity into which donors contribute and then recommend grants to charities."
      },
      {
        "id": "v7-212",
        "q": "What immediate tax benefit can a donor receive for a qualifying donor-advised fund contribution?",
        "a": "A charitable deduction."
      },
      {
        "id": "v7-213",
        "q": "What is a charitable remainder trust?",
        "a": "An irrevocable trust that provides income to the donor or beneficiaries during life and leaves the remainder to charity."
      },
      {
        "id": "v7-214",
        "q": "In a charitable remainder trust, who receives the trust income during the beneficiary's lifetime?",
        "a": "The donor or designated beneficiaries."
      },
      {
        "id": "v7-215",
        "q": "In a charitable remainder trust, who receives the remaining assets at death?",
        "a": "The designated charity."
      },
      {
        "id": "v7-216",
        "q": "What is a charitable lead trust?",
        "a": "A trust that pays income to charity during the term and later transfers the remaining assets to beneficiaries."
      },
      {
        "id": "v7-217",
        "q": "In a charitable lead trust, who receives the income during the trust term?",
        "a": "The charity."
      },
      {
        "id": "v7-218",
        "q": "In a charitable lead trust, who receives the underlying assets at the end?",
        "a": "The beneficiaries."
      },
      {
        "id": "v7-219",
        "q": "Are life-insurance proceeds generally subject to income tax when paid to a beneficiary?",
        "a": "No."
      },
      {
        "id": "v7-220",
        "q": "Are life-insurance proceeds generally included in the insured's gross estate when the insured owns the policy?",
        "a": "Yes."
      },
      {
        "id": "v7-221",
        "q": "What is an irrevocable life-insurance trust used for?",
        "a": "Keeping policy proceeds outside the taxable estate and providing liquidity for estate taxes."
      },
      {
        "id": "v7-222",
        "q": "Why can estate-tax liquidity be important for estates owning businesses or real estate?",
        "a": "Those assets may be difficult to sell quickly, and heirs may want to keep them."
      },
      {
        "id": "v7-223",
        "q": "How can life insurance be used to equalize inheritances?",
        "a": "One heir can receive an indivisible asset such as a business or house while other heirs receive insurance proceeds."
      },
      {
        "id": "v7-224",
        "q": "If life-insurance proceeds go to charity and are included in the gross estate, what offset can the estate generally receive?",
        "a": "A charitable deduction."
      },
      {
        "id": "v7-225",
        "q": "What basis generally carries over when appreciated property is given during life?",
        "a": "The donor's carryover basis."
      },
      {
        "id": "v7-226",
        "q": "What basis generally applies to inherited property?",
        "a": "A stepped-up basis to fair market value at the date of death, or the alternate valuation date if elected by the estate."
      },
      {
        "id": "v7-227",
        "q": "In the Matilda stock example, what was the original basis of 1,000 shares bought at $10 each?",
        "a": "$10,000."
      },
      {
        "id": "v7-228",
        "q": "In the Matilda example, what was the stock worth when transferred in 2025?",
        "a": "$500,000."
      },
      {
        "id": "v7-229",
        "q": "If Matilda gifted the stock and Matthew sold it for $500,000, what gain did Matthew have?",
        "a": "$490,000."
      },
      {
        "id": "v7-230",
        "q": "At a 20% capital-gain rate, how much tax resulted from Matthew's $490,000 gain?",
        "a": "$98,000."
      },
      {
        "id": "v7-231",
        "q": "If Matilda instead died and Matthew inherited the $500,000 stock and immediately sold it, what was his basis under the example?",
        "a": "$500,000."
      },
      {
        "id": "v7-232",
        "q": "How much capital gain did Matthew have after inheriting and immediately selling the $500,000 stock in the example?",
        "a": "$0."
      },
      {
        "id": "v7-233",
        "q": "What is the general classic timing strategy for income and deductions when tax rates are expected to stay the same?",
        "a": "Accelerate deductions into the earlier year and postpone income into the later year."
      },
      {
        "id": "v7-234",
        "q": "Why can't a cash-basis taxpayer simply hold a check received in December and deposit it in January to postpone income?",
        "a": "The constructive-receipt doctrine can make the income taxable when it was made available."
      },
      {
        "id": "v7-235",
        "q": "What AGI-sensitive items should be considered when timing income and deductions?",
        "a": "Items such as IRA deductions/contributions, Child Tax Credit, student-loan interest, and the rental-real-estate passive-loss allowance."
      },
      {
        "id": "v7-236",
        "q": "How can current capital losses affect the timing of selling an appreciated asset?",
        "a": "Selling in the same year can allow the losses to offset the gain."
      },
      {
        "id": "v7-237",
        "q": "If there are no capital losses and an appreciated asset can safely be sold after year-end, what tax-timing benefit may result?",
        "a": "Selling in January can defer the tax to the following tax year."
      },
      {
        "id": "v7-238",
        "q": "Why can donating appreciated property to charity be tax-efficient?",
        "a": "The taxpayer may deduct fair market value while avoiding tax on the built-in gain, subject to the charitable rules."
      },
      {
        "id": "v7-239",
        "q": "Can taxpayers generally choose the timing of retirement distributions above any required minimum distribution?",
        "a": "Yes."
      },
      {
        "id": "v7-240",
        "q": "What tax-planning tool can make an IRA distribution tax-free while satisfying charitable goals?",
        "a": "A qualified charitable distribution."
      },
      {
        "id": "v7-241",
        "q": "What is itemized-deduction bunching?",
        "a": "Concentrating controllable itemized deductions into one year so itemizing exceeds the standard deduction, then using the standard deduction in another year."
      },
      {
        "id": "v7-242",
        "q": "Name expenses that can sometimes be bunched for itemized deductions.",
        "a": "Charitable contributions and elective medical expenses."
      },
      {
        "id": "v7-243",
        "q": "What 2025 employee contribution limit is taught for 401(k), 403(b), 457, and similar employer plans?",
        "a": "$23,500."
      },
      {
        "id": "v7-244",
        "q": "What 2025 catch-up contribution is taught for employer plans for taxpayers age 50 or older?",
        "a": "$7,500."
      },
      {
        "id": "v7-245",
        "q": "What total employer-plan contribution limit results from $23,500 plus the $7,500 age-50 catch-up?",
        "a": "$31,000."
      },
      {
        "id": "v7-246",
        "q": "What special 2025 super catch-up is taught for ages 60 through 63?",
        "a": "$11,250 instead of the regular $7,500 catch-up."
      },
      {
        "id": "v7-247",
        "q": "What total 2025 employee contribution amount results for ages 60–63 using the super catch-up?",
        "a": "$34,750."
      },
      {
        "id": "v7-248",
        "q": "Can employee retirement-plan contributions exceed compensation?",
        "a": "No. Contributions are limited to the lesser of the annual limit or 100% of compensation."
      },
      {
        "id": "v7-249",
        "q": "Are employer matching contributions generally taxable to the employee when contributed under the rule taught?",
        "a": "No; the match is tax-deferred/tax-free at contribution."
      },
      {
        "id": "v7-250",
        "q": "What 2025 SEP contribution limit is taught?",
        "a": "The lesser of $70,000 or 25% of compensation."
      },
      {
        "id": "v7-251",
        "q": "Can employees make salary-deferral or catch-up contributions to a SEP under the rule taught?",
        "a": "No."
      },
      {
        "id": "v7-252",
        "q": "What 2025 SIMPLE IRA employee contribution limit is taught?",
        "a": "$16,500."
      },
      {
        "id": "v7-253",
        "q": "What 2025 age-50 SIMPLE catch-up is taught?",
        "a": "$3,500, for a total of $20,000."
      },
      {
        "id": "v7-254",
        "q": "What 2025 SIMPLE super catch-up is taught for ages 60–63?",
        "a": "$5,250, for a total of $21,750."
      },
      {
        "id": "v7-255",
        "q": "What 2025 IRA contribution limits are recapped?",
        "a": "$7,000, or $8,000 if age 50 or older."
      },
      {
        "id": "v7-256",
        "q": "What is an HSA?",
        "a": "A pre-tax savings account for qualified medical expenses."
      },
      {
        "id": "v7-257",
        "q": "How are qualifying HSA contributions treated for tax purposes?",
        "a": "They are deductible or made pre-tax, subject to the rules."
      },
      {
        "id": "v7-258",
        "q": "How are HSA distributions for qualified medical expenses treated?",
        "a": "Tax-free."
      },
      {
        "id": "v7-259",
        "q": "What insurance requirement applies to HSA contributions?",
        "a": "The taxpayer must be covered by a qualifying high-deductible health plan."
      },
      {
        "id": "v7-260",
        "q": "What 2025 minimum deductible is taught for self-only HSA-compatible coverage?",
        "a": "$1,650."
      },
      {
        "id": "v7-261",
        "q": "What 2025 minimum deductible is taught for family HSA-compatible coverage?",
        "a": "$3,300."
      },
      {
        "id": "v7-262",
        "q": "What 2025 HSA contribution limit is taught for self-only coverage?",
        "a": "$4,300."
      },
      {
        "id": "v7-263",
        "q": "What 2025 HSA contribution limit is taught for self-only coverage at age 55 or older?",
        "a": "$5,300."
      },
      {
        "id": "v7-264",
        "q": "What 2025 HSA contribution limit is taught for family coverage?",
        "a": "$8,550."
      },
      {
        "id": "v7-265",
        "q": "What 2025 HSA contribution limit is taught for family coverage at age 55 or older?",
        "a": "$9,550."
      },
      {
        "id": "v7-266",
        "q": "Is an HSA generally use-it-or-lose-it?",
        "a": "No. Unused balances carry forward."
      },
      {
        "id": "v7-267",
        "q": "How can an HSA function after retirement if funds remain?",
        "a": "It can operate similarly to a traditional IRA for nonmedical withdrawals while qualified medical withdrawals retain special treatment."
      },
      {
        "id": "v7-268",
        "q": "What is an FSA?",
        "a": "An employer-sponsored pre-tax flexible spending account for qualified expenses such as health care."
      },
      {
        "id": "v7-269",
        "q": "What 2025 health FSA contribution limit is taught?",
        "a": "$3,300."
      },
      {
        "id": "v7-270",
        "q": "Is a health FSA generally use-it-or-lose-it?",
        "a": "Yes."
      },
      {
        "id": "v7-271",
        "q": "What optional FSA grace period can an employer plan allow?",
        "a": "Up to 2½ months, through about March 15 of the following year."
      },
      {
        "id": "v7-272",
        "q": "What optional FSA carryover amount is taught as an alternative to the grace period?",
        "a": "Up to $660."
      },
      {
        "id": "v7-273",
        "q": "Does an FSA require a high-deductible health plan?",
        "a": "No."
      },
      {
        "id": "v7-274",
        "q": "What is the normal dependent-care FSA contribution limit taught?",
        "a": "$5,000."
      },
      {
        "id": "v7-275",
        "q": "What dependent-care FSA limit applies to MFS?",
        "a": "$2,500."
      },
      {
        "id": "v7-276",
        "q": "Is a dependent-care FSA generally use-it-or-lose-it?",
        "a": "Yes."
      },
      {
        "id": "v7-277",
        "q": "What is another name for a 529 plan?",
        "a": "A qualified tuition program (QTP)."
      },
      {
        "id": "v7-278",
        "q": "Are contributions to a 529 plan federally tax-deductible under the material taught?",
        "a": "No."
      },
      {
        "id": "v7-279",
        "q": "How do earnings in a 529 plan grow?",
        "a": "Tax-free."
      },
      {
        "id": "v7-280",
        "q": "When are 529 distributions tax-free?",
        "a": "When used for qualified education expenses."
      },
      {
        "id": "v7-281",
        "q": "What higher-education costs can a 529 plan generally pay under the transcript?",
        "a": "Tuition, books, fees, equipment, and reasonable room and board."
      },
      {
        "id": "v7-282",
        "q": "How much K-12 tuition can a 529 plan pay per year under the rule taught?",
        "a": "Up to $10,000."
      },
      {
        "id": "v7-283",
        "q": "For distributions after July 4, 2025, what additional K-12 expenses are discussed for 529 plans?",
        "a": "Curricular materials, books, online materials, certain tutoring, standardized-test fees, dual-enrollment costs, and educational therapies for students with disabilities."
      },
      {
        "id": "v7-284",
        "q": "How much student-loan debt can 529 funds be used to repay under the rule taught?",
        "a": "Up to $10,000."
      },
      {
        "id": "v7-285",
        "q": "What happens if 529 money is withdrawn for a nonqualified purpose?",
        "a": "The taxable portion is subject to income tax and a 10% penalty."
      },
      {
        "id": "v7-286",
        "q": "What new 2025 529 use applies to qualifying post-secondary credential programs?",
        "a": "Qualified costs for credentials, including tuition, fees, books, supplies, equipment, testing, obtaining the credential, and required continuing education."
      },
      {
        "id": "v7-287",
        "q": "What effective-date condition applies to the new credential-related 529 provision taught?",
        "a": "Distributions after July 4, 2025."
      },
      {
        "id": "v7-288",
        "q": "What is a Coverdell Education Savings Account?",
        "a": "A tax-favored education savings account, also called a Coverdell ESA."
      },
      {
        "id": "v7-289",
        "q": "Are Coverdell ESA contributions tax-deductible?",
        "a": "No."
      },
      {
        "id": "v7-290",
        "q": "How do Coverdell ESA earnings and qualified distributions receive tax treatment?",
        "a": "Earnings grow tax-free and qualified education distributions are tax-free."
      },
      {
        "id": "v7-291",
        "q": "What education levels can Coverdell ESA funds generally cover?",
        "a": "K-12 and higher education."
      },
      {
        "id": "v7-292",
        "q": "What is the annual Coverdell ESA contribution limit per beneficiary?",
        "a": "$2,000 total from all contributors and accounts."
      },
      {
        "id": "v7-293",
        "q": "What excise tax applies to excess Coverdell ESA contributions?",
        "a": "6% each year the excess remains."
      },
      {
        "id": "v7-294",
        "q": "After what beneficiary age are new Coverdell contributions generally prohibited under the rule taught?",
        "a": "Age 18."
      },
      {
        "id": "v7-295",
        "q": "By what age must the Coverdell ESA generally be fully distributed?",
        "a": "Age 30."
      },
      {
        "id": "v7-296",
        "q": "What Coverdell contribution phaseout range is taught for non-MFJ contributors?",
        "a": "$95,000 to $110,000 of AGI."
      },
      {
        "id": "v7-297",
        "q": "How are the Coverdell AGI phaseout limits adjusted for MFJ?",
        "a": "They are doubled."
      },
      {
        "id": "v7-298",
        "q": "How late can a 2025 Coverdell contribution be made under the transcript?",
        "a": "By April 15, 2026."
      },
      {
        "id": "v7-299",
        "q": "What tax consequence applies to nonqualified Coverdell withdrawals?",
        "a": "Income tax plus a 10% penalty."
      },
      {
        "id": "v7-300",
        "q": "What does ABLE stand for?",
        "a": "Achieving a Better Life Experience."
      },
      {
        "id": "v7-301",
        "q": "What is an ABLE account used for?",
        "a": "Qualified disability expenses of the beneficiary."
      },
      {
        "id": "v7-302",
        "q": "Can 529 funds be rolled into an ABLE account under the material taught?",
        "a": "Yes, subject to the annual contribution limits."
      },
      {
        "id": "v7-303",
        "q": "What general 2025 ABLE contribution limit from all sources is taught?",
        "a": "$19,000, equal to the annual gift-tax exclusion."
      },
      {
        "id": "v7-304",
        "q": "Can an employed ABLE beneficiary contribute more than the normal annual limit?",
        "a": "Yes, potentially up to additional compensation or the one-person poverty-line amount, whichever is less, if the beneficiary does not participate in an employer retirement plan."
      },
      {
        "id": "v7-305",
        "q": "Can an ABLE beneficiary's own qualifying contributions count for the Saver's Credit?",
        "a": "Yes, if the beneficiary otherwise qualifies."
      },
      {
        "id": "v7-306",
        "q": "Are ABLE contributions tax-deductible?",
        "a": "No."
      },
      {
        "id": "v7-307",
        "q": "How do ABLE earnings grow?",
        "a": "Tax-free."
      },
      {
        "id": "v7-308",
        "q": "When are ABLE distributions tax-free?",
        "a": "When used for qualified disability expenses."
      },
      {
        "id": "v7-309",
        "q": "What is a Qualified Domestic Relations Order (QDRO) used for in a divorce?",
        "a": "It directs an employer retirement-plan administrator to award all or part of a participant's plan interest to the nonparticipant spouse."
      },
      {
        "id": "v7-310",
        "q": "If a nonparticipant spouse receives a taxable employer retirement-plan distribution under a QDRO and keeps the money, is it taxable?",
        "a": "Yes, if the account is taxable."
      },
      {
        "id": "v7-311",
        "q": "Does the 10% early-distribution penalty apply to a qualifying employer-plan distribution to a former spouse under a QDRO?",
        "a": "No."
      },
      {
        "id": "v7-312",
        "q": "How can a spouse receiving retirement-plan assets under a QDRO generally avoid current income tax on the transfer?",
        "a": "Roll the amount into an IRA or another qualified retirement plan."
      },
      {
        "id": "v7-313",
        "q": "Is a QDRO required for an IRA transfer incident to divorce?",
        "a": "No. IRA transfers incident to divorce can be nontaxable without a QDRO."
      },
      {
        "id": "v7-314",
        "q": "When significant income comes from sources without withholding, how often does the tax-planning discussion suggest projecting income and deductions?",
        "a": "Preferably quarterly."
      },
      {
        "id": "v7-315",
        "q": "What four estimated-tax payment dates are repeated in the tax-planning discussion?",
        "a": "April 15, June 15, September 15, and January 15 of the following year."
      },
      {
        "id": "v7-316",
        "q": "Besides computing estimated payments, what is another use of quarterly tax projections?",
        "a": "They help identify year-end planning opportunities involving income, deductions, and other tax decisions."
      },
      {
        "id": "v7-317",
        "q": "What two years should generally be compared when deciding whether to accelerate or postpone discretionary income or deductions?",
        "a": "The current year and the following year."
      },
      {
        "id": "v7-318",
        "q": "How can an owner of a closely held corporation sometimes use salary or bonus timing for tax planning?",
        "a": "Subject to reasonable-compensation rules, the owner may have flexibility to take a bonus in the current year or postpone it to the next year."
      },
      {
        "id": "v7-319",
        "q": "What is the 2025 annual QCD limit stated in the specialized-topics transcript?",
        "a": "$108,000 per person."
      },
      {
        "id": "v7-320",
        "q": "Can a qualified charitable distribution count toward a required minimum distribution?",
        "a": "Yes."
      }
    ]
  }
];
