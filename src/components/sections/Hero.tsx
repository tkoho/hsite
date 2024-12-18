import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#1F2B5F] via-[#2B3377] to-[#3B4393] min-h-screen">
      <Container className="pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Global Payment Processing for High Risk Industries
            </h1>
            <div className="flex flex-col gap-4">
              <div className="inline-flex font-bold items-center px-4 py-2 rounded-full bg-[#3AAA35]/10 text-[#3AAA35] text-sm lg:text-base">
                <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  Unified API including all payment methods without any
                  redirects to external providers.
                </span>
              </div>
              <div className="inline-flex font-bold items-center px-4 py-2 rounded-full bg-[#3AAA35]/10 text-[#3AAA35] text-sm lg:text-base">
                <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  Tokenization and Smart Contracts To Eliminate Chargebacks and
                  Secure Transactions
                </span>
              </div>
              <div className="inline-flex font-bold items-center px-4 py-2 rounded-full bg-[#3AAA35]/10 text-[#3AAA35] text-sm lg:text-base">
                <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  Unlimited Crypto Transactions Including SOL, ETH and Top 30
                  Tokens
                </span>
              </div>
              <div className="inline-flex font-bold items-center px-4 py-2 rounded-full bg-[#3AAA35]/10 text-[#3AAA35] text-sm lg:text-base">
                <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  Industry Leading Fraud Detection, Security and AI Protection
                </span>
              </div>
              <div className="inline-flex font-bold items-center px-4 py-2 rounded-full bg-[#3AAA35]/10 text-[#3AAA35] text-sm lg:text-base">
                <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>80%-90% Credit Card Acceptance Rate</span>
              </div>
            </div>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="group w-full lg:w-auto mt-6"
              >
                <span>Talk To Our Team</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              <div className="absolute inset-0 bg-[#3AAA35] rounded-full blur-3xl opacity-20" />
              <video
                src="/websiteVideo.mp4"
                controls
                className="relative rounded-lg shadow-2xl w-full"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
