import {
  CreditCard,
  Shield,
  Globe,
  Bitcoin,
  Brain,
  Code2,
  Scale,
  BarChart,
} from 'lucide-react';

export const SOLUTIONS_DATA = [
  {
    id: 'developer-features',
    title: 'Unified API for On-Platform Payment Handling',
    description: {
      main: 'We understand the frustrations your customers feel when having to leave your platform to complete KYC or make a payment. The KiwiPayment API offers a comprehensive solution for integrating multiple payment methods—including credit cards, cryptocurrencies, digital wallets, and local payment options—directly into your platform.',
      details:
        'By embedding the payment interface within your application or website, customers can complete transactions without being redirected to third-party gateways. This improves user trust and reduces drop-offs during the checkout process​​.',
    },
    icon: Code2,
  },
  {
    id: 'payment-security',
    title: 'Industry Leading Security via Tokenization',
    description: {
      main: 'Sensitive payment data (e.g., credit card numbers) is replaced with unique, randomly generated tokens. These tokens carry no intrinsic value and cannot be reverse-engineered back to the original data.',
      details:
        'This removes sensitive data from the payment environment, reducing exposure during breaches and ensures customer data is safe even if intercepted during transmission​​. Tokenization can be applied across all payment methods and currencies allowing for full PCI-DSS compliance',
    },
    icon: Shield,
  },
  {
    id: 'crypto-payments',
    title: 'Advanced Crypto Payments',
    description: {
      main: 'We offer comprehensive cryptocurrency payment solutions tailored for global businesses and high-risk industries. With support for major cryptocurrencies like Bitcoin, Ethereum, stablecoins such as USDT, as well as alternative tokens like Solana, MATIC, and other Top 30 Tokens',
      details:
        'You will benefit from unlimited transaction capabilities, automatic crypto-to-stablecoin or fiat conversions, and rapid settlement times (T+0), making it ideal for handling high-frequency or high-value payments.',
    },
    icon: Bitcoin,
  },
  {
    id: 'credit-card-acceptance',
    title: '80-90% Success Rate For Credit Card Transactions',
    description: {
      details: [
        'Dynamic Routing: Sends transactions through the best acquirer for approval.',
        'Localized Processing: Local acquiring banks and currency localization reduce cross-border flags and increase transaction success.',
        'Retry Mechanisms: automatically re-attempt declines through alternative processors.',
        'Acquirer Partnerships: Access to Tier-1 banks ensures smoother processing.',
        'Chargeback Reduction: Smart contracts and dispute management tools minimize chargebacks, building trust with acquirers.',
      ],
    },
    icon: CreditCard,
  },
  {
    id: 'global-optimization',
    title: 'Global Payment Optimization',
    description: {
      main: 'Our platform supports region-specific methods like UPI, PIX, and PayID alongside global options such as credit cards, digital wallets, and cryptocurrencies to maximize accessibility and customer satisfaction.',
      details:
        'You will benefit from dynamic acquirer routing, multi-currency support, and localized interfaces, ensuring high transaction approval rates and seamless compliance with regional regulations. With a scalable infrastructure and strategic partnerships with Tier-1 acquirers, our system is designed to handle large volumes and provide reliable payment processing across international markets.',
    },
    icon: Globe,
  },
  {
    id: 'ai-protection',
    title: 'AI-Driven Payment Optimization',
    description: {
      main: 'Our AI tools dynamically analyze transactions, optimize routing to the most successful acquirers, and detect potential fraud in real time, ensuring secure and efficient payment flows.',
      details:
        'Fraud prevention algorithms reduce false declines, deploy adaptive retry mechanisms for declined transactions, and use smart routing to improve approval rates. By leveraging machine learning and predictive analytics, our platform continuously evolves to maximize success rates and streamline operations for businesses of any scale.',
    },
    icon: Brain,
  },
  {
    id: 'scalability',
    title: 'Exceptional Scalability',
    description: {
      main: 'Our platform is built to support the needs of growing businesses with a robust infrastructure, capable of handling millions of transactions daily. Designed for seamless global expansion, it ensures consistent performance even during peak demand.',
      details:
        'You will benefit from high-volume processing capabilities, adaptable integration options, and reliable uptime across diverse markets. With flexible configurations and scalable resources, our system empowers businesses to grow without limitations or interruptions.',
    },
    icon: Scale,
  },
  {
    id: 'conversion-rates',
    title: 'Customizable UI for Enhanced Conversion Rates',
    description: {
      main: 'We provide fully customizable payment flows that align with your brand, ensuring a seamless user experience. From tailored themes and layouts to localized interfaces, our platform is designed to keep customers engaged and reduce cart abandonment.',
      details: [
        'You will benefit from intuitive design options that enhance user trust and satisfaction, driving conversion rates up by as much as 25%. By offering personalized checkout experiences and multi-language support, we help you turn more visitors into loyal customers.',
        'We utilize Tier 1 PSPs capable of processing up to 300,000 transactions per second, ensuring scalability and zero lag during peak gaming or trading hours.',
      ],
    },
    icon: BarChart,
  },
] as const;
