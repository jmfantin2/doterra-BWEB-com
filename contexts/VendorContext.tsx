'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { vendors } from '@/lib/vendors';

interface VendorContextType {
  vendorId: string;
  vendorPicture: string;
  vendorName: string;
  vendorEmail: string;
  vendorPhone: string;
  updateVendor: () => void;
}

const defaultVendor = vendors['17419004'];

const VendorContext = createContext<VendorContextType | undefined>(undefined);

export const VendorProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();

  // Estados individuais para cada propriedade do vendor
  const [vendorId, setVendorId] = useState(defaultVendor.vendorId);
  const [vendorPicture, setVendorPicture] = useState(
    defaultVendor.vendorPicture
  );
  const [vendorName, setVendorName] = useState(defaultVendor.vendorName);
  const [vendorEmail, setVendorEmail] = useState(defaultVendor.vendorEmail);
  const [vendorPhone, setVendorPhone] = useState(defaultVendor.vendorPhone);

  const updateVendor = useCallback(() => {
    const newVendorId = searchParams.get('vendorId');
    if (newVendorId) {
      const newVendor = vendors[newVendorId];
      if (newVendor) {
        setVendorId(newVendor.vendorId);
        setVendorPicture(newVendor.vendorPicture);
        setVendorName(newVendor.vendorName);
        setVendorEmail(newVendor.vendorEmail);
        setVendorPhone(newVendor.vendorPhone);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    updateVendor();
  }, [updateVendor]);

  return (
    <VendorContext.Provider
      value={{
        vendorId,
        vendorPicture,
        vendorName,
        vendorEmail,
        vendorPhone,
        updateVendor,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendor = () => {
  const context = useContext(VendorContext);
  if (!context) {
    throw new Error('useVendor must be used within a VendorProvider');
  }
  return context;
};
