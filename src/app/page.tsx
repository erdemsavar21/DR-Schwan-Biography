import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-blue-50/50 to-white/50">
      {/* Background Image */}
      <Image
        src="/images/background.jpeg"
        alt="Background"
        fill
        className="object-cover -z-10 opacity-90"
        quality={100}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Column - Profile Section */}
          <div className="bg-gradient-to-b from-gray-50 to-gray-100/50 rounded-2xl p-6 flex flex-col items-center shadow-inner text-center">
            <div className="relative mb-6">
              <Image
                src="/images/drschwan-bund.jpeg"
                alt="Dr. Christiane Schwan"
                width={200}
                height={200}
                className="rounded-xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight font-sans">Dr. Christiane Schwan</h2>
            <div className="flex flex-col items-center justify-center bg-gray-200/50 rounded-xl p-2 shadow-inner mb-2">
              <p className="text-gray-600 font-medium text-xs mb-4 mt-2 text-center leading-relaxed font-sans">
                <strong>Schmerz- und Palliativzentrum</strong><br />
                im Rechtsrheinischen
              </p>
              <p className="text-gray-500 font-medium mb-2 text-xs tracking-wide uppercase font-sans">Alle Kassen</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <i className="fab fa-facebook text-lg"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600 transition-colors duration-200">
                <i className="fab fa-instagram text-lg"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
                <i className="fab fa-twitter text-lg"></i>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 w-full text-center">
              <p className="flex items-start justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 group">
                <i className="fas fa-map-marker-alt w-6 text-gray-400 group-hover:text-gray-600 mt-1"></i>
                <span className="font-medium font-sans">
                  <a href="https://maps.google.com/maps?q=Rolshover+Str.+526,+51105+Köln" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
                    Rolshover Str. 526<br />51105 Köln
                  </a>
                </span>
              </p>
              <p className="flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 group">
                <i className="fas fa-envelope w-6 text-gray-400 group-hover:text-gray-600"></i>
                <span className="font-medium font-sans" title="Email senden"><a href="mailto:info@drschwan.de">info@drschwan.de</a></span>
              </p>
              <p className="flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 group">
                <i className="fas fa-phone w-6 text-gray-400 group-hover:text-gray-600"></i>
                <span className="font-medium font-sans"><a href="tel:0221 29245070">0221 29245070</a></span>
              </p>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="md:col-span-2 md:pl-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight font-sans">
              Dr.med. Christiane Schwan
            </h1>

            {/* Appointment Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700 font-sans">Terminvereinbarung</h3>
              <p className="text-gray-600 leading-relaxed space-y-2 font-medium font-sans">
                telefonisch <a href="tel:0221 29245070">0221 29245070</a> oder<br />
                per Mail unter <span className="text-blue-600 hover:text-blue-700 transition-colors duration-200" title="Email senden"><a href="mailto:info@drschwan.de">info@drschwan.de</a></span> 
              </p>
            </div>

            {/* Coming Soon Image */}
            <div className="mt-8">
              <Image
                src="/images/kommt.png"
                alt="Neue Homepage - Kommt Bald"
                width={800}
                height={400}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
