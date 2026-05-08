/* ============================================
   THE DISPUTE PLAYBOOK — Application Logic
   Data + rendering + interactivity
   ============================================ */

const SECTIONS = [
  { id: 'laws', name: 'Legal', icon: '⚖️', desc: 'Plain-language summaries of FCRA, FDCPA, CROA, and the consumer rights you can invoke during a dispute.', cls: 'sec-laws' },
  { id: 'templates', name: 'Templates', icon: '✉️', desc: 'All 17 dispute letters in the Playbook, when to send each, what they do, and the leverage they create.', cls: 'sec-templates' },
  { id: 'bureau', name: 'Bureau Responses', icon: '📋', desc: '10 of the most common bureau responses with realistic samples. Recognize the pattern, know the next move.', cls: 'sec-bureau' },
  { id: 'process', name: 'Dispute Process', icon: '🧭', desc: 'Phases, timelines, certified mail rules, and the mechanics that keep your paper trail bulletproof.', cls: 'sec-process' },
  { id: 'strategy', name: 'Strategy', icon: '🎯', desc: 'Utilization, mortgage scoring, age of accounts. The scoring stuff most people guess at.', cls: 'sec-strategy' },
  { id: 'banking', name: 'Banking', icon: '🏦', desc: 'ChexSystems, second-chance accounts, Reg E protections, and the relationships your bank has with the credit system.', cls: 'sec-banking' }
];

const EXPLAINERS = {
  all: '<strong>Welcome to The Dispute Playbook.</strong> Choose a section below to dive in, or use the search bar to find anything across the system.',
  laws: '<strong>The federal statutes that protect you.</strong> Plain-language summaries of FCRA, FDCPA, CROA, and the consumer rights you can invoke during a dispute.',
  templates: '<strong>The Credit Academy Dispute Playbook letters.</strong> All 17 templates, when to send each, what they do, and the leverage they create.',
  bureau: '<strong>What the bureaus actually send back.</strong> 10 of the most common responses with realistic samples. Recognize the pattern, know the next move.',
  process: '<strong>The DIY process mechanics.</strong> Phases, timelines, certified mail rules, escalation paths, how to keep your paper trail bulletproof.',
  strategy: '<strong>How to think about scoring and credit health.</strong> Utilization, mortgage scoring, age of accounts, the stuff most people guess at.',
  banking: '<strong>Banking knowledge most people miss.</strong> ChexSystems, second-chance accounts, Reg E fraud protection, and how your bank relates to the credit system.'
};

const CARDS = [
  // ====== LEGAL ======
  { id: 1, section: 'laws', catLabel: 'Legal', title: 'FCRA — Your right to accuracy', cite: '15 U.S.C. § 1681 et seq.', citeSummary: 'The Fair Credit Reporting Act. The foundational federal law that gives you the right to dispute anything inaccurate, incomplete, or unverifiable on your credit report.', hook: 'The law that powers every dispute you will ever send.', whenToUse: ['Every time you dispute something on your credit report', 'When demanding a complete copy of your file from a bureau', 'When challenging an unauthorized inquiry (permissible purpose)', 'When suing a bureau or furnisher for procedural violations'], facts: 'Negligent violations: actual damages plus attorney fees (§ 1681o). Willful violations: $100 to $1,000 per violation, plus punitive damages (§ 1681n). Statute of limitations: 2 years from discovery, 5 from violation.', watchOut: 'The bureaus rely on consumers not knowing their rights. The moment you cite the statute by section number, the conversation changes. Robotic e-OSCAR responses stop. A human reviews the file.', teaching: 'Always cite the specific section in your letter. Always send certified mail with return receipt. Online disputes give the bureau procedural advantages and leave a weaker paper trail.' },
  { id: 2, section: 'laws', catLabel: 'Legal', title: 'FDCPA — Your rights vs. collectors', cite: '15 U.S.C. § 1692 et seq.', citeSummary: 'The Fair Debt Collection Practices Act. Federal law that limits what third-party debt collectors can do, when they can contact you, and what they have to prove before they collect.', hook: 'Validation. Cease and desist. $1,000 statutory damages.', whenToUse: ['When a third-party collector contacts you', 'When you need them to validate the debt before paying', 'When you want to stop collection harassment', 'When suing for FDCPA violations'], facts: 'Collector must send a validation notice within 5 days of first contact. You have 30 days to dispute. Statutory damages: up to $1,000 per lawsuit. SOL: 1 year from violation.', watchOut: 'FDCPA only applies to third-party collectors, not original creditors. State laws may protect you against original creditors though. Always check your state.', teaching: 'Once you dispute under FDCPA, the collector cannot keep reporting to credit bureaus without noting it as "in dispute." Failure to do so is a separate violation under FCRA § 1681s-2.' },
  { id: 3, section: 'laws', catLabel: 'Legal', title: 'CROA — Service scam protection', cite: '15 U.S.C. § 1679 et seq.', citeSummary: 'CROA is the federal consumer protection law that regulates certain paid reporting-services companies and protects you from predatory practices in the industry.', hook: 'No upfront fees. Written contract. 3-day cancellation right.', whenToUse: ['Before signing any contract with a credit cleanup company', 'When you suspect a credit cleanup scam', 'When you need to cancel a credit cleanup contract', 'When suing a credit cleanup company that violated CROA'], facts: 'No payment until services are fully rendered. 3 business days to cancel any contract. Written contract required. File segregation (CPN fraud) is explicitly prohibited.', watchOut: 'Even nonprofits and law firms bundling credit cleanup with other services can fall under CROA. The "we are not technically a credit cleanup company" defense often fails.', teaching: 'If scammed: cancel within 3 days, demand refund, file with FTC and state AG, file with CFPB, sue under § 1679g. Damages include actual, punitive, and attorney fees.' },

  // ====== TEMPLATES — Letters 1 to 5 (full content) ======
  { id: 101, section: 'templates', catLabel: 'Letter 1', title: 'Personal information dispute', cite: 'The Credit Academy Dispute Playbook · Letter 1', citeSummary: 'The opening template that cleans up your personal information section before any account dispute. Foundation work that makes everything that follows stronger.', hook: 'Phase 1 starts here. Clean the personal info before you touch the accounts.', whenToUse: ['As the very first letter in any DIY credit cleanup process', 'When your report shows old addresses, misspelled names, wrong employers', 'Before any account dispute', 'Send to all three bureaus the same week'], facts: 'Personal info is bureau-verified data. Cleaning it first removes the easy verification anchors and forces the bureaus to do real work in later rounds.', watchOut: 'Bureaus often respond claiming they cannot remove personal information that current creditors are reporting. True only for actively reporting creditors. The follow-up letter handles this.', teaching: 'This letter is procedural. The point is foundation. By the time you send Round 2 account disputes, the bureau has fewer ways to confirm accounts against your file.', assets: { letter: 'placeholder' } },
  { id: 102, section: 'templates', catLabel: 'Letter 2', title: 'Current creditor information update', cite: 'The Credit Academy Dispute Playbook · Letter 2', citeSummary: 'Sent directly to your current active creditors to update their reporting before the bureau dispute round.', hook: 'Tell your current creditors what to report so the bureaus cannot use them as anchors.', whenToUse: ['After Letter 1', 'On every active credit account you have open', 'About 2 weeks before sending Round 1 account disputes', 'When any current accounts show outdated info'], facts: 'Send to every active creditor: full legal name, current address, current phone, last 4 of SSN. Request they update their records and confirm in writing.', watchOut: 'Some creditors require additional verification before updating. Send a copy of your ID and a recent utility bill if needed. Do not skip the low-balance creditors.', teaching: 'This letter is the partner to Letter 1. Together they ensure your personal info section is clean across the entire file before you challenge an account.', assets: { letter: 'placeholder' } },
  { id: 103, section: 'templates', catLabel: 'Letter 3', title: 'Round 1 dispute (collections)', cite: 'The Credit Academy Dispute Playbook · Letter 3', citeSummary: 'The first account-level dispute, focused on collection accounts only. Establishes the formal dispute record under FCRA § 1681i.', hook: 'The opener for accounts. Collections only.', whenToUse: ['After Letters 1 and 2 are complete', 'When you have collection accounts to challenge', 'BEFORE any other account dispute', 'Send to all three bureaus the same week'], facts: 'Always include: date, full legal name, current address, last 4 of SSN, copy of ID, list of disputed items with account numbers. Send certified mail.', watchOut: 'Do NOT include charge-offs in this letter. Charge-offs come later in the process. Mixing them weakens the leverage on each.', teaching: 'Round 1 is procedural. Do not expect deletions. The point is to start the FCRA clock and build your paper trail.', assets: { letter: 'placeholder' } },
  { id: 104, section: 'templates', catLabel: 'Letter 4', title: 'Round 2 follow-up dispute', cite: 'The Credit Academy Dispute Playbook · Letter 4', citeSummary: 'The follow-up after Round 1 responses come in. Refines the dispute angle and signals you are not going away.', hook: 'They responded. Now you respond back. Round 2 is when leverage starts.', whenToUse: ['After receiving Round 1 responses', '30 days after Round 1 with no response (FCRA violation)', 'When you need to refine the dispute argument with new framing', 'Before escalating to MOV demand'], facts: 'Reference your Round 1 letter date and certified mail tracking number. Cite the bureau response and explain why it is insufficient. Use new framing if possible.', watchOut: 'Do not just send the same letter again. Bureaus mark duplicates and refuse to investigate. Each round needs new framing or new evidence.', teaching: 'The framing shift from "this is wrong" to "this is unverifiable" or "this is incomplete" matters legally and changes how the bureau has to respond.', assets: { letter: 'placeholder' } },
  { id: 105, section: 'templates', catLabel: 'Letter 5', title: 'Method of Verification demand', cite: 'FCRA § 1681i(a)(7) · Playbook Letter 5', citeSummary: 'The escalation template that demands the bureau disclose HOW they verified the disputed item.', hook: 'The bridge from Round 1 to deletion. Send after they "verify."', whenToUse: ['After receiving a "verified" or "remains" response', 'When you suspect e-OSCAR automated processing was used', 'Before escalating to a CFPB complaint', 'On any item where you want procedural pressure'], facts: 'Demand: name of person at furnisher who confirmed, date and method of contact, all documents reviewed, specific data fields confirmed.', watchOut: 'Bureaus often respond with a generic "we used standard procedures" answer. That is not compliance with § 1681i(a)(7). Push back.', teaching: 'When the bureau cannot produce the MOV detail, you have a procedural violation worth a CFPB complaint or civil suit.', assets: { letter: 'placeholder' } },

  // ====== TEMPLATES — Letters 6 to 17 (placeholders) ======
  { id: 106, section: 'templates', catLabel: 'Letter 6', draft: true, title: 'Direct furnisher dispute', cite: 'Playbook · Letter 6', citeSummary: 'Sent directly to the furnisher (creditor or collector) instead of the bureau. Bypasses bureau processing.' },
  { id: 107, section: 'templates', catLabel: 'Letter 7', draft: true, title: 'CFPB complaint escalation', cite: 'Playbook · Letter 7', citeSummary: 'Filed with the CFPB when the bureau or furnisher has violated FCRA. Forces a regulatory response with public record consequences.' },
  { id: 108, section: 'templates', catLabel: 'Letter 8', draft: true, title: 'State attorney general escalation', cite: 'Playbook · Letter 8', citeSummary: 'State-level escalation when federal complaints have not produced results.' },
  { id: 109, section: 'templates', catLabel: 'Letter 9', draft: true, title: 'Goodwill removal request', cite: 'Playbook · Letter 9', citeSummary: 'Relationship-based request to original creditors for removal of legitimate-but-old negative items.' },
  { id: 110, section: 'templates', catLabel: 'Letter 10', draft: true, title: 'Pay-for-delete negotiation', cite: 'Playbook · Letter 10', citeSummary: 'Negotiated agreement with collectors to delete the tradeline in exchange for payment. Get it in writing.' },
  { id: 111, section: 'templates', catLabel: 'Letter 11', draft: true, title: 'Debt validation demand (FDCPA)', cite: '15 U.S.C. § 1692g · Letter 11', citeSummary: 'Sent within 30 days of a collector\'s validation notice to demand proof of the debt.' },
  { id: 112, section: 'templates', catLabel: 'Letter 12', draft: true, title: 'Cease and desist (collectors)', cite: '15 U.S.C. § 1692c(c) · Letter 12', citeSummary: 'Stops a collector from contacting you further. Strategic use only.' },
  { id: 113, section: 'templates', catLabel: 'Letter 13', draft: true, title: 'Identity theft block (FCRA 605B)', cite: '15 U.S.C. § 1681c-2 · Letter 13', citeSummary: 'Forces a 4-business-day block of fraudulent items when you are an identity theft victim.' },
  { id: 114, section: 'templates', catLabel: 'Letter 14', draft: true, title: 'Re-aging violation challenge', cite: 'FCRA § 1681c · Letter 14', citeSummary: 'Specific challenge for accounts where the date of first delinquency has been illegally reset.' },
  { id: 115, section: 'templates', catLabel: 'Letter 15', draft: true, title: 'Permissible purpose challenge', cite: 'FCRA § 1681b · Letter 15', citeSummary: 'Challenges unauthorized credit pulls. $100 to $1,000 statutory damages per violation.' },
  { id: 116, section: 'templates', catLabel: 'Letter 16', draft: true, title: 'Public record correction', cite: 'FCRA § 1681c · Letter 16', citeSummary: 'Disputes incorrect or outdated public records (judgments, tax liens, bankruptcy details).' },
  { id: 117, section: 'templates', catLabel: 'Letter 17', draft: true, title: 'Final notice and intent to sue', cite: '15 U.S.C. § 1681n · Letter 17', citeSummary: 'The pre-litigation letter when all administrative remedies have been exhausted.' },

  // ====== BUREAU RESPONSES — 10 ======
  { id: 201, section: 'bureau', catLabel: 'Bureau Response', title: 'Verified as accurate', cite: 'Most common Round 1 response', citeSummary: 'The bureau\'s default response stating they confirmed the data with the furnisher. Almost always means automated e-OSCAR processing.', hook: 'This response means almost nothing.', whenToUse: ['When you recognize the "Verified" stamp on a Round 1 response', 'When the response has no detail about the verification process', 'When you need to recognize this pattern fast and move to Letter 5'], facts: 'Bureaus typically use "Verified as accurate" or "Information is accurate as reported." Both are e-OSCAR boilerplate.', watchOut: 'Do not treat this as a wall. This is the predicted Round 1 response in roughly 70% of cases.', teaching: 'When you see this response, the clock starts on your Round 2 timeline. They have on record that they "verified" with no method disclosed.', mockLetter: 'verified' },
  { id: 202, section: 'bureau', catLabel: 'Bureau Response', title: 'Frivolous or duplicative', cite: 'Common after multiple rounds', citeSummary: 'When the bureau refuses to investigate further, claiming the dispute is frivolous or duplicative.', hook: 'Sounds final. Often illegal.', whenToUse: ['When a bureau labels your dispute "frivolous"', 'When they refuse to reinvestigate after multiple rounds', 'When you have new information they have not addressed', 'Before escalating to CFPB'], facts: 'Under FCRA § 1681i(a)(3), they can only label a dispute "frivolous" with specific written reasons within 5 business days.', watchOut: 'If they refuse to reinvestigate without specific written reasons, that itself is an FCRA violation.', teaching: 'Respond with new evidence or arguments. That makes your dispute non-duplicative and resets their obligation.', mockLetter: 'frivolous' },
  { id: 203, section: 'bureau', catLabel: 'Bureau Response', title: 'Information updated', cite: 'The third bureau response', citeSummary: 'The bureau changed something on the disputed account but did not delete it.', hook: 'They changed something. That change is your next dispute angle.', whenToUse: ['When a response says "information has been updated"', 'When account balances or status fields shift after a dispute', 'When you need to find the next deletion opportunity'], facts: 'When a bureau modifies an account during investigation, it confirms the prior reporting was incomplete or inaccurate.', watchOut: 'Most consumers ignore this response. They see "we changed something" and move on. That is exactly the wrong move.', teaching: 'Pull the original report and compare line by line. Document every changed field. Then dispute again citing the change as proof of prior inaccuracy.', mockLetter: 'updated' },
  { id: 204, section: 'bureau', catLabel: 'Bureau Response', title: 'Deleted', cite: 'The win', citeSummary: 'The disputed item is being removed. The work is not over.', hook: 'You won. Now lock the win in.', whenToUse: ['When a bureau confirms deletion', 'When you need to verify the deletion across all three bureaus', 'When teaching members what to do AFTER a successful dispute'], facts: 'Deletion at one bureau does not automatically delete at the others. Re-insertion is regulated under § 1681i(a)(5).', watchOut: 'Re-insertion happens. The bureau must notify you within 5 business days if a deleted item is re-inserted.', teaching: 'Pull a fresh report in 30 days, save the confirmation letter, check for re-insertion, and consider whether the same pattern exists on the other two bureaus.', mockLetter: 'deleted' },
  { id: 205, section: 'bureau', catLabel: 'Bureau Response', title: 'Cannot be located', cite: 'The "we cannot find this" response', citeSummary: 'The bureau states they cannot locate the disputed account in their records.', hook: 'They claim they cannot find it. That is either a win or a stall.', whenToUse: ['When the bureau claims the account is not in their system', 'When account numbers do not match what is on your report', 'When you need to determine whether this is deletion or deflection'], facts: 'If the account truly cannot be located, the bureau cannot continue to report it. That is a deletion by another name.', watchOut: 'Some bureaus use this response when account numbers in your dispute letter do not exactly match their internal numbering.', teaching: 'If the account is still showing on your follow-up report, send a new dispute with a screenshot showing the exact account info and demand they reconcile.', mockLetter: 'cannot_locate' },
  { id: 206, section: 'bureau', catLabel: 'Bureau Response', title: 'Identity not verified', cite: 'The identity stall', citeSummary: 'The bureau rejects your dispute claiming they could not verify your identity.', hook: 'They claim they cannot verify you.', whenToUse: ['When a dispute response asks for additional ID', 'When the bureau says they cannot match your information', 'Before resubmitting the dispute', 'When the response delays the FCRA timeline'], facts: 'Standard identity package: government-issued ID, recent utility bill or bank statement showing current address, last 4 SSN.', watchOut: 'Some bureaus use this response to reset the FCRA timeline. Push back. The clock starts when they receive a sufficient dispute.', teaching: 'If you sent ID and address proof and they still claim they cannot verify, that is a procedural violation. Document everything.', mockLetter: 'identity' },
  { id: 207, section: 'bureau', catLabel: 'Bureau Response', title: 'Public record cannot be modified', cite: 'The public record deflection', citeSummary: 'The bureau claims they cannot remove a public record because it is sourced from court records.', hook: 'They blame the courts. The bureau still has obligations.', whenToUse: ['When disputing bankruptcies, judgments, or tax liens', 'When the bureau cites "public record" as a reason not to investigate', 'After NCAP changes that removed most public records'], facts: 'Under NCAP, most civil judgments and tax liens were removed from credit reports starting 2017-2018. If yours still shows, the bureau likely has wrong information.', watchOut: 'Bureaus rely on third-party data vendors for public records. Errors in source data are common. Bureau is still required under § 1681i to investigate.', teaching: 'Contact the court directly to verify status, then dispute with documentation from the court itself contradicting the bureau\'s data.', mockLetter: 'public_record' },
  { id: 208, section: 'bureau', catLabel: 'Bureau Response', title: 'No error found', cite: 'The "we investigated" response', citeSummary: 'Slightly different from "verified as accurate." Designed to sound more thorough than it is.', hook: 'Sounds more thorough than verified. Usually is not.', whenToUse: ['When a response says "no errors found"', 'When the response uses softer language than "verified"', 'When the bureau wants to imply they did real investigation'], facts: 'Often comes after Round 2 or 3 disputes. Bureau\'s attempt to close the dispute thread without producing the MOV.', watchOut: 'The phrase "investigation complete" does not say what the investigation consisted of. That is your dispute angle.', teaching: 'Treat exactly like a "verified" response. Send the MOV demand. Softer language does not change FCRA obligations.', mockLetter: 'no_error' },
  { id: 209, section: 'bureau', catLabel: 'Bureau Response', title: 'Suspected credit cleanup organization', cite: 'The CRO accusation', citeSummary: 'The bureau accuses you of using a credit cleanup company and dismisses your dispute on that basis.', hook: 'They accuse you of using credit cleanup. The dispute is still valid.', whenToUse: ['When a dispute response references suspected CRO involvement', 'When dispute language is dismissed as "templated"', 'When you are doing 100% DIY and being treated as a CRO client'], facts: 'Bureaus have no legal authority to dismiss a dispute solely because they suspect a CRO is involved. FCRA § 1681i obligates investigation regardless.', watchOut: 'This response is designed to discourage you. Disputing your own report is your federal right under FCRA.', teaching: 'Respond plainly: state you are personally disputing items under FCRA § 1681i, that no third party prepared the dispute, and demand they proceed.', mockLetter: 'cro' },
  { id: 210, section: 'bureau', catLabel: 'Bureau Response', title: 'Furnisher did not respond', cite: 'The underrated win', citeSummary: 'When the furnisher does not respond within the FCRA window, the bureau MUST delete or modify.', hook: 'Furnisher silence equals deletion. The law is on your side.', whenToUse: ['When a disputed item silently disappears from your report', 'When the bureau notes "data furnisher response not received"', 'After a 30-day dispute window with no formal furnisher response'], facts: 'Under FCRA § 1681i(a)(5), if the furnisher does not verify within the window, the bureau must delete or modify. Statutory requirement.', watchOut: 'Bureaus do not always notify you when this happens. Pull a fresh report 30-45 days after every dispute to catch silent deletions.', teaching: 'If you suspect a silent deletion, save the deletion as proof. Documented proof of an FCRA-mandated deletion makes any re-insertion challenge much stronger.', mockLetter: 'no_response' },

  // ====== PROCESS ======
  { id: 301, section: 'process', catLabel: 'Process', title: 'The 6-Phase DIY journey', cite: 'The Credit Academy Dispute Playbook', citeSummary: 'The step-by-step DIY credit cleanup process, broken into six phases.', hook: 'Personal info → Round 1-2 → Final dispute → CFPB → Substantive → Cleanup.', whenToUse: ['When orienting a new member', 'When mapping where someone is stuck', 'When teaching what comes next after each phase', 'When designing course content'], facts: 'Phase 1: Personal Info Cleanup. Phase 2: Round 1+2. Phase 3: Final Bureau Disputes. Phase 4: External Complaints + Legal Action. Phase 5: Substantive Challenges. Phase 6: Prevent New Collections.', watchOut: 'Skipping Phase 1 is the most common mistake. Without it, every subsequent dispute has weaker legal standing.', teaching: 'The phases are not parallel. They are sequential. Members who try to compress them lose leverage and waste rounds.' },
  { id: 302, section: 'process', catLabel: 'Process', title: 'Certified mail rules', cite: 'FCRA dispute mechanics', citeSummary: 'How to send dispute letters in a way that creates an unbreakable paper trail.', hook: 'Certified mail with return receipt. Always.', whenToUse: ['For every single dispute letter you send', 'When you need proof of when the bureau received your letter', 'When you may need to sue or file a CFPB complaint later'], facts: 'USPS Certified Mail with Return Receipt costs about $7. The green return receipt card proves date of delivery.', watchOut: 'Online disputes give the bureau procedural advantages and weaker paper trails. Always mail.', teaching: 'Keep a dispute log: mail date, certified tracking number, delivered date, response date, response type. This log is your evidence.' },

  // ====== STRATEGY ======
  { id: 401, section: 'strategy', catLabel: 'Strategy', title: 'Utilization rules', cite: 'FICO and VantageScore weighting', citeSummary: 'How credit scoring models calculate the most controllable factor in your score: your credit card utilization ratio.', hook: 'Under 10% per card. Under 10% total.', whenToUse: ['When prepping for a credit application', 'When trying to maximize a score in a short window', 'When teaching what reports each month', 'When deciding whether to pay before or after statement closes'], facts: 'Statement balance is what reports, not your spending. 1 to 9% utilization scores higher than 0% in most models.', watchOut: 'Closing a card spikes utilization on the remaining cards. Sometimes worth keeping the old card open with a $0 balance.', teaching: 'Going from 70% to 35% utilization can move 30 to 60 points on a thin file. Pay down BEFORE the statement closes, not before the due date.' },

  // ====== BANKING ======
  { id: 501, section: 'banking', catLabel: 'Banking', title: 'ChexSystems — the banking credit report', cite: 'Consumer banking history reporting', citeSummary: 'A specialty consumer reporting agency that tracks your banking history.', hook: 'Banks pull this before they let you open an account.', whenToUse: ['When a member is denied for a checking or savings account', 'When teaching how to recover from past banking issues', 'When advising someone with a closed account', 'When prepping for first-time bank account approval'], facts: 'ChexSystems is regulated under FCRA. Free annual report at chexsystems.com. Negative items typically stay 5 years.', watchOut: 'Most people only check ChexSystems AFTER getting denied. Pull yours now if you have ever overdrafted or had an account closed.', teaching: 'You can dispute ChexSystems items the same way you dispute credit bureau items. Same statute, same procedure, same leverage.' },
  { id: 502, section: 'banking', catLabel: 'Banking', title: 'Second-chance banking accounts', cite: 'Banking after a ChexSystems hit', citeSummary: 'Account types designed for consumers with negative ChexSystems history.', hook: 'You are not locked out. You just need the right door.', whenToUse: ['When denied for a standard checking account', 'When someone has unresolved past banking debt', 'When rebuilding banking access while ChexSystems items age off', 'As a bridge product before applying for a regular account'], facts: 'Common providers: Chime, Varo, Current, Wells Fargo Opportunity Checking, BBVA Easy Checking. Most have monthly fees ($5-$15).', watchOut: 'Some second-chance accounts charge predatory fees. Avoid any account that charges for declined transactions or has a maintenance fee over $15.', teaching: 'After 12 months of clean activity, request to upgrade to a standard account.' },
  { id: 503, section: 'banking', catLabel: 'Banking', title: 'Bank fraud protection (Reg E)', cite: 'EFTA — 15 U.S.C. § 1693', citeSummary: 'Federal law that limits your liability for unauthorized electronic transfers from your bank account.', hook: 'Liability is capped. Banks must investigate fast.', whenToUse: ['When you spot an unauthorized debit, ACH, or transfer', 'When a debit card is lost, stolen, or used without permission', 'When the bank pushes back on a fraud claim'], facts: 'Liability if reported within 2 business days: $50 max. Within 60 days: $500 max. After 60 days: potentially unlimited. Bank must investigate within 10 business days.', watchOut: 'Banks often misquote these rules to discourage claims. Get the dispute in writing within 60 days. The 60-day clock starts when the statement is sent.', teaching: 'Always file fraud disputes in writing. Reference Regulation E. If the bank denies, escalate to CFPB and OCC or state regulator.' }
];

// ============ STATE ============

let activeSection = 'all';
let searchQuery = '';

// ============ HELPERS ============

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s == null ? '' : s;
  return d.innerHTML;
}

function getCategoryClass(section) {
  return { laws: 'cat-laws', templates: 'cat-templates', bureau: 'cat-bureau', strategy: 'cat-strategy', process: 'cat-process', banking: 'cat-banking' }[section] || 'cat-laws';
}

// ============ MOCK BUREAU LETTERS ============

function buildMockBureauLetter(type) {
  const today = new Date();
  const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const templates = {
    verified: { bureau: 'TransUnion', dept: 'Consumer Relations Department', ref: 'File No: 4471092384<br>Date: ' + date + '<br>Confirmation: 9847-2231-RT', body: 'We have received your dispute and completed our investigation of the item(s) you identified on your TransUnion credit report.', acct: [['Creditor:', 'PORTFOLIO RECOVERY ASSOC'], ['Account #:', 'XXXX1849'], ['Disputed Field:', 'Account Balance / Status']], result: 'RESULT: Verified as accurate. Item remains on report.', resultClass: '', tail: 'We contacted the data furnisher and they have confirmed that the information being reported is accurate. The disputed item will continue to be reported as listed.', footer: 'This response is provided in accordance with the Fair Credit Reporting Act. You may add a 100-word statement of dispute to your credit file.', annotation: 'They ran an automated e-OSCAR ping to the furnisher and got an automated reply. No human review. No documents exchanged. Your move: send Letter 5 demanding the Method of Verification under FCRA § 1681i(a)(7).' },
    frivolous: { bureau: 'Equifax', dept: 'Consumer Disputes Department', ref: 'Confirmation: EQ-2940187355<br>Date: ' + date + '<br>Reference: 88421-ND', body: 'Thank you for contacting Equifax. Upon review of your dispute submission, we have determined that the dispute does not warrant further investigation.', acct: [['Creditor:', 'CAPITAL ONE BANK USA'], ['Account #:', 'XXXX-XXXX-XXXX-3372'], ['Status:', 'Charged Off']], result: 'RESULT: Dispute deemed frivolous. No reinvestigation will be conducted.', resultClass: '', tail: 'Your dispute appears to be substantially similar to a previously submitted dispute. Pursuant to FCRA Section 611(a)(3), Equifax is not required to reinvestigate a dispute that is duplicative or frivolous.', footer: 'You may file complaints with the Consumer Financial Protection Bureau at consumerfinance.gov.', annotation: 'They are trying to shut you down. Under § 1681i(a)(3), they can only call a dispute frivolous with specific written reasons within 5 business days. Vague language without specifics is itself an FCRA violation.' },
    updated: { bureau: 'Experian', dept: 'Dispute Resolution Center', ref: 'Report No: 7783-2914<br>Date: ' + date + '<br>Case ID: EXP-44291', body: 'We have completed the investigation of your dispute. The following changes have been made to the disputed item on your Experian credit report:', acct: [['Creditor:', 'SYNCB / CARE CREDIT'], ['Account #:', 'XXXX-XXXX-XXXX-9128'], ['Previous Balance:', '$2,847'], ['Updated Balance:', '$2,612'], ['Date First Delinquent:', 'Updated']], result: 'RESULT: Information updated. Item remains on report with modifications.', resultClass: 'changed', tail: 'The data furnisher has confirmed certain information related to this account and provided updated reporting.', footer: 'This investigation was conducted in compliance with the Fair Credit Reporting Act.', annotation: 'They modified the account, which is an admission that the prior reporting was inaccurate. Pull the original report, compare line by line, document every changed field. Then dispute again citing the change as proof of prior inaccuracy.' },
    deleted: { bureau: 'TransUnion', dept: 'Consumer Relations Department', ref: 'File No: 4471092384<br>Date: ' + date + '<br>Confirmation: 1198-DEL-CONF', body: 'We have completed the investigation of your dispute. As a result, the following item has been deleted from your TransUnion credit report:', acct: [['Creditor:', 'MIDLAND CREDIT MGMT'], ['Account #:', 'XXXX7733'], ['Type:', 'Collection Account'], ['Original Balance:', '$3,400']], result: 'RESULT: Account deleted. Removed from credit report.', resultClass: 'success', tail: 'This item will no longer appear on your TransUnion credit report. Note: deletion at TransUnion does not automatically update your Equifax or Experian reports.', footer: 'This deletion is final unless the data furnisher provides verifiable information at a later date.', annotation: 'You won. Save this letter as proof. Pull your other two bureau reports 30 days from now. Under § 1681i(a)(5), the bureau must notify you within 5 business days if a deleted item is re-inserted.' },
    cannot_locate: { bureau: 'Equifax', dept: 'Consumer Disputes Department', ref: 'Confirmation: EQ-7733-CN<br>Date: ' + date + '<br>Reference: 33891-NL', body: 'We have attempted to locate the account referenced in your dispute and were unable to find it within our records.', acct: [['Creditor as Disputed:', 'LVNV FUNDING LLC'], ['Account # as Disputed:', 'XXXX5566'], ['Status:', 'Unable to Locate']], result: 'RESULT: Account not located. No further action taken.', resultClass: 'neutral', tail: 'If this item appears on your current credit report, please verify the account number and creditor name and resubmit your dispute with corrected information.', footer: 'For questions, contact Equifax Consumer Services.', annotation: 'Sometimes this is a deletion in disguise. Pull a fresh report immediately. If the account is still showing, send a new dispute with a screenshot showing the exact account info and demand they reconcile.' },
    identity: { bureau: 'Experian', dept: 'Consumer Verification', ref: 'Case ID: EXP-IV-88112<br>Date: ' + date + '<br>Reference: VRF-22014', body: 'We have received your dispute submission. However, we are unable to process your request because we could not verify your identity using the documentation provided.', acct: [['Submission Type:', 'Dispute (Mail)'], ['Items Disputed:', 'Multiple'], ['Status:', 'Identity Verification Pending']], result: 'RESULT: Identity not verified. Dispute on hold pending documentation.', resultClass: 'neutral', tail: 'To proceed, please provide: government-issued photo ID, recent utility bill or bank statement showing your current address, last 4 of SSN.', footer: 'Mail documentation to Experian, P.O. Box 9701, Allen, TX 75013.', annotation: 'They are trying to reset the FCRA timeline. The 30-day clock starts when they receive a sufficient dispute, not when they decide it was sufficient. Document everything you sent originally.' },
    public_record: { bureau: 'TransUnion', dept: 'Public Records Division', ref: 'File No: 5582019447<br>Date: ' + date + '<br>Reference: PR-DIS-991', body: 'After investigation, we have determined that the disputed information was reported by a third-party public records vendor and cannot be modified through our standard dispute process.', acct: [['Type:', 'Civil Judgment'], ['Source:', 'Court of Record (3rd Party Vendor)'], ['Disputed Field:', 'Existence of Record']], result: 'RESULT: Public record information cannot be modified by TransUnion.', resultClass: '', tail: 'To dispute information sourced from public records, you may need to contact the court or government agency that originated the record.', footer: 'For questions about public record reporting, consult NCAP guidelines.', annotation: 'This is a deflection. Under FCRA § 1681i, the bureau is still required to investigate and verify accuracy regardless of source. Most civil judgments and tax liens were removed under NCAP.' },
    no_error: { bureau: 'Equifax', dept: 'Investigation Results', ref: 'Confirmation: EQ-INV-44921<br>Date: ' + date + '<br>Reference: NR-3387', body: 'Equifax has completed the reinvestigation of the item(s) you disputed. Based on our investigation, we have determined that no errors were found.', acct: [['Creditor:', 'BANK OF AMERICA'], ['Account #:', 'XXXX-XXXX-XXXX-2284'], ['Investigation Status:', 'Complete'], ['Outcome:', 'No Errors Found']], result: 'RESULT: Investigation complete. No errors found. Item remains.', resultClass: '', tail: 'Our investigation included contacting the data furnisher and reviewing the information they provided.', footer: 'This investigation was conducted in compliance with FCRA Section 611.', annotation: 'The phrase "investigation complete" does not say what the investigation consisted of. Treat this exactly like a "verified" response. Send the MOV demand.' },
    cro: { bureau: 'TransUnion', dept: 'Consumer Relations Department', ref: 'File No: 4471092384<br>Date: ' + date + '<br>Reference: CRO-DEC-1107', body: 'TransUnion has reviewed your recent dispute correspondence. We have determined that the dispute appears to be from a credit cleanup organization or to follow templated language consistent with such activity.', acct: [['Submission Type:', 'Dispute (Mail)'], ['Items Disputed:', 'Multiple'], ['Status:', 'Review for CRO Activity']], result: 'RESULT: Submission flagged. Standard processing not applied.', resultClass: 'neutral', tail: 'If you submitted this dispute personally, please confirm in writing. You have the right to dispute information on your own credit report at no cost under the Fair Credit Reporting Act.', footer: 'Information about your rights is available at consumerfinance.gov.', annotation: 'Bureaus have no legal authority to dismiss a dispute solely because they suspect a CRO is involved. Respond plainly: state you are personally disputing items under FCRA § 1681i, that no third party prepared the dispute, and demand they proceed.' },
    no_response: { bureau: 'Experian', dept: 'Dispute Resolution Center', ref: 'Report No: 7783-2914<br>Date: ' + date + '<br>Case ID: EXP-NRF-558', body: 'The data furnisher did not respond to our inquiries within the timeframe required by the Fair Credit Reporting Act. As a result, the following action has been taken:', acct: [['Creditor:', 'CONVERGENT OUTSOURCING'], ['Account #:', 'XXXX2241'], ['Type:', 'Collection Account'], ['Furnisher Response:', 'Not Received']], result: 'RESULT: Item deleted due to non-response from data furnisher.', resultClass: 'success', tail: 'Pursuant to FCRA Section 611(a)(5), when a data furnisher fails to respond within the required timeframe, the consumer reporting agency must delete or modify the disputed information.', footer: 'This deletion may be reversed if the furnisher provides verifiable information at a later date.', annotation: 'A clean win. Save this letter. Watch for re-insertion. Under § 1681i(a)(5), the bureau must notify you within 5 business days if a deleted item is re-inserted.' }
  };
  const t = templates[type];
  if (!t) return '';
  const acctRows = t.acct.map(([label, value]) => `<div class="acct-row"><span class="acct-label">${escapeHtml(label)}</span><span class="acct-value">${escapeHtml(value)}</span></div>`).join('');
  return `
    <div class="pb-mock-letter">
      <div class="letterhead">
        <div><div class="bureau-name">${escapeHtml(t.bureau)}</div><div class="bureau-tag">${escapeHtml(t.dept)}</div></div>
        <div class="ref-block">${t.ref}</div>
      </div>
      <div class="body-text"><strong>Dear Consumer,</strong><br><br>${t.body}</div>
      <div class="acct-block">${acctRows}</div>
      <div class="result-line ${t.resultClass}">${escapeHtml(t.result)}</div>
      <div class="body-text">${t.tail}</div>
      <div class="footer-text">${t.footer}</div>
      <div class="annotation"><strong>What this means</strong>${escapeHtml(t.annotation)}</div>
    </div>
  `;
}

// ============ RENDER ============

function renderDashboard() {
  const dash = document.getElementById('pb-dashboard');
  const cardsBySection = {};
  CARDS.forEach(c => { cardsBySection[c.section] = (cardsBySection[c.section] || 0) + 1; });

  const intro = '<div class="pb-dashboard-intro">Choose a section</div>';
  const grid = '<div class="pb-dashboard-grid">' + SECTIONS.map(s => `
    <button class="pb-section-card ${s.cls}" data-section="${s.id}">
      <div class="top-row">
        <div class="icon">${s.icon}</div>
        <span class="count">${cardsBySection[s.id] || 0} cards</span>
      </div>
      <div>
        <div class="name">${escapeHtml(s.name)}</div>
        <div class="desc">${escapeHtml(s.desc)}</div>
      </div>
      <div class="open">Open →</div>
    </button>
  `).join('') + '</div>';

  dash.innerHTML = intro + grid;
  dash.querySelectorAll('.pb-section-card').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSection = btn.dataset.section;
      document.querySelectorAll('.pb-tab').forEach(t => t.classList.remove('active'));
      const matchingTab = document.querySelector('.pb-tab[data-section="' + activeSection + '"]');
      if (matchingTab) matchingTab.classList.add('active');
      renderView();
      document.getElementById('pb-detail').classList.remove('show');
      window.scrollTo({ top: document.querySelector('.pb-nav-bar').offsetTop - 80, behavior: 'smooth' });
    });
  });
}

function renderGrid() {
  const grid = document.getElementById('pb-grid');
  const empty = document.getElementById('pb-empty');

  const filtered = CARDS.filter(c => {
    const sectionMatch = activeSection === 'all' || c.section === activeSection;
    const haystack = (c.title + ' ' + (c.hook || '') + ' ' + (c.citeSummary || '') + ' ' + (c.whenToUse || []).join(' ') + ' ' + c.catLabel).toLowerCase();
    const queryMatch = searchQuery === '' || haystack.includes(searchQuery.toLowerCase());
    return sectionMatch && queryMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = filtered.map(c => `
      <button class="pb-tile ${c.draft ? 'draft' : ''}" data-id="${c.id}">
        <span class="tile-cat ${getCategoryClass(c.section)}">${escapeHtml(c.catLabel)}</span>
        <div class="tile-title">${escapeHtml(c.title)}</div>
        ${c.draft ? '<div class="tile-draft-flag">Awaiting Final Content</div>' : ''}
      </button>
    `).join('');
    grid.querySelectorAll('.pb-tile').forEach(t => {
      t.addEventListener('click', () => renderDetail(parseInt(t.dataset.id)));
    });
  }
}

function renderView() {
  document.getElementById('pb-explainer').innerHTML = EXPLAINERS[activeSection] || EXPLAINERS.all;
  if (activeSection === 'all' && searchQuery === '') {
    document.getElementById('pb-grid-view').style.display = 'none';
    document.getElementById('pb-dashboard').style.display = 'block';
    renderDashboard();
  } else {
    document.getElementById('pb-dashboard').style.display = 'none';
    document.getElementById('pb-grid-view').style.display = 'block';
    renderGrid();
  }
}

function renderDetail(id) {
  const c = CARDS.find(x => x.id === id);
  if (!c) return;
  const detail = document.getElementById('pb-detail');
  const content = document.getElementById('pb-detail-content');
  let bodyContent = '';

  if (c.draft) {
    bodyContent = `
      <div class="pb-citation-block">
        <div class="label">Reference</div>
        <div class="cite">${escapeHtml(c.cite)}</div>
        <div class="summary">${escapeHtml(c.citeSummary)}</div>
      </div>
      <div class="pb-callout-draft">
        <strong>Awaiting Final Content</strong>
        This template card is reserved in the system but the full canonical content has not yet been finalized. Once Shonda completes the When To Use, Important Facts, Watch For This, and Pro Move sections, this card will be populated.
      </div>
    `;
  } else {
    const whenList = (c.whenToUse || []).map(p => `<li>${escapeHtml(p)}</li>`).join('');
    let mockLetterHtml = '';
    if (c.mockLetter) mockLetterHtml = '<div class="pb-section-title">Sample Bureau Response</div>' + buildMockBureauLetter(c.mockLetter);
    let assetsHtml = '';
    if (c.assets) assetsHtml = '<div class="pb-section-title">Linked Template</div><div class="pb-asset-row"><button class="pb-asset-link" onclick="alert(\'Drop your Drive or Notion link for this template screenshot here when ready\');">View template screenshot</button></div>';
    bodyContent = `
      <div class="pb-citation-block">
        <div class="label">Citation</div>
        <div class="cite">${escapeHtml(c.cite)}</div>
        <div class="summary">${escapeHtml(c.citeSummary)}</div>
      </div>
      <div class="pb-hook">${escapeHtml(c.hook)}</div>
      <div class="pb-section-title">When to Use</div>
      <ul class="pb-list">${whenList}</ul>
      <div class="pb-callout pb-callout-facts"><div class="label">Important Facts</div><div class="body">${escapeHtml(c.facts)}</div></div>
      <div class="pb-callout pb-callout-watch"><div class="label">Watch For This</div><div class="body">${escapeHtml(c.watchOut)}</div></div>
      <div class="pb-callout pb-callout-pro"><div class="label">Pro Move</div><div class="body">${escapeHtml(c.teaching)}</div></div>
      ${mockLetterHtml}
      ${assetsHtml}
    `;
  }

  content.innerHTML = `
    <div class="pb-detail-header">
      <div><div class="meta">${escapeHtml(c.catLabel)}</div><h3>${escapeHtml(c.title)}</h3></div>
      <button class="pb-close" id="pb-close-btn">Close</button>
    </div>
    <div class="pb-detail-body">${bodyContent}</div>
  `;

  detail.classList.add('show');
  document.getElementById('pb-close-btn').addEventListener('click', () => detail.classList.remove('show'));
  detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============ INIT ============

document.getElementById('pb-tabs').querySelectorAll('.pb-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pb-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeSection = tab.dataset.section;
    renderView();
    document.getElementById('pb-detail').classList.remove('show');
  });
});

document.getElementById('pb-search').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderView();
});

renderView();
