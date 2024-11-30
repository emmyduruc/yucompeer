import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.provider.deleteMany();
  await prisma.tool.deleteMany();
  await prisma.category.deleteMany();

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
          imageUrl:
            'https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png',
          features: [
            'Auth',
            'Storage',
            'Realtime',
            'Functions',
            'Tables',
            'API',
            'CLI',
            'Webhooks',
            'Scheduled tasks',
            'Extensions',
          ],
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
          imageUrl:
            'https://www.ichdata.com/wp-content/uploads/2017/06/2024070803153850.png',
          features: [
            'Realtime database',
            'Cloud functions',
            'Hosting',
            'Auth',
            'Storage',
            'Analytics',
          ],
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
          imageUrl: 'https://saviynt.com/hubfs/aws.png',
          features: ['Compute', 'Storage', 'Database'],
          fitsFor: ['Large-scale apps', 'Enterprise solutions'],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: 0,
              features: [
                '750 hours EC2 t2.micro',
                '5GB S3',
                '30GB EBS',
                'RDS',
                'DynamoDB',
                'Lambda',
              ],
              limitations: '12 months limit',
            },
            {
              tierName: 'Pay-as-you-go',
              price: 0,
              features: [
                'Flexible pricing',
                'No upfront costs',
                'No long-term contracts',
                'No termination fees',
              ],
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
          imageUrl:
            'https://miit.edu.mu/wp-content/uploads/2023/08/google-cloud-logo-0.png',
          features: ['Compute', 'AI tools', 'Big Data'],
          fitsFor: [
            'AI-heavy apps',
            'Data processing workflows',
            'Web apps',
            'Mobile backends',
            'IoT apps',
            'Games',
            'DevOps',
            'Enterprise solutions',
          ],
          skillLevel: 'Intermediate',
          pricingTiers: [
            {
              tierName: 'Free',
              price: 0,
              features: [
                'F1-micro instance',
                '5GB storage',
                '1GB BigQuery',
                'Cloud Functions',
                'Cloud Run',
                'Cloud Build',
                'Cloud Storage',
                'Cloud Firestore',
                'Cloud Pub/Sub',
                'Cloud Scheduler',
                'Cloud Tasks',
                'Cloud Logging',
                'Cloud Monitoring',
                'Cloud Trace',
                'Cloud Debugger',
                'Cloud Console',
                'Cloud Shell',
                'Cloud IAM',
                'Cloud Billing',
                'Cloud Support',
                'Cloud Marketplace',
                'Cloud APIs',
                'Cloud SDK',
                'Cloud Mobile App',
                'Cloud Web Console',
              ],
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
          imageUrl: 'https://logos-marques.com/stripe-logo/stripe-logo/',
          features: [
            'Integrated payments',
            'Subscription billing',
            'Payouts',
            'Connect',
            'Radar',
          ],
          fitsFor: [
            'E-commerce',
            'Subscription services',
            'Marketplaces',
            'On-demand services',
            'Platforms',
            'Nonprofits',
          ],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: 2.9,
              features: [
                '2.9% + 30¢ per transaction',
                'No setup fees',
                'No monthly fees',
                'No hidden costs',
              ],
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
          imageUrl:
            'https://qpro.nl/wp-content/uploads/2024/02/Paypal_2014_logo-e1708092007619.png.webp',
          features: ['One-click checkout', 'Global reach'],
          fitsFor: [
            'E-commerce',
            'Cross-border transactions',
            'Marketplaces',
            'Nonprofits',
          ],
          pricingTiers: [
            {
              tierName: 'Standard',
              price: 2.9,
              features: [
                '2.9% + 30¢ per transaction',
                'No setup fees',
                'No monthly fees',
                'No hidden costs',
              ],
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
          imageUrl:
            'https://help.brevo.com/hc/article_attachments/12685441277458',
          features: [
            'Themes',
            'Plugins',
            'Managed hosting',
            'SEO tools',
            'Analytics',
            'E-commerce',
          ],
          fitsFor: [
            'Small businesses',
            'Personal blogs',
            'E-commerce',
            'News',
            'Portfolio',
          ],
          pricingTiers: [
            {
              tierName: 'Free',
              price: 0,
              features: [
                'Basic themes',
                'Community support',
                '3GB storage',
                'Free domain',
                'Jetpack essentials',
                'Dozens of free themes',
              ],
              limitations: 'Limited customization',
            },
            {
              tierName: 'Business',
              price: 25,
              features: [
                'Custom plugins',
                'Unlimited themes',
                '200GB storage',
                'SEO tools',
                'Google Analytics',
                'E-commerce',
              ],
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
