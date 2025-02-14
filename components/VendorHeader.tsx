import Image from 'next/image';
import { useVendor } from '@/contexts/VendorContext';
import whatsappIcon from '@/app/_assets/whatsapp.png'; // Adicione um ícone do WhatsApp na pasta public/icons

const VendorHeader = () => {
  const { vendorPicture, vendorName, vendorEmail, vendorPhone } = useVendor();

  return (
    <nav className="w-full bg-base-100 shadow-md py-3 px-6 flex items-center justify-between">
      {/* Perfil do vendedor */}
      <div className="flex items-center gap-2">
        <Image
          src={`/images/consultants/${vendorPicture}`}
          alt={`Foto de ${vendorName}`}
          width={50}
          height={50}
          className="w-12 h-12 border border-gray-300 shadow-sm"
        />
        <div>
          <p className="text-sm text-gray-600">Consultor de Bem-Estar</p>
          <p className="text-lg font-semibold">{vendorName}</p>
          {/*<p className="text-sm text-gray-600">{vendorEmail}</p>*/}
        </div>
      </div>

      {/* Botão de WhatsApp */}
      <section className="flex gap-2">
        <a
          href={`https://api.whatsapp.com/send?phone=${vendorPhone}&text=Ol%C3%A1!%20Quero%20saber%20sobre%20os%20óleos%20essenciais.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={whatsappIcon} alt="WhatsApp" width={48} height={48} />
        </a>

        {/* Botão de Email */}
        <a
          href={`mailto:${vendorEmail}?subject=Quero saber sobre os óleos essenciais`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-500 min-w-[48px] min-h-[48px]"
        >
          <p className="text-3xl">✉️</p>
        </a>
      </section>
    </nav>
  );
};

export default VendorHeader;
