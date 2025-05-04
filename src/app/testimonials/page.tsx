import React from 'react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      condition: "Spinal Muscular Atrophy (SMA)",
      name: "Jean Uelman",
      location: "Antigua, Guatemala",
      date: "February - April 1997",
      content: `At 50, Jean had lived well beyond the expectations of one born with Werdnig-Hoffman's Disease (SMA). After starting HIS Healing Solution in February 1997, she experienced remarkable improvements. Within days, her chronic sciatic pain stopped. She regained abilities lost years ago - from sitting without support to feeding herself. Her detailed 6-week journal documented unprecedented improvements in muscle strength, movement, and quality of life. Notable improvements included regained arm movement, better breathing, increased muscle mass, and return of abilities lost 5-14 years prior.`,
      details: [
        "Feb 27: Chronic pain stopped within days of starting treatment",
        "Mar 5: Clear increase in muscle usage and strength",
        "Mar 15: Regained trunk movement lost 5 years prior",
        "Mar 23: Regained ability to feed herself (lost 14 years prior)",
        "Apr 16: Continued improvements in muscle mass and movement"
      ]
    },
    {
      condition: "Spinal Muscular Atrophy (SMA)",
      name: "Hannah",
      date: "2005",
      content: "Hannah has been using HIS Healing Solution since age one. Her mother reports multiple benefits including pain relief, help with contractures (documented by physical therapist), and healing of burns and injuries. At 8.5 years old, Hannah continues to benefit from daily applications. The solution provides immediate relief for sunburns, strained ankles, and other discomforts common with SMA.",
      details: [
        "Pain relief for ankle strains",
        "Reduction in contractures (PT documented)",
        "Rapid healing of burns and injuries",
        "Relief from teething pain",
        "Daily use for over 7 years with consistent benefits"
      ]
    },
    {
      condition: "Celiac Disease",
      name: "Danielle M.",
      date: "October 24, 2008",
      content: "I am 31 years old and after taking HIS Healing Solution for 4 days I am finally healthy for the first time in my life... After 4 days I went to take my spray and looked at the bottle and just knew I was ok. Over two months later I am so happy that I don't have to worry about my son being different because he won't suffer from celiac."
    },
    {
      condition: "Multiple Sclerosis",
      name: "Suzan L.",
      location: "Chianti Region, Italy",
      content: "It's hard to believe but there was a change almost overnight and from the time when it came I am walking without a stick, have gained 3 kgs. in weight and am ecstatically happy."
    },
    {
      condition: "Diabetes (Type II)",
      name: "Maxine P.",
      location: "Belize",
      content: "I have noted a great difference in my energy level. I do not get tired so fast and can now go all day without sleeping for several hours in the afternoon. My Sugar Glucose level dropped from 158 to 113."
    },
    {
      condition: "Brown Recluse Spider Bite",
      name: "Patricia R.",
      location: "Scottsdale, Arizona",
      date: "June 11, 2002",
      content: "Within only hours of putting a few drops of HIS Healing Solution on, the wound began healing dramatically. I continued putting a few drops on several times a day and am astonished at how quickly the oozing, ugly site closed up."
    },
    {
      condition: "Poison Ivy",
      name: "Carolyn F.",
      location: "Northport, New York",
      date: "May 13, 2003",
      content: "The itching & burning stopped immediately. As I watched, I swear, I could see the skin and lymph dry-up kind of sealing and knitting together my arm. This continued for one more day until the skin had rebuilt itself."
    },
    {
      condition: "Fibromyalgia",
      name: "Sally C.",
      location: "Ohio",
      content: "Within three months all significant evidence of her disease had disappeared. Her pain abated, her energy returned and her blood tests showed that her SED rate had declined from a clinically significant 67 to a comfortably normal 12."
    }
  ];

  return (
    <div className="min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Customer Testimonials</h1>
        
        <div className="grid gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/90 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2" style={{ borderColor: 'rgb(183,157,113)' }}>{testimonial.condition}</h2>
                {testimonial.date && (
                  <span className="text-gray-500 text-sm">{testimonial.date}</span>
                )}
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic border-l-4 pl-4" style={{ borderColor: 'rgb(183,157,113)' }}>
                "{testimonial.content}"
              </blockquote>
              
              {testimonial.details && (
                <div className="mt-4 mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Key Improvements:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {testimonial.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <footer className="text-gray-600">
                - {testimonial.name}
                {testimonial.location && (
                  <span className="text-gray-500">, {testimonial.location}</span>
                )}
              </footer>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/90 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2" style={{ borderColor: 'rgb(183,157,113)' }}>Documentation & Research</h2>
          <p className="text-gray-700 mb-4">
            Many of these testimonials are supported by detailed documentation, including personal journals, physician observations, and physical therapy records. The improvements noted in conditions like Spinal Muscular Atrophy (SMA) are particularly significant as they demonstrate improvements in a condition typically characterized by decline.
          </p>
          <p className="text-gray-700">
            Evaluations of HIS Healing Solution by individuals, physicians and institutions have demonstrated consistent positive results across various conditions. The solution appears to support the body's natural healing processes, with effects ranging from rapid tissue repair to long-term improvements in chronic conditions.
          </p>
        </div>
      </main>
    </div>
  );
}