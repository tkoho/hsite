export const FAQ_CATEGORIES = [
  {
    title: 'General Questions',
    items: [
      {
        question: 'Is your solution p2p or p2c based?',
        answer:
          'Kiwi Payment is a unique, fully compliant and patented hybrid system that incorporates both P2P, P2C and B2B payment / exchange / processing mechanisms.',
      },
      {
        question: "Is it your own solution or do you resell someone's?",
        answer:
          "Entirely unique infrastructure and service delivery for Kiwi Payment systems – yet the network leverages all PSP's and APM's globally – so we have most every established provider and processor available for selection (e.g., Stripe, Adyen, PayPal, GooglePay, PIX, UPI, PayID, and so on)",
      },
    ],
  },
  {
    title: 'Limit Questions',
    items: [
      {
        question: 'Do you have any limit of amount of transactions per day?',
        answer:
          'Payment limits depend on the specific payment method and the jurisdiction involved, with different transaction sizes and monthly limits for each.\n\nFor example, PayID in Australia currently supports transactions from $10 AUD up to $500,000 AUD per transaction, and infrastructure adjustments are recommended if monthly processing exceeds $140 million AUD. In contrast, credit card processing in Australia allows transaction sizes between $10 AUD and $8,900 AUD, with infrastructure adjustments needed for monthly processing beyond $200 million AUD.\n\nThese limits, transaction sizes, and volumes vary by processing type and region but can be customized. Cryptocurrency payments, by contrast, have no transaction limits globally.',
      },
      {
        question: 'Min amount charged per deposit or payouts?',
        answer:
          'Typically, $10 AUD is the minimum transaction amount for most payment types, with similar minimum payout requirements. Payout options include fiat (bank transfer), cryptocurrency, cash, credit, credit card, and others. The costs for these methods can often be passed to the client as part of their selected method fee at the time of transaction.',
      },
      {
        question:
          'Are deposited funds automatically available for payouts? T+0? Or is T+1?',
        answer:
          'Yes, timing typically depends on the payment method and volume. For example, PayID generally settles in T+1 to T+3, while cryptocurrency often completes in T+0. Settlement times can be adjusted based on specific requirements or preferences.',
      },
      {
        question: 'Do we have any per day/per week/per month deposit limits?',
        answer:
          'These requirements are flexible and typically set during the discovery phase. Common minimum levels are around $30K for withdrawals and $10 million to $100 million for monthly processing volumes. Settlements can be on-demand, ad-hoc, or fully automated according to any preferred payment schedule.',
      },
    ],
  },
  {
    title: 'Onboarding Questions',
    items: [
      {
        question:
          'Should we discuss and provide you with information about expected merchant volume so that to avoid situation when you reach your accounts limits?',
        answer:
          'Yes, having a general estimate and understanding of volume is ideal. This allows for proper load balancing and infrastructure setup to fully meet any specific requirements you may have.',
      },
      {
        question:
          'What is the onboarding procedure for our merchants: should you approve them one by one or you approve us once and we aggregate all the merchants under our MID? What information you require for approval if any?',
        answer:
          'Using a MID or aggregation under your account is the most common approach for our operations. We offer a range of customizable options to suit your preferences. The admin panel supports ticket handling and can be fully white-labeled with custom URL placement. You can also set up sub-API authorizations and create multiple accounts to serve your clients as needed.',
      },
      {
        question:
          'Do you accept Forex, Binary, Gaming and Gambling merchants? Crypto? Any restrictions on merchant verticals you are not comfortable with?',
        answer:
          'We support all merchants and uses, fully licensed and operational to process any payment type you need, with no restrictions.',
      },
      {
        question:
          'Can you accept a foreign registered entity as your merchant of record? We have a licensed PSP entity and a standard legal entity, which type of entity do you prefer?',
        answer:
          'Yes. The infrastructure is global with most all jurisdictions accommodating local processing too. There are again mostly no restrictions.',
      },
    ],
  },
  {
    title: 'API Questions',
    items: [
      {
        question:
          'Do you offer API bank status update? (when we can call your API to receive current information about working banks to avoid operational hassle to ask it via chats)',
        answer:
          'Yes. Both comprehensive API as well as transaction status – these are also available in webhook form – any DB and movement / TRX can also be accommodated.',
      },
      {
        question:
          'Do you offer API real status codes? (in other words, can your API notify us about which stage of the payment list is: login received, the client waits for TAC, client wrongly keyed in TAC, the client is inactive for X minutes etc..)',
        answer:
          'Absolutely. We do have some general documentation that will be provieded but we are again highly flexible as preferred.',
      },
      {
        question: 'Is server-to-server integration available?',
        answer: 'Yes. Please just let us know the details.',
      },
      {
        question:
          'Can we do partial refund instead of full refund through the dashboard or API?',
        answer:
          'Yes, refunds can be processed directly through the dashboard. Each payment type and method varies; in some cases, issuing a "payout" ticket may be more cost-effective than a direct refund. We\'d be happy to walk you through these options and details.',
      },
      {
        question:
          'We need to whitelist IP addresses for incoming/outbound transactions between our gateways. Does your gateway have whitelist function?',
        answer:
          'Yes, settings can be customized exactly as you wish. We can provide CNAME details for integration, allowing the admin panel and paywall to be fully branded and tailored to your site, with no need for third-party redirects. This ensures a seamless experience, regardless of Kiwi Payment placement for you or your clients.',
      },
      {
        question:
          'Please describe operational and technical (what will be sent in callback API) aspects of the case above.',
        answer:
          'Please refer to the API documentation for this and we can provide any further details as may be requested and/or on call.',
      },
    ],
  },
  {
    title: 'Settlement Questions',
    items: [
      {
        question:
          'Can you do international settlements in USD/EUR? Local settlements? USDT?',
        answer:
          'All settlements are in USDT or any stablecoin / cryptocurrency of your choice.',
      },
      {
        question: 'Do you have in-house MC or you work with 3rd party MC?',
        answer:
          'We have access to both – depending on the location and requirements.',
      },
      {
        question:
          'What is the source of FX rate for #local currency/USD, #local currency/EUR settlement exchange rate? Please provide me with examples of exchange rates for last 3 days.',
        answer:
          "These would be locked to the mutually agreed 'point of truth' – for example one client is at XE.com for FX and Binance market rates for USDT.",
      },
      {
        question:
          'What is the frequency of settlements? Is it by our request or there is some fixed amount after which you require us to settle money?',
        answer:
          'Processing times vary by payment method, typically ranging from T+0 to T+3. In some cases, such as highly audited and secure credit card payments from specific jurisdictions, processing may take longer due to additional security requirements.',
      },
      {
        question:
          'Do you impose any safekeeping fee for keeping money on your accounts over certain limit?',
        answer:
          'Yes, all processing goes through Tier 1 providers, with transactions classified as "successful" upon receipt and prepared for near-instant conversion and settlement. The only possible hold might come from PSPs if additional security or review is needed; however, no transactions have ever been lost, as we are fully audited and compliant at every stage.',
      },
      {
        question: 'Do you provide funds guarantee? Till what amount?',
        answer:
          "This setup can cover both fund volume and chargeback protection. We'd be happy to share specific examples during discussions or tailor them to your requirements.",
      },
      {
        question: 'What is the minimum local settlement amount?',
        answer:
          'Settlement minimums can be as low as $5K in some cases and are flexible based on preference. Settlements can also be automated, each with an individual audited account report available in both CSV and PDF formats.',
      },
      {
        question:
          'Please describe settlement request process. I will be assigning dedicated financial manager to you so I need to explain her what she should do to request settlements from you.',
        answer:
          'Instant and available as click-to-create via the admin panel directly.',
      },
      {
        question:
          'Can we use 3rd party MC personal account to request the settlement? (If require an authorise letter, we are able to provide)',
        answer:
          'Settlements can be sent to any authorized cryptocurrency wallet address you select. There are alternate options for different payout forms yet typically, it is completely as you choose.',
      },
    ],
  },
  {
    title: 'Other Questions',
    items: [
      {
        question: 'Whom should we contact in case reconciliation problems?',
        answer:
          'All transactions, events, and reports are audited and accessible in real-time. We offer real-time customer support and a dedicated channel, allowing direct review of any transaction or detail as needed.',
      },
      {
        question: 'Do you provide dashboard to see transactions and balances?',
        answer:
          'Yes. This is comprehensive and individually encrypted by and to yourself [ZKP, MPC].',
      },
      {
        question:
          'Will you be providing us with monthly transaction and balances reports for reconciliation? Or such information could be found in your dashboard?',
        answer:
          'Yes. These are dynamic and can be prepared directly by yourself any time through the admin dashboard.',
      },
      {
        question:
          'As you know sometimes gaming and Forex merchants need to do more payouts so they need to have more money on balances to be available for payouts. Will you be able to accept international wire transfers in USD, EUR or USDT to top up our balances? Do you charge any fee for top up?',
        answer: 'Yes. Any method is available / possible to set.',
      },
      {
        question:
          'What other top up options do you have except for international wire transfer?',
        answer:
          'All methods are available for both fiat and cryptocurrency. The secondary Lending Platform for cryptocurrency explicitly can be shared / tailored accordingly.',
      },
      {
        question:
          'Do you support payouts to local and foreign corporate bank accounts?',
        answer:
          'Yes. To any destination as preferred. These are all invoiced, audited and fully compliant transactions from across the BNKSY network.',
      },
      {
        question:
          'If you support for payout, we will only be able to provide you recipient name, account number, bank name and amount. No KYC documents will be provided. Can you still do the payout with the above information provided only?',
        answer:
          'This level of information is sufficient for certain payout types and jurisdictions. We offer flexibility and various options if additional methods or information are needed. A payout ticket can be created to facilitate any form of exchange, from crypto to fiat and beyond.',
      },
      {
        question:
          'Is there any restrictions for deposit amounts to be divisible by (1, 10, 100)?',
        answer:
          'No. They can be as granular as preferred and are calculated according to the transactions – not any arbitrary rounding.',
      },
      {
        question:
          'Please provide us with your gateway statistic on average success rate % per solution you offer.',
        answer:
          'Most methods average a 95% approval rate, with the global credit card average around 85%, influenced by a few specific regions. This rate can vary depending on industry type, region, and overall traffic quality.',
      },
      {
        question:
          'Your actions if client pays the amount different from requested? (had to pay $500, but transferred $450)',
        answer:
          "Our default response is to credit the purchaser's account for the completed amount, with any discrepancy noted, logged, and available for your review. However, you can customize the response logic to suit your needs. For example, you may choose to reject the payment or issue a refund if the balance differs.",
      },
      {
        question:
          'Will you be sending us SUCCESS callback only upon confirmation of the actual deposit received or you have some intermediary statuses before you send us SUCCESS callback?',
        answer:
          'Yes. SUCCESS to IN-PROCESS to any other status is documented and allows a live webhook for display / entry into any location you may prefer – but of course is already collated in the admin dashboard itself.',
      },
      {
        question:
          "Does your gateway allow payouts to a client (user_id) who didn't do deposit through your gateway?",
        answer:
          "Certainly – if they are clients' of yours / authorized accounts.",
      },
      {
        question:
          'Upon finishing the integration, will there any test/sandbox environment tests required to get live MIDs setup on your backend to start the live tests and processing?',
        answer:
          "A toggle is available in the admin dashboard (top-right) to switch between testing and production status. Once you've completed testing, integration, or sandbox use, we can elevate your keys to production status on demand.",
      },
      {
        question: 'Do your gateway or dashboard have refund function?',
        answer:
          'Yes. This has been addressed earlier and is a live click-to-create action in the dashboard yet can also be sectioned out for independent integration into any alternate environment too as may be preferred.',
      },
      {
        question:
          'Is there a limit on number of generated unique QRs/VAs/transactions for the offered solutions?',
        answer:
          'There is no limit and we further allow unlimited primary to secondary API key generation – all available through the dashboard as well.',
      },
      {
        question:
          "Is there a limit of new transaction_ids we can generate till the previous active (PENDING) transactions haven't reached SUCCESS or FAIL status?",
        answer:
          'No. Yet we would be setting any particular logic and/or safety mechanisms / thresholds during your custom setup / integration process which could restrict or contain this – as you may wish.',
      },
      {
        question:
          'Are you a regulated or non-regulated payment service provider? If you are regulated, please provide us a copy of your license and government link to proof it.',
        answer:
          "We are regulated for multiple purposes and services as well as holding numerous licenses yet also have active accounts / leverage PSP's as well as numerous established operations for others. We would be happy to provide a more detailed walkthrough and explanation directly should any questions remain.",
      },
    ],
  },
] as const;
