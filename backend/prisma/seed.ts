import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Categories
  const categories = [
    {
      name: 'Databases',
      description: 'Relational and Non-relational database solutions.',
    },
    { name: 'Cloud Services', description: 'Cloud computing platforms.' },
    { name: 'Payment Services', description: 'Payment gateway solutions.' },
    { name: 'CMSs', description: 'Content Management Systems.' },
    {
      name: 'Project Management Tools',
      description: 'Tools for managing projects and teams.',
    },
  ];

  const categoryRecords = await Promise.all(
    categories.map((cat) => prisma.category.create({ data: cat })),
  );

  // Databases
  const databases = [
    {
      tool: {
        name: 'PostgreSQL',
        description: 'Relational database with strong ACID compliance.',
        type: 'Relational',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Supabase',
          description: 'PostgreSQL-powered backend-as-a-service.',
          imageUrl: 'https://logo.supabase.png',
          features: ['Auth', 'Storage', 'Realtime'],
          fitsFor: ['Web applications', 'Serverless backends'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Free',
              price: 0,
              features: ['10GB storage', '50MB database'],
              limitations: 'Limited support',
            },
            {
              tierName: 'Pro',
              price: 25,
              features: ['100GB storage', '1GB database'],
              limitations: 'No enterprise features',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Firebase',
        description: 'NoSQL backend-as-a-service by Google.',
        type: 'Non-relational',
        skillLevel: 'Beginner',
        categoryId: categoryRecords.find((c) => c.name === 'Databases')!.id,
      },
      providers: [
        {
          name: 'Firebase',
          description: 'NoSQL database and serverless platform.',
          imageUrl: 'https://logo.firebase.png',
          features: ['Realtime database', 'Cloud functions', 'Hosting'],
          fitsFor: ['Small apps', 'Serverless backends'],
          skillLevel: 'Beginner',
          pricingTiers: [
            {
              tierName: 'Spark',
              price: 0,
              features: ['1GB storage', '50K reads'],
              limitations: 'Limited usage',
            },
            {
              tierName: 'Blaze',
              price: 0,
              features: ['Pay-as-you-go'],
              limitations: 'Charges based on usage',
            },
          ],
        },
      ],
    },
  ];

  // Cloud Services
  const cloudServices = [
    {
      tool: {
        name: 'AWS',
        description: 'Comprehensive cloud computing platform by Amazon.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'AWS',
          description:
            'Amazon Web Services offering IaaS, PaaS, and SaaS solutions.',
          imageUrl: 'https://logo.aws.png',
          features: ['Compute', 'Storage', 'Database'],
          fitsFor: ['Large-scale apps', 'Enterprise solutions'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: 0,
              features: ['750 hours EC2 t2.micro', '5GB S3'],
              limitations: '12 months limit',
            },
            {
              tierName: 'Pay-as-you-go',
              price: 0,
              features: ['Flexible pricing'],
              limitations: 'Depends on usage',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'Google Cloud Platform',
        description: 'Cloud computing services by Google.',
        skillLevel: 'Intermediate',
        categoryId: categoryRecords.find((c) => c.name === 'Cloud Services')!
          .id,
      },
      providers: [
        {
          name: 'GCP',
          description:
            'Google Cloud Platform offering compute, storage, and AI services.',
          imageUrl: 'https://logo.gcp.png',
          features: ['Compute', 'AI tools', 'Big Data'],
          fitsFor: ['AI-heavy apps', 'Data processing workflows'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: 0,
              features: ['F1-micro instance', '5GB storage'],
              limitations: 'Usage limits',
            },
            {
              tierName: 'Sustained Use Discounts',
              price: 0,
              features: ['Automatic discounts'],
              limitations: 'Requires sustained usage',
            },
          ],
        },
      ],
    },
  ];

  // Payment Services
  const paymentServices = [
    {
      tool: {
        name: 'Stripe',
        description: 'Online payment processing for internet businesses.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'Stripe',
          description: 'Payment gateway for seamless transactions.',
          imageUrl: 'https://logo.stripe.png',
          features: ['Integrated payments', 'Subscription billing'],
          fitsFor: ['E-commerce', 'Subscription services'],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: 2.9,
              features: ['2.9% + 30¢ per transaction'],
              limitations: 'Per transaction cost',
            },
          ],
        },
      ],
    },
    {
      tool: {
        name: 'PayPal',
        description: 'Online payment system for global transactions.',
        categoryId: categoryRecords.find((c) => c.name === 'Payment Services')!
          .id,
      },
      providers: [
        {
          name: 'PayPal',
          description: 'Simplified payments for online businesses.',
          imageUrl: 'https://logo.paypal.png',
          features: ['One-click checkout', 'Global reach'],
          fitsFor: ['E-commerce', 'Cross-border transactions'],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: 2.9,
              features: ['2.9% + 30¢ per transaction'],
              limitations: 'High transaction fees',
            },
          ],
        },
      ],
    },
  ];

  // CMSs
  const cmsTools = [
    {
      tool: {
        name: 'WordPress',
        description: 'Open-source CMS for websites and blogs.',
        categoryId: categoryRecords.find((c) => c.name === 'CMSs')!.id,
      },
      providers: [
        {
          name: 'WordPress.com',
          description: 'Managed hosting for WordPress websites.',
          imageUrl: 'https://logo.wordpress.png',
          features: ['Themes', 'Plugins', 'Managed hosting'],
          fitsFor: ['Small businesses', 'Personal blogs'],
          pricingTiers: [
            {
              tierName: 'Free',
              price: 0,
              features: ['Basic themes'],
              limitations: 'Limited customization',
            },
            {
              tierName: 'Business',
              price: 25,
              features: ['Custom plugins', 'Unlimited themes'],
              limitations: 'Higher costs',
            },
          ],
        },
      ],
    },
  ];

  const allData = [
    ...databases,
    ...cloudServices,
    ...paymentServices,
    ...cmsTools,
  ];

  // Insert Tools and Providers
  for (const data of allData) {
    const tool = await prisma.tool.create({
      data: {
        ...data.tool,
        providers: {
          create: data.providers.map((provider) => ({
            ...provider,
            pricingTiers: { create: provider.pricingTiers },
          })),
        },
      },
    });

    console.log(`Seeded tool: ${tool.name}`);
  }

  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
