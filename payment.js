import React from 'react';

export default function Payment() {
  const handleCheckout = async (plan) => {
    const res = await fetch('http://localhost:3001/api/payment/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    const data = await res.json();
    window.location = `https://checkout.stripe.com/pay/${data.id}`;
  };

  return (
    <div className="space-y-2">
      <button onClick={() => handleCheckout('basic')} className="bg-blue-500 text-white px-4 py-2 rounded">20€/Monat – 10k Mails</button>
      <button onClick={() => handleCheckout('pro')} className="bg-green-500 text-white px-4 py-2 rounded">50€/Monat – 100k Mails</button>
      <button onClick={() => handleCheckout('ultra')} className="bg-purple-500 text-white px-4 py-2 rounded">100€/Monat – 1M Mails</button>
    </div>
  );
}