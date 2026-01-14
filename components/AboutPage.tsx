"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Info,
  Users,
  Lightbulb,
  Wrench,
  ArrowRight,
  FileText,
  ClipboardList,
  CalendarClock,
  Hammer,
  CheckCircle2,
  Network,
  Route
} from "lucide-react";

export default function AboutPage() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const backHref =
    from === "eigentuemer"
      ? "/eigentuemer"
      : from === "energieberater"
      ? "/energieberater"
      : from === "handwerker"
      ? "/handwerker"
      : "/";

  const steps = [
    {
      title: "1) Bedarf erfassen",
      icon: ClipboardList,
      text: "Eigentümer geben die wichtigsten Eckdaten ein (Objekt, Ziel, Zeitrahmen). Sanerio strukturiert die Anfrage und klärt Erwartungen früh."
    },
    {
      title: "2) Energieberatung & iSFP",
      icon: FileText,
      text: "Passende Energieberater werden vermittelt. Der iSFP wird nicht nur erstellt, sondern als Umsetzungsfahrplan vorbereitet (Prioritäten, Voraussetzungen, nächste Schritte)."
    },
    {
      title: "3) Umsetzungsplanung",
      icon: CalendarClock,
      text: "Sanerio übersetzt den Plan in umsetzbare Pakete: Gewerke, Reihenfolge, Abhängigkeiten, mögliche Zeitfenster – damit es für Handwerk planbar wird."
    },
    {
      title: "4) Umsetzung durch Handwerk (Sanierungssprint)",
      icon: Hammer,
      text: "Handwerksbetriebe können sich auf passende Projekte bewerben. Es entstehen lockere, projektbezogene Allianzen statt starrer GU-Strukturen."
    },
    {
      title: "5) Abschluss & Qualität",
      icon: CheckCircle2,
      text: "Koordination und Rückkopplung sorgen dafür, dass Maßnahmen sauber abgeschlossen werden – inkl. Dokumentation und optionaler Baubegleitung."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Info className="w-12 h-12 text-white" />
            <Image
              src="/sanerio-logo.png"
              alt="Sanerio Logo"
              width={220}
              height={60}
              priority
            />
          </div>

          <p className="text-2xl md:text-3xl font-light mb-2">
            Das Parship für die Sanierung
          </p>
          <p className="text-xl opacity-90">
            Sanerio verbindet Eigentümer, Energieberater und Handwerk – und macht Umsetzung planbar.
          </p>

          <div className="mt-6">
            <Link href={backHref} className="underline text-white/90 hover:text-white">
              Zurück
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Was ist Sanerio */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Was ist Sanerio?</h2>
          <p className="text-slate-700">
            Sanerio ist die Drehscheibe zwischen Eigentümern, Energieberatern und Handwerksbetrieben.
            Wir strukturieren Informationen, unterstützen die Planung und fördern die Zusammenarbeit – damit aus Beratung echte Umsetzung wird.
          </p>
        </div>

        {/* Drehscheibe / Hub */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Network className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">Sanerio als Drehscheibe</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Eigentümer */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-7 h-7 text-blue-600" />
                <p className="font-semibold text-slate-800">Eigentümer</p>
              </div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Ziele, Objekt, Zeitrahmen</li>
                <li>• Erwartungen & Prioritäten</li>
                <li>• Kontakt für nächste Schritte</li>
              </ul>
            </div>

            {/* Hub */}
            <div className="rounded-xl p-6 border-2 border-blue-200 bg-blue-50 flex flex-col justify-center text-center">
              <p className="text-sm font-semibold text-blue-700 mb-2">Sanerio</p>
              <p className="text-slate-800 font-semibold text-lg">Struktur · Planung · Kooperation</p>
              <p className="text-sm text-slate-700 mt-2">
                Übersetzt Bedarf in umsetzbare Pakete und bringt die passenden Partner zusammen.
              </p>
              <div className="flex justify-center gap-2 mt-4 text-blue-700">
                <ArrowRight className="w-5 h-5" />
                <ArrowRight className="w-5 h-5" />
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Energieberater & Handwerk */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-7 h-7 text-blue-600" />
                <p className="font-semibold text-slate-800">Energieberater</p>
              </div>
              <ul className="text-sm text-slate-700 space-y-2 mb-5">
                <li>• iSFP mit Umsetzungsfokus</li>
                <li>• Klarere Daten, weniger Reibung</li>
                <li>• Chancen für Baubegleitung</li>
              </ul>

              <div className="flex items-center gap-3 mb-3">
                <Wrench className="w-7 h-7 text-blue-600" />
                <p className="font-semibold text-slate-800">Handwerk</p>
              </div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Vorqualifizierte Projekte</li>
                <li>• Planbare Pakete & Timing</li>
                <li>• Bewerbung auf passende Jobs</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-6">
            Hinweis: Sanerio zielt auf lockere, projektbezogene Kooperationen – keine starren Generalunternehmer-Strukturen.
          </p>
        </div>

        {/* Prozess / Stepper */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Route className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">So läuft ein Projekt mit Sanerio ab</h2>
          </div>

          <div className="space-y-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{s.title}</p>
                    <p className="text-slate-700 mt-1">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sanierungssprints / Kooperation */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Kooperation & Planung: Sanierungssprints</h2>
          <p className="text-slate-700 mb-4">
            Viele Sanierungen scheitern nicht an Reibungsverlusten: unklare Daten, fehlende Reihenfolge,
            lange Wartezeiten, falsche Erwartungen. Sanerio setzt hier an – mit strukturierter Planung und projektbezogener Zusammenarbeit.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="font-semibold text-slate-800 mb-2">Planung statt Chaos</p>
              <p className="text-sm text-slate-700">
                Abhängigkeiten, Pakete und Timing werden verständlich vorbereitet – damit Handwerk verlässlich zusagen kann.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <p className="font-semibold text-slate-800 mb-2">Lockere Allianzen</p>
              <p className="text-sm text-slate-700">
                Gewerke arbeiten projektbezogen zusammen – flexibel, passend zu Kapazitäten und Stärken.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <p className="font-semibold text-slate-800 mb-2">Kein Generalunternehmer</p>
              <p className="text-sm text-slate-700">
                Sanerio ist Vermittler und Strukturierer – keine starre GU-Kette. Fokus: schneller, zuverlässiger, oft wirtschaftlicher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
