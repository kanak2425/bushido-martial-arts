import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/mockData';
import { MembershipPlan } from '../types';
import { Shield, Check, Sparkles, Star, Gift, Trophy } from 'lucide-react';

interface MembershipSectionProps {
  onSelectPlan: (planTitle: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="membership" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B0000]/20 border border-[#8B0000]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B6B]">
            <Shield className="w-3.5 h-3.5" />
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white tracking-tight">
            Academy <span className="gold-gradient-text">Membership Plans</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[#F5F5F5]/70">
            No long-term trap contracts. Simple monthly plans designed around your training goals and commitment level.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs uppercase font-bold tracking-wider ${!isAnnual ? 'text-[#D4AF37]' : 'text-white/50'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-white/10 rounded-full p-1 border border-white/20 transition-colors relative"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#8B0000] border border-[#D4AF37] transition-transform ${
                  isAnnual ? 'translate-x-7 bg-[#D4AF37]' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 ${isAnnual ? 'text-[#D4AF37]' : 'text-white/50'}`}>
              Annual Commitment
              <span className="px-2 py-0.5 bg-[#8B0000] text-white text-[10px] rounded font-mono">SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`glass-panel rounded-2xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-[#D4AF37] shadow-2xl shadow-[#8B0000]/30 lg:-translate-y-2 bg-gradient-to-b from-[#1C1C1C] via-[#121212] to-[#0B0B0B]'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] text-white text-[11px] font-bold uppercase tracking-widest rounded-full border border-white/30 shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-cinzel font-bold text-[#D4AF37]">
                      {plan.japaneseSubtitle}
                    </span>
                    <h3 className="text-2xl font-extrabold font-cinzel text-white mt-1">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-[#F5F5F5]/70 mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Header */}
                  <div className="py-4 border-y border-white/10 flex items-baseline gap-1">
                    <span className="text-4xl font-black font-cinzel text-white">${price}</span>
                    <span className="text-xs text-[#F5F5F5]/60">/ month</span>
                    {isAnnual && (
                      <span className="text-[10px] text-[#D4AF37] font-mono ml-auto">Billed annually</span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                      Plan Highlights & Included Perks:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F5F5]/90">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges: Free Uniform & Tournament */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 bg-black/50 rounded-lg border border-white/10 flex items-center gap-1.5 text-white">
                      <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{plan.includesFreeUniform ? 'Free Heavyweight Gi' : 'Standard Gi'}</span>
                    </div>

                    <div className="p-2.5 bg-black/50 rounded-lg border border-white/10 flex items-center gap-1.5 text-white">
                      <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{plan.tournamentAccess ? 'Tournament Team' : 'Local Sparring'}</span>
                    </div>
                  </div>
                </div>

                {/* Enrollment Button */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan.title)}
                    className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all border shadow-lg ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-[#8B0000] via-[#A31818] to-[#8B0000] hover:from-[#A31818] hover:to-[#8B0000] text-white border-[#D4AF37]'
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/20'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
