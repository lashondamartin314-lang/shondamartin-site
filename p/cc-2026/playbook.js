const TEMPLATE_PLACEHOLDER = '#template-link-coming-soon';
const COMMUNITY_URL = 'https://creditacademy.circle.so/join?invitation_token=9f6aa6f2701e422dc8b169b21e44f729a73c9bbb-33dc8b3d-685b-468c-a730-9de6015b06b7';

const phases = [
  {
    id: 'phase-2',
    number: '02',
    title: 'Validation',
    short: 'Make collectors prove what they claim before you move deeper.',
    outcome: 'You know whether a collector can validate the debt, whether they ignored you, or whether their documents expose errors.',
    templates: ['L01', 'L02', 'L03', 'L04']
  },
  {
    id: 'phase-3',
    number: '03',
    title: 'Clean Identity',
    short: 'Clean personal information before account-level bureau disputes.',
    outcome: 'Your name, address, SSN, date of birth, and mixed-file issues stop weakening later disputes.',
    templates: ['L05', 'L06', 'L07', 'L08', 'L09', 'L10']
  },
  {
    id: 'phase-4',
    number: '04',
    title: 'Dispute Bureaus',
    short: 'Create the formal bureau paper trail and force investigation.',
    outcome: 'You have certified-mail evidence, bureau responses, MOV demands, and final notices when needed.',
    templates: ['L11', 'L12', 'L13', 'L14']
  },
  {
    id: 'phase-5',
    number: '05',
    title: 'Challenge Furnishers',
    short: 'Go directly to the source reporting the data and pair bureau/furnisher pressure.',
    outcome: 'Collectors, original creditors, and bureaus are forced to answer the same dispute from different sides.',
    templates: ['L15A', 'L15B', 'L15C', 'L16', 'L17', 'L18', 'L19']
  },
  {
    id: 'phase-6',
    number: '06',
    title: 'Escalation',
    short: 'Use the documented paper trail for complaints, attorney review, or formal escalation.',
    outcome: 'Credit Cousins organize evidence, identify violations, and escalate only when the dispute record supports it.',
    templates: []
  }
];

const templates = [
  { code: 'L01', phase: 'phase-2', title: 'Initial Debt Validation Request', use: 'Send after a third-party collector contacts you or when a collection needs validation before bureau pressure.', timing: 'Start here for collector validation.', link: 'https://docs.google.com/document/d/1Oo5tc55LcmU0e4MS3aBO2mRyI36BNFCvyURQ_GtU--8/copy', viewLink: 'https://docs.google.com/document/d/1Oo5tc55LcmU0e4MS3aBO2mRyI36BNFCvyURQ_GtU--8/edit' },
  { code: 'L02', phase: 'phase-2', title: 'Validation Follow-Up - No Response', use: 'Send when the collector does not respond to L01 within the expected window.', timing: 'Follow up after no response.', link: 'https://docs.google.com/document/d/19mzRKeL96yR-Jg7rQEr_x_y6mZFzvJAwpILyWFVxwWM/copy', viewLink: 'https://docs.google.com/document/d/19mzRKeL96yR-Jg7rQEr_x_y6mZFzvJAwpILyWFVxwWM/edit' },
  { code: 'L03', phase: 'phase-2', title: 'Dispute of Inadequate Validation', use: 'Send when the collector responds but does not prove ownership, amount, authority, or chain of assignment.', timing: 'Use after weak validation.', link: 'https://docs.google.com/document/d/14wkWclRBXrrjIDHbgr98qJ4Cyzw_J1YMwVUx4oHgOOc/copy', viewLink: 'https://docs.google.com/document/d/14wkWclRBXrrjIDHbgr98qJ4Cyzw_J1YMwVUx4oHgOOc/edit' },
  { code: 'L04', phase: 'phase-2', title: 'Validation Bridge - Errors Identified', use: 'Use when validation exposes errors you can carry into bureau or furnisher disputes.', timing: 'Bridge into the next phase.', link: 'https://docs.google.com/document/d/1B3qsSiMAzEq_cc_WD9SuqTz9lKXXzXMlMc3cbGubpM8/copy', viewLink: 'https://docs.google.com/document/d/1B3qsSiMAzEq_cc_WD9SuqTz9lKXXzXMlMc3cbGubpM8/edit' },
  { code: 'L05', phase: 'phase-3', title: 'Creditor Personal Information Update', use: 'Send to active creditors so current records match the identity data you need reported.', timing: 'Before bureau PI disputes.', link: 'https://docs.google.com/document/d/1YV9iu0tc0mww89S6X3NUW6kIB9YTNInTvTUXmxisKsQ/copy', viewLink: 'https://docs.google.com/document/d/1YV9iu0tc0mww89S6X3NUW6kIB9YTNInTvTUXmxisKsQ/edit' },
  { code: 'L06', phase: 'phase-3', title: 'Bureau Personal Information Dispute', use: 'Send to bureaus to dispute old addresses, wrong names, employers, phone numbers, or identity data.', timing: 'Foundation cleanup.', link: 'https://docs.google.com/document/d/1rD8csz5TZSs-mADCSv6tXawkEiM3SMWLTE33t8Qe5b0/copy', viewLink: 'https://docs.google.com/document/d/1rD8csz5TZSs-mADCSv6tXawkEiM3SMWLTE33t8Qe5b0/edit' },
  { code: 'L07', phase: 'phase-3', title: 'Bureau PI Follow-Up - Failure to Investigate', use: 'Send when a bureau ignores or refuses to properly investigate personal information disputes.', timing: 'After poor bureau response.', link: 'https://docs.google.com/document/d/1hhdEgqATac-yhQQTqXeBaRSmdUKpfltxr5jRqogywpU/copy', viewLink: 'https://docs.google.com/document/d/1hhdEgqATac-yhQQTqXeBaRSmdUKpfltxr5jRqogywpU/edit' },
  { code: 'L08', phase: 'phase-3', title: 'Mixed File / Identity Theft', use: 'Use when another person’s information or fraudulent activity is appearing in the Credit Cousin file.', timing: 'Use only when facts support it.', link: 'https://docs.google.com/document/d/1YF6taAcRCNUeDH4vdRTQjlE6fS8XzNbGhfSOcpnnQHI/copy', viewLink: 'https://docs.google.com/document/d/1YF6taAcRCNUeDH4vdRTQjlE6fS8XzNbGhfSOcpnnQHI/edit' },
  { code: 'L09', phase: 'phase-3', title: 'PI Method of Verification Demand', use: 'Send when the bureau claims personal information was verified but gives no useful method.', timing: 'After verified PI response.', link: 'https://docs.google.com/document/d/1q2vfCbMwa88DopJ_89ovaK3PKZLxwmU0qlCoCm2uidU/copy', viewLink: 'https://docs.google.com/document/d/1q2vfCbMwa88DopJ_89ovaK3PKZLxwmU0qlCoCm2uidU/edit' },
  { code: 'L10', phase: 'phase-3', title: 'SSN / Date of Birth Correction', use: 'Use for wrong date of birth, SSN mismatch, merged identity, or identity data that needs urgent correction.', timing: 'Identity precision letter.', link: 'https://docs.google.com/document/d/1QbX4PlUKAGcHf4iotJtzd16lN1Gb-LuNM2Bgrz9bXec/copy', viewLink: 'https://docs.google.com/document/d/1QbX4PlUKAGcHf4iotJtzd16lN1Gb-LuNM2Bgrz9bXec/edit' },
  { code: 'L11', phase: 'phase-4', title: 'Bureau Accuracy Dispute', use: 'The account-level bureau dispute for inaccurate, incomplete, or unverifiable reporting.', timing: 'Round 1 bureau dispute.', link: 'https://docs.google.com/document/d/1qKxOj09Y6qoYobNwTdwD90lDtjv-2lGMl2VsbVvg9aQ/copy', viewLink: 'https://docs.google.com/document/d/1qKxOj09Y6qoYobNwTdwD90lDtjv-2lGMl2VsbVvg9aQ/edit' },
  { code: 'L12', phase: 'phase-4', title: 'Procedure Exposure - MOV Demand', use: 'Send after a verified response when the bureau does not explain how it verified the account.', timing: 'After "verified" response.', link: 'https://docs.google.com/document/d/1AGGDLXmv_6FZbqZaBZLZgri6e_er28v5QHpmnsOxqFQ/copy', viewLink: 'https://docs.google.com/document/d/1AGGDLXmv_6FZbqZaBZLZgri6e_er28v5QHpmnsOxqFQ/edit' },
  { code: 'L13', phase: 'phase-4', title: 'Notice of Intent to File Complaint', use: 'Use when a bureau fails to respond or keeps reporting without proper investigation.', timing: 'No-response path.', link: 'https://docs.google.com/document/d/1xJ-JreUFPo3SxypAdh_t_5P2iF2p4bnX8vKh1sevVco/copy', viewLink: 'https://docs.google.com/document/d/1xJ-JreUFPo3SxypAdh_t_5P2iF2p4bnX8vKh1sevVco/edit' },
  { code: 'L14', phase: 'phase-4', title: 'Final Violation Notice', use: 'Send after the bureau paper trail is built and the item remains unresolved.', timing: 'Final bureau notice.', link: 'https://docs.google.com/document/d/1o-j-q7PaGkISYllurkymjUTNf_wD5uHtegc5F1A02-o/copy', viewLink: 'https://docs.google.com/document/d/1o-j-q7PaGkISYllurkymjUTNf_wD5uHtegc5F1A02-o/edit' },
  { code: 'L15A', phase: 'phase-5', title: 'Direct Furnisher Dispute - Collection Agency', use: 'Send directly to a collector furnishing disputed information after bureau rounds do not resolve it.', timing: 'Pair with L15C.', link: 'https://docs.google.com/document/d/1sWxk8wOFqpiGTZOH0XA6d76iiY8iybFON5YBWx1WMqk/copy', viewLink: 'https://docs.google.com/document/d/1sWxk8wOFqpiGTZOH0XA6d76iiY8iybFON5YBWx1WMqk/edit' },
  { code: 'L15B', phase: 'phase-5', title: 'Direct Furnisher Dispute - Original Creditor', use: 'Send directly to an original creditor furnishing disputed charge-off or account data.', timing: 'Pair with L15C.', link: 'https://docs.google.com/document/d/1_oGzY1c0qN3UUsc8_4PF18f9JaXufCHuPJ2UHOUYOMo/copy', viewLink: 'https://docs.google.com/document/d/1_oGzY1c0qN3UUsc8_4PF18f9JaXufCHuPJ2UHOUYOMo/edit' },
  { code: 'L15C', phase: 'phase-5', title: 'Bureau Companion - Concurrent Investigation', use: 'Send to bureaus the same day as L15A or L15B so both sides investigate at once.', timing: 'Concurrent bureau pressure.', link: 'https://docs.google.com/document/d/1LJbOXX2kQa8jJBw73OTG3Bygb2gNLr0BbnfrwHluGzI/copy', viewLink: 'https://docs.google.com/document/d/1LJbOXX2kQa8jJBw73OTG3Bygb2gNLr0BbnfrwHluGzI/edit' },
  { code: 'L16', phase: 'phase-5', title: 'Inconsistency Attack', use: 'Use when the same account reports differently across bureaus or across responses.', timing: 'When inconsistencies appear.', link: 'https://docs.google.com/document/d/1A8RwnT6necNIYUioCFy8Tp4zeeFL9LVuSOC0a5DdRXc/copy', viewLink: 'https://docs.google.com/document/d/1A8RwnT6necNIYUioCFy8Tp4zeeFL9LVuSOC0a5DdRXc/edit' },
  { code: 'L17', phase: 'phase-5', title: 'Advanced Charge-Off Violation Dispute', use: 'Use when charge-off reporting has specific factual or legal violations after prior disputes.', timing: 'Advanced charge-off path.', link: 'https://docs.google.com/document/d/10xUs8FLwTvKtU5T9Mtw3vjZ5JCkk0GB45F4cJvJFQrs/copy', viewLink: 'https://docs.google.com/document/d/10xUs8FLwTvKtU5T9Mtw3vjZ5JCkk0GB45F4cJvJFQrs/edit' },
  { code: 'L18', phase: 'phase-5', title: 'Pay for Delete Offer', use: 'Use only when negotiation makes sense and the Credit Cousin can get any agreement in writing first.', timing: 'Negotiation option.', link: 'https://docs.google.com/document/d/10OE3CfVa_XCFKCP85wHwB1q9VxxaSo1uXWDo5mVb4iA/copy', viewLink: 'https://docs.google.com/document/d/10OE3CfVa_XCFKCP85wHwB1q9VxxaSo1uXWDo5mVb4iA/edit' },
  { code: 'L19', phase: 'phase-5', title: 'Unauthorized Hard Inquiry Removal', use: 'Use for hard inquiries that lack permissible purpose or proper authorization.', timing: 'Inquiry cleanup.', link: 'https://docs.google.com/document/d/1nHuvDO-525JTnYk1CLU2uhq9rAeVjsbmjBj4OJfIemg/copy', viewLink: 'https://docs.google.com/document/d/1nHuvDO-525JTnYk1CLU2uhq9rAeVjsbmjBj4OJfIemg/edit' }
];

const decoderResponses = [
  { id: 'verified', title: 'Verified / Remains', meaning: 'The bureau claims the item was confirmed but usually gives no useful proof.', next: 'Compare the response to your original dispute. If the bureau gives no real method, move to L12 Procedure Exposure - MOV Demand.', templates: ['L12'] },
  { id: 'updated', title: 'Updated', meaning: 'Something changed but the account stayed. That change can become evidence of prior inaccuracy.', next: 'Save the old report, new report, and bureau letter. Identify every changed field, then use the next appropriate bureau or furnisher dispute.', templates: ['L11', 'L12', 'L16'] },
  { id: 'deleted', title: 'Deleted', meaning: 'The item was removed from at least one bureau.', next: 'Save the deletion letter, pull the other bureaus, and monitor for reinsertion. If reinserted without notice, document it.', templates: [] },
  { id: 'no-response', title: 'No Response', meaning: 'The bureau or collector did not respond in the required window.', next: 'Use the no-response path. For validation, move to L02. For bureau disputes, move to L13.', templates: ['L02', 'L13'] },
  { id: 'frivolous', title: 'Frivolous / Duplicative', meaning: 'The bureau is refusing to investigate further.', next: 'Make sure the next dispute includes new facts, new evidence, or a new legal angle. Keep the refusal letter for your paper trail.', templates: ['L13', 'L14'] },
  { id: 'identity', title: 'Identity Not Verified', meaning: 'The bureau says it cannot verify who submitted the dispute.', next: 'Resubmit with ID, proof of address, and a clear identity correction letter if needed. Track delivery carefully.', templates: ['L06', 'L10'] },
  { id: 'inadequate', title: 'Inadequate Validation', meaning: 'The collector sent documents, but they do not prove what they need to prove.', next: 'Use L03 and point to the missing pieces: ownership, authority, itemization, chain of assignment, or amount errors.', templates: ['L03', 'L04'] }
];

const finderOptions = [
  { id: 'collector-first', phase: 'phase-2', title: 'A collector contacted me', situation: 'I need them to prove the debt before I go further.', result: 'Start with debt validation so the collector has to show what they are claiming, who owns it, and why they can collect.', next: 'Make a copy of L01, customize it, send by certified mail, then add it to the tracker.', templates: ['L01'] },
  { id: 'collector-no-response', phase: 'phase-2', title: 'Collector did not respond', situation: 'I sent validation and the response window passed.', result: 'Use the no-response validation follow-up and preserve your certified mail proof.', next: 'Log the original sent date, delivery date, and no-response deadline before sending L02.', templates: ['L02'] },
  { id: 'collector-weak-proof', phase: 'phase-2', title: 'Collector sent weak proof', situation: 'They responded, but the documents do not prove enough.', result: 'Challenge inadequate validation and point to the missing pieces: ownership, amount, authority, itemization, or assignment chain.', next: 'Use L03 first. If their proof exposes clear reporting errors, use L04 to bridge into bureau or furnisher disputes.', templates: ['L03', 'L04'] },
  { id: 'identity-cleanup', phase: 'phase-3', title: 'My personal info is wrong', situation: 'Old names, addresses, employers, phone numbers, SSN, DOB, or mixed-file data are showing.', result: 'Clean identity data before account disputes so later investigations do not get weakened by messy personal information.', next: 'Use L05 for active creditors, L06 for bureaus, and choose the specialty identity template only when the facts match.', templates: ['L05', 'L06', 'L08', 'L10'] },
  { id: 'identity-followup', phase: 'phase-3', title: 'Bureau ignored identity dispute', situation: 'I already disputed personal information and they did not investigate or they claimed it was verified.', result: 'Move into the PI follow-up path and ask how the bureau verified the personal information.', next: 'Use L07 for failure to investigate. Use L09 when the bureau claims the personal information was verified but gives no useful method.', templates: ['L07', 'L09'] },
  { id: 'bureau-first', phase: 'phase-4', title: 'I am disputing an account with bureaus', situation: 'The credit report has inaccurate, incomplete, or unverifiable account reporting.', result: 'Use the account-level bureau dispute after identity cleanup and evidence gathering.', next: 'Make a copy of L11, attach supporting documents, send to the right bureau(s), and log the deadline in the tracker.', templates: ['L11'] },
  { id: 'bureau-verified', phase: 'phase-4', title: 'Bureau says verified', situation: 'The item stayed and the bureau did not explain how it verified.', result: 'Use the Method of Verification lane to expose the investigation procedure and build the paper trail.', next: 'Compare the bureau response to your original dispute, then use L12. If the bureau still refuses to properly handle it, move toward L14.', templates: ['L12', 'L14'] },
  { id: 'bureau-no-response', phase: 'phase-4', title: 'Bureau did not respond', situation: 'The response deadline passed or the bureau is not properly investigating.', result: 'Use the notice path and organize your delivery evidence before escalating.', next: 'Use L13 with your certified mail proof, then update the tracker with the new deadline.', templates: ['L13'] },
  { id: 'collector-furnisher', phase: 'phase-5', title: 'Collector is still reporting', situation: 'A collection agency is furnishing disputed information after bureau rounds.', result: 'Go directly to the collection agency while also creating companion bureau pressure.', next: 'Send L15A to the collection agency and L15C to the bureau(s) the same day when the facts support it.', templates: ['L15A', 'L15C'] },
  { id: 'creditor-furnisher', phase: 'phase-5', title: 'Original creditor is still reporting', situation: 'The original creditor, charge-off, or account furnisher remains inaccurate.', result: 'Use the direct furnisher dispute lane and pair it with bureau companion pressure when appropriate.', next: 'Send L15B to the original creditor and L15C to the bureau(s) the same day when the facts support it.', templates: ['L15B', 'L15C'] },
  { id: 'inconsistent-reporting', phase: 'phase-5', title: 'Reports do not match', situation: 'The same account is reporting different balances, dates, statuses, or histories across bureaus.', result: 'Use the inconsistency attack to focus the dispute on contradictions the furnishers and bureaus have to reconcile.', next: 'Save screenshots or PDFs from each bureau, mark the differences, and use L16.', templates: ['L16'] },
  { id: 'chargeoff-advanced', phase: 'phase-5', title: 'Charge-off needs advanced challenge', situation: 'A charge-off has deeper factual problems after prior rounds.', result: 'Use the advanced charge-off letter only when you can point to specific errors or violation patterns.', next: 'Gather statements, reporting history, bureau responses, and any changed fields before using L17.', templates: ['L17'] },
  { id: 'pay-delete', phase: 'phase-5', title: 'I want to negotiate', situation: 'I am considering payment only if deletion terms are clear in writing.', result: 'Use the pay-for-delete lane carefully and only when negotiation fits the Credit Cousin goal and budget.', next: 'Use L18, get any agreement in writing before payment, and track every communication.', templates: ['L18'] },
  { id: 'hard-inquiry', phase: 'phase-5', title: 'Unauthorized hard inquiry', situation: 'A hard inquiry appears without proper authorization or permissible purpose.', result: 'Use the inquiry removal template and keep the focus on authorization and permissible purpose.', next: 'Use L19 and save any denial, approval, or application records that prove the inquiry is wrong.', templates: ['L19'] },
  { id: 'escalation-ready', phase: 'phase-6', title: 'I may need to escalate', situation: 'I have letters, responses, delivery proof, and unresolved reporting.', result: 'Move into escalation only after the paper trail is organized enough to support the complaint or attorney review.', next: 'Export or review the tracker, gather all certified mail proof and responses, then use the Resources and Community Help sections.', templates: [] }
];

const resources = [
  { title: 'Full Dispute Playbook Manual', desc: 'Open the full HTML Dispute Playbook kit.', url: '../../repairplaybook/kit.html', type: 'Manual' },
  { title: 'Printable Playbook PDF', desc: 'Printable companion version of the Dispute Playbook.', url: '../../repairplaybook/The%20Repair%20Playbook%20%C2%B7%20Credit%20Academy%20%C2%B7%20Shonda%20Martin.pdf', type: 'PDF' },
  { title: 'Template Tracker Sheet', desc: 'Master tracker Sheet containing the current template links.', url: 'https://docs.google.com/spreadsheets/d/18XuLyfmDVtWuATpC6s9jw01UfUygtCEJwEGbWKfWzRo/edit', type: 'Sheet' },
  { title: 'CFPB Complaint Portal', desc: 'Use when the paper trail supports escalation.', url: 'https://www.consumerfinance.gov/complaint/', type: 'External' },
  { title: 'AnnualCreditReport.com', desc: 'Official free credit report access point.', url: 'https://www.annualcreditreport.com/', type: 'External' },
  { title: 'Credit Academy Community', desc: 'Ask questions, find updates, and get help from the Credit Cousin community.', url: COMMUNITY_URL, type: 'Community' }
];

const faqs = [
  { q: 'Do I start with bureau disputes or validation?', a: 'If a third-party collector is involved and you need them to prove the debt, start with validation. If you are correcting bureau reporting, follow the Dispute Path and do identity cleanup before account-level disputes.' },
  { q: 'Can Credit Cousins type personal account details into the tracker?', a: 'The tracker saves in the Credit Cousin browser only, but Credit Cousins should still avoid full SSNs, full account numbers, and sensitive documents. Use short labels and last four digits.' },
  { q: 'Why use certified mail?', a: 'Certified mail gives a Credit Cousin a date-stamped paper trail. That paper trail matters if a bureau, collector, or furnisher fails to respond or later claims it did not receive the dispute.' },
  { q: 'Are these templates legal advice?', a: 'No. The hub is educational and self-help oriented. Credit Cousins can use the information to understand their rights and prepare their own disputes, and they should contact an attorney for legal advice.' },
  { q: 'Where do I ask for help?', a: 'Use Community Help for general questions, FAQs, and Circle support. For private legal questions, Credit Cousins should speak with a consumer rights attorney.' }
];

const initialParams = new URLSearchParams(window.location.search);
const initialView = ['start', 'path', 'finder', 'templates', 'tracker', 'decoder', 'resources', 'help'].includes(initialParams.get('view'))
  ? initialParams.get('view')
  : 'start';

const state = {
  view: initialView,
  templateSearch: '',
  phaseFilter: initialParams.get('phase') || 'all',
  finder: initialParams.get('finder') || 'collector-first',
  decoder: 'verified',
  tracker: loadTracker()
};

const view = document.getElementById('pb-view');

function escapeHtml(value) {
  const div = document.createElement('div');
  div.textContent = value == null ? '' : value;
  return div.innerHTML;
}

function getPhase(id) {
  return phases.find(phase => phase.id === id);
}

function getTemplate(code) {
  return templates.find(template => template.code === code);
}

function loadTracker() {
  try {
    return JSON.parse(localStorage.getItem('creditAcademyDisputeTracker')) || [];
  } catch (error) {
    return [];
  }
}

function saveTracker() {
  localStorage.setItem('creditAcademyDisputeTracker', JSON.stringify(state.tracker));
}

function setView(nextView) {
  state.view = nextView;
  document.querySelectorAll('.pb-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.view === nextView);
  });
  render();
  const targetTop = document.querySelector('.pb-main').offsetTop - 124;
  window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
}

function sectionHead(kicker, title, body, action = '') {
  return `
    <div class="pb-section-head">
      <div>
        <div class="pb-kicker">${escapeHtml(kicker)}</div>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(body)}</p>
      </div>
      ${action}
    </div>
  `;
}

function renderStart() {
  const templateCount = templates.length;
  view.innerHTML = `
    ${sectionHead('Start Here', 'One hub for the whole dispute process', 'Credit Cousins can begin with the checklist, follow the Dispute Path, open letter templates, track outgoing mail, decode responses, and find help without bouncing between disconnected pages.')}
    <div class="pb-grid">
      <article class="pb-card">
        <div class="pb-card-kicker">Step 1</div>
        <h3>Get Oriented</h3>
        <p>Review the phases and choose the first lane: validation, identity cleanup, bureau dispute, or furnisher challenge.</p>
        <button class="pb-btn pb-btn-plain" data-jump="path">View Dispute Path</button>
      </article>
      <article class="pb-card">
        <div class="pb-card-kicker">Step 2</div>
        <h3>Find The Letter</h3>
        <p>Not sure what comes next? Choose a Credit Cousin situation and the hub will suggest the strongest template lane.</p>
        <button class="pb-btn pb-btn-plain" data-jump="finder">Open Letter Finder</button>
      </article>
      <article class="pb-card">
        <div class="pb-card-kicker">Step 3</div>
        <h3>Pick Templates</h3>
        <p>Search the growing template library and open force-copy Google Docs Credit Cousins can fill out for themselves.</p>
        <button class="pb-btn pb-btn-plain" data-jump="templates">Open Letter Templates</button>
      </article>
      <article class="pb-card">
        <div class="pb-card-kicker">Step 4</div>
        <h3>Track The Trail</h3>
        <p>Log sent dates, delivery dates, certified tracking, responses, and next actions for each account or bureau item.</p>
        <button class="pb-btn pb-btn-plain" data-jump="tracker">Open Tracker</button>
      </article>
    </div>
    <div class="pb-layout">
      <section class="pb-panel">
        <h3>Credit Cousin Readiness Checklist</h3>
        <div class="pb-checklist">
          ${['Pull current reports from all three bureaus', 'Save PDFs or screenshots before sending letters', 'Gather ID, proof of address, and supporting documents', 'Create one folder for letters, receipts, and responses', 'Use certified mail for disputes that may need a paper trail', 'Track every sent date, delivery date, response, and next step'].map((item, index) => `
            <label class="pb-check"><input type="checkbox" data-check="${index}"><span>${escapeHtml(item)}</span></label>
          `).join('')}
        </div>
      </section>
      <aside class="pb-panel">
        <h3>Privacy Note</h3>
        <p>This tracker stores data in this browser only. Credit Cousins should use short names, last four digits, or nicknames instead of full account numbers, SSNs, or private document details.</p>
        <div class="pb-disclaimer">Educational self-help tool only. It helps Credit Cousins organize their own dispute process; it does not replace legal advice.</div>
      </aside>
    </div>
  `;
}

function renderPath() {
  view.innerHTML = `
    ${sectionHead('Dispute Path', 'A clear phase-by-phase workflow', 'The hub now points Credit Cousins through one canonical path. Each phase explains the goal, the expected outcome, and the templates attached to that point in the process.')}
    <div class="pb-phase-list">
      ${phases.map(phase => `
        <article class="pb-phase-card ${phase.id}">
          <div class="pb-phase-num"><span>Phase</span><strong>${phase.number}</strong></div>
          <div>
            <h3>${escapeHtml(phase.title)}</h3>
            <p>${escapeHtml(phase.short)}</p>
            <div class="pb-phase-meta">
              <span class="pb-phase-chip">${phase.templates.length ? `${phase.templates.length} templates` : 'Escalation resources'}</span>
              <span class="pb-phase-chip">${escapeHtml(phase.outcome)}</span>
            </div>
          </div>
          <button class="pb-btn pb-btn-plain" ${phase.templates.length ? `data-phase="${phase.id}"` : 'data-jump="resources"'}>${phase.templates.length ? 'See Templates' : 'View Resources'}</button>
        </article>
      `).join('')}
    </div>
  `;
}

function renderFinder() {
  const active = finderOptions.find(option => option.id === state.finder) || finderOptions[0];
  const phase = getPhase(active.phase);
  view.innerHTML = `
    ${sectionHead('Letter Finder', 'Choose the situation, then open the next template', 'This guided finder helps Credit Cousins choose a practical next step without typing private account details into a chatbot. It is educational guidance, so Credit Cousins should still use judgment and ask for help when facts are unclear.')}
    <div class="pb-finder-layout">
      <section class="pb-finder-list" aria-label="Letter Finder situations">
        ${finderOptions.map(option => {
          const optionPhase = getPhase(option.phase);
          return `
            <button class="pb-finder-card ${option.phase} ${state.finder === option.id ? 'active' : ''}" data-finder-option="${option.id}">
              <span class="pb-tag">Phase ${optionPhase.number}</span>
              <strong>${escapeHtml(option.title)}</strong>
              <span>${escapeHtml(option.situation)}</span>
            </button>
          `;
        }).join('')}
      </section>
      <aside class="pb-finder-result ${active.phase}">
        <div class="pb-kicker">Recommended Lane</div>
        <h3>Phase ${phase.number}: ${escapeHtml(phase.title)}</h3>
        <p>${escapeHtml(active.result)}</p>
        <div class="pb-next-step">
          <strong>Next step</strong>
          <span>${escapeHtml(active.next)}</span>
        </div>
        <div class="pb-rec-list">
          ${active.templates.map(code => {
            const template = getTemplate(code);
            if (!template) return '';
            return `
              <article class="pb-rec-card ${template.phase}">
                <div>
                  <span class="pb-template-code">${escapeHtml(template.code)}</span>
                  <h4>${escapeHtml(template.title)}</h4>
                  <p>${escapeHtml(template.use)}</p>
                </div>
                <div class="pb-template-actions">
                  <a class="pb-btn pb-btn-plain" href="${escapeHtml(template.link)}" target="_blank" rel="noopener">Use Template</a>
                  <button class="pb-btn pb-btn-dark" data-add-template="${template.code}">Track It</button>
                </div>
              </article>
            `;
          }).join('') || `
            <div class="pb-empty">
              No letter template is recommended yet. Organize evidence, review resources, and ask for support before escalating.
            </div>
          `}
        </div>
        <div class="pb-finder-actions">
          <button class="pb-btn pb-btn-plain" data-jump="templates">Search All Templates</button>
          <button class="pb-btn pb-btn-plain" data-jump="tracker">Open Tracker</button>
          <button class="pb-btn pb-btn-plain" data-jump="help">Ask Community Help</button>
        </div>
        <div class="pb-disclaimer">Do not enter full SSNs, full account numbers, or private documents into public tools. When the facts are unclear, ask for support before sending the next letter.</div>
      </aside>
    </div>
  `;
}

function renderTemplates() {
  const filtered = templates.filter(template => {
    const phaseMatch = state.phaseFilter === 'all' || template.phase === state.phaseFilter;
    const haystack = `${template.code} ${template.title} ${template.use} ${template.timing}`.toLowerCase();
    return phaseMatch && haystack.includes(state.templateSearch.toLowerCase());
  });

  view.innerHTML = `
    ${sectionHead('Letter Templates', 'A growing template library', 'Each card explains when to use the template and where it belongs in the Dispute Path. New templates can be added as a Credit Cousin resource library grows.')}
    <div class="pb-filter-row">
      <input class="pb-search" id="template-search" value="${escapeHtml(state.templateSearch)}" placeholder="Search templates by title, phase, or situation" aria-label="Search letter templates">
      <select class="pb-select" id="phase-filter" aria-label="Filter by phase">
        <option value="all">All phases</option>
        ${phases.filter(phase => phase.templates.length).map(phase => `<option value="${phase.id}" ${state.phaseFilter === phase.id ? 'selected' : ''}>Phase ${phase.number} - ${escapeHtml(phase.title)}</option>`).join('')}
      </select>
    </div>
    <div class="pb-template-grid">
      ${filtered.map(templateCard).join('') || '<div class="pb-empty">No templates match this search.</div>'}
    </div>
  `;
}

function templateCard(template) {
  const phase = getPhase(template.phase);
  const templateLink = template.link === TEMPLATE_PLACEHOLDER
    ? '<span class="pb-btn pb-btn-disabled">Template Link Pending</span>'
    : `<a class="pb-btn pb-btn-plain" href="${escapeHtml(template.link)}" target="_blank" rel="noopener">Use Template</a>`;
  return `
    <article class="pb-template-card ${template.phase}">
      <div class="pb-template-top">
        <span class="pb-template-code">${escapeHtml(template.code)}</span>
        <span class="pb-tag">Phase ${phase.number}</span>
      </div>
      <div>
        <h3>${escapeHtml(template.title)}</h3>
        <p>${escapeHtml(template.use)}</p>
      </div>
      <span class="pb-pill">${escapeHtml(template.timing)}</span>
      <div class="pb-template-actions">
        ${templateLink}
        <button class="pb-btn pb-btn-dark" data-add-template="${template.code}">Track It</button>
      </div>
    </article>
  `;
}

function renderTracker() {
  view.innerHTML = `
    ${sectionHead('Tracker', 'Track what was sent and what came back', 'This local tracker helps Credit Cousins document their paper trail by account, bureau, template, certified mail number, response, and next action.')}
    <div class="pb-layout">
      <section class="pb-panel">
        <h3>Add Tracker Item</h3>
        <form id="tracker-form" class="pb-form-grid">
          <div class="pb-field"><label for="account">Account or item</label><input class="pb-input" id="account" required placeholder="Example: Portfolio Recovery - 1849"></div>
          <div class="pb-field"><label for="bureau">Bureau / recipient</label><input class="pb-input" id="bureau" placeholder="Experian, Equifax, TransUnion, collector"></div>
          <div class="pb-field"><label for="template">Template</label><select class="pb-input" id="template">${templates.map(t => `<option value="${t.code}">${t.code} - ${escapeHtml(t.title)}</option>`).join('')}</select></div>
          <div class="pb-field"><label for="status">Status</label><select class="pb-input" id="status"><option>Drafting</option><option>Sent</option><option>Delivered</option><option>Response received</option><option>Resolved</option><option>Needs escalation</option></select></div>
          <div class="pb-field"><label for="sent">Sent date</label><input class="pb-input" type="date" id="sent"></div>
          <div class="pb-field"><label for="delivered">Delivered date</label><input class="pb-input" type="date" id="delivered"></div>
          <div class="pb-field"><label for="tracking">Certified mail #</label><input class="pb-input" id="tracking" placeholder="USPS tracking"></div>
          <div class="pb-field"><label for="response">Response</label><select class="pb-input" id="response"><option value="">No response yet</option>${decoderResponses.map(r => `<option value="${r.id}">${escapeHtml(r.title)}</option>`).join('')}</select></div>
          <div class="pb-field full"><label for="notes">Notes / next action</label><textarea class="pb-textarea" id="notes" placeholder="What happened? What is the next letter or deadline?"></textarea></div>
          <div class="pb-field full"><button class="pb-btn pb-btn-primary" type="submit">Save Tracker Item</button></div>
        </form>
      </section>
      <section class="pb-panel">
        <div class="pb-section-head">
          <div>
            <div class="pb-kicker">Saved locally</div>
            <h2>${state.tracker.length} Items</h2>
          </div>
          <button class="pb-btn pb-btn-plain" id="export-tracker">Export JSON</button>
        </div>
        <div class="pb-tracker-list">
          ${state.tracker.map(trackerCard).join('') || '<div class="pb-empty">No tracker items yet. Add the first letter or account on the left.</div>'}
        </div>
      </section>
    </div>
  `;
}

function trackerCard(item) {
  const template = getTemplate(item.template);
  const response = decoderResponses.find(r => r.id === item.response);
  return `
    <article class="pb-track-card">
      <div>
        <div class="pb-track-title">${escapeHtml(item.account)}</div>
        <p>${escapeHtml(item.bureau || 'Recipient not set')} · ${escapeHtml(template ? `${template.code} - ${template.title}` : item.template)}</p>
        <div class="pb-track-meta">
          <span class="pb-pill">${escapeHtml(item.status)}</span>
          ${item.sent ? `<span class="pb-pill">Sent ${escapeHtml(item.sent)}</span>` : ''}
          ${item.delivered ? `<span class="pb-pill">Delivered ${escapeHtml(item.delivered)}</span>` : ''}
          ${item.tracking ? `<span class="pb-pill">Tracking ${escapeHtml(item.tracking)}</span>` : ''}
          ${response ? `<span class="pb-pill">${escapeHtml(response.title)}</span>` : ''}
        </div>
        ${item.notes ? `<p>${escapeHtml(item.notes)}</p>` : ''}
      </div>
      <button class="pb-icon-btn" data-delete="${item.id}" aria-label="Delete tracker item">Delete</button>
    </article>
  `;
}

function renderDecoder() {
  const active = decoderResponses.find(response => response.id === state.decoder) || decoderResponses[0];
  view.innerHTML = `
    ${sectionHead('Response Decoder', 'Turn bureau language into a next step', 'Credit Cousins can match the response they received and see what it usually means, what to save, and which template may be next.')}
    <div class="pb-decoder-options">
      ${decoderResponses.map(response => `
        <button class="pb-decoder-card ${state.decoder === response.id ? 'active' : ''}" data-decoder="${response.id}">
          <strong>${escapeHtml(response.title)}</strong>
          <span>${escapeHtml(response.meaning)}</span>
        </button>
      `).join('')}
    </div>
    <section class="pb-panel pb-result">
      <div class="pb-kicker">Recommended Next Move</div>
      <h3>${escapeHtml(active.title)}</h3>
      <p>${escapeHtml(active.next)}</p>
      <div class="pb-template-actions">
        ${active.templates.map(code => {
          const template = getTemplate(code);
          return template ? `<button class="pb-btn pb-btn-plain" data-template-jump="${code}">${escapeHtml(code)} - ${escapeHtml(template.title)}</button>` : '';
        }).join('') || '<span class="pb-pill">No template needed yet</span>'}
      </div>
    </section>
  `;
}

function renderResources() {
  view.innerHTML = `
    ${sectionHead('Resources', 'Everything Credit Cousins need close by', 'This area gathers the full manual, template vault, official complaint links, credit report access, and community resources.')}
    <div class="pb-resource-list">
      ${resources.map(resource => `
        <article class="pb-resource-item">
          <div>
            <span class="pb-tag">${escapeHtml(resource.type)}</span>
            <h3>${escapeHtml(resource.title)}</h3>
            <p>${escapeHtml(resource.desc)}</p>
          </div>
          <a class="pb-btn pb-btn-plain" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener">Open</a>
        </article>
      `).join('')}
    </div>
  `;
}

function renderHelp() {
  view.innerHTML = `
    ${sectionHead('Community Help', 'FAQs, boundaries, and support paths', 'Credit Cousins should know where to ask general questions, where to find updates, and when a question needs professional legal guidance.')}
    <div class="pb-help-actions">
      <a class="pb-btn pb-btn-primary" href="${COMMUNITY_URL}" target="_blank" rel="noopener">Open Community</a>
      <button class="pb-btn pb-btn-plain" data-jump="resources">Resource Vault</button>
    </div>
    <div class="pb-faq-list">
      ${faqs.map(faq => `
        <article class="pb-faq-card">
          <h3>${escapeHtml(faq.q)}</h3>
          <p>${escapeHtml(faq.a)}</p>
        </article>
      `).join('')}
    </div>
  `;
}

function render() {
  const renderers = {
    start: renderStart,
    path: renderPath,
    finder: renderFinder,
    templates: renderTemplates,
    tracker: renderTracker,
    decoder: renderDecoder,
    resources: renderResources,
    help: renderHelp
  };

  (renderers[state.view] || renderStart)();
  bindViewEvents();
}

function bindViewEvents() {
  document.querySelectorAll('[data-jump]').forEach(button => {
    button.addEventListener('click', () => setView(button.dataset.jump));
  });

  document.querySelectorAll('[data-phase]').forEach(button => {
    button.addEventListener('click', () => {
      state.phaseFilter = button.dataset.phase;
      state.templateSearch = '';
      setView('templates');
    });
  });

  document.querySelectorAll('[data-template-jump]').forEach(button => {
    button.addEventListener('click', () => {
      state.phaseFilter = 'all';
      state.templateSearch = button.dataset.templateJump;
      setView('templates');
    });
  });

  document.querySelectorAll('[data-finder-option]').forEach(button => {
    button.addEventListener('click', () => {
      state.finder = button.dataset.finderOption;
      render();
    });
  });

  document.querySelectorAll('[data-add-template]').forEach(button => {
    button.addEventListener('click', () => {
      setView('tracker');
      requestAnimationFrame(() => {
        const select = document.getElementById('template');
        if (select) select.value = button.dataset.addTemplate;
      });
    });
  });

  document.querySelectorAll('[data-decoder]').forEach(button => {
    button.addEventListener('click', () => {
      state.decoder = button.dataset.decoder;
      render();
    });
  });

  const search = document.getElementById('template-search');
  if (search) {
    search.addEventListener('input', () => {
      state.templateSearch = search.value;
      renderTemplates();
      bindViewEvents();
    });
  }

  const phaseFilter = document.getElementById('phase-filter');
  if (phaseFilter) {
    phaseFilter.addEventListener('change', () => {
      state.phaseFilter = phaseFilter.value;
      renderTemplates();
      bindViewEvents();
    });
  }

  const form = document.getElementById('tracker-form');
  if (form) {
    form.addEventListener('submit', handleTrackerSubmit);
  }

  document.querySelectorAll('[data-delete]').forEach(button => {
    button.addEventListener('click', () => {
      state.tracker = state.tracker.filter(item => item.id !== button.dataset.delete);
      saveTracker();
      renderTracker();
      bindViewEvents();
    });
  });

  const exportButton = document.getElementById('export-tracker');
  if (exportButton) {
    exportButton.addEventListener('click', exportTracker);
  }
}

function handleTrackerSubmit(event) {
  event.preventDefault();
  const item = {
    id: String(Date.now()),
    account: document.getElementById('account').value.trim(),
    bureau: document.getElementById('bureau').value.trim(),
    template: document.getElementById('template').value,
    status: document.getElementById('status').value,
    sent: document.getElementById('sent').value,
    delivered: document.getElementById('delivered').value,
    tracking: document.getElementById('tracking').value.trim(),
    response: document.getElementById('response').value,
    notes: document.getElementById('notes').value.trim()
  };

  state.tracker.unshift(item);
  saveTracker();
  event.target.reset();
  renderTracker();
  bindViewEvents();
}

function exportTracker() {
  const blob = new Blob([JSON.stringify(state.tracker, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'credit-academy-dispute-tracker.json';
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll('.pb-tab').forEach(tab => {
  tab.addEventListener('click', () => setView(tab.dataset.view));
  tab.classList.toggle('active', tab.dataset.view === state.view);
});

document.querySelectorAll('[data-jump]').forEach(button => {
  button.addEventListener('click', () => setView(button.dataset.jump));
});

render();
