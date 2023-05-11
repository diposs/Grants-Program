"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9715],{1187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));a(95657);const r={},o="Protocol for NFT Migration and Data Exchange",l={unversionedId:"applications/NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange",id:"applications/NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange",title:"Protocol for NFT Migration and Data Exchange",description:"- Team Name: Perpetual Altruism",source:"@site/applications/NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md",sourceDirName:"applications",slug:"/applications/NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange",permalink:"/Grants-Program/applications/NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Desirable Protocol Features",id:"milestone-1--desirable-protocol-features",level:3},{value:"Milestone 2 \u2014 Checked Migration Process",id:"milestone-2--checked-migration-process",level:3},{value:"Milestone 3 \u2014 Trustless Migration Process",id:"milestone-3--trustless-migration-process",level:3},{value:"Milestone 4 \u2014 Standard and Documentation for Cross-universe Migration",id:"milestone-4--standard-and-documentation-for-cross-universe-migration",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"protocol-for-nft-migration-and-data-exchange"},"Protocol for NFT Migration and Data Exchange"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Perpetual Altruism"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:"),"\nBTC : 1B6AHziiBvE28Lg74n23V3dYXbxcVLGKYi\nETH/DAI : 0xA7427d0D45e8dd969049872F9cDE383716A39B23"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/809#issuecomment-1160448332"},"Terminated"))),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("p",null,"This proposal is in response to Polkadot Bridge RFP."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In this proposal, we use the following terms and definitions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"NFT:")," Intangible asset that is compatible with the ERC-721 standard (i.e. the unique intangible asset is abstracted from the concept of token, which is how the asset is represented on a blockchain). An NFT always exists in a world, which is itself in a universe.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Universe")," e.g. a blockchain or parachain, the Web2.0 internet, a private company\u2019s database\u2026")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"World (within a universe)")," e.g. a smart contract or smart contract ecosystem, a website, a private company project\u2026")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Migration:")," The movement of an NFT from an origin universe to a destination universe.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"IOU migration:")," An NFT migration where the original token is put in escrow in the origin universe bridge, and a deed that allows the bearer to redeem that original token in the origin universe is created in the destination universe.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Full migration:")," An NFT migration which is handled by the publisher of the NFT, who controls the destination world, and thus can allow the NFT\u2019s features and intellectual property rights to be transferred to the new token in the destination universe.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Digital Rights Management:")," The systematic approach to prevent unauthorized redistribution of digital rights and intellectual property rights infringement during a full NFT migration."))),(0,n.kt)("p",null,"The aim of this proposal is to standardize what information is sufficient and which are necessary to allow the migration of an NFT from an arbitrary universe to another. Both of the endpoints (origin universe/world and destination universe/world) must be ERC-721 compatible, but they do not have to be blockchains (e.g : domain name tokenization using an ERC-721 compatible API)."),(0,n.kt)("p",null,"There are already Polkadot bridges under development for ERC-20 tokens and other arbitrary data. However, there is no consensus yet on how to bridge NFTs across chains. This project aim is to create a standard to do so at the messaging level."),(0,n.kt)("p",null,"Our team is building NFT.com, a marketplace for the world\u2019s tokenized assets and we need this infrastructure for our marketplace to work effectively on the Polkadot Network. Previous to this we also developed ",(0,n.kt)("a",{parentName:"p",href:"https://cryptograph.co"},"Cryptograph"),", an NFT publisher and marketplace on Ethereum."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,"The deliverable of this proposal is a standardized protocol specification."),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"To our knowledge, there is currently no work being done on a standardized, universal bridge protocol for cross-chain NFT migration."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Guillaume Gonnaud")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Edouard Bessire")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Guillaume Gonnaud")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:g.gonnaud@perpetual-altruism.org"},"g.gonnaud@perpetual-altruism.org")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://NFT.com"},"NFT.com"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Perpetual Altruism Ltd")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 Ordnance Mews, London NW86PF, United Kingdom")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/Nokhal"},"Guillaume Gonnaud"),":")," Co-Founder and CTO of Perpetual Altruism Ltd, the developer of NFT publisher and marketplace Cryptograph. Previously co-founded two other companies as CTO, and worked as a researcher and developer for Japan\u2019s National Institute of Informatics in Tokyo. He holds a MSc Computer Science from France\u2019s National Polytechnic Institute and a MSc Research in Artificial Intelligence from Paul Sabatier University. He is the main author of the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5"},"GBM auction mechanism")," as well as of the ERC-2665 standard."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/edouardru"},"Edouard Bessire"),":")," Co-Founder of Perpetual Altruism Ltd, the developer of NFT publisher and marketplace Cryptograph. Computer science Engineer with extensive product development and project management experience. Edouard holds an MSc in Applied Mathematics from France\u2019s National Polytechnic Institute, and an MSc in Innovation, Entrepreneurship and Management from the Imperial College Business School. He is also a co-author of the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5"},"GBM auction mechanism"),"."),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Nokhal/Cryptograph_Project"},"https://github.com/Nokhal/Cryptograph_Project"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/issues/2665"},"https://github.com/ethereum/EIPs/issues/2665")),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/guillaume-gonnaud/"},"https://www.linkedin.com/in/guillaume-gonnaud/"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/edouardbessire/"},"https://www.linkedin.com/in/edouardbessire/")),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," Less than 7 weeks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2 FTE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Work Days:")," 66 days"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cost per work day:")," \xa3300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," \xa319,800 (26862.66 USD/DAI)")),(0,n.kt)("h3",{id:"milestone-1--desirable-protocol-features"},"Milestone 1 \u2014 Desirable Protocol Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," ~2 weeks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2 FTE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Work Days:")," 21 days"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cost per work day:")," \xa3300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," \xa36,300 (8558.05 USD/DAI)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deliverable:")," A list of clearly defined, measurable features that the final bridges built using this vision should support, as well as how to test them using pseudocode.")),(0,n.kt)("p",null,"We will write up and engage with the community to determine the desirable features of a NFT migration and data exchange messaging protocol.\nSo far, we have determined that the protocol must allow for the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Migrate any ERC-721 token between EVM-compatible chains"),(0,n.kt)("li",{parentName:"ul"},"Migrate an NFT back and forth to get the original token back."),(0,n.kt)("li",{parentName:"ul"},"Be ERC-1155 compatible"),(0,n.kt)("li",{parentName:"ul"},"Migrate an NFT outside of an EVM universe and redeem the same token back"),(0,n.kt)("li",{parentName:"ul"},"Migrate an NFT to an arbitrary world (as the owner of an NFT, you should be able to choose where you want the NFT to be migrated to and who will mint it i.e. the protocol is not restricted to a specific project)"),(0,n.kt)("li",{parentName:"ul"},"Have built-in protections against \u201cbad\u201d migration by preventing migration to non-registered destination worlds."),(0,n.kt)("li",{parentName:"ul"},"Allowing polkadot parachains to trustlessly migrate NFTs from one parachain to an another using SPREE."),(0,n.kt)("li",{parentName:"ul"},"Perform both IOU migration (no Digital Rights Management requirement) and Full migration (which requires Digital Rights Management at the bridge level)"),(0,n.kt)("li",{parentName:"ul"},"Migrate an NFT with either a \u2018checked\u2019 migration (need to be acknowledged by both the sender and the receiver of a token) or \u2018unchecked\u2019 migration (the token in the original world needs to first be attributed to a tokenID on the destination chain, then it is simply put in escrow with the bridge on the origin chain). NB: Checked migrations are fully trutless and decentralized and optimised for security, whilst unchecked migrations are optimised for gas costs."),(0,n.kt)("li",{parentName:"ul"},"Licensed under the ",(0,n.kt)("a",{parentName:"li",href:"https://unlicense.org"},"Unlicense"))),(0,n.kt)("h3",{id:"milestone-2--checked-migration-process"},"Milestone 2 \u2014 Checked Migration Process"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," ~2 weeks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Work Days:")," 20 days"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cost per work day:")," \xa3300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," \xa36,000 (8150.52 USD/DAI)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deliverable:")," A documented step by step process that would allow a trusted relayer to perform efficient migrations of NFTs.")),(0,n.kt)("p",null,"We will write up the \u2018Checked Migration\u2019 process which includes a security protocol to ensure that both the sender and the receiver are satisfied with the migration outcome.\nThis is especially important if NFT's are migrating from/to a trustless universe (eg : a public decentralized blockchain) toward/from a centralized/private universe.\nThis process is NOT a fully decentralized trustless process itself in order to accomodate for a wide array of possible origin and destinations, but it does allow decentralized trustless outcomes while guaranteeing authenticity and ownership of the NFT at every step."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A checked migration process mean there is an acknowledgment of the migration on the destination universe by the sender."),(0,n.kt)("li",{parentName:"ul"},"A checked migration process mean there is an acknowledgment of the migration on the origin universe by the receiver"),(0,n.kt)("li",{parentName:"ul"},"The migration is complete only once both the sender and receiver have acknowledged the migration. Before that, the migrated token cannot be used."),(0,n.kt)("li",{parentName:"ul"},"If after a time-limit, either of those acknowledgement are missing, the migration is reverted : the original token can be withdrawn freely by the sender, and the migrated token is burned."),(0,n.kt)("li",{parentName:"ul"},"Checked migrations need to be possible for either EVM => EVM, ",(0,n.kt)("em",{parentName:"li"},"=> EVM or EVM =>")," migrations."),(0,n.kt)("li",{parentName:"ul"},'Checked migrations need to allow any third party to "check" the migration and publish a standardized signed message that the migration did indeed happen.'),(0,n.kt)("li",{parentName:"ul"},"NB : This only cover the migration of NFTs to a new universe, not the redemption of the the NFT back to it's origin universe."),(0,n.kt)("li",{parentName:"ul"},"Licensed under the ",(0,n.kt)("a",{parentName:"li",href:"https://unlicense.org"},"Unlicense"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The main purpose of this migration process is for NFT publishers to allow their users to effortlessly migrate their tokens with the least amount of efforts required. NFT publishers could offer users to do the whole migration with a single gas spending approve() from an NFT owner and the rest trough meta-transactions by the publisher. The publisher would then sign the migration as properly done after having minted and transferred the token on the destination blockchain. By essence, most NFTs are not trustless assets as their publishers own real world IP rights to them, and it is hence acceptable to use said publishers as relayers. This is standardizing a process that would otherwise require the publisher to update their original NFT smart contracts or NFT owners to burn their original NFT token in order to get a new one minted on the destination universe.")),(0,n.kt)("h3",{id:"milestone-3--trustless-migration-process"},"Milestone 3 \u2014 Trustless Migration Process"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," ~1 week")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Work Days:")," 10 days"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cost per work day:")," \xa3300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," \xa33,000 (4075.26 USD/DAI)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deliverable:")," A documented step by step process that would allow a trust-minimized relayer to perform migrations of NFTs.")),(0,n.kt)("p",null,"We will write up the \u2018Trustless Migration\u2019 process which is designed to be used when the destination universe have trutsless state reading capabilities of the origin universe."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Snowfork is already building a substrate module allowing specifically for Ethereum Smart contract reading. If a Substrate-built parachain implement those reading capacities, then implementation of this process should be straightforward."),(0,n.kt)("li",{parentName:"ul"},"In the case of EVM => EVM ERC-721 migration without trustless reading, Chainbridge already exist. However, their contracts requires administrator input for new contract registration as well as lacking features that are NFT specific, such as preventing minting technically correct but legally counterfeit tokens."),(0,n.kt)("li",{parentName:"ul"},"NB : This only cover the migration of NFTs to a new universe, not the redemption of the the NFT back to it's origin universe."),(0,n.kt)("li",{parentName:"ul"},"Licensed under the ",(0,n.kt)("a",{parentName:"li",href:"https://unlicense.org"},"Unlicense"))),(0,n.kt)("h3",{id:"milestone-4--standard-and-documentation-for-cross-universe-migration"},"Milestone 4 \u2014 Standard and Documentation for Cross-universe Migration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," ~1 week")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FTE:"),"  2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Work Days:")," 15 days")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cost per work day:")," \xa3300")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Costs:")," \xa34,500 (6112.89 USD/DAI)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Deliverables:"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A generic Standard written in pseudocode including predicate and postulate for each function and events that would allow for either checked or trustless migrations to be performed for the same asset, from the same bridge : only one endpoint should be sufficient to know about all of the migrations. This standard is the most generic version and allows the most diverse universes, and henceforth is the least constrained. It will have it's own dedicated decentralized webpage explaining the standard as well as a documentation and links to both the EIP and the PSP. This decentralized webpage will also have a centralized, cached version that NFT.com will host.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An EIP standard written in Solidity including predicate and postulate for each function and events that would allow for either checked or trustless migrations to be performed for the same asset, from the same bridge.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A PSP standard written in ink! including predicate and postulate for each function and events that would allow a smart contract for either checked or trustless migrations to be performed for the same asset, from the same bridge. This would allow third parties to integrate an NFT bridge on any Smart contract supporting parachain, even if said parachain does not explicitely support a trustless communication channel with other parachains at the substrate level. As a separate module of this PSP we will also provide a standard for parachain NFT migrations using SPREE provided that both parachains implement this standard.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Those standards must allow an EVM bridge following the EIP on ethereum mainnet/moonbeam to migrate an NFT to a WASM bridge following the PSP standard on a parachain and vice versa."))),(0,n.kt)("p",null,"We will write up the standard and documentation for cross-universe migration, which includes \u201cnecessary\u201d and \u201coptional\u201d data for optimization. This is a summarized write up of both the previous milestones but writen as specifications for implementations, including the predicate and postulate of each message and what they mean in term of state on the source and destination universe."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Challenge: Establishing predicate and postulate on what are the allowed pair of source/destination worlds. Those allowed pairs could be designed in any fashion, from centralized trusted to decentralized and trust minimized."),(0,n.kt)("li",{parentName:"ul"},"Licensed under the ",(0,n.kt)("a",{parentName:"li",href:"https://unlicense.org"},"Unlicense")," or when required under the license requirements of EIP and PSP.")),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"We will implement this standard for EVM-compatible chains. Our main goal is the ability for any Ethereum mainnet NFT to be painlessly migrated to Moonbeam on the Polkadot network."),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,"This proposal is a part of the wider NFT.com venture."),(0,n.kt)("p",null,"Learn more about our vision for the bridge here: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1mhSKmC_4Hg7GqJuSLZk5Tu1hNjJlqo6O5TNwFx-e6vw/edit?usp=sharing"},"link")))}u.isMDXComponent=!0}}]);