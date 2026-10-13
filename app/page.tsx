'use client';

import { useEffect, useState } from 'react';
import WeddingInvitation from '@/components/WeddingInvitation';

export default function Home() {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const guest = params.get('guest') || '';
      if (guest) {
        setGuestName(guest);
      }
    }
  }, []);

  return <WeddingInvitation guestName={guestName} />;
}

