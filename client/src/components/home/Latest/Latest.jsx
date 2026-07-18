const cards = Array.from({ length: 4 });

export default function Latest() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">
        ✨ Latest Uploads
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className="rounded-xl shadow bg-white overflow-hidden"
          >
            <div className="bg-gray-300 h-52"></div>

            <div className="p-4">
              <h3>Latest Image {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}