// Individual audit batch 2: Video 1 source cards v1-221 through v1-608.
const EA_AUDIT_BATCH_2 = {
  range: "v1-221..v1-608",
  reviewedCount: 388,
  auditDate: "2026-10-03",
  taxYear: 2025,
  examCycle: "2026-2027",
  method: "Individual review against the PSI Part 1 exam specifications and 2025 IRS guidance",
  questions: [
  {
    "id": "audit-v1-050",
    "domain": 1,
    "topic": "Filing deadline",
    "coveredSources": [
      "v1-223",
      "v1-224",
      "v1-225",
      "v1-226"
    ],
    "q": "For a calendar-year individual, when is Form 1040 generally due if the normal due date does not fall on a weekend or legal holiday?",
    "choices": [
      "March 15",
      "April 15",
      "June 15",
      "October 15"
    ],
    "answer": 1,
    "explanation": "A calendar-year individual return is generally due April 15. If the deadline falls on a weekend or legal holiday, it moves to the next business day.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-051",
    "domain": 1,
    "topic": "Extension to file",
    "coveredSources": [
      "v1-227",
      "v1-228",
      "v1-229",
      "v1-230",
      "v1-231",
      "v1-238"
    ],
    "q": "A calendar-year taxpayer timely files Form 4868 for a 2025 Form 1040. What is the ordinary extended filing deadline?",
    "choices": [
      "June 15, 2026",
      "August 15, 2026",
      "October 15, 2026",
      "December 31, 2026"
    ],
    "answer": 2,
    "explanation": "A timely Form 4868 generally gives an automatic 6-month extension to file, moving the 2025 return filing deadline to October 15, 2026.",
    "reference": "Form 4868 Instructions (2025)"
  },
  {
    "id": "audit-v1-052",
    "domain": 1,
    "topic": "Extension to pay",
    "coveredSources": [
      "v1-232",
      "v1-233",
      "v1-234",
      "v1-235",
      "v1-236",
      "v1-237"
    ],
    "q": "Which statement about Form 4868 is correct?",
    "choices": [
      "It automatically extends both filing and payment for 6 months",
      "It generally extends the time to file, but not the time to pay tax",
      "It can be filed only by taxpayers expecting a refund",
      "It eliminates interest on unpaid tax until October 15"
    ],
    "answer": 1,
    "explanation": "Form 4868 generally extends the time to file, not the time to pay. Tax expected to be due should generally be estimated and paid by the original due date.",
    "reference": "Form 4868 Instructions (2025)"
  },
  {
    "id": "audit-v1-053",
    "domain": 1,
    "topic": "Taxpayers abroad",
    "coveredSources": [
      "v1-239",
      "v1-240",
      "v1-241",
      "v1-242",
      "v1-243",
      "v1-244",
      "v1-246",
      "v1-247",
      "v1-248",
      "v1-249"
    ],
    "q": "A U.S. citizen is living abroad on the regular due date and the taxpayer's main place of business is outside the United States. What special filing rule may apply?",
    "choices": [
      "An automatic 2-month extension to file may apply",
      "An automatic 1-year extension to file and pay applies",
      "No federal return is required",
      "Form 4868 is always required to obtain the initial 2-month extension"
    ],
    "answer": 0,
    "explanation": "Certain U.S. citizens and resident aliens living abroad with a foreign main place of business or post of duty receive an automatic 2-month extension to file. The rule does not generally extend the regular payment deadline.",
    "reference": "IRS Publication 54 (2025)"
  },
  {
    "id": "audit-v1-054",
    "domain": 1,
    "topic": "Disaster relief",
    "coveredSources": [
      "v1-250",
      "v1-251",
      "v1-252",
      "v1-253",
      "v1-254",
      "v1-255"
    ],
    "q": "Which statement about federally declared disaster tax relief is generally correct?",
    "choices": [
      "Every disaster automatically creates the same 6-month extension",
      "The IRS may postpone filing and payment deadlines for specified affected taxpayers and areas",
      "Disaster relief applies only to individual income tax returns",
      "A taxpayer must live in the disaster area to qualify in every case"
    ],
    "answer": 1,
    "explanation": "The IRS may postpone filing and payment deadlines for specified federally declared disaster areas and affected taxpayers. Relief periods and eligibility depend on the particular announcement.",
    "reference": "IRS disaster relief guidance"
  },
  {
    "id": "audit-v1-055",
    "domain": 1,
    "topic": "Combat zone extension",
    "coveredSources": [
      "v1-256",
      "v1-257",
      "v1-258",
      "v1-259",
      "v1-260",
      "v1-261",
      "v1-264",
      "v1-265",
      "v1-266",
      "v1-267",
      "v1-268"
    ],
    "q": "The special combat-zone deadline extension generally includes 180 days plus:",
    "choices": [
      "The taxpayer's age at year-end",
      "The number of days remaining in the filing period when qualifying service began",
      "A fixed additional 90 days",
      "Only weekends and federal holidays"
    ],
    "answer": 1,
    "explanation": "The combat-zone extension generally includes 180 days after the applicable end date plus the number of days remaining in the normal filing period when the taxpayer entered the combat zone. It can extend both filing and payment deadlines.",
    "reference": "IRS Publication 3 (2025)"
  },
  {
    "id": "audit-v1-056",
    "domain": 4,
    "topic": "Failure-to-file penalty",
    "coveredSources": [
      "v1-269",
      "v1-270",
      "v1-271",
      "v1-272",
      "v1-273",
      "v1-274"
    ],
    "q": "Ignoring special rules, the ordinary failure-to-file penalty is generally:",
    "choices": [
      "0.5% of unpaid tax per month, up to 25%",
      "5% of unpaid tax per month or part of a month, up to 25%",
      "10% of unpaid tax per month with no maximum",
      "A flat $500 for every late return"
    ],
    "answer": 1,
    "explanation": "The ordinary failure-to-file penalty is generally 5% of unpaid tax for each month or part of a month the return is late, up to 25%, subject to special rules and minimums.",
    "reference": "IRS penalties guidance; 2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-057",
    "domain": 4,
    "topic": "Failure-to-pay penalty",
    "coveredSources": [
      "v1-281",
      "v1-282",
      "v1-283",
      "v1-286",
      "v1-287",
      "v1-288"
    ],
    "q": "Ignoring special rules, the ordinary failure-to-pay penalty is generally:",
    "choices": [
      "0.5% of unpaid tax per month or part of a month, up to 25%",
      "5% of unpaid tax per month, up to 25%",
      "15% of unpaid tax per month, up to 75%",
      "A flat $525"
    ],
    "answer": 0,
    "explanation": "The ordinary failure-to-pay penalty is generally 0.5% of unpaid tax for each month or part of a month, up to 25%. When failure-to-file and failure-to-pay penalties overlap, special coordination rules apply.",
    "reference": "IRS penalties guidance"
  },
  {
    "id": "audit-v1-058",
    "domain": 4,
    "topic": "Interest",
    "coveredSources": [
      "v1-290",
      "v1-292",
      "v1-293",
      "v1-294",
      "v1-295",
      "v1-296"
    ],
    "q": "Which statement about interest on unpaid federal tax is generally correct?",
    "choices": [
      "An extension to file automatically stops interest",
      "Interest is generally compounded daily",
      "Interest rates are fixed permanently when the return is filed",
      "Interest applies only after a failure-to-file penalty reaches 25%"
    ],
    "answer": 1,
    "explanation": "Interest generally accrues on unpaid tax from the original due date and is compounded daily. Rates are adjusted periodically.",
    "reference": "IRS interest guidance"
  },
  {
    "id": "audit-v1-059",
    "domain": 5,
    "topic": "Penalty of perjury",
    "coveredSources": [
      "v1-299",
      "v1-300",
      "v1-303",
      "v1-305"
    ],
    "q": "Which statement best reflects the significance of signing a federal tax return under penalties of perjury?",
    "choices": [
      "A taxpayer may knowingly report false information if a preparer agrees",
      "Knowingly filing a materially false return can have serious civil or criminal consequences",
      "The signature has no legal effect once the return is e-filed",
      "Only paid preparers can face consequences for a knowingly false return"
    ],
    "answer": 1,
    "explanation": "A federal return is signed under penalties of perjury. Knowingly filing or helping file a false or fraudulent return can create serious consequences. Exact criminal penalties are not necessary for this Part 1 study item.",
    "reference": "2025 Form 1040; PSI Part 1 outline 5A15"
  },
  {
    "id": "audit-v1-060",
    "domain": 1,
    "topic": "Tax year",
    "coveredSources": [
      "v1-307",
      "v1-308",
      "v1-309",
      "v1-310"
    ],
    "q": "For most individual taxpayers, the tax year is:",
    "choices": [
      "A calendar year ending December 31",
      "A fiscal year ending June 30",
      "Any 12-month period the taxpayer chooses each year",
      "A short year whenever the taxpayer dies"
    ],
    "answer": 0,
    "explanation": "Most individuals use a calendar year. A decedent's final individual return generally still covers the calendar-year period through the date of death rather than becoming a separate fiscal-year system.",
    "reference": "IRS Publication 538; Form 1040 Instructions"
  },
  {
    "id": "audit-v1-061",
    "domain": 1,
    "topic": "Taxpayer identification",
    "coveredSources": [
      "v1-325",
      "v1-326",
      "v1-328",
      "v1-329",
      "v1-330",
      "v1-331",
      "v1-332"
    ],
    "q": "Which statement about an Individual Taxpayer Identification Number (ITIN) is correct?",
    "choices": [
      "It authorizes employment in the United States",
      "It is a tax-processing number for certain people who need a U.S. taxpayer ID but are not eligible for an SSN",
      "It is issued only to U.S. citizens",
      "It replaces a passport for general identification purposes"
    ],
    "answer": 1,
    "explanation": "An ITIN is issued for federal tax purposes to certain individuals who need a taxpayer identification number but are not eligible for an SSN. It does not itself authorize employment.",
    "reference": "IRS ITIN guidance; Form W-7 Instructions"
  },
  {
    "id": "audit-v1-062",
    "domain": 1,
    "topic": "Adoption taxpayer ID",
    "coveredSources": [
      "v1-333",
      "v1-334",
      "v1-335"
    ],
    "q": "An adoption is pending and an eligible child cannot yet obtain an SSN. Which taxpayer identification number may be available for the child?",
    "choices": [
      "ATIN",
      "PTIN",
      "EIN",
      "IP PIN"
    ],
    "answer": 0,
    "explanation": "An Adoption Taxpayer Identification Number (ATIN) may be available for a child placed for legal adoption when an SSN cannot yet be obtained. Form W-7A is used to request it.",
    "reference": "Form W-7A Instructions"
  },
  {
    "id": "audit-v1-063",
    "domain": 1,
    "topic": "Resident alien",
    "coveredSources": [
      "v1-336",
      "v1-337",
      "v1-339",
      "v1-340",
      "v1-341",
      "v1-342",
      "v1-343",
      "v1-345"
    ],
    "q": "An individual who is not a U.S. citizen may nevertheless be treated as a U.S. resident alien for federal tax purposes by meeting:",
    "choices": [
      "Only the green card test",
      "Only the substantial presence test",
      "Either the green card test or the substantial presence test, subject to applicable exceptions",
      "The head-of-household test"
    ],
    "answer": 2,
    "explanation": "An alien generally becomes a resident alien by meeting the green card test or substantial presence test, subject to treaty and statutory exceptions.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-064",
    "domain": 1,
    "topic": "Substantial presence",
    "coveredSources": [
      "v1-346",
      "v1-347",
      "v1-348",
      "v1-349",
      "v1-350"
    ],
    "q": "Which combination describes the substantial presence test for 2025?",
    "choices": [
      "At least 31 days in 2025 and 183 weighted days over 2025, 2024, and 2023",
      "At least 183 days in 2025 only in every case",
      "At least 90 days in each of 2024 and 2025",
      "At least 31 days in each of three consecutive years"
    ],
    "answer": 0,
    "explanation": "The test generally requires at least 31 days in the current year and 183 weighted days over the current and prior two years, counting all current-year days, one-third of prior-year days, and one-sixth of days from two years earlier.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-065",
    "domain": 1,
    "topic": "Substantial presence exclusions",
    "coveredSources": [
      "v1-357",
      "v1-358",
      "v1-359",
      "v1-360",
      "v1-361",
      "v1-362",
      "v1-363"
    ],
    "q": "Which day may be excluded from the substantial presence day count when the statutory requirements are met?",
    "choices": [
      "Any day spent shopping in the United States",
      "Certain days an exempt student on an F, J, M, or Q visa is present",
      "Every day a taxpayer owns a foreign home",
      "Any day the taxpayer works remotely for a foreign employer"
    ],
    "answer": 1,
    "explanation": "Certain categories of exempt individuals, including qualifying students and teachers/trainees, can exclude days for substantial-presence purposes. Other statutory exclusions can also apply.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-066",
    "domain": 1,
    "topic": "Medical condition exception",
    "coveredSources": [
      "v1-363",
      "v1-364"
    ],
    "q": "A visitor becomes medically unable to leave the United States because of a condition that arose while the visitor was in the United States. How may qualifying days be treated for the substantial presence test?",
    "choices": [
      "They must always be counted",
      "They may be excluded if the medical-condition requirements are met",
      "They are counted at one-half value",
      "They are excluded only if the visitor has a green card"
    ],
    "answer": 1,
    "explanation": "Certain days during which an individual is unable to leave because of a medical condition that arose while present in the United States may be excluded.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-067",
    "domain": 1,
    "topic": "Closer connection",
    "coveredSources": [
      "v1-365",
      "v1-366",
      "v1-367",
      "v1-369",
      "v1-370",
      "v1-371"
    ],
    "q": "A person otherwise meets the substantial presence test but was physically present in the United States for fewer than 183 days during 2025. Which additional facts are central to the ordinary closer-connection exception?",
    "choices": [
      "A foreign tax home and a closer connection to a foreign country than to the United States",
      "Ownership of U.S. real estate and a U.S. driver's license",
      "At least 183 days in the United States during 2025",
      "A pending application for lawful permanent residence"
    ],
    "answer": 0,
    "explanation": "The ordinary closer-connection exception generally requires fewer than 183 days of U.S. presence during the current year, a foreign tax home, a closer connection to a foreign country, and no disqualifying steps toward permanent resident status.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-068",
    "domain": 1,
    "topic": "Nonresident alien taxation",
    "coveredSources": [
      "v1-374",
      "v1-375",
      "v1-380",
      "v1-381"
    ],
    "q": "Which statement generally describes a nonresident alien's U.S. income-tax treatment?",
    "choices": [
      "Worldwide income is taxed in the same manner as a U.S. citizen in every case",
      "Applicable U.S.-source income and effectively connected income are generally the focus of U.S. taxation",
      "No U.S. income is ever taxable",
      "The ordinary standard deduction is available to every nonresident alien"
    ],
    "answer": 1,
    "explanation": "Nonresident aliens are generally taxed under special rules on U.S.-source income and income effectively connected with a U.S. trade or business. Most nonresident aliens cannot claim the ordinary standard deduction.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-069",
    "domain": 1,
    "topic": "Nonresident spouse election",
    "coveredSources": [
      "v1-376",
      "v1-377"
    ],
    "q": "A U.S. citizen is married to a nonresident alien. If a valid election is made to treat the nonresident spouse as a U.S. resident for income-tax purposes, what major consequence follows?",
    "choices": [
      "The spouse's worldwide income generally becomes subject to U.S. reporting under the election",
      "The spouse automatically becomes a U.S. citizen",
      "The spouse is exempt from all U.S. tax",
      "The election applies only to U.S.-source wages"
    ],
    "answer": 0,
    "explanation": "A valid election to treat a nonresident spouse as a U.S. resident generally subjects the spouse to U.S. taxation and reporting on worldwide income under the applicable rules.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-070",
    "domain": 1,
    "topic": "Dual-status alien",
    "coveredSources": [
      "v1-382",
      "v1-383"
    ],
    "q": "A dual-status alien is an individual who is:",
    "choices": [
      "A resident alien for part of the year and a nonresident alien for another part",
      "A citizen of two countries",
      "A taxpayer who files both Form 1040 and Form 1041 every year",
      "A nonresident alien with two U.S. jobs"
    ],
    "answer": 0,
    "explanation": "Dual-status refers to U.S. tax residency status changing during the year, often in an arrival or departure year.",
    "reference": "IRS Publication 519 (2025)"
  },
  {
    "id": "audit-v1-071",
    "domain": 1,
    "topic": "Marital status",
    "coveredSources": [
      "v1-387",
      "v1-388",
      "v1-389",
      "v1-390"
    ],
    "q": "For most taxpayers, marital status for federal filing-status purposes is generally determined:",
    "choices": [
      "On January 1",
      "On the last day of the tax year",
      "On the date the return is filed",
      "By whichever date produces the lowest tax"
    ],
    "answer": 1,
    "explanation": "Marital status is generally determined as of the last day of the tax year, subject to special rules such as the death of a spouse and considered-unmarried provisions.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-072",
    "domain": 1,
    "topic": "Married filing jointly",
    "coveredSources": [
      "v1-396",
      "v1-397",
      "v1-398",
      "v1-399",
      "v1-400",
      "v1-401"
    ],
    "q": "Which statement about Married Filing Jointly is correct?",
    "choices": [
      "Both spouses generally must agree to file jointly and report their combined income and deductions",
      "Only the higher-income spouse signs the return",
      "Each spouse reports only that spouse's income",
      "A joint return is available only if both spouses had income"
    ],
    "answer": 0,
    "explanation": "Both spouses generally agree to file the joint return, which reports their combined income and deductions. A joint return can be filed even if one spouse had no income.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-073",
    "domain": 5,
    "topic": "Joint liability",
    "coveredSources": [
      "v1-402",
      "v1-403",
      "v1-404",
      "v1-405",
      "v1-406"
    ],
    "q": "What is the general liability rule for spouses who file a joint federal income tax return?",
    "choices": [
      "Each spouse is liable only for tax on that spouse's own income",
      "Both spouses are generally jointly and severally liable for the entire tax, interest, and penalties",
      "Liability is automatically split 50/50",
      "Only the spouse listed first is liable"
    ],
    "answer": 1,
    "explanation": "Spouses filing jointly are generally jointly and severally liable for the tax, interest, and penalties on the joint return, unless a specific relief provision applies.",
    "reference": "IRS Publication 501; IRS Publication 971"
  },
  {
    "id": "audit-v1-074",
    "domain": 1,
    "topic": "Head of Household",
    "coveredSources": [
      "v1-408",
      "v1-409",
      "v1-410",
      "v1-411",
      "v1-412",
      "v1-413"
    ],
    "q": "Which requirement generally applies to Head of Household filing status?",
    "choices": [
      "The taxpayer must pay more than half the cost of keeping up a home for a qualifying person and be unmarried or considered unmarried",
      "The taxpayer must be legally married for the entire year",
      "The qualifying person must always be the taxpayer's child",
      "The taxpayer must itemize deductions"
    ],
    "answer": 0,
    "explanation": "Head of Household generally requires that the taxpayer be unmarried or considered unmarried and pay more than half the cost of keeping up a home for a qualifying person.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-075",
    "domain": 1,
    "topic": "Considered unmarried",
    "coveredSources": [
      "v1-414",
      "v1-415",
      "v1-416",
      "v1-417",
      "v1-418",
      "v1-419",
      "v1-420",
      "v1-421",
      "v1-422",
      "v1-423",
      "v1-424",
      "v1-425",
      "v1-426"
    ],
    "q": "A married taxpayer may be considered unmarried for Head of Household purposes if all requirements are met. Which is one of those requirements?",
    "choices": [
      "The taxpayer's spouse did not live in the home during the last 6 months of the year",
      "The taxpayer filed a joint return",
      "The taxpayer paid less than half the cost of the home",
      "The qualifying child lived elsewhere for the entire year"
    ],
    "answer": 0,
    "explanation": "Among other requirements, a married taxpayer considered unmarried for Head of Household generally must file separately, pay more than half the cost of keeping up the home, and the spouse must not have lived in the home during the last 6 months of the year.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-076",
    "domain": 1,
    "topic": "Costs of keeping up a home",
    "coveredSources": [
      "v1-427",
      "v1-428",
      "v1-429",
      "v1-430",
      "v1-431",
      "v1-432",
      "v1-433",
      "v1-434",
      "v1-435",
      "v1-436",
      "v1-437",
      "v1-438",
      "v1-439",
      "v1-440",
      "v1-441",
      "v1-442",
      "v1-443",
      "v1-444",
      "v1-445"
    ],
    "q": "Which cost is generally included in determining the cost of keeping up a home for Head of Household purposes?",
    "choices": [
      "Food consumed in the home",
      "Clothing",
      "Education expenses",
      "Medical treatment"
    ],
    "answer": 0,
    "explanation": "Costs of keeping up a home generally include items such as rent, mortgage interest, real estate taxes, utilities, repairs, property insurance, and food consumed in the home. Clothing, education, medical care, vacations, and transportation are not included in this particular home-cost test.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-077",
    "domain": 1,
    "topic": "HOH qualifying person",
    "coveredSources": [
      "v1-446",
      "v1-447",
      "v1-448",
      "v1-449",
      "v1-450",
      "v1-451",
      "v1-452",
      "v1-453",
      "v1-454",
      "v1-455"
    ],
    "q": "A taxpayer pays more than half the cost of maintaining a separate home for the taxpayer's dependent mother. The mother lives in that home all year. Assuming all other requirements are met, may the taxpayer potentially qualify as Head of Household?",
    "choices": [
      "No, because the mother did not live with the taxpayer",
      "Yes, because a dependent parent is a special exception to the usual residence rule",
      "No, because only children can be qualifying persons",
      "Yes, but only if the mother is under age 65"
    ],
    "answer": 1,
    "explanation": "A dependent parent can be a qualifying person for Head of Household even if the parent does not live with the taxpayer, if the taxpayer pays more than half the cost of keeping up the parent's main home and the other requirements are met.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-078",
    "domain": 1,
    "topic": "Qualifying surviving spouse",
    "coveredSources": [
      "v1-456",
      "v1-457",
      "v1-458",
      "v1-459",
      "v1-460",
      "v1-461",
      "v1-462",
      "v1-463",
      "v1-464",
      "v1-465",
      "v1-466",
      "v1-467",
      "v1-468",
      "v1-469"
    ],
    "q": "A taxpayer's spouse died in 2024. The taxpayer did not remarry, has a qualifying child living in the home all year, and pays more than half the cost of keeping up the home. Assuming the remaining requirements are met, which filing status may be available for 2025?",
    "choices": [
      "Married Filing Jointly with the deceased spouse",
      "Qualifying Surviving Spouse",
      "Married Filing Separately only",
      "Single only"
    ],
    "answer": 1,
    "explanation": "Qualifying Surviving Spouse can generally be used for the two years following the year of a spouse's death if the statutory requirements are met.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-079",
    "domain": 5,
    "topic": "Filing-status planning",
    "coveredSources": [
      "v1-477",
      "v1-479",
      "v1-480",
      "v1-481",
      "v1-482"
    ],
    "q": "Why might married taxpayers choose Married Filing Separately even when a joint return would produce a lower combined income tax?",
    "choices": [
      "To avoid all federal filing requirements",
      "Nontax considerations or concern about joint liability may outweigh the additional tax cost",
      "MFS always qualifies for more credits",
      "MFS eliminates Social Security and Medicare taxes"
    ],
    "answer": 1,
    "explanation": "Taxpayers may choose separate returns for liability, divorce, student-loan, privacy, or other planning reasons even when the combined income tax is higher.",
    "reference": "PSI Part 1 outline 5A13; IRS Publication 501"
  },
  {
    "id": "audit-v1-080",
    "domain": 1,
    "topic": "Dependent definition",
    "coveredSources": [
      "v1-493",
      "v1-494",
      "v1-495",
      "v1-502"
    ],
    "q": "For federal income tax purposes, a dependent must generally qualify as:",
    "choices": [
      "Either a qualifying child or a qualifying relative",
      "Only the taxpayer's biological child",
      "Only a person under age 19",
      "Any person receiving more than $1,000 of support"
    ],
    "answer": 0,
    "explanation": "A dependent is generally a qualifying child or qualifying relative. The terms have specific tests and do not necessarily require a biological parent-child relationship.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-081",
    "domain": 1,
    "topic": "Dependent taxpayer rule",
    "coveredSources": [
      "v1-497",
      "v1-498"
    ],
    "q": "A taxpayer can be claimed as another person's dependent. Which statement is generally correct?",
    "choices": [
      "The taxpayer can freely claim dependents of their own",
      "The taxpayer generally cannot claim another person as a dependent",
      "The rule applies only if the taxpayer is under age 18",
      "The taxpayer may claim a dependent only if filing Head of Household"
    ],
    "answer": 1,
    "explanation": "A person who can be claimed as another taxpayer's dependent generally cannot claim someone else as a dependent.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-082",
    "domain": 1,
    "topic": "Joint return test",
    "coveredSources": [
      "v1-499",
      "v1-500",
      "v1-514"
    ],
    "q": "Maria otherwise qualifies as her parents' dependent. She and her spouse file a joint return only to claim a refund of withholding, and neither spouse would owe tax on separate returns. Does the joint-return test necessarily prevent Maria from being claimed?",
    "choices": [
      "Yes, filing any joint return always prevents dependency",
      "No, the refund-only exception can apply",
      "Yes, unless Maria is under age 19",
      "No, but only if Maria has no earned income"
    ],
    "answer": 1,
    "explanation": "The joint-return test has a refund-only exception when the couple files jointly only to claim a refund of withheld or estimated tax and neither spouse would have a tax liability on separate returns.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-083",
    "domain": 1,
    "topic": "Dependent citizenship",
    "coveredSources": [
      "v1-501"
    ],
    "q": "Which person can generally satisfy the citizenship or residency test for dependency, assuming the other requirements are met?",
    "choices": [
      "A U.S. citizen, U.S. resident alien, U.S. national, or resident of Canada or Mexico",
      "Only a U.S. citizen",
      "Only a U.S. citizen or green-card holder",
      "Any person living anywhere in the world"
    ],
    "answer": 0,
    "explanation": "The dependency citizenship/residency test generally allows a U.S. citizen, U.S. resident alien, U.S. national, or a resident of Canada or Mexico, subject to special rules.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-084",
    "domain": 1,
    "topic": "Qualifying child relationship",
    "coveredSources": [
      "v1-503",
      "v1-504",
      "v1-505"
    ],
    "q": "Which person can satisfy the relationship test to be a taxpayer's qualifying child?",
    "choices": [
      "A niece who is the taxpayer's sister's daughter",
      "An unrelated roommate",
      "A parent's friend",
      "A business partner"
    ],
    "answer": 0,
    "explanation": "A qualifying child can be a child, stepchild, foster child, sibling, half sibling, stepsibling, or a descendant of one of those persons, such as a grandchild, niece, or nephew.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-085",
    "domain": 1,
    "topic": "Qualifying child age",
    "coveredSources": [
      "v1-506",
      "v1-507",
      "v1-508",
      "v1-509"
    ],
    "q": "A taxpayer's 22-year-old son is a full-time student, is younger than the taxpayer, and otherwise meets the qualifying-child tests. Which age rule applies?",
    "choices": [
      "He fails because every qualifying child must be under 19",
      "He can satisfy the student age test because he is under 24",
      "He qualifies only if he has no income",
      "He qualifies only if he is married"
    ],
    "answer": 1,
    "explanation": "A full-time student generally satisfies the qualifying-child age test if under age 24 at year-end and younger than the taxpayer. A permanently and totally disabled person can qualify without regard to age.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-086",
    "domain": 1,
    "topic": "Qualifying child residence and support",
    "coveredSources": [
      "v1-510",
      "v1-511",
      "v1-512",
      "v1-513"
    ],
    "q": "Which statement about a qualifying child's support test is correct?",
    "choices": [
      "The child must provide more than half of their own support",
      "The child must not provide more than half of their own support",
      "The taxpayer must provide 100% of the child's support",
      "A child's earned income automatically disqualifies the child"
    ],
    "answer": 1,
    "explanation": "For the qualifying-child support test, the child must not have provided more than half of their own support. Income by itself does not determine the result; how support was actually provided matters.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-087",
    "domain": 1,
    "topic": "Qualifying relative",
    "coveredSources": [
      "v1-515",
      "v1-516",
      "v1-517",
      "v1-520",
      "v1-521"
    ],
    "q": "For 2025, which requirement generally applies to a qualifying relative?",
    "choices": [
      "The person's gross income must be less than $5,200 and the taxpayer generally provides more than half of the person's support",
      "The person must be under age 24",
      "The person must always live with the taxpayer",
      "The person must have no income at all"
    ],
    "answer": 0,
    "explanation": "A qualifying relative generally must satisfy the not-a-qualifying-child test, relationship/member-of-household test, gross-income test, and support test. For 2025, the gross-income limit is less than $5,200.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-088",
    "domain": 1,
    "topic": "Qualifying relative relationship",
    "coveredSources": [
      "v1-522",
      "v1-523",
      "v1-524",
      "v1-525",
      "v1-526",
      "v1-527",
      "v1-528",
      "v1-529",
      "v1-530",
      "v1-531"
    ],
    "q": "Which statement about the qualifying-relative relationship test is correct?",
    "choices": [
      "Certain in-law relationships continue for this purpose even after divorce or death",
      "Only blood relatives can satisfy the relationship test",
      "A parent must live with the taxpayer all year",
      "An aunt or uncle can never be a qualifying relative"
    ],
    "answer": 0,
    "explanation": "The listed qualifying-relative relationships include children, siblings, parents, grandparents, nieces, nephews, aunts, uncles, and specified in-laws. Relationships established by marriage are not ended by death or divorce for this test.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-089",
    "domain": 1,
    "topic": "Support test",
    "coveredSources": [
      "v1-532",
      "v1-533",
      "v1-534",
      "v1-535",
      "v1-536",
      "v1-537",
      "v1-538",
      "v1-539",
      "v1-540",
      "v1-541",
      "v1-542"
    ],
    "q": "Which item generally counts as support when determining whether a taxpayer provided more than half of a qualifying relative's support?",
    "choices": [
      "Fair rental value of lodging provided to the person",
      "Money the person saved and did not spend",
      "The taxpayer's federal income tax payment",
      "The taxpayer's retirement contribution"
    ],
    "answer": 0,
    "explanation": "Support includes food, lodging, clothing, education, medical and dental care, recreation, transportation, and similar necessities. Lodging is generally valued at fair rental value. A person's unused income or savings is not support until spent for support.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-090",
    "domain": 1,
    "topic": "Multiple support agreements",
    "coveredSources": [
      "v1-560",
      "v1-561",
      "v1-562",
      "v1-563",
      "v1-564",
      "v1-565",
      "v1-566"
    ],
    "q": "Several adult children together provide more than half of their parent's support, but no one child provides more than half. Under a qualifying multiple support agreement, how much support must the person claiming the parent generally have provided personally?",
    "choices": [
      "More than 5%",
      "More than 10%",
      "More than 25%",
      "More than 50%"
    ],
    "answer": 1,
    "explanation": "Under the multiple support rules, the person claiming the dependent generally must have provided more than 10% of total support and meet the other requirements. Form 2120 is used for the declaration.",
    "reference": "IRS Publication 501 (2025); Form 2120"
  },
  {
    "id": "audit-v1-091",
    "domain": 1,
    "topic": "Custodial parent",
    "coveredSources": [
      "v1-567",
      "v1-568",
      "v1-569"
    ],
    "q": "For the divorced or separated parent rules, the custodial parent is generally the parent:",
    "choices": [
      "With the higher AGI",
      "Who paid more child support",
      "With whom the child lived for the greater number of nights during the year",
      "Named first in the divorce decree"
    ],
    "answer": 2,
    "explanation": "The custodial parent is generally the parent with whom the child lived for the greater number of nights during the year, subject to tie-breaking rules.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-092",
    "domain": 1,
    "topic": "Form 8332",
    "coveredSources": [
      "v1-570",
      "v1-572",
      "v1-573",
      "v1-574",
      "v1-575",
      "v1-576",
      "v1-577"
    ],
    "q": "A custodial parent releases the claim to a child so the noncustodial parent may claim the child for applicable dependency-related benefits. Which form is generally used for a post-2008 release?",
    "choices": [
      "Form 2120",
      "Form 8332",
      "Form 2441",
      "Form 8867"
    ],
    "answer": 1,
    "explanation": "Form 8332 is generally used by the custodial parent to release the claim to the noncustodial parent. Special rules can apply to certain pre-2009 divorce decrees.",
    "reference": "IRS Publication 501 (2025); Form 8332"
  },
  {
    "id": "audit-v1-093",
    "domain": 1,
    "topic": "Benefits retained by custodial parent",
    "coveredSources": [
      "v1-578",
      "v1-579",
      "v1-580",
      "v1-581",
      "v1-582"
    ],
    "q": "A custodial parent signs Form 8332 releasing the child to the noncustodial parent. Which benefit can the custodial parent generally still use the child for if the requirements are met?",
    "choices": [
      "Head of Household filing status",
      "The noncustodial parent's Child Tax Credit",
      "A second Child Tax Credit for the same child",
      "A second dependency claim for the same child"
    ],
    "answer": 0,
    "explanation": "The release does not transfer Head of Household, Earned Income Credit, or child/dependent care treatment to the noncustodial parent. Those benefits generally remain with the custodial parent if the applicable requirements are met.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-094",
    "domain": 1,
    "topic": "Qualifying child tiebreaker",
    "coveredSources": [
      "v1-583",
      "v1-584",
      "v1-585",
      "v1-586",
      "v1-587",
      "v1-588",
      "v1-589",
      "v1-590",
      "v1-591",
      "v1-595"
    ],
    "q": "Both parents claim the same qualifying child. The child lived with one parent for 210 nights and the other for 155 nights. Under the qualifying-child tiebreaker rules, who generally has priority?",
    "choices": [
      "The parent with whom the child lived for more nights",
      "The parent with the lower AGI",
      "The parent who filed first",
      "The parent who paid more federal income tax"
    ],
    "answer": 0,
    "explanation": "When both parents claim the same child, the parent with whom the child lived for the greater number of nights generally has priority. If nights are equal, the higher-AGI parent generally wins.",
    "reference": "IRS Publication 501 (2025)"
  },
  {
    "id": "audit-v1-095",
    "domain": 3,
    "topic": "Child Tax Credit",
    "coveredSources": [
      "v1-593"
    ],
    "q": "What is the maximum 2025 Child Tax Credit per qualifying child before phaseouts and other limitations?",
    "choices": [
      "$500",
      "$1,700",
      "$2,000",
      "$2,200"
    ],
    "answer": 3,
    "explanation": "For 2025, the maximum Child Tax Credit is $2,200 per qualifying child, subject to eligibility and phaseout rules.",
    "reference": "2025 Form 1040 Instructions"
  },
  {
    "id": "audit-v1-096",
    "domain": 1,
    "topic": "Digital assets",
    "coveredSources": [
      "v1-601",
      "v1-602"
    ],
    "q": "Which transaction generally requires a taxpayer to answer “Yes” to the digital-asset question on Form 1040?",
    "choices": [
      "Merely holding a digital asset in a wallet all year without a transaction",
      "Selling digital currency for cash",
      "Transferring digital assets between wallets owned by the same taxpayer with no other disposition",
      "Buying digital currency with U.S. dollars and doing nothing else, if no other reportable digital-asset event occurred"
    ],
    "answer": 1,
    "explanation": "Selling, exchanging, gifting, or otherwise disposing of a digital asset generally requires a “Yes” response. Merely holding a digital asset or certain purchases/transfers without a disposition generally do not by themselves require “Yes.”",
    "reference": "2025 Form 1040 Instructions"
  }
]
};
const EA_AUDIT_BATCH_2_REVIEWED = new Set(["v1-221","v1-222","v1-223","v1-224","v1-225","v1-226","v1-227","v1-228","v1-229","v1-230","v1-231","v1-232","v1-233","v1-234","v1-235","v1-236","v1-237","v1-238","v1-239","v1-240","v1-241","v1-242","v1-243","v1-244","v1-245","v1-246","v1-247","v1-248","v1-249","v1-250","v1-251","v1-252","v1-253","v1-254","v1-255","v1-256","v1-257","v1-258","v1-259","v1-260","v1-261","v1-262","v1-263","v1-264","v1-265","v1-266","v1-267","v1-268","v1-269","v1-270","v1-271","v1-272","v1-273","v1-274","v1-275","v1-276","v1-277","v1-278","v1-279","v1-280","v1-281","v1-282","v1-283","v1-284","v1-285","v1-286","v1-287","v1-288","v1-289","v1-290","v1-291","v1-292","v1-293","v1-294","v1-295","v1-296","v1-297","v1-298","v1-299","v1-300","v1-301","v1-302","v1-303","v1-304","v1-305","v1-306","v1-307","v1-308","v1-309","v1-310","v1-311","v1-312","v1-313","v1-314","v1-315","v1-316","v1-317","v1-318","v1-319","v1-320","v1-321","v1-322","v1-323","v1-324","v1-325","v1-326","v1-327","v1-328","v1-329","v1-330","v1-331","v1-332","v1-333","v1-334","v1-335","v1-336","v1-337","v1-338","v1-339","v1-340","v1-341","v1-342","v1-343","v1-344","v1-345","v1-346","v1-347","v1-348","v1-349","v1-350","v1-351","v1-352","v1-353","v1-354","v1-355","v1-356","v1-357","v1-358","v1-359","v1-360","v1-361","v1-362","v1-363","v1-364","v1-365","v1-366","v1-367","v1-368","v1-369","v1-370","v1-371","v1-372","v1-373","v1-374","v1-375","v1-376","v1-377","v1-378","v1-379","v1-380","v1-381","v1-382","v1-383","v1-384","v1-385","v1-386","v1-387","v1-388","v1-389","v1-390","v1-391","v1-392","v1-393","v1-394","v1-395","v1-396","v1-397","v1-398","v1-399","v1-400","v1-401","v1-402","v1-403","v1-404","v1-405","v1-406","v1-407","v1-408","v1-409","v1-410","v1-411","v1-412","v1-413","v1-414","v1-415","v1-416","v1-417","v1-418","v1-419","v1-420","v1-421","v1-422","v1-423","v1-424","v1-425","v1-426","v1-427","v1-428","v1-429","v1-430","v1-431","v1-432","v1-433","v1-434","v1-435","v1-436","v1-437","v1-438","v1-439","v1-440","v1-441","v1-442","v1-443","v1-444","v1-445","v1-446","v1-447","v1-448","v1-449","v1-450","v1-451","v1-452","v1-453","v1-454","v1-455","v1-456","v1-457","v1-458","v1-459","v1-460","v1-461","v1-462","v1-463","v1-464","v1-465","v1-466","v1-467","v1-468","v1-469","v1-470","v1-471","v1-472","v1-473","v1-474","v1-475","v1-476","v1-477","v1-478","v1-479","v1-480","v1-481","v1-482","v1-483","v1-484","v1-485","v1-486","v1-487","v1-488","v1-489","v1-490","v1-491","v1-492","v1-493","v1-494","v1-495","v1-496","v1-497","v1-498","v1-499","v1-500","v1-501","v1-502","v1-503","v1-504","v1-505","v1-506","v1-507","v1-508","v1-509","v1-510","v1-511","v1-512","v1-513","v1-514","v1-515","v1-516","v1-517","v1-518","v1-519","v1-520","v1-521","v1-522","v1-523","v1-524","v1-525","v1-526","v1-527","v1-528","v1-529","v1-530","v1-531","v1-532","v1-533","v1-534","v1-535","v1-536","v1-537","v1-538","v1-539","v1-540","v1-541","v1-542","v1-543","v1-544","v1-545","v1-546","v1-547","v1-548","v1-549","v1-550","v1-551","v1-552","v1-553","v1-554","v1-555","v1-556","v1-557","v1-558","v1-559","v1-560","v1-561","v1-562","v1-563","v1-564","v1-565","v1-566","v1-567","v1-568","v1-569","v1-570","v1-571","v1-572","v1-573","v1-574","v1-575","v1-576","v1-577","v1-578","v1-579","v1-580","v1-581","v1-582","v1-583","v1-584","v1-585","v1-586","v1-587","v1-588","v1-589","v1-590","v1-591","v1-592","v1-593","v1-594","v1-595","v1-596","v1-597","v1-598","v1-599","v1-600","v1-601","v1-602","v1-603","v1-604","v1-605","v1-606","v1-607","v1-608"]);
const EA_AUDIT_BATCH_2_COVERED = new Set(EA_AUDIT_BATCH_2.questions.flatMap(q=>q.coveredSources||[]));
const EA_AUDIT_BATCH_2_EXCLUDED = new Set([...EA_AUDIT_BATCH_2_REVIEWED].filter(id=>!EA_AUDIT_BATCH_2_COVERED.has(id)));
