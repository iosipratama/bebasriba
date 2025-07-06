import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <main className="flex flex-col gap-8 items-center max-w-2xl w-full">
        
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Checklist Hijrah dari Riba</h1>
          <p className="text-gray-600 mb-4">
            Ikuti langkah-langkah sederhana ini untuk memulai perjalanan hijrah Anda menuju kehidupan yang lebih berkah.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start bg-white rounded px-4 py-3 text-gray-700">
              <span className="mr-4 text-green-500 font-bold">1.</span>
              <span>Pelajari apa itu riba dan kenapa harus dihindari.</span>
            </li>
            <li className="flex items-start bg-white rounded px-4 py-3 text-gray-700">
              <span className="mr-4 text-green-500 font-bold">2.</span>
              <span>Cek utang berbunga yang Anda miliki.</span>
            </li>
            <li className="flex items-start bg-white rounded px-4 py-3 text-gray-700">
              <span className="mr-4 text-green-500 font-bold">3.</span>
              <span>Tutup kartu kredit berbunga.</span>
            </li>
            <li className="flex items-start bg-white rounded px-4 py-3 text-gray-700">
              <span className="mr-4 text-green-500 font-bold">4.</span>
              <span>Pindahkan tabungan ke bank syariah.</span>
            </li>
            <li className="flex items-start bg-white rounded px-4 py-3 text-gray-700">
              <span className="mr-4 text-green-500 font-bold">5.</span>
              <span>Cari alternatif halal untuk kebutuhan keuangan Anda.</span>
            </li>
          </ul>
        </div>


      </main>
      <footer className="mt-16 text-sm text-gray-500 dark:text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Bebas Riba. 
      </footer>
    </div>
  );
}
