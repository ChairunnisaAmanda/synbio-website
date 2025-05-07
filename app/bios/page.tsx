import Link from "next/link"
import { ArrowRight, FileText, ExternalLink } from "lucide-react"

export default function BIOSPage() {
  return (
    <div className="bg-[#f5f9f8]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#e6f7f4] to-[#f5f9f8] md:py-24">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#055852] md:text-5xl">🔬 BIOS 2025</h1>
            <h2 className="mb-8 text-xl font-medium leading-relaxed text-gray-700 md:text-2xl">
              Bioinformatics and Synthetic Biology Competition
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors rounded-md bg-[#055852] hover:bg-opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for BIOS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 font-medium text-[#055852] transition-colors rounded-md border-2 border-[#055852] hover:bg-[#055852] hover:bg-opacity-10"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Guidebook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12">
        {/* Tentang BIOS */}
        <section className="mb-12 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">🌟</span> Tentang BIOS
          </h2>
          <div className="prose max-w-none">
            <p>
              BIOS (Bioinformatics and Synthetic Biology Competition) adalah kompetisi tahunan sejak 2020 yang dirancang
              untuk menumbuhkan ide-ide inovatif di bidang bioinformatika dan biologi sintetik.
            </p>
            <p>
              Tahun ini, BIOS hadir dengan cakupan lebih luas dan mekanisme lebih interaktif, terbuka untuk{" "}
              <strong>mahasiswa S1</strong> dan <strong>siswa SMA</strong> dari berbagai jurusan, serta memperbolehkan
              anggota dari institusi yang berbeda.
            </p>
          </div>
        </section>

        {/* Tema BIOS 2025 */}
        <section className="mb-12 p-8 bg-[#e6f7f4] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">🎯</span> Tema BIOS 2025
          </h2>
          <div className="prose max-w-none">
            <p className="text-xl font-semibold text-center my-6">
              "Design, Decode, Deliver: New Frontier for Biotech in Indonesia"
            </p>

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#055852] flex items-center">
                  <span className="mr-2">🔬</span> DESIGN
                </h3>
                <p>Rancang organisme sintetis untuk mengatasi isu kesehatan, lingkungan, pangan, dan lainnya.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#055852] flex items-center">
                  <span className="mr-2">🧠</span> DECODE
                </h3>
                <p>
                  Gunakan simulasi dan bioinformatika untuk validasi desain (molecular modeling, ML, pathway analysis,
                  dll).
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#055852] flex items-center">
                  <span className="mr-2">💻</span> DELIVER
                </h3>
                <p>Implementasikan solusi lewat aplikasi digital, dashboard, atau alat interaktif lainnya.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fokus Proyek */}
        <section className="mb-12 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">🔍</span> Fokus Proyek
          </h2>
          <div className="prose max-w-none">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 list-none p-0">
              <li className="p-4 text-center bg-[#e6f7f4] rounded-lg">
                <span className="font-bold">Diagnostik</span>
              </li>
              <li className="p-4 text-center bg-[#e6f7f4] rounded-lg">
                <span className="font-bold">Terapeutik</span>
              </li>
              <li className="p-4 text-center bg-[#e6f7f4] rounded-lg">
                <span className="font-bold">Lingkungan</span>
              </li>
              <li className="p-4 text-center bg-[#e6f7f4] rounded-lg">
                <span className="font-bold">Pangan & Pertanian</span>
              </li>
              <li className="p-4 text-center bg-[#e6f7f4] rounded-lg">
                <span className="font-bold">Industri & Manufaktur</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Siapa Saja yang Bisa Ikut? */}
        <section className="mb-12 p-8 bg-[#e6f7f4] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">👥</span> Siapa Saja yang Bisa Ikut?
          </h2>
          <div className="prose max-w-none">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#055852] flex items-center">
                  <span className="mr-2">💡</span> Universitas
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Peserta merupakan mahasiswa Indonesia strata 1 (S1) dari universitas dalam negeri/luar negeri yang
                    berasal dari prodi/jurusan apapun dan freshgraduate maksimal 1 tahun setelah kelulusan.
                  </li>
                  <li>
                    Anggota tim dapat berasal dari institusi dan/atau negara yang berbeda, selama masih merupakan warga
                    negara Indonesia
                  </li>
                  <li>
                    Kompetisi berlaku secara tim dan setiap tim minimal terdiri dari 2 peserta dan maksimal 10 peserta,
                    tidak termasuk <em>advisor</em>
                  </li>
                  <li>
                    Setiap tim memiliki minimal 1 <em>advisor</em>
                  </li>
                  <li>Satu tim hanya dapat mengirimkan satu karya</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#055852] flex items-center">
                  <span className="mr-2">💡</span> Siswa SMA/Sederajat
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Peserta merupakan siswa SMA Indonesia yang berasal dari SMA dalam negeri/luar negeri yang berasal
                    dari jurusan apapun
                  </li>
                  <li>
                    Anggota tim dapat berasal dari institusi dan/atau negara yang berbeda, selama masih merupakan warga
                    negara Indonesia
                  </li>
                  <li>
                    Kompetisi berlaku secara tim dan setiap tim minimal terdiri dari 2 peserta dan maksimal 10 peserta,
                    tidak termasuk <em>advisor</em>
                  </li>
                  <li>
                    Setiap tim memiliki minimal 1 <em>advisor</em>
                  </li>
                  <li>Satu tim hanya dapat mengirimkan satu karya</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Biaya Pendaftaran */}
        <section className="mb-12 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">💰</span> Biaya Pendaftaran
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-[#e6f7f4]">
                  <th className="py-3 px-4 text-left border-b">Periode</th>
                  <th className="py-3 px-4 text-left border-b">Biaya Tim (maks. 10 orang)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Early Registration</td>
                  <td className="py-3 px-4 border-b">Rp 999.999</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Normal Registration</td>
                  <td className="py-3 px-4 border-b">Rp 1.250.000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Late Registration</td>
                  <td className="py-3 px-4 border-b">Rp 1.499.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p className="flex items-center">
              <span className="mr-2">📌</span> DP Rp 250.000 diperbolehkan
            </p>
            <p className="flex items-center">
              <span className="mr-2">📅</span> Pelunasan maksimal 31 Juli 2025
            </p>
          </div>
        </section>

        {/* Timeline BIOS 2025 */}
        <section className="mb-12 p-8 bg-[#e6f7f4] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">🗓️</span> Timeline BIOS 2025
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-[#e6f7f4]">
                  <th className="py-3 px-4 text-left border-b">Tanggal</th>
                  <th className="py-3 px-4 text-left border-b">Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">25 Apr – 18 Mei</td>
                  <td className="py-3 px-4 border-b">Pendaftaran Dibuka</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">19 Mei – 15 Jun</td>
                  <td className="py-3 px-4 border-b">Normal Registration</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">16 Jun – 31 Jul</td>
                  <td className="py-3 px-4 border-b">Late Registration</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">3 Agustus</td>
                  <td className="py-3 px-4 border-b">Submit Team Roster</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">4 Agustus</td>
                  <td className="py-3 px-4 border-b">Sesi Kompetisi Dimulai</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">24 Agustus</td>
                  <td className="py-3 px-4 border-b">Deadline Abstrak</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">31 Agustus</td>
                  <td className="py-3 px-4 border-b">Deadline Video Proposal</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Agustus–Sept</td>
                  <td className="py-3 px-4 border-b">Workshop (6 Course)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">26 Oktober</td>
                  <td className="py-3 px-4 border-b">Deadline Website Showcase</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">2 November</td>
                  <td className="py-3 px-4 border-b">Deadline Poster & Video</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">9 November</td>
                  <td className="py-3 px-4 border-b">Judging Session</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">10 November</td>
                  <td className="py-3 px-4 border-b">Pengumuman Grand Finalist</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">28–30 November</td>
                  <td className="py-3 px-4 border-b">Grand Final & Synbiotechfest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Workshop BIOS */}
        <section className="mb-12 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">📚</span> Workshop BIOS
          </h2>
          <div className="prose max-w-none">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Fundamental of Synbio</strong>
              </li>
              <li>
                <strong>Basic Ways of Engineering the Organism</strong>
              </li>
              <li>
                <strong>Solving with Synbio</strong>
              </li>
              <li>
                <strong>Design a Synbio System</strong>
              </li>
              <li>
                <strong>Design a Synbio Parts and Devices 1</strong>
              </li>
              <li>
                <strong>Design a Synbio Parts and Devices 2</strong>
              </li>
            </ol>
          </div>
        </section>

        {/* Jenis Proyek yang Didukung */}
        <section className="mb-12 p-8 bg-[#e6f7f4] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">⚙️</span> Jenis Proyek yang Didukung
          </h2>
          <div className="prose max-w-none">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Biodesign Fokus:</strong> Berbasis desain genetic circuit, pathway sintetis, atau rekayasa
                mikroba.
              </li>
              <li>
                <strong>Computational/Bioinformatics Fokus:</strong> Dominan di analisis data biologis atau modeling
                molekuler.
              </li>
              <li>
                <strong>Digital App Fokus:</strong> Pembuatan aplikasi/software/tool pendukung implementasi biotek.
              </li>
              <li>
                <strong>Hybrid Approach:</strong> Gabungan dari ketiga pendekatan di atas—dari <em>wet lab ideation</em>
                , <em>in silico simulation</em>, hingga <em>digital deployment</em>.
              </li>
            </ul>
          </div>
        </section>

        {/* Deliverables Wajib */}
        <section className="mb-12 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">📦</span> Deliverables Wajib
          </h2>
          <div className="prose max-w-none">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Abstrak</strong> (maks. 250 kata) – deadline 24 Agustus
              </li>
              <li>
                <strong>Video Proposal untuk Media Sosial</strong> – deadline 31 Agustus
              </li>
              <li>
                <strong>Website Showcase Project</strong> – deadline 26 Oktober
              </li>
              <li>
                <strong>Poster dan Video Presentasi</strong> – deadline 2 November
              </li>
              <li>
                <strong>Aplikasi</strong> – deadline 2 November*
              </li>
            </ul>
            <p className="text-sm italic mt-4">
              *Deliverable ini hanya berlaku untuk tim yang mendaftar Best Apps, link pendaftaran akan diinformasikan
              setelah registrasi BIOS.
            </p>
          </div>
        </section>

        {/* Kategori Pemenang */}
        <section className="mb-12 p-8 bg-[#e6f7f4] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">🏆</span> Kategori Pemenang
          </h2>
          <div className="prose max-w-none">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#055852] flex items-center">
                  <span className="mr-2">🎓</span> Universitas
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Grand Prize Winner</li>
                  <li>Gold, Silver, Bronze Medal</li>
                  <li>Best Synbio Project</li>
                  <li>Best Bioinformatics Project</li>
                  <li>Best Poster, Website, Presentation, Apps*</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#055852] flex items-center">
                  <span className="mr-2">🎒</span> SMA/Sederajat
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Grand Prize Winner</li>
                  <li>Gold, Silver, Bronze Medal</li>
                  <li>Best Synbio Project</li>
                  <li>Best Bioinformatics Project</li>
                  <li>Best Poster, Website, Presentation, Apps*</li>
                </ul>
              </div>
            </div>
            <p className="flex items-center mt-6">
              <span className="mr-2">🎁</span> <strong>Grand Prize</strong>: Uang tunai + merchandise eksklusif
            </p>
          </div>
        </section>

        {/* Narahubung */}
        <section className="mb-12 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#055852] mb-4 flex items-center">
            <span className="mr-2">📞</span> Narahubung
          </h2>
          <div className="prose max-w-none">
            <ul className="list-none space-y-3">
              <li>
                <Link
                  href="https://wa.me/6281393949953"
                  className="text-[#055852] hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faiz Shidqi: https://wa.me/6281393949953
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/6281313286895"
                  className="text-[#055852] hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shinda Salsabila: https://wa.me/6281313286895
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/6289656718869"
                  className="text-[#055852] hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tasya Novita: https://wa.me/6289656718869
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-700">For more information refer to this guidebook:</p>
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 font-medium text-white transition-colors rounded-md bg-[#055852] hover:bg-opacity-90 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Guidebook
          </Link>
        </div>
      </div>

      {/* Registration CTA */}
      <section className="py-16 text-white bg-[#57BDAA]">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Join BIOS 2025</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Jangan lewatkan kesempatan untuk mengembangkan keterampilan dan menunjukkan inovasi Anda dalam bidang
            bioinformatika dan biologi sintetik.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 font-medium transition-colors rounded-md bg-white text-[#055852] hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar Sekarang
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
