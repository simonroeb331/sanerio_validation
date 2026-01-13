'use client';

import React, { useEffect, useState } from 'react';
import { Download, Users, Eye, CheckCircle } from 'lucide-react';

interface Stats {
  pageViews: Array<{ target_group: string; count: number }>;
  submissions: Array<{ target_group: string; count: number }>;
}

interface Submission {
  id: number;
  target_group: string;
  email: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  note: string | null;
  timestamp: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      const data = await response.json();
      setStats(data.stats);
      setSubmissions(data.submissions);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    window.location.href = '/api/admin/export';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <p className="text-slate-600">Lädt...</p>
      </div>
    );
  }

  const targetGroupNames: Record<string, string> = {
    eigentuemer: 'Eigentümer',
    energieberater: 'Energieberater',
    handwerker: 'Handwerker'
  };

  const getCount = (arr: Array<{ target_group: string; count: number }>, group: string) => {
    return arr.find(item => item.target_group === group)?.count || 0;
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Sanerio Admin</h1>
            <p className="text-slate-600 mt-1">Validierungs-Dashboard</p>
          </div>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition"
          >
            <Download className="w-5 h-5" />
            CSV Export
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {['eigentuemer', 'energieberater', 'handwerker'].map(group => {
            const views = getCount(stats?.pageViews || [], group);
            const subs = getCount(stats?.submissions || [], group);
            const color = group === 'eigentuemer' ? 'green' : group === 'energieberater' ? 'blue' : 'orange';
            const colorClass = color === 'green' ? 'bg-green-600' : color === 'blue' ? 'bg-blue-600' : 'bg-orange-600';
            
            return (
              <div key={group} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{targetGroupNames[group]}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Page Views</span>
                    </div>
                    <span className="text-2xl font-bold text-slate-800">{views}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Submits</span>
                    </div>
                    <span className="text-2xl font-bold text-slate-800">{subs}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm text-slate-600">Conversion Rate</div>
                    <div className="text-lg font-bold text-slate-800">
                      {views > 0 ? ((subs / views) * 100).toFixed(1) : '0'}%
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-slate-800">Alle Einreichungen ({submissions.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Zeit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Zielgruppe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">E-Mail</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Antworten</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Bemerkung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {new Date(sub.timestamp).toLocaleString('de-DE')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {targetGroupNames[sub.target_group]}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">{sub.email}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <div className="space-y-1">
                        <div><strong>1:</strong> {sub.q1}</div>
                        <div><strong>2:</strong> {sub.q2}</div>
                        <div><strong>3:</strong> {sub.q3}</div>
                        <div><strong>4:</strong> {sub.q4}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">
                      {sub.note || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}