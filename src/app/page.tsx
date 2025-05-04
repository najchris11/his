import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Out of stock notice */}
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded">
          <p className="font-bold">Currently Out of Stock</p>
          <p>We are temporarily unable to process new orders for HIS Healing Solution. Please check back later.</p>
        </div>

        {/* Product Title */}
        <h1 className="text-4xl font-bold text-white mb-4 text-center">HIS Healing Solution</h1>
        <h2 className="text-2xl text-white/90 text-center mb-8">5oz Spray</h2>

        {/* Product Description */}
        <div className="bg-white/90 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2" style={{ borderColor: 'rgb(183,157,113)' }}>About Our Solution</h2>
          <p className="text-gray-700 mb-4">HIS Healing Solution is a special concentration of low molecular weight peptides normally found in human and animal blood and milk. It is manufactured from normal bovine colostrum using proprietary technology under aseptic conditions.</p>
          <p className="text-gray-700 mb-4">HIS Healing Solution may help strengthen the immune system, regenerate and repair bone, muscle, and cartilage cells.</p>
        </div>

        {/* Technology Section */}
        <div className="bg-white/90 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Infopeptide Technology</h2>
          <p className="text-gray-700 mb-4">Our bodies are designed to maintain wellness through an informational relationship between our brain and cells, facilitated by small proteins known as info-peptides. These peptides function as the cellular "software", orchestrating and coordinating bodily functions.</p>
          <p className="text-gray-700">Clinical evaluations in multiple countries have demonstrated the safety and benefits of infopeptide supplementation.</p>
        </div>

        {/* Applications List */}
        <div className="bg-white/90 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2" style={{ borderColor: 'rgb(183,157,113)' }}>Areas of Application</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Asthma & Allergies</li>
              <li>Arthritis</li>
              <li>Benign Prostatic Hyperplasia</li>
              <li>Cancer (adjunctive use only)</li>
              <li>Celiac Disease</li>
              <li>Crohn's Disease</li>
              <li>Diabetes Type II</li>
              <li>Fibromyalgia</li>
              <li>Hypertension</li>
              <li>Lupus (discoid & systemic)</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Multiple Sclerosis</li>
              <li>Perthes Disease</li>
              <li>PMS & Endometriosis</li>
              <li>Psoriasis</li>
              <li>Sjögren's Syndrome</li>
              <li>Spinal Muscular Atrophy</li>
              <li>Thrombocytopenia</li>
              <li>Topical Applications</li>
              <li>Chronic & Acute Viral Infections</li>
              <li>Wounds & Skin Conditions</li>
            </ul>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white/90 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2" style={{ borderColor: 'rgb(183,157,113)' }}>Customer Testimonials</h2>
          <div className="space-y-6">
            <div className="border-l-4 pl-4" style={{ borderColor: 'rgb(183,157,113)' }}>
              <p className="text-gray-700 italic mb-2">"Within only hours of putting a few drops of HIS Healing Solution on, the wound began healing dramatically. I am simply stunned by the speed and depth of healing."</p>
              <p className="text-sm text-gray-500">- Patricia R., Scottsdale</p>
            </div>

            <div className="border-l-4 pl-4" style={{ borderColor: 'rgb(183,157,113)' }}>
              <p className="text-gray-700 italic mb-2">"After taking HIS Healing Solution for 4 days I am finally healthy for the first time in my life. I can't say I understand it and some days I still don't believe it, but it worked."</p>
              <p className="text-sm text-gray-500">- Danielle M.</p>
            </div>

            <div className="border-l-4 pl-4" style={{ borderColor: 'rgb(183,157,113)' }}>
              <p className="text-gray-700 italic mb-2">"I have noted a great difference in my energy level. My glucose levels dropped from 158 to 113, and I can now sleep through the night."</p>
              <p className="text-sm text-gray-500">- Maxine P.</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-white/90 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Important Notice</h3>
          <p className="text-gray-700">HIS Healing Solution is not a cure in the literal sense. Only the body can cure itself. Our product provides the resources your body needs to support its natural healing processes.</p>
        </div>

        {/* Contact Footer */}
        <footer className="mt-12 text-center text-white">
          <p>For inquiries about future availability, please contact our support team</p>
        </footer>
      </main>
    </div>
  );
}
