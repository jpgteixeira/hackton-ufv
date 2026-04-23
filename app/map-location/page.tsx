import Image from 'next/image'

export default function MapPage() {
    return (
        <main className="max-w-4xl mx-auto p-6 md:p-12">
            <h1 className="text-4xl font-bold mb-8 uppercase tracking-widest border-b-2 border-black pb-4">
                Location
            </h1>

            <div className="space-y-6">
                <p className="leading-relaxed">
                    The Hackathon will take part on IDATA center in Universidade Federal de Viçosa, Viçosa-MG.
                </p>

                {/* Placeholder do Mapa (Leve) */}
                <a href="https://www.google.com/maps/place/IDATA+(Instituto+de+Intelig%C3%AAncia+Artificial+e+Computacional+da+UFV)/@-20.7634586,-42.867701,19.45z/data=!4m6!3m5!1s0xa3670070baab53:0xc9a40db9f3c3d615!8m2!3d-20.7635062!4d-42.867663!16s%2Fg%2F11y6ptlzln?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D">
                    <div className="w-full h-96 bg-gray-200 border border-black flex items-center justify-center relative overflow-hidden">
                       <Image
                       src= "/ufv-campus-estatico.png"
                       alt= "Map of Viçosa Downtown pointing on UFV"
                       fill
                       style= {{objectFit: 'cover'}}
                       className='opacity-90'
                       priority>
                       </Image>
                    </div>
                </a>

                <p className="leading-relaxed mt-6">
                    Suggested Hotels: X, Y, Z.
                </p>
                <p className="leading-relaxed ">
                    Must do: Eat tropeiro at Castelo Branco Restaurant, blablabla.
                </p>

            </div>
        </main>
    );
}