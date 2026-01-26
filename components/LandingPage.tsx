'use client';

import React, { useState } from 'react';
import { Home, Users, Zap, CheckCircle, Building, Lightbulb, Wrench, TrendingUp, Clock, Shield } from 'lucide-react';
import { targetGroups, TargetGroup } from '../lib/config';
import Link from "next/link";



const iconMap = {
  users: Users,
  clock: Clock,
  shield: Shield,
  'trending-up': TrendingUp,
  zap: Zap,
  building: Building,
};

const colorClasses = {
  green: {
    primary: 'bg-green-600 hover:bg-green-700',
    light: 'bg-green-50',
    text: 'text-green-600',
    ring: 'focus:ring-green-500'
  },
  blue: {
    primary: 'bg-blue-600 hover:bg-blue-700',
    light: 'bg-blue-50',
    text: 'text-blue-600',
    ring: 'focus:ring-blue-500'
  },
  orange: {
    primary: 'bg-orange-600 hover:bg-orange-700',
    light: 'bg-orange-50',
    text: 'text-orange-600',
    ring: 'focus:ring-orange-500'
  }
};

export default function LandingPage({ targetGroup }: { targetGroup: TargetGroup }) {
  const config = targetGroups[targetGroup];
  const colors = colorClasses[config.color as keyof typeof colorClasses];

  
  const [formData, setFormData] = useState({
    email: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    note: '',
    consent: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte gültige E-Mail eingeben';
    }
    if (!formData.q1) newErrors.q1 = 'Bitte auswählen';
    if (!formData.q2) newErrors.q2 = 'Bitte auswählen';
    if (!formData.q3) newErrors.q3 = 'Bitte auswählen';
    if (!formData.q4) newErrors.q4 = 'Bitte auswählen';
    if (!formData.consent) newErrors.consent = 'Zustimmung erforderlich';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetGroup,
          ...formData
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Fehler beim Absenden. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      alert('Fehler beim Absenden. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Vielen Dank!</h2>
          <p className="text-slate-600 mb-6">
            Wir haben Ihr Interesse erhalten und melden uns in Kürze bei Ihnen.
          </p>
        </div>
      </div>
    );
  }

  const Icon = targetGroup === 'eigentuemer' ? Home : targetGroup === 'energieberater' ? Lightbulb : Wrench;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero */}
<div className={`relative ${colors.primary} text-white pt-20 pb-28`}>
  <div className="max-w-4xl mx-auto px-4">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-12 h-12" />
      <h1 className="text-4xl md:text-5xl font-bold">Sanerio</h1>
    </div>
    <p className="text-2xl md:text-3xl font-light mb-2">
      Das Parship für die Sanierung
    </p>
    <p className="text-xl opacity-90">Für {config.title}</p>
  </div>

  {/* Link unten mittig im grünen Feld */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
    <Link
      href={`/ueber-sanerio?from=${encodeURIComponent(targetGroup)}`}
      className="text-sm underline underline-offset-4 opacity-90 hover:opacity-100"
    >
      Wie funktioniert Sanerio?
    </Link>
  </div>
</div>


      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Pain Points */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Kennen Sie das?</h2>
          <div className="space-y-3">
            {config.painPoints.map((point: string, i: number) => (

              <div key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 ${colors.primary} rounded-full mt-2 flex-shrink-0`} />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Die Lösung mit Sanerio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {config.benefits.map((benefit: { text: string; icon: string }, i: number) => {

              const BenefitIcon = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <div key={i} className={`${colors.light} rounded-xl p-6 text-center`}>
                  <div className={`w-12 h-12 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <BenefitIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-slate-800 font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Interesse bekunden</h2>
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-lg !text-slate-900 placeholder:text-slate-400 ${colors.ring} focus:border-transparent outline-none`}
                placeholder="ihre@email.de"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Questions */}
            {config.questions.map((question: { q: string; options: readonly string[] }, qIndex: number) => (


              <div key={qIndex}>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  {question.q} *
                </label>
                <div className="space-y-2">
                  {question.options.map((option: string) => (

                    <label key={option} className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition">
                      <input
                        type="radio"
                        name={`q${qIndex + 1}`}
                        value={option}
                        checked={formData[`q${qIndex + 1}` as keyof typeof formData] === option}
                        onChange={(e) => setFormData({...formData, [`q${qIndex + 1}`]: e.target.value})}
                        className="w-4 h-4"
                      />
                      <span className="text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors[`q${qIndex + 1}`] && <p className="text-red-500 text-sm mt-1">{errors[`q${qIndex + 1}`]}</p>}
              </div>
            ))}

            {/* Note */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Sonstiges / Bemerkung (optional)
              </label>
              <textarea
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
                className={`w-full px-4 py-2 border border-slate-300 rounded-lg !text-slate-900 placeholder:text-slate-400 ${colors.ring} focus:border-transparent outline-none`}
                rows={3}
                placeholder="Weitere Anmerkungen..."
              />
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  className="w-5 h-5 mt-0.5 rounded"
                />
                <span className="text-sm text-slate-700">
                  Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu. *
                </span>
              </label>
              {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full ${colors.primary} text-white py-3 rounded-lg font-semibold transition shadow-lg disabled:opacity-50`}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Interesse bekunden'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}