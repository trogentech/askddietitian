import RealStoriesCard from "./real-stories-cards";
import pregnantwoman from "../../../assets/images/black-pregnant-women-posing (2).jpg"
import portraitman from  "../../../assets/images/portrait-african-american-man.jpg"
import caringwoman from  "../../../assets/images/full-shot-mother-taking-care-babies.jpg"
import feedingwoman from "../../../assets/images/woman-cooking-home-front-view.jpg"
export default function RealStoriesSection() {
  const testimonials = [
    {
      name: "Ozy",
      image: feedingwoman,
      text: "After being diagnosed with high cholesterol, fatty liver, high blood pressure, and high blood sugar, Askdietitian created a meal plan with familiar, accessible foods. Following it, my blood sugar and BP normalized, fatty liver disappeared, and I lost 8kg. My mom experienced similar success—all her health issues are now in the past!",
    },
    {
      name: "Kehinde",
      image: caringwoman,
      text: "With PCOS, I needed specialized help. Askdietitian provided a relatable meal plan and regularly called to encourage me. My mood improved dramatically, and I lost 8lbs. They're genuinely the best nutritional service I’ve encountered.",
    },
    {
      name: "Mark",
      image: pregnantwoman,
      text: "I sought help for my mother's dietary needs and couldn’t be more grateful. The practical, easy-to-follow meal plan showed results within weeks. Their regular check-ins demonstrated genuine care for my mother's well-being. A truly knowledgeable and compassionate health consultant.",
    },
      {
      name: "Ozy",
      image: portraitman,
      text: "After being diagnosed with high cholesterol, fatty liver, high blood pressure, and high blood sugar, Askdietitian created a meal plan with familiar, accessible foods. Following it, my blood sugar and BP normalized, fatty liver disappeared, and I lost 8kg. My mom experienced similar success—all her health issues are now in the past!",
    },
    {
      name: "Kehinde",
      image: caringwoman,
      text: "With PCOS, I needed specialized help. Askdietitian provided a relatable meal plan and regularly called to encourage me. My mood improved dramatically, and I lost 8lbs. They're genuinely the best nutritional service I’ve encountered.",
    },
    {
      name: "Mark",
      image: pregnantwoman,
      text: "I sought help for my mother's dietary needs and couldn’t be more grateful. The practical, easy-to-follow meal plan showed results within weeks. Their regular check-ins demonstrated genuine care for my mother's well-being. A truly knowledgeable and compassionate health consultant.",
    },
  ];

  return (
 <section className="py-12 px-4 md:px-12 bg-white text-center">
  <h2 className=" md:hidden text-xl text-center leading-tight md:text-4xl font-semibold mb-8">
   <span> Real Stories, Real Results:</span> <br/>
    <span>Nutrition Journeys That Inspire</span>
  </h2>
  <h2 className=" hidden md:block text-xl text-center leading-tight md:text-4xl font-semibold mb-13">
   <span> Real Stories, Real Results: Nutrition Journeys</span> <br/>
    <span> That Inspire</span>
  </h2>
  
  <div className="flex overflow-x-auto  md:scrollbar-default  md:overflow-x-scroll gap-4 scroll-smooth snap-x snap-mandatory">
    {testimonials.map((t, index) => (
      <RealStoriesCard
        key={index}
        text={t.text}
        name={t.name}
        image={t.image}
      />
    ))}
  </div>
</section>

  );
}
