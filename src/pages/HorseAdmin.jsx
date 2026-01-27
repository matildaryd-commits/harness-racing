import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, FileText, Download, Check, Clock, AlertCircle, ChevronRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function HorseAdmin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const horsesData = {
    1: { name: 'Kinematic', ownership: '100%' },
    2: { name: 'Pargas Sox', ownership: '33%' },
    3: { name: 'Deeply Express', ownership: '25%' },
    4: { name: 'Corsa Cortina', ownership: '25%' }
  };

  const horse = horsesData[id] || horsesData[1];

  const invoices = [
    {
      id: 1,
      month: 'Januari 2026',
      issueDate: '1 jan 2026',
      dueDate: '15 jan 2026',
      totalAmount: 12500,
      yourShare: Math.round(12500 * parseFloat(horse.ownership) / 100),
      status: 'paid',
      items: [
        { description: 'Träningsavgift', amount: 8000 },
        { description: 'Foder', amount: 2500 },
        { description: 'Veterinär', amount: 1200 },
        { description: 'Hovslagar', amount: 800 }
      ]
    },
    {
      id: 2,
      month: 'December 2025',
      issueDate: '1 dec 2025',
      dueDate: '15 dec 2025',
      totalAmount: 14200,
      yourShare: Math.round(14200 * parseFloat(horse.ownership) / 100),
      status: 'paid',
      items: [
        { description: 'Träningsavgift', amount: 8000 },
        { description: 'Foder', amount: 2500 },
        { description: 'Startavgifter', amount: 2500 },
        { description: 'Veterinär', amount: 1200 }
      ]
    },
    {
      id: 3,
      month: 'November 2025',
      issueDate: '1 nov 2025',
      dueDate: '15 nov 2025',
      totalAmount: 11800,
      yourShare: Math.round(11800 * parseFloat(horse.ownership) / 100),
      status: 'paid',
      items: [
        { description: 'Träningsavgift', amount: 8000 },
        { description: 'Foder', amount: 2500 },
        { description: 'Utrustning', amount: 1300 }
      ]
    },
    {
      id: 4,
      month: 'Oktober 2025',
      issueDate: '1 okt 2025',
      dueDate: '15 okt 2025',
      totalAmount: 15500,
      yourShare: Math.round(15500 * parseFloat(horse.ownership) / 100),
      status: 'paid',
      items: [
        { description: 'Träningsavgift', amount: 8000 },
        { description: 'Foder', amount: 2500 },
        { description: 'Veterinär', amount: 3200 },
        { description: 'Hovslagar', amount: 800 },
        { description: 'Transport', amount: 1000 }
      ]
    },
    {
      id: 5,
      month: 'September 2025',
      issueDate: '1 sep 2025',
      dueDate: '15 sep 2025',
      totalAmount: 12500,
      yourShare: Math.round(12500 * parseFloat(horse.ownership) / 100),
      status: 'paid',
      items: [
        { description: 'Träningsavgift', amount: 8000 },
        { description: 'Foder', amount: 2500 },
        { description: 'Startavgifter', amount: 1200 },
        { description: 'Hovslagar', amount: 800 }
      ]
    }
  ];

  // Add a pending invoice for current month
  const pendingInvoice = {
    id: 0,
    month: 'Februari 2026',
    issueDate: '1 feb 2026',
    dueDate: '15 feb 2026',
    totalAmount: 13000,
    yourShare: Math.round(13000 * parseFloat(horse.ownership) / 100),
    status: 'pending',
    items: [
      { description: 'Träningsavgift', amount: 8000 },
      { description: 'Foder', amount: 2500 },
      { description: 'Startavgifter', amount: 1700 },
      { description: 'Hovslagar', amount: 800 }
    ]
  };

  const allInvoices = [pendingInvoice, ...invoices];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', minimumFractionDigits: 0 }).format(amount);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid': return <Check size={14} />;
      case 'pending': return <Clock size={14} />;
      case 'overdue': return <AlertCircle size={14} />;
      default: return null;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'paid': return 'Betald';
      case 'pending': return 'Att betala';
      case 'overdue': return 'Förfallen';
      default: return '';
    }
  };

  // Calculate yearly summary
  const yearlySummary = invoices.reduce((acc, inv) => {
    acc.total += inv.yourShare;
    return acc;
  }, { total: 0 });

  return (
    <div className="page-wrapper">
      <div className="subpage-header">
        <button className="back-btn-light" onClick={() => navigate(`/horses/${id}`)}>
          <ChevronLeft size={20} />
        </button>
        <div className="subpage-header-content">
          <h1>Admin</h1>
          <span className="subpage-horse-name">{horse.name}</span>
        </div>
        <div style={{ width: '36px' }} />
      </div>

      <div className="content">
        {/* Summary Card */}
        <div className="card admin-summary-card">
          <div className="admin-summary-header">
            <div>
              <span className="admin-summary-label">Din ägarandel</span>
              <span className="admin-summary-value">{horse.ownership}</span>
            </div>
            <div className="admin-summary-divider" />
            <div>
              <span className="admin-summary-label">Totalt 2025</span>
              <span className="admin-summary-value">{formatCurrency(yearlySummary.total)}</span>
            </div>
          </div>
        </div>

        {/* Pending Invoice Alert */}
        {pendingInvoice && (
          <div className="card pending-invoice-alert" onClick={() => setSelectedInvoice(pendingInvoice)}>
            <div className="pending-alert-icon">
              <Clock size={20} />
            </div>
            <div className="pending-alert-content">
              <h4>Faktura att betala</h4>
              <p>{pendingInvoice.month} • Förfaller {pendingInvoice.dueDate}</p>
            </div>
            <div className="pending-alert-amount">
              {formatCurrency(pendingInvoice.yourShare)}
            </div>
            <ChevronRight size={18} />
          </div>
        )}

        {/* Invoices List */}
        <h3 className="section-title standalone">
          <FileText size={18} />
          Fakturor
        </h3>

        {allInvoices.map((invoice) => (
          <div
            key={invoice.id}
            className={`card invoice-card ${selectedInvoice?.id === invoice.id ? 'expanded' : ''}`}
            onClick={() => setSelectedInvoice(selectedInvoice?.id === invoice.id ? null : invoice)}
          >
            <div className="invoice-header">
              <div className="invoice-month">
                <FileText size={18} />
                <span>{invoice.month}</span>
              </div>
              <div className={`invoice-status ${invoice.status}`}>
                {getStatusIcon(invoice.status)}
                <span>{getStatusLabel(invoice.status)}</span>
              </div>
            </div>

            <div className="invoice-amounts">
              <div className="invoice-amount-item">
                <span className="amount-label">Total</span>
                <span className="amount-value">{formatCurrency(invoice.totalAmount)}</span>
              </div>
              <div className="invoice-amount-item highlight">
                <span className="amount-label">Din andel ({horse.ownership})</span>
                <span className="amount-value">{formatCurrency(invoice.yourShare)}</span>
              </div>
            </div>

            {selectedInvoice?.id === invoice.id && (
              <div className="invoice-details">
                <div className="invoice-dates">
                  <span>Utfärdad: {invoice.issueDate}</span>
                  <span>Förfaller: {invoice.dueDate}</span>
                </div>

                <h4>Specifikation</h4>
                <div className="invoice-items">
                  {invoice.items.map((item, index) => (
                    <div key={index} className="invoice-item">
                      <span>{item.description}</span>
                      <span>{formatCurrency(item.amount)}</span>
                    </div>
                  ))}
                  <div className="invoice-item total">
                    <span>Totalt</span>
                    <span>{formatCurrency(invoice.totalAmount)}</span>
                  </div>
                </div>

                <div className="invoice-actions">
                  <button className="btn btn-outline btn-small">
                    <Download size={16} />
                    Ladda ner PDF
                  </button>
                  {invoice.status === 'pending' && (
                    <button className="btn btn-primary btn-small">
                      Betala nu
                    </button>
                  )}
                </div>
              </div>
            )}

            {selectedInvoice?.id !== invoice.id && (
              <div className="invoice-expand-hint">
                <span>Visa detaljer</span>
                <ChevronRight size={16} />
              </div>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
