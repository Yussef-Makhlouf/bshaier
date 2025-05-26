import React from 'react';

interface LocalBusinessProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
}

export const LocalBusinessJsonLd: React.FC<LocalBusinessProps> = ({
  name,
  description,
  url,
  telephone,
  address,
  geo,
  openingHours,
  priceRange,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1].split('-')[0],
      closes: hours.split(' ')[1].split('-')[1],
    })),
    priceRange,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface ServiceProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string[];
  serviceType: string;
}

export const ServiceJsonLd: React.FC<ServiceProps> = ({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
    },
    areaServed: areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    serviceType,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface FAQProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQJsonLd: React.FC<FAQProps> = ({ questions }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface ReviewProps {
  itemReviewed: {
    name: string;
    image: string;
  };
  reviews: Array<{
    author: string;
    reviewRating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

export const ReviewJsonLd: React.FC<ReviewProps> = ({ itemReviewed, reviews }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: itemReviewed.name,
    image: itemReviewed.image,
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating,
        bestRating: '5',
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.reduce((sum, review) => sum + review.reviewRating, 0) / reviews.length,
      reviewCount: reviews.length,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
