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
    "cards": []
  },
  {
    "id": "video-4",
    "video": 4,
    "title": "Adjustments & Deductions",
    "cards": []
  },
  {
    "id": "video-5",
    "video": 5,
    "title": "Tax & Credits",
    "cards": []
  },
  {
    "id": "video-6",
    "video": 6,
    "title": "Retirement & Social Security",
    "cards": []
  },
  {
    "id": "video-7",
    "video": 7,
    "title": "Specialized Returns & Topics",
    "cards": []
  }
];
