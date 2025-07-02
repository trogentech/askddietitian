const categories = ["All", "PCOS", "Pediatric Nutrition", "Diabetes Care", "Heart Health", "Weight Management"];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-4 mt-4 md:my-8">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={`px-3 py-2 rounded-lg text-sm shadow-sm ${
            idx === 0 ? "bg-primary text-white" : "bg-white text-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
