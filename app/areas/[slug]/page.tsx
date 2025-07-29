"use client"

import { useState, useEffect, use } from "react"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ArrowRight, Clock, CheckCircle, Truck, Package, ShieldCheck, PenTool } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


// Kuwait areas data with detailed descriptions for SEO
const areas = [
  {
    id: "capital",
    name: "محافظة العاصمة",
    title: "خدمات نقل الأثاث في محافظة العاصمة - بشاير الخير",
    description: "خدمات نقل الأثاث في محافظة العاصمة",
    longDescription: "نقدم خدمات نقل الأثاث المتكاملة في جميع مناطق محافظة العاصمة بالكويت. تتميز خدماتنا بالسرعة والدقة مع فريق متخصص في التعامل مع المباني السكنية والمكاتب في المناطق المزدحمة. نوفر خدمات النقل والفك والتركيب والتغليف بأعلى مستويات الجودة.",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "العديلية",
      "الشامية",
      "الروضة",
      "النزهة",
      "الفيحاء",
      "كيفان",
      "الخالدية",
      "الدسمة",
      "المنصورية",
      "الدعية",
      "القادسية",
      "قرطبة",
      "السرة",
      "اليرموك",
      "الشويخ",
    ],
    specialNotes: "نقدم خدمات سريعة في محافظة العاصمة مع إمكانية الوصول في نفس اليوم",
    image: "/areas/capital.png",
    color: "#1a56db",
    slug: "capital",
    metaTitle: "خدمات نقل الأثاث في محافظة العاصمة الكويت - بشاير الخير",
    metaDescription: "خدمات نقل وفك وتركيب وتغليف الأثاث في جميع مناطق محافظة العاصمة بالكويت. خدمة سريعة، أسعار تنافسية، وفريق محترف. اتصل الآن!",
    metaKeywords: "نقل عفش العاصمة, نقل اثاث العديلية, نقل عفش الشامية, نقل اثاث الروضة, نقل عفش النزهة, نقل اثاث الفيحاء, نقل عفش كيفان, نقل اثاث الخالدية, نقل عفش الدسمة, نقل اثاث المنصورية, نقل عفش الدعية, نقل اثاث القادسية, نقل عفش قرطبة, نقل اثاث السرة, نقل عفش اليرموك, نقل اثاث الشويخ",
    neighborhoodDetails: [
      {
        name: "العديلية",
        description: "نقدم خدمات نقل الأثاث في منطقة العديلية بمحافظة العاصمة. تتميز المنطقة بالمباني السكنية والشوارع المنظمة مما يسهل عملية النقل. فريقنا على دراية كاملة بطرق المنطقة وأفضل الأوقات للنقل لتجنب الازدحام."
      },
      {
        name: "الشامية",
        description: "نوفر خدمات نقل الأثاث المتميزة في منطقة الشامية بمحافظة العاصمة. نتعامل مع جميع أنواع المباني في المنطقة سواء كانت فلل أو شقق. نضمن نقل آمن وسريع مع الحفاظ على سلامة الأثاث."
      },
      {
        name: "الروضة",
        description: "نقدم خدمات نقل الأثاث الشاملة في منطقة الروضة بمحافظة العاصمة. نتميز بخبرتنا الواسعة في التعامل مع المنازل والفلل في المنطقة. فريقنا مدرب على التعامل مع الأثاث الفاخر والقطع الثمينة."
      },
      {
        name: "النزهة",
        description: "نوفر خدمات نقل الأثاث المتكاملة في منطقة النزهة بمحافظة العاصمة. نتميز بتقديم خدمات سريعة ودقيقة مع الالتزام بالمواعيد المحددة. نضمن نقل آمن وسريع لجميع أنواع الأثاث."
      },
      {
        name: "الفيحاء",
        description: "نقدم خدمات نقل الأثاث الاحترافية في منطقة الفيحاء بمحافظة العاصمة. فريقنا مدرب على التعامل مع جميع أنواع الأثاث وفكه وتركيبه بمهارة عالية. نضمن سلامة أثاثك من لحظة الفك وحتى التركيب."
      }
    ]
  },
  {
    id: "hawalli",
    name: "محافظة حولي",
    title: "خدمات نقل الأثاث في محافظة حولي - بشاير الخير",
    description: "خدمات نقل الأثاث في محافظة حولي",
    longDescription: "نوفر خدمات نقل الأثاث الشاملة في جميع مناطق محافظة حولي بالكويت. نتميز بخبرتنا الواسعة في التعامل مع الشقق والأبراج السكنية في مناطق مثل السالمية وحولي. فريقنا مدرب على التعامل مع تحديات المباني العالية ونقل الأثاث عبر المصاعد والسلالم الضيقة.",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "حولي",
      "السالمية",
      "الرميثية",
      "الجابرية",
      "مشرف",
      "بيان",
      "سلوى",
      "الشعب",
      "البدع",
      "الزهراء",
      "الصديق",
      "حطين",
      "الشهداء",
    ],
    specialNotes: "نقدم خدمات خاصة للشقق في الأبراج العالية في منطقة السالمية",
    image: "/areas/hawalli.png",
    color: "#2563eb",
    slug: "hawalli",
    canonicalUrl: "https://www.bashir-mover.com/areas/hawalli",
    metaTitle: "خدمات نقل الأثاث في محافظة حولي الكويت - بشاير الخير",
    metaDescription: "خدمات نقل وفك وتركيب وتغليف الأثاث في جميع مناطق محافظة حولي بالكويت. خبرة في التعامل مع الشقق والأبراج السكنية. اتصل الآن!",
    metaKeywords: "نقل عفش حولي, نقل اثاث السالمية, نقل عفش الرميثية, نقل اثاث الجابرية, نقل عفش مشرف, نقل اثاث بيان, نقل عفش سلوى, نقل اثاث الشعب, نقل عفش البدع, نقل اثاث الزهراء, نقل عفش الصديق, نقل اثاث حطين, نقل عفش الشهداء",
    neighborhoodDetails: [
      {
        name: "حولي",
        description: "نقدم خدمات نقل الأثاث المتميزة في منطقة حولي. نتعامل مع تحديات المنطقة المزدحمة والشوارع الضيقة بكفاءة عالية. فريقنا مدرب على نقل الأثاث في المباني متعددة الطوابق والشقق الصغيرة."
      },
      {
        name: "السالمية",
        description: "نوفر خدمات نقل الأثاث الشاملة في منطقة السالمية. نتميز بخبرتنا في التعامل مع الأبراج السكنية العالية ونقل الأثاث عبر المصاعد. نقدم خدمات خاصة للشقق في الأبراج العالية."
      },
      {
        name: "الرميثية",
        description: "نقدم خدمات نقل الأثاث الاحترافية في منطقة الرميثية. فريقنا على دراية كاملة بطرق المنطقة وأفضل الأوقات للنقل لتجنب الازدحام. نضمن نقل آمن وسريع لجميع أنواع الأثاث."
      },
      {
        name: "الجابرية",
        description: "نوفر خدمات نقل الأثاث المتكاملة في منطقة الجابرية. نتميز بتقديم خدمات سريعة ودقيقة مع الالتزام بالمواعيد المحددة. فريقنا مدرب على التعامل مع جميع أنواع الأثاث."
      },
      {
        name: "مشرف",
        description: "نقدم خدمات نقل الأثاث الشاملة في منطقة مشرف. نتعامل مع جميع أنواع المباني في المنطقة سواء كانت فلل أو شقق. نضمن سلامة أثاثك من لحظة الفك وحتى التركيب."
      }
    ]
  },
  {
    id: "ahmadi",
    name: "محافظة الأحمدي",
    title: "خدمات نقل الأثاث في محافظة الأحمدي - بشاير الخير",
    description: "خدمات نقل الأثاث في محافظة الأحمدي",
    canonicalUrl: "https://www.bashir-mover.com/areas/ahmadi",
    longDescription: "نقدم خدمات نقل الأثاث المتميزة في جميع مناطق محافظة الأحمدي بالكويت. نغطي المناطق البعيدة مثل الوفرة والخيران بنفس كفاءة المناطق القريبة. نمتلك أسطول من السيارات المجهزة خصيصاً لنقل الأثاث لمسافات طويلة مع الحفاظ على سلامته.",
    estimatedTime: "خلال 2-3 ساعات",
    neighborhoods: [
      "الأحمدي",
      "الفحيحيل",
      "المنقف",
      "أبو حليفة",
      "الصباحية",
      "الرقة",
      "هدية",
      "الظهر",
      "الوفرة",
      "الزور",
      "الخيران",
      "المهبولة",
      "الفنطاس",
      "العقيلة",
      "الصباحية",
    ],
    specialNotes: "نقدم خدمات خاصة للمناطق البعيدة في محافظة الأحمدي مثل الوفرة والخيران",
    image: "/areas/ahmadi.png",
    color: "#3b82f6",
    slug: "ahmadi",

    metaTitle: "خدمات نقل الأثاث في محافظة الأحمدي الكويت - بشاير الخير",
    metaDescription: "خدمات نقل وفك وتركيب وتغليف الأثاث في جميع مناطق محافظة الأحمدي بالكويت. خدمة متميزة للمناطق البعيدة مثل الوفرة والخيران. اتصل الآن!",
    metaKeywords: "نقل عفش الأحمدي, نقل اثاث الفitional, نقل عفش المنقف, نقل اثاث أبو حليفة, نقل عفش الصباحية, نقل اثاث الرقة, نقل عفش هدية, نقل اثاث الظهر, نقل عفش الوفرة, نقل اثاث الزور, نقل عفش الخيران, نقل اثاث المهبولة, نقل عفش الفنطاس, نقل اثاث العقيلة",
    neighborhoodDetails: [
      {
        name: "الفitional",
        description: "نقدم خدمات نقل الأثاث المتميزة في منطقة الفحيحيل بمحافظة الأحمدي. نتعامل مع تحديات المنطقة المزدحمة بكفاءة عالية. فريقنا مدرب على نقل الأثاث في المباني متعددة الطوابق والشقق والفلل بمهارة واحترافية."
      },
      {
        name: "المنقف",
        description: "نوفر خدمات نقل الأثاث الشاملة في منطقة المنقف بمحافظة الأحمدي. نتميز بخبرتنا في التعامل مع المباني السكنية المختلفة ونقل الأثاث بسرعة ودقة. نضمن سلامة أثاثك من لحظة الفك وحتى التركيب."
      },
      {
        name: "الصباحية",
        description: "نقدم خدمات نقل الأثاث الاحترافية في منطقة الصباحية بمحافظة الأحمدي. فريقنا على دراية كاملة بطرق المنطقة وأفضل الأوقات للنقل لتجنب الازدحام. نضمن نقل آمن وسريع لجميع أنواع الأثاث."
      },
      {
        name: "الوفرة",
        description: "نوفر خدمات نقل الأثاث المتكاملة في منطقة الوفرة البعيدة بمحافظة الأحمدي. نمتلك سيارات مجهزة خصيصاً للمسافات الطويلة مع نظام تثبيت متطور لضمان سلامة الأثاث. نقدم خدمات النقل والفك والتركيب والتغليف بأسعار تنافسية."
      },
      {
        name: "الخيران",
        description: "نقدم خدمات نقل الأثاث الشاملة في منطقة الخيران بمحافظة الأحمدي. نتعامل مع تحديات المنطقة البعيدة بكفاءة عالية. نوفر خدمات متكاملة تشمل الفك والتغليف والنقل والتركيب مع ضمان سلامة الأثاث."
      }
    ]
  },
  {
    id: "farwaniya",
    name: "محافظة الفروانية",
    title: "خدمات نقل الأثاث في محافظة الفروانية - بشاير الخير",
    description: "خدمات نقل الأثاث في محافظة الفروانية",
    canonicalUrl: "https://www.bashir-mover.com/areas/farwaniya",
    longDescription: "نوفر خدمات نقل الأثاث الاحترافية في جميع مناطق محافظة الفروانية بالكويت. نتميز بقدرتنا على التعامل مع المناطق المزدحمة والشوارع الضيقة. فريقنا على دراية كاملة بطرق المنطقة وأوقات الازدحام لضمان وصول سريع وآمن.",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "الفروانية",
      "خيطان",
      "العارضية",
      "العمرية",
      "الرابية",
      "الرحاب",
      "الأندلس",
      "جليب الشيوخ",
      "الضجيج",
      "الرقعي",
      "الفردوس",
      "العباسية",
      "الأفنيوز",
    ],
    specialNotes: "نقدم خدمات سريعة في محافظة الفروانية مع مراعاة خاصة للمناطق المزدحمة",
    image: "/areas/farwaniya.png",
    color: "#60a5fa",
    slug: "farwaniya",
    metaTitle: "خدمات نقل الأثاث في محافظة الفروانية الكويت - بشاير الخير",
    metaDescription: "خدمات نقل وفك وتركيب وتغليف الأثاث في جميع مناطق محافظة الفروانية بالكويت. خبرة في التعامل مع المناطق المزدحمة والشوارع الضيقة. اتصل الآن!",
    metaKeywords: "نقل عفش الفروانية, نقل اثاث خيطان, نقل عفش العارضية, نقل اثاث العمرية, نقل عفش الرابية, نقل اثاث الرحاب, نقل عفش الأندلس, نقل اثاث جليب الشيوخ, نقل عفش الضجيج, نقل اثاث الرقعي, نقل عفش الفردوس",
    neighborhoodDetails: [
      {
        name: "الفروانية",
        description: "نقدم خدمات نقل الأثاث المتميزة في منطقة الفروانية المركزية. نتعامل مع تحديات المنطقة المزدحمة والشوارع الضيقة بكفاءة عالية. فريقنا مدرب على نقل الأثاث في المباني متعددة الطوابق والشقق الصغيرة."
      },
      {
        name: "خيطان",
        description: "نوفر خدمات نقل الأثاث الشاملة في منطقة خيطان بمحافظة الفروانية. نتميز بخبرتنا في التعامل مع المباني القديمة والشوارع الضيقة. فريقنا يعرف جيداً كيفية التعامل مع تحديات المنطقة."
      },
      {
        name: "العارضية",
        description: "نقدم خدمات نقل الأثاث الاحترافية في منطقة العارضية بمحافظة الفروانية. فريقنا على دراية كاملة بطرق المنطقة وأفضل الأوقات للنقل لتجنب الازدحام. نضمن نقل آمن وسريع لجميع أنواع الأثاث."
      },
      {
        name: "الرحاب",
        description: "نوفر خدمات نقل الأثاث المتكاملة في منطقة الرحاب بمحافظة الفروانية. نتميز بتقديم خدمات سريعة ودقيقة مع الالتزام بالمواعيد المحددة. فريقنا مدرب على التعامل مع جميع أنواع الأثاث."
      },
      {
        name: "جليب الشيوخ",
        description: "نقدم خدمات نقل الأثاث الشاملة في منطقة جليب الشيوخ بمحافظة الفروانية. نتعامل مع تحديات المنطقة المزدحمة بكفاءة عالية. نضمن سلامة أثاثك من لحظة الفك وحتى التركيب."
      }
    ]
  },
  {
    id: "jahra",
    name: "محافظة الجهراء",
    title: "خدمات نقل الأثاث في محافظة الجهراء - بشاير الخير",
    description: "خدمات نقل الأثاث في محافظة الجهراء",
    canonicalUrl: "https://www.bashir-mover.com/areas/jahra",
    longDescription: "نقدم خدمات نقل الأثاث الشاملة في جميع مناطق محافظة الجهراء بالكويت. نتميز بخبرتنا في التعامل مع المناطق البعيدة مثل العبدلي وكبد. نوفر خدمات النقل والفك والتركيب والتغليف بأسعار تنافسية مع الالتزام بالمواعيد المحددة.",
    estimatedTime: "خلال 2-3 ساعات",
    neighborhoods: [
      "الجهراء",
      "القصر",
      "النعيم",
      "النسيم",
      "تيماء",
      "الواحة",
      "العيون",
      "القيروان",
      "الصليبية",
      "كبد",
      "العبدلي",
    ],
    specialNotes: "نقدم خدمات خاصة للمناطق البعيدة في محافظة الجهراء مثل العبدلي وكبد",
    image: "/areas/jahra.png",
    color: "#93c5fd",
    slug: "jahra",
    metaTitle: "خدمات نقل الأثاث في محافظة الجهراء الكويت - بشاير الخير",
    metaDescription: "خدمات نقل وفك وتركيب وتغليف الأثاث في جميع مناطق محافظة الجهراء بالكويت. خدمة متميزة للمناطق البعيدة مثل العبدلي وكبد. اتصل الآن!",
    metaKeywords: "نقل عفش الجهراء, نقل اثاث القصر, نقل عفش النعيم, نقل اثاث النسيم, نقل عفش تيماء, نقل اثاث الواحة, نقل عفش العيون, نقل اثاث القيروان, نقل عفش الصليبية, نقل اثاث كبد, نقل عفش العبدلي",
    neighborhoodDetails: [
      {
        name: "الجهراء",
        description: "نقدم خدمات نقل الأثاث المتميزة في منطقة الجهراء المركزية. نتعامل مع جميع أنواع المباني في المنطقة سواء كانت فلل أو شقق. نضمن نقل آمن وسريع مع الحفاظ على سلامة الأثاث."
      },
      {
        name: "تيماء",
        description: "نوفر خدمات نقل الأثاث الشاملة في منطقة تيماء بمحافظة الجهراء. نتميز بخبرتنا في التعامل مع المباني السكنية المختلفة ونقل الأثاث بسرعة ودقة. نضمن سلامة أثاثك من لحظة الفك وحتى التركيب."
      },
      {
        name: "العيون",
        description: "نقدم خدمات نقل الأثاث الاحترافية في منطقة العيون بمحافظة الجهراء. فريقنا على دراية كاملة بطرق المنطقة وأفضل الأوقات للنقل لتجنب الازدحام. نضمن نقل آمن وسريع لجميع أنواع الأثاث."
      },
      {
        name: "الصليبية",
        description: "نوفر خدمات نقل الأثاث المتكاملة في منطقة الصليبية بمحافظة الجهراء. نتميز بتقديم خدمات سريعة ودقيقة مع الالتزام بالمواعيد المحددة. فريقنا مدرب على التعامل مع جميع أنواع الأثاث."
      },
      {
        name: "العبدلي",
        description: "نقدم خدمات نقل الأثاث الشاملة في منطقة العبدلي البعيدة بمحافظة الجهراء. نمتلك سيارات مجهزة خصيصاً للمسافات الطويلة مع نظام تثبيت متطور لضمان سلامة الأثاث. نقدم خدمات النقل والفك والتركيب والتغليف بأسعار تنافسية."
      }
    ]
  },
  {
    id: "mubarak",
    name: "محافظة مبارك الكبير",
    title: "خدمات نقل الأثاث في محافظة مبارك الكبير - بشاير الخير",
    description: "خدمات نقل الأثاث في محافظة مبارك الكبير",
    canonicalUrl: "https://www.bashir-mover.com/areas/mubarak",
    longDescription: "نوفر خدمات نقل الأثاث المتميزة في جميع مناطق محافظة مبارك الكبير بالكويت. نتميز بتقديم خدمات سريعة ودقيقة للمنازل والفلل في المناطق السكنية الراقية. فريقنا مدرب على التعامل مع الأثاث الفاخر والقطع الثمينة بعناية فائقة.",
    estimatedTime: "خلال 1-2 ساعة",
    neighborhoods: [
      "مبارك الكبير",
      "القرين",
      "العدان",
      "القصور",
      "صباح السالم",
      "المسيلة",
      "أبو فطيرة",
      "الفنيطيس",
      "المسايل",
    ],
    specialNotes: "نقدم خدمات متميزة في محافظة مبارك الكبير مع إمكانية الوصول في نفس اليوم",
    image: "/areas/mubarak.png",
    color: "#bfdbfe",
    slug: "mubarak",
    metaTitle: "خدمات نقل الأثاث في محافظة مبارك الكبير الكويت - بشاير الخير",
    metaDescription: "خدمات نقل وفك وتركيب وتغليف الأثاث في جميع مناطق محافظة مبارك الكبير بالكويت. خدمة متميزة للمناطق السكنية الراقية. اتصل الآن!",
    metaKeywords: "نقل عفش مبارك الكبير, نقل اثاث القرين, نقل عفش العدان, نقل اثاث القصور, نقل عفش صباح السالم, نقل اثاث المسيلة, نقل عفش أبو فطيرة, نقل اثاث الفنيطيس, نقل عفش المسايل",
    neighborhoodDetails: [
      {
        name: "القرين",
        description: "نقدم خدمات نقل الأثاث المتميزة في منطقة القرين بمحافظة مبارك الكبير. نتعامل مع الفلل والمنازل الفاخرة بعناية خاصة. فريقنا مدرب على التعامل مع الأثاث الثمين والقطع النادرة بمهارة واحترافية."
      },
      {
        name: "العدان",
        description: "نوفر خدمات نقل الأثاث الشاملة في منطقة العدان بمحافظة مبارك الكبير. نتميز بخبرتنا في التعامل مع المنازل الكبيرة والفلل الواسعة. نضمن نقل آمن وسريع مع الحفاظ على سلامة الأثاث."
      },
      {
        name: "صباح السالم",
        description: "نقدم خدمات نقل الأثاث الاحترافية في منطقة صباح السالم بمحافظة مبارك الكبير. فريقنا على دراية كاملة بطرق المنطقة وأفضل الأوقات للنقل لتجنب الازدحام. نضمن نقل آمن وسريع لجميع أنواع الأثاث."
      },
      {
        name: "أبو فطيرة",
        description: "نوفر خدمات نقل الأثاث المتكاملة في منطقة أبو فطيرة بمحافظة مبارك الكبير. نتميز بتقديم خدمات سريعة ودقيقة مع الالتزام بالمواعيد المحددة. فريقنا مدرب على التعامل مع جميع أنواع الأثاث."
      },
      {
        name: "الفنيطيس",
        description: "نقدم خدمات نقل الأثاث الشاملة في منطقة الفنيطيس بمحافظة مبارك الكبير. نتعامل مع الفلل والمنازل الفاخرة بعناية خاصة. نضمن سلامة أثاثك من لحظة الفك وحتى التركيب."
      }
    ]
  }
]

// Services offered in each area
const services = [
  {
    id: "moving",
    title: "نقل الأثاث",
    description: "نقل الأثاث بأمان تام من وإلى جميع مناطق الكويت",
    icon: Truck,
    slug: "moving"
  },
  {
    id: "packing",
    title: "تغليف الأثاث",
    description: "تغليف احترافي للأثاث لحمايته من الخدوش والكسر",
    icon: Package,
    slug: "packing"
  },
  {
    id: "assembly",
    title: "فك وتركيب الأثاث",
    description: "فك وتركيب جميع أنواع الأثاث بأيدي فنيين محترفين",
    icon: PenTool,
    slug: "assembly"
  },
  {
    id: "storage",
    title: "تخزين الأثاث",
    description: "تخزين آمن للأثاث في مستودعات مؤمنة ومكيفة",
    icon: ShieldCheck,
    slug: "storage"
  }
]

export default function AreaPage({ params }: { params: { slug: string } }) {
  const [isVisible, setIsVisible] = useState(false)
  // Properly type and unwrap params
  const { slug } = use(params as any) as { slug: string }
  const area = areas.find((a) => a.slug === slug)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!area) {
    notFound()
  }

  return (
    <>


      <div className="bg-gradient-to-b from-background to-muted">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div 
                  className="inline-block rounded-lg px-3 py-1 text-sm text-white mb-4"
                  style={{ backgroundColor: area.color }}
                >
                  {area.estimatedTime}
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  خدمات نقل الأثاث في {area.name}
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  {area.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="tel:90905157" aria-label="اتصل بنا الآن" title="اتصل بنا الآن">
                      <Phone className="h-5 w-5" />
                      اتصل بنا الآن
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="https://wa.me/96590905157" aria-label="تواصل عبر الواتساب" title="تواصل عبر الواتساب">
                      تواصل عبر الواتساب
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={area.image}
                    alt={`نقل أثاث ${area.name}`}
                    fill
                    className="object-cover"
                  />
                  <div 
                    className="absolute top-0 left-0 w-full h-full opacity-20"
                    style={{ backgroundColor: area.color }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">مناطق {area.name}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                نقدم خدمات نقل الأثاث في جميع مناطق {area.name}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {area.neighborhoods.map((neighborhood, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-all border"
                  style={{ borderColor: `${area.color}30` }}
                >
                  <div 
                    className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: `${area.color}20`, color: area.color }}
                  >
                    <MapPin className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold">{neighborhood}</h3>
                </div>
              ))}
            </div>

            <div className="space-y-8 mt-16">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">تفاصيل خدماتنا في مناطق {area.name}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {area.neighborhoodDetails?.map((detail, index) => (
                  <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: area.color }}>{detail.name}</h3>
                      <p className="text-muted-foreground">{detail.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">خدماتنا في {area.name}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                نقدم مجموعة متكاملة من خدمات نقل الأثاث في {area.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const ServiceIcon = service.icon
                return (
                  <Link key={index} href={`/services/${service.slug}`} className="group" aria-label={`تفاصيل الخدمة ${service.title}`} title={`تفاصيل الخدمة ${service.title}`}>
                    <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <ServiceIcon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                        <p className="text-sm text-primary mt-4 flex items-center gap-1">
                          تفاصيل الخدمة
                          <ArrowRight className="h-4 w-4" />
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Special Notes Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${area.color}20`, color: area.color }}
                >
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">ملاحظات خاصة عن {area.name}</h3>
                  <p className="text-muted-foreground text-lg">{area.specialNotes}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Areas Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">مناطق أخرى نخدمها</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                نقدم خدماتنا في جميع محافظات الكويت
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {areas.filter(a => a.slug !== area.slug).map((otherArea, index) => (
                <Link key={index} href={`/areas/${otherArea.slug}`} className="group" aria-label={otherArea.name} title={otherArea.name}>
                  <div 
                    className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-all border"
                    style={{ borderColor: `${otherArea.color}30` }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center transition-colors group-hover:bg-opacity-100"
                      style={{ backgroundColor: `${otherArea.color}20`, color: otherArea.color }}
                    >
                      <MapPin className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">{otherArea.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">احصل على خدماتنا في {area.name} الآن</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                تواصل معنا للحصول على خدمات نقل الأثاث في {area.name} بأعلى مستويات الجودة وبأسعار تنافسية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="gap-2">
                  <Link href="tel:90905157" aria-label="اتصل بنا الآن" title="اتصل بنا الآن">
                    <Phone className="h-5 w-5" />
                    اتصل بنا الآن
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://wa.me/96590905157" aria-label="تواصل عبر الواتساب" title="تواصل عبر الواتساب">
                    تواصل عبر الواتساب
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
