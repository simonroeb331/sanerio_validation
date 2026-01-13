export const targetGroups = {
  eigentuemer: {
    title: 'Eigentümer',
    color: 'green',
    painPoints: [
      'Sie wissen nicht, wo Sie anfangen sollen?',
      'Handwerker sind überlastet oder nicht erreichbar?',
      'Die Förderanträge verwirren Sie?',
      'Sie fürchten versteckte Kosten und Verzögerungen?',
      'Koordination zwischen Gewerken ist ein Albtraum?'
    ],
    benefits: [
      { text: 'Qualifizierte Partner an einem Ort', icon: 'users' },
      { text: 'Schnellere Umsetzung durch Koordination', icon: 'clock' },
      { text: 'Transparente Kosten & Fördermittel', icon: 'shield' }
    ],
    questions: [
      { q: 'In welchem Zeitraum möchten Sie sanieren?', options: ['0–3 Monate', '3–6 Monate', '6–12 Monate', '>12 Monate'] },
      { q: 'Was ist Ihr größtes Hindernis?', options: ['Kosten', 'Handwerker finden', 'Unklarer Plan', 'Zeit & Stress'] },
      { q: 'Wo stehen Sie gerade?', options: ['Noch ganz am Anfang', 'Energieberater gesucht', 'iSFP vorhanden', 'Angebote eingeholt'] },
      { q: 'Welche Maßnahme ist für Sie am wichtigsten?', options: ['Heizung', 'Dämmung', 'Fenster', 'PV/Elektrik'] }
    ]
  },
  energieberater: {
    title: 'Energieberater',
    color: 'blue',
    painPoints: [
      'Ihr iSFP landet oft in der Schublade?',
      'Sie haben keine Zeit für Umsetzungsbegleitung?',
      'Kunden finden keine Handwerker?',
      'Folgeaufträge bleiben aus?'
    ],
    benefits: [
      { text: 'Höhere Umsetzungsquote Ihrer Konzepte', icon: 'trending-up' },
      { text: 'Zugang zu verlässlichem Handwerkernetzwerk', icon: 'users' },
      { text: 'Zusatzumsatz durch Baubegleitung', icon: 'zap' }
    ],
    questions: [
      { q: 'Wie oft wird Ihr iSFP erfahrungsgemäß umgesetzt?', options: ['<25%', '25–50%', '50–75%', '>75%'] },
      { q: 'Welche Zusatzleistung wäre für Sie interessant?', options: ['Umsetzungsplanung', 'Ausschreibung & Vergabe', 'Projektkoordination', 'Baubegleitung'] },
      { q: 'Was ist heute Ihre größte Hürde?', options: ['Folgeaufträge', 'Handwerker-Netzwerk', 'Kundenmanagement', 'Tools & Prozesse'] },
      { q: 'Wie viele iSFP erstellen Sie pro Monat?', options: ['0–2', '3–5', '6–10', '>10'] }
    ]
  },
  handwerker: {
    title: 'Handwerker',
    color: 'orange',
    painPoints: [
      'Zu viele Kleinstaufträge, zu wenig Plan?',
      'Auftragsakquise frisst Ihre Zeit?',
      'Abstimmung mit anderen Gewerken ist mühsam?',
      'Sie wünschen sich planbare Großprojekte?',
      'Kunden sind oft schlecht vorbereitet?'
    ],
    benefits: [
      { text: 'Zugang zu vorqualifizierten Projekten', icon: 'building' },
      { text: 'Zusammenarbeit mit anderen Gewerken', icon: 'users' },
      { text: 'Weniger Akquise, mehr Bauzeit', icon: 'clock' }
    ],
    questions: [
      { q: 'Welche Art Projekte wünschen Sie sich?', options: ['Einzelmaßnahmen', 'Komplettsanierung', 'Seriell/standardisiert', 'Egal, Hauptsache planbar'] },
      { q: 'Was kostet Sie am meisten Zeit?', options: ['Aufmaß & Klärung', 'Angebote', 'Abstimmung Gewerke', 'Akquise'] },
      { q: 'Wären Sie offen für Allianzen/Sanierungssprints?', options: ['Ja sofort', 'Vielleicht', 'Nur mit festen Partnern', 'Nein'] },
      { q: 'Welche Region bedienen Sie?', options: ['Nur lokal', '30 km', '60 km', '>60 km'] }
    ]
  }
} as const;

export type TargetGroup = keyof typeof targetGroups;
