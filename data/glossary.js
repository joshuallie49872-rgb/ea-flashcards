const EA_GLOSSARY = {
  "AGI": { name: "Adjusted Gross Income", meaning: "Gross income minus certain adjustments. Many deductions, credits, and phaseouts use AGI." },
  "MAGI": { name: "Modified Adjusted Gross Income", meaning: "AGI modified by adding back or changing certain items for a specific tax rule." },
  "MFJ": { name: "Married Filing Jointly", meaning: "A filing status for married taxpayers who file one joint federal return." },
  "MFS": { name: "Married Filing Separately", meaning: "A filing status for married taxpayers who file separate federal returns." },
  "HOH": { name: "Head of Household", meaning: "A filing status generally requiring an unmarried taxpayer to maintain a home for a qualifying person." },
  "QSS": { name: "Qualifying Surviving Spouse", meaning: "A filing status that can allow certain widowed taxpayers to use joint-return tax rates for a limited period." },
  "QBI": { name: "Qualified Business Income", meaning: "Certain net income from a qualified trade or business used to calculate the section 199A deduction." },
  "SSTB": { name: "Specified Service Trade or Business", meaning: "Certain service businesses, such as health, law, accounting, consulting, athletics, and financial services, that face special QBI deduction limits at higher income levels." },
  "UBIA": { name: "Unadjusted Basis Immediately After Acquisition", meaning: "Generally the original tax basis of qualified property when acquired, before depreciation; used in one QBI wage/property limitation." },
  "W-2": { name: "Form W-2, Wage and Tax Statement", meaning: "The form an employer generally gives an employee showing wages and taxes withheld." },
  "EITC": { name: "Earned Income Tax Credit", meaning: "A refundable credit for eligible workers and families with earned income, subject to income and other rules." },
  "EIC": { name: "Earned Income Credit", meaning: "Another common abbreviation for the Earned Income Tax Credit (EITC)." },
  "CTC": { name: "Child Tax Credit", meaning: "A credit for qualifying children who meet age, relationship, identification, residency, and other requirements." },
  "ODC": { name: "Credit for Other Dependents", meaning: "A generally nonrefundable credit for certain dependents who do not qualify for the Child Tax Credit." },
  "AOTC": { name: "American Opportunity Tax Credit", meaning: "An education credit for qualified expenses during the first four years of postsecondary education, subject to eligibility rules." },
  "LLC": { name: "Lifetime Learning Credit", meaning: "In education-credit questions, LLC means Lifetime Learning Credit. In business-law contexts, LLC can instead mean limited liability company." },
  "PTC": { name: "Premium Tax Credit", meaning: "A refundable credit that helps eligible taxpayers pay premiums for Marketplace health coverage." },
  "APTC": { name: "Advance Payments of the Premium Tax Credit", meaning: "Premium Tax Credit amounts paid in advance to an insurer and later reconciled on the tax return." },
  "HSA": { name: "Health Savings Account", meaning: "A tax-advantaged account generally available to eligible individuals covered by a qualifying high-deductible health plan." },
  "HDHP": { name: "High-Deductible Health Plan", meaning: "A health plan meeting IRS deductible and out-of-pocket requirements, often relevant to HSA eligibility." },
  "FSA": { name: "Flexible Spending Arrangement", meaning: "An employer-sponsored arrangement allowing certain expenses to be paid with pre-tax dollars." },
  "HRA": { name: "Health Reimbursement Arrangement", meaning: "An employer-funded arrangement that reimburses employees for qualifying medical expenses under applicable rules." },
  "IRA": { name: "Individual Retirement Arrangement", meaning: "A tax-advantaged retirement account or annuity, including traditional and Roth IRAs." },
  "RMD": { name: "Required Minimum Distribution", meaning: "A minimum amount that generally must be withdrawn from certain retirement accounts after the applicable starting age." },
  "QCD": { name: "Qualified Charitable Distribution", meaning: "A qualifying direct transfer from an IRA to an eligible charity that can be excluded from income and may count toward an RMD." },
  "QDRO": { name: "Qualified Domestic Relations Order", meaning: "A court order that can assign certain retirement-plan benefits to a spouse, former spouse, child, or other dependent." },
  "SEP": { name: "Simplified Employee Pension", meaning: "An IRA-based retirement plan commonly used by self-employed individuals and small businesses." },
  "SIMPLE": { name: "Savings Incentive Match Plan for Employees", meaning: "A retirement plan designed for eligible small employers and their employees." },
  "AMT": { name: "Alternative Minimum Tax", meaning: "A parallel tax calculation that limits the benefit of certain deductions, exclusions, and preference items." },
  "NIIT": { name: "Net Investment Income Tax", meaning: "A 3.8% tax that may apply to certain net investment income of taxpayers above specified income thresholds." },
  "FICA": { name: "Federal Insurance Contributions Act", meaning: "The law imposing Social Security and Medicare payroll taxes on employees and employers." },
  "FUTA": { name: "Federal Unemployment Tax Act", meaning: "The federal employer tax used to help fund unemployment compensation programs." },
  "SECA": { name: "Self-Employment Contributions Act", meaning: "The law imposing Social Security and Medicare taxes on net earnings from self-employment." },
  "RRTA": { name: "Railroad Retirement Tax Act", meaning: "The payroll-tax system that finances railroad retirement benefits." },
  "FBAR": { name: "Report of Foreign Bank and Financial Accounts", meaning: "FinCEN Form 114, used by certain U.S. persons to report qualifying foreign financial accounts." },
  "FATCA": { name: "Foreign Account Tax Compliance Act", meaning: "Federal law requiring certain foreign financial asset reporting and related compliance." },
  "ITIN": { name: "Individual Taxpayer Identification Number", meaning: "An IRS tax-processing number for certain people who need a U.S. taxpayer ID but are not eligible for an SSN." },
  "SSN": { name: "Social Security Number", meaning: "A taxpayer identification number issued by the Social Security Administration to eligible individuals." },
  "FLSA": { name: "Fair Labor Standards Act", meaning: "Federal labor law governing matters including minimum wage and overtime; relevant to the qualified overtime deduction." },
  "FMV": { name: "Fair Market Value", meaning: "The price property would generally change hands for between a willing buyer and willing seller, neither under compulsion and both informed." },
  "NOL": { name: "Net Operating Loss", meaning: "A tax loss generally arising when allowable business deductions exceed business income, subject to special carryforward rules." },
  "SALT": { name: "State and Local Taxes", meaning: "State and local income or sales taxes plus certain property taxes that may be deductible on Schedule A, subject to a cap." },
  "MACRS": { name: "Modified Accelerated Cost Recovery System", meaning: "The main federal tax depreciation system for most tangible property placed in service after 1986." },
  "GDS": { name: "General Depreciation System", meaning: "The primary MACRS depreciation system used for most property unless ADS is required or elected." },
  "ADS": { name: "Alternative Depreciation System", meaning: "A generally slower depreciation method required for certain property or available by election in some cases." },
  "FEIE": { name: "Foreign Earned Income Exclusion", meaning: "An exclusion that may allow qualifying taxpayers abroad to exclude a limited amount of foreign earned income." },
  "FTC": { name: "Foreign Tax Credit", meaning: "A credit that may reduce U.S. income tax for qualifying foreign income taxes paid or accrued." },
  "QTP": { name: "Qualified Tuition Program", meaning: "A tax-advantaged education program commonly known as a 529 plan." }
};

function eaGlossaryTermsInText(text) {
  const found = [];
  const source = String(text || "");
  Object.keys(EA_GLOSSARY)
    .sort((a,b) => b.length - a.length)
    .forEach(term => {
      const escaped = term.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      const re = new RegExp("(^|[^A-Za-z0-9])" + escaped + "(?=$|[^A-Za-z0-9])", "i");
      if (re.test(source) && !found.includes(term)) found.push(term);
    });
  return found;
}
