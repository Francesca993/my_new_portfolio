import { useState } from 'react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { id: 1, title: 'Module 1', image: '/src/assets/assets-certificates/Certificate of M1.png' },
    { id: 2, title: 'Module 2', image: '/src/assets/assets-certificates/Certificate  M2.png' },
    { id: 3, title: 'Module 3', image: '/src/assets/assets-certificates/Certificate of  M3.png' },
    { id: 4, title: 'Module 4', image: '/src/assets/assets-certificates/Certificate M4.png' },
    { id: 5, title: 'Module 5', image: '/src/assets/assets-certificates/Certificate M5.png' },
    { id: 6, title: 'Final Certificate', image: '/src/assets/assets-certificates/Certificate of Francesca Montini.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 italiana-regular">
          My Epicode Certificates
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center space-grotesk-semibold">
                  {cert.title}
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged certificate view */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <div className="max-w-4xl w-full bg-white rounded-lg p-4">
              <div className="relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedCertificate(null)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} Certificate`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates; 