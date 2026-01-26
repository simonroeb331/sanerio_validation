"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
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
  Route,
  ArrowLeft,
  MapPin,
  CalendarCheck,
  Handshake,
  Info as InfoIcon
} from "lucide-react";

export default function AboutPage() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const [showFloatingBack, setShowFloatingBack] = useState(false);

  const backHref =
    from === "eigentuemer"
      ? "/eigentuemer"
      : from === "energieberater"
      ? "/energieberater"
      : from === "handwerker"
      ? "/handwerker"
      : "/";

  // Floating back button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBack(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      title: "1) Bedarf erfassen",
      icon: ClipboardList,
      text: "Eigentümer geben die wichtigsten Eckdaten ein: Objekttyp, Sanierungsziel, gewünschter Zeit- und verfügbarer Kostenrahmen. Sanerio strukturiert die Anfrage und klärt Erwartungen von Anfang an."
    },
    {
      title: "2) Energieberatung finden & iSFP erstellen",
      icon: FileText,
      text: "Wir vermitteln passende Energieberater aus Ihrer Region. Der iSFP wird extern erstellt und auf Sanerio als Umsetzungsfahrplan hochgeladen – mit Prioritäten, Abhängigkeiten und nächsten Schritten."
    },
    {
      title: "3) Umsetzung planen",
      icon: CalendarClock,
      text: "Sanerio übersetzt den iSFP in konkrete Arbeitspakete: Welche Gewerke? In welcher Reihenfolge? Welche Voraussetzungen müssen erfüllt sein? So wird aus Beratung ein planbares Projekt."
    },
    {
      title: "4) Handwerk findet zusammen (Sanierungssprint)",
      icon: Hammer,
      text: "Handwerksbetriebe sehen vorqualifizierte Projekte und bewerben sich gezielt. Dank lokaler Koordination entstehen flexible Allianzen – keine starren Ketten, sondern projektbezogene Zusammenarbeit.",
      hasInfoBox: true,
      infoBoxText: "Mehrere Gewerke arbeiten durch detailgenaue Vorplanung koordiniert, in klarer Abfolge, mit verlässlichem Timing. Fokussiert, planbar, effizient."
    },
    {
      title: "5) Abschluss & Qualitätssicherung",
      icon: CheckCircle2,
      text: "Sanerio begleitet die Umsetzung als Dokumentations- und Koordinationssystem – mit strukturierter Rückmeldung und sauberer Dokumentation. Die technische Baubegleitung erfolgt durch den beauftragten Energieberater."
    }
  ];

  const benefits = [
    {
      title: "Für Eigentümer",
      icon: Users,
      borderColor: "border-blue-600",
      items: [
        "Qualifizierte Energieberater in Ihrer Region finden",
        "Vom iSFP zur Umsetzung – strukturiert und nachvollziehbar",
        "Transparente und einegbestimmte Planung zusammen mit Sanerio"
      ]
    },
    {
      title: "Für Energieberater",
      icon: Lightbulb,
      borderColor: "border-green-600",
      items: [
        "Vorqualifizierte Aufträge ohne aufwändige Akquise",
        "iSFP als Umsetzungsfahrplan – Ihre Arbeit trägt effizient zum klimaneutralen Gebäudebestand bei",
        "Zusätzliche Chancen auf Folgebeauftragung (Baubegleitung)"
      ]
    },
    {
      title: "Für Handwerksbetriebe",
      icon: Wrench,
      borderColor: "border-orange-600",
      items: [
        "Fertig geplante Projekte, die zu Ihren Kapazitäten passen",
        "Lokale Cluster nutzen: mehrere Aufträge, bessere Auslastung",
        "Keine GU-Abhängigkeit, projektbezogene Kooperation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Network className="w-12 h-12 text-white" />
            <Image
              src="/sanerio-logo.png"
              alt="Sanerio Logo"
              width={220}
              height={60}
              priority
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-light mb-3 leading-tight">
            Von der Energieberatung zur fertigen Sanierung – <br className="hidden md:block" />
            strukturiert, planbar, vernetzt.
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Wir machen aus Sanierungsvorhaben umsetzbare Projekte – mit klarer Planung, passenden Partnern und lokaler Koordination.
          </p>

          <div className="mt-6">
            <Link href={backHref} className="inline-flex items-center gap-2 underline text-white/90 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Was ist Sanerio */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Was ist Sanerio?</h2>
          <p className="text-slate-700 mb-4">
            Sanerio ist die Plattform, die Sanierungsprojekte vom Plan in die Praxis bringt. Wir verbinden Eigentümer mit qualifizierten Energieberatern vor Ort und übersetzen den individuellen Sanierungsfahrplan (iSFP) in konkrete, umsetzbare Pakete für Handwerksbetriebe.
          </p>
          <p className="text-slate-800 font-semibold">
            Das Ergebnis: Weniger Reibung, schnellere Umsetzung, planbare Abläufe – für alle Beteiligten.
          </p>
        </div>

        {/* Drehscheibe / Hub */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Network className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">Sanerio als Drehscheibe: So arbeiten wir</h2>
          </div>

          <p className="text-slate-700 mb-6">
            Sanerio strukturiert Informationen, koordiniert Abläufe und bringt die richtigen Partner zusammen – für die bestmögliche Umsetzung energetischer Sanierungen!
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Eigentümer */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-7 h-7 text-blue-600" />
                <p className="font-semibold text-slate-800">Eigentümer</p>
              </div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Beschreiben ihr Objekt, ihre Ziele sowie den gewünschten Zeit- und Kostenrahmen – einfach und strukturiert mit vorgefertigten Elementen</li>
                <li>• Erhalten Zugang zu passenden, qualifizierten Energieberatern in ihrer Region</li>
                <li>• Beauftragen den Energieberater extern und erhalten einen individuellen iSFP</li>
                <li>• Laden den iSFP bzw. die relevanten Keyfacts gemeinsam mit dem Energieberater auf Sanerio hoch</li>
                <li>• Übernehmen damit Teile der Sanierungsplanung selbst und sparen dadurch Zeit und Kosten</li>
              </ul>
            </div>

            {/* Hub */}
            <div className="rounded-xl p-6 border-2 border-blue-200 bg-blue-50 flex flex-col justify-center">
              <div className="text-center mb-4">
                <Network className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-blue-700 mb-1">Sanerio</p>
                <p className="text-slate-800 font-semibold text-lg mb-2">Struktur · Planung · Vernetzung</p>
              </div>
              <p className="text-sm text-slate-700 text-center mb-4">
                Wir übersetzen Beratung in umsetzbare Sanierungspakete und zeigen Handwerkern, wo ihre Kapazitäten gebraucht werden – zeitlich, räumlich, fachlich.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Transparenz statt Ratlosigkeit</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Koordination statt Wartezeit</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Kooperation statt Einzelkämpfer</span>
                </div>
              </div>
            </div>

            {/* Energieberater & Handwerk */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-7 h-7 text-blue-600" />
                <p className="font-semibold text-slate-800">Energieberater</p>
              </div>
              <ul className="text-sm text-slate-700 space-y-2 mb-6">
                <li>• Finden vorqualifizierte Aufträge in ihrer Region</li>
                <li>• Erstellen den iSFP extern und laden gemeinsam mit den Eigentümern die relevanten Keyfacts als Umsetzungsgrundlage hoch</li>
                <li>• Profitieren von höherer Umsetzungsquote und besseren Chancen auf Folgebeauftragungen (z. B. Baubegleitung)</li>
              </ul>

              <div className="flex items-center gap-3 mb-3">
                <Wrench className="w-7 h-7 text-blue-600" />
                <p className="font-semibold text-slate-800">Handwerk</p>
              </div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Sehen auf einen Blick fertig vorbereitete Sanierungspakete mit klaren Gewerken, Timing und Abhängigkeiten</li>
                <li>• Bewerben sich gezielt auf passende Projekte („Cherry Picking")</li>
                <li>• Nutzen lokale Cluster: mehrere Sanierungen in derselben Region ermöglichen bessere Planung von Zeit und Material</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-6">
            Hinweis: Sanerio ist kein Generalunternehmer. Wir schaffen projektbezogene Allianzen – flexibel, transparent und passend zu Ihren Kapazitäten.
          </p>
        </div>

        {/* Prozess / Stepper */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Route className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">Der Ablauf: In 5 Schritten zur fertigen Sanierung</h2>
          </div>

          <div className="relative">
            {/* Vertikale Timeline-Linie */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

            <div className="space-y-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 relative z-10">
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-slate-800">{s.title}</p>
                        <p className="text-slate-700 mt-1">{s.text}</p>
                      </div>
                    </div>

                    {/* Info-Box für Sanierungssprint */}
                    {s.hasInfoBox && (
                      <div className="ml-15 mt-3 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <div className="flex items-start gap-2">
                          <InfoIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-blue-900 mb-1">
                              Was ist ein Sanierungssprint?
                            </p>
                            <p className="text-sm text-slate-700">
                              {s.infoBoxText}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Kooperation & Planung */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Warum Sanierungen mit Sanerio schneller und planbarer werden
          </h2>
          <p className="text-slate-700 mb-6">
            Viele Sanierungen scheitern nicht an fehlendem Willen, sondern an Reibungsverlusten: unklare Daten, fehlende Reihenfolge, lange Wartezeiten, falsche Erwartungen zwischen Eigentümern und Handwerk. Genau hier setzt Sanerio an.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <CalendarCheck className="w-6 h-6 text-blue-600" />
                <p className="font-semibold text-slate-800">Planung statt Chaos</p>
              </div>
              <p className="text-sm text-slate-700">
                Abhängigkeiten, Pakete und Timing werden so aufbereitet, dass Handwerksbetriebe verlässlich zusagen können – ohne böse Überraschungen.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <p className="font-semibold text-slate-800">Lokale Koordination</p>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                Wo mehrere Sanierungen räumlich und zeitlich zusammenfallen, können Betriebe Personal und Material effizienter planen. Sanerio macht diese Cluster sichtbar.
              </p>
              
              {/* Mini-Visualisierung Lokale Cluster */}
              <div className="flex items-center justify-center gap-3 pt-3 border-t border-slate-200">
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs text-blue-700">🏠</span>
                  </div>
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs text-blue-700">🏠</span>
                  </div>
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs text-blue-700">🏠</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="w-6 h-6 text-blue-600" />
                <p className="font-semibold text-slate-800">Flexible Allianzen statt GU-Abhängigkeit</p>
              </div>
              <p className="text-sm text-slate-700">
                Gewerke arbeiten projektbezogen zusammen – passend zu ihren Kapazitäten und Stärken. Kein starres System, sondern transparente Vermittlung.
              </p>
            </div>
          </div>

          {/* Abschluss-Highlight */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-slate-800 font-semibold">
              Das Ergebnis: Schnellere Umsetzung, geringere Kosten, zufriedenere Partner auf allen Seiten.
            </p>
          </div>
        </div>

        {/* Ihre Vorteile auf einen Blick */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Ihre Vorteile auf einen Blick
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl p-6 shadow-md border-t-4 ${benefit.borderColor}`}
                >
                  <div className="flex flex-col items-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="font-semibold text-slate-800 text-center">
                      {benefit.title}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Back Button */}
      {showFloatingBack && (
        <Link
          href={backHref}
          className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all z-50 flex items-center justify-center"
          aria-label="Zurück"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}