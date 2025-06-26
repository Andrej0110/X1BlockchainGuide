import React, { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

const BlogPostInvestor_3 = ({}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const data = [
    { territory: 'USA', amount: 1370000, percentage: 58.7 },
    { territory: 'India', amount: 525000, percentage: 22.5 },
    { territory: 'Australia', amount: 220000, percentage: 9.4 },
    { territory: 'China', amount: 100000, percentage: 4.3 },
    { territory: 'Sweden', amount: 80000, percentage: 3.4 },
    { territory: 'Canada', amount: 61000, percentage: 2.6 },
    { territory: 'Hong Kong', amount: 50000, percentage: 2.1 },
    { territory: 'Saudi Arabia', amount: 30000, percentage: 1.3 },
    { territory: 'Vietnam', amount: 20000, percentage: 0.9 },
    { territory: 'Singapore', amount: 15000, percentage: 0.6 },
    { territory: 'Poland', amount: 12000, percentage: 0.5 },
    { territory: 'Switzerland', amount: 10000, percentage: 0.4 },
    { territory: 'United Kingdom', amount: 10000, percentage: 0.4 },
    { territory: 'Kenya', amount: 10000, percentage: 0.4 }
  ];

  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

  const formatCurrency = (value) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value}`;
  };

  useEffect(() => {
    // Register Chart.js components
    Chart.Chart.register(
      Chart.CategoryScale,
      Chart.LinearScale,
      Chart.BarElement,
      Chart.Title,
      Chart.Tooltip,
      Chart.Legend
    );

    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.9)');
    gradient.addColorStop(1, 'rgba(5, 150, 105, 0.7)');

    chartInstance.current = new Chart.Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.territory),
        datasets: [{
          label: 'Investitionen',
          data: data.map(item => item.amount),
          backgroundColor: gradient,
          borderColor: '#059669',
          borderWidth: 1,
          borderRadius: 8,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#93c5fd',
            bodyColor: '#6ee7b7',
            borderColor: '#374151',
            borderWidth: 1,
            cornerRadius: 12,
            padding: 16,
            displayColors: false,
            callbacks: {
              title: function(context) {
                return context[0].label;
              },
              label: function(context) {
                const percentage = data[context.dataIndex].percentage;
                return [
                  `💰 ${formatCurrency(context.parsed.y)}`,
                  `${percentage}% der Gesamtsumme`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#475569',
              font: {
                size: 13,
                weight: 500
              },
              maxRotation: 45,
              minRotation: 45
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              color: '#475569',
              font: {
                size: 13,
                weight: 500
              },
              callback: function(value) {
                return formatCurrency(value);
              }
            },
            grid: {
              color: 'rgba(226, 232, 240, 0.6)',
              drawBorder: false
            }
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart'
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
            Globale Investitionen
          </h1>
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
            <span className="text-slate-600 mr-2">Gesamtsumme:</span>
            <span className="text-2xl font-bold text-emerald-600">
              {formatCurrency(totalAmount)}
            </span>
          </div>
        </div>

        {/* Chart Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-blue-900 p-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
              Investitionen nach Ländern
            </h2>
          </div>
          
          <div className="p-8">
            <div className="relative h-96">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>

          {/* Stats Footer */}
          <div className="bg-slate-50 px-8 py-6 border-t border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-600">{data.length}</div>
                <div className="text-sm text-slate-600">Länder</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(Math.max(...data.map(d => d.amount)))}
                </div>
                <div className="text-sm text-slate-600">Höchste Investition</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-violet-600">
                  {formatCurrency(data.reduce((sum, item) => sum + item.amount, 0) / data.length)}
                </div>
                <div className="text-sm text-slate-600">Durchschnitt</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-600">
                  {data.filter(d => d.amount >= 100000).length}
                </div>
                <div className="text-sm text-slate-600">über $100K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostInvestor_3;