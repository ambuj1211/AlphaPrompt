const cards = Array.from({ length: 8 });

export default function Trending() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">
        🔥 Trending Prompts
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden bg-white hover:scale-105 transition"
          >
            <div className="bg-gray-200 h-60"></div>

            <div className="p-4">
              <h3 className="font-bold">
                AI Image {index + 1}
              </h3>

              <div className="flex justify-between mt-4 text-sm">
                <span>❤️ 120</span>
                <span>👎 3</span>
                <span>👁 650</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}