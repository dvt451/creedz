import React, { lazy, Suspense } from 'react';
import CustomScrollStyles from '../../features/CustomScrollStyles'
import Progressbar from '../../widgets/Progressbar'
import Preloader from '../../widgets/Preloader/Preloader'
import TopButton from '../../widgets/buttons/TopButton'
import Header from '../../widgets/header/Header'
import Footer from '../../widgets/footer/Footer';
import Awwwards from '../../widgets/components/Awwwards';

export default function Terms() {
	return (
		<>
			<CustomScrollStyles className={'creedz-html'} />
			<Progressbar />
			<Preloader />
			<TopButton />
			<Header />
			<Awwwards />
			<main className='policy'>
				<Suspense fallback={<div>Loading...</div>}>
					<div className="policy__container">
						<h1 className='policy__main-title'>Terms & Conditions</h1>
						<div className='policy__block'>
							<p className="policy__text">THIS TERMS OF USE AGREEMENT (the &quot;Agreement&quot;) constitutes a legally binding agreement by and between creedz Design a limited liability company organized under the laws of the Romania (&quot;creedz&quot;) and the client, whether personally or on behalf of an entity (&quot;Client&quot;), with regard to access and use of creedz&apos;s website: https://www.creedz.net/ (the &quot;Website&quot;) and any other media form, channel, mobile website or mobile application related, linked or otherwise connected thereto. Failure to agree and adhere to all of the terms, conditions and obligations contained herein results in the express prohibition of the Client&apos;s use of the Website, and the Client is ordered to discontinue use immediately. Thereafter the relationship between Client and creedz shall cease and be of no further force and effect between the parties, except that any obligation of Client to pay creedz for services rendered shall remain and continue to be an ongoing obligation owed by Client to creedz.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Intellectual Property Rights</h2>
							<p className="policy__text">Unless otherwise indicated, the Website is the property of creedz and all source code, databases, functionality, software, website designs, audio, video, text, photographs and graphics of any nature and regardless of format (herein, collectively or individually, the &quot;Content&quot;) and the trademarks, service marks, and logos contained there (the &quot;Marks&quot;) are owned and controlled by creedz and are protected by copyright and trademark laws and any other applicable intellectual property law or regulation of the Romania, foreign jurisdictions and international conventions. The Content and Marks are provided &quot;As-Is&quot; for your information and personal use only. Except as expressly provided herein, no part of the Website and no Content may be copied, reproduced, aggregated, republished, uploaded, posted, displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without creedz express prior written permission. creedz reserves all rights in the Website, Content and Marks.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Ownership of Materials</h2>
							<p className="policy__text">Notwithstanding creedz ownership of Submissions, as described in Paragraph 4 (&quot;Client Feedback&quot;), all design and original source files created on Client&apos;s behalf (&quot;Projects&quot;) belong to Client, and Client shall be the sole owner of the copyright for all Projects. In the event that any operation of law would cause creedz to become the owner of a Project, in whole or in part, rather than Client, creedz irrevocably and perpetually assigns its entire interest in the Project to Client, without limitation. Client warrants that any and all materials provided to creedz as examples or as material to be incorporated into a project during the design process are owned by Client and do not infringe on or misappropriate any third party&apos;s rights, including, but not limited to, all intellectual property rights and any right of publicity. creedz always reserves the right to share the Client&apos;s design work publicly (social media, website, etc.) unless agreed upon as stated in section 18 of this document.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Third-Party Fonts</h2>
							<p className="policy__text">In the event that any Project incorporates fonts that are not owned by creedz and require a commercial license in order for Client to legally reproduce, distribute, or publicly display the Project (&quot;Third-Party Font(s)&quot;), creedz will inform Client in writing that one or more Third-Party Fonts have been incorporated into the Project and that Client will need to purchase one or more licenses for the Third-Party Fonts from the rights-holder(s) of said Third Party Fonts in order to legally reproduce, distribute, or publicly display the Project. Said notice will include information sufficient for Client to identify which licenses are required and who to contact in order to purchase said licenses. So long as creedz has informed Client of the incorporation of Third-Party Fonts as described above, Client assumes all responsibility for any consequences as a result of a failure by Client to purchase one or more licenses for any Third-Party Fonts incorporated into a Project.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">User Representations</h2>
							<p className="policy__text">By using the Website, Client represents and warrants that: Client has the legal capacity and agrees to comply with these Terms of Use; Client is not a minor in the jurisdiction of their domicile; Client will not access the Website through automated or non-human means; Client will not use the Website for any illegal or unauthorized purpose; Client&apos;s use of the Website will not violate any applicable law or regulation.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Prohibited Activities </h2>
							<p className="policy__text">Client shall not access or use the Website for any purpose other than that for which the Website is made available to the Client. The Website may not be used in connection with any commercial endeavors except those related to the work performed by creedz on behalf of the Client. Further, Client agrees to refrain from the following: Make any unauthorized use of the Website; Retrieve data or content for the purposes of creating or compiling a database or directory; Circumvent, disable, or otherwise interfere with security-related features on the Website; Engage in unauthorized framing or linking of the Website; Trick, defraud or mislead creedz or other users; Interfere with, disrupt or create an undue burden on the Website or creedz&apos;s networks or servers; Use the Website in an effort to compete with creedz; Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Website; Bypass any measures on the Website designed to prevent or restrict access to the Website or any portion thereof; Harass, annoy, intimidate or threaten any of creedz&apos;s employees, independent contractors or agents providing services through the Website; Delete the copyright or other rights notice from any Content; Copy or adapt the Website&apos;s software upload or transmit, or attempt to do so, viruses, Trojan horses, or other material including anything that interferes with any party&apos;s use of the Website or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operations or maintenance of the Website; Upload or transmit, or attempt to do so, any material that acts as a passive or active information collection or transmission mechanism; Disparage, tarnish or otherwise harm creedz; Use the Website in a manner inconsistent with any applicable laws, statutes or regulations.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Client Feedback</h2>
							<p className="policy__text">Client acknowledges and agrees that any questions, comments, suggestions or other feedback or submission (each a &quot;Submission&quot;) shall be the sole property of creedz and creedz is under no obligation to keep a Submission confidential or take steps necessary to ensure the confidentiality of a Submission. creedz shall be the sole and exclusive owner of all rights related to the Submission except to the extent that rights are granted to Client under Paragraph 2 (&quot;Ownership of Materials&quot;), and shall at its sole and unrestricted discretion use and disseminate a Submission for any lawful purpose without permission, acknowledgment or compensation of or to the Client. Client agrees that it has the right to articulate and put forth the Submission and Client hereby waives all claims and recourse against creedz for its use of the Submission in accordance with the terms hereof and in its sole discretion hereafter.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Management and Oversite</h2>
							<p className="policy__text">creedz reserves the right to monitor the Website for violations of these Terms of Use and to take appropriate legal action in response to a violation of the Terms of Use or any applicable law, statute or regulation. creedz further reserves the right to restrict or deny access to the Website or disable the Client&apos;s use of the Website. Such decision shall be in the sole discretion of creedz, without notice or liability to Client.</p>
						</div>
					</div>
				</Suspense>
			</main>
			<Suspense fallback={<div>Loading footer...</div>}>
				<Footer />
			</Suspense>
		</>
	)
}
