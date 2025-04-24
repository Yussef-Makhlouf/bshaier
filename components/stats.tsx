"use client"

import Image from "next/image";

const services = [
  {
    title: "نقل أثاث داخل الكويت",
    description:
      "خدمة نقل أثاث آمنة وسريعة داخل جميع مناطق الكويت مع تغليف احترافي وضمان سلامة الأثاث.",
    image:
      "./pro2.png",
  },
  {
    title: "تغليف الأثاث",
    description:
      "تغليف جميع أنواع الأثاث باستخدام مواد عالية الجودة لضمان الحماية أثناء النقل.",
    image:
      "./pro3.png",
  },
  {
    title: "فك وتركيب الأثاث",
    description:
      "فريق متخصص لفك وتركيب جميع أنواع الأثاث والمطابخ باحترافية عالية وسرعة في الإنجاز.",
    image:
      "./pro4.png",
  },
  {
    title: "تخزين الأثاث",
    description:
      "خدمة تخزين الأثاث في مستودعات آمنة ونظيفة مع مراقبة على مدار الساعة.",
    image:
      "./pro5.png",
  },
];

export default function Stats() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-8 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">خدمات نقل الأثاث في الكويت</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col h-full border border-gray-100"
            >
              <div className="relative w-full h-75 min-h-[355px] ">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                
                  priority={idx === 0}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-primary mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm text-center flex-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
