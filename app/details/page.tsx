export default function DetailsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-12 border-b-2 border-black pb-4">
        EVENT DETAILS
      </h1>

      <div className="space-y-12">
        {/* What is it section */}
        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">What is it?</h2>
          <p className="leading-relaxed text-justify">
            The UFV Innovation Hackathon is a gathering focused on technology and solving real-world problems. 
            We invite engineers, data scientists, and students passionate about innovation to learn, create, 
            and collaborate side-by-side with industry experts. Expect deep technical workshops, renowned 
            guest speakers, and engaging activities throughout the event.
          </p>
        </section>

        {/* Who we are section */}
        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">Who we are?</h2>
          <p className="leading-relaxed text-justify">
            We bridge UFV's legacy of innovation with the power of cloud computing and cutting-edge data tools. 
            Our goal is to create an environment where the magic happens: the intersection between 
            solid academic knowledge and market-leading technologies.
          </p>
        </section>

        {/* What will you do section */}
        <section>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">What will you do?</h2>
          <p className="leading-relaxed text-justify">
            Unleash your creativity and solve real-world problems. You will have 20 hours to test the platform, 
            push your boundaries, and dream about new features. All of this with full support to turn your 
            ideas into reality.
          </p>
        </section>

        {/* Requirements & Prizes grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black pt-8">
          <div className="border-r border-black pr-8">
            <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Experience in software development or data science.</li>
              <li>Full availability during the event.</li>
              <li>Openness to multidisciplinary collaboration.</li>
              <li>Team size: 4 people.</li>
              <li>Extremely limited spots (50 participants).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-widest">Prizes</h2>
            <div className="bg-red-600 text-white p-6 text-center">
              <p className="text-4xl font-bold">R$ 82,000</p>
              <p className="text-sm mt-2 opacity-80">in total prizes</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}