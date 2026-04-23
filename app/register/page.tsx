// app/register/page.tsx

// 1. O nome da função não importa, mas ela DEVE ser exportada como default
export default function RegisterPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      
      {/* Exemplo de iframe */}
      <div className="mb-12">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScmMTX9ufYMna86AQ7etJasxLPxINa-iHDAGlOrVFFCE18aKg/viewform?embedded=true" 
          width="100%" 
          height="1080" 
          className=""
        ></iframe>
      </div>


      <div className="border border-black p-8 text-center">
        <h2 className="mb-4">Restric area!</h2>
        <a 
          href="#" 
          className="inline-block bg-red-600 text-white px-6 py-3 hover:bg-gray-800"
        >
          ACCESS CONTENT
        </a>
      </div>
    </main>
  );
}