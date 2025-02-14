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
          className="w-14 h-14 border border-gray-300 shadow-sm"
        />
        <div>
          <p className="text-lg font-semibold">{vendorName}</p>
          <p className="text-sm text-gray-600 max-w-[160px] md:max-w-[400px] leading-none">
            Consultor de Bem-Estar
            {vendorName === 'João Marcelo' && (
              <span> e mantenedor do site.</span>
            )}
          </p>
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
          <Image src={whatsappIcon} alt="WhatsApp" width={56} height={56} />
        </a>

        {/* Botão de Email */}
        <a
          href={`mailto:${vendorEmail}?subject=Quero saber sobre os óleos essenciais`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-500 w-[56px] h-[56px]"
        >
          <p className="text-2xl">✉️</p>
        </a>
      </section>
    </nav>
  );
};

export default VendorHeader;
